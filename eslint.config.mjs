import prettier from "eslint-plugin-prettier";
import globals from "globals";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("eslint:recommended", "plugin:prettier/recommended"),
  {
    plugins: {
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": ["warn"],
      "no-console": "warn",
      "no-undef": "off",
      "node/no-unsupported-features/es-syntax": "off",
    },
  },
];
