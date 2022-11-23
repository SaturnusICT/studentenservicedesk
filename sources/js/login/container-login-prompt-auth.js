var stud = document.getElementById('container-login-prompt-auth-stud');
var norole = document.getElementById('notify_login_norole');
var beg = document.getElementById('container-login-prompt-auth-beg');
var doc = document.getElementById('container-login-prompt-auth-doc');
var login_container = document.getElementById('container-login');
var login_prompt_auth_lvl;
var userbox = document.getElementById('db-logincontainer-username');
var passbox = document.getElementById('db-logincontainer-password');

var userAccounts = [
    {
        username: 'admins',
        password: '123',
        role: 's'
    },
    {
        username: 'adminb',
        password: '123',
        role: 'b'
    },
    {
        username: 'admin',
        password: '123',
        role: 'd'
    }
];


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
    /// Oud systeem
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
        login_container.classList.remove('blur_Off');
        login_container.classList.add('blur_On');
        norole.classList.remove('div_Away');
        norole.classList.add('div_Show');
    }

// userbox.value passbox.value
}





function notify_norole_oke() {
    norole.classList.remove('div_Show');
    norole.classList.add('div_Away');
    login_container.classList.remove('blur_On');
    login_container.classList.add('blur_Off');
}