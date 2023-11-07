from flask import Flask, request, jsonify,render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/', methods=['GET'])
def greetings():

    try:
        name = request.args.get('name') 
        return jsonify({'message': "Welcome to the back end "+name }), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500

@app.route('/report', methods=['POST'])
def sendReport():
    try:
        test = request.json['test']
        return jsonify({'message': test + " is positive"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 403

@app.route('/upload', methods=['POST'])
def getReport():
    try:
        test = request.files['file']
        print(test.filename)
        return jsonify({'message': "Received Files"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
