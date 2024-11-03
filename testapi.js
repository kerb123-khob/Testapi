$.ajax({
    url: "https://testapi-1-68pc.onrender.com/", // API endpoint URL
    type: "GET", // HTTP method (GET, POST, PUT, DELETE)
    dataType: "json", // Expected data format
    success: function(response) {
      console.log(response); // Handle the response data
    },
    error: function(error) {
      console.error("Error fetching data:", error); // Handle errors
    }
  });
  