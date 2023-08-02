

$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "/assets/tsv/pico.tsv",
    dataType: "text",
    success: function(data) {
      var lines = data.split("\n");
      var outputDiv = $("#output");
      var dataArray = []; // Array to store data for sorting

      // ... existing code for creating divs for each row and extracting specific values ...
      // Create divs for each row
      for (var j = 0; j < lines.length; j++) {
        var rowData = lines[j].split("\t");
        var headers = lines[0].split("\t");

        // Extract specific values based on headers
        if (j > 0) {
          var cols = rowData;
          var dir_title = cols[headers.indexOf('Games')];
          var dir_price = cols[headers.indexOf('Price')];
          var dir_type = cols[headers.indexOf('Type')];
          var dir_area = cols[headers.indexOf('Area')];
          var dir_date = cols[headers.indexOf('Date')];

          // Store the row data in an object and push it to the dataArray
          dataArray.push({
            title: dir_title,
            price: dir_price,
            type: dir_type,
            area: dir_area,
            date: dir_date
          });
        }
      }
      // ... existing code for sorting dataArray based on title and appending sorted data to outputDiv ...

      function sortData(sortOption) {
        // Sort the dataArray based on the selected option
        if (sortOption === "az") {
          dataArray.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === "date") {
          dataArray.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        // Clear the existing content of outputDiv
        outputDiv.empty();

        // Create divs for each row based on sorted dataArray
        for (var i = 0; i < dataArray.length; i++) {
          var dataItem = dataArray[i];
          var tr_html = '<div class="row-col" data-id="name">' +
                            //'<div class="image-icon" style="background-image: url(/images/' + lowert +'.jpg), url(/images/placeholder-images-image_large.png)"></div>' +
                            '<div class="col" data-id="name"><span>' + dataItem.title +'</span></div>' +
                            '<div class="col" data-id="time"><span>' + dataItem.price +'</span></div>' + 
                            '<div class="col" data-id="time"><span>' + dataItem.type +'</span></div>' +   
                            '<div class="col" data-id="time"><span>' + dataItem.date +'</span></div>' +    
                          '</div>';

          outputDiv.append(tr_html);
        }
      }

      // Initial sorting on page load
      var sortOption = "az"; // Default: Sort A-Z
      sortData(sortOption);

      // Handle sort dropdown change event
      $("#sortDropdown").change(function() {
        sortOption = $(this).val();
        sortData(sortOption);
      });
    }
  });
});
