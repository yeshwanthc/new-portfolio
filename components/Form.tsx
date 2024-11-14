import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
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

      console.log("EmailJS result:", result); 

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

  const inputClassName = `w-full ${
    isDarkMode ? "bg-slate-600 text-slate-100" : "bg-white text-slate-900"
  }`;

  const errorClassName = `text-sm ${
    isDarkMode ? "text-red-400" : "text-red-600"
  } mt-1`;

  if (isSent) {
    return (
      <Card
        className={`${
          isDarkMode
            ? "bg-slate-700 border-slate-600"
            : "bg-slate-50 border-slate-200"
        }`}
      >
        <CardContent className="flex items-center justify-center h-64">
          <p
            className={`text-xl font-semibold ${
              isDarkMode ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Thank you for your message! We'll get back to you soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`${
        isDarkMode
          ? "bg-slate-700 border-slate-600"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <CardHeader>
        <CardTitle
          className={`${isDarkMode ? "text-slate-100" : "text-slate-900"}`}
        >
          Get in Touch
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClassName}
            />
            {errors.name && <p className={errorClassName}>{errors.name}</p>}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClassName}
            />
            {errors.email && <p className={errorClassName}>{errors.email}</p>}
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputClassName}
              rows={4}
            />
            {errors.message && (
              <p className={errorClassName}>{errors.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className={`w-full ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                : "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800"
            } text-white`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;