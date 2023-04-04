module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/valid-define-props': 'off',
        'vue/no-v-for-template-key': 'off',
        'arrow-parens': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'max-params': [0, 5],
        'eol-last': 'error',
        'use-isnan': 'error',
        'no-else-return': 'error',
        'no-multiple-empty-lines': 'error',
        'no-throw-literal': 'error',
        'no-unused-vars': 'off',
        'no-console': 'off',
        'no-debugger': 'off',
        'no-return-assign': 'off',
        'prettier/prettier': ['off']
    }
}
