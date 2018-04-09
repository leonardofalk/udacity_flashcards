# Udacity Flashcards

> Flashcards is a React Native application made for Udacity React Nanodegree.

## Development

### Requisites

-   Yarn/Npm
-   iOS/Android emulator or device

### Setting Up Environment

```shell
git clone https://github.com/leonardofalk/udacity_flashcards.git
cd udacity_flashcards
yarn install # or npm install
```

This will clone and install necessary packages to run the application.

### Starting Development

```shell
yarn start
```

This will start packager for android/ios.

### Fixtures

In development mode, the first time app load will create some fixtures in the deck API, unless there is already any data in AsyncStorage. If you wish to remove this, please comment/remove the `createDecks` line in `src/Boot.js`. This behaviour does not apply for production builds.

### Development Generators

```shell
yarn g component NAME # creates a component named NAME
yarn g container NAME # creates a container component with redux attached
yarn g reducer NAME   # creates a redux reducer with actions included using reduxsauce
yarn g saga NAME      # creates a redux saga, which run async callbacks in redux
```

This will create the resource typed, usually with some basic tests.

## Tests

The app was manually tested only in android, emulator and physical devices.

```shell
yarn test          # run default suite
yarn test:coverage # run suite with coverage and display it on screen
yarn test:ci       # run suite with coverage, simulating a CI environment
```
