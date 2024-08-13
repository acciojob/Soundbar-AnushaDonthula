//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3']; // Replace with your actual sound files

// Get the buttons container
const buttonsContainer = document.getElementById('buttons');

// Function to stop all sounds
function stopAllSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}

// Function to create buttons and audio elements
function createButtons() {
    sounds.forEach(sound => {
        // Create a button for each sound
        const button = document.createElement('button');
        button.className = 'btn';
        button.innerText = sound;
        
        // Create an audio element for each sound
        const audio = document.createElement('audio');
        audio.src = `./sounds/${sound}.mp3`; // Assuming sound files are in .mp3 format
        audio.id = sound;

        // Play the sound when the button is clicked
        button.addEventListener('click', () => {
            stopAllSounds(); // Stop other sounds
            audio.play();
        });

        // Append the button and audio element to the DOM
        buttonsContainer.appendChild(button);
        buttonsContainer.appendChild(audio);
    });
}

// Stop all sounds when the stop button is clicked
document.querySelector('.stop').addEventListener('click', stopAllSounds);

// Initialize the buttons
createButtons();
