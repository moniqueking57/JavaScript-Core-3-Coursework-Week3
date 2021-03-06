let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ronald",
    lastName: "Weasly",
    house: "Gryffindor",
    pet: "Rat",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// eslint-disable-next-line no-unused-vars
const [firstName, lastName, house, pet, occupation] = hogwarts;

console.log("Gryffindor House");
function bestHouse(search) {
  search.forEach((name) => {
    if (name.house === "Gryffindor") {
      console.log(name.firstName, name.lastName);
    }
  });
}
bestHouse(hogwarts);

console.log("Teachers and pets");
function pets(search) {
  search.forEach((name) => {
    if (name.pet != null && name.occupation === "Teacher") {
      console.log(name.firstName, name.lastName);
    }
  });
}
pets(hogwarts);
