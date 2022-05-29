module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // It will slow down the lint performance
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
    "plugin:@intlify/vue-i18n/recommended",
    "plugin:vuejs-accessibility/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
    parser: "@typescript-eslint/parser",
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".vue"],
  },
  plugins: ["vue", "@typescript-eslint", "prettier", "vuejs-accessibility"],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off", // export default is bad
    "@typescript-eslint/unbound-method": "off", // for useI18n
    "vue/html-button-has-type": "error",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
      },
    ],
    "vue/custom-event-name-casing": ["error", "camelCase"],
    "vue/valid-define-props": "error",
    "vue/valid-define-emits": "error",
    "vue/v-for-delimiter-style": "error",
    "@intlify/vue-i18n/no-dynamic-keys": "error",
    "@intlify/vue-i18n/no-unused-keys": [
      "error",
      {
        extensions: [".js", ".vue", ".ts"],
      },
    ],
    "@intlify/vue-i18n/no-raw-text": "off",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
      },
    },
    "vue-i18n": {
      localeDir: "./src/locales/*.json",
      messageSyntaxVersion: "^9.0.0",
    },
  },
};
