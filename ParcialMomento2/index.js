const btn = document.getElementById("btn_tema");

btn.addEventListener("click", function() {
    if (document.body.className == "dark") {
        document.body.className = ""; 
    } else {
        document.body.className = "dark";
    }
});