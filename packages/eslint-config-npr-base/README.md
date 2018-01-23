# eslint-config-npr-base

This package provides NPR's base JS .eslintrc (without React plugins) as an extensible shared config.

It extends Airbnb's base configuration with NPR's style guide.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

If you use yarn, run `npm info "@npr/eslint-config-npr-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

    ```sh
    npm info "@npr/eslint-config-npr-base@latest" peerDependencies
    ```

    Linux/OSX users can run
    ```sh
    (
    export PKG=@npr/eslint-config-npr-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
    )
    ```

    Which produces and runs a command like:

    ```sh
    npm install --save-dev @npr/eslint-config-npr-base eslint@^#.#.# eslint-plugin-import@^#.#.#
    ```

    Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

    ```sh
    npm install -g install-peerdeps
    install-peerdeps --dev @npr/eslint-config-npr-base
    ```

    The cli will produce and run a command like:

    ```sh
    npm install --save-dev @npr/eslint-config-npr-base eslint@^#.#.# eslint-plugin-import@^#.#.#
    ```

2. Add `"extends": "@npr/eslint-config-npr-base"` to your .eslintrc.
