import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight,
  Terminal,
  Database,
  Cloud,
  Server,
  Code2,
  Users,
  Briefcase,
  GraduationCap,
  Download
} from "lucide-react";
import { 
  SiDotnet, 
  SiPostgresql, 
  SiDocker, 
  SiKubernetes, 
  SiSpringboot, 
  SiReact, 
  SiAngular,
  SiMysql,
  SiRedis,
  SiGit,
  SiJenkins,
  SiGraphql
} from "react-icons/si";

const queryClient = new QueryClient();

// Data Configuration
const DATA = {
  name: "Muhammad Zahidur Rahman",
  title: "Engineering Leader | System Architect | Technical Lead",
  location: "Dhaka, Bangladesh",
  email: "mzahidur.rahman@gmail.com",
  phone: "+88 01730-699036",
  linkedin: "https://www.linkedin.com/in/mzahidur/",
  github: "https://github.com/mzahidur",
  avatar: "https://avatars.githubusercontent.com/u/6462958?v=4",
  summary: "Engineering Leader with 16+ years of experience designing, modernizing, and scaling enterprise-grade software systems. Proven track record of leading cross-functional teams across backend, frontend, QA, and DevOps while actively contributing to architecture and hands-on development. Strong expertise in .NET, SQL Server, PostgreSQL, distributed systems, and SaaS transformation initiatives. Experienced in modernizing legacy monolithic systems into scalable, API-driven platforms hosted on cloud and hybrid infrastructure. Recognized for balancing business delivery with architectural integrity, production reliability, and continuous technical improvement.",
  experience: [
    {
      id: 1,
      role: "System Analyst & Technological Lead",
      company: "I-Clique Solutions Limited",
      location: "Dhaka, Bangladesh",
      period: "May 2025 – Present (10 months)",
      summary: "Leading technical direction for financial enterprise systems with high transaction volumes and complex integration requirements.",
      highlights: [
        "Owned architecture and modernization of high-volume financial processing platforms (BOS & FEP), evolving them into scalable, service-oriented SaaS systems",
        "Designed and governed REST API contracts for integration with external financial systems",
        "Introduced microservice-based architecture to support high-volume, concurrent merchant operations",
        "Automated 95% of reconciliation workflows",
        "Reduced administrative overhead by 30% through workflow automation and centralized dashboards",
        "Improved system reliability using Redis-based caching and optimized database queries"
      ],
      tech: ["Java Spring Boot", "MySQL", "Redis", "REST APIs", "Docker", "Containerized Microservices", "Oracle DB", "Spring Batch", "Event-Driven Processing"]
    },
    {
      id: 2,
      role: "Software Development Lead Engineer",
      company: "Enosis Solutions Ltd.",
      location: "Dhaka, Bangladesh",
      period: "July 2022 – September 2024 (2 years 5 months)",
      summary: "Led enterprise application development and modernization efforts across retail, healthcare, and utility domains.",
      highlights: [
        "Managed and mentored 10+ engineers across backend and frontend teams",
        "Led sprint planning, backlog refinement, and cross-team architectural reviews",
        "Directed modernization of legacy systems into Azure-hosted SaaS platforms",
        "Conducted POCs for microservices architecture transformation",
        "Led projects: Denticon (Dental Practice Management SaaS), Storm Manager (Emergency Management Platform), Retail POS System"
      ],
      tech: [".NET Core", "SQL Server", "Azure", "Docker", "Kubernetes", "Angular", "React", "SignalR"]
    },
    {
      id: 3,
      role: "Lead Software Engineer, Team Leader",
      company: "WellDev Bangladesh Ltd.",
      location: "Dhaka, Bangladesh",
      period: "August 2020 – June 2022 (1 year 11 months)",
      summary: "Led and mentored PHP/Drupal teams across 20+ projects for conglomerates, ensuring agile sprints, CI/CD quality, and client reporting.",
      highlights: [],
      tech: []
    },
    {
      id: 4,
      role: "Senior Software Engineer, Team Lead",
      company: "Teknordic",
      location: "Dhaka, Bangladesh",
      period: "November 2019 – August 2020 (10 months)",
      summary: "",
      highlights: [
        "Led MVP launch of multi-vendor booking platform",
        "Integrated 35+ supplier systems using REST/GraphQL APIs",
        "Designed payment and third-party integration modules"
      ],
      tech: [".NET Web API", "Angular", "SQL Server"]
    },
    {
      id: 5,
      role: "Lead Software Engineer",
      company: "The Jaxara IT Ltd.",
      location: "Dhaka, Bangladesh",
      period: "October 2017 – May 2019 (1 year 8 months)",
      summary: "",
      highlights: [
        "Led 3 CRM transformation projects improving operational efficiency by 25-40%",
        "Customized and extended Microsoft Dynamics CRM for enterprise sales pipelines",
        "Developed C# plugins, automation workflows, and integration services"
      ],
      tech: ["C#", "SQL Server", "REST APIs", "Enterprise Integration", "Microsoft Dynamics CRM"]
    }
  ],
  education: [
    {
      degree: "Masters (Alumni), Software Engineering",
      institution: "Queen's University",
      period: "2008-2010"
    },
    {
      degree: "Honors, Computer Science",
      institution: "Independent University, Bangladesh",
      period: "2001-2006"
    }
  ],
  skills: {
    backend: ["C#", ".NET Core", "ASP.NET Web API", "Java (Spring Boot)", "Distributed Systems", "Event-Driven Architecture"],
    databases: ["Microsoft SQL Server", "PostgreSQL", "Oracle", "MySQL"],
    infrastructure: ["Azure", "Docker", "Kubernetes", "Linux", "Windows", "CI/CD", "Jenkins", "Git"],
    integration: ["REST APIs", "GraphQL", "Event-based messaging", "Microservices", "API contract governance"],
    cloud: ["Azure SaaS hosting", "Monitoring", "Deployment governance", "Performance troubleshooting"]
  },
  competencies: [
    "Engineering Team Leadership (5-15 engineers)",
    "Enterprise .NET Architecture",
    "Legacy System Modernization",
    "SaaS Transformation & Multi-Tenant Design",
    "MSSQL & PostgreSQL Performance Optimization",
    "API-Driven System Integration",
    "Distributed Systems & Microservices",
    "Production Reliability & Scalability",
    "CI/CD & DevOps Collaboration",
    "Cross-Cultural Team Leadership",
    "Agile & Sprint Planning",
    "Technical Debt Reduction Strategy"
  ]
};

// Reusable Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      
      {/* NAVIGATION / HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-lg tracking-tight">
            M<span className="text-primary">Z</span>R.
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#expertise" className="hover:text-foreground transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#leadership" className="hover:text-foreground transition-colors">Leadership</a>
          </nav>
          <a 
            href={`mailto:${DATA.email}`}
            data-testid="link-contact-nav"
            className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-md text-sm font-semibold transition-all duration-300"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main className="pt-24 pb-24">
        {/* HERO SECTION */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20 lg:py-32 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase">
              <Terminal size={14} />
              16+ Years Experience
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
                Architecting <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  Enterprise Scale
                </span>
              </h1>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm <strong className="text-foreground font-semibold">{DATA.name}</strong>, an Engineering Leader specializing in modernizing legacy monoliths into highly scalable, distributed SaaS platforms.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
              <a href={DATA.linkedin} target="_blank" rel="noreferrer" data-testid="link-linkedin" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href={DATA.github} target="_blank" rel="noreferrer" data-testid="link-github" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href={`mailto:${DATA.email}`} data-testid="link-email" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
                <span className="text-sm font-medium">{DATA.email}</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={20} />
                <span className="text-sm font-medium">{DATA.location}</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-2">
              <button
                data-testid="button-download-cv"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 no-print"
              >
                <Download size={16} />
                Download CV
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-48 h-48 md:w-72 md:h-72 shrink-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute inset-2 rounded-full border-2 border-primary/30 border-dashed animate-[spin_20s_linear_infinite]" />
            <img 
              src={DATA.avatar} 
              alt={DATA.name}
              data-testid="img-avatar"
              className="w-full h-full object-cover rounded-full border-4 border-background relative z-10 shadow-2xl shadow-black/50"
            />
          </motion.div>
        </section>

        {/* PROFILE SUMMARY */}
        <section className="border-y border-border/50 bg-muted/20">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-4xl"
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Executive Summary</h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-display leading-tight text-foreground/90">
                "Proven track record of leading cross-functional teams across backend, frontend, QA, and DevOps while actively contributing to architecture and hands-on development."
              </p>
              <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-3xl">
                Recognized for balancing business delivery with architectural integrity, production reliability, and continuous technical improvement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CORE COMPETENCIES & TECH GRID */}
        <section id="expertise" className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-12 flex items-center gap-4">
              <Server className="text-primary" /> Architecture & Expertise
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Backend & Arch", icon: <Code2 className="text-primary mb-4" size={28}/>, items: DATA.skills.backend },
                { title: "Databases", icon: <Database className="text-primary mb-4" size={28}/>, items: DATA.skills.databases },
                { title: "Cloud & DevOps", icon: <Cloud className="text-primary mb-4" size={28}/>, items: DATA.skills.infrastructure },
                { title: "System Integration", icon: <Terminal className="text-primary mb-4" size={28}/>, items: DATA.skills.integration },
              ].map((category, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors">
                  {category.icon}
                  <h3 className="text-lg font-bold mb-4 font-display">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ArrowRight size={14} className="text-primary/70 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-16 flex flex-wrap gap-4 justify-center py-10 border-t border-border/30 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <SiDotnet size={40} className="text-[#512BD4]" />
              <SiSpringboot size={40} className="text-[#6DB33F]" />
              <SiPostgresql size={40} className="text-[#4169E1]" />
              <SiMysql size={40} className="text-[#4479A1]" />
              <SiRedis size={40} className="text-[#DC382D]" />
              <SiDocker size={40} className="text-[#2496ED]" />
              <SiKubernetes size={40} className="text-[#326CE5]" />
              <SiReact size={40} className="text-[#61DAFB]" />
              <SiAngular size={40} className="text-[#DD0031]" />
              <SiGit size={40} className="text-[#F05032]" />
              <SiJenkins size={40} className="text-[#D24939]" />
              <SiGraphql size={40} className="text-[#E10098]" />
            </motion.div>
          </motion.div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="bg-muted/10 border-y border-border/50">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-16 flex items-center gap-4">
                <Briefcase className="text-primary" /> Career Trajectory
              </motion.h2>

              <div className="space-y-12">
                {DATA.experience.map((job, index) => (
                  <motion.div key={job.id} variants={fadeInUp} className="relative pl-8 md:pl-0">
                    <div className="hidden md:block absolute left-[180px] top-0 bottom-0 w-px bg-border/50" />
                    <div className="hidden md:block absolute left-[176px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                    
                    <div className="md:grid md:grid-cols-[160px_1fr] md:gap-12 items-start">
                      <div className="mb-4 md:mb-0 md:text-right">
                        <div className="text-sm font-bold text-primary">{job.period.split('–')[0].trim()} –</div>
                        <div className="text-sm font-bold text-primary">{job.period.split('–')[1].split('(')[0].trim()}</div>
                        <div className="text-xs text-muted-foreground mt-1">{job.period.match(/\((.*?)\)/)?.[1]}</div>
                      </div>
                      
                      <div className="bg-card border border-border/50 p-6 md:p-8 rounded-xl shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">{job.role}</h3>
                        <div className="text-primary font-medium mt-1">{job.company} <span className="text-muted-foreground font-normal text-sm ml-2">| {job.location}</span></div>
                        
                        {job.summary && (
                          <p className="mt-4 text-muted-foreground leading-relaxed">
                            {job.summary}
                          </p>
                        )}
                        
                        {job.highlights.length > 0 && (
                          <ul className="mt-4 space-y-2">
                            {job.highlights.map((highlight, i) => (
                              <li key={i} className="text-sm text-foreground/80 flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {job.tech.length > 0 && (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {job.tech.map((tech, i) => (
                              <span key={i} className="px-2.5 py-1 rounded bg-muted/50 border border-border/50 text-xs text-muted-foreground font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* LEADERSHIP & CORE COMPETENCIES */}
        <section id="leadership" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col lg:flex-row gap-16">
          <motion.div 
            className="lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-6 flex items-center gap-4">
              <Users className="text-primary" /> Leadership
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
              7+ years in technical leadership roles, directing teams of up to 15 engineers through complex enterprise transformations.
            </motion.p>
            <motion.div variants={fadeInUp} className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="font-medium text-foreground italic">
                "Strong communicator capable of explaining architecture to both executives and engineers."
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {DATA.competencies.map((comp, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50">
                <div className="w-8 h-8 rounded bg-muted flex items-center justify-center shrink-0">
                  <ArrowRight size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium pt-1">{comp}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* EDUCATION */}
        <section className="bg-muted/10 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-display font-bold mb-12 flex items-center justify-center gap-4">
                <GraduationCap className="text-primary" /> Education
              </motion.h2>
              
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                {DATA.education.map((edu, i) => (
                  <motion.div key={i} variants={fadeInUp} className="text-center">
                    <h3 className="text-lg font-bold font-display">{edu.institution}</h3>
                    <p className="text-primary font-medium my-1">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/50 bg-background py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display font-bold text-xl tracking-tight text-muted-foreground">
            M<span className="text-primary">Z</span>R.
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-left">
            Based in {DATA.location} • Available for strategic engineering roles.
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${DATA.phone}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
              <Phone size={16} /> {DATA.phone}
            </a>
            <a href={`mailto:${DATA.email}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
              <Mail size={16} /> Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
