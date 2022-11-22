function clockCtrl() {
    var clock = document.getElementById('button_clock_student');
    var notifyclock = document.getElementById('notify_clock_out').classList;
    var mainpage = document.getElementById('student_container').classList;
    switch(clock.innerText) {
        case "Inklokken!":
            clock.innerText = "Uitlokken";
        break;
        case "Uitlokken":
            notifyclock.remove('div_Away');
            notifyclock.add('div_Show');
            mainpage.remove('blur_Off');
            mainpage.add('blur_On');
        break;
    }
}

function notify_clockout_y() {
    var clock = document.getElementById('button_clock_student');
    var notifyclock = document.getElementById('notify_clock_out').classList;
    var mainpage = document.getElementById('student_container').classList;

    mainpage.remove('blur_On');
    mainpage.add('blur_Off');
    notifyclock.remove('div_Show');
    notifyclock.add('div_Away');
    clock.innerText = "Inklokken!"

}

function notify_clockout_n() {
    var clock = document.getElementById('button_clock_student');
    var notifyclock = document.getElementById('notify_clock_out').classList;
    var mainpage = document.getElementById('student_container').classList;

    mainpage.remove('blur_On');
    mainpage.add('blur_Off');
    notifyclock.remove('div_Show');
    notifyclock.add('div_Away');

}