import React from "react";

const Hero = () => {
    return (
        <section class="container mx-auto px-4 py-16 md:py-24 relative z-20">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <div class="text-2xl md:text-4xl mb-6 flicker">
                        &gt; Welcome to my digital workshop...
                    </div>
                    <h2 class="text-3xl md:text-5xl font-bold mb-6 crt-glow">CRAFTING DIGITAL EXPERIENCES WITH VINTAGE SOUL</h2>
                    <p class="text-lg mb-8 leading-relaxed opacity-90">
                        I build immersive web, mobile, and game experiences with a focus on performance and authentic retro aesthetics. 
                        My approach combines modern technology with nostalgic design elements.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#projects" class="vintage-terminal px-6 py-3 bg-black text-green-400 hover:bg-green-900 transition flex items-center">
                            <span class="mr-2">&gt;</span> View Projects
                        </a>
                        <a href="#contact" class="vintage-terminal px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition flex items-center">
                            <span class="mr-2">&gt;</span> Contact Me
                        </a>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <div class="relative">
                        <div class="vintage-photo w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
                            <div class="bg-gray-800 w-48 h-48 rounded-full flex items-center justify-center">
                                <div class="analog-meter">
                                    <div class="meter-face">
                                        <div class="meter-needle" id="skill-meter"></div>
                                        <div class="meter-scale">
                                            <div class="meter-mark"></div>
                                            <div class="meter-mark"></div>
                                            <div class="meter-mark"></div>
                                            <div class="meter-mark"></div>
                                            <div class="meter-mark"></div>
                                            <div class="meter-mark"></div>
                                            <div class="meter-mark"></div>
                                            <div class="meter-mark"></div>
                                            <div class="meter-mark"></div>
                                            <div class="meter-mark"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute -bottom-4 -right-4 vintage-terminal bg-black p-3">
                            <p class="text-green-400 flex items-center">
                                <span class="animate-pulse mr-2">&gt;</span> Currently coding
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;