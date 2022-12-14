module.exports = {
    types: [
        {
            value: "๐ธ feat",
            name: "๐ธ feat: A new feature",
        },
        {
            value: "๐ fix",
            name: "๐ fix: A bug fix",
        },
        {
            value: "๐ docs",
            name: "๐ docs: Documentation only changes",
        },
        {
            value: "๐จ style",
            name: "๐จ style: Changes that do not affect the meaning of the code",
        },
        {
            value: "๐งฌ refactor",
            name: "๐งฌ refactor: A code change that neither fixes a bug nor adds a feature",
        },
        {
            value: "๐ค perf",
            name: "๐ค perf: A code change that improves performance",
        },
        {
            value: "๐งช test",
            name: "๐งช test: Adding missing tests",
        },
        {
            value: "๐ฉ chore",
            name: "๐ฉ chore: Changes to the build process or auxiliary tools and libraries",
        },
        {
            value: "๐ revert",
            name: "๐ revert: Revert to a commit",
        },
        {
            value: "โณ WIP",
            name: "โณ WIP: Work in progress",
        },
    ],

    scopes: [
        // { name: "accounts" },
        // { name: "admin" },
        // { name: "exampleScope" },
        // { name: "changeMe" },
    ],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: "TICKET-",
    ticketNumberRegExp: "\\d{1,5}",

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
  
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: "โ Select the type of change that you're committing:",
        scope: "\nDenote the SCOPE of this change (optional):",
        // used if allowCustomScopes is true
        customScope: "Denote the SCOPE of this change:",
        subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
        body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
        breaking: "List any BREAKING CHANGES (optional):\n",
        footer: "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
        confirmCommit:
            "Are you sure you want to proceed with the commit above?",
    },

    allowCustomScopes: true,
    allowBreakingChanges: ["feat", "fix"],
    // skip any questions you want
    skipQuestions: ["body"],

    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
}
