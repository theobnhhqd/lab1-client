person = {
    name:"Keena",
    age:45,
    birthday:{day:5, month:11, year:1997},
    max:(x,y) => (x>y)?x:y
}

console.log(person.name);
console.log(person.age);
console.log(person.birthday.year);
console.log(person.max);
console.log(person.max.description);

person.max.description = "Find max"
console.log(person.max.description);