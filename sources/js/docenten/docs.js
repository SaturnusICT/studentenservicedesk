function docs_Stud() {
    var titlebar = document.getElementById('doc_titlebar');
    var main = document.getElementById('docs_Main');
    var stud = document.getElementById('docs_Stud');
    titlebar.innerHTML = "Documentatie - Studenten";


    // Switching
    main.classList.remove('div_Show');
    main.classList.add('div_Away');
    stud.classList.remove('div_Away');
    stud.classList.show('div_Show');
}
function docs_Beg() {
    var titlebar = document.getElementById('doc_titlebar');
    var main = document.getElementById('docs_Main');
    var beg = document.getElementById('docs_Beg');
    titlebar.innerHTML = "Documentatie - Begeleiders";


    // Switching
    main.classList.remove('div_Show');
    main.classList.add('div_Away');
    beg.classList.remove('div_Away');
    beg.classList.show('div_Show');
}
function docs_Doc() {
    var titlebar = document.getElementById('doc_titlebar');
    var main = document.getElementById('docs_Main');
    var doc = document.getElementById('docs_Doc');
    titlebar.innerHTML = "Documentatie - Docenten";


    // Switching
    main.classList.remove('div_Show');
    main.classList.add('div_Away');
    doc.classList.remove('div_Away');
    doc.classList.show('div_Show');
}



function docs_Stud_pdf() {
    window.location.href = "sources/docs/student_documentation.pdf";
}

function docs_Beg_pdf() {
    window.location.href = "sources/docs/begeleider_documentation.pdf";
}

function docs_Doc_pdf() {
    window.location.href = "sources/docs/docent_documentation.pdf";
}

function stud_Back() {
    var titlebar = document.getElementById('doc_titlebar');
    var main = document.getElementById('docs_Main');
    var stud = document.getElementById('docs_Stud');
    titlebar.innerHTML = "Documentatie - Hoofdmenu";
    stud.classList.remove('div_Show');
    stud.classList.add('div_Away');
    main.classList.remove('div_Away');
    main.classList.add('div_Show');
}

function beg_Back() {
    var titlebar = document.getElementById('doc_titlebar');
    var main = document.getElementById('docs_Main');
    var beg = document.getElementById('docs_Beg');
    titlebar.innerHTML = "Documentatie - Hoofdmenu";
    beg.classList.remove('div_Show');
    beg.classList.add('div_Away');
    main.classList.remove('div_Away');
    main.classList.add('div_Show');
}

function doc_Back() {
    var titlebar = document.getElementById('doc_titlebar');
    var main = document.getElementById('docs_Main');
    var doc = document.getElementById('docs_Doc');
    titlebar.innerHTML = "Documentatie - Hoofdmenu";
    doc.classList.remove('div_Show');
    doc.classList.add('div_Away');
    main.classList.remove('div_Away');
    main.classList.add('div_Show');
}
function doc_Toolbar () {
    alert("Mein kampf nu te koop op bol.com - UwU");
}