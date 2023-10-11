interface User {
  firstName: string,
  lastName: string,
  age: number
}

const defaultUser: User = {
  firstName: "",
  lastName: "",
  age: 0
}

export default User;
export {defaultUser};