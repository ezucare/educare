const modal = document.getElementById('container');
window.onclick = function (event) {
    if (event.target == modal) {
        document.getElementById('container').style.display = "none";
    }   
}