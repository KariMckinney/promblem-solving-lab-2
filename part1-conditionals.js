// Grade checker
// Print A, B, C, D, or F based on score

let score = 82;

if (score >= 90) 
    console.log("A")
else if (score >= 80)
    console.log("B")
else if (score >= 70)
    console.log("C")
else if (score >= 60)
    console.log("D")
else 
    console.log ("F")


// Pizza Quantity Warning
// Print warning if quantity > 10

let quantity = 12;
if (quantity > 10){
    console.log("Warning the quantity is over 10!")
}


// Login Simulator
// Print "Access granted" or "Access denied"

let password = "letmein"; // or use prompt
if (password) {
    console.log("Access granted");
  } else { 
    console.log("Access denied");
  }