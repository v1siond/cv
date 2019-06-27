const debounce = (fn, time, thisA) => {
  let timeout

  return (...rest) => {
    const functionCall = () => fn.apply(thisA, rest)
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}

export default debounce
