# eslint-config-npr-react

This package provides NPR's JS .eslintrc with React plugins as an extensible shared config.

It extends Airbnb's full configuration with NPR's style guide.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+.

It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`. If you don't need React, see [eslint-config-npr-base](https://www.npmjs.com/package/@npr/eslint-config-npr-base).

If you use yarn, run `npm info "@npr/eslint-config-npr-react@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

    ```sh
    npm info "@npr/eslint-config-npr-react@latest" peerDependencies
    ```

    Linux/OSX users can run

    ```sh
    (
    export PKG=@npr/eslint-config-npr-react;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
    )
    ```

    Which produces and runs a command like:

    ```sh
    npm install --save-dev @npr/eslint-config-npr-react eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
    ```

    Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

    ```sh
    npm install -g install-peerdeps
    install-peerdeps --dev @npr/eslint-config-npr-react
    ```

    The cli will produce and run a command like:

    ```sh
    npm install --save-dev @npr/eslint-config-npr-react eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
    ```

2. Add `"extends": "@npr/esling-config-npr-react"` to your .eslintrc
