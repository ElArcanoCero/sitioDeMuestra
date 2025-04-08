from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite conexiones desde el navegador

@app.route('/guardar-texto', methods=['POST'])
def guardar_texto():
    data = request.get_json()
    texto = data.get('texto', '')
    print(f'Texto recibido: {texto}')
    return jsonify({'mensaje': 'Texto recibido correctamente', 'texto': texto})

if __name__ == '__main__':
    app.run(debug=True)
