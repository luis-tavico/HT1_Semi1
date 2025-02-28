from asgiref.wsgi import WsgiToAsgi
from flask import Flask, jsonify

app = Flask(__name__)

# Endpoint 1: Verificación de estado
@app.route('/check/ok', methods=['GET'])
def check():
    return '200'  # Retorna un código 200 OK

# Endpoint 2: Retorna un objeto JSON
@app.route('/', methods=['GET'])
def home():
    data = {
        "Instancia": "Maquina 2 - API 2",
        "Curso": "Seminario de Sistemas 1 A",
        "Grupo": "Grupo 13"
    }
    return jsonify(data)

# Adaptar Flask (WSGI) a ASGI
asgi_app = WsgiToAsgi(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
