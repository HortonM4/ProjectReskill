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
    console.log('Checkout this JSON! ', response[0].housing);
    housing = response[0].housing;
    householdBills = response[0].householdBills;
    transportation = response[0].transportation;
    leisure = response[0].leisure;
    holidays = response[0].holidays;
    clothes= response[0].clothes;
    savings= response[0].savings;

    // un-hide - submit button will be hidden until var are populated
    document.getElementById('submit').style.display='block';
    })
.catch(err => { throw err });
}

apiCall();
