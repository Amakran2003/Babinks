let storyContent = document.getElementById('content');

function makeChoice(choice) {
    // Clear existing buttons
    clearOptions();

    switch (choice) {
        case 1:
            storyContent.innerHTML = "You bravely take the dangerous shortcut, facing various challenges.";
            showOptions(["Confront challenges head-on", "Use diplomacy", "Find alternative solutions"]);
            break;
        case 2:
            storyContent.innerHTML = "You opt for the safer but longer route, encountering allies and enemies along the way.";
            showOptions(["Form alliances", "Betray others", "Go solo"]);
            break;
        case 3:
            storyContent.innerHTML = "Confronting challenges head-on, you prove your strength and gain respect.";
            showOptions(["Continue your journey", "Rest and recover"]);
            break;
        case 4:
            storyContent.innerHTML = "Using diplomacy, you negotiate passage through the challenges.";
            showOptions(["Continue your journey", "Betray your new allies"]);
            break;
        case 5:
            storyContent.innerHTML = "Finding alternative solutions, you discover a hidden path and avoid major challenges.";
            showOptions(["Continue your journey", "Share your findings with other adventurers"]);
            break;
        case 6:
            storyContent.innerHTML = "Forming alliances, you gather a group of skilled adventurers to join your quest.";
            showOptions(["Trust your allies completely", "Keep a watchful eye on your allies"]);
            break;
        case 7:
            storyContent.innerHTML = "Betraying others, you deceive your fellow travelers to gain an advantage.";
            showOptions(["Face the consequences", "Escape and continue alone"]);
            break;
        case 8:
            storyContent.innerHTML = "Going solo, you rely on your skills and avoid entanglements.";
            showOptions(["Continue your journey", "Seek companions"]);
            break;
        case 9:
            // Handle the consequences of the second set of choices
            break;
        // Add more cases for different choices and consequences
    }
}

function showOptions(options) {
    let optionsHTML = "";
    for (let i = 0; i < options.length; i++) {
        optionsHTML += `<button onclick="makeChoice(${i + 3})">${options[i]}</button>`;
    }
    storyContent.innerHTML += optionsHTML;
}

function clearOptions() {
    // Clear existing buttons
    storyContent.innerHTML = "";
}
