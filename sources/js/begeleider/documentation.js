function docSwitch() {
    var doc = document.getElementById('beg-doc-page');

    if(doc.classList.contains("div_Away")) {
        doc.classList.remove("div_Away");
        doc.classList.add("div_Show");
    } else if(doc.classList.contains("div_Show")) {
        doc.classList.remove("div_Show");
        doc.classList.add("div_Away");
    }
}