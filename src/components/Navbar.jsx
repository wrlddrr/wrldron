import React from "react";

const Navbar = ()=> {
    return(
           <header class="container mx-auto px-4 py-8 relative z-20">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h1 class="glitch text-4xl md:text-5xl font-bold mb-2" data-text="DEV_MAVERICK">DEV_MAVERICK</h1>
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                        <p class="text-green-400 text-lg">// Web . Mobile . Game Developer</p>
                    </div>
                </div>
                <nav class="mt-4 md:mt-0">
                    <ul class="flex space-x-6">
                        <li><a href="#about" class="terminal-prompt hover:text-green-400 transition">about.usr</a></li>
                        <li><a href="#skills" class="terminal-prompt hover:text-green-400 transition">skills.dat</a></li>
                        <li><a href="#projects" class="terminal-prompt hover:text-green-400 transition">projects.exe</a></li>
                        <li><a href="#contact" class="terminal-prompt hover:text-green-400 transition">contact.bat</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    );
};

export default Navbar;