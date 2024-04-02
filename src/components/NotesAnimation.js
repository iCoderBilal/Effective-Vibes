import React, { useEffect } from 'react';

function NotesAnimation() {
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
                src="https://lottie.host/96db051a-8aa0-4cf6-abb8-f5797b39aa49/rH0gtNJfas.json"
                background="transparent"
                speed="1"

                loop
                autoplay
            ></dotlottie-player>
        </>
    );
}

export default NotesAnimation;
