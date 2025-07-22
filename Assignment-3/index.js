//Marawan Ahmed - 01149830040 - Assignment 3 - Sat&Tue 8:00 PM - 7marawan7@gmail.com
//======================================================================================
//===================================== part 1 =========================================
const fs = require("fs");
const http = require("http");
const port = 3000;
if (!fs.existsSync("./database/users.json")) {
  fs.mkdirSync("./database");
  fs.writeFileSync(
    "./database/users.json",
    JSON.stringify({ count: 0, users: [] }, null, 2),
    "utf8",
    (err) => {
      console.log(err);
    }
  );
}
function searchUserById(users, id) {
  let index = users.findIndex((user) => {
    return user.id == id;
  });
  return index;
}
function searchByEmail(users, email) {
  let index = users.findIndex((user) => {
    return user.email == email;
  });
  return index;
}
server = http.createServer((req, res) => {
  const { url, method } = req;
  let data = fs.readFileSync("./database/users.json");
  let existingUsers = JSON.parse(data);
  let users = existingUsers.users;
  if (url == "/user") {
    if (method == "POST") {
      try {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
        });
        req.on("end", () => {
          body = JSON.parse(body);
          let newUser = {
            name: body.name,
            age: body.age,
            email: body.email,
            id: 0,
          };
          let index = searchByEmail(users, newUser.email);
          console.log(index);
          if (index != -1) {
            res.writeHead(409, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "Email already exists." }));
          } else {
            existingUsers.count++;
            newUser.id = existingUsers.count;
            existingUsers.users.push(newUser);
            console.log(existingUsers.users);
            fs.writeFileSync(
              "./database/users.json",
              JSON.stringify(existingUsers, null, 2),
              "utf8",
              (err) => {
                throw new Error(`Error creating users.json,${err}`);
              }
            );
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "User added successfully" }));
          }
        });
      } catch (err) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: err }));
      }
    } else if (method == "GET") {
      try {
        const data = fs.readFileSync("./database/users.json");
        res.writeHead(200, { "content-type": "application/json" });
        res.end(data);
      } catch (err) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: err }));
      }
    }
  } else if (url.startsWith("/user/")) {
    const id = url.split("/")[2];
    if (method == "PATCH") {
      try {
        let index = searchUserById(users, id);
        if (index >= 0) {
          let newUserData = "";
          req.on("data", (chunk) => {
            newUserData += chunk;
          });
          req.on("end", () => {
            newUserData = JSON.parse(newUserData);
            if (searchByEmail(users, newUserData.email) != -1) {
              res.writeHead(409, { "content-type": "application/json" });
              res.end(JSON.stringify({ message: "Email in use." }));
            } else {
              users[index].name = newUserData.name || users[index].name;
              users[index].age = newUserData.age || users[index].age;
              users[index].email = newUserData.email || users[index].email;
              fs.writeFileSync(
                "./database/users.json",
                JSON.stringify(existingUsers, null, 2),
                "utf8",
                (err) => {
                  throw new Error(`Error creating users.json,${err}`);
                }
              );
              res.writeHead(200, { "content-type": "application/json" });
              res.end(
                JSON.stringify({ message: "User updated successfully." })
              );
            }
          });
        } else {
          res.writeHead(404, { "content-type": "application/json" });
          res.end(JSON.stringify({ message: "User not found." }));
        }
      } catch (err) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end({ error: err });
      }
    } else if (method == "DELETE") {
      try {
        let index = searchUserById(users, id);
        console.log(index);
        if (index == -1) {
          res.writeHead(404, { "content-type": "application/json" });
          res.end(JSON.stringify({ message: "User not found." }));
        } else {
          users.splice(index, 1);
          existingUsers.count--;
          fs.writeFileSync(
            "./database/users.json",
            JSON.stringify(existingUsers, null, 2),
            "utf8",
            (err) => {
              throw new Error(`Error creating users.json,${err}`);
            }
          );
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify({ message: "User deleted." }));
        }
      } catch (err) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end({ error: err });
      }
    } else if (method == "GET") {
      try {
        let index = searchUserById(users, id);
        if (index == -1) {
          res.writeHead(404, { "content-type": "application/json" });
          res.end(JSON.stringify({ message: "User not found." }));
        } else {
          res.writeHead(404, { "content-type": "application/json" });
          res.end(JSON.stringify({ user: users[index] }));
        }
      } catch (err) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end({ error: err });
      }
    }
  }
});
server.listen(port, () => {
  console.log(`running on ${port}`);
});
//======================================================================================
//===================================== part 2 =========================================
//1. What is the Node.js Event Loop?
//=> The Event Loop is a mechanism that continuously checks if there are events to handle and executes the associated callback functions in the right order
//======================================================================================
//2. What is Libuv and What Role Does It Play in Node.js?
//=> Libuv handles some key operations like cryptography, DNS, compression, and file System to ensure non blocking behaviour in node.js
//======================================================================================
//3. How Does Node.js Handle Asynchronous Operations Under the Hood?
//=> Node.js runs JavaScript in a single thread, but uses libuv to handle async operations efficiently, also uses an event loop to schedule and run completed operations' callbacks.
//======================================================================================
//4. What is the Difference Between the Call Stack, Event Queue, and Event Loop in Node.js?
//=> 1) call stack : it is stack data structure (last in, first out) which is used to keep track of function calls
//   2) event queue :it is queue data structure (first in first out) which is used to hold callbacks waiting to be executed
//   3) event loop : when the call stack is empty, event loop pushes the next callback from the event queue into the call stack
//======================================================================================
//5. What is the Node.js Thread Pool and How to Set the Thread Pool Size?
//=> thread pool is a set of background worker threads managed by libuv that handles non-blocking operations that cannot be handled asynchronously by the OS kernel,
//   default thread pool size is 4 but it can be changed through environment variables but need to be careful while configuring it as it affects my processor performance
//======================================================================================
//6. How Does Node.js Handle Blocking and Non-Blocking Code Execution?
//=> for non blocking code, node.js uses libuv to handle the task using thread pool and os kernel, event loop, callback queue and event loop
//   for blocking code, the function is executed on the main thread so nothing else can run until the task is finished
