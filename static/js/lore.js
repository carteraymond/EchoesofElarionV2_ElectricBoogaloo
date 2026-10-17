const loreEntries = Array.from(
    document.querySelectorAll(".lore-entry")
);

const searchInput = document.querySelector("#lore-search");



function searchLore() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const matchingEntries = loreEntries.filter(entry => {
        return entry.textContent.toLowerCase().includes(searchTerm);
    });

    matchingEntries.forEach(entry => {
        entry.hidden = false;
    });

    loreEntries.forEach(entry => {
        if (!matchingEntries.includes(entry)) {
            entry.hidden = true;
        }
    });

const noResults = document.querySelector("#no-results");

noResults.hidden = matchingEntries.length > 0;

    console.log("Matching lore:", matchingEntries);
}

if (searchInput) {
    searchInput.addEventListener("input", searchLore);
}

// const loreEntries = Array.from(
//     document.querySelectorAll(".lore-entry")
// );

// console.log("All lore entries:");
// console.log(loreEntries.map(entry => entry.textContent.trim()));

// const matchingEntries = loreEntries.filter(entry => {
//     return entry.textContent.toLowerCase().includes("");
// });

// console.log("Matching entries:");
// console.log(matchingEntries.map(entry => entry.textContent.trim()));