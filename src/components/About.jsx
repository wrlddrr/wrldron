import React from "react";


const About = () => {
    return (
         <section id="about" class="container mx-auto px-4 py-16 relative z-20">
            <div class="vintage-terminal p-8">
                <h2 class="text-3xl font-bold mb-6 flex items-center">
                    <span class="text-green-400 mr-2">&gt;</span> 
                    <span class="crt-glow">ABOUT_ME.TXT</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="mb-4 leading-relaxed">
                            I'm a multi-disciplinary developer with over 8 years of experience creating digital products. 
                            My journey began in the era of dial-up modems and pixel art, which deeply influences my aesthetic today.
                        </p>
                        <p class="mb-4 leading-relaxed">
                            I believe technology should have personality and character, not just functionality. 
                            That's why I specialize in creating experiences that feel hand-crafted and unique.
                        </p>
                        <p class="leading-relaxed">
                            When I'm not coding, you'll find me restoring vintage computers, playing retro games, 
                            or experimenting with analog synthesizers.
                        </p>
                    </div>
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-xl font-bold mb-2 text-green-400 flex items-center">
                                <span class="text-amber-400 mr-2">&gt;</span> Development Philosophy
                            </h3>
                            <div class="floppy-label">
                                "Build for longevity - both in code durability and design timelessness."
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2 text-green-400 flex items-center">
                                <span class="text-amber-400 mr-2">&gt;</span> Current Tools
                            </h3>
                            <div class="grid grid-cols-2 gap-2">
                                <div class="floppy-label">Rust</div>
                                <div class="floppy-label">React Native</div>
                                <div class="floppy-label">Three.js</div>
                                <div class="floppy-label">Unity</div>
                                <div class="floppy-label">Node.js</div>
                                <div class="floppy-label">PostgreSQL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;