$(document).ready(readyNow);

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243', 
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log (`We are here.`);

const bonusCalculator = (employee) => {
    const returnArray=[];
    let bonusValue = 0; 
    let totalCompensation = 0;


    switch ( employee.reviewRating ) {
    case 5: 
      bonusValue = employee.annualSalary * .10
      break;
    case 4: 
      bonusValue = employee.annualSalary * .06
      break;
    case 3:
      bonusValue = employee.annualSalary * .04
      break;
    case 2: 
      bonusValue = employee.annualSalary * 0
      break;
    case 1:
      console.log (`in case 1`);
      bonusValue = employee.annualSalary * 0
      break;
    default:
      console.log (`Error in Case Logic`);
    };
    

    if (greaterThen15()) { 
      bonusValue += employee.annualSalary * .05
    }
    if (employee.annualSalary > 65000) {
      bonusValue -= employee.annualSalary * .01
    } 
    
    let bonusPercentage = bonusValue/employee.annualSalary 
    if (bonusPercentage < 0) {
      bonusValue = 0; 
      bonusPercentage = 0;
    } 
    else if (bonusPercentage > .13) { 
      bonusValue = employee.annualSalary * .13
      bonusPercentage = .13;
    }
    totalCompensation = bonusValue + employee.annualSalary

    function greaterThen15() { 
      return employee.employeeNumber.length < 5;   
    } // end of greaterThen15 fn

    returnArray.name = employee.name;
    returnArray.bonusPercentage = bonusPercentage;
    returnArray.totalCompensation = totalCompensation;
    returnArray.totalBonus = bonusValue;
    return returnArray;  
}; // end of bonusCalculator fn

let testEmployee = bonusCalculator ({
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
})


function readyNow(){ 
  for (let item of employees) {   
    let employeeRecord = bonusCalculator(item);  
    let employeeString = employeeRecord.name + ' ' +  employeeRecord.totalCompensation + ' ' + employeeRecord.totalBonus + ' ' + employeeRecord.bonusPercentage;  
    let el = $('#employeeList');
    el.append( '<li>' + employeeString + '</li>'); 
    console.log (`bonusCalculator(item)`, bonusCalculator(item));
  }
}




// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//console.log( employees ); + 
