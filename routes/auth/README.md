
Register a User

Registers a new user with the application.
Endpoint


```arduino
POST /auth/local/register
```
Request Body
| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| email     | string | Email address of the user.   |
| password  | string | Password chosen by the user. |
| fullname  | string | Full name of the user.       |

Response

    Success Response (200 OK):


``` json

{
  "success": true,
  "message": "You have registered successfully, You can login now"
}```

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

This documentation provides a clear overview of the /auth/local/register endpoint, including its purpose, request body parameters, possible responses, and error handling.****