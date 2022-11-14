var stud = document.getElementById('container-login-prompt-auth-stud');
var beg = document.getElementById('container-login-prompt-auth-beg');
var doc = document.getElementById('container-login-prompt-auth-doc');
var login_prompt_auth_lvl;

function auth_controler_stud() {
    stud.style.backgroundColor = "#5E81AC";
    beg.style.backgroundColor = "#2e3440";
    doc.style.backgroundColor = "#2e3440";
    login_prompt_auth_lvl = "1";
}

function auth_controler_beg() {
    beg.style.backgroundColor = "#5E81AC";
    stud.style.backgroundColor = "#2e3440";
    doc.style.backgroundColor = "#2e3440";
    login_prompt_auth_lvl = "2";
}

function auth_controler_doc() {
    doc.style.backgroundColor = "#5E81AC";
    beg.style.backgroundColor = "#2e3440";
    stud.style.backgroundColor = "#2e3440";
    login_prompt_auth_lvl = "3";
}


function auth_login () {
    if (login_prompt_auth_lvl == "1") {
        console.log("1 1"); // Als knop Studenten is ingedrukt
        window.location.href = "student.htm";
    } else if (login_prompt_auth_lvl == "2") {
        console.log("2 2"); // Als knop Begeledier is ingedrukt
        window.location.href = "begeleider.htm";
    } else if (login_prompt_auth_lvl == "3") {
        console.log("3 3"); // Als knop docent is ingedrukt
        window.location.href = "docent.htm";
    } else if(login_prompt_auth_lvl != "1" & login_prompt_auth_lvl != "2" & login_prompt_auth_lvl != "3") {
        console.log("None"); // Als geen knoppen zijn ingedrukt
    }

} 