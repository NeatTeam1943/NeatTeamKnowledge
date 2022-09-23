# NeatTeamKnowledge

This repo contains the official library of NeatTeam #1943. Want to add documents? Follow these steps!

## Setup

### Clone the repoistory

```
$ git clone git@github.com:NeatTeam1943/NeatTeamKnowledge.git
$ cd NeatTeamKnowledge
```

This will create a new folder named `NeatTeamKnowledge` containing everything.

### Install dependencies

```
$ yarn
```

This will install all the development dependencies the repo requires.

### Start the docs

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. Doing this will allow you to see the docs locally and view any changes made to existing docs or any new docs that were added.

## RTFM
The docs contain a contributing section with guided instruction on how to add documentation and enhance the library!

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
