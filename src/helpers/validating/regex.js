const username = /[a-z0-9]{3,30}/
const password = /.{8,}/
const phoneNumber = /^([+84|84|0]+([35789]))+([0-9]{8})$/
const email = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/

module.exports = {
    username,
    password,
    phoneNumber,
    email
}