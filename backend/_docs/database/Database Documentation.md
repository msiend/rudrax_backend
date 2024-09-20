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