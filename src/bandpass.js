class Bandpass {

filter(minimum=40, maximum=1000, freqs){
  let [min, max, array] = this.argumentValidation(minimum, maximum, freqs)
  this.inputValidation(min, max, array)

  let filteredFreqs = []
  array.forEach(item => {
    if(item < min) filteredFreqs.push(min)
    if(item > max) filteredFreqs.push(max)
    if(item >= min && item <= max) filteredFreqs.push(item)
  })

  return filteredFreqs
}

argumentValidation(min, max, array){
  let args = []
  Array.isArray(min) === true ? args.push(40) : args.push(min)
  Array.isArray(min) === true ? args.push(1000) : args.push(max)
  Array.isArray(min) === true ? args.push(min) : args.push(array)
  return args
}

inputValidation(min, max, array) {
  if(/[^0-9]/.test(array.join(""))) throw new Error("Frequencies must be numbers")
  if(array.length === 0) throw new Error("No frequencies given")
}

}

module.exports = Bandpass
