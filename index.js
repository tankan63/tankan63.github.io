// Open all links in a new tab
document.querySelectorAll("a").forEach(function(link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer noopener");
});

// Show last-modified date on index.html
document.addEventListener("DOMContentLoaded", function() {
    var el = document.getElementById("lastUpdated");
    if (el) {
        var d = new Date(document.lastModified);
        el.textContent = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    }

    // TO ADD UPDATES: edit data/updates.json
    // Format: {"date": "Mon Year", "text": "...", "new": true/false}
    loadUpdates();
});

function loadUpdates() {
    var list = document.getElementById("updatesList");
    if (!list) return;

    fetch("data/updates.json")
        .then(function(r) { return r.json(); })
        .then(function(updates) {
            list.innerHTML = "";
            updates.forEach(function(u) {
                var li = document.createElement("li");
                var badge = u.new ? ' <span class="new-badge">NEW!</span>' : "";
                li.innerHTML =
                    '<span class="update-date">[' + u.date + ']</span>' +
                    u.text + badge;
                list.appendChild(li);
            });
        })
        .catch(function() {
            // fetch fails when opened as a local file:// — works fine on GitHub Pages
            list.innerHTML = "<li>Updates unavailable (serve via HTTP to load)</li>";
        });
}