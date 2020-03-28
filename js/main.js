
/********************* CORONA VIRUS STATISTICS API *********************/
/*** GET JSON DATA USING AJAX ***/
var getNgInfo = new XMLHttpRequest();

getNgInfo.open('GET', 'https://thevirustracker.com/free-api?countryTotal=NG');

// When data loads
getNgInfo.onload = function () {

    // parse the respone text to javascript object
    var data = JSON.parse(getNgInfo.responseText);
    console.log(data);
    console.log(data.countrydata[0]);
    console.log(data.countrydata[0].total_cases);

    const countrydata = data.countrydata[0];

    document.getElementById('total_cases').innerHTML            = countrydata.total_cases;
    document.getElementById('total_recovered').innerHTML        = countrydata.total_recovered;
    document.getElementById('total_unresolved').innerHTML       = countrydata.total_unresolved;
    document.getElementById('total_deaths').innerHTML           = countrydata.total_deaths;
    document.getElementById('total_new_cases_today').innerHTML  = countrydata.total_new_cases_today;
    document.getElementById('total_new_deaths_today').innerHTML = countrydata.total_new_deaths_today;
    document.getElementById('total_active_cases').innerHTML     = countrydata.total_active_cases;
    document.getElementById('total_serious_cases').innerHTML    = countrydata.total_serious_cases;

}

getNgInfo.send();