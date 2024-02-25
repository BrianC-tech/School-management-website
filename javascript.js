
  // JavaScript function to populate the country dropdown
  function populateCountries() {
    // Get the select element
    var countrySelect = document.getElementById('country');

    // Clear existing options
    countrySelect.innerHTML = '';

    // Add default option
    var defaultOption = document.createElement('option');
    defaultOption.text = 'Select a country';
    countrySelect.add(defaultOption);

    // Fetch list of countries from Restcountries API
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Sort countries alphabetically
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));

        // Add countries to the dropdown
        data.forEach(country => {
          var option = document.createElement('option');
          option.value = country.name.common;
          option.text = country.name.common;
          countrySelect.add(option);
        });
      })
      .catch(error => console.error('Error fetching countries:', error));
  }
