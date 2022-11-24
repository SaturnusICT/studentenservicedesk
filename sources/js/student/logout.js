function controlbox_logout_confirm() {
    var notification = document.getElementById('notify_logout_student').classList;
    var mainpage = document.getElementById('student_container').classList;
    notification.remove('div_Away');
    notification.add('div_Show');
    mainpage.remove('blur_Off');
    mainpage.add('blur_On');
}

function notify_slogout_y() {
    var notification = document.getElementById('notify_logout_student').classList;
    var mainpage = document.getElementById('student_container').classList;
    notification.remove('div_Show');
    notification.add('div_Away');
    mainpage.remove('blur_On');
    mainpage.add('blur_Off');
    window.location.href = "/";


}
function notify_slogout_n() {
    var notification = document.getElementById('notify_logout_student').classList;
    var mainpage = document.getElementById('student_container').classList;
    notification.remove('div_Show');
    notification.add('div_Away');
    mainpage.remove('blur_On');
    mainpage.add('blur_Off');
}