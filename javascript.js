$('#make-big').click(function(){
    $('#headline').addClass('bigger')
    $('#headline').removeClass('regular')
    $('#headline').removeClass('smaller')
})
$('#make-small').click(function(){
    $('#headline').removeClass('bigger')
    $('#headline').removeClass('regular')
    $('#headline').addClass('smaller')
})
$('#make-regular').click(function(){
    $('#headline').removeClass('bigger')
    $('#headline').addClass('regular')
    $('#headline').removeClass('smaller')
})

$("#click").click(function(){
    $('#wrapper').addClass('pink')
})