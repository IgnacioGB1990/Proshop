import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true
  },
  {
    name: "Jon Snow",
    email: "jon@example.com",
    password: bcrypt.hashSync("1234", 10),

  },
  {
    name: "Daenerys Targearyan",
    email: "dany@example.com",
    password: bcrypt.hashSync("1234", 10),

  },

]

export default users