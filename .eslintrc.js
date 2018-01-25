module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "arrowFunctions": true,
            "classes": true,
            "spread": true,
            "experimentalObjectRestSpread": true
        },
        "sourceType": "module",
        "ecmaVersion": 6
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "camelcase": 0,
        "indent": ["error", 4],
        "global-require": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": ["error", 4],
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "block-scoped-var": 0,
        "padded-blocks": 0,
        "no-console": 0,
        "id-length": 0,
        "no-unused-expressions": 0,
    }
  };
