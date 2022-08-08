'use strict';
const body = document.getElementById('visit_box');



let Id= 999;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// constructor
const allEmployees = [];
function Employee(fullnameVal, departmentVal, LeveVal , ImageVal, employeeIDVal, salaryVal ) {
    this.fullName = fullnameVal;
    this.department = departmentVal;
    this.level = LeveVal;
    this.imageURL = ImageVal;
    this.employeeID = employeeIDVal;
    this.salary = salaryVal;
    allEmployees.push(this);
    

  for (let i = 0; i < allEmployees.length-1; i++){
    console.log(`Employee name: ${allEmployees[i].fullName} `);
    console.log(`Department: ${allEmployees[i].department} `);
    console.log(`Employee salary: ${allEmployees[i].salary} `);
    console.log("-----------------------");
  }

  this.getRandomSalary= function(min,max) {
    let salaryV= Math.floor(Math.random()*(max- min) + min);
    let netSalary= salaryV-(salaryV*0.075);
    this.salary= salaryV;
    //console.log("Employee salary: "+salaryV);
  }

    if(this.level === "Senior"){
        this.getRandomSalary(1500,2000);
    } else if (this.level === "Mid-Senior") {
        this.getRandomSalary(1000,1500);
      } else {
        this.getRandomSalary(500,1000);
      }
  
}

// Employee.prototype.printInfoEmployee = function(){
//     document.write(`<p>"Employee name " :${this.fullName} </p>`)
//     document.write(`<p>"Department " :${this.department} </p>`)
//     document.write(`<p>"Employee salary " :${this.salary} </p>`)
//     document.write(`<p>_______________ </p>`)
// }

// Prototype to write in HTML 

Employee.prototype.printInfoEmployee = function() {


  const imgE1 = document.createElement('img');
  imgE1.src= this.imageURL;
  imgE1.alt= this.fullName;


  const pE1 = document.createElement('p');
  pE1.textContent= `Name  :${this.fullName} - ID:${this.employeeID}   `;
  const pE2 = document.createElement('p');
  pE2.textContent= `Department :${this.department} - Level: ${this.level} `;
  const pE3 = document.createElement('p');
  pE3.textContent= `Salary :${this.salary} `;

  let divE=document.createElement("div");
  
  divE.classList.add("card");
  divE.classList.add("flex");
  divE.appendChild(imgE1);
  divE.appendChild(pE1);
  divE.appendChild(pE2);
  divE.appendChild(pE3);

body.appendChild(divE);
  
  }


let employee1 = new Employee("Ghazi Samer", "Administration" , "Senior", "./image/Ghazi.jpg" , getRandomInt(100,1000) , 0);
let employee2 = new Employee("Lana Ali", "Finance" , "Senior", "./image/Lana.jpg" , getRandomInt(100,1000) , 0);
let employee3 = new Employee("Tamara Ayoub", "Marketing" , "Senior", "./image/Tamara.jpg" , getRandomInt(100,1000) , 0);
let employee4 = new Employee("Safi Walid", "Administration" , "Mid-Seniorr", "./image/Safi.jpg" , getRandomInt(100,1000) , 0);
let employee5 = new Employee("Omar Zaid", "Development" , "Senior", "./image/Omar.jpg" , getRandomInt(100,1000) , 0);
let employee6 = new Employee("Rana Saleh", "Development" , "Junior", "./image/Rana.jpg" , getRandomInt(100,1000) , 0);
let employee7 = new Employee("Hadi Ahmad", "Finance" , "Mid-Senior", "./image/Hadi.jpg" , getRandomInt(100,1000) , 0);


// Writing to the HTML //

for (let j = 0; j <= allEmployees.length -1; j++){
  allEmployees[j].printInfoEmployee();
}





