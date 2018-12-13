const instructors = [
    {name: 'Quincy', speciality: 'Quantum Mechanics', medals: 2},
    {name:'Kenn', speciality: 'Norse Mythology', medals: 8},
    {name: 'Paul', speciality:'Tuvan throat singing', medals: 4},
    {name: 'AAron', speciality: 'Entomology', medals:7},
    {name: 'Carolyn', speciality: 'Fencing', medals:5},
    {name: "Tom", speciality: 'Chemistry', medals:3}
]

let instructor_names= [];

for (let i = 0; i <instructors.length; i++) {
    if(instructors[i].medals>=5){
        instructor_names.push(instructors[i].name)
    }
}
console.log(instructor_names);


const instructorNames = instructors.filter(instructor => instructor.medals>=5);
console.log(instructorNames);

