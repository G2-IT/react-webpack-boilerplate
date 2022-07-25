# React-webpack Boilerplate (Typescript)

# Technology stack
* [React](https://ru.reactjs.org/)
* [React-router-dom](https://reactrouter.com/web/guides/quick-start)
* [ESlint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Table of contents
1. [First start](#first-start)
2. [Formatting](#formatting)

# First start

### Using npm dependencies

You can use the default method for starting your project using [Node.JS and npm(yarn)](https://nodejs.org/en/)

1. If you do not have yarn installed, run
```bash
  npm install -g yarn
```
2. Install dependencies
```bash
  yarn
```
3. Start the project
```bash
  yarn start
```
The application is available on [http://localhost:3000](http://localhost:3000)

# Formatting
Linters are to keep code clean. They prevent shitcode from getting into a repository.

### Using Code Formatting In The Right Way (Vscode)

To be able to use code formatting in the rigth way in this project, follow the next steps:

1. Install `eslint` and `prettier` plugins in vscode (make sure your vscode version is up-to-date).
2. Create a folder `.vscode` in the root of the project with a file `settings.json` inside of it: `mkdir -p ./.vscode && touch ./.vscode/settings.json`.
3. Add the following code inside of it:

```bash
{
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

\_Note: this is necessary to avoid that the standard vscode system apply the formatting, as eslint is linked to prettier it will format it for us instead.