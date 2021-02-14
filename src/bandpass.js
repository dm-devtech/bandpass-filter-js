class Bandpass {

filter(min, max, array){
  if(array.length === 0) throw new Error("No frequencies given")

  let filteredFreqs = []
array.forEach(item => {
  if(item < min) filteredFreqs.push(min)
  if(item > max) filteredFreqs.push(max)
  if(item >= min && item <= max) filteredFreqs.push(item)
})

  return filteredFreqs
}

}

module.exports = Bandpass
