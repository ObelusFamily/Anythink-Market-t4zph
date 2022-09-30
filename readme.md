# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## Local Setup

For local development, run the following command to get started:
```bash
docker-compose up
```

To test if backend is working, hit the following endpoint:
```bash
curl <NETWORK>:3000/api/ping
```

To test if frontend is working, visit the following endpoint in your browser and register a user:
```
<NETWORK>:3001/register
```

