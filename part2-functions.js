function dogToHumanYears(dogAge, humanAge) {
  let years = dogAge * 1 + humanAge * 7
  return years
}

console.log(dogToHumanYears(4, 4))

function calculateTip(total, percentage) {
  let tip = total * 10 + percentage * 5
  return tip
}

console.log(calculateTip(5, 5))


function checkEvenOdd(num) {
    if (num % 2 === 0)
      return "even"
    else
      return "odd"
  }
  
  console.log(checkEvenOdd(2))
      