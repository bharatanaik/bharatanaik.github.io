commands = {
    "about":["Hi, My name is Bharat Naik😅"],
    "contact":[
        "email: bharat.anaik2003@gmail.com", 
        "phone: +919980776034",
        "",
        "<b>Social Media,<b>",
        "* Instagram <a href='https://www.instagram.com/bharat._naik/'>@bharat._naik</a>"
        
    ],
    "projects":[
        "<a href='https://npuspta.org' target='_blank'>NPUSPTA</a>",
        "<a href='https://collegeseatfinder.com' target='_blank'>College Seat Finder</a>"
    ],
    "skills":[

    ]
}

function command(cmd){

    var screen = "";
    commands[cmd].forEach(element => {
        screen+=element+"<br>";
    });
    term_output.innerHTML = screen;
    term_input.value = "";
}

var term_input = document.getElementById("term-in");
var term_output = document.getElementById("term-out");
term_input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        command(term_input.value);
    }
})




