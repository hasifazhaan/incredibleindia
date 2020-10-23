try {
    $(document)
} catch (error) {
    alert("Turn on internet")
}

$(document).ready(function(){
    $(".back").mouseover(function(){
        $(this).find(".details").show()

        })
    $(".back").mouseout(function(){
        $(".details" ).hide()
    })
    $("#view").click(()=>{
        $("#more-info").toggle()
    })
  
})
