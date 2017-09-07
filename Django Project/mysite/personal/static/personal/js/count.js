var i=0;
var t=setInterval(callme,500)


function callme()
{if(i>=1000000000000)
  {
      clearInterval(t);

  }
  else
  { i++;
    var handle=document.getElementById("count");
    var store=handle.value;
    var count=store.length;


 var p=document.getElementById("change");
    p.innerHTML=count;
  }
}


