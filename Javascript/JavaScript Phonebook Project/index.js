function add() {
    var firstN = document.getElementById("first").value;
    var lastN = document.getElementById("last").value;
    var phoneNum = document.getElementById("phone").value;
    var table = document.getElementById("mytable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = firstN;
    cell2.innerHTML = lastN;
    cell3.innerHTML = phoneNum;
}