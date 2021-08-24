let x = 0;
let y = 0;
let a = 0;
let b = 0;
let c = 0;

const p2 = document.getElementById('p2');
//WOLF
         
        //Right
        document.getElementById("Right2").addEventListener("click", motionBtnRight2)
        function motionBtnRight2(){
            const core2 = p2.style;
            var dir = 204;
            core2.left = (x += dir) + 'px';
        }
        //Down

       
        //Left
        document.getElementById("Left2").addEventListener("click", motionBtnLeft2)
        function motionBtnLeft2(){
            const core2 = p2.style;
            var dir = 204;
           
            core2.left = (x -= dir) + 'px';
            
        }
       