function container_login_prompt_logincontainer_forgotww()
{
    var forgotww_login = document.getElementById('notify_login_forgotww');
    var login_container = document.getElementById('container-login');
    forgotww_login.classList.remove('div_Away');
    forgotww_login.classList.add('div_Show');
    login_container.classList.remove('blur_Off');
    login_container.classList.add('blur_On');
}

function notify_forgotww_oke()
{
    var forgotww_login = document.getElementById('notify_login_forgotww');
    var login_container = document.getElementById('container-login');
    forgotww_login.classList.remove('div_Show');
    forgotww_login.classList.add('div_Away');
    login_container.classList.remove('blur_On');
    login_container.classList.add('blur_Off');
}