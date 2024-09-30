module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      // extends: ["plugin:perfectionist/recommended-natural-legacy"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.build.json"],
      },
      env: {
        browser: true,
        es2022: true,
      },
      plugins: ["perfectionist"],
      settings: {
        perfectionist: {
          ignoreCase: false,
        },
      },
      rules: {
        "sort-keys": "off",
        "perfectionist/sort-objects": [
          "error",
          {
            ignoreCase: false,
            groups: ["dates"],
            customGroups: {
              dates: ["startDate", "endDate", "start_date", "end_date"],
            },
          },
        ],
      },
    },
  ],
};
