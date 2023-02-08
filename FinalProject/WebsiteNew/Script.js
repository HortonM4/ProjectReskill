// to display in pounds and pence
const formatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
})

// variables to be populated from function using data stored in database
let housing;
let householdBills;
let transportation;
let leisure;
let holidays;
let clothes;
let savings;
let salary;


// Function to store the salary and format it
function storeSalary() {
// Get the value of the salary input and parse it as a float
salary = parseFloat(document.getElementById("salaryInput").value);
// Check if the salary value exists
if (salary) {
// Log the formatted salary to the console
console.log(formatter.format(salary));
// Change the background color of the input to green
document.getElementById("salaryInput").style.backgroundColor = "green";
} else {
// Change the background color of the input to red
document.getElementById("salaryInput").style.backgroundColor = "red";
}
}

// Event listener to restrict input to only numbers
document.getElementById("salaryInput").addEventListener("input", function (e) {
  // Check if the value is a number with up to 2 decimal places
  if (!/^\d*(\.\d{0,2})?$/.test(e.target.value)) {
    // If it's not a number, remove the last character
    e.target.value = e.target.value.substring(0, e.target.value.length - 1);
  }
});


// Function to handle form submission
function handleFormSubmit(event) {
  // Prevent default form behavior
  event.preventDefault();
  // Check if salary has been set
  if (!salary) {
    // If salary is not set, clear the result element and return
    document.getElementById('result').innerHTML = '';
    return;
  }
  // Get the total cost of selected items
  const totalCost = totalSelected();
  // Calculate the remaining salary
  const remaining = salary - totalCost;
  // Check if there is a positive remaining salary
  let message = '';
  if (remaining > 0) {
    // Create a message if there is a positive remaining salary
    message = `<div class="positive-message"> <b> Based on your selections your monthly household budget will leave ${formatter.format(remaining)}
    at the end of the month. <br><br> You could use the extra money to increase your savings, or devote more to areas which are important to you.
    If you have low or no savings, you may wish to set a savings goal before spending extra on non-essential Items.<br>
    <br>Feel free to re-run the checker with different selections to see all of your options. </b></div>`;
  } else if (remaining < 0) {
    // Create a message if there is a negative remaining salary
    message = `<div class="negative-message"> <b> Unfortunately your expected monthly budget comes out higher than your monthly salary leaving your remaining balance at ${formatter.format(remaining)}
    Have another go at choosing your monthly outgoings with the checker. <br><br> It’s important to be realistic about what you can afford so you don’t go into debt, or find yourself struggling to make ends meet.
    Remember as time goes on your circumstances will change so you can always adjust your spend in the future as your income increases, or your spending patterns change.
    <br><br>Have a look at our website for some helpful money saving tips too. </b></div>`;
  }
  // Calculate the spent percentage of the salary
  let spentPercentage = Math.round((totalCost / salary) * 100);
  // Check if the spent percentage is over 100
  spentPercentage = spentPercentage > 100 ? 100 : spentPercentage;
  // Calculate the remaining percentage of the salary
  const remainingPercentage = 100 - spentPercentage;
  // Update the result element with the calculated values and the message
  document.getElementById('result').innerHTML = `
    <div class="salary-container">
      <div class="spent" style="width: ${spentPercentage}%">
        ${spentPercentage !== 0 ? `<span class="percentage">${spentPercentage}%</span>` : ''}
      </div>
      <div class="remaining" style="width: ${remainingPercentage}%">
        ${remainingPercentage !== 0 ? `<span class="percentage">${remainingPercentage}%</span>` : ''}
      </div>
    </div>
    <div class="text"><br>
      Total Monthly Cost: ${formatter.format(totalCost)}<br>
      <br>
      Remaining salary: ${formatter.format(remaining)}
    </div>
    <br>
    ${message}
  `;
}



function apiCall() {
  let url = 'http://localhost:8080/api/budget/planner';

    fetch(url)
    .then(res => res.json())
    .then(response => {
    // showing how to access items in the json structure
    console.log('Checkout this JSON! ', response[0]);
    housing = response[0].housing;
    householdBills = response[0].householdBills;
    transportation = response[0].transport;
    leisure = response[0].leisure;
    holidays = response[0].holidays;
    clothes= response[0].clothes;
    savings= response[0].savings;

    console.log('Transportation = ', transportation)

    // Assigns values to radio buttons
    assignValues()

    console.log('Radio IDs for housing = ', housingNone ,housingLow, housingAvg, housingHigh)

    document.getElementById("savingsInfo").innerHTML = "The median savings figure in the UK is <strong>£" + savings + "</strong>";
    document.getElementById("housingInfo").innerHTML = "The Average cost of rent in the UK (excl London) is <strong>£" + housing + "</strong>";
    document.getElementById("householdBillsInfo").innerHTML = "The Average cost of Household bills in the UK is <strong>£" + householdBills + "</strong>";
    document.getElementById("transportationInfo").innerHTML = "The average cost of transportation in the UK <strong>£" + transportation + "</strong>";
    document.getElementById("leisureInfo").innerHTML = "The average cost of leisure activities in the UK (TV packages , Takeaways , gym membership etc. ) is <strong>£" + leisure + "</strong>";
    document.getElementById("clothesInfo").innerHTML = "The average cost of clothes in the UK (recommended 5% of your monthly take home pay)is <strong>£" + clothes + "</strong>";
    document.getElementById("holidaysInfo").innerHTML = "The Average cost of a Holiday in the UK (monthly equivalent based on UK average of 2 weeks of holidays taken, at £855 per person per week is <strong>£" + holidays + "</strong>";

    // un-hide - submit button will be hidden until var are populated/buttons are defined
    document.getElementById('submit').style.display='block';
    })
    .catch(err => { throw err });
    }
function assignValues(){
    document.getElementById('housingNone').setAttribute('value', 0);
    document.getElementById('housingLow').setAttribute('value', housing * .7);
    document.getElementById('housingAvg').setAttribute('value', housing);
    document.getElementById('housingHigh').setAttribute('value', housing * 1.3);
    document.getElementById('householdBillsNone').setAttribute('value', 0);
    document.getElementById('householdBillsLow').setAttribute('value', householdBills * .7);
    document.getElementById('householdBillsAvg').setAttribute('value', householdBills);
    document.getElementById('householdBillsHigh').setAttribute('value', householdBills * 1.3);
    document.getElementById('transportationNone').setAttribute('value', 0);
    document.getElementById('transportationLow').setAttribute('value', transportation * .7);
    document.getElementById('transportationAvg').setAttribute('value', transportation);
    document.getElementById('transportationHigh').setAttribute('value', transportation * 1.3);
    document.getElementById('leisureNone').setAttribute('value', 0);
    document.getElementById('leisureLow').setAttribute('value', leisure * .7);
    document.getElementById('leisureAvg').setAttribute('value', leisure);
    document.getElementById('leisureHigh').setAttribute('value', leisure * 1.3);
    document.getElementById('holidaysNone').setAttribute('value', 0);
    document.getElementById('holidaysLow').setAttribute('value', holidays * .7);
    document.getElementById('holidaysAvg').setAttribute('value', holidays);
    document.getElementById('holidaysHigh').setAttribute('value', holidays * 1.3);
    document.getElementById('clothesNone').setAttribute('value', 0);
    document.getElementById('clothesLow').setAttribute('value', clothes * .7);
    document.getElementById('clothesAvg').setAttribute('value', clothes);
    document.getElementById('clothesHigh').setAttribute('value', clothes * 1.3);
    document.getElementById('savingsNone').setAttribute('value', 0);
    document.getElementById('savingsLow').setAttribute('value', savings * .7);
    document.getElementById('savingsAvg').setAttribute('value', savings);
    document.getElementById('savingsHigh').setAttribute('value', savings * 1.3);
    }


function totalSelected() {
  let totalCost = 0;
    if (document.getElementById("housingNone").checked){
        totalCost += parseFloat(document.getElementById("housingNone").value)
        }
    if (document.getElementById("housingLow").checked){
        totalCost += parseFloat(document.getElementById("housingLow").value)
        }
    if (document.getElementById("housingAvg").checked){
        totalCost += parseFloat(document.getElementById("housingAvg").value)
        }
    if (document.getElementById("housingHigh").checked){
        totalCost += parseFloat(document.getElementById("housingHigh").value)
        }
    if (document.getElementById("householdBillsNone").checked){
        totalCost += parseFloat(document.getElementById("householdBillsNone").value)
        }
    if (document.getElementById("householdBillsLow").checked){
        totalCost += parseFloat(document.getElementById("householdBillsLow").value)
        }
    if (document.getElementById("householdBillsAvg").checked){
        totalCost += parseFloat(document.getElementById("householdBillsAvg").value)
        }
    if (document.getElementById("householdBillsHigh").checked){
        totalCost += parseFloat(document.getElementById("householdBillsHigh").value)
        }
    if (document.getElementById("transportationNone").checked){
        totalCost += parseFloat(document.getElementById("transportationNone").value)
        }
    if (document.getElementById("transportationLow").checked){
        totalCost += parseFloat(document.getElementById("transportationLow").value)
        }
    if (document.getElementById("transportationAvg").checked){
        totalCost += parseFloat(document.getElementById("transportationAvg").value)
        }
    if (document.getElementById("transportationHigh").checked){
        totalCost += parseFloat(document.getElementById("transportationHigh").value)
        }
    if (document.getElementById("leisureNone").checked){
        totalCost += parseFloat(document.getElementById("leisureNone").value)
        }
    if (document.getElementById("leisureLow").checked){
        totalCost += parseFloat(document.getElementById("leisureLow").value)
        }
    if (document.getElementById("leisureAvg").checked){
        totalCost += parseFloat(document.getElementById("leisureAvg").value)
        }
    if (document.getElementById("leisureHigh").checked){
        totalCost += parseFloat(document.getElementById("leisureHigh").value)
        }
    if (document.getElementById("holidaysNone").checked){
        totalCost += parseFloat(document.getElementById("holidaysNone").value)
        }
    if (document.getElementById("holidaysLow").checked){
        totalCost += parseFloat(document.getElementById("holidaysLow").value)
        }
    if (document.getElementById("holidaysAvg").checked){
        totalCost += parseFloat(document.getElementById("holidaysAvg").value)
        }
    if (document.getElementById("holidaysHigh").checked){
        totalCost += parseFloat(document.getElementById("holidaysHigh").value)
        }
    if (document.getElementById("clothesNone").checked){
        totalCost += parseFloat(document.getElementById("clothesNone").value)
        }
    if (document.getElementById("clothesLow").checked){
        totalCost += parseFloat(document.getElementById("clothesLow").value)
        }
    if (document.getElementById("clothesAvg").checked){
        totalCost += parseFloat(document.getElementById("clothesAvg").value)
        }
    if (document.getElementById("clothesHigh").checked){
        totalCost += parseFloat(document.getElementById("clothesHigh").value)
        }
    if (document.getElementById("savingsNone").checked){
        totalCost += parseFloat(document.getElementById("savingsNone").value)
        }
    if (document.getElementById("savingsLow").checked){
        totalCost += parseFloat(document.getElementById("savingsLow").value)
        }
    if (document.getElementById("savingsAvg").checked){
        totalCost += parseFloat(document.getElementById("savingsAvg").value)
        }
    if (document.getElementById("savingsHigh").checked){
        totalCost += parseFloat(document.getElementById("savingsHigh").value)
        }
    return totalCost;
        }

apiCall();