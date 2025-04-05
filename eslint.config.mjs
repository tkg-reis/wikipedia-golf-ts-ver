import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "**/*.config.js",
      "**/*.config.mjs",
    ],
  },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      quotes: ["error", "double"],
      "no-console": "error",
      camelcase: [
        "error",
        {
          properties: "never",
          allow: ["ALLOW"],
        },
      ],
      semi: ["error", "always"],
      'prettier/prettier': 'error',  // Prettierルールに違反したらエラー
    },
  },
  prettierConfig,
];
