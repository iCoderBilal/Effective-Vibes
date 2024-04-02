import React, { useEffect } from 'react';


function SpiritualAnimation() {
    <h1>Hello</h1>
    useEffect(() => {
        // Function to dynamically load the dotLottie player script
        const loadScript = () => {
            const scriptId = 'dotlottie-player-sdk';

            // Check if the script is already loaded
            if (document.getElementById(scriptId)) {
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
            script.type = 'module';
            script.id = scriptId;
            document.body.appendChild(script);
        };

        loadScript();
    }, []);

    return (
        <dotlottie-player
            src="https://lottie.host/41bd61ac-b614-4fbc-8053-e919e2d68085/QmKLJDt0Fi.json"
            background="#151F2B"
            speed="1"
            loop
            autoplay
        ></dotlottie-player>
    );
}

export default SpiritualAnimation;