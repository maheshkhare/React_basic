let ref1 = { id: 1, name: "mahi", task: "Assignmeent 1" };

// Firt Clone the Memmbers, Then add/update the id memeber and add city memeber;
// similar way we can add/update more members.
let ref2 = { ...ref1, id: 2, city: "Pandharpur" };
//taken updated value if same ele

//first add and then clone ,taken privios value if same ele
let ref3 = { id: 3, city: "pune", ...ref1 };

//if same ele we update at last then then taken updated
let ref4 = { id: 4, ...ref1, city: "Solapur", id: 5 };

console.log(ref1);
console.log(ref2);
console.log(ref3);
console.log(ref4);
