# APP project

## Some decisions were made

* many things are left incomplete intentionaly, this is only a prototype
* back-end node.js
* api connection and endpoint example
* back-end requires the public folder from the front-end
* i fully realise this app will break after the secrete is revoked, idea is to just to test it out
* front-end gatsby
* there is a devmode to develop with its own server

## In order to run it

1. run "yarn/npm install -g gatsby-cli", will install gatsby globaly, https://www.gatsbyjs.org/tutorial/part-zero/
2. cd app, run "yarn install"
3. Still inside app, run "gatsby build", this will build the "public" folder
4. cd server, run "yarn install"
5. Still inside server, run "yarn start"
