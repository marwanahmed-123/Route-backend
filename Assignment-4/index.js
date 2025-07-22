//Marawan Ahmed - 01149830040 - Assignment 3 - Sat&Tue 8:00 PM - 7marawan7@gmail.com
//======================================================================================
//===================================== part 1 =========================================
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const databasePath = "./database/users.json";

app.use(express.json());
//======================================================================================
if (!fs.existsSync(databasePath)) {
  try {
    if (!fs.existsSync("./database")) {
      fs.mkdirSync("./database");
    }
    fs.writeFileSync(
      databasePath,
      JSON.stringify({ count: 0, users: [] }, null, 2)
    );
  } catch (err) {
    console.log(err);
  }
}
//======================================================================================
function getUsers() {
  try {
    let data = fs.readFileSync(databasePath);
    data = JSON.parse(data);
    return data.users;
  } catch (err) {
    console.log(err);
  }
}
function getUsersCount() {
  try {
    let data = fs.readFileSync(databasePath);
    data = JSON.parse(data);
    return data.count;
  } catch (err) {
    console.log(err);
  }
}
function saveUsers(users, count) {
  try {
    fs.writeFileSync(
      databasePath,
      JSON.stringify({ count: count, users: users }, null, 2)
    );
  } catch (err) {
    console.log(err);
  }
}
function isValidEmail(email) {
  const users = getUsers();
  let flag = true;
  users.forEach((user) => {
    if (user.email == email) {
      flag = false;
    }
  });
  return flag;
}
function addUser(user) {
  let users = getUsers();
  let count = getUsersCount();
  if (isValidEmail(user.email)) {
    count++;
    user.id = count;
    users.push(user);
    saveUsers(users, count);
    return true;
  }
  return false;
}
function updateUser(id, newUser) {
  let users = getUsers();
  const index = getUserById(id);
  users[index].email = newUser.email || users[index].email;
  users[index].name = newUser.name || users[index].name;
  users[index].age = newUser.age || users[index].age;
  saveUsers(users, getUsersCount());
}
function getUserById(id) {
  const users = getUsers();
  let index = users.findIndex((user) => {
    return user.id == id;
  });
  return index;
}
function getUserByName(name) {
  let result = [];
  let users = getUsers();
  users.forEach((user) => {
    if (user.name.toLowerCase() == name) {
      result.push(user);
    }
  });
  return result;
}
function filterUsersUsingMinAge(age) {
  const users = getUsers();
  let result = [];
  users.forEach((user) => {
    if (user.age >= age) {
      result.push(user);
    }
  });
  return result;
}
function deleteUserById(id) {
  try {
    let users = getUsers();
    const index = getUserById(id);
    users.splice(index, 1);
    saveUsers(users, getUsersCount() - 1);
    return true;
  } catch (err) {
    throw new Error(`Error deleting element ${id}`);
  }
}
//======================================================================================
app.post("/user", (req, res) => {
  try {
    const user = req.body;
    if (addUser(user)) {
      res.status(200);
      res.json({ message: "User added successfully" });
    } else {
      res.status(409);
      res.json({ message: "Email already in use." });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: err });
  }
});
app.patch("/user/:id", (req, res) => {
  try {
    const newUser = req.body;
    if (getUserById(parseInt(req.params.id)) == -1) {
      res.status(404);
      res.json({ message: "Invalid id." });
    } else if (!isValidEmail(newUser.email)) {
      res.status(409);
      res.json({ message: "Email already in use." });
    } else {
      updateUser(parseInt(req.params.id), newUser);
      res.status(200);
      res.json({ message: "User updated successfully." });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: `error updating user ${err}` });
  }
});
app.delete("/user{/:id}", (req, res) => {
  try {
    let id = -1;
    if (req.params.id) {
      id = parseInt(req.params.id);
    } else if (req.body.id) {
      id = parseInt(req.body.id);
    } else {
      res.status(400);
      res.json({ message: `ID is required to delete user.` });
    }
    if (id != -1 && getUserById(id) != -1) {
      deleteUserById(id);
      res.status(200);
      res.json({ message: `User with id ${id} deleted successfully` });
    } else {
      res.status(404);
      res.json({ message: `User with id ${id} not found` });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: `error deleting user ${err}` });
  }
});
app.get("/user/getByName", (req, res) => {
  try {
    const name = req.query.name;
    let result = getUserByName(name.toLowerCase());
    if (result.length != 0) {
      res.status(200);
      res.json({ users: result });
    } else {
      res.status(404);
      res.json({ message: `User name ${name} does not exist` });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: `Error getting user by name ${err}` });
  }
});
app.get("/user", (req, res) => {
  try {
    users = getUsers();
    if (users.length != 0) {
      res.status(200);
      res.json({ users: users });
    } else {
      res.status(404);
      res.json({ message: "There is no users in the system" });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: `Error getting users ${err}` });
  }
});
app.get("/user/filter", (req, res) => {
  try {
    const minAge = req.query.minAge;
    if (minAge > 0) {
      users = filterUsersUsingMinAge(minAge);
      if (users.length != 0) {
        res.status(200);
        res.json({ users: users });
      } else {
        res.status(404);
        res.json({ message: "No users found" });
      }
    } else {
      res.status(400);
      res.json({ message: `Enter a valid age` });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: `error getting users using minimum age: ${err}` });
  }
});
app.get("/user/:id", (req, res) => {
  try {
    const id = req.params.id;
    const index = getUserById(id);
    if (id > 0 && index != -1) {
      const users = getUsers();
      res.status(200);
      res.json({ user: users[index] });
    } else {
      res.status(404);
      res.json({ message: `User not found` });
    }
  } catch (err) {
    res.status(500);
    res.json({ message: `error getting user using id: ${err}` });
  }
});
//======================================================================================
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
