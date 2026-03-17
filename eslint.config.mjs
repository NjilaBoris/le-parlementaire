import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

// Flat config compatible with ESLint v8.x and @eslint/js v8.x
export default defineConfig([
  // Base JS rules from @eslint/js
  js.configs.recommended,

  // Project-wide settings
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.browser },
  },

  // Ensure classic script mode for plain JS files when needed
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },

  // TypeScript recommended config
  tseslint.configs.recommended,
]);
