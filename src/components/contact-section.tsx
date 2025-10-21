import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle,
  Zap,
  XCircle,
} from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isErrorFormMessage, setIsErrorFormMessage] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
    try {
      await addDoc(collection(db, "contact-from-website"), {
        ...formData,
        createdAt: new Date(),
      });
      setFormMessage("Your message has been sent successfully!");
    } catch (error) {
      setIsErrorFormMessage(true);
      setFormMessage("Failed to submit the form. Please try again later.");
    }
    // Reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setFormMessage("");
      setIsErrorFormMessage(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "priyanksolanki30197@email.com",
      href: "mailto:priyanksolanki30197@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 97268 68355",
      href: "tel:+919726868355",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vadodara, Gujarat, India",
      href: "https://maps.app.goo.gl/nt2CWJAMWscKGxTB6",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/priyanksolanki",
      href: "https://www.linkedin.com/in/priyank-solanki-00b13a28a/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/priyanksolanki",
      href: "https://github.com/Priyank-Solanki",
    },
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
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 dark:from-gray-900/20 dark:via-blue-950/5 dark:to-purple-950/5 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

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
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
            variants={itemVariants}
          >
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

              <div className="p-6 pb-4">
                <h3 className="text-2xl lg:text-3xl font-semibold flex items-center text-gray-900 dark:text-white">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center mr-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Send className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  Send a Message
                </h3>
              </div>

              <div className="px-6 pb-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Label
                        htmlFor="name"
                        className="text-gray-900 dark:text-white"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-2 focus:border-blue-500 transition-colors"
                        required
                        disabled={isSubmitted}
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Label
                        htmlFor="email"
                        className="text-gray-900 dark:text-white"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-2 focus:border-blue-500 transition-colors"
                        required
                        disabled={isSubmitted}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label
                      htmlFor="subject"
                      className="text-gray-900 dark:text-white"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-2 focus:border-blue-500 transition-colors"
                      required
                      disabled={isSubmitted}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Label
                      htmlFor="message"
                      className="text-gray-900 dark:text-white"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      className="min-h-[120px] border-2 focus:border-blue-500 transition-colors"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitted}
                    />
                  </motion.div>

                  {formMessage && (
                    <motion.div
                      className={`mt-6 p-4 bg-gradient-to-r from-${
                        isErrorFormMessage ? "red" : "green"
                      }-50 to-purple-50 dark:from-${
                        isErrorFormMessage ? "red" : "green"
                      }-900/20 dark:to-purple-900/20 rounded-xl border border-${
                        isErrorFormMessage ? "red" : "green"
                      }-200 dark:border-${
                        isErrorFormMessage ? "red" : "green"
                      }-700`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-start space-x-3">
                        {!isErrorFormMessage ? (
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <p
                            className={`text-sm text-${
                              isErrorFormMessage ? "red" : "green"
                            }-600 dark:text-${
                              isErrorFormMessage ? "red" : "green"
                            }-400`}
                          >
                            <strong>{formMessage}</strong>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                      disabled={isSubmitted}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitted ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600"></div>

              <div className="p-6 pb-4">
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
                  Contact Information
                </h3>
              </div>

              <div className="px-6 pb-6 space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {info.label}
                      </p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          target={
                            info.href.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Availability */}
            <div className="group relative overflow-hidden rounded-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-orange-500"></div>

              <div className="p-6 pb-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                  </motion.div>
                  Availability
                </h3>
              </div>

              <div className="px-6 pb-6">
                <div className="space-y-4">
                  {[
                    {
                      status: "Available for freelance projects",
                      color: "bg-green-500",
                    },
                    {
                      status: "Open to full-time opportunities",
                      color: "bg-green-500",
                    },
                    {
                      status: "Response time: Within 24 hours",
                      color: "bg-yellow-500",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`w-3 h-3 ${item.color} rounded-full`}
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Preferred Communication:</strong> Email for
                        detailed discussions, LinkedIn for professional
                        networking, and phone calls for urgent matters.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
