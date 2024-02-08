function choosePath(path) {
    document.getElementById('start').style.display = 'none';
    document.getElementById('story').style.display = 'block';
    document.getElementById('choices').style.display = 'block';

    if (path === 'dangerous') {
        // Handle the dangerous path scenarios
        document.getElementById('story').innerHTML = "You bravely take the dangerous shortcut, facing various challenges along the way...";
        // Update the HTML to reflect the next set of choices or outcomes
    } else if (path === 'safer') {
        // Handle the safer path scenarios
        document.getElementById('story').innerHTML = "You decide to follow the well-trodden path on the left. The journey is indeed serene, with the sunlight playing through the leaves...";
        // Update the HTML to reflect the next set of choices or outcomes
    }
}

// Implement more functions for specific choices and scenarios
