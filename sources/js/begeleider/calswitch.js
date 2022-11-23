function switchcal() {
    var img = document.getElementById('cal-act-ico'); 
    var scheduleapp = document.getElementById('app-cal-schedule');
    var actualapp = document.getElementById('app-cal-actual');
    // Werkt met venster mee    

    if (scheduleapp.classList.contains('div_Show')) {
        scheduleapp.classList.remove('div_Show');
        scheduleapp.classList.add('div_Away');
        actualapp.classList.remove('div_Away');
        actualapp.classList.add('div_Show');
        img.src = "sources/afb/icons/calendar-plan.png";
    } else {
        actualapp.classList.remove('div_Show');
        actualapp.classList.add('div_Away');
        scheduleapp.classList.remove('div_Away');
        scheduleapp.classList.add('div_Show');
        img.src = "sources/afb/icons/calendar-act.png";
    }
}