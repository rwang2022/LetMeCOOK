
# Postgres
```SQL
-- logs into $user
# psql -U $user 

-- create database (don't forget the semicolon)
# CREATE DATABASE LetMeCOOK;
```

We have a free online Postgres database at rapidapp.io

You can see it on the command line by running
```cmd
(All platforms)
psql CONNECTION_STRING
```

You can see the tables by running `\dt` (meaning database tables)

| Command            | What it does          |
| ------------------ | --------------------- |
| `\dt`              | see database tables   |
| `TABLE $table_name;` | see rows of one table |
| `ALTER TABLE $table_name ADD CONSTRAINT unique_name UNIQUE ($col_name);` | make a $col_name of $table_name unique|


# Routing
```js
// '/' is the URI or API endpoint
app.get('/', (req,res) => {
    res.send('Hello World!')
})

// '/helloworld' is the URI or API endpoint
app.get('/helloWorld', (req,res) => {
    res.send('Hello World! from hello')
})

// you send HTTP requests (GET, POST, etc.) to API endpoints
```

# Sessions, Cookies
Cookies are a way for a site to know if you've logged in before. It's a signature that is obtained after they hash your userId along with a secret_key after a successful login. This signature is given to the user who just signed in. The browser stores this signature, so the user is allowed to stay logged in even after closing the tab. This saves time; the user doesn't need to type in their password EVERY time. 

The signature `=hash(userId, secretKey)` is made up of three pieces: 1. userId 2. hash function 3. developer's secret key. It is conceivable for the hacker to guess a userId as well as the hash function. But the secret key is some random string that they have no way of knowing. So the hacker has no way of figuring out a valid signature to that userId. And thus they cannot use cookies as a way to hack into some random person's account. 

