from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"


@app.route('/friendlist', methods=['GET'])
def friends():
    return {"message" :["Stephen", "Keerthi", "Eshan"]}


@app.route('/saveroom', methods=['POST'])
def saveRoom():
    data = request.json['data']
    print("HELLO")
    print(data)

if __name__ == "__main__":
    app.run(debug=True, port=8080)