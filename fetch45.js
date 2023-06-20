function fetchData() {
    const url = "https://api.example.com/data";
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle the retrieved data here
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  }
  
  // Call the function to initiate the AJAX request
  fetchData();