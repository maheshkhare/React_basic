//CALL BY VALUE :: CALL BY REFERENCE

let user1 = { id: 1, name: "mahi" }; //created a object[obj:1]
let user2 = user1; //taking user1 object[obj:1]
//now both are pointing on same object[obj:1]

user1.country = "India"; //ele added in [obj:1]
user2.champ = "2022"; //ele added in [obj:1]

console.log(user1);
console.log(user2);

// both are printing same values
