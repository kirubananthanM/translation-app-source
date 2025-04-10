from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
@app.route('/register')
def home():
    return render_template('Register.html')

if __name__ == '__main__':
    app.run(debug=True)
