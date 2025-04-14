function sayHello() {
        let message = document.getElementById("message")
        message.textContent = "Hello!"
      
  }
  
  function showName() {
    let nameInput = document.getElementById("nameInput")
    let output = document.getElementById("output")
     output.textContent = "Welcome, " + nameInput.value + "!"
  }