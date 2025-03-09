import babelParser from "@babel/eslint-parser";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      prettier,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...configPrettier.rules,
      "prettier/prettier": "error",
      "react/prop-types": "off",
    },
  },
];
