

const apiResult = JSON.parse(localStorage.getItem("Courses"));
//console.log(apiResult.length);
let a = JSON.parse(localStorage.getItem("assignedCourse"));
//console.log(a);
let User = JSON.parse(localStorage.getItem("unameUser"));

let container = document.getElementById('accordion');
let courses = [];
let assignCourse = a;
let btnid;

let username;
if (apiResult) {
    apiResult.forEach((result, idx) => {

        const card = document.createElement('div');
        card.classList = 'card-body';


        const content = `
    <div class="card">
   
    <div class="card-header" id="heading-${idx}">

   
      <h5 class="mb-0">
      <h5>${result.courseTitle}</h5>
      </h5>
    </div>

    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body ">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick="assignHTML(this.id);creatTable();" id=${result.courseTitle}>
      Assign Course
  </button> <button type="button" class="btn btn-primary" onclick="RemoveCourse(this.id);remove();" id=${result.courseTitle}>
  Remove Course
</button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">List of Student</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                 <!--  <button type="button" onclick="creatTable()" id="tb">Click</button> -->
                  <div id="new">

                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                
              </div>
          </div>
      </div>
  </div>
      </div>
    </div>
  </div>
  `;

        container.innerHTML += content;
    })
}
else {
    alert("add new course from Add Course Tab");
}

const creatTable = () => {

    let btnname = "Assign";
    let method = "ass(this.id)";

    noOfStudent = JSON.parse(localStorage.getItem("unameUser"));

    let std = '';
    if (a) {
        for (let i = 0; i < noOfStudent.length; i++) {
            for (let j = 0; j < a.length; j++) {

                //console.log("in for", j);
                //console.log(a[j].StudenName);
                if (a[j].StudenName.includes(User[i]) && a[j].title.includes(btnid)) {
                    btnname = "Remove";
                    method = "rm(this.id)"
                    console.log("in if", btnname);
                    break;
                }
                else {
                    btnname = "Assign";
                    method = "ass(this.id)";
                  //  console.log("in else", btnname);
                }
            }
            std += `<li style="display:inline">${noOfStudent[i]}</li> <input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" 
        id=${i} onclick=${method} value=${btnname}></input>
         
        <br>`;

        }
    }
    else {
        for (let i = 0; i < noOfStudent.length; i++) {
            std += `<li style="display:inline">${noOfStudent[i]}</li> <input type="button" style="text-align:right; margin: 5px" class="btn btn-primary" 
        id=${i} onclick=${method} value=${btnname}></input>
         
        <br>`;
        }
    }

    document.getElementById("new").innerHTML = std;
}

function assignHTML(bid) {
    btnid = bid;

}
let courseobject;
function ass(bid) {
    uname = document.getElementById(bid).previousElementSibling.innerHTML;


   // console.log(uname);

    for (let j = 0; j < apiResult.length; j++) {
        if (assignCourse) {

            switch (btnid) {
                case apiResult[j].courseTitle:
                    courseobject = { title: `${apiResult[j].courseTitle}`, StudenName: uname };
                    assignCourse.push(courseobject);
                    localStorage.setItem("assignedCourse", JSON.stringify(assignCourse));
                    alert(`${apiResult[j].courseTitle} is Assigned to ${uname}`);
                    window.location.reload();
                    break;
            }
        }
        else {
            switch (btnid) {
                case apiResult[j].courseTitle:
                    courseobject = { title: `${apiResult[j].courseTitle}`, StudenName: uname };
                    courses.push(courseobject);
                    localStorage.setItem("assignedCourse", JSON.stringify(courses));
                    alert(`${apiResult[j].courseTitle} is Assigned to ${uname}`);
                    window.location.reload();
                    break;
            }
        }
    }
}



function rm(bid) {

    username = document.getElementById(bid).previousElementSibling.innerHTML;;
   // console.log(document.getElementById(bid));
    //console.log(btnid);
   // console.log(username);
    for (let j = 0; j < a.length; j++) {
       // console.log("for-", j);
      //  console.log(a[j].title);
       // console.log(a[j].StudenName);
        if (a[j].title == btnid && a[j].StudenName == username) {

          //  console.log("in if");
            a.splice(j, 1);
          //  console.log("this");
            localStorage.setItem("assignedCourse", JSON.stringify(a));
          //  console.log("final");


        }

    }

}
let btid;
function RemoveCourse(id) {
    btid = id;
}
function remove() {
   // console.log("abc");
    //console.log(btid);

    for (let j = 0; j < apiResult.length; j++) {
       // console.log("j", j);
        if (apiResult[j].courseTitle == btid) {

         //   console.log("in if");
            apiResult.splice(j, 1);

          //  console.log("this");
            localStorage.setItem("Courses", JSON.stringify(apiResult));
         //   console.log("final");
            window.location.reload();

        }
        for (let i = 0; i < a.length; i++) {
            if (a[i].title.includes(btid)) {
               // console.log("in-if");
                a.splice(i, 1);
                localStorage.setItem("assignedCourse", JSON.stringify(a));
                window.location.reload();
            }

        }

    }
}

