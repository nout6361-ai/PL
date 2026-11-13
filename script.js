let searchMode = "plate";

let reports = [];

// CHANGE SEARCH MODE

function changeMode(mode, button) {

    searchMode = mode;

    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });

    button.classList.add("active");

    let input = document.getElementById("searchInput");

    if (mode === "plate") {
        input.placeholder = "Enter license plate";
        input.maxLength = 25;
    } else {
        input.placeholder = "Enter 17-character VIN";
        input.maxLength = 17;
    }

}


// SEARCH CAR

function searchCar() {

    let input = document.getElementById("searchInput").value.trim();

    let result = document.getElementById("searchResult");

    if (input === "") {
        result.innerHTML = "Please enter a vehicle number.";
        return;
    }

    let found = reports.filter(report => {

        if (report.status !== "approved") {
            return false;
        }

        if (searchMode === "plate") {
            return report.plate.replace(/\s/g, "").toUpperCase()
                === input.replace(/\s/g, "").toUpperCase();
        }

        return report.vin.toUpperCase() === input.toUpperCase();

    });

    if (found.length > 0) {

        result.innerHTML = "<b>Vehicle history found!</b>";

        found.forEach(report => {

            result.innerHTML += `
                <div class="result-item">
                    <p>Damage: ${escapeHTML(report.type)}</p>
                    <p>Date: ${escapeHTML(report.date || "Not specified")}</p>
                    <p>Status: Approved</p>
                </div>
            `;

        });

    } else {

        result.innerHTML =
            "No approved reports found in this demo database.";

    }

}


// PREVIEW PHOTOS

document.getElementById("photos").addEventListener("change", function() {

    let preview = document.getElementById("preview");

    preview.innerHTML = "";

    let files = Array.from(this.files);

    if (files.length > 5) {
        alert("Maximum 5 photos allowed.");
        this.value = "";
        return;
    }

    for (let file of files) {

        if (!file.type.startsWith("image/") ||
            file.size > 5 * 1024 * 1024) {

            alert("Choose image files up to 5 MB each.");
            preview.innerHTML = "";
            this.value = "";
            return;
        }

    }

    files.forEach(file => {

        let img = document.createElement("img");

        img.src = URL.createObjectURL(file);

        preview.appendChild(img);

    });

});


// SUBMIT REPORT

document.getElementById("reportForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let plate = document.getElementById("plate").value.trim();

    let vin = document.getElementById("vin").value.trim().toUpperCase();

    let date = document.getElementById("date").value;

    let type = document.getElementById("damageType").value;

    let description = document.getElementById("description").value;

    let consent = document.getElementById("consent").checked;

    let photos = Array.from(document.getElementById("photos").files);

    if (!plate && !vin) {
        alert("Enter a license plate or VIN.");
        return;
    }

    if (vin && vin.length !== 17) {
        alert("VIN must contain 17 characters.");
        return;
    }

    if (!type || !description.trim()) {
        alert("Complete all required fields.");
        return;
    }

    if (!consent) {
        alert("Please confirm your submission.");
        return;
    }

    let report = {

        id: Date.now(),

        plate: plate,

        vin: vin,

        date: date,

        type: type,

        description: description,

        photos: photos.map(file => ({
            name: file.name,
            url: URL.createObjectURL(file)
        })),

        status: "pending"

    };

    reports.push(report);

    renderAdmin();

    alert("Your report has been submitted!");

    this.reset();

    document.getElementById("preview").innerHTML = "";

});


// ADMIN PANEL

function renderAdmin() {

    let adminList = document.getElementById("adminList");

    let pending = reports.filter(report => report.status === "pending");

    document.getElementById("pendingCount").innerText =
        pending.length + " pending";

    adminList.innerHTML = "";

    if (pending.length === 0) {

        adminList.innerHTML =
            '<p class="empty">No reports waiting for review.</p>';

        return;

    }

    pending.forEach(report => {

        let item = document.createElement("div");

        item.className = "admin-item";

        let info = document.createElement("div");

        let title = document.createElement("strong");

        title.textContent = report.type + " — " + (report.plate || report.vin);

        let description = document.createElement("p");

        description.textContent = report.description;

        let date = document.createElement("small");

        date.textContent = report.date || "Date not specified";

        info.append(title, description, date);

        let buttons = document.createElement("div");

        let approve = document.createElement("button");

        approve.className = "approve";

        approve.textContent = "✓ Approve";

        approve.onclick = () => moderateReport(report.id, "approved");

        let reject = document.createElement("button");

        reject.className = "reject";

        reject.textContent = "✕ Reject";

        reject.onclick = () => moderateReport(report.id, "rejected");

        buttons.append(approve, reject);

        item.append(info, buttons);

        adminList.appendChild(item);

    });

}


// APPROVE OR REJECT

function moderateReport(id, status) {

    let report = reports.find(item => item.id === id);

    if (!report) return;

    report.status = status;

    renderAdmin();

    if (status === "approved") {

        alert("Report approved!");

    } else {

        alert("Report rejected.");

    }

}


// SAFE HTML TEXT

function escapeHTML(text) {

    return String(text).replace(/[&<>"']/g, char => ({

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"

    })[char]);

}