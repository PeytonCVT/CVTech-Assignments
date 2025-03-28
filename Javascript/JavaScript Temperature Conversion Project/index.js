const check = () => {
    var temp = document.getElementById("tempurature").value
    var isFar = document.getElementById("toFarenheit");
    if((isFar).checked)
    {
        alert(temp - 32) * (5/9);
    }
    else
    {
        alert((temp * (9/5)) + 32);
    }
}

//alert((document.getElementById("toFarenheit")).checked ? (document.getElementById("temp").value - 32 * (5/9)) : (document.getElementById("temp").value * (9/5) + 32));