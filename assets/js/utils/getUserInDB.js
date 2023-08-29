const users = [
  { username: "user1", password: 'password' },
  { username: "user2", password: 'password' },
]

export function getUserInDB(username, password) {
  const userExists = users.find(user => user.username === username && user.password === password)

  if (userExists) {
    return true
  } else {
    return false
  }
}