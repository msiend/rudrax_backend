### client API

#### api prefix - `/api/v1/`


#### 1. Create One 

**Title:** create one client
**Endpoint:** `POST /entity/client/create-data`
**Request Body:** 
```json
{
  "clientName" : "PanchananDeka",
  "clientRef" : "112",
  "clientContact" : "9999999934",
  "clientAltContact" : "998866",
  "clientAddress" : "Nagaon",
  "clientEmail" : "email@gmail.com"
}
```

**Response:**

- 200 OK:

  ```js
  {
      "status": true,
      "msg": "Inserted Successfully!"
  }
  ```

- 500 Internal Server Error:

  ```json
  {
      "status": false,
      "msg": "Something Went Wrong!",
      "errMsg" : "actual error message"
  }
  ```


  #### 2. Find All 

**Title:** find all the client list
**Endpoint:** `GET /entity/client/read-data`
**Request Body:** 
**Response:**

- 200 OK:

  ```js
  {
      "status": true,
       msg: 'Sucessfully retrived data!',
       data: data
  }
  ```

- 500 Internal Server Error:

  ```json
  {
        "status": false,
        "errMsg": "error msg",
        "error": {},
        "msg": "Error in fetching data!"
  }
  ```