let ref1 = { id: 1, task: "React Assignment 1" }; //object created[obj:1]

//DUPLICATE :: CLONE [obj:2]
let ref2 = { ...ref1 }; //another object is created but all data of ref1 cloned insde it

//before update
console.log(ref1);
console.log(ref2);

//after update

ref1.country = "india"; //added in [obj:1]
ref2.venue = "MH"; //added in [obj:2]

console.log(ref1);
console.log(ref2);

//after updation both elements are different
