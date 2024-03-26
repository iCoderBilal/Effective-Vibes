import React, { useEffect } from 'react';

function HeroAnimation() {
    useEffect(() => {
        // Function to dynamically load the dotlottie-player script
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
            script.type = 'module';
            script.async = true;

            document.body.appendChild(script);
        };

        // Check if the script is already loaded to avoid duplicates
        if (!document.querySelector('script[src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"]')) {
            loadScript();
        }
    }, []);
    return (
        <>
            <dotlottie-player
                src="https://lottie.host/d823a523-5ab0-4c02-a075-85e890b2b119/XHAEcY9YJH.json"
                background="transparent"
                speed="1"
                loop
                autoplay
            ></dotlottie-player>
        </>
    )

}

export default HeroAnimation;