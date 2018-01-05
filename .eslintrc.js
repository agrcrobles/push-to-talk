module.exports = {
    parser: require.resolve("babel-eslint"),
  
    env: {
      es6: true
    },
  
    parserOptions: {
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
  
    plugins: ["import", "react"],
  
    rules: {
      "constructor-super": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-delete-var": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-semi": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-new-symbol": "error",
      "no-obj-calls": "error",
      "no-octal": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-self-assign": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unused-labels": "error",
      "no-unused-vars": "warn",
      "require-yield": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
  
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "off",
      "import/namespace": "off",
      "import/export": "error",
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-deprecated": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-commonjs": "warn",
      "import/no-amd": "error",
      "import/no-nodejs-modules": "off",
      "import/imports-first": "warn",
      "import/no-duplicates": "error",
      "import/no-namespace": "off",
      "import/extensions": ["error", { js: "never", json: "always" }],
      "import/order": "off",
      
      "react/display-name": "off",
      "react/forbid-prop-types": "off",
      "react/no-danger": "error",
      "react/no-deprecated": "error",
      "react/no-did-mount-set-state": "error",
      "react/no-did-update-set-state": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-is-mounted": "error",
      "react/no-multi-comp": "off",
      "react/no-set-state": "off",
      "react/no-string-refs": "error",
      "react/no-unknown-property": "error",
      "react/prefer-es6-class": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "error",
      "react/require-render-return": "error",
      "react/self-closing-comp": "error",
      "react/sort-comp": "warn",
      "react/sort-prop-types": "off",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-handler-names": "off",
      "react/jsx-key": "error",
      "react/jsx-no-bind": "off",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-literals": "off",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-sort-props": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prefer-stateless-function": "off",
  
    },
    "settings": {
          "import/resolver": {
              "node": {
                  "extensions": [".js", ".web.js"]
              }
          }
      },
    overrides: {
      files: ["**/__tests__/**/*.js", "**/?(*.)(spec|test).js"],
      env: {
        jest: true
      }
    }
  };