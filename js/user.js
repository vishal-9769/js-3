let u = sessionStorage.getItem("s");
//console.log(u);
document.getElementById("user").innerHTML=u;






const apiResult = JSON.parse(localStorage.getItem("assignedCourse"));
//const course= JSON.parse(localStorage.getItem(""))
  //let uname="rushi"; 
  console.log(apiResult);
  let container = document.getElementById('accordion');
  
  apiResult.forEach((result, idx) => {
    // Create card element
    if(result.StudenName == u ){
    const card = document.createElement('div');
    card.classList = 'card-body';
  
    // Construct card content
    const content = `
      <div class="card">
      
      <div class="card-header" id="heading-${idx}">
        <h5 class="mb-0">
        <h5>${result.title}</h5>
        </h5>
      </div>
  
      <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
        <div class="card-body">
          <a type="button" class="btn btn-primary text-white" href="#">
          Start Course
                          </a>
        </div>
      </div>
    </div>
    `;
  
    // Append newyly created card element to the container
    container.innerHTML += content;
    }
   
  }) 
 /*  <p>${result.description}</p>
  <p>${result.output}</p>  */