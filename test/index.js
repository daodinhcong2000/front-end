const datesToNow = (date) => {
  const created = new Date(date).getTime()
  const dates = Math.floor((Date.now() - created) / 1000 / 60 / 60 / 24)
  if (dates < 30) {
    return `${dates} ngày`
  } else {
    const months = Math.floor(dates / 30)
    if (months < 12) {
      return `${months} tháng`
    } else {
      const years = Math.floor(dates / 12)
      return `${years} năm`
    }
  }
}

console.log(datesToNow('2021-11-13T18:00:29.591Z'))
