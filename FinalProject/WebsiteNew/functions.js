// Framework

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
function sumCosts(){
    let total = housing*housingLevel+bills*billsLevel+transport*transportLevel+leisure*leisureLevel+holidays*holidaysLevel+clothes*clothesLevel+savings*savingsLevel;
    alert (formatter.format(total))
}
