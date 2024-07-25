# Let Me COOK
This is an app.

# Instructions
1. Clone the repo and `cd` into it
2. Run `npm install`
3. Set up the `.env` file, editing `$var` with your own
      1. `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
         1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
         2. Create a new project or select an existing project.
         3. Navigate to `APIs & Services` > `Credentials`.
         4. Click on `Create Credentials` and select `OAuth 2.0 Client IDs`.
         5. Set the application type to `Web application`.
         6. Add `http://localhost:3000/auth/google/callback` to the list of authorized redirect URIs.
         7. Click `Create` to get your `Client ID` and `Client Secret`.
      2. `DATABASE_URL`: your Postgres database details
      3. `SESSION_SECRET` should be a long random string. You can obtain one by running `node -e "console.log(require('crypto').randomBytes(64).toString('hex'));"` in the terminal
      4. Rename `.env_template` to `.env`
4. Run `node app.js`
5. Go to http://localhost:3000/


# Contributors
1. Erika Nelson
2. Ryan Wang