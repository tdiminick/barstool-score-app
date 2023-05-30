
# barstool-score-app

Barstool full stack code challenge

## To run

1. open shell in folder you want project

2. clone project into folder - `git clone https://github.com/tdiminick/barstool-score-app.git`

3. go to server - `cd barstool-score-app/server`

4. install dependencies and start server - `npm install && npm start`

5. open shell in folder you cloned project

6. go to client - `cd barstool-score-app/client`

7. install dependencies and start client - `npm install && npm start`

8. should open automatically, but if not, open: `localhost:3000`

## Notes

**MongoDB** connection string, database name, collection name located in `server/config.js`

**PORT:** Server uses `process.env.PORT` if set, or `3001` as default; if not using `3001`, update the client, `client/package.json > proxy`, to use the *PORT* you have set