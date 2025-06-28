import React from "react";

const Contact = () => {
    return (
        <section id="contact" class="container mx-auto px-4 py-16 relative z-20">
            <div class="vintage-terminal p-8">
                <h2 class="text-3xl font-bold mb-6 flex items-center">
                    <span class="text-green-400 mr-2">&gt;</span> 
                    <span class="crt-glow">CONTACT.BAT</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="mb-6 leading-relaxed">
                            Interested in working together? Have a project that needs a vintage touch? 
                            Send me a message using the terminal-style form or connect through one of the channels.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-center vintage-terminal p-3">
                                <div class="w-8 h-8 bg-green-900 flex items-center justify-center mr-3">
                                    <span class="text-green-400">&gt;</span>
                                </div>
                                <span>contact@devmaverick.io</span>
                            </div>
                            <div class="flex items-center vintage-terminal p-3">
                                <div class="w-8 h-8 bg-green-900 flex items-center justify-center mr-3">
                                    <span class="text-green-400">&gt;</span>
                                </div>
                                <span>@dev_maverick</span>
                            </div>
                            <div class="flex items-center vintage-terminal p-3">
                                <div class="w-8 h-8 bg-green-900 flex items-center justify-center mr-3">
                                    <span class="text-green-400">&gt;</span>
                                </div>
                                <span>+1 (555) 1987-1999</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form class="space-y-4">
                            <div>
                                <label class="block text-green-400 mb-1">Name:</label>
                                <input type="text" class="w-full vintage-terminal bg-black p-3 focus:outline-none" />
                            </div>
                            <div>
                                <label class="block text-green-400 mb-1">Email:</label>
                                <input type="email" class="w-full vintage-terminal bg-black p-3 focus:outline-none" />
                            </div>
                            <div>
                                <label class="block text-green-400 mb-1">Message:</label>
                                <textarea rows="4" class="w-full vintage-terminal bg-black p-3 focus:outline-none"></textarea>
                            </div>
                            <button type="submit" class="vintage-terminal px-6 py-3 bg-green-900 text-green-400 hover:bg-green-800 transition flex items-center">
                                <span class="mr-2">&gt;</span> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;