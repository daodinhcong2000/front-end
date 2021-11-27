module.exports = query => {
    return Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&')
}