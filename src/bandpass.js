class Bandpass {

filter(min, max, array){
  this.inputValidation(min, max, array)

  let filteredFreqs = []
  array.forEach(item => {
    if(item < min) filteredFreqs.push(min)
    if(item > max) filteredFreqs.push(max)
    if(item >= min && item <= max) filteredFreqs.push(item)
  })

  return filteredFreqs
}

inputValidation(min, max, array) {
  if(/[^0-9]/.test(array.join(""))) throw new Error("Frequencies must be numbers")
  if(array.length === 0) throw new Error("No frequencies given")
}

}

module.exports = Bandpass
