# CS3450Group3
=======
## Group Members
Jaxson Madison

Jayden Lintz

Ethan Christensen

Benson Riley

## Organization
This project is split into Frontend and Backend applications.

The Frontend Application will be what our users will interact with.

The Backend Application will keep all business logic in sqlite databases.
It will expose an API for accessing and modifying the database to privileged users.

## Version-Control Procedures

The `main` branch will always be tested and deployable

The `develop` branch will be the base for new features and fixes

Branches for specific features will be based from `dev`.
These follow a naming scheme: `DCR-{ticket #}_Ticket_Description

## Tool stack description and setup procedure

git - Code storage and collaboration software

Jira - Scrum and task management software

Node.js - Backend JS runtime

sqlite3 - Database software

Vue - Frontend UI

Cypress + Mocha - Testing Framework

# Build Instructions

Open a command shell in the root directory of the project and run the following commands:
```sh
cd "App Frontend"
npm run dev

cd ..

cd "App Backend"
npm run dev
```
# Testing instructions
**TODO** We will use Cypress for testing. Look in package.json files to see what different scripts
have already been generated.
