const usernameRegex = /[a-z0-9]{3,30}/
const passwordRegex = /.{8,}/
const phoneNumberRegex = /^([+84|84|0]+([35789]))+([0-9]{8})$/
const emailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/

const comparePassword = (password, rePassword) => password === rePassword

const validateUsername = username => usernameRegex.exec(username)

const validatePhoneNumber = phoneNumber => phoneNumberRegex.exec(phoneNumber)

const validatePassword = password => passwordRegex.exec(password)

const validateEmail = email => emailRegex.exec(email)

module.exports = props => {
    const { username, password, rePassword, phoneNumber, email } = props

    if (!comparePassword(password, rePassword)) return { message: 'Mật khẩu không khớp!' }
    if (!validateUsername(username)) return { message: 'Tên đăng nhập từ 3 đến 30 ký tự, bao gồm chữ cái và chữ số!' }
    if (!validatePhoneNumber(phoneNumber)) return { message: 'Số điện thoại sai!' }
    if (!validatePassword(password)) return { message: 'Mật khẩu cần ít nhất 8 ký tự!' }
    if (email && !validateEmail(email)) return { message: 'Email sai!' }

    return {}
}