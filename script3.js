let x = 0;
let y = 0;
let a = 0;
let b = 0;
let c = 0;


const p3 = document.getElementById('p3');

 //BIRD
         //Up
         document.getElementById("Up3").addEventListener("click", motionBtnUp3)
         function motionBtnUp3(){
             const core3 = p3.style;
             var dir = 102;
              core3.top  = (y -= dir) + 'px';
              
         }
         //Right
         document.getElementById("Right3").addEventListener("click", motionBtnRight3)
         function motionBtnRight3(){
             const core3 = p3.style;
             var dir = 102;
             core3.left = (x += dir) + 'px';
         }
         //Down
         document.getElementById("Down3").addEventListener("click", motionBtnDown3)
         function motionBtnDown3(){
             const core3 = p3.style;
             var dir = 102;

             core3.top  = (y += dir) + 'px';
         }
         //Left
         document.getElementById("Left3").addEventListener("click", motionBtnLeft3)
         function motionBtnLeft3(){
             const core3 = p3.style;
             var dir = 102;
            
             core3.left = (x -= dir) + 'px';
             
         }
         //Up-Right
         document.getElementById("UR3").addEventListener("click", motionBtnUR3)
         function motionBtnUR3(){
             const core3 = p3.style;
             var dir = 102;
             core3.top  = (y -= dir) + 'px';
             core3.left = (x += dir) + 'px';
         }
         //Down-Right
         document.getElementById("DR3").addEventListener("click", motionBtnDR3)
         function motionBtnDR3(){
             const core3 = p3.style;
             var dir = 102;
             core3.left = (x += dir) + 'px';
             core3.top  = (y += dir) + 'px';
         }
         //Down-Left
         document.getElementById("DL3").addEventListener("click", motionBtnDL3)
         function motionBtnDL3(){
             const core3 = p3.style;
             var dir = 102;
 
             core3.top  = (y += dir) + 'px';
             core3.left = (x -= dir) + 'px';
         }
         //Up-Left
         document.getElementById("UL3").addEventListener("click", motionBtnUL3)
         function motionBtnUL3(){
             const core3 = p3.style;
             var dir = 102;
             core3.top  = (y -= dir) + 'px';
             core3.left = (x -= dir) + 'px';
             
         }