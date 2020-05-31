

/*
hide()
show()
toggle()

slideUp()
slideDown()
slideToggle()

fadeIn()
fadeOut()
fadeToggle()
fadeTo(dur,opacity)

css  --> setter , getter
attr --> setter ,getter
callback functions
chaining
animate()




//exers1

$(".wrapper").animate({width:"100%"},2000);
$(".wrapper").animate({height:window.innerHeight},2000,function(){
    $(".wrapper h1").fadeIn(1000,function(){
        $(".wrapper .item").fadeIn(1000)
    })


});


2-jquery html and css
 -->setters and getters
  1-css()
  2-attr() 
  3-text()
  4-html()
  5-val()

 --> html content add/remove

 append/prepend/after/before
 remove/empty


 -->css 
 addclass,removeclass,toggleClass

 -->width,height



 3-jquery traversing

 //ancestors
//$("span").parent().css("border","2px solid green")
//$("span").parents().css("border","2px solid green")
//$("span").parentsUntil("section").css("border","2px solid green")
//descendants
$("section").children().css("border","2px solid green")
$("section").find("*").css("border","2px solid green")
$("section").find("p").css("border","2px solid green")

//sideways
siblings()
    $(this).next().css("backgroundColor","#09c")
    $(this).nextAll().css("backgroundColor","#09c")
    $(this).nextUntil(".demo").css("backgroundColor","#09c")
    $(this).prev().css("backgroundColor","#09c")
    $(this).prevAll().css("backgroundColor","#09c")
    $(this).prevUntil(".demo").css("backgroundColor","#09c")

    --->3-4 filtering
//first,last,eq,filter,not
$("h2").not(".demo").css("backgroundColor","#09c")



$("h2").not(".demo").css("backgroundColor","#09c")
*/

var lis=$(".colors-ul li");

lis.eq(0).css("backgroundColor","#09c"); //setter
lis.eq(1).css("backgroundColor","orange");
lis.eq(2).css("backgroundColor","red");
lis.eq(3).css("backgroundColor","brown");


lis.click(function(){
   var currentBg= $(this).css("backgroundColor") ;  //getter
   $(".change").css("color",currentBg)
}) 

$(".color-i").click(function(){
    $(".color-options").toggle()
})



$("button").click(function(){
  var x=$(".test").outerHeight(true);
  console.log(x)
})





var advisorsOffset=$(".advisors").offset().top;

$(window).scroll(function(){
   var x=$(window).scrollTop();
   if(x>advisorsOffset){
       $(".navbar").css({backgroundColor:"rgba(0,0,0,0.7)",transition:"all 1s"})
   }
   else{
    $(".navbar").css("backgroundColor","transparent")

   }

   if(x>1000){
       $("#topBtn").fadeIn(2000)
   }
   else{
    $("#topBtn").fadeOut(2000)

   }
})

$("#topBtn").click(function(){
    $("body,html").animate({scrollTop:0},1000)
})



$("a").click(function(){
   
     
    var x=$(this).attr("href")
    var offset=$(x).offset().top;


//console.log(offset)
  $("body,html").animate({scrollTop:offset},1000)
})

$(document).ready(function(){
    $("#loading").fadeOut(2000,function(){
        $("body").css("overflow","auto")
    })
})



$(".sub-img").click(function(){
    var currentSrc=$(this).attr("src");
    $(".main-img").attr("src",currentSrc)
})
