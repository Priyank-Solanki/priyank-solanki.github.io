import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Building, ArrowRight } from 'lucide-react';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  const experiences = [
    {
      company: 'Alendei Softech PVT. LTD.',
      position: 'Senior Full Stack Developer & Technical Lead',
      duration: '2025 – Present',
      location: 'India',
      type: 'Full-time',
      description: [
        'Leading a team of developers in building scalable web applications using modern technologies',
        'Architecting and implementing microservices-based solutions with NestJS and PostgreSQL',
        'Mentoring junior developers and establishing best practices for code quality and deployment',
        'Collaborating with stakeholders to define technical requirements and project roadmaps'
      ],
      technologies: ['React.js', 'Next.js', 'NestJS', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript']
    },
    {
      company: 'Consumer Sketch',
      position: 'Full Stack Developer',
      duration: '2022 – 2025',
      location: 'India',
      type: 'Full-time',
      description: [
        'Developed and maintained multiple client-facing web applications using React.js and Next.js',
        'Built robust backend APIs with NestJS and integrated with various third-party services',
        'Implemented CI/CD pipelines using GitLab and AWS for automated testing and deployment',
        'Optimized application performance resulting in 40% faster load times and improved user experience',
        'Collaborated with UI/UX designers to create responsive and accessible user interfaces'
      ],
      technologies: ['React.js', 'Next.js', 'NestJS', 'MySQL', 'PostgreSQL', 'GitLab CI/CD', 'AWS']
    },
    {
      company: 'Biztech Consulting & Solutions',
      position: 'Software Developer',
      duration: '2019 – 2022',
      location: 'India',
      type: 'Full-time',
      description: [
        'Developed custom web applications using Laravel and CakePHP frameworks',
        'Created responsive frontend interfaces with Angular and modern CSS frameworks',
        'Worked on database design and optimization for high-performance applications',
        'Participated in code reviews and maintained high coding standards across the team',
        'Contributed to the migration of legacy systems to modern technology stacks'
      ],
      technologies: ['Laravel', 'CakePHP', 'Angular', 'MySQL', 'jQuery', 'Bootstrap', 'PHP']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-950/5 dark:to-purple-950/5"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full opacity-10 blur-3xl"></div>

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
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
            variants={itemVariants}
          >
            My journey through different companies and roles, building expertise in full-stack development and technical leadership
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Animated Timeline line */}
            <motion.div 
              className="absolute left-4 md:left-1/2 md:-ml-1 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
              variants={timelineVariants}
              initial="hidden"
              animate={controls}
            />
            
            <motion.div
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative mb-16"
                  variants={itemVariants}
                >
                  {/* Animated Timeline dot */}
                  <motion.div 
                    className="absolute left-2 md:left-1/2 md:-ml-3 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-blue-600 rounded-full z-10 shadow-lg"
                    whileHover={{ 
                      scale: 1.5,
                      borderColor: '#8b5cf6'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-12' : 'md:pl-1/2 md:pl-12'}`}
                    whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="group relative overflow-hidden rounded-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Gradient accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                      
                      <div className="p-6 pb-4 relative">
                        <div className="flex flex-col space-y-3">
                          <motion.div 
                            className="flex items-center space-x-3"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                              <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                              {experience.company}
                            </h3>
                          </motion.div>
                          
                          <motion.h4 
                            className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {experience.position}
                          </motion.h4>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <motion.div 
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">{experience.duration}</span>
                            </motion.div>
                            <motion.div 
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.05 }}
                            >
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700"
                              >
                                {experience.type}
                              </Badge>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="px-6 pb-6 space-y-6">
                        <motion.ul className="space-y-3">
                          {experience.description.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex} 
                              className="text-muted-foreground flex items-start leading-relaxed"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + itemIndex * 0.05 + 0.5 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                              />
                              {item}
                            </motion.li>
                          ))}
                        </motion.ul>
                        
                        <div className="pt-6 border-t border-border/50">
                          <div className="flex items-center space-x-2 mb-3">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            <p className="font-medium text-gray-900 dark:text-white">Technologies:</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + techIndex * 0.03 + 0.7 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                <Badge 
                                  variant="secondary" 
                                  className="text-xs bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-800 dark:to-blue-900/20 text-gray-700 dark:text-gray-300"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}