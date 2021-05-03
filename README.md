# tv-app

The project that's a frontend case for ABN AMRO Frontend Developer position.

The project is using `namespaces` in the `store` for a quick showcase of good Separation of Concerns. The UI framework is `Vuetify` to speed up (very limited) time for developing this application. Therefore, a `BaseDialog.vue` has been created to showcase minimum of CSS. `async/await`, communication between components (`slots`, `props`, `emit`), some performance optimization (more than "few" TV Shows are fetched), ARIA, is here as well. I'm a big fan of `TypeScript` (coming from `Angular` background), therefore took the chance to try it out in `Vue.js`. Store items are fetched using convinient `mapActions` and `mapGetters`.

Some unit tests have been written, but the first time I've had whole day was Friday (30.04.2021, deadline 03.05.2021, 10:00 AM, CET) due to other client interview and preparation during the short business week (26.04 - 30.04 with 2 days off). `Cypress` tests you can ignore, I wanted to write one Happy Flow, but didn't work out time wise. Performance for searching for TV Shows could've been improved.

## Introduction

The purpose of this assignment is to evaluate candidate’s familiarity with frontend technologies, programming patterns and to showcase a sample of what clean and reusable code means to the candidate. This is also helps in understanding candidate’s basic design knowledge.

## Notes

- Use any frameworks of your choice
- Application must be responsive and mobile friendly
- Please keep it to a minimum in leveraging/using scaffolding tools/boilerplate templates/plugins. We don’t expect you to create things from scratch but, we also would like to see your own creation
- Please create a readme file that explains your architectural decisions (E.G. why did you choose a specific framework) and make sure you include instructions on how to run your solution
- Please make surethat UI is simple yet eye-catching
- Please include unit tests•Please feel free to include more features other than a few mentioned below

## Requirements

You will use an openTV shows API http://www.tvmaze.com/apito create an application that allows users to view a few lists(preferable horizontal list) of TV shows based on different genres (drama, comedy, sports, etc.).

Your goal is to display a few popular TV shows based on their rating and genre on a dashboard and when the user clicks on a TV show then the details of that TV show should be displayed on another screen. Also, the user should be able to search for a TV show to get the details. You can design your own UI which fits this requirement

## Architecture

There is no limit for this. Design your application as you wish. But make sure you will focus on clean code, reusability, frontend beast practices. Show us that you know how to produce top notch applications.

### Project setup

```
npm install
```

#### Compiles and hot-reloads for development

```
npm run serve
```

#### Compiles and minifies for production

```
npm run build
```

#### Run your unit tests

```
npm run test:unit
```

#### Run your end-to-end tests

```
npm run test:e2e
```

#### Lints and fixes files

```
npm run lint
```

#### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
