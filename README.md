# Summary

This Project is a minimal reproduction of a cypress test configuration. The goal is to test with a local (more recently updated) version of electron, to circumvent some of the issues that block cypress from working with the latest electron version.

Unfortunately, the methods to point / configure the local version of electron do not appear to work as expected.

## Using Path Configuration

As documented on cypress.io ([see here](https://docs.cypress.io/guides/guides/launching-browsers#Launching-by-a-path)), it should be possible to point to a local browser instance using the `--browser` flag.

I've done that here using
```sh
cypress run --browser ./node_modules/.bin/electron
```

However, this does not appear to work, generating the following error:

```
Unable to find browser with path ./node_modules/.bin/electron
We could not identify a known browser at the path you provided: ./node_modules/.bin/electron

Read more about how to troubleshoot launching browsers: https://on.cypress.io/troubleshooting-launching-browsers

The output from the command we ran was:
```

This can be replicated in this repo using the `npm run test:path` command.

## Using Browser Config

As documented on cypress.io ([see here](https://docs.cypress.io/guides/guides/launching-browsers#Customize-available-browsers)), it should alternatively be possible to create a new browser config that points to a specific path.

I've done that in `cypress.config.js` with a custom `npm-electron` entry that has a `path` of `'./node_modules/.bin/electron',`

This unfortunately also does not work, with a different error. The electron browser does launch, but the browser opens an error prompt saying:

```
Error launching app
Unable to find Electron app at /Users/jrjurman/Programs/cypress-local-electron-test/about:blank
Cannot find module '/Users/jrjurman/Programs/cypress-local-electron-test/about:blank'
```

Cypress itself prints out the following error message:

```
  Running:  spec.cy.js                                                                      (1 of 1)
Still waiting to connect to Npm electron, retrying in 1 second (attempt 18/62)
```

This can be replicated in this repo using the `npm run test:config` command.
