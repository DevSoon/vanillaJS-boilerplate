module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        node: true,
        es2021: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {

    },
};
