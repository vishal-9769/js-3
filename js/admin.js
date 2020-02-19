
let u = sessionStorage.getItem("a");
//console.log(u);
document.getElementById("user").innerHTML = u + " ";

let getstdname = JSON.parse(localStorage.getItem("unameUser"));


let btnid;
let assign = [];
let noOfStudent;
let courseHtml = [0];
let courselinux = [0];
let courseGit = [0];
let courseReact = [0];
let courseJs = [0];
let courseNode = [0];
let course=[0];
let uname;
const creatTable = () => {

    noOfStudent = JSON.parse(localStorage.getItem("unameUser"));
    let btn1 = document.createElement("input");
    btn1.type = "button";
    btn1.className = "btn btn-primary";
    btn1.value = "Assign";
    let std = '';
    for (let i = 0; i < noOfStudent.length; i++) {
        std += `<li style="display:inline">${noOfStudent[i]}</li> <input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" 
        id=${i} onclick="ass(this.id)" value="Assign"></input>
        <input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" id=${noOfStudent.length+i} onclick="rm(this.id)" value="Remove">
        <br>`;
    }
    
    document.getElementById("new").innerHTML = std;
}

let cname = document.getElementsByClassName("card-title");
for(let i =0;i<cname.length;i++){
    course.push(cname[i].innerHTML);
}

function ass(bid) {
let totalUser=JSON.parse(localStorage.getItem("unameUser"));
console.log(bid);
uname=document.getElementById(bid).previousElementSibling.innerHTML;
    for (let j = 0; j < totalUser.length; j++){
        if(btnid=="html" && bid == j){
            //courseHtml.splice(bid,1,bid);
             courseHtml.push(uname); 
            localStorage.setItem("html",JSON.stringify(courseHtml));
             alert(`${btnid} is Assigned to ${uname}` );   
        }
         if(btnid=="git" && bid == j){
            //courseGit.splice(bid,1,bid);
            courseGit.push(uname);
            localStorage.setItem("git",JSON.stringify(courseGit));
            alert(`${btnid} is Assigned to ${uname}` );
        }
        if(btnid=="linux" && bid == j){
            //courselinux.splice(bid,1,bid);
            courselinux.push(uname);
            localStorage.setItem("Linux",JSON.stringify(courselinux));
            alert(`${btnid} is Assigned to ${uname}` );
        }
        if(btnid=="js" && bid == j){
            //courseJs.splice(bid,1,bid);
            courseJs.push(uname);
            localStorage.setItem("js",JSON.stringify(courseJs));
            alert(`${btnid} is Assigned to ${uname}` );
            //document.getElementById(bid).value="Remove";
        }
        if(btnid=="react" && bid == j){
            //courseReact.splice(bid,1,bid);
            courseReact.push(uname);
            localStorage.setItem("react",JSON.stringify(courseReact));
            alert(`${btnid} is Assigned to ${uname}` );
        }
        if(btnid=="node" && bid == j){
            //courseNode.splice(bid,1,bid);
            courseNode.push(uname);
            localStorage.setItem("node",JSON.stringify(courseNode));
            alert(`${btnid} is Assigned to ${uname}` );
        }
 
}

}
function assignHTML(bid){
    btnid= bid;
 }


 function rm(buttonid) {
    console.log(buttonid)
    let uname=document.getElementById(buttonid).previousElementSibling.innerHTML;
    console.log(uname);
    
      let totalUser=JSON.parse(localStorage.getItem("unameUser"));
     
     //uname=document.getElementById(bid).previousElementSibling.innerHTML;
         for (let j = totalUser.length; j < totalUser.length*2; j++){
             console.log("j",j);
             if(btnid=="html" && buttonid == j){
                 //courseHtml.splice(bid,1,bid);
                 console.log(" hsdjha");
                 courseHtml.pop(uname); 
            localStorage.setItem("html",JSON.stringify(courseHtml));
            alert(`${btnid} is Removed from ${uname}` );
                     
             }
              if(btnid=="git" && buttonid == j){
                 //courseGit.splice(bid,1,bid);
                 courseGit.pop(uname);
                 localStorage.setItem("git",JSON.stringify(courseGit));   
                 //window.location.reload();    
                 
                 alert(`${btnid} is Removed from ${uname}` );
             }
             if(btnid=="linux" && buttonid == j){
                 //courselinux.splice(bid,1,bid);
                 courselinux.pop(uname);
                 localStorage.setItem("Linux",JSON.stringify(courselinux));
                 alert(`${btnid} is Removed from ${uname}` );    
             }
             if(btnid=="js" && buttonid == j){
                 //courseJs.splice(bid,1,bid);
                 courseJs.pop(uname);
                 localStorage.setItem("js",JSON.stringify(courseJs));
                 alert(`${btnid} is Removed from ${uname}` );   
                 //document.getElementById(bid).value="Remove";
             }
             if(btnid=="react" && buttonid == j){
                 //courseReact.splice(bid,1,bid);
                 courseReact.pop(uname);
                 localStorage.setItem("react",JSON.stringify(courseReact));
                 alert(`${btnid} is Removed from ${uname}` );        
             }
             if(btnid=="node" && buttonid == j){
                 //courseNode.splice(bid,1,bid);
                 courseNode.pop(uname);
            localStorage.setItem("node",JSON.stringify(courseNode));
            alert(`${btnid} is Removed from ${uname}` );   
             } 
      
            }
        }
