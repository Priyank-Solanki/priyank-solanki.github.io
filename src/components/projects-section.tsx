import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectModal } from './project-modal';
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
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const projects: Project[] = [
    {
      title: 'Personal Document Vault',
      description: 'A secure, cloud-based document management system with advanced search capabilities, version control, and role-based access control.',
      fullDescription: 'A comprehensive document management system designed to securely store, organize, and share documents in the cloud. Features enterprise-grade security with encryption at rest and in transit, advanced full-text search, automatic version control, and granular role-based access control. The system includes real-time collaboration features, automated backup systems, and compliance with industry standards.',
      image: Images.PersonalInformationHolder || '',
      technologies: ['React.js', 'NestJS', 'PostgreSQL', 'AWS S3', 'Docker', 'Redis', 'Elasticsearch'],
      github: '#',
      demo: 'https://www.figma.com/design/QHERyfyPSjHU2M7CfEWcmw/Personal-Document-Vault?node-id=409-220&t=9igQNlroSQGhSC9c-1',
      demoButtonText: 'View Design',
      featured: true,
      duration: '6 months',
      teamSize: '4 members',
      role: 'Full Stack Lead Developer',
      features: [
        'End-to-end encryption for all documents',
        'Advanced full-text search with filters and facets',
        'Automatic version control with diff viewer',
        'Role-based access control with custom permissions',
        'Real-time collaboration and document sharing',
        'Automated backup and disaster recovery',
        'Compliance dashboard for audit trails'
      ],
      challenges: [
        'Implemented efficient file chunking for large document uploads, reducing upload time by 60%',
        'Designed scalable search architecture using Elasticsearch for sub-second query responses',
        'Built robust version control system with efficient storage using delta compression'
      ],
      outcomes: [
        'Successfully deployed to production serving 500+ active users',
        'Reduced document retrieval time by 75% compared to legacy system',
        'Achieved 99.9% uptime with automated monitoring and alerts'
      ]
    },
    {
      title: 'Creative Informative Platform - QuickSupport',
      description: 'A comprehensive content management platform for creative professionals with portfolio showcase, client management, and project tracking.',
      fullDescription: 'An all-in-one platform for creative professionals to manage their portfolio, clients, and projects. Built with modern web technologies, it offers a beautiful, responsive interface with drag-and-drop functionality, real-time updates, and seamless integration with popular creative tools. The platform includes advanced analytics, automated invoicing, and client communication features.',
      image: Images.QuickSupport || '',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Tailwind CSS', 'Stripe', 'SendGrid'],
      github: '#',
      demo: 'https://quick-support.interasol.com',
      demoButtonText: 'Live Demo',
      featured: true,
      duration: '8 months',
      teamSize: '5 members',
      role: 'Technical Lead & Frontend Architect',
      features: [
        'Drag-and-drop portfolio builder with live preview',
        'Client portal for project collaboration and feedback',
        'Integrated time tracking and project management',
        'Automated invoicing with Stripe integration',
        'Custom domain support for portfolio websites',
        'Analytics dashboard for portfolio views and engagement',
        'Email automation for client communications'
      ],
      challenges: [
        'Created flexible drag-and-drop system supporting complex layouts and responsive design',
        'Optimized image delivery with Next.js Image component and CDN, improving load times by 70%',
        'Implemented real-time collaboration using WebSockets for instant updates'
      ],
      outcomes: [
        'Platform adopted by 1,000+ creative professionals in first 3 months',
        '95% user satisfaction rating based on feedback surveys',
        'Generated $50K+ in processed invoices through the platform'
      ]
    },
    {
      title: 'Personal Card Holder',
      description: 'A mobile-first application for digitizing and organizing business cards with OCR text extraction and contact management.',
      fullDescription: 'A smart mobile application that digitizes business cards using advanced OCR technology, automatically extracting and organizing contact information. The app syncs across devices, integrates with popular contact management systems, and includes features like smart search, automatic categorization, and follow-up reminders.',
      image: Images.PersonalCardHolder || '',
      technologies: ['Flutter', 'Firebase', 'OCR API', 'SQLite', 'Cloud Functions'],
      github: '#',
      demo: '#',
      demoButtonText: '#',
      featured: false,
      duration: '4 months',
      teamSize: '2 members',
      role: 'Mobile Developer',
      features: [
        'Camera-based business card scanning with OCR',
        'Automatic contact information extraction',
        'Cloud sync across all devices',
        'Smart search and filtering',
        'Export to VCF and CSV formats',
        'Follow-up reminders and notes',
        'Integration with phone contacts'
      ],
      challenges: [
        'Achieved 95% accuracy in OCR text extraction through preprocessing and ML optimization',
        'Implemented offline-first architecture with seamless sync when connection restored'
      ],
      outcomes: [
        'Downloaded 10,000+ times on iOS and Android',
        '4.5 star average rating on app stores',
        'Featured in "Best Productivity Apps" category'
      ]
    },
    {
      title: 'Counseling Management System',
      description: 'A comprehensive platform for educational counselors to manage student applications, track progress, and generate reports.',
      fullDescription: 'A specialized platform designed for educational counseling centers to streamline student application management, track academic progress, and automate administrative tasks. Features include document management, automated reminders, progress tracking, reporting tools, and parent communication portal.',
      image: Images.CounselingManagementSystemForCharusat || '',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Chart.js', 'Bootstrap', 'Redis Queue'],
      github: '#',
      demo: '#',
      demoButtonText: '#',
      featured: false,
      duration: '5 months',
      teamSize: '3 members',
      role: 'Backend Developer',
      features: [
        'Student profile management with document storage',
        'Application tracking with customizable workflows',
        'Automated email reminders and notifications',
        'Interactive analytics dashboard',
        'Parent portal for progress monitoring',
        'Document template generator',
        'Bulk operations for efficiency'
      ],
      outcomes: [
        'Reduced administrative workload by 50%',
        'Serving 15+ counseling centers with 2,000+ students',
        'Improved application completion rate by 35%'
      ]
    },
    {
      title: 'Leave Management System',
      description: 'An enterprise-grade leave management solution with automated approval workflows, calendar integration, and analytics dashboard.',
      fullDescription: 'A robust leave management system for organizations to handle employee leave requests, approvals, and tracking. Includes multi-level approval workflows, calendar integration, automated balance calculations, and comprehensive reporting. The system supports various leave types, customizable policies, and integration with HR systems.',
      image: Images.LeaveManagementSystemForGsecl || '',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'TypeORM'],
      github: '#',
      demo: '#',
      demoButtonText: '#',
      featured: false,
      duration: '7 months',
      teamSize: '4 members',
      role: 'Full Stack Developer',
      features: [
        'Multi-level approval workflow engine',
        'Calendar integration (Google, Outlook)',
        'Automated leave balance calculations',
        'Customizable leave policies and types',
        'Team availability calendar view',
        'Email and SMS notifications',
        'Comprehensive analytics and reports'
      ],
      outcomes: [
        'Deployed across 5 departments with 300+ employees',
        'Reduced leave processing time from 2 days to 2 hours',
        '98% employee adoption rate within first month'
      ]
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900/20 dark:via-blue-950/10 dark:to-purple-950/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10" ref={ref}>
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
            A showcase of my recent work and personal projects that demonstrate my skills in full-stack development
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
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs bg-gray-50 dark:bg-gray-800/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">
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