//Marawan Ahmed - 01149830040 - Assignment 5 - Sat&Tue 8:00 PM - 7marawan7@gmail.com
//======================================================================================
//===================================== part 3 =========================================
let mysql = require("mysql2");
let connection = mysql.createConnection({
  user: "root",
  password: "root",
  database: "retail",
  host: "localhost",
  port: 3306,
});
function queryExecution(query) {
  connection.execute(query, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
}
//======================================================================================
// let createTables = () => {
//   let suppliers = `CREATE TABLE IF NOT EXISTS suppliers (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name TEXT,
//     contact_number TEXT
//   )`;
//   queryExecution(suppliers);
//   let products = `CREATE TABLE IF NOT EXISTS products (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name TEXT,
//     price FLOAT,
//     stock_quantity INT,
//     supplier_id INT,
//     FOREIGN KEY(supplier_id) REFERENCES suppliers(id)
//   )`;
//   queryExecution(products);
//   let sales = `CREATE TABLE IF NOT EXISTS sales (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     product_id INT,
//     quantity_sold INT,
//     sale_date DATE,
//     FOREIGN KEY(product_id) REFERENCES products(id)
//   )`;
//   queryExecution(sales);
// };
// createTables();
//======================================================================================
//2- Add a column “Category” to the Products table.
// let addCategory = () => {
//   let addColumn = `ALTER TABLE products ADD category TEXT`;
//   queryExecution(addColumn);
// };
// addCategory();
//======================================================================================
//3- Remove the “Category” column from Products.
// let removeCategory = () => {
//   let removeColumn = `ALTER TABLE products DROP COLUMN category`;
//   queryExecution(removeColumn);
// };
// removeCategory();
//======================================================================================
//4- Change “ContactNumber” column in Suppliers to VARCHAR (15).
// let modifyContactNumber = () => {
//   let modification = `ALTER TABLE suppliers MODIFY contact_number VARCHAR(15)`;
//   queryExecution(modification);
// };
// modifyContactNumber();
//======================================================================================
//5- Add a NOT NULL constraint to ProductName.
// let addConstraintToProductName = () => {
//   let addConstraint = `ALTER TABLE products MODIFY name TEXT NOT NULL`;
//   queryExecution(addConstraint);
// };
// addConstraintToProductName();
//======================================================================================
//6- Perform Basic Inserts
//a. Add a supplier with the name 'FreshFoods' and contact number '01001234567'.
// let addSupplier = () => {
//   let supplier = `INSERT INTO suppliers (name,contact_number) VALUES ('FreshFoods','01001234567')`;
//   queryExecution(supplier);
// };
// addSupplier();
//b. Insert the following three products, all provided by 'FreshFoods':
// let addProducts = () => {
//   let productMilk = `INSERT INTO products (name,price,stock_quantity,supplier_id)VALUES ('Milk', 15.00, 50,1)`;
//   queryExecution(productMilk);
//   let productBread = `INSERT INTO products (name,price,stock_quantity,supplier_id)VALUES ('Bread', 10.00, 30,1)`;
//   queryExecution(productBread);
//   let productEggs = `INSERT INTO products (name,price,stock_quantity,supplier_id)VALUES ('Eggs', 20.00, 40,1)`;
//   queryExecution(productEggs);
// };
// addProducts();
//c. Add a record for the sale of 2 units of 'Milk' made on '2025-05-20'.
// let addProductSales = () => {
//   let MilkSale = `INSERT INTO sales (quantity_sold,sale_date,product_id) VALUES (2,'2025-05-20',1)`;
//   queryExecution(MilkSale);
// };
// addProductSales();
//======================================================================================
//7- Update the price of 'Bread' to 25.00.
// let updateProduct = () => {
//   let updateBreadPrice = `UPDATE products SET price = 25.00 WHERE name ='Bread'`;
//   queryExecution(updateBreadPrice);
// };
// updateProduct();
//======================================================================================
//8- Delete the product 'Eggs'.
// let deleteProduct = () => {
//   let deleteEggs = `DELETE FROM products WHERE name = 'eggs'`;
//   queryExecution(deleteEggs);
// };
// deleteProduct();
//======================================================================================
//9- Retrieve the total quantity sold for each product.
// let getQuantity = () => {
//   let query = `SELECT
//                 p.id AS product_id,
//                 p.name AS product_name,
//                 SUM(s.quantity_sold) AS total_quantity_sold
//                 FROM products p
//                 JOIN sales s ON p.id = s.product_id
//                 GROUP BY p.id ,p.name`;
//   queryExecution(query);
// };
// getQuantity();
//======================================================================================
//10- Get the product with the highest stock.
// let getHighestStock = () => {
//   let query = `SELECT name,stock_quantity FROM products WHERE stock_quantity = (SELECT MAX(stock_quantity) FROM products)`;
//   queryExecution(query);
// };
// getHighestStock();
//======================================================================================
//11- Find suppliers with names starting with 'F'.
// let getHighestStock = () => {
//   let query = `SELECT name FROM suppliers WHERE name LIKE 'F%'`;
//   queryExecution(query);
// };
// getHighestStock();
//======================================================================================
//12- Show all products that have never been sold.
// let getProductsNeverSold = () => {
//   let query = `SELECT p.*
//                 FROM products p
//                 LEFT JOIN sales s ON p.id = s.product_id
//                 WHERE s.product_id IS NULL;`;
//   queryExecution(query);
// };
// getProductsNeverSold();
//======================================================================================
//13- Get all sales along with product name and sale date.
// let getAllSales = () => {
//   let query = `SELECT p.name AS product_name,
//                s.sale_date AS sale_date
//                FROM products p
//                JOIN sales s ON p.id = s.product_id
//                GROUP BY p.name,s.sale_date`;
//   queryExecution(query);
// };
// getAllSales();
//======================================================================================
//14- Create a user “store_manager” and give them SELECT, INSERT, and UPDATE permissions on all tables.
// let addManager = () => {
//   let createUser = `CREATE USER IF NOT EXISTS 'store_manager'#'localhost' IDENTIFIED BY 'pass'`;
//   queryExecution(createUser);
//   let grantPermissions = `GRANT SELECT,INSERT,UPDATE on retail.* TO 'store_manager'`;
//   queryExecution(grantPermissions);
// };
// addManager();
//======================================================================================
//15- Revoke UPDATE permission from “store_manager”.
// let revokePermissions = () => {
//   let grantPermissions = `REVOKE UPDATE on retail.* FROM 'store_manager'`;
//   queryExecution(grantPermissions);
// };
// revokePermissions();
//======================================================================================
//16- Grant DELETE permission to “store_manager”
// let grantPermission = () => {
//   let grantPermissions = `GRANT DELETE on retail.* TO 'store_manager'`;
//   queryExecution(grantPermissions);
// };
// grantPermission();
