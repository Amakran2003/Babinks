let storyContent = document.getElementById('content');

function makeChoice(choice) {
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
