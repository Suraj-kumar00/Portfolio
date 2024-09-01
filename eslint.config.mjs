import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

// Use `defineConfig` function from eslint if needed
export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      languageOptions: {
        globals: globals.browser,
      },
      plugins: {
        "@typescript-eslint": tseslint,
        react: pluginReact,
        prettier: pluginPrettier,
      },
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
        "plugin:prettier/recommended",
      ],
      rules: {
        // You can override rules here
        ...pluginPrettier.configs.recommended.rules,
      },
    },
  ],
};
