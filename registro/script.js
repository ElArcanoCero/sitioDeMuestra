document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('mensaje').textContent = "Registro exitoso";
        } else {
            document.getElementById('mensaje').textContent = "Error en el registro";
        }
    })
    .catch(error => console.error('Error:', error));
});

