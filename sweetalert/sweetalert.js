$(document).ready(function () {

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });

    $("#btninfo").click(function () {

        $("#btninfo").click(function () {


            $("#titulo_danger").hide();
            $("#titulo_info").show();

            Swal.fire({
                title: "Botão info clicado",
                text: "Titulo danger escondido",
                icon: "success"
            });

        });


    });

    $("#btndanger").click(function () {

        $("#btndanger").click(function () {


            $("#titulo_info").hide();
            $("#titulo_danger").show();

            Swal.fire({
                title: "Botão danger clicado",
                text: "Titulo info foi escondido",
                icon: "success"
            });

        });


    });



});