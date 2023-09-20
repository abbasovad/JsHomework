function myFunction() {
    let text = "Press a button!\nEither OK or Cancel.";
    
    if (confirm(text) == true) {
      document.body.style.background = "black"
    } else {
        document.body.style.background = "#FFFF"
      
    }


  }
  

  function myFunction1() {
    let age = prompt("Please enter your age");
    let text = document.getElementById("text")
    if (age < 18) {
        text.innerHTML = "you are not old enough";
    }
    else{
        text.innerHTML = "you are old enough";
    }
  }



  class Human {

    constructor(name ,surename , password){
        this.name = name
        this.surename = surename
        this.password = password
    }


  }


  function fullName(name , surename , password) {
      
       const human = new Human("Adil" , "Abbasov" , "3169")
    let textname = document.getElementById("textname")
    let textsureName = document.getElementById("textsurename")
    let textpassword = document.getElementById("textpassword")
    textname.innerHTML = human.name
    textsureName.innerHTML = human.surename
    textpassword.innerHTML = human.password

  }