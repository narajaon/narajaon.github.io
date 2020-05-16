module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/vue3-recommended"
  ],
  // TODO : fix warnings
  rules: {
    indent: ["warn", 2],
    "no-unused-vars": "warn",
    "no-undef": "warn",
    "vue/no-deprecated-slot-attribute": "warn",
    "vue/no-unused-components": "warn"
  }
};
