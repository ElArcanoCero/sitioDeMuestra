// script.js

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const output = document.getElementById('output');

let recognition;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'es-ES';

    recognition.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        output.textContent = transcript;
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    startButton.onclick = () => {
        recognition.start();
        output.textContent = 'Escuchando...';
    };

    stopButton.onclick = () => {
        recognition.stop();
    };

} else {
    output.textContent = 'La API de reconocimiento de voz no está disponible en este navegador'; // encaso de que no sea crome
    startButton.disabled = true;
    stopButton.disabled = true;
}