module.exports = {
    rules: {
        indent: [
            'error',
            4,
            { SwitchCase: 1 }
        ],
        'class-methods-use-this': 'off',
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never', asyncArrow: 'always' }
        ],
        'comma-dangle': [
            'error',
            'always-multiline'
        ],
        'max-len': [
            'warn',
            {
                code: 110,
                ignoreComments: true,
                ignoreUrls: true
            }
        ],
        'implicit-arrow-linebreak': 'off',
        'import/exports-last': 'off',
    }
};
