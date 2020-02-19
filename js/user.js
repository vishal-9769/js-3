let u = sessionStorage.getItem("s");
//console.log(u);
document.getElementById("user").innerHTML=u;

let a = document.getElementById("html");
let b = document.getElementById("linux");
let c = document.getElementById("git");
let d = document.getElementById("js");
let e = document.getElementById("react");
let f = document.getElementById("node");

a.style.display="none";
b.style.display="none";
c.style.display="none";
d.style.display="none";
e.style.display="none";
f.style.display="none";

let assignedUserHtml = JSON.parse(localStorage.getItem("html"));
let assignedUserLinux = JSON.parse(localStorage.getItem("Linux"));
let assignedUserGit = JSON.parse(localStorage.getItem("git"));
let assignedUserJs = JSON.parse(localStorage.getItem("js"));
let assignedUserReact = JSON.parse(localStorage.getItem("react"));
let assignedUserNode = JSON.parse(localStorage.getItem("node"));

//let user = JSON.parse(localStorage.getItem("unameUser"));

//let index = user.indexOf(u);

//console.log(index);
//console.log(assignedUserLinux.includes(index));

//function assignDummy(){
    if (assignedUserHtml === null){
        assignedUserHtml.push(0);
    }
     if (assignedUserLinux === null){
        console.log("hh");
        assignedUserLinux=[0]
    }
     if (assignedUserGit === null){
        assignedUserGit=[0]
    }
     if (assignedUserJs === null){
        assignedUserJs=[0]
    }
     if (assignedUserReact === null){
        assignedUserReact=[0]
    }
     if (assignedUserNode === null){
        assignedUserNode=[0]
    }


//console.log(assignedUserLinux);









if(assignedUserHtml.includes(u)){
    //console.log("hii");
    a.style.display="inline";
} if(assignedUserLinux.includes(u)){
    //console.log("hii");
    b.style.display="inline";
} if(assignedUserGit.includes(u)){
    //console.log("hii");
    c.style.display="inline";
} if(assignedUserJs.includes(u)){
    //console.log("hii");
    d.style.display="inline";
} if(assignedUserReact.includes(u)){
    //console.log("hii");
    e.style.display="inline";
} if(assignedUserNode.includes(u)){
    //console.log("hii");
    f.style.display="inline";
}
/* if (){
    d.style.display="none";
} */