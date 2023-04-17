# CS3450Group3: Dan's Car Rental
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

#### Name Scheme
Branches: `DCR-{ticket #}_Ticket_Description`

Diagrams: `UseCaseName.png`

Program files will use camelCase


## Version-Control Procedures

The `main` branch will always be tested and deployable

The `develop` branch will be the base for new features and fixes

Branches for specific features will be based from `dev`.

## Tool stack description and setup procedure

`git` - Code storage and collaboration software

`Jira` - Scrum and task management software

`Node.js` - Backend JS runtime

`sqlite3` - Database software

`Vue` - Frontend UI

`Cypress` + `Mocha` - Testing Framework

## Build Instructions

### First time
1. Make sure you have Node and npm installed.

2. Clone the repository to your machine, and open a command shell in the root directory of the project.

3. To install all of the dependencies, run the following commands:
```sh
# Navigate to App Frontend
cd "App Frontend"
npm install
cd ..

# Navigate to App Backend
cd "App Backend"
npm install
npm run db:migrate
npm run db:seed
cd ..
```

*Note:* When dependencies of this project change, `npm install` needs to be run again in each app directory.

### Starting the Apps

1. If you haven't already, complete the first-time instructions in the previous section
2. Open two command shells from the root directory of the project.
3. In the first shell, run these commands:
```sh
cd "App Frontend"
npm run dev
```
4. In the other shell, run these commands:
```sh
cd "App Backend"
npm run dev
```
5. If there are changes to the database, run:
```sh
cd "App Backend"
npm run db:migrate
```

The frontend can be accessed at http://localhost:5713
The backend can be accessed at http://localhost:3000 
## Testing instructions
**TODO** We will use Cypress for testing. Look in package.json files to see what different scripts
have already been generated.

## Scrum documents

They can be found in docs/scrumMilestone3/

## Presentation

can be found at: 
/docs/presentation
or 
https://docs.google.com/presentation/d/1BtV3ePxTkxE1OrxPIj8Qrl9AGrBDBaMe4zalUUzhhPM/edit#slide=id.g2189308b72f\_0\_123

## Login
user: 
WatsonMan 
12345678SUM

employee:
1WatsonMan
112345678SUM

manager:
2WatsonMan
212345678SUM
