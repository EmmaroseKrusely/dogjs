
function Dog(ownersName, dogsName, color) {
    this.ownersName = ownersName;
    this.dogsName = dogsName;
    this.color = color;
    this.numblegs = 4;
    
}

let terrier = new Dog('Jessie', 'Sweetie', 'Brown');{
console.log(ownersName + "has a" + color + "dog named" + dogsName);


}
// {
//     this.ownersName = "Jessie";
//     this.dogsName = "Sweetie"
//     this.color = "Brown"
//     }

let retriever = new Dog('Bob', 'Doug', 'White'); {
    console.log(ownersName + "has a" + color + "dog named" + dogsName);
    
}

// {
// this.ownersName = "Jessie";
// this.dogsName = "Sweetie";
// this.color = "Brown",

// }




    
function() { return ownersName + "has a" + color + "dog named" + dogsName }