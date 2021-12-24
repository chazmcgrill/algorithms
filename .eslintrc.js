module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        'spaced-comment': 'error',
        'no-inline-comments': 'error',
        'no-console': 'error',
        'no-warning-comments': ['warn', { terms: ['@todo', 'todo', 'fixme'], location: 'start' }],
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            { exceptAfterOverload: true, exceptAfterSingleLine: true },
        ],
        '@typescript-eslint/no-floating-promises': 'error',
    },
};
