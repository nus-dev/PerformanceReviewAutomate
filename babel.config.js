"use strict";

module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-typescript",
        ["@babel/preset-react", {
            "runtime": "automatic"
        }],
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        ["@babel/plugin-transform-typescript", {
            allowNamespaces: true
        }],
        ["@babel/plugin-proposal-decorators", {"legacy": true}],
        ["@babel/plugin-proposal-class-properties", {"loose": true}],
        ['@babel/plugin-proposal-private-methods', {"loose": true}],
        "@babel/transform-runtime",
        ["@babel/plugin-transform-react-jsx", {
            "runtime": "automatic"
        }]
    ]
};
