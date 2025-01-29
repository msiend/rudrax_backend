### Title Of The API

#### 1. Get One 

**Title:** Get One Supply
**Endpoint:** `GET /demo/:id`
**Request Body:** None
**Response:**

- 200 OK:

  ```js
  {
      "status": true,
      "msg": "Successfully Retrieved",
      "data": {
          // vendor supply details
      }
  }
  ```

- 500 Internal Server Error:

  ```json
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

#### 2. Add One

**Title:** Add Supply
**Endpoint:** `POST /demo`
**Request Body:**

```json
{
    "id": 1,
    "project_ref": "PR123",
    "name": "Item Name",
    "details": "Item Details",
    "quantity": 10,
    "date": "2023-01-01"
}
```

**Response:**

- 200 OK:

  ```json
  {
      "status": true,
      "msg": "Successfully Created",
      "data": 1 // ID of the newly created supply
  }
  ```

- 500 Internal Server Error:

  ```json
  {
      "status": false,
      "msg": "Internal error occurs!"
  }
  ```

