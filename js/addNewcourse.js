let courseTitle;
let imgSrc;
let courseLink;
let coursesArray=[];
let course;


function AddCourse(){
    if(course=JSON.parse(localStorage.getItem("Courses"))){
        coursesArray=course;
    }
    courseTitle = document.getElementById("ctitle").value;
    // imgSrc =document.getElementById("img1").path;
    // console.log(imgSrc);
    courseLink= document.getElementById("courselink").value;

    let objectOfCourse = {courseTitle,courseLink};
   // console.log(objectOfCourse);
    coursesArray.push(objectOfCourse);
    localStorage.setItem("Courses",JSON.stringify(coursesArray));
    alert("Course Added"); 
}

const Store=()=>{
    AddCourse();
    document.getElementById("ctitle").value ="";
    document.getElementById("courselink").value ="";
   window.location.reload();
}

