import React from "react";

const Footer = () => {
    return (
          <footer class="container mx-auto px-4 py-8 text-center relative z-20">
            <div class="vintage-terminal p-4 inline-block">
                <p class="text-sm opacity-75">© 2023 DEV_MAVERICK // CRAFTED WITH RETRO AESTHETIC</p>
                <div class="flex justify-center mt-2 space-x-2">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;