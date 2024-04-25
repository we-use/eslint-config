import type { TypedFlatConfigItem } from "#/types/type";
import { configName } from "#/utils/naming";
import globals from "globals";
import js from "@eslint/js";

export function javascript(): TypedFlatConfigItem[] {
  const recommendedRules = js.configs.recommended.rules;

  return [{
    name: configName("javascript", "rules"),
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        document: "readonly",
        navigator: "readonly",
        window: "readonly",
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...recommendedRules,
      "array-callback-return": "error",
      "no-await-in-loop": "error",
      "no-constructor-return": "error",
      "no-duplicate-imports": "error", // conflict with type imports?
      "no-inner-declarations": "error",
      "no-promise-executor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-use-before-define": "error",
      "no-useless-assignment": "error",
      "default-case-last": "error",
      "eqeqeq": "error",
      "func-names": "error",
      "func-style": "error",
      "grouped-accessor-pairs": "error",
      "max-classes-per-file": "error",
      "max-depth": "error",
      "max-nested-callbacks": ["error", { max: 3 }],
      "new-cap": "error",
      "no-array-constructor": "error",
      "no-caller": "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-eq-null": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-extend-native": "error",
      "no-implicit-coercion": "error",
      "no-implicit-globals": "error",
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-param-reassign": "error",
      "no-plusplus": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-sequences": "error",
      "no-undef-init": "error",
      "no-undefined": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-constructor": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "no-void": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "require-unicode-regexp": "error",
      "yoda": "error",
    },
  }];
}
