alert("click me");
changeColorOfBox2();
function box1Func(){
    bx3 = document.getElementById("box3");
     bx3.firstElementChild.innerHTML="Oops! Somethings wrong.";
}


function changeColorOfBox2(){
    //console.log("changeBox2Color")
    let a=0;
    changeColor();
}

function changeColor(){
    //console.log("changeColor")
    let colors = ['yellow','orange','blue'];
    let a=0;
    let tm=3000;
    let i =0;
setTimeout(function run() {
    if(i%4 != 0){
        tm=3000;
        let bx2=document.getElementById("box2");
        bx2.style.transitionProperty='background-color';
        bx2.style.transitionDuration='1s';
        bx2.style.backgroundColor=colors[a];
        a++;
        if(a==3){
            a=0;
        }
    }
    else {
        tm=1;
    }
    (i++)
  setTimeout(run, tm);
}, 1);
}


document.onkeydown = function(event){ 
    let reverse=false;
    if(event.keyCode == 38 || event.keyCode == 39){
        console.log(event.key)
        changeColor4sec(5000,reverse);
    }
    else if(event.keyCode == 37 || event.keyCode == 40){
        console.log(event.key)
        reverse=true;
        changeColor4sec(5000,reverse);
    }
    else{

    }
}
let timerId1,timerId2;
function changeColor4sec(timer,rev){
    if(timerId1!=null && timerId2!=null){
    clearTimeout(timerId1);
    clearTimeout(timerId2);
    }
    
    let colors = ['lightcoral','greenyellow','cyan','royalblue','violet','rosybrown','chocolate'];
    let a=0;
    let i =0;
    if (rev==true){
        colors=colors.reverse();
    }
 timerId1 = setTimeout(function run() {
    if(i%6 != 0){
        timer=5000;
        let bx4=document.getElementById("box4");
        bx4.style.transitionProperty='background-color';
        bx4.style.transitionDuration='1s';
        bx4.style.backgroundColor=colors[a];
        a++;
        if(a==7){
            a=0;
        }
    }
    else {
        timer=1;
    }
    (i++)
 timerId2=setTimeout(run, timer);
}, 1);
}
