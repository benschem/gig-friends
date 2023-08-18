let users = [
  { id: 1, first_name: "Ben", last_name: "Schembri", location: "Melbourne" },
  { id: 2, first_name: "Bastien", last_name: "Goepfert", location: "Paris" },
];

export function allUsers() {
  return users;
}

export function findUserById(id) {
  return users.find((user) => user.id === id);
}

export function createUser(user) {
  const newUser = { ...user, id: users.length + 1 };
  users.push(newUser);
  return newUser;
}

export function updateUser(id, updates) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    return users[index];
  }
  return null;
}

export function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    return true;
  }
  return false;
}
