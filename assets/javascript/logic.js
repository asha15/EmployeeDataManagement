$(document).ready(function() {

    // var config = {
    //     apiKey: "AIzaSyDyFP5cJLmwbxt50gME2tPKBxHdhygNZjw",
    //     authDomain: "employeedatamanagement-a98d1.firebaseapp.com",
    //     databaseURL: "https://employeedatamanagement-a98d1.firebaseio.com",
    //     projectId: "employeedatamanagement-a98d1",
    //     storageBucket: "employeedatamanagement-a98d1.appspot.com",
    //     messagingSenderId: "284155295511"
    //   };
      
    // firebase.initializeApp(config);

    // var database = firebase.database();

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

        var newEmployee = `
            <tr>
            <td>${name}</td>
            <td>${role}</td>
            <td>${stdate}</td>
            <td>${monw}</td>
            <td>${monr}</td>
            <td>${totbill}</td>
            </tr>
            `

        $("table").append(newEmployee);

    });

});