import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Smartphone,
  Code,
  Globe,
  Layers,
} from "lucide-react";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();
  const [animatedValues, setAnimatedValues] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      // Animate skill progress bars
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setAnimatedValues((prev) => ({
              ...prev,
              [`${categoryIndex}-${skillIndex}`]: skill.level,
            }));
          }, categoryIndex * 200 + skillIndex * 100);
        });
      });
    }
  }, [isInView, controls]);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Angular", level: 70 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color:
        "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "NestJS", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Laravel", level: 80 },
        { name: "CakePHP", level: 75 },
        { name: "Express.js", level: 85 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color:
        "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color:
        "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 65 },
        { name: "Docker", level: 60 },
        { name: "Jenkins", level: 85 },
        { name: "GitLab CI/CD", level: 85 },
      ],
    },
  ];

  const additionalSkills = [
    "Flutter",
    "REST APIs",
    "Microservices",
    "Test-Driven Development",
    "Agile/Scrum",
    "Timeline Management",
    "Code Reviews",
    "Code standards",
    "Version Control (Git/GitHub/GitLab)",
    "Solution Oriented",
    "Strong Communication",
    "Team Collaboration",
    "Problem Solving",
    "Adaptability",
    "Quick Learner",
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900/20 dark:via-blue-950/10 dark:to-purple-950/10 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>

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
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
            variants={itemVariants}
          >
            A comprehensive overview of my technical skills and proficiency
            levels across different domains
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full hover:shadow-xl transition-shadow duration-300">
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}
                ></div>

                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color} relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-6 h-6 relative z-10" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20`}
                      ></div>
                    </div>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <motion.span
                          className="text-xs text-muted-foreground font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="relative">
                        <Progress
                          value={
                            animatedValues[`${categoryIndex}-${skillIndex}`] ||
                            0
                          }
                          className="h-2"
                        />
                        <div
                          className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${
                              animatedValues[
                                `${categoryIndex}-${skillIndex}`
                              ] || 0
                            }%`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div initial="hidden" animate={controls} variants={itemVariants}>
          <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden">
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-px rounded-lg">
              <div className="bg-white dark:bg-gray-800 rounded-lg h-full w-full"></div>
            </div>

            <div className="relative z-10">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Layers className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    Additional Technologies & Tools
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {additionalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:scale-105 hover:-translate-y-1 transition-all duration-200"
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
