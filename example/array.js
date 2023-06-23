const projects = [
  { id: 1, name: "Du an 1" }, // value
  { id: 2, name: "Du an 2" }, // value
  { id: 3, name: "Du an tot nghiep" }, // value
];

let result = "";

// for (let i = 0; i < projects.length; i++) {
//   result += `<div>${projects[i].name}</div>`;
// }

//for in
// for( let index in projects){
//     result += `<div>${projects[index].name}</div>`
// }
// for of
// for (let value of projects){
//     result += `<div>${value.name}</div>`
// }

const newProjects = projects.map(function(value, index) { 
    `<div>${value.name}</div>`}).join("");
    return newProjects


console.log("newProjects", newProjects);
console.log("result", result);
