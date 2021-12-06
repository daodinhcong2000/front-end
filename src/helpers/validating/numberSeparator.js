const numberSeparator = (x, separator = '.') => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}

export default numberSeparator
