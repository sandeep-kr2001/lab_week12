//Part 2
function elemtPrint() {
    return document.querySelector('.one')
}
console.log(elemtPrint())


// Part 3
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]

function scholarStudents(students) {
    const studentsScholarship = []
    for (var student in students) {
        var x= 0;
        var count = 0;
        for(var key in students[student].grades){
            x+=students[student].grades[key]
            count += 1;
            var avg = x/count
        }
        if(avg >80){
            const dict = {};
            dict.Name = students[student].name
            dict.gradeAvg = avg
            studentsScholarship.push(dict)
        }
    }
    return studentsScholarship
}
console.log(scholarStudents(students))