$(function(){
    //Add burger
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var addburger = {
            burger_name: $("#addburger").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: addburger
        }).then(function(){
            //refresh page to grab new burger
            location.reload();
        });
    });

    $(".devourburger").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        var nom = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nom
        }).then(function() {
            //console.log("Burger has been nommed.");
            //refresh page to update devoured status
            location.reload();
        });
    });

    $(".banishBurger").on("click", function(event) {
        event.preventDefault();

        var id =$(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "api/burgers/" +id
        }).then(function(){
            location.reload();
        });
    });
})