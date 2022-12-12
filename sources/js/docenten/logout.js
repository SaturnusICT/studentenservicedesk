var mainpage = document.getElementById('docenten-container');
var notify = document.getElementById('notify_logout_docent');

function controlbox_logout_confirm() {
    mainpage.classList.remove('blur_Off');
    mainpage.classList.add('blur_On');
    notify.classList.remove('div_Away');
    notify.classList.add('div_Show');
}

function notify_dlogout_y() {
    notify.classList.remove('div_Show');
    notify.classList.add('div_Away');
    mainpage.classList.remove('blur_On');
    mainpage.classList.add('blur_Off');
    window.location.href = "./"
}

function notify_dlogout_n() {
    notify.classList.remove('div_Show');
    notify.classList.add('div_Away');
    mainpage.classList.remove('blur_On');
    mainpage.classList.add('blur_Off');
}
