function studentSwitch() {
    var list = document.getElementById('selectlist-student');


    if(list.classList.contains('div_Away')) {
        list.classList.remove('div_Away');
        list.classList.add('div_Show');
    } else if(list.classList.contains('div_Show')) {
        list.classList.remove('div_Show');
        list.classList.add('div_Away');
    }



}


function addMyEvents() {
    let buttons = document.querySelectorAll(".student-btns");
    var list = document.getElementById('selectlist-student');

    buttons.forEach(btn=>{
        btn.addEventListener("click",function(e){
            list.classList.remove('div_Show');
            list.classList.add('div_Away');
        });
    });
}