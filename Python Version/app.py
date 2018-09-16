import os
from flask import Flask, render_template, request,json
from flask_restful import Resource, Api

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/changeDock', methods=['POST'])
def changeD():
    docksActive =  request.form['value'];
    return json.dumps({'status':'OK','docksActive':docksActive});

@app.route('/boats', methods=['GET'])
def getBoats():
    boatsDocked = 4
    return json.dumps({'status':'OK','docksActive':boatsDocked});

@app.route('/schedule')
def schedule():
    return render_template('schedule.html')

@app.route('/daysOfWeek', methods=['GET'])
def getDays():
    weeks = [0,1,2,3,4,5,6]
    jsonSched = {}
    for x in range(len(weeks)):
        jsonSched[weeks[x]] = [0 for _ in range(7)]

    return json.dumps({'status':'OK','data':jsonSched});


@app.route('/changeSched', methods=['POST'])
def getSch():
    xV =  request.form['x'];
    yV =  request.form['y'];
    print(xV);
    print(yV);
    weeks = [0,1,2,3,4,5,6]
    jsonSched = {}
    for x in range(len(weeks)):
        jsonSched[weeks[x]] = [0 for _ in range(7)]

    value = jsonSched[xV][yV];
   

    return json.dumps({'status':'OK','data':jsonSched});
           
if __name__ == '__main__':
    app.run()
