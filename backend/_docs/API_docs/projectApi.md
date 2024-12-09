### projects API

#### api prefix - `/api/v1/`


#### 1. Create One 

**Title:** create project for existing client
**Endpoint:** `POST /entity/project/create-data`
**Request Body:** 
```json
{
  "projectClientRef": 1,
  "projectName": "Residential Complex",
  "projectRef": "AS-101",
  "projectHousetype": "AssamType",
  "projectRcctype": null,
  "projectSiteDesc": "Construction of a modern residential building",
  "projectDuration": "24 months",
  "projectTotalcost": 5000000,
  "projectAdvPayment": 1000000
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