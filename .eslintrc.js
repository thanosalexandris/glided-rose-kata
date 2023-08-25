module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'jest'],
    globals: {
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'jest/no-conditional-expect': 'off',
        'no-undef': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    },
};