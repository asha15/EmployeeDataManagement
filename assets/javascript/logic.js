$(document).ready(function(){

    $("button").on("click", function(){

        event.preventDefault();

        name = $("#tbl_name").val().trim();
        role = $("#tbl_role").val().trim();
        stdate = $("#tbl_stdate").val().trim();
        monr = parseInt($("#tbl_monr").val().trim());

        function newEmployee() {
                        
            return `
            <tr>
            <td>${name}</td>
            <td>${role}</td>
            <td>${stdate}</td>
            <td>months</td>
            <td>${monr}</td>
            <td>total</td>
            </tr>
            `
        }

        $("table").append(newEmployee());

    })

})