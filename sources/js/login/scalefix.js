function scalefix() {
    // Importeren van elementen
    var header = document.getElementById('container-login-prompt-headerbox-h1');
    var rolbox = document.getElementById('container-login-prompt-auth');
    var userbox = document.getElementById('db-logincontainer-username-label');


    if (screen.width <= 1368) {
        header.style.fontSize = "35px";
        rolbox.style.fontSize = "8px";
        userbox.style.fontSize = "16px";
    } else if(screen.width <= 1680) {
        header.style.fontSize = "45px";
        rolbox.style.fontSize = "12px"
    } else if (screen.width <= 1920) {
        //
    }
}