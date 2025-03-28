function check() {
    var v = document.getElementById("evenoddinput").value;
    if (v % 2 == 0) {
        console.log("Even");
        alert('Even')
    } else {
        console.log("Odd");
        alert('Odd')
    }
}