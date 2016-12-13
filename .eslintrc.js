module.exports = {
    "extends": [
        "standard",
        "standard-react"
    ],
    "plugins": [
        "import"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
        // Semicolons please. Always.
        "semi": [
            "error",
            "always"
        ],

        // After import statements we use to blank lines, but more should not be
        "no-multiple-empty-lines": [
            "error", {
                "max": 2,
                "maxEOF": 1
            }
        ],

        // see: http://eslint.org/docs/rules/operator-linebreak
        // We don't use a consistent way. Do what makes sense at that place
        "operator-linebreak": "off",

        // having doublequotes in JSX look more like HTML
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],

        // We define it as "local", to ensure, that vars defined in /*globals */ directive
        // Don't have to be used.
        "no-unused-vars": [
            "warn", {
                vars: "local",
                args: "after-used"
            }
        ],

        // We use 4 indentations.
        // Switch cases can use a block (if you use const within), so we indent those
        "indent": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],

        // Unintentionally shadowing vars can lead to unexpected behaviour
        "no-shadow": [
            "error",
            {
                builtinGlobals: true
            }
        ],
        "no-console": "warn",
        "prefer-template": "error",
        "no-useless-concat": "error",

        // It is just to buggy with ternary operators, so it is disabled for now
        "react/jsx-indent": "off",
        // It is just to buggy with ternary operators, so it is disabled for now
        "react/jsx-indent-props": "off",

        // We don't want that
        "space-before-function-paren": "off"
    },
    "globals": {
        "atlas": true,
        "sagem": true,
        "document": true,
        "fetch": true,
        "Headers": true,
        "log": true,
        "window": true
    }
}
