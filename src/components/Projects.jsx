import React from "react";

const Projects = () => {
    return (
        <section id="" class="container mx-auto px-4 py-16 relative z-20">
            <h2 class="text-3xl font-bold mb-8 flex items-center">
                <span class="text-green-400 mr-2">&gt;</span> 
                <span class="crt-glow">PROJECTS.DIR</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
                <div class="cassette-tape p-6">
                    <div class="mb-4 h-48 bg-gray-900 flex items-center justify-center">
                        <div class="text-center">
                            <div class="text-green-400 text-5xl mb-2">01</div>
                            <div class="text-xs text-gray-400">RETRO OS INTERFACE</div>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-amber-400">Retro OS Interface</h3>
                    <p class="mb-4 opacity-90">
                        A web-based operating system interface inspired by 90s computer systems with modern functionality.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="floppy-label">React</span>
                        <span class="floppy-label">WebAssembly</span>
                        <span class="floppy-label">Rust</span>
                    </div>
                </div>
                
                
                <div class="cassette-tape p-6">
                    <div class="mb-4 h-48 bg-gray-900 flex items-center justify-center">
                        <div class="text-center">
                            <div class="text-green-400 text-5xl mb-2">02</div>
                            <div class="text-xs text-gray-400">PIXEL QUEST RPG</div>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-amber-400">Pixel Quest RPG</h3>
                    <p class="mb-4 opacity-90">
                        A mobile RPG game with retro pixel art aesthetics and modern gameplay mechanics.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="floppy-label">Unity</span>
                        <span class="floppy-label">C#</span>
                        <span class="floppy-label">Mobile</span>
                    </div>
                </div>
                
              
                <div class="cassette-tape p-6">
                    <div class="mb-4 h-48 bg-gray-900 flex items-center justify-center">
                        <div class="text-center">
                            <div class="text-green-400 text-5xl mb-2">03</div>
                            <div class="text-xs text-gray-400">SYNTHWAVE EDITOR</div>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-amber-400">SynthWave Editor</h3>
                    <p class="mb-4 opacity-90">
                        A browser-based music creation tool with 80s synthwave aesthetics and Web Audio API.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="floppy-label">JavaScript</span>
                        <span class="floppy-label">Web Audio</span>
                        <span class="floppy-label">Canvas</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Projects;