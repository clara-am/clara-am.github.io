$(document).ready(function () {  
    var opcionMenu = $('.cabecera__nav ul li a');
    opcionMenu.on('click',function(e){
        e.preventDefault();
        opcionMenu.removeClass('cabecera__nav-activa');
        $(this).addClass("cabecera__nav-activa");
        var strAncla=$(this).attr('href');
        $('body,html').stop(true,true).animate({
            scrollTop: $(strAncla).offset().top
        },1000);
    });
    /*para que el logo altere sus letras */
    var elm = document.getElementById("logo");
    var check = "ಠ_ಠ Clara Albalá";
    var name = "xxxxxxxxxxxxxxxx";
    var array_search = ["A","a","B","b","C","c","D","d","E","e","F"," ","G","g","H","h","I","i","J",
                        "j","K","k","L","l","ø","R","r","N","n","M","m","S","s","T","t"," ","x",
                        "U","u","V","v"," ","Å","á","z","q","P","p","⨀","⋋","⊠","⊞","⊡","∎","ಠ","_"];
    
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    function theLoop() {
    setTimeout(function () {  
        for (i = 0; i < 16; i++) {
            if(name[i] == check[i]){
                // it is correct
            }else{
                // it is false
                var randnr = Math.floor(Math.random() * array_search.length);
                console.log(array_search[randnr]);
                name = setCharAt(name,i,array_search[randnr])
            }
            elm.innerHTML = name;
        }
        if( name === check) {          // If i > 0, keep going
           console.log('done')     // Call the loop again, and pass it the current value of i
        }else{
            theLoop(); 
        }
    }, 100);
    };
    theLoop();
});