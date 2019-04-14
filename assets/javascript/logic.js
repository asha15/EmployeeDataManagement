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
    var months = moment();
    
    $("button").on("click", function(){

        event.preventDefault();

        name = $("#frm_name").val();
        role = $("#frm_role").val();
        // stdate = moment(($("#frm_date").val()), "YYYY-MM-DD");
        stdate = $("#frm_date").val();
        monr = $("#frm_rate").val();
        // totmon = moment(stdate, "YYYY-MM-DD");

        // months = moment();

        // monw = parseInt(months.diff(stdate, "months"));

        // totbill = monr * monw;


        // console.log(name);
        // console.log(role);
        // console.log(stdate);
        // console.log(monr);


        database.ref().push({
            name: name,
            role: role,
            stdate: stdate,
            monr: monr
        });

    });

    

    //var name;
    //var newRole;
    //var newDate;
    //var newMonth;

    var totmon;

    database.ref().on("child_added", function(snapshot){

        name = snapshot.val().name;
        role = snapshot.val().role;
        stdate = parseInt(snapshot.val().stdate);
        monr = parseInt(snapshot.val().monr);

        totmon = moment(stdate, "YYYYMMDD").format('MM DD YYYY');
        monw = parseInt(months.diff(totmon, "months"));

        // moment("20111031", "YYYYMMDD").fromNow();

        console.log(stdate);
        console.log(totmon);

        totbill = monr * monw;

        newEmployee = `
            <tr>
            <td>${name}</td>
            <td>${role}</td>
            <td>${totmon}</td>
            <td>${monw}</td>
            <td>${monr}</td>
            <td>${totbill}</td>
            </tr>
            `

        $("table").append(newEmployee);

    });

});