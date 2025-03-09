const babelParser = require("@babel/eslint-parser");
const react = require("eslint-plugin-react");
const prettier =require("eslint-plugin-prettier");
const configPrettier= require("eslint-config-prettier");

module.exports = [
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
        version: "detect"
      }
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
