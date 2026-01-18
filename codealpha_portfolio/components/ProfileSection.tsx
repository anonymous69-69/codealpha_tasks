"use client";
import LightRays from "./ui/LightRays";
import ProfileCard from "./ProfileCard";
import DecryptedText from "./ui/DecryptedText"; 
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProfileSection() {
  // Define the scroll function
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const fullText =
    "I bridge the gap between complex engineering and clean UI, specializing in web apps, AI integrations, and live systems that solve real-world problems.";

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index]);
  return (
    // We removed overflow-hidden from here so the page can actually scroll
    <section className="relative min-w-full min-h-screen flex flex-col items-center justify-start bg-black py-20">
      
      {/* Background Layer: We keep overflow-hidden here to contain the LightRays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.8}
          lightSpread={4}
          rayLength={4}
          followMouse={true}
          className="opacity-100"
          noiseAmount={0.3}
          mouseInfluence={0.05}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl w-full px-6 md:px-12 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading, Bio & Tech Stacks */}
          <div className="lg:col-span-7">
            <h2 className="text-sm font-mono tracking-[0.3em] text-gray-500 mb-4">01 / ABOUT ME</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
              I BUILD PRODUCTS, <br />
              <span className="text-gray-500 italic font-serif">NOT JUST DEMOS.</span>
            </h3>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl mb-20">
              <p>
                I’m <span className="text-white font-medium">Rhythm Sarma</span>, a CS student based in <span className="text-white font-medium">Guwahati, India</span>. 
                I focus on the full lifecycle of a product—from the first line of code to managing deployment and <span className="text-white font-medium">SEO.</span>
              </p>
              <p
                className="text-gray-300 min-h-[4.5rem]"
                aria-label="I bridge the gap between complex engineering and clean UI, specializing in web apps, AI integrations, and live systems that solve real-world problems."
              >
                {typedText}
                <span className="inline-block w-[2px] h-5 bg-white ml-1 animate-pulse align-middle" />
              </p>
            </div>

            {/* VERTICAL TECH STACK SECTION */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h4 className="text-xs font-mono text-white/50 mb-4 tracking-widest uppercase">Frontend</h4>
                <div className="flex flex-wrap gap-3">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML","CSS"].map((tech) => (
                    <span key={tech} className="px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg text-sm hover:border-white/40 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h4 className="text-xs font-mono text-white/50 mb-4 tracking-widest uppercase">Backend & AI</h4>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "MongoDB", "API","Ai Automation", "Ai Chat Bots"].map((tech) => (
                    <span key={tech} className="px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg text-sm hover:border-white/40 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h4 className="text-xs font-mono text-white/50 mb-4 tracking-widest uppercase">Infrastructure</h4>
                <div className="flex flex-wrap gap-3">
                  {["Vercel","Render","Netlify", "Git / GitHub", "SEO Optimization", "Bloging"].map((tech) => (
                    <span key={tech} className="px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg text-sm hover:border-white/40 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* WHAT I BRING SECTION */}
            <div className="space-y-8 mt-24">
              <h2 className="text-sm font-mono tracking-[0.3em] text-gray-500 uppercase">03 / WHAT I BRING</h2>
              <div className="flex flex-col gap-4">
                {[
                  "Turn designs into clean, production-ready web apps",
                  "Build full-stack features from idea to deployment",
                  "Handle hosting, performance, and SEO optimization",
                  "Integrate AI chatbots into real user-facing systems",
                  "Work independently and take ownership of features"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <span className="text-white/30 mt-1.5 font-mono text-xs">0{index + 1}</span>
                    <DecryptedText
                      text={item}
                      animateOn="view"
                      revealDirection="start"
                      speed={100}
                      maxIterations={30}
                      className="text-white"
                      parentClassName="text-lg md:text-xl text-gray-400 hover:text-white transition-colors duration-300 cursor-default"
                      encryptedClassName="text-white/50"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT SECTION */}
            <div id="contact" className="space-y-8 mt-28 scroll-mt-32">
              <h2 className="text-sm font-mono tracking-[0.3em] text-gray-500 uppercase">04 / CONTACT</h2>

              <div className="flex flex-col gap-4 max-w-md">
                
                {/* Email */}
                <a
                  href="mailto:rhythmsarma66@gmail.com"
                  className="group flex items-center gap-4 p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
                  </svg>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    rhythmsarma66@gmail.com
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/rhythm-sarma-10797a206/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8v8.5h-5V16c0-1.9 0-4.3-2.7-4.3-2.7 0-3.1 2.1-3.1 4.2v8.1h-5V8z"/>
                  </svg>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    LinkedIn Profile
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917086758292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M19.11 17.43c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.14.18 1.9 2.9 4.6 4.07.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16 2.93c-7.18 0-13 5.82-13 13 0 2.29.6 4.43 1.65 6.29L3 29l6.93-1.82A12.94 12.94 0 0016 28.93c7.18 0 13-5.82 13-13s-5.82-13-13-13z"/>
                  </svg>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    +91 70867 58292
                  </span>
                </a>

              </div>
            </div>
          </div>
          

          {/* Right Column: Achievements & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-20">
            
            {/* Profile Card Integration */}
            <div className="w-full flex justify-center lg:justify-start">
              <ProfileCard
                name="Rhythm Sarma"
                title="CS Student & Product Dev"
                handle="rhythmsarma"
                status="Building in Public"
                contactText="Let's Talk"
                
                onContactClick={scrollToContact}
                avatarUrl="/IMG_3384.jpg" // Ensure this path matches your public folder
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                behindGlowColor="rgba(255, 255, 255, 0.2)"
              />
            </div>

            {/* Featured Work Card */}
            <a 
              href="https://bizzysite.shop/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div className="absolute top-6 right-6 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>

              <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs opacity-70">Featured Work</h4>
              <p className="text-2xl font-semibold mb-1 group-hover:text-white transition-colors">BizzySite</p>
              <p className="text-gray-400 text-sm mb-6">Web app for small business owners</p>
              
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tighter">100+</span>
                <span className="text-gray-500 uppercase text-xs tracking-widest font-mono">Active Users</span>
              </div>

              <div className="mt-4 overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
                <p className="text-xs text-gray-400 font-mono">VIEW LIVE PROJECT →</p>
              </div>
            </a>

            {/* Expertise Summary */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/10"></div>
                <span className="text-xs font-mono text-gray-500 tracking-[0.2em]">CORE FOCUS</span>
              </div>
              
              <ul className="grid grid-cols-1 gap-y-4 text-sm font-medium tracking-tight">
                {[
                  "End-to-end Product Execution",
                  "Performance & SEO Architecture",
                  "AI-Driven User Experiences"
                ].map((skill) => (
                  <li key={skill} className="flex items-center gap-3 group/item">
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover/item:bg-white transition-colors"></span>
                    <span className="text-gray-400 group-hover/item:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-4">
              <p className="text-gray-400 italic text-sm mb-6 leading-relaxed">
                "I enjoy starting from zero and pushing a product until people actually use it."
              </p>
             
            </div>
          </div> 

        </div>
      </div>
    </section>
  );
}