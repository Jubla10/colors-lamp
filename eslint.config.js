const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["public/js/**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.commonjs
      }
    },

    rules: {
      ...js.configs.recommended.rules
    }
  }
];