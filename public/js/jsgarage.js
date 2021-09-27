
$(function(){

$("li").hover(function(){
    $(this).css('opacity','1');
},function(){
    $(this).css('opacity','0.75');
});
//rotation pneu neuf
$("#pneuneuf1").mouseenter(function(){
    var tampon=$('#pneuneuf1').attr('src');
    $('#pneuneuf1').hide().attr('src',$('#pneuneuf2').attr('src')).fadeIn(500);
    $('#pneuneuf2').hide().attr('src',$('#pneuneuf3').attr('src')).fadeIn(500);
    $('#pneuneuf3').hide().attr('src',tampon).fadeIn(500);
});
//rotation pneu neuf afficharge mobile
$("#pneuneuf4").mouseenter(function(){
    var tampon=$('#pneuneuf4').attr('src');
    $('#pneuneuf4').hide().attr('src',$('#pneuneuf5').attr('src')).fadeIn(500);
    $('#pneuneuf5').hide().attr('src',$('#pneuneuf6').attr('src')).fadeIn(500);
    $('#pneuneuf6').hide().attr('src',tampon).fadeIn(500);
});
//rotation pneu occas
$("#pneuoccas1").mouseenter(function(){
    var tampon=$('#pneuoccas1').attr('src');
    $('#pneuoccas1').hide().attr('src',$('#pneuoccas2').attr('src')).fadeIn(500);
    $('#pneuoccas2').hide().attr('src',$('#pneuoccas3').attr('src')).fadeIn(500);
    $('#pneuoccas3').hide().attr('src',tampon).fadeIn(500);
});
// rotation systeme de freinage afficharge mobile
$("#systeme1").mouseenter(function(){
    var tampon=$('#systeme1').attr('src');
    $('#systeme1').hide().attr('src',$('#systeme2').attr('src')).fadeIn(500);
    $('#systeme2').hide().attr('src',$('#systeme3').attr('src')).fadeIn(500);
    $('#systeme3').hide().attr('src',tampon).fadeIn(500);
});

//rotation changement huile afficharge mobile
$("#changementHuile1").mouseenter(function(){
    var tampon=$('#changementHuile1').attr('src');
    $('#changementHuile1').hide().attr('src',$('#changementHuile2').attr('src')).fadeIn(500);
    $('#changementHuile2').hide().attr('src',$('#changementHuile3').attr('src')).fadeIn(500);
    $('#changementHuile3').hide().attr('src',tampon).fadeIn(500);
});


$("#frein").click(function(){
    $('#frein').css('position', 'relative').animate({left:'+=197px'}).animate({left:'-=197px'});
});

$("#amortisseur").click(function(){
    $('#amortisseur').css('position', 'relative').animate({top:'-=197px'}).animate({top:'+=197px'});
});

 


});

 