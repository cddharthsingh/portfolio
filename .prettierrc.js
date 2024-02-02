module.exports = {
    semi: true,
    printWidth: 120,
    trailingComma: "all",
    singleQuote: false,
    bracketSpacing: true,
    useTabs: false,
    arrowParens: "always",
    bracketSameLine: false,
    tabWidth: 4,
    plugins: [require("./merged-prettier-plugin.js")],
    importOrder: ["^@fullcalendar/(.*)", "^@/(.*)$", "^[./]"],
};
