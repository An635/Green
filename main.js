var rtc = function(){
    Array.from(document.getElementsByClassName('wi-ch')).forEach(function(el){
        el.style.width = 0;
    })     
}

Array.from(document.getElementsByClassName('w-ch')).forEach(function(el,i){
    el.addEventListener('click',function(){
        rtc();
        let rnd = Math.floor(Math.random()*360);
        document.getElementsByClassName('wi-ch')[i].style.width = '200px';
        document.getElementById('val').innerText ='0'+ (i+1);
        document.getElementsByTagName('header')[0].style.filter =`hue-rotate(${rnd}deg)`;
    })
})     

