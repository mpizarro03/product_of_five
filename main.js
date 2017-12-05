function multiply( num1, num2 ){
  return parseInt( num1 ) * parseInt( num2 )
}

function productOfFive(input){
  if (input.toString().length < 5) {
    return "number must be at least 5 digits"
  }
  if (input.toString().length > 16 & typeof input != "string") {
    return "large numbers must be passed as a string"
  }
  let productList = []
  let inputArr = input.toString().split('')
  let numToMultiply = 5

  for(let i =0; i <= inputArr.length - numToMultiply; i++){
    let newA = inputArr.slice(i, i + numToMultiply)
    productList.push(newA.reduce( multiply, 1 ))
  }

  return Math.max(...productList)
}

module.exports = {
  productOfFive,
  multiply
}
