// HANDLE THE LOAD EVENT OF THE WINDOW
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
function init () {
    let width = 800;
    let height = 700;
    window.resizeTo(width, height);
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));
}
window.addEventListener("load", init);



// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
let id = window.document.getElementById("id").value;
let name = window.document.getElementById("name").value;
let extension = window.document.getElementById("extension").value;
let email = window.document.getElementById("email").value;
let department = window.document.getElementById("department").value;


// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
   let output = window.opener.document.getElementById("loginDetails");
   output.innerHTML = "<br><br>id: " + id + "<br>name: " + name +"<br>extension: ", + extension + "<br>email: " + email +"<br>department: " + department;
// CLOSE THE POPUP
window.close();
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE