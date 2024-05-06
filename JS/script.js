const lista=[];
var add=document.getElementById("add");
var show=document.getElementById("show");
var element=document.getElementById("element");
let i=0;
add.addEventListener('click',function(){
    while(element.value!='stop'){
        lista.push(element);
        
    }
})
show.addEventListener('click',function(){
    while(i<=lista.length){
        el = document.createElement('li');
        el.innerHTML = lista[i];
        document.getElementById('output').appendChild(el);
        i++;
    }
})