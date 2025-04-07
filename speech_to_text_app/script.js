const startButton = document.getElementById('startButton');
const output = document.getElementById('output');

let recognition;
let isRecognizing = false;
let recognizedText = '';

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
        texto = transcript; // Almacenar en variable
        output.textContent = transcript;
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    startButton.onclick = () => {
        if (!isRecognizing) {
            recognition.start();
            startButton.textContent = 'Detener';
            output.textContent = 'Escuchando...';
        } else {
            recognition.stop();
            startButton.textContent = 'Iniciar';
        }
        isRecognizing = !isRecognizing;
    };

} else {
    output.textContent = 'La API de reconocimiento de voz no está disponible en este navegador.';
    startButton.disabled = true;
}
