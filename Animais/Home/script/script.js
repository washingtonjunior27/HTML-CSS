
// Chamando variaveis do DOM
const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');
const next = document.getElementById('next');
const back = document.getElementById('back');

//Index Imagens
let idx = 0;

function carrosel(){
    if(idx>img.length - 1){
        idx = 0;
    }else if(idx<0){
        idx = img.length-1;
    }
    const width = img[idx].clientWidth;//Calculo de tamanho das imagens de acordo com resolução
    imgs.style.transform = `translateX(${-idx*width}px)`;
}
back.addEventListener('click', ()=>{
   idx--;
   carrosel();
})
next.addEventListener('click',()=>{
    idx++;
    carrosel();
})