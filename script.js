 
 var currentPage = window.location.pathname.split("/").pop().split(".")[0];

 
 document.querySelectorAll('.nav__links a').forEach(function(link) {
     link.classList.remove('active');
 });


 var activeLink = document.querySelector('.nav__links a[href="' + currentPage + '"]');
 if (activeLink) {
     activeLink.classList.add('active');
 }
 


 function calculate() {
    // Get values from the form
    var turbineModel = document.getElementById("turbineModel").value;
    var numTurbines = parseInt(document.getElementById("numTurbines").value);
    var windSpeed = parseFloat(document.getElementById("windSpeed").value);
    var weibullShape = parseFloat(document.getElementById("weibullShape").value);
    var referenceHeight = parseFloat(document.getElementById("referenceHeight").value);
    var airDensity = parseFloat(document.getElementById("airDensity").value);
    var shear = parseFloat(document.getElementById("shear").value);
    var electricityConsumption = parseFloat(document.getElementById("electricityConsumption").value);
    var co2Emissions = parseFloat(document.getElementById("co2Emissions").value);

    
    var turbineCapacity = numTurbines * 100; // Dummy value, replace with actual formula
    var rotorDiameter = 2 * referenceHeight; // Dummy value, replace with actual formula
    var hubHeight = referenceHeight; // Dummy value, replace with actual formula
    var generatedGrossElectricity = calculateElectricityGenerated(windSpeed, rotorDiameter, airDensity, shear);
    var generatedNetElectricityIndicative = generatedGrossElectricity * 0.9; // Dummy value, replace with actual formula
    var generatedNetElectricityHousehold = generatedNetElectricityIndicative / electricityConsumption; // Dummy value, replace with actual formula
    var co2Abatement = generatedNetElectricityIndicative * co2Emissions / 1000; // Convert kg to tons

    // Display results
    document.getElementById("turbineCapacity").innerText = turbineCapacity.toFixed(2);
    document.getElementById("rotorDiameter").innerText = rotorDiameter.toFixed(2);
    document.getElementById("hubHeight").innerText = hubHeight.toFixed(2);
    document.getElementById("generatedGrossElectricity").innerText = generatedGrossElectricity.toFixed(2);
    document.getElementById("generatedNetElectricityIndicative").innerText = generatedNetElectricityIndicative.toFixed(2);
    document.getElementById("generatedNetElectricityHousehold").innerText = generatedNetElectricityHousehold.toFixed(2);
    document.getElementById("co2Abatement").innerText = co2Abatement.toFixed(2);
}

function calculateElectricityGenerated(windSpeed, rotorDiameter, airDensity, shear) {
    // Dummy calculation, replace with actual formula
    var power = 0.5 * airDensity * Math.PI * Math.pow(rotorDiameter / 2, 2) * Math.pow(windSpeed, 3) * 0.3; // Dummy efficiency value
    var hoursInYear = 24 * 365;
    var electricityGenerated = power * hoursInYear;

    return electricityGenerated;
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

   
    var formData = new FormData(event.target);
    var formDataObject = {};
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });

   
    alert("Form submitted!\nData: " + JSON.stringify(formDataObject));

});
