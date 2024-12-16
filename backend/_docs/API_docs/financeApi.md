### Finance API

#### api prefix - `/api/v1/`


#### 1. Create One 

**Title:** create one client
**Endpoint:** `POST /entity/finance/create-data`
**Request Body:** 
```json
{
  "fdName": "Dipankor Ahmed",
  "fdContact": "9090909",
  "fdAltContact": "9009303",
  "fdAddress": "Jorhar, Assam",
  "fdEmail": "dipa@gmail.com"
}
```

**Response:**

- 200 OK:

  ```js
  {
      "status": true,
      "msg": "New finance staff added Successfully!"
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