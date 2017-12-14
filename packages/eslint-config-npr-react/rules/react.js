module.exports = {
    rules: {
        // Use our 4-space indent rules for JSX as well
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
        // We may want to require .jsx extension for files with JSX in the future
        'react/jsx-filename-extension': 'off',
        // We should probably bump this up to error soon
        'react/button-has-type': 'warn',
        // We are not requiring that functional components destructure their props
        // right now, but we can reevaluate in the future
        'react/destructuring-assignment': 'off',
        // I would love to have this turned on, but it is a little oversensitive.
        // The following line is considered a violation even though the documentation
        // does not even seem to be aware of a case like this:
        // <h1>Here is the title</h1>
        // That seems to pretty clearly be one JSX expression on one line...
        'react/jsx-one-expression-per-line': 'off',
        // I'd really like to have this on, but the parser seems to flag cases even when
        // there is a clear htmlFor on a label that matches up with the ID of another
        // element. Turn this on when it parses better.
        'jsx-a11y/label-has-for': 'off',
    }
};
