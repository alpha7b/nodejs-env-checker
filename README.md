# env-checker

`env-checker` is a simple CLI tool designed to help developers ensure their development environment meets the specified version requirements for Node.js and npm. It checks the current versions of Node.js and npm against the required versions and provides feedback.

## Features

- Checks the current Node.js version against a required version.
- Checks the current npm version against a required version.
- Easy to configure required versions.
- Provides clear feedback on whether the current environment meets the requirements.

## Installation

You can install `env-checker` globally on your system via npm:

    npm install -g env-checker

This allows you to run `env-checker` from anywhere in your terminal.

## Usage

After installing, you can run `env-checker` by simply typing:

    env-checker

By default, `env-checker` checks for pre-defined version requirements. You can customize these requirements by passing parameters:

    env-checker --node v14.0.0 --npm 6.0.0

Replace `v14.0.0` and `6.0.0` with the required Node.js and npm versions for your project.

## Contributing

Contributions are welcome! If you have a suggestion or improvement, please feel free to fork the repository and submit a pull request.

## License

`env-checker` is [MIT licensed](./LICENSE).
