var database = '{"teachers":['+
    '{"id":"0", "name":"Dr. Smith"},'+
    '{"id":"1", "name":"John Doe"},'+
    '{"id":"2", "name":"Dr. Stephan Strange"},'+
    '{"id":"3", "name":"Mr. Recardo Shark"}'+
'], "students": [' +
    '{"id":"0", "name":"Alex", "gender":"male", "country":"USA", "state":"Alabama", "dob":"1994-11-02", "tid":"0"},' +
    '{"id":"1", "name":"Wizdan", "gender":"female", "country":"India", "state":"Bihar", "dob":"1994-10-02", "tid":"0"},' +
    '{"id":"2", "name":"Oscar", "gender":"male", "country":"USA", "state":"California", "dob":"1995-01-20", "tid":"0"},' +
    '{"id":"3", "name":"Nuh", "gender":"female", "country":"India", "state":"Uttar Pradesh", "dob":"1996-12-02", "tid":"0"},' +
    '{"id":"4", "name":"Stephaine", "gender":"female", "country":"India", "state":"Tamilnadu", "dob":"1994-11-02", "tid":"1"},' +
    '{"id":"5", "name":"Phoebe", "gender":"male", "country":"USA", "state":"Hawaii", "dob":"1994-10-02", "tid":"1"},' +
    '{"id":"6", "name":"Blake", "gender":"male", "country":"China", "state":"Anhui", "dob":"1995-01-20", "tid":"1"},' +
    '{"id":"7", "name":"Awad", "gender":"male", "country":"India", "state":"Karnataka", "dob":"1996-12-02", "tid":"1"},' +
    '{"id":"8", "name":"Angelina", "gender":"female", "country":"USA", "state":"Florida", "dob":"1994-11-02", "tid":"2"},' +
    '{"id":"9", "name":"Emest", "gender":"male", "country":"China", "state":"Fujian", "dob":"1994-10-02", "tid":"2"},' +
    '{"id":"10", "name":"Iyas", "gender":"male", "country":"USA", "state":"Nevada", "dob":"1996-12-02", "tid":"2"},' +
    '{"id":"11", "name":"Audrey", "gender":"female", "country":"China", "state":"Henan", "dob":"1995-01-20", "tid":"2"}' +
']}';

var requrl = window.location.href;
var param = requrl.split("id=")
var db = JSON.parse(database);
for(var i=0; i<db.students.length; i++){
    document.getElementById("student-state").innerHTML += "<option id='" + db.students[i].state + "'>" + db.students[i].state + "</option>";
}
for(var i=0; i<db.students.length; i++){
    if(db.students[i].id == param[1]){
        document.getElementById("student-image").setAttribute("src", "img/"+param[1]+".png");
        document.getElementById("student-name").innerHTML = db.students[i].name;
        document.getElementById(db.students[i].country).setAttribute("selected", "selected");
        document.getElementById(db.students[i].state).setAttribute("selected", "selected");
        document.getElementById(db.students[i].gender).setAttribute("checked", "checked");
        document.getElementById("dob").setAttribute("value", db.students[i].dob);
    }
}