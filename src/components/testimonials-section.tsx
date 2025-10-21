import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { Images } from "../assets/assets";

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Darshan Pandya",
      role: "Software Engineer (javascript)",
      company: "Biztech Consulting & Solutions",
      image: Images.DarshanPandya || "",
      content:
        "Priyank has a strong command of PHP frameworks and is always there to help the team when needed.",
      rating: 5,
    },
    {
      name: "Kumar Sahitya",
      role: "Senior Software Engineer",
      company: "Biztech Consulting & Solutions",
      image: Images.KumarSahitya || "",
      content:
        "I had the pleasure of working with Priyank. He’s hardworking, a true game changer, and a consistent goal achiever. Highly recommended!",
      rating: 5,
    },
    {
      name: "Wasim Bakali",
      role: "Senior Software Engineer",
      company: "Biztech Consulting & Solutions",
      image: Images.WasimBakali || "",
      content:
        "He has solid knowledge of PHP frameworks and Flutter. A hardworking and reliable professional.",
      rating: 5,
    },
    {
      name: "Bharat Nagdev",
      role: "Ionic Developer | Angular Developer",
      company: "Biztech Consulting & Solutions",
      image: Images.BharatNagdev || "",
      content:
        "He is one of the most enthusiastic members of the team. Works well under pressure and has a strong grasp of technology. Besides coding, he’s also skilled in photography.",
      rating: 5,
    },
    {
      name: "Vedang Yagnik",
      role: "Software Engineer",
      company: "Biztech Consulting & Solutions",
      image: Images.VedangYagnik || "",
      content:
        "He’s a passionate technologist with great learning abilities. He dives deep into every task, stays excited about challenges, and is always driven to achieve results. I had the pleasure of mentoring him. 👍🏻",
      rating: 5,
    },
    {
      name: "Divya Tailor",
      role: "Developer for Ionic | Angular | Flutter | React Native",
      company: "Biztech Consulting & Solutions",
      image: Images.DivyaTailor || "",
      content:
        "He has excellent programming skills and is a great team player.",
      rating: 5,
    },
  ];

  // Group testimonials into slides of 2
  const testimonialsPerSlide = window.innerWidth < 768 ? 1 : 2;
  const slides = [];
  for (let i = 0; i < testimonials.length; i += testimonialsPerSlide) {
    slides.push(testimonials.slice(i, i + testimonialsPerSlide));
  }

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex);
    setIsAutoPlaying(false);
  }, []);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    if (isHovered || !isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [isHovered, isAutoPlaying, nextSlide, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
        setIsAutoPlaying(false);
      } else if (event.key === "ArrowRight") {
        nextSlide();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl mb-6"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Colleagues Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Authentic feedback from colleagues, team members, and industry
              professionals I've had the privilege of working with across
              various projects and companies
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          variants={containerVariants}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons - Desktop */}
          <div className="hidden lg:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 justify-between items-center z-20 px-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
              }}
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border-border/50 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Previous testimonials"
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
              }}
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border-border/50 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Next testimonials"
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4 lg:px-16 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {slides[currentSlide]?.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="flex flex-col h-full"
                  >
                    <Card className="bg-card/60 backdrop-blur-md border-border/60 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-500 group hover:shadow-2xl hover:bg-card/80 h-full flex flex-col min-h-[450px]">
                      <CardContent className="p-6 lg:p-8 text-center flex flex-col h-full justify-between">
                        {/* Rating Stars */}
                        <div className="flex items-center justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current mx-0.5"
                            />
                          ))}
                        </div>

                        {/* Testimonial Content */}
                        <div className="relative mb-6 flex-grow flex items-center">
                          <Quote className="absolute -top-2 -left-2 w-5 h-5 text-blue-400/30 fill-current" />
                          <blockquote className="text-muted-foreground leading-relaxed italic text-sm lg:text-base px-4 text-center">
                            "{testimonial.content}"
                          </blockquote>
                        </div>

                        {/* Author Info */}
                        <div className="flex flex-col items-center space-y-3 mt-auto">
                          <Avatar className="w-12 h-12 ring-2 ring-blue-100 dark:ring-blue-900/30 group-hover:ring-blue-200 dark:group-hover:ring-blue-800/50 transition-all duration-300">
                            <AvatarImage
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-center">
                            <p className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's discuss your next project.
          </p>
          <motion.button
            onClick={handleContactClick}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
