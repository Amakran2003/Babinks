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
  displayText(textNode.text, textElement, 25, function() {
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
    text: 'You bravely take the dangerous shortcut, facing various challenges along the way. After overcoming treacherous terrain and fierce adversaries, you finally arrive at the legendary bridge. As you approach, you notice a mysterious figure standing on the other side – its Ryuk.',
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
        requiredState: (currentState) => currentState.sneak,
        setState: { blueGoo: false, sword: true },
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
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Ryuk accepts your trade offer. However, he asks for a mysterious favor in return, to be fulfilled later.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()