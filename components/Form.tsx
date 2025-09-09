import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, User, Mail, MessageSquare, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormProps {
  isDarkMode: boolean;
}

const Form: React.FC<FormProps> = ({ isDarkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
        }
      );

      if (result.text === "OK") {
        setIsSent(true);
        setName("");
        setEmail("");
        setMessage("");
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
      } else {
        throw new Error(`Failed to send email: ${result.text}`);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      let errorMessage = "Failed to send your message. Please try again later.";
      
      if (error instanceof Error) {
        if (error.message.includes("400")) {
          errorMessage = "There was an issue with your request. Please check your EmailJS configuration.";
        } else if (error.message.includes("403")) {
          errorMessage = "Authentication failed. Please check your EmailJS API keys.";
        }
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = `w-full transition-all duration-300 focus:scale-[1.01] ${
    isDarkMode 
      ? "bg-slate-800/60 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:bg-slate-800/80 focus:ring-2 focus:ring-blue-500/20" 
      : "bg-white/80 border-slate-300/50 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:bg-white/95 focus:ring-2 focus:ring-blue-500/20"
  } backdrop-blur-sm shadow-lg hover:shadow-xl rounded-xl`;

  const errorClassName = `text-xs sm:text-sm ${
    isDarkMode ? "text-red-400" : "text-red-600"
  } mt-2 font-medium`;

  if (isSent) {
    return (
      <Card className={`border-0 shadow-2xl overflow-hidden rounded-2xl ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl"
          : "bg-gradient-to-br from-white/95 to-slate-50/80 backdrop-blur-xl"
      }`}>
        {/* Animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-60 rounded-2xl" />
        <div className={`absolute inset-[1px] bg-gradient-to-br ${
          isDarkMode 
            ? "from-slate-900/95 to-slate-800/90" 
            : "from-white/95 to-slate-50/80"
        } rounded-2xl`} />
        
        <CardContent className="relative flex flex-col items-center justify-center h-80 sm:h-96 text-center space-y-6 sm:space-y-8 p-6 sm:p-12">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
            <div className={`relative p-4 sm:p-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl`}>
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h3 className={`text-2xl sm:text-3xl font-bold ${
              isDarkMode ? "text-slate-100" : "text-slate-900"
            }`}>
              Message Sent Successfully! 🎉
            </h3>
            <p className={`text-base sm:text-lg leading-relaxed max-w-md ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              Thank you for reaching out! I've received your message and will get back to you within 24 hours.
            </p>
          </div>
          
          <Button
            onClick={() => setIsSent(false)}
            className={`px-6 py-3 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? "bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border border-slate-600/40"
                : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 border border-slate-300/40"
            } backdrop-blur-sm shadow-lg hover:shadow-xl`}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`border-0 shadow-2xl overflow-hidden rounded-2xl ${
      isDarkMode
        ? "bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl"
        : "bg-gradient-to-br from-white/95 to-slate-50/80 backdrop-blur-xl"
    }`}>
      {/* Animated border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 rounded-2xl" />
      <div className={`absolute inset-[1px] bg-gradient-to-br ${
        isDarkMode 
          ? "from-slate-900/95 to-slate-800/90" 
          : "from-white/95 to-slate-50/80"
      } rounded-2xl`} />
      
      <CardHeader className="relative p-4 sm:p-6">
        <CardTitle className={`text-2xl sm:text-3xl font-bold flex items-center gap-3 ${
          isDarkMode ? "text-slate-100" : "text-slate-900"
        }`}>
          <div className="p-2 sm:p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl">
            <Send className="w-5 h-5 sm:w-7 sm:h-7" />
          </div>
          Get in Touch
        </CardTitle>
        <p className={`text-base sm:text-lg mt-2 ${
          isDarkMode ? "text-slate-300" : "text-slate-600"
        }`}>
          Let's discuss your project and bring your ideas to life
        </p>
      </CardHeader>
      
      <CardContent className="relative p-4 sm:p-6 pt-0">
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 z-10">
                <User className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`} />
              </div>
              <Input
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${inputClassName} pl-10 sm:pl-12 h-12 sm:h-14 text-base sm:text-lg`}
              />
            </div>
            {errors.name && <p className={errorClassName}>{errors.name}</p>}
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 z-10">
                <Mail className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`} />
              </div>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${inputClassName} pl-10 sm:pl-12 h-12 sm:h-14 text-base sm:text-lg`}
              />
            </div>
            {errors.email && <p className={errorClassName}>{errors.email}</p>}
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-5 sm:top-6 z-10">
                <MessageSquare className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`} />
              </div>
              <Textarea
                placeholder="Tell me about your project, ideas, or how I can help you..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClassName} pl-10 sm:pl-12 pt-5 sm:pt-6 text-base sm:text-lg min-h-[120px] sm:min-h-[140px] resize-none`}
                rows={5}
              />
            </div>
            {errors.message && (
              <p className={errorClassName}>{errors.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            className={`w-full py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-500 transform hover:scale-[1.02] ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-blue-500/25"
                : "bg-gradient-to-r from-blue-600 via-purple-700 to-pink-700 hover:from-blue-700 hover:via-purple-800 hover:to-pink-800 text-white shadow-2xl hover:shadow-blue-500/25"
            } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none rounded-xl border-0`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-3">
                <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white"></div>
                <span>Sending Message...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Send Message</span>
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
            )}
          </Button>
        </form>
        
        {/* Form decoration */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
        <div className="absolute -top-2 -left-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
      </CardContent>
    </Card>
  );
};

export default Form;