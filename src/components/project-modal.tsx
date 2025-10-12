import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { ExternalLink, Github, Calendar, Users, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden@1.1.1';

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-[80vw] w-[80vw] max-h-[85vh] h-[85vh] p-0 overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-2xl flex flex-col">
        {/* Accessible title for screen readers */}
        <VisuallyHidden.Root>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            Detailed information about the {project.title} project
          </DialogDescription>
        </VisuallyHidden.Root>
        
        {/* Hero Image */}
        <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Featured badge */}
          {project.featured && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 left-4"
            >
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                <Zap className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </motion.div>
          )}

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <motion.div 
            className="p-6 md:p-8 space-y-6"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
                  {/* Project Info Grid */}
                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    variants={itemVariants}
                  >
                    {project.duration && (
                      <div className="flex items-center space-x-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
                        <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="font-medium text-sm text-gray-900 dark:text-white">{project.duration}</p>
                        </div>
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="flex items-center space-x-2 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/30">
                        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <div>
                          <p className="text-xs text-muted-foreground">Team Size</p>
                          <p className="font-medium text-sm text-gray-900 dark:text-white">{project.teamSize}</p>
                        </div>
                      </div>
                    )}
                    {project.role && (
                      <div className="flex items-center space-x-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 col-span-2">
                        <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <div>
                          <p className="text-xs text-muted-foreground">Role</p>
                          <p className="font-medium text-sm text-gray-900 dark:text-white">{project.role}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Description */}
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl mb-3 text-gray-900 dark:text-white">About This Project</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.fullDescription || project.description}
                    </p>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl mb-3 text-gray-900 dark:text-white">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700 px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl mb-3 text-gray-900 dark:text-white">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Challenges */}
                  {project.challenges && project.challenges.length > 0 && (
                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl mb-3 text-gray-900 dark:text-white">Challenges & Solutions</h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{challenge}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Outcomes */}
                  {project.outcomes && project.outcomes.length > 0 && (
                    <motion.div variants={itemVariants}>
                      <h3 className="text-xl mb-3 text-gray-900 dark:text-white">Outcomes & Impact</h3>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{outcome}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Action buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 pt-4"
                    variants={itemVariants}
                  >
                    {project.github && project.github !== '#' && <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Source Code
                      </Button>
                    </motion.div>}

                   {project.demo && project.demo !== '#' && <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.demoButtonText || 'View Demo'}
                      </Button>
                    </motion.div>}
              </motion.div>
            </motion.div>
          </div>
      </DialogContent>
    </Dialog>
  );
}
