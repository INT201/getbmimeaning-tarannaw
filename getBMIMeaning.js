const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  
  return BMI = weight/(height*height)

}
function getBMIMeaning(weight, height) {
  
  let getBMI = calculateBMI(weight, height)

  if (getBMI < 18.5) {
    return 'Underweight'
  } else if (getBMI < 25) {
    return 'Normal weight'
  } else if (getBMI > 25) {
    return 'Overweight'
  }

}
module.exports = getBMIMeaning
