const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const isEmail = (email: string) => email.match(emailRegex)
export default isEmail