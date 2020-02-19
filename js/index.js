let unameUser=[];
let passUser=[];
let unameAdmin=[];
let passwdAdmin=[];
let usertype=[];
let type;

 const registerAdmin = () =>{
    
   
    let username = document.getElementById("uname").value;
    let password = document.getElementById("newpass").value;
    let confirmPass = document.getElementById("confirmpass").value;
    
    if (! password == confirmPass){
        alert("Both new Password and Confirm Password are not Match");
    }
else{
    unameAdmin.push(username);
    passwdAdmin.push(password);
   

    localStorage.setItem("unameAdmin",JSON.stringify(unameAdmin));
    localStorage.setItem("passAdmin",JSON.stringify(passwdAdmin));
   
}
}
const registerStudent = () =>{
    
    let username = document.getElementById("uname").value;
    let password = document.getElementById("newpass").value;
    let confirmPass = document.getElementById("confirmpass").value;
    
    if (! password == confirmPass){
        alert("Both new Password and Confirm Password are not Match");
    }
else{
    unameUser.push(username);
    passUser.push(password);
   // usertype.push("Student");

    //localStorage.setItem("utype",JSON.stringify(usertype));
    localStorage.setItem("unameUser",JSON.stringify(unameUser));
    localStorage.setItem("passUser",JSON.stringify(passUser));
}
}

const validateStudent = () =>{
    let uname = document.getElementById("uname").value;
    let password =document.getElementById("password").value;

    let storeunameUser =JSON.parse(localStorage.getItem("unameUser"));
    let storepassUser =JSON.parse(localStorage.getItem("passUser"));
    let logintype = JSON.parse(localStorage.getItem("utype"));

    if(storeunameUser.includes(uname) && storepassUser.includes(password)) {
       sessionStorage.setItem("s",uname);
        window.location.assign("user.html");
    }
}
const validateAdmin = () => {
    let uname = document.getElementById("uname").value;
    let password =document.getElementById("password").value;

    let storeunameAdmin = JSON.parse(localStorage.getItem("unameAdmin"));
    let storepassAdmin  =  JSON.parse(localStorage.getItem("passAdmin"));

    
    let logintype = JSON.parse(localStorage.getItem("utype"));
    console.log(logintype);
   
    if (storeunameAdmin.includes(uname) && storepassAdmin.includes(password) && logintype.includes(type)){
        sessionStorage.setItem("a",uname);
        window.location.assign("admin.html");
    }
     
    else{
alert("UserName or Password incorrect");
    }


}
function registration(){
   let flag = document.getElementsByName("r1");
  
      //console.log(flag[i].value);
     if (flag[0].checked){
          type ="Admin";
          //console.log("if",flag[i].value);
          console.log(type);
      }
      else{
          type = "Student";
          console.log(type);
      } 
    
if (type == "Admin"){
 registerAdmin();
 usertype.push("Admin");
 localStorage.setItem("utype",JSON.stringify(usertype));
 alert("Admin Successfuly register");
}   
else{
    registerStudent();
    usertype.push("student");
    localStorage.setItem("utype",JSON.stringify(usertype));
    alert("User successfully Register");
}
}//
//}
//else{
  //  alert("error")
//}


function login(){
    let flag = document.getElementsByName("r1");
  
      //console.log(flag[i].value);
     if (flag[0].checked){
          type ="Admin";
          //console.log("if",flag[i].value);
          console.log(type);
      }
      else{
          type = "Student";
          console.log(type);
      } 
    
if (type == "Admin"){
 validateAdmin();
 
// alert("Admin Successfuly register");
}   
if(type == "Student"){
    validateStudent();
  //  alert("User successfully Register");
}
}
