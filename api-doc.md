# Movie Booking System API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
The API uses a simple token-based authentication system. Include the token in the request headers:
```
auth-token: <user_id>
```

## Endpoints

### Users

#### Register New User
```
POST /users/register
```
Request Body:
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```
Response: 201 Created
```json
{
  "message": "User created successfully"
}
```

#### Login
```
POST /users/login
```
Request Body:
```json
{
  "username": "string",
  "password": "string"
}
```
Response: 200 OK
```json
{
  "token": "user_id"
}
```

#### Get All Users (Admin)
```
GET /users/all
```
Headers Required: `auth-token`

Response: 200 OK
```json
[
  {
    "username": "string",
    "email": "string",
    "_id": "string"
  }
]
```

#### Update User
```
PUT /users/:id
```
Headers Required: `auth-token`

Request Body:
```json
{
  "username": "string", // optional
  "email": "string",    // optional
  "password": "string"  // optional
}
```
Response: 200 OK
```json
{
  "message": "User updated successfully"
}
```

#### Delete User
```
DELETE /users/:id
```
Headers Required: `auth-token`

Response: 200 OK
```json
{
  "message": "User deleted successfully"
}
```

### Movies

#### Get All Movies
```
GET /movies
```
Response: 200 OK
```json
[
  {
    "_id": "string",
    "title": "string",
    "starring": "string",
    "release_date": "date"
  }
]
```

#### Add New Movie (Admin)
```
POST /movies
```
Headers Required: `auth-token`

Request Body:
```json
{
  "title": "string",
  "starring": "string",
  "release_date": "date"
}
```
Response: 201 Created

### Theaters

#### Get All Theaters
```
GET /theaters
```
Response: 200 OK
```json
[
  {
    "_id": "string",
    "name": "string",
    "movies": [
      {
        "_id": "string",
        "title": "string",
        "starring": "string",
        "release_date": "date"
      }
    ],
    "seats": "number"
  }
]
```

#### Add New Theater (Admin)
```
POST /theaters
```
Headers Required: `auth-token`

Request Body:
```json
{
  "name": "string",
  "movies": ["movie_id"],
  "seats": "number"
}
```
Response: 201 Created

### Tickets

#### Book Ticket
```
POST /tickets
```
Headers Required: `auth-token`

Request Body:
```json
{
  "seat_num": "number",
  "theater_id": "string",
  "movie_id": "string"
}
```
Response: 201 Created

#### Get User's Tickets
```
GET /tickets/my-tickets
```
Headers Required: `auth-token`

Response: 200 OK
```json
[
  {
    "_id": "string",
    "seat_num": "number",
    "movie_id": {
      "title": "string",
      "starring": "string",
      "release_date": "date"
    },
    "theater_id": {
      "name": "string",
      "seats": "number"
    },
    "booking_date": "date"
  }
]
```

## Error Responses
All endpoints may return the following error responses:

- 400 Bad Request: Invalid input data
- 401 Unauthorized: Missing or invalid auth token
- 404 Not Found: Resource not found
- 500 Internal Server Error: Server error

Example error response:
```json
{
  "message": "Error message description"
}
```