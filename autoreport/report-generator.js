
// SCHOOL STUDENTS NAME (YOUR ASSIGNED STUDENTS NAME)
var student_input_area = document.querySelector(".student-input-area");
var student_area = document.getElementById("student-area");
let student_count = 0;
function add_student() {
    student_count++;
    var node_student = document.createElement("p");
    node_student.innerHTML = `<input type="text" placeholder="Student Name" onkeyup="set_value(this.value, 'name${student_count}')">  <input type="text" placeholder="Student Class with section" onkeyup="set_value(this.value, 'class${student_count}')">`;
    student_input_area.appendChild(node_student);
    var student_row = document.createElement("tr");
    student_row.innerHTML = `<td>${student_count}</td><td id="name${student_count}"></td><td id="class${student_count}"></td>`;
    student_area.appendChild(student_row);
}


// (EXTRA STUDENTS TO WHOM YOU TAUGHT BECAUSE FEW VOLUNTEERS WERE ABSENT)
var extra_student_input_area = document.querySelector(".extra-student-input-area");
var extra_student_area = document.getElementById("extra-student-area");
let extra_student_count = 0;
function extra_add_student() {
    extra_student_count++;
    var node_student = document.createElement("p");
    node_student.innerHTML = `<input type="text" placeholder="Student Name" onkeyup="set_value(this.value, 'extra_name${extra_student_count}')">  <input type="text" placeholder="Student Class with section" onkeyup="set_value(this.value, 'extra_class${extra_student_count}')">`;
    extra_student_input_area.appendChild(node_student);
    var student_row = document.createElement("tr");
    student_row.innerHTML = `<td>${extra_student_count}</td><td id="extra_name${extra_student_count}"></td><td id="extra_class${extra_student_count}"></td>`;
    extra_student_area.appendChild(student_row);
}


function set_value(value, id) {
    document.getElementById(id).innerText = value;
}
function loadVolunteerPhoto(event) {
	var image = document.getElementById('volunteer-photo');
	image.src = URL.createObjectURL(event.target.files[0]);
};
function loadGroupPhoto(event) {
	var image = document.getElementById('group-photo');
	image.src = URL.createObjectURL(event.target.files[0]);
};