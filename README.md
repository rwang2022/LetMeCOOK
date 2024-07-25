# Let Me COOK
This is an app.

# Instructions
1. Clone the repo and `cd` into it
2. Run `npm install`
3. Make a copy of the `.env_template` file, rename it to `.env`, and edit `$variables` with your own
      1. `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
         1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
         2. Create a new project or select an existing project.
         3. Navigate to `APIs & Services` > `Credentials`.
         4. Click on `Create Credentials` and select `OAuth 2.0 Client IDs`.
         5. Click on `Configure consent screen`
            1. Set user type to `External` and click `create`
            2. Set app name, user support email, and developer contact information, then save and continue until you are done.
         6. Back at `Credentials` and `Oauth 2.0 Client IDs`, set the application type to `Web application`.
         7. Name the `Oauth 2.0 Client ID` whatever you want. 
         8. Add `http://localhost:3000/auth/google/callback` to the list of authorized redirect URIs.
         9.  Click `Create` to get your `Client ID` and `Client Secret`.
      2. `SESSION_SECRET` should be a long random string. You can obtain one by running `node -e "console.log(require('crypto').randomBytes(64).toString('hex'));"` in the terminal
      3. `DATABASE_URL`: your Postgres database details
         1. Install Postgres if you haven't already. The set up should tell you `$database_user`, `$mypassword`, and `$port`
            1. `$database_user` is usually the `postgres` superuser (but can be another user that you created)
            2. You should know your `$mypassword`
            3. `$port` is usually `5432`
         2. Run `psql -U $database_user` to log into that user
         3. Run `CREATE DATABASE $database_name;` (don't forget the `;`, name can be something like `LetMeCOOK`)
         4. Run `exit`. You should now have filled out `DATABASE_URL` with all the required information.
4. Run `node app.js`
5. Go to http://localhost:3000/


# Contributors
1. Erika Nelson
2. Ryan Wang