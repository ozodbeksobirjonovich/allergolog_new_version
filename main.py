from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/kg")
def kg():
    return render_template('kg.html')

@app.route("/ru")
def ru():
    return render_template('ru.html')

@app.route("/kz")
def kz():
    return render_template('kz.html')

@app.route("/tj")
def tj():
    return render_template('tj.html')

@app.route("/tm")
def tm():
    return render_template('tm.html')

@app.route("/ariza")
def ariza():
    return render_template('ariza.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8008)