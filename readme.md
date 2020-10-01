# Gallery

A platform for building React-Native and web applications composed of multiple smaller applications, ideal for admin style applications.

## Building

Run `yarn && yarn build:web` which will produce a web build in `packages/demo/build`

## Development

Launch `yarn ts:watch` to make sure all Typescript files are compiled on changes, then to run the web version run `yarn dev:web` or `yarn dev:native` in a seperate terminal.

## Applications

An application is a unit which contains zero or more of the following element types:

- **Screen**: A component which can be rendered as a screen, which are passed a set of properties. For instance for a GitHub application this could be a screen showing a commit, a pull request, a user, etc.
- **Search**: A search will return search results in a predetermined format allowing for omni search across all applications. In a GitHub app this could be search for users, repos, issues, pull requests etc. Generally each data type has its own searcher
- **Widget**: A widget is a component that any screen in any app can use. For instance if you want to show a Github PR status in a Jira apps issue view.
- **Action**: An invocable action, allowing apps to interact. For instance this could be an "Add to favorite" action, providede by the systems app allowing other apps to add stuff to favorites
