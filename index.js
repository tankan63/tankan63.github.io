// Some link magic?
let links = document.querySelectorAll("a");
for (var i=0; i < links.length; i++) {
    links[i].setAttribute("target", "_blank");
    links[i].setAttribute("rel", "noreferrer noopener")
}
// lastUpdated.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the last modified timestamp of the current page
    let lastModified = new Date(document.lastModified);

    // Extract the date components
    let year = lastModified.getFullYear();
    let month = lastModified.getMonth() + 1; // Months are 0-indexed
    let day = lastModified.getDate();

    // Update the HTML content of the 'lastUpdated' element
    document.getElementById("lastUpdated").textContent = year + "-" + month + "-" + day;
});

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let site_data = JSON.parse(this.responseText);
        let num_arr = site_data.info.views.toString().split("");
        console.log(site_data);
        let num_str = "";
        for (i = 0; i < num_arr.length; i++) {
            num_str += num_arr[i];
            if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
            let date_str = site_data.info.last_updated;
            let date_obj = new Date(site_data.info.last_updated);
            document.getElementById("lastupdate").innerHTML = (date_obj.getMonth()+1) + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
        }
        document.getElementById("hitcount").innerHTML = num_str;
    }
};