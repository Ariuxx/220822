const yesbtn= document.querySelector('#yesbtn');
//yesbtn.style.setPropety('Back')

yesbtn.addEventListener('click',function () {
    alert('Lo sabía :). /n Creo que no lo sabes pero ese 22 de diciembre se quedo guardado en mi alma. ')

});

const nobtn= document.querySelector('#nobtn');
   
nobtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomX+'%');
    nobtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
