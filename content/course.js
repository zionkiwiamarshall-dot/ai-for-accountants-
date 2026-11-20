/* AI for Accountants — course content. Used by the learning site (index.html) and the ebook builder (ebook/build.js). */
(function (root) {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const P = (title, text) => `<div class="prompt" data-title="${title}"><pre>${esc(text.trim())}</pre></div>`;
  const TIP = (h) => `<div class="callout tip"><span class="label">Tip</span>${h}</div>`;
  const WARN = (h) => `<div class="callout warn"><span class="label">Watch out</span>${h}</div>`;
  const EX = (h) => `<div class="callout example"><span class="label">Illustrative example</span>${h}</div>`;

  root.COURSE = {
    id: "ai-for-accountants",
    title: "AI for Accountants",
    org: "AI Training Camp",
    eyebrow: "Self-paced course · 8 modules",
    heroTitle: "Close faster. Check smarter. <em>Explain numbers better.</em>",
    lead: "A hands-on course for accountants, bookkeepers and finance officers. Learn to use AI tools for spreadsheets, reconciliations, reporting and audit prep, without risking confidentiality or accuracy.",
    audience: "Built for finance teams in NGOs, small businesses, cooperatives and corporates anywhere in the world. No technical background needed.",
    certLine: "Practical use of AI tools in accounting, reporting, audit preparation and finance communication.",
    primary: "#3B5BDB",
    primaryDeep: "#2F49C2",
    ebook: "ebook/AI-for-Accountants.pdf",
    ebookSubtitle: "A practical guide to using AI tools in bookkeeping, reporting, audit preparation and finance communication",
    stages: [
      { name: "Foundations", desc: "Understand what AI can and cannot do with numbers, and how to keep client data safe.", modules: ["m1", "m2"] },
      { name: "Core skills", desc: "Write prompts that get finance-grade output, and use AI inside your spreadsheets.", modules: ["m3", "m4"] },
      { name: "Finance workflows", desc: "Apply AI to month-end, reporting, tax research and audit preparation.", modules: ["m5", "m6", "m7"] },
      { name: "Lead the change", desc: "Build your personal AI routine and help your team adopt it.", modules: ["m8"] }
    ],
    modules: [
      /* ============================ MODULE 1 ============================ */
      {
        id: "m1",
        title: "AI foundations for finance work",
        summary: "What AI tools actually are, where they help accountants most, and the one rule that keeps you safe: AI drafts, you verify.",
        minutes: 35,
        outcomes: ["Explain how AI chat tools work", "Name 5 strong and 5 weak uses in finance", "Apply the draft-and-verify rule"],
        lessons: [
          {
            title: "What an AI chat tool really is",
            html: `
<p>Tools like <strong>ChatGPT, Claude, Gemini and Microsoft Copilot</strong> are built on large language models. A language model has read a huge amount of text and learned to predict what words come next. That is why it writes fluent emails, explains IFRS concepts clearly and turns messy notes into a tidy memo.</p>
<p>It is also why it can be confidently wrong. The model is producing likely-sounding text, not looking facts up in a ledger. Unless the tool is connected to your data or to the web, it does not know your client's balances, this year's tax rates or what your auditor asked for last week.</p>
<h3>Three things every accountant should know</h3>
<ol>
  <li><strong>It is a language engine, not a calculator.</strong> Plain chat answers can get arithmetic wrong, especially with long lists of numbers. Some tools can run real calculations (for example ChatGPT's data analysis, or Copilot inside Excel), but you still check the result.</li>
  <li><strong>It does not know what it does not know.</strong> Ask about a tax rule it is unsure of and it may invent a plausible rate or section number. Accountants call this a fabricated source. AI people call it a <em>hallucination</em>.</li>
  <li><strong>Output quality follows input quality.</strong> A vague request gets a generic answer. A request with context, your format and your checks gets work you can use.</li>
</ol>
${TIP(`<p>Think of AI as a very fast, well-read junior staff member on their first day. Brilliant at drafting, structuring and explaining. Not yet trusted to sign anything off.</p>`)}
<h3>The tools you are likely to meet</h3>
<table>
<tr><th>Tool type</th><th>Examples</th><th>Good for</th></tr>
<tr><td>General AI chat</td><td>ChatGPT, Claude, Gemini</td><td>Drafting, explaining, summarising, brainstorming, reviewing text</td></tr>
<tr><td>AI inside office software</td><td>Copilot in Excel, Word and Outlook; Gemini in Google Sheets</td><td>Working directly on your files: formulas, summaries, email drafts</td></tr>
<tr><td>AI inside accounting software</td><td>Features in QuickBooks, Xero, Sage, Zoho Books</td><td>Transaction categorisation, bank matching suggestions, anomaly alerts</td></tr>
<tr><td>Document readers</td><td>Upload a PDF to a chat tool</td><td>Pulling figures and terms out of invoices, contracts and statements</td></tr>
</table>`
          },
          {
            title: "Where AI helps accountants, and where it doesn't",
            html: `
<p>The best uses are tasks that are <strong>heavy on words, structure or logic</strong> and where you can easily check the result. The worst uses are tasks where the AI would be the only source of truth.</p>
<table>
<tr><th>Strong uses</th><th>Weak or risky uses</th></tr>
<tr><td>Writing and explaining Excel formulas</td><td>Adding up a column of 300 numbers in chat</td></tr>
<tr><td>Drafting variance commentary from numbers you provide</td><td>Deciding the correct tax treatment on its own</td></tr>
<tr><td>Turning a messy process into a step-by-step checklist</td><td>Producing final figures for a report without a check</td></tr>
<tr><td>Summarising a 40-page contract for lease or revenue terms</td><td>Quoting the "current" tax rate without a primary source</td></tr>
<tr><td>Explaining a financial statement to a non-finance manager</td><td>Pasting identifiable client or payroll data into a public tool</td></tr>
<tr><td>Drafting policy, procedure and audit-request documents</td><td>Signing off audit evidence or professional judgements</td></tr>
</table>
${EX(`<p>A finance officer at a mid-sized NGO spends two days each quarter writing narrative for the donor's budget-versus-actual report. She now pastes the variance table (no staff names) into an AI tool with a clear prompt, gets a first draft in two minutes, then spends one hour correcting and adding context only she knows. Two days becomes half a day.</p>`)}
<h3>The real time savings</h3>
<p>Most accountants do not save time on the calculations themselves. They save it on the work <em>around</em> the numbers: writing explanations, building checklists, finding the right formula, reading long documents and replying to questions. That is where to start.</p>`
          },
          {
            title: "The golden rule: AI drafts, you verify",
            html: `
<p>Professional responsibility does not move to the software. If an AI-drafted note goes into a report with your name on it, the note is yours. So every AI output in finance goes through a quick verification step before it is used.</p>
<h3>The 4-check routine</h3>
<ol>
  <li><strong>Numbers:</strong> Does every figure match the source? Recalculate totals in your spreadsheet, never in chat.</li>
  <li><strong>Facts and rules:</strong> Is every rate, standard or legal reference confirmed from a primary source (the standard, the law, or the tax authority's or regulator's official website)?</li>
  <li><strong>Logic:</strong> Does the explanation actually follow from the numbers? AI sometimes gives a reason that sounds right but is not supported.</li>
  <li><strong>Fit:</strong> Is the tone, format and level of detail right for the reader?</li>
</ol>
${WARN(`<p>Be most careful when an answer is exactly what you hoped to hear. AI tools tend to agree with the way a question is framed. Ask "what could be wrong with this?" as a follow-up.</p>`)}
${P("Ask the AI to check itself", `
Review the answer you just gave me as a sceptical senior auditor would.
1. List every number, rate or rule you stated, and say how confident you are in each (high / medium / low).
2. Point out any assumption you made that I did not give you.
3. Tell me what I should verify against a primary source before using this.`)}
<p>This does not replace your own check. It makes your check faster by showing you where the weak spots are.</p>`
          }
        ],
        practice: {
          title: "Map your own week",
          brief: "Find the three tasks in your real work where AI would save you the most time, safely.",
          steps: [
            "List 10 tasks you did in the last two weeks. Include small ones like replying to queries or fixing formulas.",
            "Paste the list (no client names or figures) into an AI tool with the starter prompt below.",
            "Challenge the result. Move anything that would make the AI the only source of truth to the risky column.",
            "Pick the top three tasks to try during this course and write them in your notes."
          ],
          prompt: `
I am an accountant. Below is a list of tasks from my last two weeks.
For each task, tell me:
- whether AI could help (yes / partly / no)
- how it would help, in one sentence
- the main risk, in one sentence
- what I would still need to check myself
Then rank the top 3 tasks by time saved and low risk.
Put it all in a table.

My tasks:
[paste your list here]`,
          checklist: [
            "My list contains no client names, staff names or real figures",
            "I moved any task where AI would be the only source of truth to the risky column",
            "Each of my top three has a clear check I will do myself",
            "I wrote my top three tasks in my notes"
          ]
        },
        quiz: [
          { q: "Why can a plain AI chat answer get a long addition wrong?", options: ["It is deliberately inaccurate", "It predicts likely text rather than calculating like a spreadsheet", "It only works with whole numbers", "It needs an internet connection to add"], answer: 1, why: "Language models generate likely-sounding text. For reliable totals, use your spreadsheet or a tool that actually runs the calculation, then check it." },
          { q: "Which task is the strongest first use of AI for most accountants?", options: ["Deciding the tax treatment of a complex transaction", "Drafting variance commentary from a table you provide", "Producing final audited figures", "Looking up this year's tax rate without checking"], answer: 1, why: "Drafting words around numbers you supply is high value and easy to check. The others make the AI the source of truth." },
          { q: "An AI tool gives you a tax rate with a section number. What should you do?", options: ["Use it, since it gave a section number", "Ask the AI again to confirm it", "Confirm it from the primary source, such as the Act or the tax authority's website", "Round it to the nearest whole number"], answer: 2, why: "AI tools can invent plausible references. Only a primary source confirms a rate or rule." },
          { q: "Who is responsible for an AI-drafted note in a report you sign?", options: ["The AI company", "Nobody, because AI wrote it", "You", "Your IT department"], answer: 2, why: "Professional responsibility stays with you. That is why every output goes through the verification routine." }
        ]
      },

      /* ============================ MODULE 2 ============================ */
      {
        id: "m2",
        title: "Confidentiality, data protection and professional ethics",
        summary: "What you must never paste into an AI tool, how to anonymise data in two minutes, and how to use AI in line with your professional code.",
        minutes: 35,
        outcomes: ["Classify data as safe, anonymise or never", "Anonymise a dataset before using AI", "Document AI use for review"],
        lessons: [
          {
            title: "Green, amber, red: what you can share",
            html: `
<p>Accountants handle some of the most sensitive data in any organisation: salaries, bank details, tax IDs, client finances. Before you use any AI tool, decide which category your data falls into.</p>
<table>
<tr><th>Category</th><th>Examples</th><th>Rule</th></tr>
<tr><td><strong>Green</strong>: safe</td><td>Public standards, generic questions, formula help with made-up data, your own drafted text with no client details</td><td>Use any approved tool</td></tr>
<tr><td><strong>Amber</strong>: anonymise first</td><td>Trial balances, variance tables, transaction lists, contract terms</td><td>Remove names and identifiers, round or scale figures if needed, then use an approved tool</td></tr>
<tr><td><strong>Red</strong>: never in a public tool</td><td>Payroll with names, bank account numbers, national ID and TIN numbers, passwords, unreleased results of listed companies, anything under a confidentiality agreement</td><td>Only in an enterprise tool your organisation has approved for that data, or not at all</td></tr>
</table>
${WARN(`<p>Free consumer versions of AI tools may use your conversations to improve their models unless you switch this off. Enterprise and business plans usually do not, and offer stronger contracts. Check your tool's settings and your organisation's policy before you start.</p>`)}
<h3>The law applies too</h3>
<p>Most countries now have data protection laws, such as the GDPR in the EU and UK and national data protection acts across Africa, Asia and the Americas. They set rules for how personal data is collected, used and transferred, including to other countries. Sending personal data to an AI service hosted abroad can count as a cross-border transfer. When in doubt, anonymise or ask your data protection officer.</p>`
          },
          {
            title: "Anonymise in two minutes",
            html: `
<p>Most finance tasks do not need real names. The AI needs the <em>shape</em> of the data, not the identity of the people in it.</p>
<h3>A quick anonymising routine</h3>
<ol>
  <li><strong>Replace names with codes.</strong> "Bright Star Traders Ltd" becomes "Supplier A". Keep your key in a separate sheet that never leaves your computer.</li>
  <li><strong>Delete identifiers.</strong> Remove TINs, account numbers, phone numbers, emails and addresses.</li>
  <li><strong>Scale if needed.</strong> If the size of the figures is itself sensitive, multiply everything by the same factor (for example 0.37). Ratios and trends stay correct.</li>
  <li><strong>Strip hidden data.</strong> Copy values into a new sheet rather than uploading the original file, so comments, hidden tabs and file properties do not go with it.</li>
</ol>
${EX(`<p><strong>Before:</strong> "Salary advance to Jane Doe, staff ID 0457, 1,200,000, Account 01J2045..."<br><strong>After:</strong> "Salary advance to Employee 07, 1,200,000"</p>`)}
${P("Anonymise a list with AI (made-up data only)", `
I will paste a sample of column headings and 3 rows of FAKE data.
Write me step-by-step Excel instructions (or a formula) to:
1. replace every name in column B with a code like "Party 001"
2. create a separate key table mapping codes to names
3. remove columns that contain IDs, phone numbers or account numbers
I will run this on the real data myself, on my own computer.

[paste headings and 3 fake rows]`)}
${TIP(`<p>This pattern is useful throughout the course: show the AI fake or sample data, get the method, then apply the method yourself to the real data.</p>`)}`
          },
          {
            title: "Your professional code still applies",
            html: `
<p>Professional bodies such as IFAC, ACCA, ICAEW and national accounting boards expect members to follow the fundamental principles of <strong>integrity, objectivity, professional competence and due care, confidentiality and professional behaviour</strong>. AI does not change these principles. It changes how you apply them.</p>
<table>
<tr><th>Principle</th><th>What it means with AI</th></tr>
<tr><td>Integrity</td><td>Do not present AI output as independent analysis you did not do or check.</td></tr>
<tr><td>Objectivity</td><td>Be aware the AI may lean towards the answer your question implies. Ask for the opposing view.</td></tr>
<tr><td>Competence and due care</td><td>Understand the limits of the tool and verify its output before use.</td></tr>
<tr><td>Confidentiality</td><td>Apply the green, amber, red rule every time.</td></tr>
<tr><td>Professional behaviour</td><td>Follow your firm's AI policy and be open about AI use when it matters.</td></tr>
</table>
<h3>Keep a light AI log</h3>
<p>For anything that goes to a client, auditor, board or regulator, keep a short record: what tool you used, what for, and what you checked. A simple column in your working papers is enough.</p>
${EX(`<p><strong>AI use note:</strong> First draft of variance commentary produced with [tool] from anonymised table. All figures checked to TB on [date]. Explanations for lines 4 and 9 rewritten from management discussion. Reviewed by [name].</p>`)}`
          }
        ],
        practice: {
          title: "Anonymise a real working file",
          brief: "Take a real (amber) file you use often and make an AI-safe copy of it.",
          steps: [
            "Choose a file you use often, such as a transaction export, aged debtors list or variance table.",
            "Copy the values into a new workbook. Do not upload or paste the original.",
            "Apply the routine: codes for names, delete identifiers, scale if needed. Keep the key separate.",
            "Use the starter prompt with your anonymised copy to get a short summary, and confirm nothing identifying remains."
          ],
          prompt: `
Here is an anonymised dataset from my accounting work.
Before analysing it, scan it and tell me if you can see anything that still looks like personal or identifying information (names, IDs, phone numbers, account numbers, addresses). List exactly where.
Then give me a 5-bullet summary of what the data shows.

[paste anonymised data]`,
          checklist: [
            "I worked on a copy of the values, not the original file",
            "Every name is replaced by a code, and the key stays only on my computer",
            "IDs, account numbers, phone numbers and addresses are deleted",
            "I wrote an AI use note in my working notes"
          ]
        },
        quiz: [
          { q: "Payroll data with staff names and bank account numbers is…", options: ["Green: safe for any tool", "Amber: fine after rounding the figures", "Red: never in a public AI tool", "Fine if you delete it from the chat afterwards"], answer: 2, why: "Names plus bank details are highly sensitive personal data. Deleting a chat afterwards does not undo the transfer." },
          { q: "What is the main point of scaling all figures by the same factor?", options: ["It makes totals easier to add", "It hides the true size of the amounts while keeping ratios and trends correct", "It is required by IFRS", "It removes names automatically"], answer: 1, why: "Scaling keeps relationships intact, so the AI's analysis stays valid, without revealing the real amounts." },
          { q: "Why copy values into a new workbook before sharing?", options: ["It makes the file load faster", "Hidden tabs, comments and file properties stay behind", "AI tools cannot read formulas", "It changes the currency"], answer: 1, why: "Original files often carry hidden sheets, comments and author metadata that you did not mean to share." },
          { q: "Which is the best AI use note for a report going to the board?", options: ["None needed", "\"AI was used\"", "Tool, purpose, what you checked against source, and who reviewed it", "The full chat transcript pasted into the report"], answer: 2, why: "A short, specific note shows due care and lets a reviewer see what was verified." }
        ]
      },

      /* ============================ MODULE 3 ============================ */
      {
        id: "m3",
        title: "Prompting for finance-grade output",
        summary: "A simple 5-part prompt structure that turns generic AI answers into work you can actually use, plus how to iterate when the first answer misses.",
        minutes: 40,
        outcomes: ["Write prompts with the RCTFC structure", "Iterate on weak answers", "Build reusable prompt templates"],
        lessons: [
          {
            title: "The RCTFC structure",
            html: `
<p>Most poor AI answers come from short, vague prompts. Use five parts. You do not need all five every time, but the more you include, the better the answer.</p>
<table>
<tr><th>Part</th><th>Question it answers</th><th>Example</th></tr>
<tr><td><strong>R</strong>ole</td><td>Who should the AI act as?</td><td>"Act as a senior management accountant…"</td></tr>
<tr><td><strong>C</strong>ontext</td><td>What is the situation?</td><td>"…for a mid-sized NGO reporting quarterly to two donors…"</td></tr>
<tr><td><strong>T</strong>ask</td><td>What exactly should it do?</td><td>"…draft commentary on the five largest variances below…"</td></tr>
<tr><td><strong>F</strong>ormat</td><td>What should the output look like?</td><td>"…one short paragraph each, plain English, under 80 words…"</td></tr>
<tr><td><strong>C</strong>hecks</td><td>What limits and checks apply?</td><td>"…use only the figures I give you; if a reason is not clear, write [CONFIRM WITH MANAGER] instead of guessing."</td></tr>
</table>
${EX(`<p><strong>Weak:</strong> "Explain these variances."<br><strong>Strong:</strong> the full prompt below.</p>`)}
${P("Variance commentary (RCTFC)", `
Role: Act as a senior management accountant.
Context: I work for a mid-sized organisation. Below is our budget vs actual for Q3 in [currency]. Notes from the budget holders are in the last column.
Task: Draft commentary for the five largest variances by absolute value.
Format: One paragraph per variance, plain English, under 80 words each, starting with the line name in bold.
Checks: Use only the figures and notes I provide. Do not invent reasons. If the cause is unclear, write [CONFIRM WITH BUDGET HOLDER]. Do not recalculate totals.

[paste table]`)}
${TIP(`<p>The <strong>Checks</strong> part is what makes prompts finance-grade. Telling the AI exactly what to do when it does not know stops most invented answers.</p>`)}`
          },
          {
            title: "Iterate: the second prompt matters most",
            html: `
<p>Treat the first answer as a first draft. Experienced users rarely accept it as-is. Instead they give short, specific follow-ups.</p>
<h3>Useful follow-ups</h3>
<ul>
  <li><strong>Narrow it:</strong> "Shorter. Cut each paragraph to two sentences."</li>
  <li><strong>Change the reader:</strong> "Rewrite for a board member with no finance background."</li>
  <li><strong>Show the working:</strong> "Show the steps you used, so I can check them."</li>
  <li><strong>Challenge it:</strong> "What is the strongest argument that this conclusion is wrong?"</li>
  <li><strong>Fix one thing:</strong> "Keep everything except point 3, which is wrong because [reason]."</li>
</ul>
${P("Make the AI ask before answering", `
Before you answer, ask me up to 5 questions about anything you would need to know to do this well. Wait for my answers, then complete the task.

Task: [describe your task]`)}
<p>This is one of the most useful prompts in the course. It is especially good for policies, procedures and reports, where the AI would otherwise fill gaps with generic assumptions.</p>
${WARN(`<p>Long conversations drift. If a chat has gone on for many turns and the answers are getting worse, start a new chat and paste in a clean, complete prompt.</p>`)}`
          },
          {
            title: "Build your own prompt templates",
            html: `
<p>Once a prompt works, save it. A personal library of 10 to 15 tested prompts covers most of an accountant's repeated work. Use square brackets for the parts you change each time.</p>
${P("Template: explain a financial concept", `
Explain [concept, e.g. deferred income] to [reader, e.g. a programme manager with no finance background].
Use one simple example with round numbers from [our sector, e.g. a grant received in advance].
Keep it under 150 words. End with one sentence on why it matters to them.`)}
${P("Template: turn notes into a procedure", `
Turn my rough notes below into a clear step-by-step procedure for [process, e.g. petty cash replenishment].
Format: numbered steps, who does each step, and the evidence kept at each step.
Add a short "controls" section listing where errors or fraud could happen and the check that prevents it.
Ask me if any step is unclear rather than guessing.

[paste notes]`)}
${P("Template: review my draft", `
Review the draft below as a [reviewer, e.g. finance director].
List: (1) anything unclear, (2) anything that could be misread, (3) any claim not supported by the figures, (4) suggested wording fixes.
Do not rewrite the whole thing.

[paste draft]`)}
${TIP(`<p>Every prompt in this course is collected in the <strong>Prompt library</strong> page of this site. Copy them, adapt them and keep your own versions in a document your team can share.</p>`)}`
          }
        ],
        practice: {
          title: "Rebuild a weak prompt",
          brief: "Take a task from your top three (Module 1) and turn it into a tested, reusable RCTFC prompt.",
          steps: [
            "Write the short, lazy version of the prompt you would normally type, and run it.",
            "Rewrite it with all five RCTFC parts and run it again on the same anonymised input.",
            "Use at least two follow-ups to improve the answer.",
            "Save the final prompt as a template with [square brackets] for the parts you change."
          ],
          prompt: `
Here is a prompt I use at work. Improve it using this structure: Role, Context, Task, Format, Checks.
Make sure the Checks part tells the AI what to do when information is missing.
Then show me the improved prompt as a reusable template with [square brackets] for the parts I would change each time.

My prompt: [paste your short prompt]
What I use it for: [one sentence]`,
          checklist: [
            "My final prompt has all five parts: Role, Context, Task, Format, Checks",
            "The Checks part says what to do when information is missing",
            "I compared the short and long versions and noted the difference",
            "The template is saved with [square brackets] for variable parts"
          ]
        },
        quiz: [
          { q: "In RCTFC, what does the final C stand for?", options: ["Calculation", "Checks", "Context", "Conclusion"], answer: 1, why: "Checks set the limits: use only given figures, flag unknowns, do not invent reasons." },
          { q: "What is the best instruction for when the AI does not know a cause?", options: ["Guess the most likely reason", "Leave it blank", "Write a clear placeholder such as [CONFIRM WITH MANAGER]", "Use last year's reason"], answer: 2, why: "A visible placeholder stops invented answers and shows you exactly what to follow up." },
          { q: "A long chat is giving worse and worse answers. What should you do?", options: ["Keep going, it will improve", "Start a new chat with a clean, complete prompt", "Switch to all capital letters", "Ask it to try harder"], answer: 1, why: "Long conversations drift. A fresh chat with a complete prompt usually fixes it." },
          { q: "Why ask the AI to ask you questions first?", options: ["To slow it down", "So it fills gaps with your facts instead of generic assumptions", "It is required for long answers", "To test its memory"], answer: 1, why: "Questions surface missing context before the AI writes, so the answer fits your real situation." }
        ]
      },

      /* ============================ MODULE 4 ============================ */
      {
        id: "m4",
        title: "Excel and spreadsheets with AI",
        summary: "Get the right formula first time, understand inherited spreadsheets, clean messy exports and automate repeated steps.",
        minutes: 45,
        outcomes: ["Generate and test formulas", "Decode unfamiliar spreadsheets", "Clean bank and system exports"],
        lessons: [
          {
            title: "Writing formulas you can trust",
            html: `
<p>This is the quickest win for most accountants. Describe the result you want in plain words, name your columns, and say which version of Excel or Google Sheets you use. Newer functions such as <code>XLOOKUP</code>, <code>FILTER</code> and <code>LET</code> are not available in older Excel versions.</p>
${P("Get a formula", `
I use [Excel 365 / Excel 2016 / Google Sheets].
Sheet "Transactions" has: A = Date, B = Account code, C = Description, D = Amount, E = Cost centre.
Sheet "Summary" has account codes in column A and months (as real dates, first of month) in row 1, from B1.
Write a formula for cell B2 that totals Amount for that account code and that month, so I can copy it across and down.
Explain each part of the formula in one line.`)}
<h3>Always test the formula</h3>
<ol>
  <li>Pick two or three cells and check them by hand with a filter or a pivot table.</li>
  <li>Test an edge case: a month with no transactions, a negative amount, a code that does not exist.</li>
  <li>Check what happens when someone adds rows. Does the range still cover them?</li>
</ol>
${WARN(`<p>A formula can be correct and still be wrong for your data, for example if dates are stored as text or codes have trailing spaces. If results look odd, ask the AI: "What data problems could make this formula return the wrong result?"</p>`)}`
          },
          {
            title: "Understanding a spreadsheet you inherited",
            html: `
<p>Every finance team has a workbook nobody fully understands. AI is very good at explaining formulas line by line.</p>
${P("Explain a formula", `
Explain this Excel formula step by step in plain English, as if to a new accountant.
Then tell me: what could make it return a wrong answer, and how would you simplify it?

=IFERROR(INDEX(Rates!$C:$C,MATCH(1,(Rates!$A:$A=B5)*(Rates!$B:$B<=C5),0)),0)`)}
<p>For a whole model, list the sheets, what each one seems to do and a few key formulas. Ask the AI to map how the numbers flow from input sheets to the final report. You get a short "how this workbook works" note that the next person will thank you for.</p>
${P("Document a workbook", `
Below is a list of sheets in a workbook and the key formulas on each.
Write a one-page guide: purpose of each sheet, how data flows between them (inputs → calculations → outputs), which cells a user should change each month, and the 3 biggest risks of error.

[paste sheet names and key formulas]`)}`
          },
          {
            title: "Cleaning exports and automating repeats",
            html: `
<p>Bank statements, mobile money exports and system reports rarely arrive clean. Typical problems are dates as text, amounts with commas or "Dr/Cr" labels, merged headers and blank rows. AI can write the steps to fix them.</p>
${P("Clean a messy export", `
Here are the headers and 5 sample rows (fake values) from a bank statement export.
Problems: dates are text like "03/07/2026", amounts have commas, debits and credits are in one column with "DR" or "CR" at the end, and there are blank rows between pages.
Give me step-by-step instructions using [Power Query / formulas] to produce a clean table with: Date (real date), Description, Debit, Credit, Net amount.

[paste headers and sample rows]`)}
${TIP(`<p><strong>Power Query</strong> (Data → Get & Transform in Excel) records your cleaning steps, so next month you just click Refresh. Ask the AI to write the steps for Power Query rather than one-off formulas when the task repeats.</p>`)}
<h3>Macros and scripts</h3>
<p>AI can also write VBA macros (Excel) or Apps Script (Google Sheets). These are powerful, but a macro can delete or overwrite data. Rules:</p>
<ul>
  <li>Always run a new macro on a <strong>copy</strong> of the file first.</li>
  <li>Ask the AI to add comments explaining each line, and read them.</li>
  <li>Never run a macro that sends emails or touches files outside the workbook until you understand every line.</li>
</ul>
${EX(`<p>Using Copilot in Excel or Gemini in Sheets, you can ask directly: "Highlight duplicate invoice numbers in column C" or "Add a column showing days overdue from today". The same testing rules apply.</p>`)}`
          }
        ],
        practice: {
          title: "Fix one real spreadsheet problem",
          brief: "Use AI to solve a formula, cleaning or documentation problem you actually have.",
          steps: [
            "Choose a real problem: a formula you need, a workbook you do not understand, or a messy export.",
            "Describe it to the AI using fake sample data that has the same structure.",
            "Apply the answer to your real file on your own computer.",
            "Test it: check 3 cells by hand and try one edge case."
          ],
          prompt: `
I use [Excel version / Google Sheets]. My data looks like this (fake sample with the same structure):
[paste headers and 3 to 5 fake rows]

What I need: [describe the result in plain words]

Give me the formula or steps, explain each part briefly, and list 3 tests I should run to prove it works on my real data.`,
          checklist: [
            "I used fake sample data with the real structure, not real figures",
            "I checked at least 3 results by hand",
            "I tested at least one edge case (empty, negative or missing value)",
            "I noted in my working notes how long this would have taken without AI"
          ]
        },
        quiz: [
          { q: "Why tell the AI which version of Excel you use?", options: ["It changes the currency format", "Newer functions like XLOOKUP may not exist in older versions", "It is a legal requirement", "Older versions cannot open AI output"], answer: 1, why: "A formula with a function your version lacks will simply not work." },
          { q: "After getting a formula, what is the best first test?", options: ["Trust it if it has no errors", "Check two or three results by hand with a filter or pivot", "Ask the AI if it is correct", "Format the cells in bold"], answer: 1, why: "No error message does not mean a correct answer. A manual spot check proves it." },
          { q: "A cleaning task repeats every month. Which approach is best?", options: ["Do it manually each time", "Ask for Power Query steps so you can refresh next month", "Paste the full statement into chat monthly", "Delete the messy columns"], answer: 1, why: "Power Query records the steps once and repeats them with one click." },
          { q: "What is the safest way to run a new AI-written macro?", options: ["On the live file, at month end", "On a copy, after reading the commented code", "Only if it is short", "Never, macros are banned"], answer: 1, why: "Macros can overwrite data. Test on a copy and understand what each line does." }
        ]
      },

      /* ============================ MODULE 5 ============================ */
      {
        id: "m5",
        title: "Bookkeeping, reconciliations and month-end close",
        summary: "Use AI to categorise transactions, investigate reconciling items and run a tighter month-end checklist, while the ledger stays the source of truth.",
        minutes: 40,
        outcomes: ["Draft coding rules for transactions", "Investigate reconciliation exceptions", "Build a month-end close checklist"],
        lessons: [
          {
            title: "Coding transactions consistently",
            html: `
<p>Inconsistent coding causes most month-end headaches. Instead of asking AI to code every line (risky and slow to check), ask it to help you write <strong>clear coding rules</strong> that you and your team apply, or that your accounting software can use as bank rules.</p>
${P("Draft coding rules", `
Here is our chart of accounts (codes and names) and 30 anonymised sample bank descriptions with the account they were coded to.
1. Write a set of coding rules, for example "descriptions containing X go to account Y".
2. Flag any samples that look inconsistently coded.
3. List descriptions that are too vague to code by rule and need a human decision.
Present the rules as a table I can turn into bank rules.

[paste chart of accounts]
[paste samples]`)}
${TIP(`<p>Mobile money and bank descriptions are often cryptic. Ask the AI to group similar descriptions first ("cluster these by likely payee type"). The groups make rule writing much faster.</p>`)}
${WARN(`<p>AI suggestions for coding are suggestions. VAT treatment, capital vs revenue and donor-restricted vs unrestricted decisions need a human with the full facts.</p>`)}`
          },
          {
            title: "Investigating reconciliation exceptions",
            html: `
<p>The matching itself is best done in your accounting software or spreadsheet. AI helps with the part that takes thinking: <strong>explaining the leftovers</strong>.</p>
${P("Explain unreconciled items", `
Act as an experienced accountant reviewing a bank reconciliation.
Below are the unmatched items from the bank side and the ledger side (anonymised).
For each item, suggest the 2 most likely explanations (timing difference, duplicate, bank charge, error in amount, wrong account, etc.), and what evidence I should look for to confirm.
Also point out any pairs that might match each other despite small differences in amount or date.
Do not claim anything is confirmed.

Bank unmatched: [paste]
Ledger unmatched: [paste]`)}
${EX(`<p>The AI noticed that a ledger receipt of 1,250,000 and a bank credit of 1,248,500 three days later probably match, with a 1,500 transfer fee. The accountant confirmed it from the bank advice and posted the fee. Ten minutes instead of an hour of searching.</p>`)}
<h3>Common patterns AI is good at spotting</h3>
<ul>
  <li>Transposed digits (54,310 vs 53,410), where the difference divides by 9</li>
  <li>The same amount posted twice in the ledger</li>
  <li>Round-sum receipts split across several bank lines</li>
  <li>Recurring bank charges never posted</li>
</ul>`
          },
          {
            title: "A tighter month-end close",
            html: `
<p>A clear, owned checklist is the single best tool for a faster close. AI can turn your team's scattered knowledge into one.</p>
${P("Build a close checklist", `
Help me build a month-end close checklist for [type of organisation, e.g. an NGO with 3 donors and 40 staff].
Our systems: [e.g. QuickBooks, Excel payroll, two bank accounts and a mobile money account].
Organise it by day (Day -2 to Day +5), with: task, owner role, evidence produced, and the control it supports.
Include accruals, prepayments, payroll, bank and mobile money reconciliations, intercompany or fund transfers, fixed assets, and donor fund balances.
Ask me questions first if you need more detail.`)}
${P("Accruals prompt", `
Based on this list of recurring monthly costs and the invoices received so far this month, list the expenses that probably need accruing, with a suggested estimate method for each (last month, contract value, usage).
Mark which ones I must confirm with the budget holder.

Recurring costs: [paste]
Invoices received: [paste]`)}
${TIP(`<p>After each close, spend five minutes asking the AI: "Here are the problems we had this month. Suggest changes to the checklist to prevent them next month." Over a few months the checklist becomes very strong.</p>`)}`
          }
        ],
        practice: {
          title: "Draft your close checklist",
          brief: "Produce a month-end checklist for your organisation that you would actually use next month.",
          steps: [
            "List your systems, bank and mobile money accounts, and the main problems from the last two closes.",
            "Run the starter prompt and answer the AI's questions.",
            "Edit the result: remove what does not apply, add what only you know.",
            "Assign owners and share it with one colleague for comment."
          ],
          prompt: `
Help me build a month-end close checklist.
Organisation: [type and size]
Systems: [accounting software, payroll, banks, mobile money]
Problems in recent closes: [list]
Organise by day (Day -2 to Day +5), with task, owner role, evidence produced and the control it supports.
Ask me up to 5 questions before you start.`,
          checklist: [
            "Every task has an owner role and evidence",
            "Bank and mobile money reconciliations are included",
            "At least one task addresses a problem from a recent close",
            "I removed items that do not apply to my organisation"
          ]
        },
        quiz: [
          { q: "What is the best role for AI in transaction coding?", options: ["Code every transaction with no review", "Help write clear coding rules and flag inconsistencies", "Decide VAT treatment", "Replace the chart of accounts"], answer: 1, why: "Rules are reusable and checkable. Decisions like VAT or capital vs revenue need a person with the full facts." },
          { q: "A difference between two reconciling items divides exactly by 9. What does this often suggest?", options: ["A bank charge", "Transposed digits", "Foreign exchange", "A timing difference"], answer: 1, why: "Swapping two digits creates a difference divisible by 9. It is a classic error pattern." },
          { q: "Where should the actual matching in a bank reconciliation happen?", options: ["In the AI chat", "In your accounting software or spreadsheet", "On paper only", "In email"], answer: 1, why: "Matching belongs in the system of record. AI helps explain the leftovers." },
          { q: "What is a good habit after each month-end?", options: ["Delete the checklist", "Ask AI to suggest checklist changes based on that month's problems", "Skip the review if the close was on time", "Move all tasks to one person"], answer: 1, why: "Small improvements each month build a much stronger close process over time." }
        ]
      },

      /* ============================ MODULE 6 ============================ */
      {
        id: "m6",
        title: "Analysis, reporting and management packs",
        summary: "Turn numbers into clear stories for managers, boards and donors: variance analysis, ratio explanations and report drafting.",
        minutes: 40,
        outcomes: ["Draft variance and trend commentary", "Explain ratios to non-finance readers", "Structure a management or donor report"],
        lessons: [
          {
            title: "From numbers to insight",
            html: `
<p>Managers rarely want more numbers. They want to know <strong>what changed, why, and what to do</strong>. AI is a strong first-draft writer for this, as long as you give it the numbers and the known reasons.</p>
<h3>The "so what" structure</h3>
<ol>
  <li><strong>What happened:</strong> the movement, in figures and %</li>
  <li><strong>Why:</strong> the cause, from budget holders or your analysis</li>
  <li><strong>So what:</strong> the impact on the year, cash or targets</li>
  <li><strong>Now what:</strong> the action or decision needed</li>
</ol>
${P("Trend analysis", `
Below is monthly revenue and cost data for 12 months (scaled).
1. Describe the 3 most important trends in plain English.
2. Point out any month that looks unusual and suggest possible reasons I should check.
3. Suggest 2 charts that would show this best to a management team.
Use only the data given. Do not calculate new totals; I will do that in Excel.

[paste data]`)}
${TIP(`<p>Calculate percentages and totals in your spreadsheet first and paste them in. Then the AI only writes, and you never need to check its arithmetic.</p>`)}`
          },
          {
            title: "Explaining ratios and statements",
            html: `
<p>Much of an accountant's value is translation. AI makes it easier to explain finance in the reader's language.</p>
${P("Explain to a non-finance reader", `
Explain our current ratio of 0.8 and debtor days of 74 to a board of a [type of organisation] with no finance background.
Use one everyday comparison. Say why each matters for us, what "good" usually looks like in our sector (and say this varies), and one question the board should ask management.
Under 200 words.`)}
${P("Statement walk-through", `
Write a one-page "how to read our financial statements" guide for new programme managers.
Cover: statement of financial position, statement of income and expenditure, and cash flow, in simple terms.
Use examples from an organisation that receives restricted donor grants.
End with 5 questions a manager should ask every quarter.`)}
${WARN(`<p>"Good" benchmarks vary a lot by sector and country. If the AI gives a benchmark, treat it as a starting point and confirm from a reliable industry source or your own history.</p>`)}`
          },
          {
            title: "Drafting management and donor reports",
            html: `
<p>Use AI to build the <strong>structure</strong> and the <strong>first draft</strong>. Keep the figures, judgements and final wording with you.</p>
${P("Management pack outline", `
Create an outline for a monthly management accounts pack for [organisation].
Audience: [CEO and department heads]. Length: max 6 pages.
Include: a one-page summary with 5 key messages, KPIs, income and expenditure vs budget, cash and forecast, risks, and decisions needed.
For each section, say what figures I need to supply and what the commentary should answer.`)}
${P("Donor financial narrative", `
Draft the financial narrative section of a donor report.
Grant period: [dates]. Budget: [total]. Spent to date: [amount, %].
Main variances and reasons: [paste].
Tone: factual, transparent, no excuses. Explain underspends with a realistic plan to use the funds, and overspends with how they are being managed.
Mark anything that needs donor approval (such as budget realignment) with [REQUIRES DONOR APPROVAL].
Max 400 words.`)}
${EX(`<p>A good final step: paste your finished draft back in and ask, "Which sentences could a donor misread, or read as hiding a problem?" Fix those before you send it.</p>`)}`
          }
        ],
        practice: {
          title: "Write this month's commentary",
          brief: "Produce real commentary for a report you already prepare, in less than half the usual time.",
          steps: [
            "Prepare an anonymised or scaled variance table, with percentages calculated in Excel and known reasons noted.",
            "Use the starter prompt to get a first draft using the what, why, so what, now what structure.",
            "Rewrite anything that is wrong, vague or missing context.",
            "Ask the AI which sentences a reader could misread, and fix them."
          ],
          prompt: `
Act as a senior management accountant.
Below is our budget vs actual table with % already calculated, and notes on known reasons.
Draft commentary for the 5 most significant variances using: What happened, Why, So what, Now what.
Plain English, under 90 words each. Use only my figures and notes. Where a reason is missing, write [CONFIRM].
Then write a 3-bullet executive summary.

[paste table and notes]`,
          checklist: [
            "Every figure in the commentary matches my spreadsheet",
            "No reason appears that I cannot back up",
            "Every [CONFIRM] placeholder is resolved or removed",
            "I timed it and noted the time saved"
          ]
        },
        quiz: [
          { q: "What does the \"So what\" step add to commentary?", options: ["The exact figure", "The impact on the year, cash or targets", "The name of the budget holder", "The chart type"], answer: 1, why: "Readers need to know why a movement matters, not just that it happened." },
          { q: "Where should percentages and totals be calculated?", options: ["In chat by the AI", "In your spreadsheet, then pasted in", "Mentally", "They are not needed"], answer: 1, why: "If the AI only writes and never calculates, you avoid checking AI arithmetic entirely." },
          { q: "The AI says \"a healthy current ratio is 2.0\". What is the best response?", options: ["Put it in the board report", "Treat it as a rough starting point and confirm from sector data or your own history", "Ignore ratios", "Ask for a higher number"], answer: 1, why: "Benchmarks vary by sector and country. Generic figures need confirming." },
          { q: "In a donor narrative, why mark items with [REQUIRES DONOR APPROVAL]?", options: ["To make the report longer", "To make sure items that need donor consent are clearly raised, not hidden", "Donors require brackets", "To skip them"], answer: 1, why: "Transparency protects the relationship and keeps you within the grant agreement." }
        ]
      },

      /* ============================ MODULE 7 ============================ */
      {
        id: "m7",
        title: "Tax, compliance and audit preparation",
        summary: "Use AI to research faster, prepare better for audits and document controls, while every rule and rate is confirmed from a primary source.",
        minutes: 40,
        outcomes: ["Research tax questions safely", "Prepare audit request lists and responses", "Document internal controls"],
        lessons: [
          {
            title: "Tax research: a starting point, never the answer",
            html: `
<p>Tax rules change often, differ by country and depend on facts. AI is useful for <strong>framing the question</strong>, listing what to check and explaining concepts. It is not a reliable source for current rates, thresholds or deadlines.</p>
<h3>Safe tax research routine</h3>
<ol>
  <li>Use AI to understand the concept and list the questions you need answered.</li>
  <li>Go to the primary source: the Act and regulations, the tax authority's official website, official guidance and annual finance laws.</li>
  <li>For anything material or unusual, get advice from a qualified tax adviser.</li>
  <li>Document your sources in your working papers.</li>
</ol>
${P("Frame a tax question", `
I need to work out the tax treatment of [describe transaction, no client names] in [country].
Do not give me a final answer or quote rates.
Instead:
1. Explain the main tax concepts involved.
2. List the specific questions I need to answer from the law and official guidance.
3. List the facts I need to gather from the client.
4. Tell me which kinds of primary sources usually cover this.`)}
${WARN(`<p>If an AI tool quotes a rate, deadline or section number, treat it as unconfirmed until you have seen it in the official source. Finance acts change rates every year.</p>`)}`
          },
          {
            title: "Getting audit-ready",
            html: `
<p>Audits go faster when the auditor gets complete, well-organised evidence the first time. AI helps you plan, organise and write.</p>
${P("Prepared-by-client (PBC) list", `
Our year-end is [date]. We are a [type of organisation] with [main balances, e.g. grants, fixed assets, payroll, two bank accounts].
Draft a typical list of documents an external auditor is likely to request, grouped by financial statement area.
For each item, add who in our team usually holds it and a suggested file name.
Present it as a tracker table with columns: Area, Document, Owner, File name, Status.`)}
${P("Respond to an audit query", `
Here is an auditor's query and the facts I have. Draft a clear, factual response.
Do not admit or deny anything beyond the facts given. Mark any point where I need to attach evidence with [ATTACH: description].

Query: [paste]
Facts: [paste]`)}
${TIP(`<p>Ask the AI to play the auditor: "Here is our draft fixed asset note and register summary. What questions would an auditor ask?" You can then fix gaps before they become findings.</p>`)}`
          },
          {
            title: "Internal controls and policies",
            html: `
<p>Many organisations have controls that work but are not written down, which auditors and donors flag. AI is excellent at turning practice into documentation.</p>
${P("Document a control", `
Turn this description of how we approve payments into a formal control description.
Include: control objective, risk addressed, control activity, frequency, owner, evidence, and how it is reviewed.
Then list 3 weaknesses you can see and suggest improvements.

How we do it now: [describe]`)}
${P("Draft a policy", `
Draft a [policy, e.g. procurement / travel and per diem / asset management / AI use] policy for a [type and size] organisation.
Sections: purpose, scope, roles, procedure, approval limits (leave the limits as [AMOUNT] for me to fill), documentation, exceptions, review date.
Plain English, max 2 pages. Ask me 5 questions first.`)}
<h3>Using AI to spot risk</h3>
<p>Give the AI an anonymised list (for example vendor master data or a payments list) and ask for patterns worth investigating: duplicate bank details across suppliers, payments just below approval limits, round amounts, weekend postings. Treat these as <strong>leads for investigation</strong>, not findings.</p>
${WARN(`<p>Never put an accusation in writing based only on an AI-spotted pattern. Every pattern needs evidence and a proper process.</p>`)}`
          }
        ],
        practice: {
          title: "Build your audit tracker",
          brief: "Create a PBC tracker for your next audit or donor review, and stress-test one area.",
          steps: [
            "Run the PBC prompt for your organisation and adapt the list.",
            "Pick one high-risk area (such as grants, payroll or fixed assets).",
            "Ask the AI to act as the auditor and list questions for that area.",
            "Note which questions you cannot yet answer with evidence."
          ],
          prompt: `
Act as an external auditor planning the audit of a [type of organisation] with year-end [date].
For the [area, e.g. grant income and restricted funds] area:
1. List the main risks of misstatement.
2. List the questions and evidence you would request.
3. List the most common findings in this area for similar organisations.
Present as a table: Risk, Question, Evidence, Common finding.`,
          checklist: [
            "My tracker has an owner and file name for each document",
            "I adapted the generic list to my real balances",
            "I listed questions I cannot yet answer with evidence",
            "I did not put any rates or deadlines in without a primary source"
          ]
        },
        quiz: [
          { q: "What is the safest way to use AI for tax research?", options: ["Ask it for the current rate and use it", "Use it to frame the question, then confirm from primary sources", "Avoid tax entirely", "Use the rate if two AI tools agree"], answer: 1, why: "AI helps you understand and plan the research. Only official sources confirm current rules." },
          { q: "What is a PBC list?", options: ["A list of budget codes", "A list of documents the client prepares for the auditor", "A payroll report", "A tax form"], answer: 1, why: "Prepared-by-client lists organise audit evidence so the audit runs smoothly." },
          { q: "AI flags several payments just below an approval limit. What should you do?", options: ["Report it as fraud", "Treat it as a lead and investigate with evidence", "Ignore it", "Raise the approval limit"], answer: 1, why: "Patterns are leads, not findings. Investigate properly before drawing any conclusion." },
          { q: "When drafting a policy, why leave approval limits as [AMOUNT]?", options: ["AI cannot write numbers", "Limits are a management decision that you should set, not the AI", "It looks more professional", "Auditors prefer blanks"], answer: 1, why: "Limits depend on your organisation's size and risk appetite, so they are your call." }
        ]
      },

      /* ============================ MODULE 8 ============================ */
      {
        id: "m8",
        title: "Communication and your AI routine",
        summary: "Use AI to communicate finance clearly, then turn everything from this course into a weekly routine and a team roll-out plan.",
        minutes: 35,
        outcomes: ["Write clearer finance emails and explanations", "Set up a personal prompt library", "Plan a 30-day team roll-out"],
        lessons: [
          {
            title: "Clearer finance communication",
            html: `
<p>Finance teams lose a lot of time to back-and-forth: unclear requests, misunderstood reports, tense conversations about overspends. AI helps you get the message right the first time.</p>
${P("Hard message, right tone", `
Help me write an email to [role, e.g. a programme manager] explaining that [situation, e.g. their budget line is 30% overspent and new spending needs approval].
Tone: firm but supportive, not blaming. Include what happened, what it means, what I need from them and by when.
Under 150 words. Give me two versions: one more formal, one warmer.`)}
${P("Chase late documents", `
Write a short, polite reminder to [staff / supplier / client] asking for [documents] by [date], explaining why they are needed (month-end / audit / donor report).
Make it easy to reply to: list exactly what to send, and how.`)}
${P("Plain English for non-accountants", `
Rewrite this finance explanation in simple, plain English for staff who are not accountants and may read English as a second language.
Keep the meaning exact. Use short sentences. Explain any finance term the first time it appears.

[paste text]`)}
${TIP(`<p>Read the simplified version against the original before sending. Simplifying can quietly change a finance meaning, for example turning "accrued" into "paid".</p>`)}`
          },
          {
            title: "Your weekly AI routine",
            html: `
<p>Skills fade if they are not used. The accountants who benefit most build AI into a few <strong>fixed moments</strong> in their week instead of "when they remember".</p>
<table>
<tr><th>When</th><th>Routine</th></tr>
<tr><td>Monday</td><td>Paste your task list. Ask AI to help you prioritise and spot tasks it could speed up.</td></tr>
<tr><td>Daily</td><td>Formula help, email drafts, quick explanations.</td></tr>
<tr><td>Month-end</td><td>Reconciliation exceptions, accrual list, variance commentary first draft.</td></tr>
<tr><td>After each close</td><td>Ask for checklist improvements based on that month's problems.</td></tr>
<tr><td>Quarterly</td><td>Review and update your prompt library. Remove what you no longer use.</td></tr>
</table>
<h3>Your prompt library</h3>
<p>Keep your tested prompts in one shared document or note, grouped by task: Excel, close, reporting, audit, communication. For each prompt, add one line on when to use it and one known weakness. Start with the prompts from this course in the Prompt library page.</p>
${EX(`<p><strong>Entry:</strong> "Variance commentary v3. Use: monthly pack. Weakness: overstates certainty, so always keep the [CONFIRM] rule in."</p>`)}`
          },
          {
            title: "Bringing your team along",
            html: `
<p>One person using AI well helps. A whole team using it consistently changes how the function works. A simple 30-day plan:</p>
<table>
<tr><th>Week</th><th>Focus</th><th>Output</th></tr>
<tr><td>1</td><td>Agree the rules: approved tools, green-amber-red data, AI use notes</td><td>One-page AI use guideline</td></tr>
<tr><td>2</td><td>Everyone tries two safe tasks (formulas, email drafts)</td><td>Each person shares one win and one failure</td></tr>
<tr><td>3</td><td>Apply AI to one month-end task as a team</td><td>Shared prompts for that task</td></tr>
<tr><td>4</td><td>Measure and decide</td><td>Time saved, quality issues, what to scale next</td></tr>
</table>
${P("Draft your team's AI guideline", `
Draft a one-page AI use guideline for a finance team of [number] people at a [type of organisation].
Cover: approved tools, what data can and cannot be used (green / amber / red), verification before use, AI use notes for external reports, and who to ask when unsure.
Plain English, practical, no jargon.`)}
<h3>Measure what matters</h3>
<p>Track a few simple numbers before and after: hours on month-end, days to issue the management pack, number of audit queries, rework on reports. Real numbers make the case for wider adoption far better than enthusiasm does.</p>
${TIP(`<p>Congratulations on reaching the end. Finish the practice task and quiz to unlock your certificate, and keep using the Prompt library as your daily toolkit.</p>`)}`
          }
        ],
        practice: {
          title: "Plan your next 30 days",
          brief: "Leave the course with a written routine for yourself and a roll-out plan for your team.",
          steps: [
            "List the prompts from this course you will actually use, and save them in one place.",
            "Write your weekly routine using the table in lesson 2 as a starting point.",
            "Use the starter prompt to draft a 30-day roll-out plan for your team.",
            "Choose two numbers you will track to measure time saved."
          ],
          prompt: `
Help me plan a 30-day AI adoption plan for my finance team.
Team: [size and roles]. Organisation: [type]. Tools we can use: [list].
Our most time-consuming tasks: [list].
Our main concern: [e.g. confidentiality, accuracy, staff confidence].
Give a week-by-week plan with actions, owner, output, and 2 to 3 measures of success.
Keep it realistic for a busy team.`,
          checklist: [
            "My prompt library has at least 8 prompts I will actually use",
            "My weekly routine names specific days and tasks",
            "The team plan includes rules on data and verification",
            "I chose two measurable numbers to track"
          ]
        },
        quiz: [
          { q: "What makes an AI routine stick?", options: ["Using AI only when you remember", "Fixed moments in your week tied to real tasks", "Using as many tools as possible", "Long prompts only"], answer: 1, why: "Habits form around fixed triggers like Mondays and month-end, not good intentions." },
          { q: "What should week 1 of a team roll-out focus on?", options: ["Automating everything", "Agreeing rules: tools, data categories and verification", "Buying new software", "Measuring time saved"], answer: 1, why: "Clear rules first prevent confidentiality and accuracy problems later." },
          { q: "Why record a known weakness for each saved prompt?", options: ["To criticise the AI", "So you remember what to check every time you use it", "It is required by IFRS", "To make the library longer"], answer: 1, why: "Knowing a prompt's weak spot makes your verification faster and more focused." },
          { q: "What is the best way to make the case for wider AI use?", options: ["Enthusiastic emails", "Before-and-after numbers such as hours on month-end", "Using it secretly", "Waiting for IT"], answer: 1, why: "Measured results persuade managers far better than opinions." }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
