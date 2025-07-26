import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";
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

  const inputClassName = `w-full transition-all duration-200 ${
    isDarkMode 
      ? "bg-slate-800/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:bg-slate-800/70" 
      : "bg-white/70 border-slate-300/50 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:bg-white/90"
  } backdrop-blur-sm`;

  const errorClassName = `text-sm ${
    isDarkMode ? "text-red-400" : "text-red-600"
  } mt-1`;

  if (isSent) {
    return (
      <Card
        className={`border-0 shadow-2xl ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl"
            : "bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl"
        }`}
      >
        <CardContent className="flex flex-col items-center justify-center h-80 text-center space-y-6">
          <div className={`p-4 rounded-full ${
            isDarkMode ? "bg-green-500/20" : "bg-green-100"
          }`}>
            <CheckCircle className={`w-12 h-12 ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`} />
          </div>
          <div className="space-y-2">
            <h3 className={`text-2xl font-bold ${
              isDarkMode ? "text-slate-100" : "text-slate-900"
            }`}>
              Message Sent Successfully!
            </h3>
            <p className={`text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </div>
          <Button
            onClick={() => setIsSent(false)}
            variant="outline"
            className={`${
              isDarkMode
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`border-0 shadow-2xl ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl"
          : "bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl"
      }`}
    >
      <CardHeader>
        <CardTitle
          className={`text-2xl font-bold flex items-center ${
            isDarkMode ? "text-slate-100" : "text-slate-900"
          }`}
        >
          <Send className="mr-3 w-6 h-6" />
          Get in Touch
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClassName}
            />
            {errors.name && <p className={errorClassName}>{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClassName}
            />
            {errors.email && <p className={errorClassName}>{errors.email}</p>}
          </div>
          
          <div className="space-y-2">
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputClassName}
              rows={5}
            />
            {errors.message && (
              <p className={errorClassName}>{errors.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            className={`w-full py-3 text-lg font-medium transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25"
                : "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white shadow-lg hover:shadow-blue-500/25"
            } transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;