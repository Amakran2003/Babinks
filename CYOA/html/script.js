let storyContent = document.getElementById('content');
let disContent = document.getElementById('hide');
let disContent2 = document.getElementById('hide2');
let body = document.body;


function makeChoice(choice) {
    // Clear existing buttons
    clearOptions();

    switch (choice) {
        case 1:
            storyContent.innerHTML = "You bravely take the dangerous shortcut, facing various challenges along the way. After overcoming treacherous terrain and fierce adversaries, you finally arrive at the legendary bridge. As you approach, you notice a mysterious figure standing on the other side – it's Ryuk.";
            showOptions(["Attempt to Sneak Past", "Engage in Conversation", "Challenge Ryuk in a Duel"]);
            clearButtons();
            break;
        case 2:
            storyContent.innerHTML = "You decide to follow the well-trodden path on the left. The journey is indeed serene, with the sunlight playing through the leaves and a gentle breeze guiding your way. As you walk, you encounter a wise old traveler it's Master Roshi who shares stories of the land and provides you with valuable advice. However, the path becomes longer than expected, and fatigue starts to set in. Eventually, you reach a cozy village where the locals greet you warmly, grateful for your safe arrival. After leaving the cozy village, you continue your journey on the well-established path. The road becomes more and more picturesque, with magnificent landscapes and encounters with other travelers. However, time passes, and fatigue sets in. One evening, exploring the surroundings, you discover an ancient cave hidden behind a waterfall. Curious, you decide to enter. Inside, bioluminescent lights illuminate a mysterious passageway. You now have the choice:";
            showOptions(["Explore the caves", "Continue your way"]);
            body.style.background = 'url(https://t3.ftcdn.net/jpg/05/36/81/78/360_F_536817822_FzRGCus95qiBPLO9revLEfvZy79AuJ64.jpg) no-repeat';
            body.style.backgroundSize = 'cover';
            clearButtons();
            break;
        case 3:
            storyContent.innerHTML = "DIPLOMACY You cautiously approach Ryuk, choosing to engage in conversation rather than combat. This option could provide valuable information or insights. Offer a Trade: Propose a trade, offering something valuable in exchange for information. Ryuk reveals fascinating details about the lost kingdom, providing crucial hints for the continuation of your quest. You decide to inquire about the lost kingdom, seeking ancient knowledge from Ryuk. This may provide valuable insights for your quest. Ryuk accepts your trade offer. However, he asks for a mysterious favor in return, to be fulfilled later.";
            showOptions(["No Choice", "No Choice"]);
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

function clearButtons() {
    disContent.classList.add('hidden');
    disContent2.classList.add('hidden');
}
