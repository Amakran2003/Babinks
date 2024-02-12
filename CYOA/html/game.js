const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);

  // Clear previous text content and option buttons
  textElement.textContent = '';
  optionButtonsElement.innerHTML = '';

  // Call the function to display text letter by letter
  displayText(textNode.text, textElement, 0, function() {
    // After text display, continue with the options
    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
      }
    });
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

// Function to display text letter by letter
function displayText(text, element, speed, callback) {
  let index = 0;

  function addLetter() {
    element.textContent += text[index];
    index++;

    if (index < text.length) {
      setTimeout(addLetter, speed);
    } else {
      // Call the callback function when the text display is complete
      if (callback && typeof callback === 'function') {
        callback();
      }
    }
  }

  // Start the letter-by-letter display
  addLetter();
}

const textNodes = [
  {
    id: 1,
    text: 'You are an adventurer and you have gone on a quest. To advance in your adventure you can take a long path or a more dangerous shortcut. You decide to bravely take the dangerous shortcut, facing various challenges along the way. After overcoming dangerous terrain and fierce opponents, you finally arrive at the legendary bridge. As you approach, you notice a mysterious figure standing on the other side – it’s Ryuk.',
    options: [
      {
        text: 'Attempt to Sneak Past',
        setState: { sneak: true },
        nextText: 2
      },
      {
        text: 'Engage in Conversation',
        setState: { engage: true },
        nextText: 3
      },
      {
        text: 'Challenge Ryuk in a Duel',
        setState: { challenge: true },
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    text: 'Deciding that discretion is the better part of valor, you try to stealthily navigate around Ryuk, hoping to avoid a direct confrontation. \n Game Over! \n Your attempt at stealth reveals you are not a man .',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 3,
    text: 'You cautiously approach Ryuk, choosing to engage in conversation rather than combat. This option could provide valuable information or insights.',
    options: [
      {
        text: 'Offer a Trade',
        nextText: 5
      },
      {
        text: 'Ask where is the nearest city',
        nextText: 6
      
      }
    ]
  },
  {
    id: 4,
    text: 'You draw your weapon, ready to face Ryuk in a test of strength and skill. This path may lead to gaining Ryuks respect and assistance. \n The clash of enchanted weapons echoes across the legendary bridge. The intensity of the battle pushes both your skills to the limit. Ryuk, impressed by your determination, gradually eases his assault. \n As the duel concludes, Ryuk lowers his weapon, acknowledging your strength. You have proven your courage, he says. I grant you my respect and assistance \n With Ryuk now at your side, you continue across the legendary bridge. As you reach the other side, the landscape changes, and you encounter a weak character struggling to achieve something. This frail figure appears to be on the verge of collapse, desperately trying to lift a heavy object blocking the path. The grateful character looks up, eyes filled with gratitude. Thank you for your help, they say weakly. I am BRIKCHIN, a scholar seeking ancient artifacts in this lost kingdom.',
    options: [
      {
        text: 'Inquire About Ancient Artifacts',
        nextText: 7
      },
      {
        text: 'Negotiate with BRIKCHIN',
        nextText: 8
      }
    ]
  },
  {
    id: 5,
    text: 'Ryuk reveals fascinating details about the lost kingdom, providing crucial hints for the continuation of your quest.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Ryuk accepts your trade offer. However, he asks for a mysterious favor in return, to be fulfilled later.',
    options: [
      {
        // text: '',
        // nextText: 
      }
    ]
  },
  {
    id: 7,
    text: ' BRIKCHIN expresses gratitude and shares that the artifact holds the key to revealing hidden truths about the lost kingdom. \n With Ryuk and BRIKCHIN by your side, you delve deeper into the kingdom, facing challenges and uncovering mysteries. BRIKCHINs knowledge becomes invaluable, and Ryuks assistance proves crucial. \n The alliance formed opens new possibilities as you navigate the intricate paths of the lost kingdom. The Chronicles of the Lost Kingdom continue to unfold, revealing secrets and adventures that may shape destinies. ',
    options: [
      {
        text: 'Delve Deeper into the kingdom with Ryuk and BRIKCHIN',
        nextText: 9
      },
      {
        text: 'Uncover the Lost Library',
        nextText: 10
      }
    ]
  },
  {
    id: 8,
    text: 'As you express your curiosity about the ancient artifacts, you decide to negotiate with BRIKCHIN for a collaborative exchange of knowledge. Rather than a one-sided inquiry, you propose a mutually beneficial arrangement.',
    options: [
      {
        text: 'Offer to Share Your Unique Skills?',
        nextText: 15
      },
      {
        text: 'Propose a Future Alliance',
        nextText: 16
      }
    ]
  },
  {
    id: 9,
    text: 'With Ryuk and BRIKCHIN by your side, you delve deeper into the kingdom, facing challenges and uncovering mysteries. BRIKCHINs knowledge becomes invaluable, and Ryuks assistance proves crucial.',
    options: [
      {
        text: 'Explore the Mysterious Cavern',
        nextText: 11
      },
      {
        text: 'Navigate Through Hidden Paths',
        nextText: 12
      }
    ]
  },
  {
    id: 10,
    text: 'As you, Ryuk, and BRIKCHIN continue to explore the depths of the kingdom, you come across an ancient and forgotten library hidden within the heart of the realm. The library is filled with dusty tomes and scrolls, containing knowledge that has been lost to time.',
    options: [
      {
        text: 'Study the Ancient Scrolls',
        nextText: 13
      },
      {
        text: 'Search for Clues about the Lost Kingdom',
        nextText:14
      }
    ]
  },
  {
    id: 11,
    text: 'Encountering a mysterious cavern, you enter to find ancient relics and knowledge that further aid your quest \n While exploring the depths of the kingdom, you come across a mysterious artifact emitting an enchanting glow. Driven by curiosity, you decide to touch it. However, as soon as your skin makes contact, an intense burning sensation courses through your body. The pain is unbearable, and you realize that touching the artifact was a grave mistake. \n Your vision blurs, and the world around you fades away. Strangely, you dont meet a tragic end, but the artifact has a profound impact. You find yourself in a vegetative state, unable to move or communicate. The once-promising adventurer is now a living relic, forever bound to the consequences of a fateful touch.',
    options: [
      {
        text: 'Restart.',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'Discovering hidden paths, you navigate through them with Ryuk and BRIKCHIN, uncovering secrets and shortcuts. \nHowever, as you walk along the winding trail, Gollum, a mysterious and unpredictable creature, emerges from the shadows. \n In a swift and unexpected attack, Gollum lunges at you. With quick reflexes, you manage to dodge his initial assault. However, Gollum is relentless, and he jumps onto your back, gripping your neck with a surprising strength. Despite your efforts, he ruthlessly tears your neck apart. \n The once-promising adventure comes to an abrupt and tragic end. The hidden paths, although promising shortcuts, proved perilous with the unexpected encounter of Gollum.',
    options: [
      {
        text: 'Restart.',
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: 'Intrigued by the ancient scrolls, you decide to spend time studying their contents. The scrolls contain arcane wisdom, revealing forgotten spells and historical events that could aid you on your quest. \n Unfortunately, the ancient scrolls are cursed. As you delve deeper into their secrets, an insidious magic is unleashed. The cursed knowledge overwhelms your senses, leading to a catastrophic end. Your life force is drained, and you meet an untimely demise. ',
    options: [
      {
        text: 'Restart.',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: 'Instead of studying the scrolls, you focus on searching for clues and information specifically related to the lost kingdom. The library might hold secrets that lead you closer to uncovering the mysteries surrounding the kingdoms disappearance.\n In your fervent search for clues, you accidentally trigger a long-forgotten trap within the library. The trap ensnares you in a web of magical energies, leaving you in a vegetative state. You remain conscious but incapacitated, forever trapped within the confines of the library.',
    options: [
      {
        text: 'Restart.',
        nextText: -1
      }
    ]
  },
  {
    id: 15,
    text: 'As you, Ryuk, and BRIKCHIN continue to explore the depths of the kingdom, you come across an ancient and forgotten library hidden within the heart of the realm. The library is filled with dusty tomes and scrolls, containing knowledge that has been lost to time.',
    options: [
      {
        text: 'Sorry I didnt finished the story',
        nextText: -1
      }
    ]
  },
  {
    id: 16,
    text: 'As you, Ryuk, and BRIKCHIN continue to explore the depths of the kingdom, you come across an ancient and forgotten library hidden within the heart of the realm. The library is filled with dusty tomes and scrolls, containing knowledge that has been lost to time.',
    options: [
      {
        text: 'Sorry I didnt finished the story',
        nextText: -1
      }
    ]
  },
]

startGame()