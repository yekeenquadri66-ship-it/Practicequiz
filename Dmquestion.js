const originalQuestions = [
  {
    q: "Which of the following BEST defines information management?",
    opts: [
      "The process of deleting outdated data to free storage space",
      "The collection, organisation, storage, and retrieval of information to support organisational decision-making",
      "The encryption of all organisational data for security purposes",
      "The process of converting paper records to digital formats"
    ],
    ans: 1
  },
  {
    q: "What is the primary purpose of an index in a database?",
    opts: [
      "To encrypt sensitive data",
      "To allow rapid location of records without scanning the entire table",
      "To back up the database automatically",
      "To enforce referential integrity constraints"
    ],
    ans: 1
  },
  {
    q: "What does the Nigeria Data Protection Regulation (NDPR 2019) require regarding personal data?",
    opts: [
      "All personal data must be stored in JSON format",
      "All personal data must be deleted after 30 days",
      "Personal data must be collected with consent, stored securely, and not transferred to third parties without authorisation",
      "Personal data cannot be collected by any organisation"
    ],
    ans: 2
  },
  {
    q: "A university database is experiencing slow query performance on a table with 5 million student records. A query that searches for students by their last name takes 45 seconds. Which solution would MOST effectively address this problem?",
    opts: [
      "Increase the server's RAM",
      "Delete older student records",
      "Move the database to a different server",
      "Create an index on the last_name column"
    ],
    ans: 3
  },
  {
    q: "A hospital database system must ensure that patient medical records remain accurate and consistent even if multiple staff members access them simultaneously. Which quality of information management is being prioritised?",
    opts: [
      "Scalability",
      "Availability",
      "Integrity",
      "Efficiency"
    ],
    ans: 2
  },
  {
    q: "A rapidly growing e-commerce company needs to handle increasing numbers of customers and orders without performance degradation. Which database feature(s) from the tutorial would BEST address this requirement?",
    opts: [
      "Encryption and authentication",
      "Indexing, partitioning, and distributed databases",
      "Backup and recovery mechanisms",
      "CHECK constraints and triggers"
    ],
    ans: 1
  },
  {
    q: "A database administrator notices that a query without an index takes 30 seconds to execute on a table with 100,000 rows. After adding an index, the same query executes in 0.5 seconds. Which statement BEST explains this performance improvement?",
    opts: [
      "The index stores the entire table in memory",
      "The index eliminates the need for authentication",
      "The index allows the database to locate specific records without performing a full table scan",
      "The index automatically compresses the data"
    ],
    ans: 2
  },
  {
    q: "An organisation discovers that unauthorised users have been accessing employee salary information. Which combination of information management qualities has been compromised?",
    opts: [
      "Integrity and Availability",
      "Security and Privacy",
      "Scalability and Efficiency",
      "Efficiency and Integrity"
    ],
    ans: 1
  },
  {
    q: "Consider the following scenario: A database uses a B-tree index on an ID column. The database also uses replication across three servers. A query is run to find all records with ID > 5000. Which of the following correctly identifies the information management qualities being demonstrated by the index and replication respectively?",
    opts: [
      "Index shows Integrity; Replication shows Privacy",
      "Index shows Efficiency; Replication shows Availability",
      "Index shows Scalability; Replication shows Security",
      "Index shows Availability; Replication shows Efficiency"
    ],
    ans: 1
  },
  {
    q: "A financial institution stores sensitive transaction data. They implement encryption, enforce strict authentication, and maintain detailed logs of all data access. However, a hardware failure causes temporary data inaccessibility. Which of the following correctly identifies the quality that is still deficient?",
    opts: [
      "Security - because encryption is not sufficient",
      "Integrity - because data might become corrupted",
      "Availability - because the data was not accessible when needed",
      "Scalability - because the system couldn't handle the failure"
    ],
    ans: 2
  },
  {
    q: "Which of the following are the four main components of a database system?",
    opts: [
      "Hardware, Software, Data, Users",
      "Database, DBMS, Application programs, Users",
      "Tables, Queries, Forms, Reports",
      "Storage, Processing, Networking, Security"
    ],
    ans: 1
  },
  {
    q: "What is the primary role of the Database Management System (DBMS) in a database system?",
    opts: [
      "To create user interfaces for data entry",
      "To manage storage, retrieval, and security of data",
      "To perform statistical analysis on data",
      "To generate reports from data"
    ],
    ans: 1
  },
  {
    q: "In the ANSI/SPARC three-level architecture, which level describes the physical storage structure including files, indexes, and data organisation on disk?",
    opts: [
      "External level",
      "Conceptual level",
      "Internal level",
      "Application level"
    ],
    ans: 2
  },
  {
    q: "What does the conceptual level of the ANSI/SPARC architecture describe?",
    opts: [
      "How specific user groups see portions of the data",
      "The physical storage structures on disk",
      "The logical structure of the entire database including tables, relationships, and constraints",
      "The network configuration for database access"
    ],
    ans: 2
  },
  {
    q: "Which DBMS function involves ensuring ACID properties across concurrent operations?",
    opts: [
      "Data definition",
      "Data manipulation",
      "Transaction management",
      "Security and integrity"
    ],
    ans: 2
  },
  {
    q: "What is the difference between physical data independence and logical data independence?",
    opts: [
      "Physical independence applies to hardware; logical independence applies to software",
      "Physical independence means changing storage without affecting logical schema; logical independence means changing logical schema without affecting external views",
      "Physical independence applies to the external level; logical independence applies to the internal level",
      "There is no difference; they are the same concept"
    ],
    ans: 1
  },
  {
    q: "Which DBMS function is responsible for restoring the database to a consistent state after a failure?",
    opts: [
      "Concurrency control",
      "Recovery management",
      "Data manipulation",
      "Security and integrity"
    ],
    ans: 1
  },
  {
    q: "What does the external level (views) in the ANSI/SPARC architecture provide?",
    opts: [
      "The physical storage structure of data",
      "How specific user groups see portions of the data, hiding irrelevant details",
      "The complete logical structure of all data",
      "The backup and recovery procedures"
    ],
    ans: 1
  },
  {
    q: "A database administrator needs to reorganise the physical storage of a database to improve performance. Which type of data independence allows them to do this without changing how users query the data?",
    opts: [
      "Logical data independence",
      "External data independence",
      "Physical data independence",
      "Application data independence"
    ],
    ans: 2
  },
  {
    q: "A university wants to add a new column 'date_of_birth' to the student table. They want to ensure that existing student information systems continue to function without modification. Which type of data independence would support this?",
    opts: [
      "Physical data independence",
      "Logical data independence",
      "Internal data independence",
      "Storage data independence"
    ],
    ans: 1
  },
  {
    q: "A bank is experiencing issues with multiple users simultaneously accessing and updating the same account balance. Which DBMS function would manage this situation to prevent errors?",
    opts: [
      "Data definition",
      "Concurrency control",
      "Recovery management",
      "Security and integrity"
    ],
    ans: 1
  },
  {
    q: "A database administrator needs to create a new table structure for storing employee records. Which DBMS function would they use to define the schema, columns, and constraints?",
    opts: [
      "Data manipulation",
      "Transaction management",
      "Data definition",
      "Concurrency control"
    ],
    ans: 2
  },
  {
    q: "A company needs to provide different levels of data access to different user groups - managers should see all data, while regular employees should only see their own records. Which DBMS function addresses this requirement?",
    opts: [
      "Transaction management",
      "Data manipulation",
      "Security and integrity",
      "Recovery management"
    ],
    ans: 2
  },
  {
    q: "A database system is being designed for an online store. The developer needs to ensure that when a customer places an order, the inventory is reduced AND the payment is processed - both operations must succeed together or fail together. Which DBMS function is required for this?",
    opts: [
      "Data definition",
      "Data manipulation",
      "Transaction management",
      "Recovery management"
    ],
    ans: 2
  },
  {
    q: "Consider the following scenario: A database schema is modified by adding two new tables and changing the data type of a column from VARCHAR(50) to VARCHAR(100). The user views that query these tables need to be updated. Which of the following BEST explains this situation?",
    opts: [
      "Physical data independence has been violated",
      "Logical data independence has been violated because the conceptual level change affected the external level",
      "Internal level changes should not affect user views",
      "This demonstrates successful data independence"
    ],
    ans: 1
  },
  {
    q: "A company replaces their magnetic disk storage with solid-state drives (SSDs) to improve performance. They reorganise file storage and update indexes without changing the table structures or queries. This is an example of:",
    opts: [
      "Logical data independence",
      "Physical data independence",
      "Conceptual data independence",
      "External data independence"
    ],
    ans: 1
  },
  {
    q: "A database administrator reviews the DBMS functions and notes that a CHECK constraint is used on a salary column. Which TWO DBMS functions are being applied in this scenario?",
    opts: [
      "Data definition and Security/Integrity",
      "Data manipulation and Concurrency control",
      "Transaction management and Recovery management",
      "Data definition and Transaction management"
    ],
    ans: 0
  },
  {
    q: "A database experiences a power outage during a transaction that was updating customer records. The DBMS uses its logs to restore the database. Which DBMS functions are sequentially involved in this recovery process?",
    opts: [
      "Security and integrity → Data definition",
      "Concurrency control → Data manipulation",
      "Transaction management → Recovery management",
      "Data manipulation → Security and integrity"
    ],
    ans: 2
  },
  {
    q: "An organisation creates three user views of employee data: one for HR showing all details, one for managers showing department information, and one for employees showing only their own records. This arrangement BEST demonstrates which characteristic of database architecture?",
    opts: [
      "Physical data independence",
      "The internal level",
      "The external level and its ability to hide irrelevant details",
      "Concurrency control"
    ],
    ans: 2
  },
  {
    q: "Analyse the following statements about data independence:\n1. Physical data independence is easier to achieve than logical data independence\n2. Logical data independence protects applications from changes to storage structures\n3. Physical data independence protects applications from changes to how data is stored\nWhich statements are correct?",
    opts: [
      "Statements 1 and 2 only",
      "Statements 1 and 3 only",
      "Statements 2 and 3 only",
      "All statements are correct"
    ],
    ans: 1
  },
  {
    q: "How does the relational model express relationships between entities?",
    opts: [
      "Through physical pointers connecting records",
      "Through shared key values between tables",
      "Through embedded documents within tables",
      "Through hierarchical parent-child structures"
    ],
    ans: 1
  },
  {
    q: "What does entity integrity enforce in a relational database?",
    opts: [
      "Foreign key values must reference existing primary keys",
      "Primary key values cannot be NULL",
      "All columns must have unique values",
      "Data types must match across related tables"
    ],
    ans: 1
  },
  {
    q: "Which constraint ensures that a foreign key value in one table must match an existing primary key value in the referenced table?",
    opts: [
      "Entity integrity",
      "Domain integrity",
      "Referential integrity",
      "Unique integrity"
    ],
    ans: 2
  },
  {
    q: "What characteristic distinguishes semi-structured data models from relational models?",
    opts: [
      "Semi-structured models require fixed schemas",
      "Semi-structured models allow flexible, self-describing structures where different records can have different attributes",
      "Semi-structured models only store numeric data",
      "Semi-structured models cannot support nested data"
    ],
    ans: 1
  },
  {
    q: "In the relational model, what is a relation?",
    opts: [
      "A relationship between two entities",
      "A table consisting of tuples (rows) and attributes (columns)",
      "A query that joins multiple tables",
      "A foreign key constraint"
    ],
    ans: 1
  },
  {
    q: "Which of the following correctly describes domain integrity?",
    opts: [
      "Data values must fall within allowed ranges or types for their columns",
      "Every table must have a primary key",
      "Foreign keys must reference existing primary keys",
      "All rows in a table must be unique"
    ],
    ans: 0
  },
  {
    q: "What does the ON DELETE RESTRICT clause in a foreign key constraint do?",
    opts: [
      "Deletes all referencing records automatically",
      "Prevents deletion of a parent record if child records exist",
      "Sets foreign key values to NULL when parent is deleted",
      "Cascades the deletion to all child records"
    ],
    ans: 1
  },
  {
    q: "Which data model would BEST represent highly variable product specifications where different products have completely different attributes?",
    opts: [
      "Relational model with normalized tables",
      "Semi-structured model using JSON documents",
      "Network model with pointer chains",
      "Hierarchical model with fixed parent-child relationships"
    ],
    ans: 1
  },
  {
    q: "A database designer creates a student table with student_id as the primary key. Which integrity constraint is being enforced when the system rejects an INSERT statement that does not provide a value for student_id?",
    opts: [
      "Referential integrity",
      "Domain integrity",
      "Entity integrity",
      "Unique integrity"
    ],
    ans: 2
  },
  {
    q: "An e-commerce system stores product catalog data. Some products have color options, others have size options, and some have both. Some products have specifications like 'material' while others have 'resolution' or 'dimensions.' Which data model would be most appropriate?",
    opts: [
      "Strict relational model with a fixed product table",
      "Semi-structured model using JSON documents with flexible attributes",
      "Network model with predefined record types",
      "Hierarchical model with fixed levels"
    ],
    ans: 1
  },
  {
    q: "A university database has a department table and a student table with dept_id as a foreign key in the student table. A user attempts to delete a department that has enrolled students. The DELETE operation fails. Which foreign key clause is likely in effect?",
    opts: [
      "ON DELETE CASCADE",
      "ON DELETE SET NULL",
      "ON DELETE RESTRICT",
      "ON DELETE SET DEFAULT"
    ],
    ans: 2
  },
  {
    q: "A hospital database tracks patients and their medical records. Each patient has a unique patient_id. Which SQL constraint would ensure that all patient_id values in the appointments table refer to actual patients in the patients table?",
    opts: [
      "PRIMARY KEY on appointments.patient_id",
      "FOREIGN KEY on appointments.patient_id referencing patients.patient_id",
      "UNIQUE constraint on appointments.patient_id",
      "CHECK constraint on appointments.patient_id"
    ],
    ans: 1
  },
  {
    q: "A company stores employee data where the salary column must be between 0 and 500,000. Which integrity constraint type is being applied?",
    opts: [
      "Entity integrity",
      "Referential integrity",
      "Domain integrity",
      "Unique integrity"
    ],
    ans: 2
  },
  {
    q: "A database contains the following SQL statement:\nCREATE TABLE student (\n    student_id INT PRIMARY KEY,\n    full_name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE,\n    gpa DECIMAL(3,2) CHECK (gpa BETWEEN 0.00 AND 4.00),\n    dept_id INT REFERENCES department(dept_id)\n);\nIf a user tries to insert a student record with gpa = 4.50, what happens?",
    opts: [
      "The record is inserted with gpa set to NULL",
      "The record is inserted but the CHECK constraint is ignored",
      "The insertion is rejected because it violates domain integrity",
      "The insertion is rejected because it violates entity integrity"
    ],
    ans: 2
  },
  {
    q: "Consider two data models for a library system:\nModel A: Fixed tables for Books, Authors, and Publishers with foreign keys\nModel B: Collections of JSON documents where each book document contains embedded author and publisher information\nWhich of the following statements correctly analyses these models?",
    opts: [
      "Model A is semi-structured; Model B is relational",
      "Model A would handle variable book attributes better than Model B",
      "Model B would allow different books to have different attribute sets",
      "Both models require exactly the same type of queries"
    ],
    ans: 2
  },
  {
    q: "A database administrator observes that a DELETE operation on a department record is automatically deleting all student records in that department. Which foreign key clause must have been defined?",
    opts: [
      "ON DELETE RESTRICT",
      "ON DELETE CASCADE",
      "ON DELETE SET NULL",
      "ON DELETE NO ACTION"
    ],
    ans: 1
  },
  {
    q: "Which of the following correctly analyzes the differences between the relational and semi-structured models?\n1. Schema: Relational (Fixed, predefined) | Semi-structured (Flexible, schema-optional)\n2. Data format: Relational (Tables with typed columns) | Semi-structured (JSON/XML documents with nested data)\n3. Query language: Relational (SQL) | Semi-structured (XQuery, JSONPath, MQL)\n4. Best for: Relational (Unstructured data) | Semi-structured (Transactional structured data)",
    opts: [
      "Statements 1, 2, and 3 are correct; Statement 4 is incorrect",
      "Statements 1, 2, and 4 are correct; Statement 3 is incorrect",
      "Statements 2, 3, and 4 are correct; Statement 1 is incorrect",
      "All statements are correct"
    ],
    ans: 0
  },
  {
    q: "A product catalogue database contains products with widely varying attributes. A developer chooses to store product data as JSON documents instead of relational tables. Analyse the trade-off being made:",
    opts: [
      "The developer gains query performance but loses the ability to use SQL",
      "The developer gains flexibility in schema but sacrifices some of the structured query capabilities and integrity enforcement of relational databases",
      "The developer gains data integrity but loses the ability to handle variable attributes",
      "The developer gains both flexibility and stronger referential integrity"
    ],
    ans: 1
  },
  {
    q: "Examine the following SQL snippet:\nCREATE TABLE department (\n    dept_id INT PRIMARY KEY,\n    dept_name VARCHAR(80) NOT NULL UNIQUE\n);\nCREATE TABLE student (\n    student_id INT PRIMARY KEY,\n    full_name VARCHAR(100) NOT NULL,\n    email VARCHAR(100) UNIQUE,\n    dept_id INT NOT NULL,\n    FOREIGN KEY (dept_id) REFERENCES department(dept_id)\n);\nWhich integrity constraints are being enforced?",
    opts: [
      "Entity integrity only on student_id; Referential integrity on dept_id; Unique integrity on dept_name and email",
      "Entity integrity on both tables; Referential integrity on dept_id; Domain integrity on all NOT NULL columns; Unique integrity on dept_name and email",
      "Entity integrity only; Referential integrity on dept_id",
      "Referential integrity only; No entity integrity enforced"
    ],
    ans: 1
  },
  {
    q: "Analyse the following statements about data model characteristics:\n1. Relational models require JOIN operations to retrieve related data from multiple tables\n2. Semi-structured models can embed related data within documents, avoiding some JOINs\n3. Referential integrity constraints can be enforced in both relational and semi-structured models with equal ease\n4. Changing the schema in a relational database requires ALTER TABLE operations\nWhich statements are correct?",
    opts: [
      "Statements 1, 2, and 4 only",
      "Statements 1, 2, and 3 only",
      "Statements 2, 3, and 4 only",
      "All statements are correct"
    ],
    ans: 0
  },
  {
    q: "Which SQL statement is used to create new database objects such as tables?",
    opts: [
      "INSERT",
      "CREATE",
      "ALTER",
      "UPDATE"
    ],
    ans: 1
  },
  {
    q: "What does the SELECT statement with a JOIN clause accomplish?",
    opts: [
      "It creates a new table from existing tables",
      "It retrieves data from multiple tables by combining related rows",
      "It inserts data into multiple tables simultaneously",
      "It deletes data from related tables"
    ],
    ans: 1
  },
  {
    q: "What is the purpose of the GROUP BY clause in a SQL query?",
    opts: [
      "To filter rows before grouping them",
      "To arrange rows in alphabetical order",
      "To group rows that have the same values in specified columns for aggregate calculations",
      "To join tables based on common columns"
    ],
    ans: 2
  },
  {
    q: "What is the difference between the WHERE and HAVING clauses?",
    opts: [
      "WHERE filters rows before grouping; HAVING filters groups after grouping",
      "WHERE filters groups; HAVING filters individual rows",
      "WHERE is used with aggregate functions; HAVING is used with simple conditions",
      "There is no difference; they are interchangeable"
    ],
    ans: 0
  },
  {
    q: "What does the INSERT INTO statement do in SQL?",
    opts: [
      "Adds new rows of data to a table",
      "Creates a new table structure",
      "Removes existing rows from a table",
      "Modifies existing data in rows"
    ],
    ans: 0
  },
  {
    q: "Which aggregate function would you use to find the highest value in a column?",
    opts: [
      "AVG()",
      "COUNT()",
      "MAX()",
      "SUM()"
    ],
    ans: 2
  },
  {
    q: "What is the purpose of the ORDER BY clause?",
    opts: [
      "To sort the result set in ascending or descending order",
      "To filter records based on conditions",
      "To group records for aggregate calculations",
      "To join multiple tables together"
    ],
    ans: 0
  },
  {
    q: "What does the UPDATE statement do in SQL?",
    opts: [
      "Adds new rows to a table",
      "Removes rows from a table",
      "Modifies existing data in one or more rows",
      "Creates a new table"
    ],
    ans: 2
  },
  {
    q: "A university database has a student table with columns: student_id, full_name, dept_id, gpa. Which SQL query would return the names of all students with a GPA of 3.5 or higher?",
    opts: [
      "SELECT full_name FROM student WHERE gpa >= 3.50",
      "SELECT full_name FROM student WHERE gpa > 3.50",
      "SELECT full_name FROM student HAVING gpa >= 3.50",
      "SELECT full_name FROM student GROUP BY gpa >= 3.50"
    ],
    ans: 0
  },
  {
    q: "A company needs to find the average salary of employees in each department. Which SQL query correctly accomplishes this?",
    opts: [
      "SELECT dept_id, AVG(salary) FROM employee GROUP BY dept_id",
      "SELECT dept_id, AVG(salary) FROM employee WHERE dept_id",
      "SELECT dept_id, AVG(salary) FROM employee ORDER BY dept_id",
      "SELECT dept_id, AVG(salary) FROM employee HAVING dept_id"
    ],
    ans: 0
  },
  {
    q: "A database contains orders and customers tables. Which SQL query correctly lists customer names along with their order totals?",
    opts: [
      "SELECT customer_name, order_total FROM orders JOIN customers ON orders.customer_id = customers.customer_id",
      "SELECT customer_name, order_total FROM orders JOIN customers WHERE orders.customer_id = customers.customer_id",
      "SELECT customer_name, order_total FROM orders, customers GROUP BY customer_name",
      "SELECT customer_name, order_total FROM orders, customers HAVING orders.customer_id = customers.customer_id"
    ],
    ans: 0
  },
  {
    q: "A library database tracks books borrowed by members. Which query finds members who have borrowed more than 5 books?",
    opts: [
      "SELECT member_id, COUNT(*) FROM borrowings GROUP BY member_id HAVING COUNT(*) > 5",
      "SELECT member_id, COUNT(*) FROM borrowings WHERE COUNT(*) > 5 GROUP BY member_id",
      "SELECT member_id, COUNT(*) FROM borrowings HAVING COUNT(*) > 5",
      "SELECT member_id, COUNT(*) FROM borrowings GROUP BY member_id WHERE COUNT(*) > 5"
    ],
    ans: 0
  },
  {
    q: "A sales database has an orders table. A manager wants to increase all order amounts by 10% for orders placed before 2020. Which SQL statement would accomplish this?",
    opts: [
      "INSERT INTO orders SET amount = amount * 1.10 WHERE order_date < '2020-01-01'",
      "UPDATE orders SET amount = amount * 1.10 WHERE order_date < '2020-01-01'",
      "ALTER orders SET amount = amount * 1.10 WHERE order_date < '2020-01-01'",
      "MODIFY orders SET amount = amount * 1.10 WHERE order_date < '2020-01-01'"
    ],
    ans: 1
  },
  {
    q: "A school database needs to add three new students in a single operation. Which statement is most efficient?",
    opts: [
      "INSERT INTO student VALUES (101, 'John'), (102, 'Mary'), (103, 'Peter')",
      "INSERT INTO student (101, 'John'); INSERT INTO student (102, 'Mary'); INSERT INTO student (103, 'Peter')",
      "INSERT MULTIPLE INTO student VALUES (101, 'John'), (102, 'Mary'), (103, 'Peter')",
      "ADD INTO student VALUES (101, 'John'), (102, 'Mary'), (103, 'Peter')"
    ],
    ans: 0
  },
  {
    q: "Consider the following two SQL queries on a student table with 10,000 records:\nQuery A: SELECT * FROM student WHERE gpa > 3.5\nQuery B: SELECT * FROM student WHERE gpa > 3.5 ORDER BY gpa DESC\nWhich statement correctly analyzes these queries?",
    opts: [
      "Both queries will return the same number of rows, but Query B will display them in sorted order",
      "Query A will return more rows because it doesn't sort",
      "Query B will return fewer rows because ORDER BY filters results",
      "Both queries will return different sets of rows because ORDER BY changes the result"
    ],
    ans: 0
  },
  {
    q: "A database administrator needs to report the number of students in each department but only for departments with at least 10 students. Which query correctly implements this requirement?",
    opts: [
      "Query A is correct because HAVING filters groups after aggregation",
      "Query B is correct because WHERE filters before grouping",
      "Query C is correct because GROUP BY works with WHERE",
      "All queries are correct and will produce the same results"
    ],
    ans: 0
  },
  {
    q: "A retail database has the following query:\nSELECT p.product_name, SUM(o.quantity) AS total_sold\nFROM products p\nJOIN orders o ON p.product_id = o.product_id\nWHERE o.order_date >= '2025-01-01'\nGROUP BY p.product_name\nORDER BY total_sold DESC;\nAnalyse the execution order of this query:",
    opts: [
      "JOIN → WHERE → GROUP BY → SELECT → ORDER BY",
      "WHERE → JOIN → SELECT → GROUP BY → ORDER BY",
      "SELECT → JOIN → WHERE → GROUP BY → ORDER BY",
      "FROM → JOIN → WHERE → GROUP BY → SELECT → ORDER BY"
    ],
    ans: 0
  },
  {
    q: "Two queries are written to find departments with an average GPA above 3.5:\nQuery X:\nSELECT dept_id, AVG(gpa) FROM student GROUP BY dept_id HAVING AVG(gpa) > 3.5\nQuery Y:\nSELECT dept_id, AVG(gpa) FROM student WHERE AVG(gpa) > 3.5 GROUP BY dept_id\nWhich statement correctly analyzes these queries?",
    opts: [
      "Both queries will produce identical results because they check the same condition",
      "Query X will execute successfully; Query Y will fail because aggregate functions cannot be used in WHERE clause",
      "Query Y will execute faster because WHERE filters before grouping",
      "Both queries will fail because AVG() cannot be used with GROUP BY"
    ],
    ans: 1
  },
  {
    q: "Analyse the following SQL statements:\nStatement A: DELETE FROM student WHERE student_id = 105\nStatement B: DROP TABLE student\nWhich of the following correctly analyzes these statements?",
    opts: [
      "Statement A removes a single row; Statement B removes the entire table structure",
      "Both statements permanently remove data but Statement A can be rolled back and Statement B cannot",
      "Statement A requires a transaction; Statement B does not",
      "Statement A removes the table structure; Statement B removes rows"
    ],
    ans: 0
  },
  {
    q: "Consider the following scenario:\nA company database has an employees table with 50,000 records. A user runs the following two queries:\nQuery 1: SELECT * FROM employees WHERE last_name = 'Smith' (returns 25 rows)\nQuery 2: SELECT * FROM employees WHERE last_name LIKE '%son' (returns 5,000 rows)\nBased on these results, which conclusion is most accurate?",
    opts: [
      "Query 1 is likely using an index on last_name; Query 2 likely requires a full table scan",
      "Both queries use indexes because they both reference the last_name column",
      "Query 2 is faster because it returns more rows",
      "Neither query can use an index because last_name is not the primary key"
    ],
    ans: 0
  },
  {
    q: "What is the primary purpose of normalisation in database design?",
    opts: [
      "To increase data redundancy for faster access",
      "To reduce data redundancy and improve data integrity",
      "To create more complex table structures",
      "To eliminate all foreign key constraints"
    ],
    ans: 1
  },
  {
    q: "Which normal form requires that all attributes in a table be atomic (no repeating groups or multi-valued attributes)?",
    opts: [
      "2NF",
      "3NF",
      "BCNF",
      "1NF"
    ],
    ans: 3
  },
  {
    q: "What is a functional dependency in a relational database?",
    opts: [
      "A relationship between two tables based on foreign keys",
      "A constraint where one attribute determines another attribute's value",
      "A dependency between the database and application software",
      "A physical storage dependency between tables"
    ],
    ans: 1
  },
  {
    q: "What type of anomaly is eliminated by achieving 2NF?",
    opts: [
      "Repeating groups",
      "Partial dependencies",
      "Transitive dependencies",
      "All anomalies"
    ],
    ans: 1
  },
  {
    q: "Which normal form eliminates transitive dependencies?",
    opts: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    ans: 2
  },
  {
    q: "What is a partial dependency?",
    opts: [
      "When a non-key attribute depends on only part of a composite primary key",
      "When an attribute depends on a non-key attribute",
      "When two tables share a partial relationship",
      "When a primary key depends on a foreign key"
    ],
    ans: 0
  },
  {
    q: "Which condition must be satisfied for a table to be in Boyce-Codd Normal Form (BCNF)?",
    opts: [
      "Every attribute must be atomic",
      "Every non-key attribute must depend on the entire primary key",
      "Every determinant must be a candidate key",
      "No transitive dependencies are allowed"
    ],
    ans: 2
  },
  {
    q: "What is a transitive dependency?",
    opts: [
      "When an attribute depends on part of a composite key",
      "When a non-key attribute depends on another non-key attribute, which depends on the primary key",
      "When two attributes have the same values",
      "When a primary key depends on a foreign key"
    ],
    ans: 1
  },
  {
    q: "Consider a table with the structure: order_id | customer | product1 | qty1 | product2 | qty2. Which normal form is violated and why?",
    opts: [
      "1NF is violated because there are repeating groups (product1/qty1, product2/qty2)",
      "2NF is violated because customer depends on only part of the key",
      "3NF is violated because of transitive dependencies",
      "BCNF is violated because of multiple candidate keys"
    ],
    ans: 0
  },
  {
    q: "A table has a composite primary key of (order_id, product_id). The attribute 'customer_name' depends only on order_id, not on the full key. Which normal form is violated?",
    opts: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    ans: 1
  },
  {
    q: "A student table has student_id as primary key. The attributes are: student_id, student_name, dept_id, dept_name, dept_location. If dept_name depends on dept_id, which depends on student_id, which normal form is violated?",
    opts: [
      "1NF",
      "2NF",
      "3NF",
      "No normal form is violated"
    ],
    ans: 2
  },
  {
    q: "A course registration table is in 1NF with the structure: student_id | student_name | course_code | course_title | grade. The primary key is (student_id, course_code). Student_name depends only on student_id. Which normal form is violated?",
    opts: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    ans: 1
  },
  {
    q: "A database designer decomposes a table with partial dependencies into two tables. Which normal form has been achieved?",
    opts: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    ans: 1
  },
  {
    q: "An employee table has the following structure: emp_id (PK) | emp_name | dept_id | dept_name | manager_id | manager_name. The dependencies are: emp_id → emp_name, dept_id, manager_id; dept_id → dept_name; manager_id → manager_name. What is the highest normal form of this table?",
    opts: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    ans: 0
  },
  {
    q: "Consider an unnormalized table showing student course registrations with attributes (student_id, student_name, dept_id, dept_name, course_code, course_title, grade). Which of the following correctly identifies the normalization issue?",
    opts: [
      "The table violates 1NF because it has repeating groups",
      "The table is in 1NF but violates 2NF because student_name and dept_name depend only on student_id, not the full key (student_id, course_code)",
      "The table is in 2NF but violates 3NF because of transitive dependencies",
      "The table is in 3NF and requires no further normalization"
    ],
    ans: 1
  },
  {
    q: "After decomposing the table from Question 15 to 2NF, which tables would result?",
    opts: [
      "Table1: (student_id, student_name, dept_id, dept_name); Table2: (student_id, course_code, grade, course_title)",
      "Table1: (student_id, student_name); Table2: (course_code, course_title); Table3: (student_id, course_code, grade); Table4: (dept_id, dept_name)",
      "Table1: (student_id, student_name, dept_id); Table2: (course_code, course_title); Table3: (student_id, course_code, grade); Table4: (dept_id, dept_name)",
      "Table1: (student_id, student_name, dept_id, dept_name); Table2: (course_code, course_title); Table3: (student_id, course_code, grade)"
    ],
    ans: 2
  },
  {
    q: "A database table is normalized to 3NF. Which anomalies are still potentially present?",
    opts: [
      "No anomalies remain at 3NF",
      "Insert, update, and delete anomalies are completely eliminated",
      "Some anomalies may remain that require BCNF to eliminate",
      "Only delete anomalies remain"
    ],
    ans: 2
  },
  {
    q: "Analyse two decomposition scenarios: Scenario A (decomposed step-by-step 1NF → 2NF → 3NF) vs. Scenario B (directly decomposed into 3NF). Which statement correctly analyzes these scenarios?",
    opts: [
      "Scenario A is always more efficient than Scenario B",
      "Scenario B might skip critical dependency analysis that Scenario A reveals",
      "Both scenarios produce identical results because the final 3NF tables are the same regardless of process",
      "Scenario B is preferred because it saves time"
    ],
    ans: 1
  },
  {
    q: "Consider dependencies: student_id → student_name, dept_id; dept_id → dept_name, dept_head; course_code → course_title, credits; (student_id, course_code) → grade, semester. Which statement correctly analyzes the normalization status?",
    opts: [
      "The table with all attributes violates 1NF because course_code and student_id form a composite key",
      "Student_name, dept_id, and dept_name create partial dependencies on student_id, violating 2NF",
      "dept_id → dept_name is a transitive dependency that violates 3NF",
      "Both partial dependencies (student_name, dept_id) and transitive dependencies (dept_name via dept_id) exist"
    ],
    ans: 3
  },
  {
    q: "A database administrator reviews a decomposition plan for Order(order_id, customer_id, customer_name, product_id, product_name, quantity, order_date). Proposed: Orders, Customers, Order_Items, Products. Which statement is correct?",
    opts: [
      "The decomposition achieves 2NF but fails to achieve 3NF",
      "The decomposition achieves 3NF and eliminates all partial and transitive dependencies",
      "The decomposition still has partial dependencies because quantity depends on product_id",
      "The decomposition is unnecessary because the original table is already in 3NF"
    ],
    ans: 1
  },
  {
    q: "Which of the following correctly lists the three pillars of database security?",
    opts: [
      "Encryption, Firewalls, Passwords",
      "Authentication, Authorization, Audit trails",
      "Backups, Recovery, Replication",
      "Views, Grants, Revokes"
    ],
    ans: 1
  },
  {
    q: "What is the purpose of authentication in database security?",
    opts: [
      "To determine what actions a user can perform",
      "To verify the identity of users before granting access",
      "To log all data access events",
      "To encrypt sensitive data"
    ],
    ans: 1
  },
  {
    q: "What does the GRANT statement in SQL accomplish?",
    opts: [
      "Removes permissions from a user",
      "Creates a new database user",
      "Gives specific permissions to a user or role",
      "Encrypts data for security"
    ],
    ans: 2
  },
  {
    q: "What is a dirty read anomaly in database concurrency?",
    opts: [
      "Reading data that has been permanently committed",
      "Reading data written by a transaction that later rolls back",
      "Reading the same row twice with different values",
      "Reading data that has been deleted"
    ],
    ans: 1
  },
  {
    q: "Which isolation level prevents dirty reads?",
    opts: [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
    ],
    ans: 1
  },
  {
    q: "What is a non-repeatable read anomaly?",
    opts: [
      "A transaction reads data written by a transaction that rolls back",
      "A transaction re-executes a query and new rows appear",
      "A transaction reads the same row twice and gets different values because another transaction modified it",
      "A transaction cannot read data because of a lock"
    ],
    ans: 2
  },
  {
    q: "Which isolation level prevents phantom reads?",
    opts: [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
    ],
    ans: 3
  },
  {
    q: "What is write-ahead logging (WAL)?",
    opts: [
      "A logging system where changes are recorded after being applied to the database",
      "A logging system where every change is recorded in a log before it is applied to the database",
      "A logging system that only records committed transactions",
      "A logging system that records user login attempts"
    ],
    ans: 1
  },
  {
    q: "A teaching assistant should be able to view student names but not their GPA or email. Which SQL statements would enforce this requirement?",
    opts: [
      "CREATE VIEW student_view AS SELECT student_id, full_name, dept_id FROM student; GRANT SELECT ON student_view TO teaching_assistant;",
      "GRANT SELECT ON student TO teaching_assistant; REVOKE SELECT ON student.gpa, student.email FROM teaching_assistant;",
      "CREATE VIEW student_view AS SELECT * FROM student; GRANT SELECT ON student_view TO teaching_assistant;",
      "GRANT SELECT(student_id, full_name, dept_id) ON student TO teaching_assistant;"
    ],
    ans: 0
  },
  {
    q: "Two bank tellers are simultaneously processing withdrawals from the same account. They read the balance of $500, both process withdrawals of $100, and both update the balance to $400. What anomaly has occurred?",
    opts: [
      "Dirty read",
      "Non-repeatable read",
      "Phantom read",
      "Lost update"
    ],
    ans: 3
  },
  {
    q: "A database crashes during a batch update. Which recovery mechanism would the DBMS use to restore the database to a consistent state?",
    opts: [
      "Authentication logs",
      "Write-ahead logs and checkpoints",
      "Authorization tables",
      "Encryption keys"
    ],
    ans: 1
  },
  {
    q: "A finance system needs to ensure that when a transaction transfers money between accounts, either both accounts are updated or neither is. Which database feature is required?",
    opts: [
      "Write-ahead logging",
      "GRANT and REVOKE statements",
      "Transaction management with COMMIT and ROLLBACK",
      "Indexes and query optimization"
    ],
    ans: 2
  },
  {
    q: "A hospital database administrator notices that a doctor can view patient data but should only see records for their own patients. Which security feature would enforce this?",
    opts: [
      "Views that filter by doctor_id",
      "GRANT ALL ON patients TO doctor",
      "Creating an index on doctor_id",
      "Using write-ahead logging"
    ],
    ans: 0
  },
  {
    q: "A company has an employee who transferred to a different department. The DBA needs to remove the employee's access to the old department's sensitive data. Which SQL statement should be used?",
    opts: [
      "GRANT SELECT ON sensitive_data TO employee",
      "REVOKE SELECT ON sensitive_data FROM employee",
      "DELETE FROM sensitive_data WHERE employee_id = ...",
      "UPDATE sensitive_data SET access = 'denied'"
    ],
    ans: 1
  },
  {
    q: "Analyse the following security scenario: A database has sensitive salary information. The DBA creates a view that excludes salary and grants SELECT on the view to all managers. However, managers can still run queries that join the view with other tables to infer salary information. Which statement correctly analyses this situation?",
    opts: [
      "The view provides complete security and no further measures are needed",
      "The view alone may not be sufficient; additional column-level permissions or row-level security may be required",
      "The problem is that the DBA should have used GRANT instead of views",
      "Managers should have REVOKE permissions on all tables"
    ],
    ans: 1
  },
  {
    q: "Consider a transaction sequence where T1 and T2 both read Account A balance ($1000). T1 withdraws $200 (updates to $800), T2 withdraws $300 (updates to $700), T1 commits, then T2 commits. Which statement correctly analyzes this scenario?",
    opts: [
      "This is a dirty read anomaly because T2 read uncommitted data",
      "This is a lost update anomaly because T2's update overwrote T1's update without considering it",
      "This is a phantom read anomaly because data appeared that wasn't there before",
      "This is a non-repeatable read anomaly because T1 read the same data twice"
    ],
    ans: 1
  },
  {
    q: "A database recovery plan periodically creates checkpoints, maintains a WAL, and on crash redoes committed transactions and undoes uncommitted transactions from the last checkpoint. Analyse this plan:",
    opts: [
      "The plan is flawed because checkpoints are not needed for recovery",
      "The plan correctly implements WAL recovery with undo/redo operations",
      "The plan should redo uncommitted transactions and undo committed transactions",
      "The plan is flawed because checkpoints should occur after log writes"
    ],
    ans: 1
  },
  {
    q: "In a course registration system, Student A sees 2 spots and registers (spots -> 1). Student B simultaneously sees 2 spots and registers (spots -> 0). If Student B was prevented from seeing original spots until Student A completed, which anomaly was prevented?",
    opts: [
      "Dirty read",
      "Lost update",
      "Non-repeatable read",
      "Phantom read"
    ],
    ans: 0
  },
  {
    q: "Consider isolation levels vs anomalies: READ UNCOMMITTED (all possible), READ COMMITTED (dirty read prevented), REPEATABLE READ (dirty/non-repeatable prevented), SERIALIZABLE (all prevented). Analyse this matrix:",
    opts: [
      "The table is correct - isolation levels progressively eliminate anomalies",
      "The table is incorrect - READ COMMITTED also prevents non-repeatable reads",
      "The table is incorrect - REPEATABLE READ allows dirty reads",
      "The table is incorrect - SERIALIZABLE still allows phantom reads"
    ],
    ans: 0
  },
  {
    q: "A database crashes at 2:00 PM (Checkpoint at 1:00 PM). T1 (12:30-12:45 PM committed), T2 (1:15 PM active at crash), T3 (1:45-1:55 PM committed). During recovery using WAL:",
    opts: [
      "T1 and T3 are redone; T2 is undone",
      "T1, T2, and T3 are all redone",
      "T1 and T2 are redone; T3 is undone",
      "Only T3 is redone; T1 and T2 are undone"
    ],
    ans: 0
  },
  {
    q: "What is the purpose of an Entity-Relationship (ER) diagram in database design?",
    opts: [
      "To write SQL queries",
      "To visually represent entities, attributes, and relationships in a database",
      "To normalize tables to 3NF",
      "To create indexes for query optimization"
    ],
    ans: 1
  },
  {
    q: "In an ER diagram for a hospital system, what is an appropriate primary key for a Patient entity?",
    opts: [
      "Patient name",
      "Patient address",
      "Patient ID",
      "Patient date of birth"
    ],
    ans: 2
  },
  {
    q: "What does cardinality represent in an ER diagram?",
    opts: [
      "The number of attributes in an entity",
      "The numerical relationship between entities (e.g., one-to-many)",
      "The data type of attributes",
      "The primary key of a table"
    ],
    ans: 1
  },
  {
    q: "What is a natural key in database design?",
    opts: [
      "A system-generated unique identifier",
      "An attribute that naturally identifies an entity from the real world (e.g., social security number)",
      "A foreign key referencing another table",
      "A key that consists of multiple columns"
    ],
    ans: 1
  },
  {
    q: "What is a surrogate key?",
    opts: [
      "A real-world attribute that identifies an entity",
      "A system-generated unique identifier with no business meaning",
      "A foreign key that references multiple tables",
      "A key that is derived from other attributes"
    ],
    ans: 1
  },
  {
    q: "What is the purpose of a transaction in database systems?",
    opts: [
      "To create new tables",
      "To ensure a group of operations succeed or fail as a single unit",
      "To grant permissions to users",
      "To create indexes for performance"
    ],
    ans: 1
  },
  {
    q: "When would an index NOT speed up a query?",
    opts: [
      "When the indexed column is used in a WHERE clause with equality",
      "When the indexed column is used in a WHERE clause with a range condition",
      "When the indexed column is used in ORDER BY",
      "When the indexed column is in a small table or the query matches most rows"
    ],
    ans: 3
  },
  {
    q: "What does a B-tree index provide in a database?",
    opts: [
      "Encryption of data",
      "Rapid location of records without full table scan",
      "Automatic backup of data",
      "Referential integrity enforcement"
    ],
    ans: 1
  },
  {
    q: "A hospital database needs to track patients, doctors, and appointments. Which ER relationship correctly describes a typical appointment?",
    opts: [
      "A patient has many appointments; a doctor has many appointments; each appointment involves one patient and one doctor",
      "A patient has one appointment; a doctor has one appointment",
      "A patient has many appointments; a doctor has one appointment",
      "A patient has one appointment; a doctor has many appointments"
    ],
    ans: 0
  },
  {
    q: "A database designer is creating a schema for a university. Which attribute would be a better surrogate key for the student table than a natural key?",
    opts: [
      "Student ID number (institution-generated)",
      "National Identification Number (NIN)",
      "Student's full name",
      "Student's email address"
    ],
    ans: 0
  },
  {
    q: "A developer needs to retrieve all students in the Data Science department with GPA above 3.5, sorted by GPA descending. Which SQL query accomplishes this?",
    opts: [
      "SELECT * FROM student JOIN department ON student.dept_id = department.dept_id WHERE dept_name = 'Data Science' AND gpa > 3.5 ORDER BY gpa DESC",
      "SELECT * FROM student WHERE gpa > 3.5 ORDER BY gpa DESC",
      "SELECT * FROM student JOIN department ON student.dept_id = department.dept_id WHERE dept_name = 'Data Science' ORDER BY gpa DESC",
      "SELECT * FROM student WHERE dept_name = 'Data Science' AND gpa > 3.5"
    ],
    ans: 0
  },
  {
    q: "A developer creates an index on the GPA column of a student table. Which query would benefit MOST from this index?",
    opts: [
      "SELECT * FROM student WHERE gpa = 3.85",
      "SELECT * FROM student WHERE gpa BETWEEN 3.0 AND 4.0",
      "SELECT * FROM student ORDER BY gpa",
      "SELECT AVG(gpa) FROM student"
    ],
    ans: 0
  },
  {
    q: "Consider an unnormalized table with student_id, student_name, dept_id, dept_name, course_code, course_title, grade. The functional dependencies are: student_id → student_name, dept_id; dept_id → dept_name; course_code → course_title; student_id, course_code → grade. Which tables should be created to achieve 2NF?",
    opts: [
      "Students(student_id, student_name, dept_id); Courses(course_code, course_title); Registration(student_id, course_code, grade, dept_name)",
      "Students(student_id, student_name, dept_id, dept_name); Courses(course_code, course_title); Registration(student_id, course_code, grade)",
      "Students(student_id, student_name, dept_id); Departments(dept_id, dept_name); Courses(course_code, course_title); Registration(student_id, course_code, grade)",
      "Students(student_id, student_name); Departments(dept_id, dept_name); Courses(course_code, course_title); Registration(student_id, course_code, grade)"
    ],
    ans: 2
  },
  {
    q: "A teaching assistant needs to view student names and departments but should NOT see GPA or email. Which SQL statements correctly implement this?",
    opts: [
      "CREATE VIEW student_public AS SELECT student_id, full_name, dept_id FROM student; GRANT SELECT ON student_public TO teaching_assistant;",
      "GRANT SELECT ON student TO teaching_assistant; REVOKE SELECT(gpa, email) ON student FROM teaching_assistant;",
      "CREATE VIEW student_public AS SELECT * FROM student WHERE dept_id IS NOT NULL; GRANT SELECT ON student_public TO teaching_assistant;",
      "GRANT SELECT(full_name, dept_id) ON student TO teaching_assistant;"
    ],
    ans: 0
  },
  {
    q: "Consider a hospital database where appointments involve one patient and one doctor. Table: Appointments(appointment_id, patient_id, patient_name, doctor_id, doctor_name, date, time, diagnosis). Dependencies: appointment_id → patient_id, doctor_id, date, time, diagnosis; patient_id → patient_name; doctor_id → doctor_name. Identify the correct statement:",
    opts: [
      "The table is in 2NF because appointment_id is the primary key",
      "The table violates 2NF because patient_name depends on patient_id, not the full key",
      "The table violates 1NF because diagnosis contains repeating groups",
      "The table is in 3NF because no transitive dependencies exist"
    ],
    ans: 1
  },
  {
    q: "A course registration system has a sequence where T1 and T2 read 5 spots, T1 updates to 4, T2 updates to 4, T1 commits, then T2 commits. Identify the anomaly:",
    opts: [
      "Dirty read - T2 read uncommitted data",
      "Lost update - T2 overwrote T1's update",
      "Phantom read - new rows appeared",
      "Non-repeatable read - T1 read different values"
    ],
    ans: 1
  },
  {
    q: "Analyse the decomposition plan for Order(order_id, customer_id, customer_name, product_id, product_name, quantity, order_date) into Orders, Customers, Order_Items, Products:",
    opts: [
      "The plan achieves 3NF but fails to achieve 2NF",
      "The plan achieves 3NF and eliminates all partial and transitive dependencies",
      "The plan fails because order_date depends on product_id",
      "The plan is unnecessary because the original table is already in 3NF"
    ],
    ans: 1
  },
  {
    q: "A database crashes during a batch update. Log shows T1 committed, T2 started (active at crash), T3 committed. Recovery steps:",
    opts: [
      "T1 and T3 are redone; T2 is undone",
      "T1, T2, and T3 are all redone",
      "Only T1 is redone; T2 and T3 are undone",
      "T1 and T2 are redone; T3 is undone"
    ],
    ans: 0
  },
  {
    q: "Consider Option A (Create view excluding sensitive columns + GRANT SELECT) vs Option B (Grant SELECT on base table with column permissions). Which statement correctly analyzes these options?",
    opts: [
      "Option A provides better performance than Option B",
      "Option A is simpler to implement but may still allow inference attacks through joins",
      "Option B is more secure because it directly controls column access",
      "Both options provide identical security guarantees"
    ],
    ans: 1
  },
  {
    q: "In a performance test, Query X (indexed) runs in 0.3s and Query Y (non-indexed) runs in 15s. Adding 5 columns changes Query X to 0.5s while Query Y remains 15s. Which conclusion is MOST accurate?",
    opts: [
      "Adding columns improved Query X because the index was rebuilt",
      "The index provides consistent performance improvement even when table size grows",
      "The additional columns slowed Query X because the index had to be updated",
      "The index is no longer useful because the table has changed"
    ],
    ans: 1
  }
];
