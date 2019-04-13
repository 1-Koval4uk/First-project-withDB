$('.works-slider').slick();

$('#btnforps').click(function(e){
    e.preventDefault();
    var str ={};
    str[$('#inptut').attr('name')] = $('#inptut').val();
    
    $.ajax({
        type: "POST",
        url: "/index",
        data: str,
        success: function(msg){
          alert( "Wait for call please:)" );
        },
        fail: function(msg){
            alert("error "+ msg)
        }
      });
})
