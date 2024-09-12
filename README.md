# Vanilla JS + CSS programming problem

## UPD
 # Added features
 1. Added accessibility in HTML.
 2. Linter using ESLint with TypeScript support, run `npm run lint` to check for errors.
 3. Formatter using Prettier, run `npm run format`.
 4. Adde stylelinter, run `npm run lint:styles`.
 5. Updated "snake_case" in .ts files to "camelCase", and in .css file to "kebab-case".
 6. Moved out factory code to utils folder.
 7. Add UI tests via Playwright, run `npm run pwtest`.
 8. Added more unit tests to cover more edge cases.

## Requisites

node

## Preparation
```sh
npm i
```

## The code

This code is bundled by vite. We have TS support and vitest for unit tests.

In the `src` folder you will find:

`src/factory.ts` 
This is the factory that will produce a count function you will use later.
It is left blank for you to implement.

Factory takes two numerical arguments. First is the starting point for the count function, the other one is the step, by how much should we increment the counter on each click.

`src/factory.test.ts` - 
This is the unit test for the factory. It is written and ready, your implementation needs to pass these tests.

`src/style/main.css`
These are the styles for the excersise. Plain CSS, nothing fancy :).

`index.html`
The main page

`src/main.ts`
Main logic for the implementation of the requirements.

## The requirements
Build a simple page that looks similar to the image at `public/design.png`.

When you click the big yellow button in the middle, counter function imported from `factory.ts` should be executed and the returned value populated in the middle of it.

When you change either the `start_at` or `step` controls, new instance from the factory should be taken with updated arguments.

All test are passing. To run them:

```sh
npm run test
```

To work on the code:
```sh
npm run dev
```

## Extra credit
- Improve accessibility.
- Better test coverage.
- UI tests.
- Improve DX.
- Add linters and formatters.
- Have fun.



