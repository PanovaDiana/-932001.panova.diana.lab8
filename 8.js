function Add(){
    var elem = document.createElement('div');
    var contaner = document.getElementById('contaner');
    contaner.append(elem);

    var input1 = document.createElement('input');
    elem.append(input1);
    var input2 = document.createElement('input');
    elem.append(input2);

    var but1 = document.createElement('button');
    elem.append(but1);
    var but2 = document.createElement('button');
    elem.append(but2);
    var but3 = document.createElement('button');
    elem.append(but3);

    var ButText1 = document.createTextNode("↑");
    but1.appendChild(ButText1);
    var ButText2 = document.createTextNode("↓");
    but2.appendChild(ButText2);
    var ButText3 = document.createTextNode("x");
    but3.appendChild(ButText3);

    but1.onclick = function Up(){
        
        var upElem =  elem.previousElementSibling;
        contaner.insertBefore(elem, upElem);
    }

    but2.onclick = function Down(){
        let downElem =  elem.nextElementSibling;
       // downElem =  downElem.nextElementSibling;
        contaner.insertBefore(downElem, elem);
    }

    but3.onclick = function Delete(){
        var parent = elem.parentNode;
        parent.removeChild(elem);
    }

}

function Save(){
    var output = document.createElement('div');
    var contaner = document.getElementById('contaner');
    document.body.appendChild( output);
    var block = contaner.firstElementChild;
    output.textContent = '{'
    while (block!=null) {
        var elem = block.firstElementChild;
        output.textContent = output.textContent + '"' + elem.value;
        elem =  elem.nextElementSibling;
        output.textContent = output.textContent + '":"' + elem.value + '"';
        block =  block.nextElementSibling;
        if(block!=null){
            output.textContent = output.textContent + ','
        }
    }
    output.textContent = output.textContent + '}'
}
   /* output.textContent = output.textContent + '{ "'

    var elem = block.firstElementChild;
    output.textContent = output.textContent + "{" + elem.value;
    output.textContent = output.textContent + "}" + elem.value;
   // var TextElem = "{";
    //document.output.innerHTML = '<b>Новое содержимое</b>';

    //TextElem.append(output);
    //help.append(output);
}


/*function DrawSquare(){
    var x = Math.round(Math.random()*1000);
    var y = Math.round(Math.random()*450);
    var z = Math.round(Math.random()*100)+50;
    var elem = document.createElement('div');
    elem.classList.add("Square");
    var area = document.getElementById('Area');
    area.append(elem);
    elem.style.left = `${x}px`;
    elem.style.top =`${y}px`;
    elem.style.height = `${z}px`;
    elem.style.width = `${z}px`;
    elem.ondblclick = function(){
        elem.remove();
    }
}*/