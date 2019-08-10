//listen for submit
document.getElementById('fuel-form').addEventListener('submit', function(e){
    //Hide result
    document.getElementById('results').style.display = 'none';

    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

//calculate results
function calculateResults(){
    console.log('Calculating...');
    //UI Var
    const tradeInRating = document.getElementById('tradeInRating');
    const purchaseRating = document.getElementById('purchaseRating');
    const miles = document.getElementById('Miles');
    const costPerGallon = document.getElementById('costPerGallon');
    const annualFuelCost = document.getElementById('annualFuelCost');
    const newVehicleFuelCost = document.getElementById('newVehicleFuelCost');
    const differencePerYear = document.getElementById('differencePerYear');
    const differencePerMonth = document.getElementById('differencePerMonth');

    const tradeInAnnualFuelCostResults = ((miles.value)*(costPerGallon.value)) / tradeInRating.value;
    const newVehicleFuelCostResults = ((miles.value)*(costPerGallon.value)) / purchaseRating.value;
    const differencePerYearResults = tradeInAnnualFuelCostResults - newVehicleFuelCostResults;
    const differencePerMonthResults = differencePerYearResults / 12;

    if(tradeInRating) {
        annualFuelCost.value = tradeInAnnualFuelCostResults.toFixed(2);
        newVehicleFuelCost.value = newVehicleFuelCostResults.toFixed(2);
        differencePerYear.value = differencePerYearResults.toFixed(2);
        differencePerMonth.value = differencePerMonthResults.toFixed(2);
        
        //show results
        document.getElementById('results').style.display = 'block';
        //hide loader
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check your numbers');
    }
}

//Show Error
function showError(error) {
            //show results
            document.getElementById('results').style.display = 'none';
            //hide loader
            document.getElementById('loading').style.display = 'none';
    //create div
    const errorDiv = document.createElement('div');

    //get elemeents
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errorDiv.className = 'alert alert-danger';

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //insert error above heading
    card.insertBefore(errorDiv, heading);

    //clear error after 3 seconds
    setTimeout(clearError, 3000);
}

//clear error
function clearError() {
    document.querySelector('.alert').remove();
}
