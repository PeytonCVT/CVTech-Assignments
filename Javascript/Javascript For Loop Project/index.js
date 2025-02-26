function check() {
    var v = Number(document.getElementById("loop").value);
    var response = '';
    for (let i = 0; i <= 8; i+=2) {
    if (i == 8)
        response += v+i;
    else
        response += v+i +',';
    }
    console.log('response',response);
    alert(response)
}
