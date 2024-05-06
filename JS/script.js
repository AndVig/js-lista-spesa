const lista=[];
var add=document.getElementById("add");
var show=document.getElementById("show");
var element=document.getElementById("element");
let i=0;
add.addEventListener('click',function(){
    {
        lista.push(element.value);
        element.value='';
    }
})
show.addEventListener('click',function(){
    while(i<lista.length){
        const article=lista[i];
        el = document.createElement('li');
        el.innerHTML = lista[i];
        document.getElementById('output').appendChild(el);
        i++;
    }
})