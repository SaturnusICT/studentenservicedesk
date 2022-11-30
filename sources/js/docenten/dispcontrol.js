function dispControl () {
    var la = document.getElementById('docla');
    var lb = document.getElementById('doclb');
    var ta = document.getElementById('docta');
    var tb = document.getElementById('doctb');
    var arrow = document.getElementById('dispMvArrow');

    if(ta.classList.contains('div_Show') & la.classList.contains('div_Show')) {
        ta.classList.remove('div_Show');
        la.classList.remove('div_Show');
        ta.classList.add('div_Away');
        la.classList.add('div_Away');
        tb.classList.remove('div_Away');
        lb.classList.remove('div_Away');
        tb.classList.add('div_Show');
        lb.classList.add('div_Show');
        arrow.innerHTML = "🢀";
    } else if(ta.classList.contains('div_Away') & la.classList.contains('div_Away')) {
        tb.classList.remove('div_Show');
        lb.classList.remove('div_Show');
        tb.classList.add('div_Away');
        lb.classList.add('div_Away');
        ta.classList.remove('div_Away');
        la.classList.remove('div_Away');
        ta.classList.add('div_Show');
        la.classList.add('div_Show');
        arrow.innerHTML = "🢂";

    }
}