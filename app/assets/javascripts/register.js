$(document).ready(function(){
	$(':submit').attr('disabled',true);
	$('a.fancy').fancybox();
	$('fancy.a').fancybox();
});

function check_captcha(answer,option){
	if(answer==option){$(':submit').attr('disabled',false);}else{$(':submit').attr('disabled',true);}
}
