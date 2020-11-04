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
      if (greaterThen10()) { 
      bonusValue += employee.annualSalary * .05
      }
      if (employee.annualSalary > 65000) {
        bonusValue -= employee.annualSalary * .01
      } 
      let bonusPercentage = bonusValue/employee.annualSalary 
      if (bonusPercentage < 0) {
        bonusValue = 0; 
      } 
      else if (bonusPercentage > .13) { 
        bonuValue = employee.annualSalary * .13
      }
      totalCompensation = bonusValue + employee.annualSalary
    
      break;
    case 4: 
      //code
      break;
    case 3:
      // code
      break;
    case 2: 
      //code
      break;
    case 1:
      //code
      break;
    default:
      console.log (`Error in Case Logic`);
    };
    
    function greaterThen10() { 
      return employeeNumber.length < 5;   
    }

//   The `name` property should contain the employee's name.
// * The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// * The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
// * The `totalBonus` should be th

    return returnArray;  
};



// - Those who have a rating of a 2 or below should not receive a bonus.
// - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.
// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
