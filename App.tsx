


import React from 'react';
import type { Project, EducationItem, WorkExperienceItem, LanguageItem } from './types.ts';
import { getAiAssistantResponseStream } from './services/geminiService.ts';

// --- CONSTANTS & DATA ---

const PROJECTS: Project[] = [
    {
        title: "Stock Price Prediction Using Sentiment Analysis & LSTMs",
        description: "An end-to-end pipeline to forecast Tesla stock prices by integrating historical data with real-time sentiment analysis of financial news and tweets.",
        tags: ["LSTM", "PyTorch", "Sentiment Analysis", "Hugging Face", "NLP", "Fine-Tuning"],
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/stock-prediction-lstm",
        liveUrl: "#",
    },
    {
        title: "Image-to-Image Translation with Cycle-GAN",
        description: "Developed a Cycle-GAN for unpaired image-to-image translation, successfully transforming artistic styles and object domains with enhanced fidelity using Sinkhorn Divergence.",
        tags: ["Cycle-GANs", "PyTorch", "Computer Vision", "Generative AI"],
        imageUrl: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/cycle-gan-project",
    },
    {
        title: "3D Augmentation for Live Weather Forecasting",
        description: "Built a model for aerospace applications that ingests real-time weather API data, using a CNN for time-series regression and Plotly for an interactive 3D visualization.",
        tags: ["CNN","Computer Vision" ,"Time Series", "Data Visualization", "Plotly", "API", "TensorFlow"],
        imageUrl: "https://images.unsplash.com/photo-1594480621371-290a7d97d02b?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/weather-forecasting-3d",
    },
    {
        title: "Temporal Analysis of Investment Patterns",
        description: "Conducted a comprehensive analysis of investment patterns across fiscal quarters (pre, during, and post-pandemic) using NetworkX to model and visualize temporal networks.",
        tags: ["NetworkX", "Data Analysis", "Pandas", "Python"],
        imageUrl: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/investment-pattern-analysis",
    },
    {
        title: "Agentic Customer Support System",
        description: "Architected an autonomous customer support agent using LangGraph and LLMs, capable of multi-turn conversations, tool usage, and dynamic response generation.",
        tags: ["LangGraph", "LLMs", "Generative AI", "Vector DBs", "FastAPI"],
        imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=600&auto=format&fit=crop",
        githubUrl: "https://github.com/dunkinflicka/agentic-support-system",
    }
];

// --- SKILLS DATA (NEW STRUCTURE) ---

const CORE_STACK_SKILLS = ['Python', 'PyTorch', 'HF Transformers', 'scikit-learn', 'Pandas', 'NumPy', 'FastAPI', 'Docker', 'Kubernetes', 'SQL/Postgres', 'Vector DBs (FAISS/Pinecone)', 'LangChain', 'Git', 'GCP'];

const ARCHITECTURES_DATA = {
    visible: ['Transformers (BERT/GPT)', 'RAG', 'PEFT (LoRA/QLoRA)', 'SFT', 'Alignment (DPO/RLHF)', 'Quantization/Distillation', 'CNN', 'Diffusion'],
    collapsed: ['RNN/LSTM/GRU', 'GANs', 'VAEs', 'Graph NNs']
};

const TOOL_FAMILIES_DATA = [
    {
        title: "ML/LLM Libraries",
        tools: {
            visible: ['PyTorch', 'HF Transformers', 'scikit-learn', 'Pandas', 'NumPy'],
            collapsed: ['TensorFlow', 'Keras']
        }
    },
    {
        title: "Agentic & RAG Orchestration",
        tools: {
            visible: ['LangChain', 'LangGraph'],
            collapsed: ['CrewAI']
        }
    },
    {
        title: "Cloud & DevOps",
        tools: {
            visible: ['Docker', 'Kubernetes', 'Git'],
            collapsed: ['GCP (Vertex AI, GCS)', 'AWS (S3, SageMaker)']
        }
    },
    {
        title: "Databases",
        tools: {
            visible: ['SQL', 'PostgreSQL', 'Vector DBs (FAISS, Pinecone)'],
            collapsed: ['MongoDB', 'NetworkX', 'Kafka']
        }
    },
     {
        title: "Programming & Scripting",
        tools: {
            visible: ['JavaScript', 'Bash'],
            collapsed: ['R', 'Java', 'C']
        }
    },
    {
        title: "Data Visualisation",
        tools: {
            visible: ['Matplotlib', 'Seaborn', 'Plotly'],
            collapsed: ['Power BI', 'Tableau']
        }
    }
];

// --- END SKILLS DATA ---

const PERSONAL_INFO = {
  name: "Anvit More",
  title: "Machine Learning & Artificial Intelligence Engineer",
  email: "anviit22@gmail.com",
  linkedin: "https://linkedin.com/in/anvit22",
  github: "https://github.com/dunkinflicka",
};

const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Inquiry from your Portfolio`;

const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science in Data Science",
    university: "University of Edinburgh, Edinburgh, UK",
    duration: "2023 - 2024",
    details: "Specialized in advanced AI and analytics, with a focus on modern generative and predictive modeling techniques."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    university: "Fergusson College, Pune, India",
    duration: "2020 - 2023",
    details: "Graduated with distinction. Built a strong foundation in algorithms, systems, and applied machine learning."
  }
];

const WORK_EXPERIENCE: WorkExperienceItem[] = [
    {
        role: "Machine Learning & Artificial Intelligence Engineer",
        company: "Plus91 Technology Pvt. Ltd., Pune, India",
        duration: "March 2025 - Present",
        summary: "Set to join the AI in MedCare initiative, focusing on integrating artificial intelligence into clinical workflows and diagnostic support systems.",
        details: [
            "Will engineer deep-learning pipelines for automated recognition and structured extraction of diagnostic test forms using Optical Character Recognition (OCR) and computer vision models.",
            "Tasked with developing a speech-to-text and NLP-based framework to convert doctors' voice notes into structured, readable medical summaries.",
            "Will design and train models for differential diagnosis generation based on patient demographics and presenting symptoms, supporting clinical decision-making.",
            "Responsible for optimizing model accuracy, latency, and compliance with healthcare data standards through iterative fine-tuning and validation."
        ]
    },
    {
        role: "Independent Machine Learning & AI Consultant",
        company: "Freelance / Remote",
        duration: "2022 – Present",
        engagementType: "Project-based / Part-time Engagement",
        summary: "Designing and deploying end-to-end AI/ML pipelines for global clients, leveraging LLMs, generative models, and advanced analytics across predictive intelligence, natural-language processing, and quantitative forecasting.",
        details: [
            "Developed and deployed AI/ML solutions for predictive analytics, NLP, and financial forecasting, optimizing decision-making for clients.",
            "Fine-tuned LLMs (LoRA, PEFT, QLoRA) and built Generative AI models (GANs, VAEs, Transformers) for text, image, and multimodal generation.",
            "Collaborated with remote teams, ensuring seamless AI system integration through effective communication and code reviews."
        ]
    }
];

const LANGUAGES: LanguageItem[] = [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "German", level: "Fluent" },
];

const SECTIONS = ['Hero', 'About', 'Professional Experience', 'Education', 'Projects', 'Skills', 'Languages', 'AI Assistant', 'Contact'];


// --- SVG ICONS ---
const ICON_CLASS = "w-6 h-6";

const GithubIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MailIcon = () => (
  <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const ExternalLinkIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
);

const ChevronDownIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


// --- CUSTOM HOOKS ---
const useOnScreen = (options?: IntersectionObserverInit) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible] as const;
};

// --- COMPONENTS ---

const Section: React.FC<{children: React.ReactNode, className?: string, id?: string}> = ({ children, className, id }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} id={id} className={`min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
             <div className={`w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </section>
    );
};


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId.toLowerCase().replace(/\s+/g, '-'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`fixed top-0 z-30 w-full transition-all duration-300 ${isScrolled ? 'header-scrolled' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 mr-4">
                        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
                           {PERSONAL_INFO.name}
                        </a>
                    </div>
                    <nav className="hidden md:flex flex-grow">
                        <ul className="flex flex-grow justify-end flex-wrap items-center space-x-6">
                            {SECTIONS.slice(1).map(item => (
                                <li key={item}>
                                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={(e) => handleNavClick(e, item)} className="text-[var(--muted)] hover:text-[var(--text)] px-3 py-2 transition duration-150 ease-in-out font-medium">
                                    {item}
                                  </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

const DynamicNetworkCanvas: React.FC<{ onReady: (dataUrl: string) => void }> = ({ onReady }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const onReadyCalled = React.useRef(false);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
        };
        
        setCanvasSize();

        const computedStyles = getComputedStyle(document.documentElement);
        const primaryColor = computedStyles.getPropertyValue('--primary').trim();
        const accentColor = computedStyles.getPropertyValue('--accent').trim();

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
        }
        
        interface Pulse {
            start: Particle;
            end: Particle;
            progress: number;
            speed: number;
        }

        interface Stardust {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            opacity: number;
        }

        let particles: Particle[] = [];
        let pulses: Pulse[] = [];
        let stardusts: Stardust[] = [];
        const mouse = { x: -1000, y: -1000, radius: 150 };
        const connectionRadius = 120;
        
        const init = () => {
            particles = [];
            pulses = [];
            stardusts = [];
            onReadyCalled.current = false;

            const width = window.innerWidth;
            const height = window.innerHeight;
            
            const particleCount = Math.floor((width * height) / 9000);
            const stardustCount = 200;

            for (let i = 0; i < stardustCount; i++) {
                stardusts.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.1,
                    vy: (Math.random() - 0.5) * 0.1,
                    radius: Math.random() * 0.8,
                    opacity: Math.random() * 0.5 + 0.2,
                });
            }

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.7,
                    vy: (Math.random() - 0.5) * 0.7,
                    radius: 1.8 + Math.random() * 1.5
                });
            }
        };

        let animationFrameId: number;
        let time = 0;
        const animate = () => {
            time += 0.02;
            if (!ctx) return;
            const width = window.innerWidth;
            const height = window.innerHeight;
            ctx.clearRect(0, 0, width, height);
            
            // Update and draw stardust (background layer)
            stardusts.forEach(s => {
                s.x += s.vx;
                s.y += s.vy;

                if (s.x < 0) s.x = width;
                if (s.x > width) s.x = 0;
                if (s.y < 0) s.y = height;
                if (s.y > height) s.y = 0;

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(230, 234, 242, ${s.opacity})`;
                ctx.fill();
            });

            const driftX = 0.1;
            const driftY = 0.05;

            // Update and draw main particles
            particles.forEach(p => {
                const dxMouse = p.x - mouse.x;
                const dyMouse = p.y - mouse.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                if (distMouse < mouse.radius) {
                    const force = (mouse.radius - distMouse) / mouse.radius;
                    p.vx += (dxMouse / distMouse) * force * 0.1;
                    p.vy += (dyMouse / distMouse) * force * 0.1;
                }

                p.x += p.vx + driftX;
                p.y += p.vy + driftY;

                // Wrap particles around the screen for a continuous drift effect
                if (p.x < -p.radius) p.x = width + p.radius;
                if (p.x > width + p.radius) p.x = -p.radius;
                if (p.y < -p.radius) p.y = height + p.radius;
                if (p.y > height + p.radius) p.y = -p.radius;
                
                p.vx *= 0.99;
                p.vy *= 0.99;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = primaryColor;
                ctx.fill();
            });
            
            // Create a map to track connections that have an active pulse
            const pulsedConnections = new Map<Particle, Set<Particle>>();
            pulses.forEach(pulse => {
                if (!pulsedConnections.has(pulse.start)) {
                    pulsedConnections.set(pulse.start, new Set());
                }
                pulsedConnections.get(pulse.start)!.add(pulse.end);
            });


            // Draw connections and create pulses
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                    if (dist < connectionRadius) {
                        const isPulsed = (pulsedConnections.has(p1) && pulsedConnections.get(p1)!.has(p2)) ||
                                         (pulsedConnections.has(p2) && pulsedConnections.get(p2)!.has(p1));
                        
                        const opacity = 1.0 - dist / connectionRadius;

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        
                        if (isPulsed) {
                            // This connection is "activated" by a pulse
                            ctx.strokeStyle = `rgba(${parseInt(accentColor.slice(1,3),16)}, ${parseInt(accentColor.slice(3,5),16)}, ${parseInt(accentColor.slice(5,7),16)}, ${opacity})`;
                            ctx.lineWidth = 1.8;
                            ctx.shadowColor = accentColor;
                            ctx.shadowBlur = 5;
                        } else {
                            // Default connection style with "breathing" animation
                            const shimmer = Math.sin(time * 3 + i * 0.1) * 0.5 + 0.5; // Asynchronous shimmer (0 to 1)
                            const animatedOpacity = opacity * (0.3 + shimmer * 0.5); // Modulate base opacity
                            ctx.strokeStyle = `rgba(${parseInt(primaryColor.slice(1,3),16)}, ${parseInt(primaryColor.slice(3,5),16)}, ${parseInt(primaryColor.slice(5,7),16)}, ${animatedOpacity})`;
                            ctx.lineWidth = 1.5;
                        }

                        ctx.stroke();
                        ctx.shadowBlur = 0; // Reset shadow blur

                        if (Math.random() < 0.0008 && pulses.length < 50) {
                            pulses.push({
                                start: p1,
                                end: p2,
                                progress: 0,
                                speed: 0.025 + Math.random() * 0.025
                            });
                        }
                    }
                }
            }
            
            // Update and draw pulse dots
            pulses.forEach((pulse, index) => {
                pulse.progress += pulse.speed;
                if (pulse.progress >= 1) {
                    pulses.splice(index, 1);
                } else {
                    const x = pulse.start.x + (pulse.end.x - pulse.start.x) * pulse.progress;
                    const y = pulse.start.y + (pulse.end.y - pulse.start.y) * pulse.progress;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = accentColor;
                    ctx.shadowColor = accentColor;
                    ctx.shadowBlur = 8;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });


            if (canvasRef.current && !onReadyCalled.current) {
                onReady(canvasRef.current.toDataURL('image/png'));
                onReadyCalled.current = true;
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        let resizeTimer: number;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                setCanvasSize();
                init();
            }, 100);
        };

        init();
        animate();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [onReady]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};


const AnimatedDiv: React.FC<{children: React.ReactNode, className?: string, delay?: number, style?: React.CSSProperties}> = ({ children, className, delay = 0, style }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
    return (
        <div ref={ref} className={`scroll-reveal ${className} ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms`, ...style}}>
            {children}
        </div>
    );
};

const Hero: React.FC<{ onCanvasReady: (dataUrl: string) => void }> = ({ onCanvasReady }) => (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden text-center md:text-left bg-[var(--bg)]">
        <DynamicNetworkCanvas onReady={onCanvasReady} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedDiv delay={100}>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-heading text-[var(--text)] hero-text-shadow">
                    {PERSONAL_INFO.name}
                </h1>
            </AnimatedDiv>
            <AnimatedDiv delay={300}>
                <p className="text-xl md:text-3xl text-[var(--accent)] font-medium mb-6 hero-text-shadow">
                    Architecting Intelligence. Engineering the Future.
                </p>
            </AnimatedDiv>
            <AnimatedDiv delay={500}>
                <p className="text-lg md:text-xl text-[var(--muted)] max-w-3xl mx-auto md:mx-0 mb-10">
                    A Machine Learning & Artificial Intelligence Engineer passionate about building intelligent systems that solve complex, real-world problems.
                </p>
            </AnimatedDiv>
            <AnimatedDiv delay={700} className="flex justify-center md:justify-start items-center gap-6">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2"><GithubIcon /></a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2"><LinkedinIcon /></a>
                <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2"><MailIcon /></a>
            </AnimatedDiv>
        </div>
    </section>
);


const SectionTitle: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
    <AnimatedDiv>
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-[var(--text)] mb-16 font-heading ${className}`}>
            {children}
        </h2>
    </AnimatedDiv>
);

const About: React.FC = () => (
    <Section id="about">
      <div className="max-w-5xl mx-auto">
            <SectionTitle>About Me</SectionTitle>
            <AnimatedDiv className="group project-card flex flex-col md:flex-row items-center gap-12 content-card p-6 sm:p-8 md:p-12 rounded-3xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent)]/10 glowing-border" delay={200}>
                <div className="md:w-1/3 flex flex-col items-center gap-6">
                    <div className="w-56 h-56 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-[var(--primary)]/50 relative image-container">
                      <img src="https://storage.googleapis.com/garden-prod/web-apps/b5536417-06c8-4720-9154-180a8b940026" alt={PERSONAL_INFO.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"/>
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2"><GithubIcon /></a>
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2"><LinkedinIcon /></a>
                        <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-110 p-2"><MailIcon /></a>
                    </div>
                </div>
                <div className="md:w-2/3 text-lg text-[var(--muted)] space-y-4">
                    <p>As an AI & ML Engineer from the University of Edinburgh, I specialize in building scalable, real-world solutions. My work spans predictive analytics, generative AI, and agentic frameworks, focusing on developing forward-looking systems that push the boundaries of applied machine learning.</p>
                </div>
            </AnimatedDiv>
      </div>
    </Section>
);

const ProfessionalExperience: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <Section id="professional-experience">
            <div className="max-w-4xl mx-auto w-full">
                <SectionTitle>Professional Experience</SectionTitle>
                <div ref={ref} className="relative ml-4">
                    <div
                        className="absolute left-0 top-0 h-full w-0.5 bg-[var(--border)] origin-top transition-transform duration-1000 ease-out"
                        style={{ transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
                    />
                    {WORK_EXPERIENCE.map((item, index) => (
                        <AnimatedDiv
                            key={index}
                            className="group mb-12 pl-10 relative"
                            delay={200 * (index + 1)}
                        >
                            <div className="absolute left-[1px] -translate-x-1/2 top-1.5 w-4 h-4 bg-[var(--surface)] rounded-full border-2 border-[var(--accent)] transition-all duration-500 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-[var(--accent)]/50" />
                            <h3 className="text-xl font-bold text-[var(--text)] font-heading floating-text-shadow">{item.role}</h3>
                            <p className="block mb-2 text-md font-normal leading-none text-[var(--accent)]">
                                {item.company} | {item.duration}{item.engagementType && ` | ${item.engagementType}`}
                            </p>
                            {item.summary && <p className="text-base font-normal text-[var(--muted)] mb-3">{item.summary}</p>}
                            <ul className="list-disc list-inside text-base font-normal text-[var(--muted)] space-y-2">
                                {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                            </ul>
                        </AnimatedDiv>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const Education: React.FC = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <Section id="education">
          <div className="max-w-4xl mx-auto w-full">
                <SectionTitle>Education</SectionTitle>
                <div ref={ref} className="relative ml-4">
                    <div 
                        className="absolute left-0 top-0 h-full w-0.5 bg-[var(--border)] origin-top transition-transform duration-1000 ease-out"
                        style={{ transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}
                    />
                    {EDUCATION.map((item, index) => (
                        <AnimatedDiv 
                          key={index} 
                          className="group mb-12 pl-10 relative" 
                          delay={200 * (index + 1)}
                        >
                            <div className="absolute left-[1px] -translate-x-1/2 top-1.5 w-4 h-4 bg-[var(--surface)] rounded-full border-2 border-[var(--primary)] transition-all duration-500 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-[var(--primary)]/50" />
                            <h3 className="text-xl font-bold text-[var(--text)] font-heading floating-text-shadow">{item.degree}</h3>
                            <p className="block mb-2 text-md font-normal leading-none text-[var(--primary)]">{item.university} | {item.duration}</p>
                            <p className="text-base font-normal text-[var(--muted)] mb-4">{item.details}</p>
                        </AnimatedDiv>
                    ))}
                </div>
           </div>
        </Section>
    );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group relative overflow-hidden content-card project-card rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent)]/10 glowing-border">
        <div className="image-container h-48">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
        </div>
        <div className="p-6 relative z-10">
            <h3 className="text-lg font-bold text-[var(--text)] mb-2 font-heading">{project.title}</h3>
            <p className="text-[var(--muted)] mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-[var(--primary)]/20 text-[var(--primary)] font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
             <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] p-2 bg-black/50 rounded-full transition-colors backdrop-blur-sm"><GithubIcon /></a>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] p-2 bg-black/50 rounded-full transition-colors backdrop-blur-sm"><ExternalLinkIcon /></a>}
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    return (
        <Section id="projects">
            <div className="max-w-7xl mx-auto">
                <SectionTitle>Projects</SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((p, i) => <AnimatedDiv key={p.title} delay={i * 150}><ProjectCard project={p} /></AnimatedDiv>)}
                </div>
            </div>
        </Section>
    );
};

const SkillTag: React.FC<{ children: React.ReactNode; isCore?: boolean }> = ({ children, isCore }) => (
    <span className={`inline-block text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${isCore ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : 'bg-[var(--border)] text-[var(--muted)] hover:bg-[var(--primary)]/20 hover:text-[var(--primary)]'}`}>
        {children}
    </span>
);

const AccordionItem: React.FC<{ family: typeof TOOL_FAMILIES_DATA[0], delay: number }> = ({ family, delay }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [showMore, setShowMore] = React.useState(false);
    
    const { title, tools } = family;
    const hasCollapsedTools = tools.collapsed && tools.collapsed.length > 0;

    return (
        <AnimatedDiv delay={delay} className="content-card rounded-2xl overflow-hidden glowing-border">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-[var(--text)] hover:bg-[var(--border)]/50 transition-colors"
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <ChevronDownIcon className={`w-5 h-5 text-[var(--muted)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
            >
                <div className="p-5 border-t border-[var(--border)]">
                    <div className="flex flex-wrap gap-3">
                        {tools.visible.map(tool => (
                            <SkillTag key={tool}>{tool}</SkillTag>
                        ))}
                        {showMore && tools.collapsed?.map(tool => (
                            <SkillTag key={tool}>{tool}</SkillTag>
                        ))}
                    </div>
                    {hasCollapsedTools && (
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-sm text-[var(--accent)] hover:underline mt-4"
                        >
                            {showMore ? 'Show Less' : `+${tools.collapsed.length} more`}
                        </button>
                    )}
                </div>
            </div>
        </AnimatedDiv>
    );
};


const Skills: React.FC = () => {
    const [isArchExpanded, setIsArchExpanded] = React.useState(false);

    return (
        <Section id="skills">
            <div className="max-w-5xl mx-auto w-full">
                <SectionTitle>Technical Toolkit</SectionTitle>
                
                <div className="space-y-12">
                    {/* Core Stack */}
                    <AnimatedDiv delay={100}>
                        <div className="content-card p-6 sm:p-8 rounded-2xl highlight-card glowing-border">
                            <h3 className="text-xl font-bold text-[var(--primary)] mb-5 font-heading">Core Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {CORE_STACK_SKILLS.map(skill => <SkillTag key={skill} isCore>{skill}</SkillTag>)}
                            </div>
                        </div>
                    </AnimatedDiv>

                    {/* Architectures & Methods */}
                    <AnimatedDiv delay={200}>
                        <div className="content-card p-6 sm:p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-[var(--text)] mb-5 font-heading">Architectures & Methods</h3>
                            <div className="flex flex-wrap gap-3">
                                {ARCHITECTURES_DATA.visible.map(arch => <SkillTag key={arch}>{arch}</SkillTag>)}
                                {isArchExpanded && ARCHITECTURES_DATA.collapsed.map(arch => (
                                    <SkillTag key={arch}>{arch}</SkillTag>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsArchExpanded(!isArchExpanded)}
                                className="text-sm text-[var(--accent)] hover:underline mt-4 font-semibold"
                            >
                                {isArchExpanded ? 'Show Less' : `+${ARCHITECTURES_DATA.collapsed.length} more`}
                            </button>
                        </div>
                    </AnimatedDiv>

                    {/* Libraries & Tools */}
                    <div>
                        <AnimatedDiv delay={300}>
                            <h3 className="text-2xl font-bold text-center text-[var(--text)] my-12 font-heading">Libraries & Tools by Family</h3>
                        </AnimatedDiv>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {TOOL_FAMILIES_DATA.map((family, index) => (
                                <AccordionItem key={family.title} family={family} delay={400 + index * 100} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};


const Languages: React.FC = () => (
    <Section id="languages">
        <div className="max-w-3xl mx-auto">
            <SectionTitle>Languages</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {LANGUAGES.map((lang, index) => (
                    <AnimatedDiv key={lang.name} delay={index * 100}>
                        <div className="content-card p-6 rounded-2xl glowing-border h-full flex flex-col justify-center items-center">
                            <h3 className="text-xl font-bold text-[var(--text)] font-heading">{lang.name}</h3>
                            <p className="text-[var(--primary)]">{lang.level}</p>
                        </div>
                    </AnimatedDiv>
                ))}
            </div>
        </div>
    </Section>
);

const AiAvatar = ({ isLoading }: { isLoading: boolean }) => (
    <div className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] ${isLoading ? 'animate-pulse' : ''}`}>
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    </div>
);

const AiAssistant: React.FC = () => {
    const [aiResponse, setAiResponse] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const hasBeenClicked = React.useRef(false);

    const handleAskAi = async () => {
        if (isLoading) return;

        setIsLoading(true);
        setError('');
        setAiResponse('');
        hasBeenClicked.current = true;

        try {
            const stream = await getAiAssistantResponseStream();
            
            for await (const chunk of stream) {
                setAiResponse((prev) => prev + chunk.text);
            }
        } catch (err: any) {
            const errorMessage = err.message || 'An unknown error occurred.';
            setError(errorMessage);
            setAiResponse(`Sorry, I encountered an error. Please try again. (${errorMessage})`);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <Section id="ai-assistant">
          <div className="max-w-3xl mx-auto text-center">
                 <SectionTitle>AI Assistant</SectionTitle>
                 <AnimatedDiv delay={200} className="w-full">
                     <div className="content-card p-6 sm:p-8 rounded-3xl glowing-border">
                        <div className="flex justify-center mb-6">
                            <AiAvatar isLoading={isLoading} />
                        </div>
                        <p className="text-[var(--muted)] mb-6">
                            Explore my latest projects and experiments through a custom-built AI assistant powered by an integrated LLM backend.
                        </p>
                        <button 
                            onClick={handleAskAi}
                            disabled={isLoading}
                            className="px-6 py-3 bg-[var(--accent)] text-[var(--primary-contrast)] rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed glowing-border flex items-center gap-2 mx-auto"
                        >
                            {isLoading ? 'Generating Insight...' : 'Explore with AI'}
                        </button>

                        {hasBeenClicked.current && (
                             <div className={`mt-8 text-left p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] min-h-[100px] transition-opacity duration-500 ${aiResponse || error ? 'opacity-100' : 'opacity-0'}`}>
                                 <p className="whitespace-pre-wrap leading-relaxed">
                                     {aiResponse}
                                     {isLoading && <span className="blinking-cursor">|</span>}
                                 </p>
                             </div>
                        )}
                     </div>
                 </AnimatedDiv>
                 {error && !isLoading && <p className="mt-4 text-red-400 text-center">{error}</p>}
            </div>
        </Section>
    );
};

const Contact: React.FC = () => (
    <Section id="contact" className="text-center">
      <div className="max-w-3xl mx-auto">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="content-card p-6 sm:p-8 md:p-12 rounded-3xl glowing-border">
                <AnimatedDiv delay={200}>
                  <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto floating-text-shadow">
                      I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
                  </p>
                </AnimatedDiv>
                <AnimatedDiv delay={400} className="flex justify-center items-center gap-8">
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] transition-transform duration-300 hover:scale-110"><GithubIcon /></a>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] transition-transform duration-300 hover:scale-110"><LinkedinIcon /></a>
                    <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--text)] transition-transform duration-300 hover:scale-110"><MailIcon /></a>
                </AnimatedDiv>
            </div>
        </div>
    </Section>
);

const Footer: React.FC = () => (
     <footer className="text-center text-[var(--muted)]/80 text-sm py-8 relative z-10">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
     </footer>
);

export default function App() {
  const [staticBg, setStaticBg] = React.useState('');
  
  return (
    <div className="w-full relative">
      {staticBg && (
        <div 
          className="fixed top-0 left-0 w-full h-full z-0"
          style={{ 
            backgroundImage: `url(${staticBg})`,
            opacity: 0.3,
          }} 
        />
      )}
      <Header />
      <main className="relative z-10">
          <Hero onCanvasReady={setStaticBg} />
          <About />
          <ProfessionalExperience />
          <Education />
          <Projects />
          <Skills />
          <Languages />
          <AiAssistant />
          <Contact />
      </main>
      <Footer />
    </div>
  );
}