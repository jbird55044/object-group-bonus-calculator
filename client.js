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
    
    if (greaterThen15(employee)) {bonusValue += employee.annualSalary * .05}

    if (ifAnnualSalaryTooHigh(employee)) {bonusValue -= employee.annualSalary * .01}
    
    let bonusPercentage = bonusValue/employee.annualSalary 
    if (bonusPercentage < 0) {
      bonusValue = 0; 
      bonusPercentage = 0;
    } 
    else if (bonusPercentage > .13) { 
      bonusValue = employee.annualSalary * .13
      bonusPercentage = .13;
    }

    bonusValue = Math.round(bonusValue);
    totalCompensation = bonusValue + +employee.annualSalary

    returnArray.name = employee.name;
    returnArray.bonusPercentage = bonusPercentage * 100;
    returnArray.totalCompensation = totalCompensation;  
    returnArray.totalBonus = bonusValue;
    return returnArray;  
}; // end of bonusCalculator fn

const ifAnnualSalaryTooHigh = (employee) => {
  if (employee.annualSalary > 65000) {
    return true
  } 
  return false;
}

const greaterThen15 = (employee) => { 
  return employee.employeeNumber.length < 5;   
} // end of greaterThen15 fn

function readyNow(){ 
  let html = '';
  let el = $('#employeeList');
  el.empty()
  html = `<tr><th> Name </th> <th>Bonus Percentage</th><th>Total Comp</th><th>Bonus</th></tr>`;
  el.append( html ); 
  

  for (let item of employees) {   
    let employeeRecord = bonusCalculator(item);  
       
    html = `<tr>`
    html += `<td> ${employeeRecord.name} </td>`;
    html += `<td> ${employeeRecord.bonusPercentage}% </td>`;
    html += `<td> $${employeeRecord.totalCompensation} </td>`;
    html += `<td> $${employeeRecord.totalBonus} </td>`;
    html += `<tr>`
    el.append( html ); 
    console.log (`bonusCalculator(item)`, bonusCalculator(item));
  }
}

//console.log( employees ); + 
