import { motion } from 'motion/react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Heart, Code, Coffee, MapPin, Clock, Award, Users } from 'lucide-react';

export function Footer() {

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/priyanksolanki',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/priyanksolanki',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:priyank.solanki@email.com',
      label: 'Email'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Open to opportunities'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'priyank.solanki@email.com'
    }
  ];

  const achievements = [
    {
      icon: Award,
      label: 'Experience',
      value: '6+ Years'
    },
    {
      icon: Users,
      label: 'Team Leadership',
      value: 'Technical Lead'
    },
    {
      icon: Code,
      label: 'Specialization',
      value: 'Full Stack Development'
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-background via-blue-950/5 to-purple-950/5 border-t border-border relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.2 }}
          variants={containerVariants}
        >
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.h3 
              className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Priyank Solanki
            </motion.h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed text-base">
              Full Stack Software Engineer & Technical Lead passionate about building 
              innovative, scalable solutions that make a difference. Let's create something amazing together.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-900/20 transition-all duration-300"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <link.icon className="w-4 h-4" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6 text-gray-900 dark:text-white text-lg">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <info.icon className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-0.5">{info.label}</p>
                    <p className="text-sm text-foreground">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-6 text-gray-900 dark:text-white text-lg">Professional</h4>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <achievement.icon className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-0.5">{achievement.label}</p>
                    <p className="text-sm text-foreground">{achievement.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Separator className="my-8 bg-gradient-to-r from-transparent via-border to-transparent" />
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© 2025 Priyank Solanki. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-muted-foreground">
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <Code className="w-4 h-4 text-blue-500" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600" />
            </div>
            
            <div className="flex space-x-4">
              <motion.button 
                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button 
                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                whileHover={{ y: -1 }}
              >
                Terms of Service
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}