$(function(){ 
    $("button").click(function(){
        // change the writing in modal
        var newContent = "<p>Hello! <br> This is my exercise of JQuery.</p>";
        $(".modal_content").html(newContent);

        // pop up modal
        $(".modal").fadeIn();
    });
    
    $(".modal_content").click(function(event){
        // Prevent the click event from reaching parent elements
        event.stopPropagation();
        $(".modal").fadeOut();
    });

    // Close the modal 
    $(".modal").click(function(){
        $(".modal").fadeOut();
    });
});
