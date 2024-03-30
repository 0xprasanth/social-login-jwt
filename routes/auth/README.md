
# Register a User

Registers a new user with the application.

## Endpoint

```javascript
POST /auth/local/register
```
Request Body
| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| email     | string | Email address of the user.   |
| password  | string | Password chosen by the user. |
| fullname  | string | Full name of the user.       |

## Response

Success Response (200 OK):

```json
{
  "success": true,
  "message": "You have registered successfully, You can login now"
}
```

Error Response (400 Bad Request):

```json
{
      "success": false,
      "message": "Error inserting into DB"
}
```


Error Codes

    400 Bad Request: Indicates that there was an error inserting into the database.

Notes

    The password parameter will be securely hashed before being stored in the database.
    The email parameter should be unique, as it serves as the identifier for the user.

This documentation provides a clear overview of the /auth/local/register endpoint, including its purpose, request body parameters, possible responses, and error handling.


# Local Login Route

## Description:
> This route handles user authentication using local  credentials (username and password). It utilizes Passport.js for authentication and session management.

### Endpoint:
```javascript
POST '/local/login'
```
## Parameters:
None

## Request Body:

> 'email': User's email address
>
> 'password': User's password
> 

## Response:

### Status Code: 200

```json
  {
    "success": true,
    "message": "Login Success"
  }
```

Status Code: 403
```json
{
    "success": false,
    "message": "Wrong email/password. Try again"
}
```
