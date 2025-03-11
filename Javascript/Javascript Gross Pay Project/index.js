function check() {
    var x = document.getElementById("hours_worked").value;
    var y = document.getElementById("hourly_wages").value;
    var z;

    if (x <= 40) {
        z = (x * y)
        console.log(z)
        alert(z);
    } else {
        z = (y * 40) + (y * 1.5 *(x - 40));
        console.log(z)
        alert(z);
    }
}

/* !-- Regular pay = (hours_worked * hourly_wages)
PayWithOvertime = (hourly_wages * 40) + (hourly_wages * 1.5 * (hours_worked-40)) */