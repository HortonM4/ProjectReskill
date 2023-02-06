


// test push
// variables to be populated from function using data stored in database
let housing;
let householdBills;
let transportation;
let leisure;
let holidays;
let clothes;
let savings;


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

    console.log('Radio ID housingLow = ', housingLow)


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

function totalSelected(){
    let totalCost= 0;
    if (document.getElementById("housingNone").checked){
        totalCost += document.getElementById("housingNone").value
        }
    if (document.getElementById("housingLow").checked){
        totalCost += document.getElementById("housingLow").value
        }
    if (document.getElementById("housingAvg").checked){
        totalCost += document.getElementById("housingAvg").value
        }
    if (document.getElementById("housingHigh").checked){
        totalCost += document.getElementById("housingHigh").value
        }
    if (document.getElementById("householdBillsNone").checked){
        totalCost += document.getElementById("householdBillsNone").value
        }
    if (document.getElementById("householdBillsLow").checked){
        totalCost += document.getElementById("householdBillsLow").value
        }
    if (document.getElementById("householdBillsAvg").checked){
        totalCost += document.getElementById("householdBillsAvg").value
        }
    if (document.getElementById("householdBillsHigh").checked){
        totalCost += document.getElementById("householdBillsHigh").value
        }
    if (document.getElementById("transportationNone").checked){
        totalCost += document.getElementById("transportationNone").value
        }
    if (document.getElementById("transportationLow").checked){
        totalCost += document.getElementById("transportationLow").value
        }
    if (document.getElementById("transportationAvg").checked){
        totalCost += document.getElementById("transportationAvg").value
        }
    if (document.getElementById("transportationHigh").checked){
        totalCost += document.getElementById("transportationHigh").value
        }
    if (document.getElementById("leisureNone").checked){
        totalCost += document.getElementById("leisureNone").value
        }
    if (document.getElementById("leisureLow").checked){
        totalCost += document.getElementById("leisureLow").value
        }
    if (document.getElementById("leisureAvg").checked){
        totalCost += document.getElementById("leisureAvg").value
        }
    if (document.getElementById("leisureHigh").checked){
        totalCost += document.getElementById("leisureHigh").value
        }
    if (document.getElementById("holidaysNone").checked){
        totalCost += document.getElementById("holidaysNone").value
        }
    if (document.getElementById("holidaysLow").checked){
        totalCost += document.getElementById("holidaysLow").value
        }
    if (document.getElementById("holidaysAvg").checked){
        totalCost += document.getElementById("holidaysAvg").value
        }
    if (document.getElementById("holidaysHigh").checked){
        totalCost += document.getElementById("holidaysHigh").value
        }
    if (document.getElementById("clothesNone").checked){
        totalCost += document.getElementById("clothesNone").value
        }
    if (document.getElementById("clothesLow").checked){
        totalCost += document.getElementById("clothesLow").value
        }
    if (document.getElementById("clothesAvg").checked){
        totalCost += document.getElementById("clothesAvg").value
        }
    if (document.getElementById("clothesHigh").checked){
        totalCost += document.getElementById("clothesHigh").value
        }
    if (document.getElementById("savingsNone").checked){
        totalCost += document.getElementById("savingsNone").value
        }
    if (document.getElementById("savingsLow").checked){
        totalCost += document.getElementById("savingsLow").value
        }
    if (document.getElementById("savingsAvg").checked){
        totalCost += document.getElementById("savingsAvg").value
        }
    if (document.getElementById("savingsHigh").checked){
        totalCost += document.getElementById("savingsHigh").value
        }
    return totalCost
}

apiCall();
