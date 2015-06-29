<style>
  .statsBox{
    position: fixed;
    border: 1px solid #000;
    padding: 4px;
    opacity: 0.2;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  .statsBox:hover{
    opacity: 1;
  }
  .statsBox .bar{
    display: inline-block;
    height: 100px;
    width: 15px;
    margin: 2px;
    border: 1px solid steelblue;
    box-sizing: border-box;
  }
  .ocrx_word{
    position: absolute;
  }
</style>
<script type="text/javascript">
  var title, bbox, conf, hist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], words;
  window.onload = function(){
    words = document.querySelectorAll(".ocrx_word");

    for (var i = words.length - 1; i >= 0; i--) {
      title = words[i].getAttribute("title").split(";");
      bbox = title[0].split(" ");
      conf = title[1].trim().split(" ");

      words[i].style.left = bbox[1] + "px";
      words[i].style.top = bbox[2] + "px";
      words[i].style.width = (bbox[3]-bbox[1]) + "px";
      words[i].style.height = (bbox[4]-bbox[2]) + "px";
      words[i].style.border = "1px solid #ccc";
      
      hist[parseInt(conf[1]/10)] += 1;
    }

    var statsBox = document.createElement("div");
    statsBox.setAttribute("class", "statsBox");
    statsBox.onclick = function(){
      if(this.style.right == ""){
        this.style.right = "0px";
      } else {
        this.style.right = "";
      }
    };
    
    for (var i = 0; i < hist.length; i++) {
      var bar = document.createElement("div");
      bar.setAttribute("class", "bar");
      bar.setAttribute("title", hist[i]);
      
      if(hist[i]!=0){
        bar.style.borderBottomWidth = (hist[i] / words.length * 100) + "px";
      }

      statsBox.appendChild(bar);
    }

    var tWords = document.createElement("div");
    tWords.style.display = "block";
    tWords.style.fontSize = "12px";
    tWords.innerHTML = "Total palabras: " + words.length;
    statsBox.appendChild(tWords);

    document.body.appendChild(statsBox);
  };
</script>
