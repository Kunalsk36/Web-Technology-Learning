let user = document.getElementById("user")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let submit = document.getElementById("submit")
let login = document.getElementById("login")
let result = document.getElementById("result")

submit.addEventListener("click",() => {
  localStorage.setItem("username", user.value)
  localStorage.setItem("email", email.value)
  localStorage.setItem("pass", pass.value)
})

login.addEventListener("click", (event)=> {
  event.preventDefault()
   email.remove("style")
  if(user.value == localStorage.getItem("username") && pass.value === localStorage.getItem("pass")){
    result.innerHTML = "Login Succefully"
    result.style.color = "green"
  }
  else{
    result.innerHTML = "Invalid Credential"
    result.style.color  = "red"
  }
})


/**
 * *Fetch API*
-website: Free API Postman and Free api
 
---localStorage---
-browser provides an temporary database called localStorage.
-in localStorage the data will store permanent and date store in key and value.
-it is not safe and secured
-its don't have larger memory it is having 10 MB storage.

 * methods**
setItem()- -we store date in key value pair
-two parameters accepts key and value
-syntax:localStorage("key","value")
-Ex:
localStorage.setItem("Place","pune")
 
2) getItem():
-access the data
Syntax: let identifier = localStorage.getItme("Key")
Ex: let place = localStorage.getItme("place")

3) removeItme() =
-remove Data
-permanante delete the data
Syntex : localstorage.removeItme("key")
Ex : localSTorage.removeItem("place")

4)clear-
-clear the database
Syntax:localStorage.clear()




---sessionStorage----
once of we will close browser the data will be wanish
 */