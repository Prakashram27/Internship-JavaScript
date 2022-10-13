// Creating Object using Object Literals
let person = {
    firstName : "Harshat",
    lastName : "Mehtha",
    age :  35,
    Job: "Stock Market Analyst",
    parentsName : {
        mName : "Akshaya",
        fName : "Vishwa Mehtha"
    },

    //method
    getfunction:function (){
        //code execution
        return (`The name of the person is
          ${person.firstName} ${person.lastName}`)
    }
}
// Accessing fName 
console.log(person.parentsName.fName)
// Accessing method
console.log(person.getfunction())


// Object.create() method
// const person1 = Object.create(person);
// person1.firstName = "Arun"
// person1.lastName = "Kumar"

// Creating an object using the object constructor. 

function stud(name, age, studies){
    this.name = name;
    this.age = age;
    this.studies = studies;
}
var student = new stud("Chris", 21, "Computer Science");
console.log(student)

// class keyword and constructor function 

class Cars { 
    constructor(name, maker, price) { 
      this.name = name; 
      this.maker =  maker; 
      this.price = price; 
    } 
    getDetails(){ 
        return (`The name of the car is ${this.name}.`) 
    } 
  } 

  let car1 = new Cars('Rolls Royce Ghost', 'Rolls Royce', '$315K'); 
  let car2 = new Cars('Mercedes AMG One', 'Mercedes', '$2700K'); 
  console.log(car1);     
  console.log(car2);  
  
  


  //Inheritance 
class Garden{
    constructor(name){
        this.familyName = name;
    }
    //method to return the string
    toString(){
        return (`Name of the Family: ${this.familyName}`);
    }
}
class plant extends Garden{
    constructor(familyName,surName){
        //super keyword for calling the above class constructor
        super(familyName);
        this.surName = surName;
    }
    toString(){
        return (`${super.toString()},Plant surName: ${this.surName}`);
    }
}
let plant1 = new plant('Hibiscus',"Rosa");
console.log(plant1.toString());
let plant2 = new plant('Hibiscus',"Mutabilllis");
console.log(plant2.toString());


// Encapsution:
  class Emp_details{ 
    constructor(name,id){ 
        this.name = name; 
        this.id = id; 
    } 
    add_Address(add){ 
        this.add = add; 
    } 
    getDetails(){ 
        console.log(`Employee Name: ${this.name}, Address: ${this.add}`); 
    } 
} 
let person1 = new Emp_details('Anand',27); 
person1.add_Address('Bangalore'); 
person1.getDetails(); 






