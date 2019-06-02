
function demo(){
    console.log("hello");
}

$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  
  $('#myTab a[href="#profile"]').tab('show') // Select tab by name
  $('#myTab li:first-child a').tab('show') // Select first tab
  $('#myTab li:last-child a').tab('show') // Select last tab
  $('#myTab li:nth-child(3) a').tab('show') // Select third tab

function move() {
    var p = document.createElement("p");
 

    var parent = document.getElementById("progress1"); 
    var child = document.getElementById("p1");

    var phantram=0;
    var width = 0;
    var id = setInterval(frame, 25);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            parent.style.width = width + '%'; 
            phantram=phantram+1;

            p.innerText=phantram+"%";
            p.id="p1";
           // console.log(phantram=phantram+1)
            //console.log("%")
            parent.replaceChild(p,child);
        }
        
    }

//  add_child();

}

function check_trinhduyet() {
    var Browser = navigator.userAgent;
    if (Browser.indexOf('MSIE') >= 0){
     Browser = 'MSIE';
    }
    else if (Browser.indexOf('Firefox') >= 0){
     Browser = 'Firefox';
    }
    else if (Browser.indexOf('Chrome') >= 0){
     Browser = 'Chrome';
    }
    else if (Browser.indexOf('Safari') >= 0){
     Browser = 'Safari';
    }
    else if (Browser.indexOf('Opera') >= 0){
       Browser = 'Opera';
    }
    else if (Browser.indexOf('Expforer') >= 0){
        Browser = 'Opera';
     }
    else{
     Browser = 'UNKNOWN';
    }
    console.log(Browser);
}