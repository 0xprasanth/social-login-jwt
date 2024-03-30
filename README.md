# Social Login Integreation
Starter repo

## setup Database

####  Initialize Postgres Database
- Run the code from **tableCreate.sql** in psql server
- Make sure the database name and table matches

#### Update .env file
```bash
PSQL_USER=
PSQL_PASS=
```
- Update username and password in **.demo.env** file

- Rename **.demo.env file** to **.env**

<hr />


```bash
PSQL_HOST="localhost"
PSQL_PORT=5433
PSQL_DB="user_login"
```
- Make changes in these if necessary 

<hr />

## Setup Google Client ID API Key

> Visit Google Developer Console [Here](https://console.cloud.google.com/apis/credentials)
>
> Generate OAuth 2.0 Client IDs
>
> And Save the creadentials in the **.env** file in the following format


```bash
GOOGLE_ID=
GOOGLE_SECRET=
```
## Setup Twitter Consumer ID and Secret

> Visit Twitter Developer Console [Here](https://apps.twitter.com/)
>
> Generate Consumer key (API Key) and Consumer secret (API Secret)
>
> You will also need to configure a callback URL which matches the route in your application.
>
> > In our porject, it is http://localhost/auth/twitter/callback 
> 
> And Save those creadentials in the **.env** file in the following format


```bash
TWITTER_ID=
TWITTER_SECRET=
```

## Now lets setup server

In the root directory, run the following

```bash
$ npm i && npm start
```

## Voila, Your server is now running

![Login](/public/assets/login.png)

![Register](/public/assets/register.png)