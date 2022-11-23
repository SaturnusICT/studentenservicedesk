
function feedbackBtn() {
    var popup = document.getElementById('popup-cont-fb');
    popup.classList.remove('div_Away');
    popup.classList.add('div_Show');
}

function fb_voteup() {
    var popup = document.getElementById('popup-cont-fb');
    popup.classList.remove('div_Show'); 
    popup.classList.add('div_Away'); 
}

function fb_votedown() {
    var popup = document.getElementById('popup-cont-fb');
    popup.classList.remove('div_Show'); 
    popup.classList.add('div_Away'); 
}