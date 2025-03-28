const calculate = () => {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var grade1 = Number(document.getElementById("gradeOne").value);
    var grade2 = Number(document.getElementById("gradeTwo").value);
    var grade3 = Number(document.getElementById("gradeThree").value);
    var average = calculateAverage(grade1,grade2,grade3);
    var letterGrade = calculateLetterGrade(average);
    var outTable = generateDisplay(firstName,lastName,grade1,grade2,grade3,average,letterGrade);
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(outTable)
}

const calculateAverage = (grade1,grade2,grade3) => {
    return((grade1+grade2+grade3)/3).toFixed(1);
}

const calculateLetterGrade = (average) => {
    switch (true) {
        case average >= 90: return 'A';
        case average >= 80: return 'B';
        case average >= 70: return 'C';
        case average >= 60: return 'D';
        default: return 'F';
    }
}

const generateDisplay = (firstName,lastName,grade1,grade2,grade3,average,letterGrade) => {
    var table = document.createElement("table");
    var tableBody = document.createElement("tableBody");

    var row = document.createElement(`tr`);
    var cell = document.createElement("td");
    cell.className = `full-name`;
    var cellText = document.createTextNode(`Full Name: ${firstName} ${lastName}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tableBody.appendChild(row);

    row = document.createElement(`tr`);
    cell = document.createElement("td");
    cell.className = `grade-row`;
    cellText = document.createTextNode(`Grade 1: ${grade1}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tableBody.appendChild(row);

    row = document.createElement(`tr`);
    cell = document.createElement("td");
    cell.className = `grade-row`;
    cellText = document.createTextNode(`Grade 2: ${grade2}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tableBody.appendChild(row);

    row = document.createElement(`tr`);
    cell = document.createElement("td");
    cell.className = `grade-row`;
    cellText = document.createTextNode(`Grade 3: ${grade3}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tableBody.appendChild(row);

    row = document.createElement(`tr`);
    cell = document.createElement("td");
    cell.className = `grade-average`;
    cellText = document.createTextNode(`Average: ${average}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tableBody.appendChild(row);

    row = document.createElement(`tr`);
    cell = document.createElement("td");
    cell.className = `grade-letter`;
    cellText = document.createTextNode(`Letter Grade: ${letterGrade}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tableBody.appendChild(row);

    table.appendChild(tableBody);
    console.log(`table`,table)
    return table;
}