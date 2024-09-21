# **Database Documentation**

## **1. General Information**

- **Database Name**: `jagya_db`
- **Last Updated**: `18/09/24`
- **Description**: A brief description of the database's purpose, e.g., "This database is designed for managing customer information for the XYZ platform."

------

## **Database Structure Overview**

------

## **Tables and Fields**

### **Table: `admin_auth`**

#### **Description**:

A brief description of the table's purpose, e.g., "Stores customer information, including contact details and account status."

| **Column Name** | **Data Type** | **Constraints**             | **Default Value** | **Description**                   |
| --------------- | ------------- | --------------------------- | ----------------- | --------------------------------- |
| `id`            | INT           | PRIMARY KEY, AUTO_INCREMENT | NULL              | Unique identifier for each record |
| `name`          | VARCHAR(255)  | NOT NULL                    | NULL              | Customer's full name              |
| `email`         | VARCHAR(255)  | UNIQUE, NOT NULL            | NULL              | Customer's email address          |
| `created_at`    | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP   | CURRENT_TIMESTAMP | Record creation timestamp         |

Repeat the table format for each table in the database.

------

##### **Relationships**

Describe the relationships between tables, using clear references to the columns involved.

- Foreign Key Relationships

  :

  - **Table1.column -> Table2.column**
  - **Table2.column -> Table3.column**

------

##### Indexes

List the indexes on the tables for faster querying.

| **Table Name** | **Index Name**   | **Column(s)** | **Index Type** |
| -------------- | ---------------- | ------------- | -------------- |
| `orders`       | `idx_order_date` | `order_date`  | BTREE          |
| `customers`    | `idx_email`      | `email`       | UNIQUE         |

```sql
sql

CREATE VIEW `view_name` AS
SELECT column1, column2
FROM table_name
WHERE condition;

```

### **Table: `table_name`**

#### **Description**:

A brief description of the table's purpose, e.g., "Stores customer information, including contact details and account status."

| **Column Name** | **Data Type** | **Constraints**             | **Default Value** | **Description**                   |
| --------------- | ------------- | --------------------------- | ----------------- | --------------------------------- |
| `id`            | INT           | PRIMARY KEY, AUTO_INCREMENT | NULL              | Unique identifier for each record |
| `name`          | VARCHAR(255)  | NOT NULL                    | NULL              | Customer's full name              |
| `email`         | VARCHAR(255)  | UNIQUE, NOT NULL            | NULL              | Customer's email address          |
| `created_at`    | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP   | CURRENT_TIMESTAMP | Record creation timestamp         |

Repeat the table format for each table in the database.

------

##### Relationships

Describe the relationships between tables, using clear references to the columns involved.

- Foreign Key Relationships

  :

  - **Table1.column -> Table2.column**
  - **Table2.column -> Table3.column**



### Table: `clients`

**Description**: Stores client details including contact information, reference number, and address.

| Column Name     | Data Type    | Constraints                 | Default Value | Description                         |
| --------------- | ------------ | --------------------------- | ------------- | ----------------------------------- |
| `client_id`     | BIGINT(20)   | PRIMARY KEY, AUTO_INCREMENT | NULL          | Unique identifier for each client   |
| `client_name`   | VARCHAR(200) |                             | NULL          | Client's full name                  |
| `client_ref_no` | INT(11)      |                             | NULL          | Client reference number             |
| `contact`       | INT(11)      |                             | NULL          | Client's primary contact number     |
| `alt_contact`   | INT(11)      |                             | NULL          | Client's alternative contact number |
| `address`       | VARCHAR(300) |                             | NULL          | Client's address                    |
| `email`         | VARCHAR(80)  |                             | NULL          | Client's email address              |

------

### Table: `contractors`

**Description**: Stores contractor details including name, contact information, and address.

| Column Name       | Data Type    | Constraints                 | Default Value | Description                             |
| ----------------- | ------------ | --------------------------- | ------------- | --------------------------------------- |
| `con_id`          | INT(20)      | PRIMARY KEY, AUTO_INCREMENT | NULL          | Unique identifier for each contractor   |
| `con_name`        | VARCHAR(200) |                             | NULL          | Contractor's full name                  |
| `con_contact`     | INT(11)      |                             | NULL          | Contractor's primary contact number     |
| `con_alt_contact` | INT(11)      |                             | NULL          | Contractor's alternative contact number |
| `con_address`     | VARCHAR(300) |                             | NULL          | Contractor's address                    |
| `con_email`       | VARCHAR(80)  |                             | NULL          | Contractor's email address              |

------

### Table: `labours`

**Description**: Stores labour details including name, contact information, and address.

| Column Name       | Data Type    | Constraints                 | Default Value | Description                           |
| ----------------- | ------------ | --------------------------- | ------------- | ------------------------------------- |
| `lab_id`          | INT(20)      | PRIMARY KEY, AUTO_INCREMENT | NULL          | Unique identifier for each labourer   |
| `lab_name`        | VARCHAR(200) |                             | NULL          | Labourer's full name                  |
| `lab_contact`     | INT(11)      |                             | NULL          | Labourer's primary contact number     |
| `lab_alt_contact` | INT(11)      |                             | NULL          | Labourer's alternative contact number |
| `lab_address`     | VARCHAR(300) |                             | NULL          | Labourer's address                    |
| `lab_email`       | VARCHAR(80)  |                             | NULL          | Labourer's email address              |

------

### Table: `particles`

**Description**: Stores details about particles including name and price.

| Column Name      | Data Type    | Constraints                 | Default Value | Description                         |
| ---------------- | ------------ | --------------------------- | ------------- | ----------------------------------- |
| `particle_id`    | INT(20)      | PRIMARY KEY, AUTO_INCREMENT | NULL          | Unique identifier for each particle |
| `particle_name`  | VARCHAR(200) |                             | NULL          | Name of the particle                |
| `particle_price` | VARCHAR(50)  |                             | NULL          | Price of the particle               |

------

### Table: `phases`

**Description**: Stores information about different project phases.

| Column Name  | Data Type    | Constraints                 | Default Value | Description                      |
| ------------ | ------------ | --------------------------- | ------------- | -------------------------------- |
| `phase_id`   | INT(20)      | PRIMARY KEY, AUTO_INCREMENT | NULL          | Unique identifier for each phase |
| `phase_name` | VARCHAR(100) |                             | NULL          | Name of the phase                |

------

### Table: `sub_phases`

**Description**: Stores information about sub-phases of project phases.

| Column Name      | Data Type    | Constraints                 | Default Value | Description                          |
| ---------------- | ------------ | --------------------------- | ------------- | ------------------------------------ |
| `sub_phase_id`   | INT(20)      | PRIMARY KEY, AUTO_INCREMENT | NULL          | Unique identifier for each sub-phase |
| `sub_phase_name` | VARCHAR(100) |                             | NULL          | Name of the sub-phase                |

------

### Table: `vendors`

**Description**: Stores vendor details including contact information and status.

| Column Name          | Data Type    | Constraints                 | Default Value | Description                         |
| -------------------- | ------------ | --------------------------- | ------------- | ----------------------------------- |
| `vendor_id`          | INT(20)      | PRIMARY KEY, AUTO_INCREMENT | NULL          | Unique identifier for each vendor   |
| `vendor_name`        | VARCHAR(200) |                             | NULL          | Vendor's full name                  |
| `vendor_contact`     | INT(11)      |                             | NULL          | Vendor's primary contact number     |
| `vendor_alt_contact` | INT(11)      |                             | NULL          | Vendor's alternative contact number |
| `vendor_address`     | VARCHAR(300) |                             | NULL          | Vendor's address                    |
| `vendor_email`       | VARCHAR(80)  |                             | NULL          | Vendor's email address              |
| `vendor_status`      | VARCHAR(80)  |                             | 'open'        | Vendor's status (open or closed)    |

------

### Table: `projects`

**Description**: Stores information about projects, their associated clients, and financial details.

| Column Name      | Data Type    | Constraints                                                  | Default Value | Description                        |
| ---------------- | ------------ | ------------------------------------------------------------ | ------------- | ---------------------------------- |
| `pro_id`         | BIGINT       | PRIMARY KEY, AUTO_INCREMENT                                  | NULL          | Unique identifier for each project |
| `client_id`      | BIGINT(20)   | FOREIGN KEY (REFERENCES `clients(client_id)` ON DELETE CASCADE) | NULL          | Client associated with the project |
| `project_name`   | VARCHAR(200) |                                                              | NULL          | Name of the project                |
| `pro_ref_no`     | INT          |                                                              | NULL          | Project reference number           |
| `total_price`    | INT          |                                                              | NULL          | Total price of the project         |
| `amount_split`   | VARCHAR(50)  |                                                              | NULL          | Payment split details              |
| `advance_amount` | INT          |                                                              | NULL          | Advance amount paid by the client  |

------

This documentation provides an organized overview of the database structure and its tables for your construction firm management system.

