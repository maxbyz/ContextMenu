module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 6,
        sourceType: 'module',
        impliedStrict: true,
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
    },
    rules: {
        'prefer-const': 'off',
        'no-var': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
    },
};
