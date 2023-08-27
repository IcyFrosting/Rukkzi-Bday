// Get all the buttons with class names
const aButtons = document.querySelectorAll('.aButton');
const bButtons = document.querySelectorAll('.bButton');
const cButtons = document.querySelectorAll('.cButton');
const dButtons = document.querySelectorAll('.dButton');

// Get the amount elements
const aAmount = document.querySelector('.aAmount');
const bAmount = document.querySelector('.bAmount');
const cAmount = document.querySelector('.cAmount');
const dAmount = document.querySelector('.dAmount');

const SubmitButton = document.querySelector('.rukkziSubmit');

// Initialize click counts
let aClickCount = 0;
let bClickCount = 0;
let cClickCount = 0;
let dClickCount = 0;

// Add click event listeners for each group of buttons
aButtons.forEach(button => {
    button.addEventListener('click', () => {
        aClickCount++;
    });
});

bButtons.forEach(button => {
    button.addEventListener('click', () => {
        bClickCount++;
    });
});

cButtons.forEach(button => {
    button.addEventListener('click', () => {
        cClickCount++;
    });
});

dButtons.forEach(button => {
    button.addEventListener('click', () => {
        dClickCount++;
    });
});

// Get all buttons with class "aButton"
const OneButton = document.querySelectorAll('.Onebutton');
const TwoButton = document.querySelectorAll('.Twobutton');
const ThreeButton = document.querySelectorAll('.Threebutton');
const FourButton = document.querySelectorAll('.Fourbutton');
const FiveButton = document.querySelectorAll('.Fivebutton');
const SixButton = document.querySelectorAll('.Sixbutton');
const SevenButton = document.querySelectorAll('.Sevenbutton');
const EightButton = document.querySelectorAll('.Eightbutton');
const NineButton = document.querySelectorAll('.Ninebutton');
const TenButton = document.querySelectorAll('.Tenbutton');

// Add click event listeners to the buttons
OneButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        OneButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});

TwoButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        TwoButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});

ThreeButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        ThreeButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});

FourButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        FourButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});

FiveButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        FiveButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});

SixButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        SixButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});

SevenButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        SevenButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});

EightButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        EightButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});

 NineButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        NineButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});

TenButton.forEach(button => {
    button.addEventListener('click', () => {
        // Disable all buttons in the group
        TenButton.forEach(btn => {
            btn.disabled = true;
        });

        // Other actions you want to perform when a button is clicked
    });
});


if(SubmitButton){
SubmitButton.addEventListener('click', function() {
if (aClickCount > bClickCount && aClickCount > cClickCount && aClickCount > dClickCount) {
    console.log("A is the Winner");
    window.location.href = "MostAnswersA.html";
} else if (bClickCount > aClickCount && bClickCount > cClickCount && bClickCount > dClickCount) {
    console.log("B is the Winner!");
    window.location.href = "MostAnswersB.html";
} else if (cClickCount > aClickCount && cClickCount > bClickCount && cClickCount > dClickCount) {
    console.log("C is the Winner!");
    window.location.href = "MostAnswersC.html";
} else if (dClickCount > aClickCount && dClickCount > bClickCount && dClickCount > cClickCount) {
    console.log("D is the winner!");
    window.location.href = "MostAnswersD.html";
} else {
    console.log("Error");
    
}

})
};