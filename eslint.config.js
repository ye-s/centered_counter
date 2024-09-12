import globals from "globals";
import pluginJs from "@eslint/js";
import tsParser from '@typescript-eslint/parser';
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { languageOptions: { globals: { ...globals.browser }, parser: tsParser,
        ecmaVersion: 12,
        sourceType: 'module' } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'dist', 'public']
  },
  eslintConfigPrettier,
];
