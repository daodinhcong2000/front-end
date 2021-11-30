const showView = views => {
    if (views > 1000000) {
        return `${Math.round(views / 100000) / 10}M`
    }
}

console.log(showView(15600000))