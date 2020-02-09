function updateDisplay(){
    var text = document.getElementById("printText").textContent;
    //print
    //print()
    //print("Hello World")
    if(text==='print("Hello World");'){ //last stage
        document.getElementById("printText").innerHTML = "print";
    }
    else if(text==='print()'){
        document.getElementById("printText").innerHTML = 'print("Hello World");';
    }
    else{
        document.getElementById("printText").innerHTML = 'print()';
    }
}

function change(elem, color, val){
    //elem.style.backgroundColor = color;
    if(val==='c'){
        alert("Correct!");
        //document.getElementById("p1").innerHTML = 'Correct';
    }
    else{
        alert("Wrong!");
        //document.getElementById("p1").innerHTML = 'Wrong';
    }
    
}