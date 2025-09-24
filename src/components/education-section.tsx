import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'CHARUSAT University',
      location: 'Gujarat, India',
      duration: '2017 - 2019',
      description: 'Focused on advanced software development, database management systems, and modern programming paradigms. Completed thesis on web application security and performance optimization.',
      achievements: [
        'Graduated with distinction',
        'Led university coding club activities',
        'Completed major project on e-commerce platform development'
      ],
      type: 'Masters'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'CHARUSAT University',
      location: 'Gujarat, India',
      duration: '2014 - 2017',
      description: 'Comprehensive study of computer science fundamentals including programming languages, data structures, algorithms, and software engineering principles.',
      achievements: [
        'Consistent academic performance',
        'Active participation in technical events',
        'Completed internship at local software company'
      ],
      type: 'Bachelors'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'Docker Certified Associate',
    'Scrum Master Certification'
  ];

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

  return (
    <section id="education" className="py-20 lg:py-32 bg-gradient-to-br from-background via-blue-950/5 to-purple-950/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

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
            Education & Certifications
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
            variants={itemVariants}
          >
            My academic background and professional certifications that have shaped my technical expertise
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Education */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl lg:text-3xl mb-8 flex items-center text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </motion.div>
              Academic Qualifications
            </motion.h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group relative overflow-hidden rounded-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    
                    <div className="p-6 pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2 leading-tight">
                            {edu.degree}
                          </h3>
                          <p className="text-lg lg:text-xl text-gray-900 dark:text-white font-medium">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col lg:items-end space-y-3">
                          <Badge 
                            variant="outline" 
                            className="w-fit bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300"
                          >
                            {edu.type}
                          </Badge>
                          <div className="flex flex-col lg:items-end space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">{edu.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-6 pb-6 space-y-6">
                      <p className="text-muted-foreground leading-relaxed text-base">{edu.description}</p>
                      <div>
                        <div className="flex items-center mb-3">
                          <Award className="w-5 h-5 text-yellow-600 mr-2" />
                          <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                        </div>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <motion.li 
                              key={achievementIndex} 
                              className="text-muted-foreground flex items-start leading-relaxed"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + achievementIndex * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                              />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={itemVariants}
          >
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600"></div>
              
              <div className="p-6 pb-4">
                <h3 className="text-xl lg:text-2xl font-semibold flex items-center text-gray-900 dark:text-white">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </motion.div>
                  Professional Certifications
                </h3>
              </div>
              
              <div className="px-6 pb-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-800/50 dark:to-green-900/10 border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <motion.div 
                        className="w-3 h-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex-shrink-0"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                      <span className="font-medium text-gray-700 dark:text-gray-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                        <strong>Continuous Learning:</strong> Actively pursuing new certifications and staying updated with the latest technology trends and best practices in software development. Always eager to expand my knowledge and expertise.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}