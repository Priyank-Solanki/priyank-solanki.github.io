import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Code, Rocket, TrendingUp, Globe } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const highlights = [
    {
      icon: Award,
      title:
        new Date().getFullYear() -
        new Date("2019-07-07").getFullYear() -
        (new Date() <
        new Date(
          new Date().getFullYear(),
          new Date("2019-07-07").getMonth(),
          new Date("2019-07-07").getDate()
        )
          ? 1
          : 0) +
        "+ Years Experience",
      description: "Full Stack Development & Technical Leadership",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      icon: Code,
      title: "Modern Technologies",
      description: "React.js, Next.js, NestJS, PostgreSQL, Laravel, MySQL, AWS, Flutter",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional development teams",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      icon: Rocket,
      title: "Performance Focus",
      description: "Building scalable, high-performance applications",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
    },
  ];

  const stats = [
    { number: new Date().getFullYear() -
        new Date("2019-07-07").getFullYear() -
        (new Date() <
        new Date(
          new Date().getFullYear(),
          new Date("2019-07-07").getMonth(),
          new Date("2019-07-07").getDate()
        )
          ? 1
          : 0) +"+", label: "Years Experience", icon: TrendingUp },
    { number: "15+", label: "Projects Completed", icon: Code },
    { number: "10+", label: "Technologies Mastered", icon: Globe },
    { number: "100%", label: "Client Satisfaction", icon: Award },
  ];

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

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/10 dark:to-purple-950/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-3xl"></div>

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
            About Me
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
            variants={itemVariants}
          >
            Passionate Full Stack Software Engineer & Technical Lead with
            expertise in building innovative web and mobile applications
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Bio */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <motion.p
                className="text-lg leading-relaxed text-muted-foreground"
                variants={itemVariants}
              >
                I'm a dedicated Full Stack Software Engineer and Technical Lead
                with over{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  6 years of experience
                </span>{" "}
                in developing cutting-edge web and mobile applications. My
                journey in software development has been driven by a passion for
                creating efficient, scalable solutions that make a real impact.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed text-muted-foreground"
                variants={itemVariants}
              >
                Throughout my career, I've had the privilege of working with
                diverse teams and technologies, from startups to established
                companies. I specialize in modern JavaScript frameworks, backend
                development, and cloud technologies, with a strong focus on
                delivering high-quality, performance-optimized applications.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed text-muted-foreground"
                variants={itemVariants}
              >
                When I'm not coding, I enjoy staying up-to-date with the latest
                technology trends, contributing to open-source projects, and
                mentoring fellow developers in their journey.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {[
                "React.js",
                "Next.js",
                "NestJS",
                "PostgreSQL",
                "Laravel",
                "MySQL",
                "Flutter",
                "Agile",
                "Timeline Management",
                "Code Reviews & Version Control",
                "AWS",
                "CI/CD",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border-0"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <motion.div className="grid gap-6" variants={itemVariants}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Card className="relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <motion.div
                          className={`w-12 h-12 ${highlight.bgColor} rounded-xl flex items-center justify-center relative overflow-hidden`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 relative z-10" />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-20`}
                          ></div>
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>

                  {/* Gradient border effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                  ></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
