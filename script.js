const textarea = document.getElementById("textarea");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

// Initialize the SpeechRecognition object
const recognition = new window.SpeechRecognition();
recognition.lang = "en-US"; // Set the language

// Add event listeners
startButton.addEventListener("click", startRecording);
stopButton.addEventListener("click", stopRecording);

// Function to start recording
function startRecording() {
  recognition.start();
  console.log("Recording started");
}

// Function to stop recording
function stopRecording() {
  recognition.stop();
  console.log("Recording stopped");
}

// Event listener for when speech is recognized
recognition.onresult = function (event) {
  const result = event.results[0][0].transcript;
  textarea.value += result;
};

// Event listener for errors
recognition.onerror = function (event) {
  console.error("Speech recognition error detected: " + event.error);
};
