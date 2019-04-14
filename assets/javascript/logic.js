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
    var totbill;
    var name;
    var role;
    var stdate;
    var monr;
   
    $("button").on("click", function(){

        event.preventDefault();

        name = $("#frm_name").val();
        role = $("#frm_role").val();

        stdate = moment($("#frm_date").val().trim(), "MM/DD/YYYY").format("X");


        monr = $("#frm_rate").val();


        database.ref().push({
            name: name,
            role: role,
            stdate: stdate,
            monr: monr
        });


        $("#frm_name").val("");
        $("#frm_role").val("");
        $("#frm_date").val("");
        $("#frm_rate").val("");

    });



    database.ref().on("child_added", function(snapshot){

        name = snapshot.val().name;
        role = snapshot.val().role;
        stdate = snapshot.val().stdate;
        monr = snapshot.val().monr;

        var empStartPretty = moment.unix(stdate).format("MM/DD/YYYY");
        var monw = moment().diff(moment(stdate, "X"), "months");

        totbill = monr * monw;

        newEmployee = `
            <tr>
            <td>${name}</td>
            <td>${role}</td>
            <td>${empStartPretty}</td>
            <td>${monw}</td>
            <td>${monr}</td>
            <td>${totbill}</td>
            </tr>
            `

        $("table").append(newEmployee);

    });

});