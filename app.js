
var pages = 1;
var Url
var elem
var local_linc


    var local_value = localStorage.getItem("text");
      document.getElementById('textComment').value = local_value;

      var linc_value = localStorage.getItem("linc");
      var elem = document.getElementById("linc");
      elem.setAttribute('href', linc_value)

      var text

    function save(){
      if(pages == 1){
        text = document.getElementById("textComment").value;
        localStorage.setItem("text",text);
      }
      if(pages == 2){
        text = document.getElementById("textComment").value;
        localStorage.setItem("text2",text);
      }
      if(pages == 3){
        text = document.getElementById("textComment").value;
        localStorage.setItem("text3",text);
      }
    }

    function swap(){
      console.log("1");
      pages = 1;
      load();
      local_linc = localStorage.getItem("linc");
      elem = document.getElementById("linc");
      elem.setAttribute('href', local_linc)
    }
    function swap2(){
      console.log("2");
      pages = 2;
      load();
      local_linc = localStorage.getItem("linc2");
      elem = document.getElementById("linc");
      elem.setAttribute('href', local_linc)
    }
    function swap3(){
      console.log("3");
      pages = 3;
      load();
      local_linc = localStorage.getItem("linc3");
      elem = document.getElementById("linc");
      elem.setAttribute('href', local_linc)
    }
  
    var local_load

    function load(){
      if(pages == 1){
        local_load = localStorage.getItem("text");
        document.getElementById('textComment').value = local_value;
      }
      if(pages == 2){
        local_load = localStorage.getItem("text2");
        document.getElementById('textComment').value = local_load;
      }
      if(pages == 3){
        local_load = localStorage.getItem("text3");
        document.getElementById('textComment').value = local_load;
      }
    }
  
    function del(){
      //localStorage.removeItem("a");
      //localStorage.clear();
      if(pages == 1){
        localStorage.removeItem("text");
      }
      if(pages == 2){
        localStorage.removeItem("text2");
      }
      if(pages == 3){
        localStorage.removeItem("text3");
      }
    } 

    function linc(){
      //document.location='https://dev.vk.com/widgets/like';
      //var elem = document.getElementById("para1");
      //elem.textContent = 'dfsdf';
      if(pages == 1){
        Url= document.getElementById("implinc").value;
        localStorage.setItem("linc",Url);
        elem = document.getElementById("linc");
        elem.setAttribute('href', Url)
      }
      if(pages == 2){
        Url= document.getElementById("implinc").value;
        localStorage.setItem("linc2",Url);
        elem = document.getElementById("linc");
        elem.setAttribute('href', Url)
      }
      if(pages == 3){
        Url= document.getElementById("implinc").value;
        localStorage.setItem("linc3",Url);
        elem = document.getElementById("linc");
        elem.setAttribute('href', Url)
      }
    }