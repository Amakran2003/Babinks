function makeChoice(choice) {
    const storyContent = document.getElementById('content');
    const buttonsContainer = document.getElementById('buttons');

    // Clear existing buttons
    buttonsContainer.innerHTML = '';

    if (choice === 1) {
        // Scenario for taking the dangerous shortcut
        storyContent.textContent = "You bravely take the dangerous shortcut, facing various challenges along the way...";

        // Add new buttons for the next set of choices
        addButton("Attempt to Sneak Past", 3);
        addButton("Engage in Conversation", 4);
        addButton("Challenge Ryuk in a Duel", 5);
    } else if (choice === 2) {
        // Scenario for taking the safer but longer route
        storyContent.textContent = "You decide to follow the well-trodden path on the left. The journey is serene...";

        // Add new buttons for the next set of choices
        addButton("Explore the Cave", 6);
        addButton("Continue Your Way", 7);
    } else if (choice === 3) {
        // Scenario for Attempt to Sneak Past
        storyContent.textContent = "Deciding that discretion is the better part of valor, you try to stealthily navigate around Ryuk, hoping to avoid a direct confrontation.";

        // Add new buttons for the next set of choices related to Attempt to Sneak Past
        addButton("Continue Sneaking", 8);
        addButton("Engage in Conversation", 4);
        addButton("Challenge Ryuk in a Duel", 5);
    }else if (choice === 4) {
        // Scenario for Attempt to Sneak Past
        storyContent.textContent = "Deciding that discretion is the better part of valor, you try to stealthily navigate around Ryuk, hoping to avoid a direct confrontation.";

        // Add new buttons for the next set of choices related to Attempt to Sneak Past

    }else if (choice === 4) {
        // Scenario for Attempt to Sneak Past
        storyContent.textContent = "Deciding that discretion is the better part of valor, you try to stealthily navigate around Ryuk, hoping to avoid a direct confrontation.";

        // Add new buttons for the next set of choices related to Attempt to Sneak Past

    }else if (choice === 4) {
        // Scenario for Attempt to Sneak Past
        storyContent.textContent = "Deciding that discretion is the better part of valor, you try to stealthily navigate around Ryuk, hoping to avoid a direct confrontation.";

        // Add new buttons for the next set of choices related to Attempt to Sneak Past

    }else if (choice === 4) {
        // Scenario for Attempt to Sneak Past
        storyContent.textContent = "Deciding that discretion is the better part of valor, you try to stealthily navigate around Ryuk, hoping to avoid a direct confrontation.";

        // Add new buttons for the next set of choices related to Attempt to Sneak Past

    }else if (choice === 4) {
        // Scenario for Attempt to Sneak Past
        storyContent.textContent = "Deciding that discretion is the better part of valor, you try to stealthily navigate around Ryuk, hoping to avoid a direct confrontation.";

        // Add new buttons for the next set of choices related to Attempt to Sneak Past

    }else if (choice === 4) {
        // Scenario for Attempt to Sneak Past
        storyContent.textContent = "Deciding that discretion is the better part of valor, you try to stealthily navigate around Ryuk, hoping to avoid a direct confrontation.";

        // Add new buttons for the next set of choices related to Attempt to Sneak Past

    }
        
    }
    
    // Add more conditions based on the choices and scenarios.

    // Example function to add a new button
    function addButton(label, nextChoice) {
        const button = document.createElement('button');
        button.textContent = label;
        button.onclick = () => makeChoice(nextChoice);
        buttonsContainer.appendChild(button);
    }
}
