const person = {
    name: "Dat",
    age: 20,
    child: {
        name: "Kien",
    },
};

// Deep copy

// const person2 = JSON.parse(JSON.stringify(person));
const person2 = structuredClone(person);
person2.address = "abc";
person2.child.name = "Son";

console.log("person", person);
console.log("person2", person2);