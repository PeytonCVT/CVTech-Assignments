
// For Loop JS //

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

// For In Loop JS //

const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;

// For Of Loop JS //

const numbers = [45, 4, 9, 16, 25];

let txt2 = "";
for (let x in numbers) {
  txt2 += numbers[x] + "<br>"; 
}

document.getElementById("demo2").innerHTML = txt2;

// While Loop JS //



// Do While Loop JS //

