(function(){
    $(document).ready(function(){
    var x=false;  
    var y=false;

$(".fa-search").click(function(){
    if(x)
    {
        $("#search-div").removeClass("search-div-on").addClass("search-div-off");
        x=false;
    }
    else
    {
        $("#search-div").addClass("search-div-on").removeClass("search-div-off");
        x=true;
    }
});
$(".fa-bars").click(function(){
    if(y)
    {
        $(".side-nav").removeClass("mob-nav-div-on").addClass("mob-nav-div-off");
        y=false;
    }
    else{
        $(".side-nav").addClass("mob-nav-div-on").removeClass("mob-nav-div-off");
        y=true;
    }
})

})
})();

