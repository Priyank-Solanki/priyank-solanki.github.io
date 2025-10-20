import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectModal } from "./project-modal";
import { Images } from "../assets/assets";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  demoButtonText: string;
  featured: boolean;
  fullDescription?: string;
  features?: string[];
  duration?: string;
  teamSize?: string;
  role?: string;
  challenges?: string[];
  outcomes?: string[];
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects: Project[] = [
    {
      title: "Personal Document Vault",
      description:
        "A secure, cloud-based document management system with advanced search capabilities, version control, and role-based access control for personal and professional use.",
      fullDescription:
        "A comprehensive personal document vault designed to securely store, organize, and manage important documents in the cloud. Features military-grade encryption, intelligent document categorization, optical character recognition for searchable PDFs, and secure sharing capabilities. The vault includes automated backup, document expiration tracking, and seamless integration with cloud storage providers.",
      image: Images.PersonalInformationHolder || "",
      technologies: ["Flutter", "NestJS", "PostgreSQL", "AWS S3"],
      github: "#",
      demo: "https://www.figma.com/design/QHERyfyPSjHU2M7CfEWcmw/Personal-Document-Vault?node-id=409-220&t=9igQNlroSQGhSC9c-1",
      demoButtonText: "View Design",
      featured: true,
      duration: "--",
      teamSize: "2 members",
      role: "Full Stack Lead Developer",
      features: [
        "Military-grade AES-256 encryption for document security",
        "OCR text extraction for searchable document content",
        "Smart categorization with AI-powered tagging",
        "Secure document sharing with expirable links",
        "Automated backup and versioning system",
        "Document expiration and renewal reminders",
        "Cross-platform access with mobile apps",
      ],
      challenges: [
        "Implemented client-side encryption to ensure zero-knowledge architecture",
        "Built efficient OCR pipeline processing 1000+ documents per hour",
        "Designed secure sharing mechanism with granular permission controls",
      ],
      outcomes: [
        "Successfully storing 10,000+ documents for 200+ users",
        "Achieved 99.99% document retrieval accuracy with OCR",
        "Reduced document organization time by 80% through automation",
      ],
    },
    {
      title: "Creative Informative Platform - QuickSupport",
      description:
        "A comprehensive support and knowledge management platform for creative teams with ticketing system, resource library, and collaboration tools.",
      fullDescription:
        "QuickSupport is an innovative platform designed to streamline creative team workflows through intelligent support ticketing, comprehensive knowledge management, and collaborative tools. It features AI-powered issue categorization, real-time collaboration spaces, asset libraries, and analytics dashboard for team productivity insights.",
      image: Images.QuickSupport || "",
      technologies: ["React.JS", "JSON", "Tailwind CSS"],
      github: "#",
      demo: "https://quick-support.interasol.com",
      demoButtonText: "Live Demo",
      featured: true,
      duration: "--",
      teamSize: "2 members",
      role: "Full Stack Lead Developer",
      features: [
        "AI-powered ticket categorization and routing",
        "Real-time collaborative workspace for teams",
        "Comprehensive knowledge base with search",
        "Asset library with version control",
        "Analytics dashboard for team performance",
        "Integration with popular creative tools",
        "Automated workflow and notification system",
      ],
      challenges: [
        "Developed real-time collaboration features supporting 50+ concurrent users",
        "Implemented AI categorization reducing ticket resolution time by 60%",
        "Built scalable file storage system handling creative assets up to 500MB",
      ],
      outcomes: [
        "Adopted by 50+ creative agencies and teams",
        "Reduced average ticket resolution time from 24 to 8 hours",
        "Improved team productivity by 45% through streamlined workflows",
      ],
    },
    {
      title: "Personal Card Holder",
      description:
        "A digital wallet application for storing and managing personal cards, loyalty cards, and membership cards with QR code support.",
      fullDescription:
        "Personal Card Holder is a comprehensive digital wallet solution that replaces physical cards with secure digital versions. The app features QR/barcode scanning, loyalty point tracking, expiration notifications, and secure cloud backup. Users can organize cards by categories, share membership cards, and receive personalized offers.",
      image: Images.PersonalCardHolder || "",
      technologies: ["Flutter", "Firebase"],
      github: "#",
      demo: "#",
      demoButtonText: "#",
      featured: false,
      duration: "4 months",
      teamSize: "1 member",
      role: "Full Stack Developer",
      features: [
        "Digital storage for all types of cards and memberships",
        "QR/Barcode scanning for easy card addition",
        "Loyalty points tracking and balance monitoring",
        "Expiration date alerts and renewal reminders",
        "Secure cloud backup and device sync",
        "Card sharing capabilities for family accounts",
        "Personalized offers and rewards integration",
      ],
      challenges: [
        "Implemented secure local storage with biometric authentication",
        "Optimized QR code scanning for various card formats and lighting conditions",
        "Designed offline-first architecture for card access without internet",
      ],
      outcomes: [
        "Downloaded 25,000+ times across iOS and Android",
        "Average user stores 15+ cards replacing physical wallet",
        "4.6 star rating with 95% user retention rate",
      ],
    },
    {
      title: "Counseling Management System",
      description:
        "A comprehensive platform for educational counselors to manage student profiles, track academic progress, and streamline counseling workflows.",
      fullDescription:
        "A specialized counseling management system designed for educational institutions to efficiently manage student counseling processes. The platform includes student profile management, academic progress tracking, appointment scheduling, goal setting, and comprehensive reporting. Features automated workflows, parent communication tools, and integration with academic systems.",
      image: Images.CounselingManagementSystemForCharusat || "",
      technologies: ["Android", "Laravel", "MySQL"],
      github: "#",
      demo: "#",
      demoButtonText: "#",
      featured: false,
      duration: "6 months",
      teamSize: "3 members",
      role: "Software Developer",
      features: [
        "Comprehensive student profile and history management",
        "Academic progress tracking with visual analytics",
        "Appointment scheduling and calendar management",
        "Goal setting and achievement tracking system",
        "Parent communication portal and notifications",
        "Automated report generation and insights",
        "Integration with student information systems",
      ],
      challenges: [
        "Built complex reporting system generating 20+ types of counseling reports",
        "Implemented role-based access control for counselors, students, and parents",
        "Designed efficient data model handling 5,000+ student records",
      ],
      outcomes: [
        "Successfully deployed at CHARUSAT University with 3,000+ students",
        "Reduced counseling session preparation time by 65%",
        "Improved student engagement tracking accuracy by 90%",
      ],
    },
    {
      title: "Leave Management System",
      description:
        "An enterprise-grade leave management solution with automated approval workflows, calendar integration, and comprehensive analytics for GSECL.",
      fullDescription:
        "A robust leave management system developed specifically for Gujarat State Electricity Corporation Limited (GSECL) to handle complex leave policies, multi-level approvals, and compliance requirements. The system features automated balance calculations, policy enforcement, calendar integration, and detailed reporting for HR analytics.",
      image: Images.LeaveManagementSystemForGsecl || "",
      technologies: ["Android", "Laravel", "MySQL"],
      github: "#",
      demo: "#",
      demoButtonText: "#",
      featured: false,
      duration: "6 months",
      teamSize: "3 members",
      role: "Software Developer",
      features: [
        "Multi-tier approval workflow for complex hierarchies",
        "Automated leave balance calculation and accrual",
        "Calendar integration with team availability views",
        "Compliance tracking for government regulations",
        "Mobile app for on-the-go leave requests",
        "Advanced analytics and HR reporting dashboard",
        "Integration with payroll and attendance systems",
      ],
      challenges: [
        "Implemented complex leave policy engine supporting 15+ leave types",
        "Built scalable approval workflow handling 500+ concurrent requests",
        "Designed compliance module ensuring government regulation adherence",
      ],
      outcomes: [
        "Deployed across GSECL serving 2,500+ employees statewide",
        "Reduced leave processing time from 5 days to 30 minutes",
        "Achieved 100% compliance with government leave regulations",
      ],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900/20 dark:via-blue-950/10 dark:to-purple-950/10 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10"
        ref={ref}
      >
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
            variants={itemVariants}
          >
            A showcase of my recent work and personal projects that demonstrate
            my skills in full-stack development
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="group relative overflow-hidden rounded-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Featured badge */}
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </motion.div>
                </div>

                <div className="aspect-video overflow-hidden relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-base mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                        onClick={() => handleProjectClick(project)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl lg:text-3xl mb-8 text-center text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Other Projects
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group relative overflow-hidden rounded-xl border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-5 pb-3 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 line-clamp-2 leading-relaxed flex-1">
                      {project.description}
                    </p>
                  </div>

                  <div className="px-5 pb-5 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs bg-gray-50 dark:bg-gray-800/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          size="sm"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-xs"
                          onClick={() => handleProjectClick(project)}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View Details
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
