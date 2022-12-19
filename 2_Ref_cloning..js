function updateUser(p1) {
  p1.country = "INDIA"; //added one ele in object
}

function main() {
  let user = { id: 1, name: "mahi" }; //created [obj:1]

  console.log(user); //before updation

  //CALL BY REFERENCE
  updateUser(user); //object given to the function

  console.log(user); // after updated
}

main();
