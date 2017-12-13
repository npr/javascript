module.exports = {
    extends: [
        'eslint-config-airbnb',
        '@npr/eslint-config-npr-base',
        './rules/react',
    ].map(require.resolve),
    rules: {},
};
