let noOfStudent = JSON.parse(localStorage.getItem("unameUser"));


let assignedUserHtml = JSON.parse(localStorage.getItem("html"));
let assignedUserLinux = JSON.parse(localStorage.getItem("Linux"));
let assignedUserGit = JSON.parse(localStorage.getItem("git"));
let assignedUserJs = JSON.parse(localStorage.getItem("js"));
let assignedUserReact = JSON.parse(localStorage.getItem("react"));
let assignedUserNode = JSON.parse(localStorage.getItem("node"));
let std =``;
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
    for (let i = 0; i < noOfStudent.length; i++) {
        if(assignedUserHtml.includes(noOfStudent[i])){
            console.log("hello");
            std += `<li style="display:inline">${noOfStudent[i]}</li><li>HTML</li> <input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" id=${i} onclick="rm(this.id)" value = "Remove"></input><br>`;
        }
        if(assignedUserLinux.includes(noOfStudent[i])){
            console.log("hello");
            std += `<li style="display:inline">${noOfStudent[i]}</li> <li>Linux</li><input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" id=${i} onclick="rm(this.id)" value = "Remove"></input><br>`;
        }
        if(assignedUserGit.includes(noOfStudent[i])){
            console.log("hello");
            std += `<li style="display:inline">${noOfStudent[i]}</li> <li>Git</li><input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" id=${i} onclick="rm(this.id)" value = "Remove"></input><br>`;
        }
        if(assignedUserJs.includes(noOfStudent[i])){
            console.log("hello");
            std += `<li style="display:inline">${noOfStudent[i]}</li> <li>Js</li><input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" id=${i} onclick="rm(this.id)" value = "Remove"></input><br>`;
        }
        if(assignedUserReact.includes(noOfStudent[i])){
            console.log("hello");
            std += `<li style="display:inline">${noOfStudent[i]}</li> <li>React</li><input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" id=${i} onclick="rm(this.id)" value = "Remove"></input><br>`;
        }
        if(assignedUserNode.includes(noOfStudent[i])){
            console.log("hello");
            std += `<li style="display:inline">${noOfStudent[i]}</li><li>Node</li><input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" id=${i} onclick="rm(this.id)" value = "Remove"></input><br>`;
        }
    }
    
    document.getElementById("new").innerHTML = std;
    function rm(bid) {

       let uname=document.getElementById(bid).previousElementSibling.innerHTML;
       
         let totalUser=JSON.parse(localStorage.getItem("unameUser"));
        
        //uname=document.getElementById(bid).previousElementSibling.innerHTML;
            for (let j = 0; j < totalUser.length; j++){
                if(uname == "HTML" && bid == j){
                    //courseHtml.splice(bid,1,bid);
                    console.log("");
                    assignedUserHtml.pop(uname);
                    localStorage.setItem("html",JSON.stringify(assignedUserHtml));
                    window.location.reload();
                        
                }
                 if(uname=="Git" && bid == j){
                    //courseGit.splice(bid,1,bid);
                    assignedUserLinux.pop(uname);
                    localStorage.setItem("git",JSON.stringify(assignedUserLinux));
                    window.location.reload();    
                }
                if(uname=="Linux" && bid == j){
                    //courselinux.splice(bid,1,bid);
                    assignedUserGit.pop(uname);
                    localStorage.setItem("Linux",JSON.stringify(assignedUserGit));
                    window.location.reload();    
                }
                if(uname=="Js" && bid == j){
                    //courseJs.splice(bid,1,bid);
                    assignedUserJs.pop(uname);
                    localStorage.setItem("js",JSON.stringify(assignedUserJs));
                    window.location.reload();    
                    //document.getElementById(bid).value="Remove";
                }
                if(uname=="React" && bid == j){
                    //courseReact.splice(bid,1,bid);
                    assignedUserReact.pop(uname);
                    localStorage.setItem("react",JSON.stringify(assignedUserReact));
                    window.location.reload();    
                }
                if(uname=="Node" && bid == j){
                    //courseNode.splice(bid,1,bid);
                    assignedUserNode.pop(uname);
                    localStorage.setItem("node",JSON.stringify(assignedUserNode));
                    window.location.reload();    
                } 
         
        }
    }