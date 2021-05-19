const downKeys = new Set();
        let x = 0;
        let y = 0;
        let a = 0;
        let b = 0;
        let c = 0;
        const p1 = document.getElementById('p1');
        const downKeysControl = document.getElementById('base');
        document.addEventListener('keydown', event => downKeys.add   (event.key));
        document.addEventListener('keyup',   event => downKeys.delete(event.key));
        
        function motion() {
            downKeysControl.textContent = downKeys;
            const core = p1.style;
            function isDown(key) {return downKeys.has(key);}
            const dir = isDown('Shift') ? 10 : 2;
            if (isDown('ArrowRight')) core.left = (x += dir) + 'px';
            if (isDown('ArrowDown' )) core.top  = (y += dir) + 'px';
            if (isDown('ArrowLeft' )) core.left = (x -= dir) + 'px';
            if (isDown('ArrowUp'   )) core.top  = (y -= dir) + 'px';
            if (isDown('d')) core.left = (x += dir) + 'px';
            if (isDown('s' )) core.top  = (y += dir) + 'px';
            if (isDown('a' )) core.left = (x -= dir) + 'px';
            if (isDown('w'   )) core.top  = (y -= dir) + 'px';
            if (isDown('1' )) core.width  = (a += dir) + 'px', core.height = (b += dir) + 'px';
            if (isDown('0' )) core.width  = (a -= dir) + 'px', core.height = (b -= dir) + 'px';
            if (isDown('p' )) core.transform = 'rotate(' + (c += dir) + 'deg)';
            if (isDown('o' )) core.transform = 'rotate(' + (c -= dir) + 'deg)';
            
            window.requestAnimationFrame(motion);
        }

        motion();