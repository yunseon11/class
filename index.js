import $ from "jquery";

console.log('welcome npm world');
$(
    function(){
        $('body').css('background-color','yellow');
        $('h1').css({fontSize:'30px',color:'#fff'});
    }
)