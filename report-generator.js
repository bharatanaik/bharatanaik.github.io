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
function set_value(value, id) {
    document.getElementById(id).innerText = value;
}
function loadImage(event) {
	var image = document.getElementById('group-photo');
	image.src = URL.createObjectURL(event.target.files[0]);
};
