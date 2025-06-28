import React from "react";

const Skills = () => {
    return (
        <section id="skills" className="container mx-auto px-4 py-16 relative z-20">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="text-green-400 mr-2"></span> 
                <span className="crt-glow">SKILLS.EXE</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="vintage-terminal p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center">
                        <span className="text-blue-400 mr-2">&gt;</span> Web Development
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <p>HTML/CSS/JavaScript</p>
                            <div className="analog-gauge mt-1">
                                <div className="gauge-fill" style={{ width: '95%' }}></div>
                                <div className="gauge-marks"></div>
                            </div>
                        </div>
                        <div>
                            <p>React & Vue.js</p>
                            <div className="analog-gauge mt-1">
                                <div className="gauge-fill" style={{ width: '90%' }}></div>
                                <div className="gauge-marks"></div>
                            </div>
                        </div>
                        <div>
                            <p>Node.js & Express</p>
                            <div className="analog-gauge mt-1">
                                <div className="gauge-fill" style={{ width: '85%' }}></div>
                                <div className="gauge-marks"></div>
                            </div>
                        </div>
                        <div>
                            <p>Three.js & WebGL</p>
                            <div className="analog-gauge mt-1">
                                <div className="gauge-fill" style={{ width: '80%' }}></div>
                                <div className="gauge-marks"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="vintage-terminal p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center">
                        <span className="text-blue-400 mr-2">&gt;</span> Mobile & Game Dev
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <p>React Native</p>
                            <div className="analog-gauge mt-1">
                                <div className="gauge-fill" style={{ width: '90%' }}></div>
                                <div className="gauge-marks"></div>
                            </div>
                        </div>
                        <div>
                            <p>Unity & C#</p>
                            <div className="analog-gauge mt-1">
                                <div className="gauge-fill" style={{ width: '85%' }}></div>
                                <div className="gauge-marks"></div>
                            </div>
                        </div>
                        <div>
                            <p>Game Design</p>
                            <div className="analog-gauge mt-1">
                                <div className="gauge-fill" style={{ width: '80%' }}></div>
                                <div className="gauge-marks"></div>
                            </div>
                        </div>
                        <div>
                            <p>AR/VR Development</p>
                            <div className="analog-gauge mt-1">
                                <div className="gauge-fill" style={{ width: '75%' }}></div>
                                <div className="gauge-marks"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Skills;