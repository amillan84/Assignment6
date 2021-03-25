// HANDLE THE LOAD EVENT OF THE WINDOW
function init () {
    let add_Employee = window.document.getElementById("btnAddEmployee");
}
window.addEventListener("load", init);
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
add_Employee.addEventListener("click", function() {
   // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    window.open("Add-Employee.html", "Add-Employee", "width=400,height=400");
});

