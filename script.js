const downKeys = new Set();
        let x = 0;
        let y = 0;
        
        const p1 = document.getElementById('p1');
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
        
        document.getElementById("Up").addEventListener("click", motionBtnUp)
        document.getElementById("Right").addEventListener("click", motionBtnRight)
        document.getElementById("Down").addEventListener("click", motionBtnDown)
        document.getElementById("Left").addEventListener("click", motionBtnLeft)
        document.getElementById("UR").addEventListener("click", motionBtnUR)
        document.getElementById("UL").addEventListener("click", motionBtnUL)
        document.getElementById("DR").addEventListener("click", motionBtnDR)
        document.getElementById("DL").addEventListener("click", motionBtnDL)
        //Up
        function motionBtnUp(){
            const core = p1.style;
            const dir = 102;
            core.top  = (y -= dir) + 'px';
        }
        //Right
        function motionBtnRight(){
            const core = p1.style;
            const dir = 102;
            core.left = (x += dir) + 'px';
        }
        //Down
        function motionBtnDown(){
            const core = p1.style;
            const dir = 102;
            core.top  = (y += dir) + 'px';
        }
        //Left
        function motionBtnLeft(){
            const core = p1.style;
            const dir = 102;
            core.left = (x -= dir) + 'px';
        }
        //Up-Right
        function motionBtnUR(){
            const core = p1.style;
            const dir = 102;
            core.top  = (y -= dir) + 'px';
            core.left = (x += dir) + 'px';
        }
        //Down-Right
        function motionBtnDR(){
            const core = p1.style;
            const dir = 102;
            core.left = (x += dir) + 'px';
            core.top  = (y += dir) + 'px';
        }
        //Down-Left
        function motionBtnDL(){
            const core = p1.style;
            const dir = 102;
            core.top  = (y += dir) + 'px';
            core.left = (x -= dir) + 'px';
        }
        //Up-Left
        function motionBtnUL(){
            const core = p1.style;
            const dir = 102;
            core.top  = (y -= dir) + 'px';
            core.left = (x -= dir) + 'px';
        }

        

       