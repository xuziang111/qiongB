window.onscroll=function(){
    if(window.scrollY>0){  
        topNavBarIn.classList.remove('touming');      
    }else{
        topNavBarIn.classList.add('touming');  
    }
}