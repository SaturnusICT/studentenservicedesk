function student_mvRight() {
    var main = document.getElementById('student-container-display-rm');
    var fb = document.getElementById('student-container-display-rf');
    var btnRight = document.getElementById('mvBtn_Right');
    var btnLeft = document.getElementById('mvBtn_Left');

    // Schermen
    main.classList.remove('div_Show');
    main.classList.add('div_Away');
    fb.classList.remove('div_Away')
    fb.classList.add('div_Show');

    // Knoppen
    btnRight.classList.remove('div_Show');
    btnRight.classList.add('div_Away');
    btnLeft.classList.remove('div_Away');
    btnLeft.classList.add('div_Show');
    btnLeft.style.right = "2%";
}

function student_mvLeft() {
    var main = document.getElementById('student-container-display-rm');
    var fb = document.getElementById('student-container-display-rf');
    var btnRight = document.getElementById('mvBtn_Right');
    var btnLeft = document.getElementById('mvBtn_Left');

    // Schermen
    fb.classList.remove('div_Show');
    fb.classList.add('div_Away');
    main.classList.remove('div_Away');
    main.classList.add('div_Show');

    // Knoppen
    btnLeft.classList.remove('div_Show');
    btnLeft.classList.add('div_Away');
    btnRight.classList.remove('div_Away');
    btnRight.classList.add('div_Show');


}