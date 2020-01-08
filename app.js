var database = '{"teachers":['+
    '{"id":"0", "name":"Dr. Smith"},'+
    '{"id":"1", "name":"John Doe"},'+
    '{"id":"2", "name":"Dr. Stephan Strange"},'+
    '{"id":"3", "name":"Mr. Recardo Shark"}'+
'], "students": [' +
    '{"id":"0", "name":"Alex", "gender":"male", "country":"USA", "state":"", "tid":"0"},' +
    '{"id":"1", "name":"Wizdan", "gender":"female", "country":"India", "tid":"0"},' +
    '{"id":"2", "name":"Oscar", "gender":"male", "country":"USA", "tid":"0"},' +
    '{"id":"3", "name":"Nuh", "gender":"female", "country":"India", "tid":"0"},' +
    '{"id":"4", "name":"Stephaine", "gender":"female", "country":"India", "tid":"1"},' +
    '{"id":"5", "name":"Phoebe", "gender":"male", "country":"USA", "tid":"1"},' +
    '{"id":"6", "name":"Blake", "gender":"male", "country":"China", "tid":"1"},' +
    '{"id":"7", "name":"Awad", "gender":"male", "country":"India", "tid":"1"},' +
    '{"id":"8", "name":"Angelina", "gender":"female", "country":"USA", "tid":"2"},' +
    '{"id":"9", "name":"Emest", "gender":"male", "country":"China", "tid":"2"},' +
    '{"id":"10", "name":"Iyas", "gender":"male", "country":"USA", "tid":"2"},' +
    '{"id":"11", "name":"Audrey", "gender":"female", "country":"China", "tid":"2"}' +
']}';
var db = JSON.parse(database);
//document.getElementById("teachers").innerHTML = "<pre>"+database;
//console.log(database);
for(var i = 0; i<db.teachers.length; i++ ){
    document.getElementById("teachers").innerHTML += printTeacher(db.teachers[i].id, db.teachers[i].name);
    //console.log(printTeacher(db.teachers[i].id, db.teachers[i].name));
}

function printTeacher(id, name){
    var out = "<div class='teacher-name' id='"+id + "'><a href='#' onclick=showStudents(" + id + ")>" + name + "</a></div>";
    return out;
}

function showStudents(id){
    var container = document.getElementById(id);
    var count = 0;
    for(var i = 0; i<db.students.length; i++){
        if(db.students[i].tid == id){
            container.innerHTML += "<div class='student-name'><img class='student-image' src='img/" + db.students[i].id + 
            ".png'><a href=detail.html?id=" + db.students[i].id + ">" + db.students[i].name + "</a></div>";
            count++;
        }
    }
    if(count == 0){
        container.innerHTML += "<div class='error'>No student present</div>";
    }
}