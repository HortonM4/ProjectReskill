



// variables to be populated from function using data stored in database
let housing;
let householdBills;
let transportation;
let leisure;
let holidays;
let clothes;
let savings;

// variables to be populated by selection of radio buttons (no spend=0, low=.7, avg=1, high=1.3)
let housingLevel;
let billsLevel;
let transportLevel;
let leisureLevel;
let holidaysLevel;
let clothesLevel;
let savingsLevel;

// to display in pounds and pence
const formatter = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
})
// to generate total of monthly cost expectations based on average cost*expended spend level for each category
//function sumCosts(){
//    let total = housing*housingLevel+bills*billsLevel+transport*transportLevel+leisure*leisureLevel+holidays*holidaysLevel+clothes*clothesLevel+savings*savingsLevel;
//    alert (formatter.format(total))
//}

// to summarise from form selections

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
