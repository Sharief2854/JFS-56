let nameTextBox=document.getElementById("name");
let numberTextBox=document.getElementById("number");
let emailTextBox=document.getElementById("email");
let passwordTextBox=document.getElementById("password");
let cPasswordTextBox=document.getElementById("cPassword");


function reg(e){
    e.preventDefault();

    let name=nameTextBox.value;
    let number=numberTextBox.value;
    let email=emailTextBox.value;
    let password=passwordTextBox.value;
    let cPassword=cPasswordTextBox.value;

    // let obj={
    //     name:name,
    //     number:number,
    //     emailL:email,
    //     password:password
    // }

    // validation
    // if(name=="" || email=="" || number=="" || password=="" || cPassword==""){
    //     alert("plase fill all the details")
    //     return;
    // }
    // // regex
    // let numberRegex=/^[6-9][0-9]{9}$/;
    // let numberResult=numberRegex.test(number)
    // if(numberResult==false){
    //     alert("check your number")
    //     return;
    // }

    // if(password!=cPassword){
    //     alert("passwoprd is not matching");
    //     return;
    // }

    let obj={
        name,
        number,
        email,
        password
    }

   
    // localStorage.setItem("email",email);
    // localStorage.setItem("name",name);
    
    let str=JSON.stringify(obj)
    localStorage.setItem("userObj",str)
    sessionStorage.setItem("userObj",str)
    // let object=JSON.parse(str);


    // localStorage.removeItem("email")
    // let email=localStorage.getItem("email");
    alert("reg success");
}
