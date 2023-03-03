let iterations = +prompt("Скільки бажаєте намалювати фігур?");

function createColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function circleGeneric(r){
    var str = "<div style=\"background-color:"+createColor()+";width:"+Math.random()*r+"px;height:"+Math.random()*r+"px;border:2px solid "+createColor()+";border-radius:"+Math.random()*45+"%;text-align: center;margin: 0 auto;>"+r+"</div>"
    document.write(str)
}


for (let i = 0;i <iterations;i++){

    circleGeneric(i)
} 