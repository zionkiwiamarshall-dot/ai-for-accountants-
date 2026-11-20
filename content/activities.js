/* AI for Accountants — interactive layer: activities, flashcards, diagrams, before/after examples, builder presets. */
(function (root) {
  root.EXTRAS = {
    heroArt: "hero-accounting",
    art: { m1: "ai-spark", m2: "shield", m3: "prompt", m4: "spreadsheet", m5: "reconcile", m6: "report", m7: "audit", m8: "team" },

    figures: {
      "m1:2": { art: "dg-verify", caption: "Every AI output in finance goes through this loop before it is used." },
      "m2:0": { art: "dg-traffic", caption: "Decide the category before you paste anything." },
      "m3:0": { art: "dg-rctfc", caption: "Five parts of a finance-grade prompt." },
      "m5:2": { art: "dg-close", caption: "A typical close calendar. Yours will differ: let AI help you write it down." },
      "m6:0": { art: "dg-sowhat", caption: "The structure managers actually want from commentary." }
    },

    compare: {
      "m3:0": {
        title: "Variance commentary: same data, two prompts",
        weak: {
          prompt: "Explain these variances.\n\n[table pasted]",
          output: "Overall, the organisation performed well this quarter, with some lines over and some under budget. Staff costs were higher, likely due to increased activity and inflation. Travel was lower, possibly reflecting cost-saving efforts. Management should continue monitoring spending closely.",
          verdict: "Generic, invents reasons (\"inflation\", \"cost-saving efforts\") and gives nothing a manager can act on."
        },
        strong: {
          prompt: "Role: Act as a senior management accountant.\nContext: Q3 budget vs actual below. Budget holder notes are in the last column.\nTask: Commentary on the 3 largest variances.\nFormat: One paragraph each, under 60 words, line name in bold.\nChecks: Use only my figures and notes. If a reason is missing, write [CONFIRM WITH BUDGET HOLDER].",
          output: "**Staff costs (+18%, 4.2m over).** Two field officers were hired in July, earlier than the budgeted October start, to support the new district project.\n\n**Travel (−35%, 1.1m under).** Two donor monitoring visits moved to Q4. [CONFIRM WITH BUDGET HOLDER: are both still planned?]\n\n**Rent (+9%).** [CONFIRM WITH BUDGET HOLDER]",
          verdict: "Specific, uses only real reasons, and flags exactly what to follow up. Ready to edit, not rewrite."
        }
      },
      "m4:0": {
        title: "Asking for a formula",
        weak: {
          prompt: "Formula to add up sales by month",
          output: "You can use =SUM(B2:B100) to add up your sales. If you want by month, you could create a pivot table.",
          verdict: "Doesn't know your columns, your Excel version or what 'by month' means in your layout."
        },
        strong: {
          prompt: "I use Excel 365. Sheet 'Transactions': A = Date, B = Account code, D = Amount. Sheet 'Summary': codes in A, months (first of month) in row 1 from B1.\nWrite a formula for B2 that totals Amount for that code and month, which I can copy across and down. Explain each part.",
          output: "=SUMIFS(Transactions!$D:$D, Transactions!$B:$B, $A2, Transactions!$A:$A, \">=\"&B$1, Transactions!$A:$A, \"<\"&EDATE(B$1,1))\n\n• $D:$D is the column to total\n• $B:$B = $A2 matches the account code (column locked)\n• the two date conditions keep only that month (row locked)",
          verdict: "Works first time, copies correctly, and you understand it well enough to check it."
        }
      },
      "m6:2": {
        title: "Donor narrative on an underspend",
        weak: {
          prompt: "Write the financial section of our donor report. We underspent.",
          output: "During the reporting period, the project demonstrated prudent financial management, resulting in savings. These savings reflect our commitment to value for money and efficient use of donor resources.",
          verdict: "Spins an underspend as 'savings', which donors often read as poor delivery or hiding a problem."
        },
        strong: {
          prompt: "Draft the financial narrative. Budget 120m, spent 78m (65%). Main reason: training rollout delayed 2 months by late materials approval. Plan: deliver remaining trainings in Q1.\nTone: factual and transparent. Mark anything needing donor approval with [REQUIRES DONOR APPROVAL]. Max 150 words.",
          output: "Expenditure to date is 78m against a budget of 120m (65%). The main underspend is in training activities, delayed by two months while training materials awaited approval. The remaining trainings are scheduled for Q1, and we expect to reach 95% utilisation by the end of the grant. If the delay continues, we will propose moving part of the training budget to follow-up mentoring [REQUIRES DONOR APPROVAL].",
          verdict: "Honest, specific, gives a credible plan and raises the approval issue early."
        }
      }
    },

    acts: {
      m1: [
        { type: "check", q: "A colleague says: \"AI looked it up and the rate is 18%.\" The tool was a plain chat with no web access. What is the most accurate description of what happened?", options: ["The AI searched an official database", "The AI generated a likely-sounding answer from patterns in its training data", "The AI calculated the rate from your ledger", "The AI copied the rate from your last report"], answer: 1, why: "Without web access or your data, a chat tool predicts likely text. The rate might be right, but it has not been looked up. Confirm it from the official source." },
        { type: "sort", prompt: "Good first use of AI, or risky?", bins: ["Good use", "Risky"], items: [
          ["Explaining an inherited VLOOKUP formula", 0], ["Totalling 400 invoice lines in chat", 1, "Use the spreadsheet for totals."], ["Drafting a reminder email for late receipts", 0],
          ["Deciding if a lease is a finance or operating lease, with no review", 1, "Judgement calls need you and the full facts."], ["Turning rough notes into a petty cash procedure", 0], ["Quoting this year's withholding tax rate in a client letter", 1, "Rates must come from a primary source."]] },
        { type: "spot", prompt: "This AI answer about a client's VAT position has problems. Find them.", context: "Question asked: \"Does our client need to register for VAT? Turnover last year was 85m.\"", lines: [
          ["Based on the turnover you shared, here is an initial view.", false],
          ["The registration threshold is 100m, as set out in Section 28(4) of the VAT Act.", true, "Threshold and section number are unverified and may be invented. Confirm from the law or the tax authority."],
          ["Your client's turnover is below this, so registration is not required.", true, "The conclusion relies on the unverified threshold, and ignores projected turnover and voluntary registration."],
          ["Thresholds and rules change, so check current guidance from the tax authority.", false],
          ["This analysis is fully compliant and can be sent to the client as final advice.", true, "No AI output is final advice. It needs your review and sign-off."]] }
      ],
      m2: [
        { type: "sort", prompt: "Green, amber or red? Sort each piece of data.", bins: ["Green", "Amber", "Red"], items: [
          ["IAS 16 wording on depreciation methods", 0, "Public standard."], ["A variance table with department names but no staff names", 1, "Fine once checked and, if needed, scaled."],
          ["Payroll export with names and bank account numbers", 2], ["Made-up sample rows to test a formula", 0],
          ["Supplier list with TINs and phone numbers", 2, "Remove identifiers first, and it becomes amber."], ["Aged debtors with client names replaced by codes", 1],
          ["Draft results of a listed company before announcement", 2, "Price-sensitive and confidential."]] },
        { type: "order", prompt: "Put the anonymising routine in the right order.", steps: ["Copy the values into a new workbook", "Replace names with codes and keep the key separately", "Delete IDs, account numbers, phone numbers and addresses", "Scale the figures if their size is sensitive", "Check nothing identifying remains, then use the approved tool"], why: "Working on a copy first means hidden data never leaves your file." },
        { type: "scenario", art: "shield", situation: "Your manager needs a payroll summary in 20 minutes. She says: \"Just paste the payroll sheet into ChatGPT on your phone and ask it to summarise.\"", ask: "What do you do?", choices: [
          ["Paste it in. The manager asked, so it's her responsibility.", 0, "Confidentiality is your duty too. Names and salaries in a personal account is a red-category breach."],
          ["Build the summary with a pivot table, or paste only anonymised totals by department into an approved tool.", 2, "Fast, safe and still uses AI where it adds value. Explain why in one line."],
          ["Refuse and don't produce a summary.", 1, "Safe, but unhelpful. There is a quick safe route."],
          ["Paste it, then delete the chat afterwards.", 0, "Deleting the chat does not undo sending the data."]] }
      ],
      m3: [
        { type: "builder", prompt: "Build a finance-grade prompt for accruals.", template: "Role: Act as {role}.\nContext: {context}\nTask: {task}\nFormat: {format}\nChecks: {checks}", fields: [
          { key: "role", label: "Role", placeholder: "an experienced financial accountant", example: "an experienced financial accountant reviewing month-end" },
          { key: "context", label: "Context", placeholder: "who you are and what data you are giving", example: "Below is our list of recurring monthly costs and the invoices received so far for March." },
          { key: "task", label: "Task", placeholder: "what it should produce", example: "List the costs that probably need accruing, with a suggested estimate method for each." },
          { key: "format", label: "Format", placeholder: "how it should look", example: "A table with columns: cost, estimate method, suggested amount basis, confirm with whom. Max 15 rows." },
          { key: "checks", label: "Checks", placeholder: "limits and what to do when unsure", example: "Use only my lists. Do not invent amounts. If unsure, write [CONFIRM]." }] },
        { type: "check", q: "The AI's commentary is good except paragraph 3, which states the wrong reason. What's the best follow-up?", options: ["Start again with a new prompt", "\"Keep everything except paragraph 3. The real reason is the delayed grant receipt. Rewrite only that paragraph.\"", "\"That's wrong, try harder.\"", "Edit all paragraphs yourself from scratch"], answer: 1, why: "Short, specific follow-ups that keep what works are the fastest way to a good final draft." },
        { type: "scenario", art: "prompt", situation: "You asked AI to draft a travel and per diem policy. It came back generic, with rules that don't fit your organisation at all.", choices: [
          ["Use it anyway and fix it later.", 0, "Generic policies create audit findings when practice doesn't match the policy."],
          ["Re-run with: \"Ask me up to 5 questions first\" and give your size, donors, approval levels and current practice.", 2, "Questions first fills the gaps with your facts, not generic assumptions."],
          ["Ask it to make the policy longer.", 0, "Longer and generic is still generic."],
          ["Give up on AI for policies.", 1, "Policies are a strong use case. The prompt was the problem."]] }
      ],
      m4: [
        { type: "scenario", art: "spreadsheet", situation: "An AI-written SUMIFS formula returns 0 for March, even though you can see March transactions in the data.", ask: "What is the most likely cause to check first?", choices: [
          ["The AI formula is useless. Rebuild by hand.", 0, "The formula may be fine. The data is often the issue."],
          ["The dates in your data are stored as text, so the date conditions never match.", 2, "Very common with exports. Ask the AI: 'What data problems could make this return the wrong result?'"],
          ["Excel needs restarting.", 0, "Unlikely to be the cause."],
          ["March has 31 days, which confuses formulas.", 0, "Month length does not break SUMIFS."]] },
        { type: "check", q: "In =IFERROR(INDEX(Rates!C:C, MATCH(…)), 0), what does IFERROR do here?", options: ["Highlights errors in red", "Returns 0 instead of an error when no match is found", "Fixes wrong matches automatically", "Rounds the result"], answer: 1, why: "IFERROR hides errors by returning 0. That's convenient, but it can also hide real problems, such as a missing rate. Ask the AI about risks like this." },
        { type: "sort", prompt: "Which approach fits each task best?", bins: ["Power Query", "Formula", "Macro (on a copy)"], items: [
          ["Cleaning the same bank export every month", 0, "Record once, refresh monthly."], ["Totalling sales by account and month in a summary sheet", 1],
          ["Creating 40 separate PDF statements from one sheet", 2, "Repetitive file actions suit a macro. Test on a copy."], ["Combining 12 monthly CSV files into one table", 0],
          ["Showing days overdue for each invoice", 1]] }
      ],
      m5: [
        { type: "sort", prompt: "Can a coding rule handle it, or does it need a human decision?", bins: ["Rule", "Human decision"], items: [
          ["Monthly internet bill from the same provider", 0], ["A 9m laptop purchase: capital or expense?", 1, "Capitalisation policy and judgement."],
          ["Bank charges with the description 'SMS ALERT FEE'", 0], ["A payment that might be charged to Donor A or Donor B", 1, "Donor allocation depends on agreements."],
          ["Recurring rent to the same landlord", 0], ["A mobile money transfer described only as 'TRF 0745…'", 1, "Too vague for a rule. Find out what it was."]] },
        { type: "check", q: "Ledger shows a receipt of 1,250,000 on 3 March. Bank shows a credit of 1,248,500 on 6 March. No other unmatched items are close. Most likely explanation?", options: ["Fraud", "The same receipt, with a 1,500 transfer fee deducted by the bank", "Two unrelated transactions", "A transposition error"], answer: 1, why: "Close amount, short delay, and a round difference that looks like a fee. Confirm it from the bank advice, then post the fee." },
        { type: "order", prompt: "Put these month-end tasks in a sensible order.", steps: ["Send cut-off reminders to budget holders", "Complete bank and mobile money reconciliations", "Post accruals, prepayments and payroll journals", "Review balances and investigate variances", "Issue the management pack"], why: "Reconciled cash first, then adjustments, then review, then reporting." }
      ],
      m6: [
        { type: "order", prompt: "Arrange this commentary into the 'so what' structure.", steps: ["Fuel costs were 22% (3.1m) over budget in Q2.", "Pump prices rose twice and two extra field trips were added for the evaluation.", "At this rate, transport will be 6m over budget for the year.", "We propose cutting one planned trip in Q4 and moving 2m from contingency: decision needed by 15 July."], why: "What happened → Why → So what → Now what. Each line answers the reader's next question." },
        { type: "spot", prompt: "This AI draft for the board has problems. Find them.", context: "Data given: current assets 40m, current liabilities 50m, debtor days 74.", lines: [
          ["Our current ratio is 0.8, meaning we hold 0.80 of short-term assets for every 1.00 of short-term debt.", false],
          ["A healthy current ratio for every organisation is exactly 2.0.", true, "Benchmarks vary by sector and organisation. Never state one as universal."],
          ["Debtor days of 74 mean customers take on average about two and a half months to pay.", false],
          ["This is mainly because customers are dissatisfied with our services.", true, "Invented cause: no data supports it. Mark it [CONFIRM] or find the real reason."],
          ["The board should ask what is driving slow collections and how cash will be managed over the next quarter.", false],
          ["Since current assets are 45m, we are close to the safe level.", true, "Wrong figure: you gave 40m. Always check numbers against the source."]] },
        { type: "scenario", art: "report", situation: "Your donor report shows 35% underspend. The programme manager asks you to describe it as 'efficiency savings'.", choices: [
          ["Agree. It sounds better.", 0, "Donors usually see through this, and it can damage trust if delivery is behind."],
          ["Explain the real cause and the plan to use the funds, and flag any needed approvals.", 2, "Transparency protects the relationship and the grant."],
          ["Leave the underspend out of the narrative.", 0, "Omitting material variances is misleading."],
          ["Say 'savings' but add the real reason in a footnote.", 1, "Better than hiding it, but the headline still misleads."]] }
      ],
      m7: [
        { type: "scenario", art: "audit", situation: "AI says a client transaction is exempt from withholding tax and quotes a specific section of the Act.", ask: "What's your next step?", choices: [
          ["Use it in the advice letter. It quoted a section.", 0, "Section numbers can be invented. Never rely on them unverified."],
          ["Read that section in the official Act or tax authority guidance, and check the facts fit. Get a tax specialist's view if it's material.", 2, "Primary source plus judgement. Record the source in your working papers."],
          ["Ask a second AI tool to confirm.", 1, "Two AIs agreeing is not a primary source."],
          ["Ignore the AI and guess.", 0, "The AI was useful for framing. Now verify it."]] },
        { type: "builder", prompt: "Build a prompt to answer an auditor's query.", template: "Here is an auditor's query and the facts I have.\nQuery: {query}\nFacts: {facts}\nDraft a {tone} response under {length} words. Do not admit or deny anything beyond these facts. Mark where evidence is needed with [ATTACH: description].", fields: [
          { key: "query", label: "Auditor's query", placeholder: "paste or summarise the query", example: "Please explain the 14m increase in prepayments compared with last year." },
          { key: "facts", label: "Facts you know", placeholder: "what actually happened", example: "We paid 12 months of office insurance (10m) and software licences (4m) in advance in December." },
          { key: "tone", label: "Tone", placeholder: "e.g. clear, factual", example: "clear, factual and polite" },
          { key: "length", label: "Max words", placeholder: "e.g. 150", example: "150" }] },
        { type: "sort", prompt: "Is this a lead to investigate, or a finding you can report?", bins: ["Lead", "Finding"], items: [
          ["AI flagged 6 payments just below the approval limit", 0, "A pattern, not evidence. Investigate."],
          ["Two suppliers share the same bank account, confirmed with bank details and no explanation on file", 1],
          ["Several round-sum payments on weekends", 0],
          ["An invoice paid twice, with both payments traced to the bank statement", 1],
          ["AI says a vendor name 'looks suspicious'", 0]] }
      ],
      m8: [
        { type: "spot", prompt: "This AI-drafted email to a programme manager about an overspend has tone problems. Find them.", lines: [
          ["Hi Sam, I'm writing about the Q3 position on the outreach budget line.", false],
          ["Once again, your team has completely ignored the budget.", true, "Blaming and absolute. It will start a defensive reply instead of a solution."],
          ["The line is currently 30% over budget, mainly from additional community events.", false],
          ["Going forward, any new spending on this line will need my approval first.", false],
          ["I expect you to fix this immediately or I will escalate it.", true, "Threatening tone. Say what you need and by when instead."],
          ["Could we meet on Thursday to agree a plan for Q4?", false]] },
        { type: "check", q: "Which is the best entry for your prompt library?", options: ["\"Commentary prompt\"", "\"Variance commentary v3. Use: monthly pack. Weakness: overstates certainty, so keep the [CONFIRM] rule.\"", "The full chat history", "\"Good prompt, works well\""], answer: 1, why: "Name, when to use it and its known weakness make the prompt reusable and safe." },
        { type: "order", prompt: "Order the 30-day team roll-out.", steps: ["Agree rules: approved tools, data categories, verification", "Everyone tries two safe tasks and shares one win and one failure", "Apply AI to one month-end task together and save shared prompts", "Measure time saved and quality, then decide what to scale"], why: "Rules first, then safe practice, then real work, then evidence." }
      ]
    },

    terms: {
      m1: [["Large language model (LLM)", "The technology behind AI chat tools: a model trained on huge amounts of text that predicts likely next words."], ["Hallucination", "When an AI states something false with confidence, such as an invented rate, section number or source."], ["Primary source", "The original authority for a fact: the standard, the law, the regulator's website, the ledger."], ["Draft-and-verify", "The rule that AI produces drafts and a professional checks numbers, facts, logic and fit before use."], ["Copilot", "AI built into Microsoft 365 apps such as Excel, Word and Outlook."]],
      m2: [["Anonymisation", "Removing or replacing identifiers so data can't be linked back to a person or client."], ["Cross-border transfer", "Sending personal data to a service or server in another country, which data protection laws regulate."], ["Data protection law", "Rules on collecting, using and transferring personal data, such as the GDPR or national data protection acts."], ["Enterprise AI plan", "A business version of an AI tool, usually with stronger data protections and contracts."], ["AI use note", "A short record of the tool used, what for, and what you checked."]],
      m3: [["RCTFC", "Role, Context, Task, Format, Checks: the five-part prompt structure."], ["Iteration", "Improving an AI answer with short, specific follow-up prompts."], ["Placeholder", "A visible marker such as [CONFIRM] that the AI uses instead of guessing."], ["Prompt template", "A tested prompt saved with [square brackets] for the parts you change."], ["Context drift", "When a long chat gets worse over time. Fix it by starting fresh."]],
      m4: [["SUMIFS", "Excel function that totals values meeting one or more conditions."], ["XLOOKUP", "Modern Excel lookup function (Excel 365 and 2021+). It replaces VLOOKUP and INDEX/MATCH."], ["Power Query", "Excel's tool for recording data-cleaning steps you can refresh each month."], ["Edge case", "An unusual input, such as blank, negative or missing, used to test a formula."], ["Macro (VBA)", "Code that automates Excel actions. Always test on a copy."]],
      m5: [["Bank rule", "A rule in accounting software that codes matching transactions automatically."], ["Reconciling item", "A difference between the bank and the ledger that needs explaining."], ["Transposition error", "Swapped digits (54,310 vs 53,410). The difference divides by 9."], ["Accrual", "An expense recognised in the period incurred, before the invoice arrives."], ["Close checklist", "The ordered, owned list of month-end tasks and evidence."]],
      m6: [["Variance analysis", "Explaining differences between actual and budget or prior period."], ["So what / Now what", "Commentary that explains impact and the action needed, not just the movement."], ["Current ratio", "Current assets ÷ current liabilities: a measure of short-term liquidity."], ["Debtor days", "Average days customers take to pay: (receivables ÷ revenue) × 365."], ["Management pack", "A regular report for leaders: summary, KPIs, results, cash, risks, decisions."]],
      m7: [["PBC list", "Prepared-by-client list: documents the auditor requests from you."], ["Internal control", "A process step that prevents or detects errors or fraud, such as an approval or reconciliation."], ["Control objective", "What a control is meant to achieve, such as 'only authorised payments are made'."], ["Lead vs finding", "A pattern worth investigating vs a conclusion backed by evidence."], ["Professional scepticism", "A questioning mind: critically assessing evidence, including AI output."]],
      m8: [["Prompt library", "Your saved, tested prompts with when to use each and its known weakness."], ["Adoption plan", "A staged plan for a team to start using AI safely and consistently."], ["AI use guideline", "One page setting the team's rules on tools, data and verification."], ["Baseline", "The 'before' measurement, such as hours on month-end, used to prove time saved."], ["Plain English", "Clear, simple wording for non-specialist readers without losing accuracy."]]
    },

    presets: [
      { name: "Variance commentary", role: "a senior management accountant", context: "I work for a mid-sized organisation. Below is our Q3 budget vs actual with % already calculated, and notes from budget holders.", task: "Draft commentary on the 5 largest variances using: what happened, why, so what, now what.", format: "One paragraph each, under 80 words, line name in bold, then a 3-bullet executive summary.", checks: "Use only my figures and notes. Do not recalculate. If a reason is missing, write [CONFIRM WITH BUDGET HOLDER].", ask: false },
      { name: "Excel formula", role: "an Excel expert who explains clearly", context: "I use Excel 365. Sheet 'Transactions': A = Date, B = Account code, D = Amount. Sheet 'Summary' has codes in column A and months in row 1.", task: "Write a formula for Summary!B2 that totals Amount by code and month, which I can copy across and down.", format: "The formula, then one line explaining each part, then 3 tests I should run.", checks: "Use only functions available in Excel 365. If my layout is unclear, ask before answering.", ask: false },
      { name: "Policy draft", role: "a finance controls specialist", context: "We are an NGO with 40 staff, 3 donors and one finance office. We need a procurement policy that matches how we actually work.", task: "Draft a procurement policy.", format: "Sections: purpose, scope, roles, procedure, approval limits, documentation, exceptions, review date. Max 2 pages.", checks: "Leave approval limits as [AMOUNT]. Do not invent donor rules. Ask me if something is unclear.", ask: true }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
