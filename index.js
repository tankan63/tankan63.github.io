// lastUpdated.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the last modified timestamp of the current page
    var lastModified = new Date(document.lastModified);

    // Extract the date components
    var year = lastModified.getFullYear();
    var month = lastModified.getMonth() + 1; // Months are 0-indexed
    var day = lastModified.getDate();

    // Update the HTML content of the 'lastUpdated' element
    document.getElementById("lastUpdated").textContent = year + "-" + month + "-" + day;
});

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var site_data = JSON.parse(this.responseText);
        var num_arr = site_data.info.views.toString().split("");
        console.log(site_data);
        var num_str = "";
        for (i = 0; i < num_arr.length; i++) {
            num_str += num_arr[i];
            if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
            var date_str = site_data.info.last_updated;
            var date_obj = new Date(site_data.info.last_updated);
            document.getElementById("lastupdate").innerHTML = (date_obj.getMonth()+1) + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
        }
        document.getElementById("hitcount").innerHTML = num_str;
    }
};