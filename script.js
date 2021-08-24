
const downKeys = new Set();
        let x = 0;
        let y = 0;
        let a = 0;
        let b = 0;
        let c = 0;

        const p1 = document.getElementById('p1');
        const p2 = document.getElementById('p2');
        const p3 = document.getElementById('p3');
        
        //Right
        document.getElementById("Right").addEventListener("click", motionBtnRight)
        function motionBtnRight(){
            const core = p1.style;
            var dir = 102;
            core.left = (x += dir) + 'px';
        }
        
        //Left
        document.getElementById("Left").addEventListener("click", motionBtnLeft)
        function motionBtnLeft(){
            const core = p1.style;
            var dir = 102;
            if(core.left == 0) return;
            core.left = (x -= dir) + 'px';
        }   
        
        // Code that enable key commands
        /*
        const downKeysControl = document.getElementById('base');
        document.addEventListener('keydown', event => downKeys.add   (event.key));
        document.addEventListener('keyup',   event => downKeys.delete(event.key));
        
        function motion() {
            downKeysControl.textContent = downKeys;
            const core = p1.style;
            function isDown(key) {return downKeys.has(key);}
            const dir = isDown('Shift') ? 30 : 10;

            if (isDown('ArrowRight')) core.left = (x += dir) + 'px';
            if (isDown('ArrowDown' )) core.top  = (y += dir) + 'px';
            if (isDown('ArrowLeft' )) core.left = (x -= dir) + 'px';
            if (isDown('ArrowUp'   )) core.top  = (y -= dir) + 'px';
            if (isDown('d')) core.left = (x += dir) + 'px';
            if (isDown('s' )) core.top  = (y += dir) + 'px';
            if (isDown('a' )) core.left = (x -= dir) + 'px';
            if (isDown('w'   )) core.top  = (y -= dir) + 'px';
            
            window.requestAnimationFrame(motion);
        }
            motion();
        */
    