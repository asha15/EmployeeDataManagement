$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyDY391togw25JidPHdJC7URNuyemXVzvTs",
        authDomain: "testinfirebase-ea98f.firebaseapp.com",
        databaseURL: "https://testinfirebase-ea98f.firebaseio.com",
        projectId: "testinfirebase-ea98f",
        storageBucket: "testinfirebase-ea98f.appspot.com",
        messagingSenderId: "446453989626"
      };
      firebase.initializeApp(config);

    var database = firebase.database();
    var newEmployee = "";
    var monw;
    var totbill;
    var name;
    var role;
    var stdate;
    var monr;
    
    $("button").on("click", function(){

        event.preventDefault();

        name = $("#frm_name").val();
        role = $("#frm_role").val();
        stdate = moment(($("#frm_date").val()), "YYYY-MM-DD");
        monr = parseInt($("#frm_rate").val());

        months = moment();

        monw = parseInt(months.diff(stdate, "months"));

        totbill = monr * monw;


        console.log(name);
        console.log(role);
        console.log(stdate);
        console.log(monr);


        database.ref().push({
            name: name,
            role: role,
            stdate: stdate,
            monr: monr
        });

    });

    newEmployee = `
            <tr>
            <td>${name}</td>
            <td>${role}</td>
            <td>${stdate}</td>
            <td>${monw}</td>
            <td>${monr}</td>
            <td>${totbill}</td>
            </tr>
            `

    //var name;
    //var newRole;
    //var newDate;
    //var newMonth;

    

    database.ref().on("child_added", function(snapshot){

        newName = snapshot.val().name;
        newRole = snapshot.val().role;
        newDate = snapshot.val().stdate;
        newMonth = snapshot.val().monr;

        $("table").append(newEmployee);

    });

});