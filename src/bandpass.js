export default class Bandpass {

filter(min, max, array){
  // replace frequencies < min with min
  // replace frequencies > max with max
  // output new array
  let filteredFreqs = []

array.forEach(item => {
  if(item < min) filteredFreqs.push(min)
  if(item > max) filteredFreqs.push(max)
  if(item >= min && item <= max) filteredFreqs.push(item)
})

  return filteredFreqs
}

}
