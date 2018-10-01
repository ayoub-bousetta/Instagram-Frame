
 let currentitem=document.getElementsByClassName('item');
 let heighWhenactive= currentitem[0].offsetHeight

 let maxHeight=heighWhenactive *currentitem.length

 let goDown=document.getElementById('downscroll');

 let fired=false;
const DownOnDom =(event)=>{
    
    wDelta="down"

    
    
    if (fired == true) {
        return false;
        
    }
   
    fired=true
        let itemnext,item,heightTop ;

    

        for (let i = 0; i < currentitem.length; i++) {
            item=currentitem[i];

            
            
           
            if (item.classList.contains('active')==true) {


                item.classList.add(wDelta);
               

                 heightTop=heighWhenactive * (i+1)
                 
            //Cuz first one is 0
                
          

            if (heightTop < maxHeight) {
               
                itemnext = item.nextElementSibling;
                item.style.top="-"+heightTop+"px"
             itemnext.style.top="-"+heightTop+"px"

             if (itemnext.nextElementSibling != null) {
                itemnext.nextElementSibling.style.top="-"+heightTop+"px"
            }

            if (i > 0) {
                currentitem[0].style.top=heighWhenactive+"px"
            }
            
            }else{

                itemnext=currentitem[0]
                
                    item.style.top="-"+(heightTop)+"px"

                    setTimeout(() => {item.classList.remove(wDelta);},
                2000)
                    item.classList.remove("active");
                
               
                
                

                itemnext = currentitem[0];
                itemnext.style.top="0px"
                
                
                if (itemnext.nextElementSibling != null) {
                    itemnext.nextElementSibling.style.top="0px"
                }else if (itemnext.previousElementSibling != null) {
                    itemnext.previousElementSibling.style.top="0px"
                }

                
                
            }
                
            
            

            
           
                 
           


           
                
            
            
            
         
            }

            
          
        }
    
        new Promise(function(resolve, reject) {

     
            
                itemnext.classList.add(wDelta,"active");
              
                resolve();
              
           
          }).then(()=>{
       
           
            setTimeout(() => {
                

                if (itemnext.previousElementSibling != null) {
                    itemnext.previousElementSibling.classList.remove('active')
                    itemnext.previousElementSibling.classList.remove(wDelta)
                }else if(itemnext.nextElementSibling != null){
                    itemnext.nextElementSibling.classList.remove('active')
                    itemnext.nextElementSibling.classList.remove(wDelta)

                }

                itemnext.classList.remove(wDelta);

           fired=false
        
        }, 2000);
           
       
           
          })
       
}









goDown.addEventListener('click', DownOnDom,false);