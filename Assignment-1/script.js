const eventForm = document.getElementById("eventForm");
const eventContainer = document.getElementById("eventContainer");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const demoContent = document.getElementById("demoContent");



eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("eventTitle").value;
    const date = document.getElementById("eventDate").value;
    const category = document.getElementById("eventCategory").value;
    const description = document.getElementById("eventDescription").value;

    createEventCard(title, date, category, description);

    eventForm.reset();
    updateEmptyState();
});



function createEventCard(title, date, category, description) {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
        <button class="delete-btn">Delete</button>
    `;

   
    card.querySelector(".delete-btn").addEventListener("click", function () {
        card.remove();
        updateEmptyState();
    });

    eventContainer.appendChild(card);

    updateEmptyState();
}

function updateEmptyState() {
    if (eventContainer.children.length === 0) {
        eventContainer.innerHTML = `
            <div class="empty-state">
                No events yet. Add your first event!
            </div>
        `;
    } else {
        const empty = eventContainer.querySelector(".empty-state");
        if (empty) empty.remove();
    }
}


clearAllBtn.addEventListener("click", function () {
    eventContainer.innerHTML = "";
    updateEmptyState();
});



addSampleBtn.addEventListener("click", function () {
    createEventCard("Tech Conference", "2026-03-15", "Conference", "A big tech networking event.");
    createEventCard("Frontend Workshop", "2026-04-02", "Workshop", "Hands-on UI development.");
    createEventCard("Startup Meetup", "2026-05-10", "Meetup", "Meet startup founders and investors.");
});
