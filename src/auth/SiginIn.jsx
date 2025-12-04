import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginIllustration = ({ primaryColor }) => (
  <svg
    viewBox="0 0 400 300"
    className="w-full h-auto max-w-md mx-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="50"
      y1="250"
      x2="350"
      y2="250"
      stroke="#1f2937"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
    <rect
      x="80"
      y="150"
      width="10"
      height="100"
      fill={primaryColor}
      className="opacity-80"
      rx="2"
    />
    <rect
      x="310"
      y="150"
      width="10"
      height="100"
      fill={primaryColor}
      className="opacity-80"
      rx="2"
    />
    <rect x="70" y="140" width="260" height="12" fill="#1f2937" rx="4" />
    <rect
      x="95"
      y="160"
      width="60"
      height="70"
      fill={primaryColor}
      className="opacity-20"
      stroke="#1f2937"
      strokeWidth="2"
      rx="2"
    />
    <circle cx="125" cy="175" r="3" fill="#1f2937" />
    <circle cx="125" cy="195" r="3" fill="#1f2937" />
    <rect x="180" y="135" width="40" height="5" fill="#374151" />
    <rect x="195" y="120" width="10" height="15" fill="#374151" />
    <rect x="150" y="70" width="100" height="60" fill="#1f2937" rx="4" />
    <rect x="155" y="75" width="90" height="50" fill="#111827" />
    <rect x="160" y="85" width="30" height="2" fill="#4ade80" />
    <rect x="160" y="90" width="50" height="2" fill="#6b7280" />
    <rect x="160" y="95" width="40" height="2" fill="#6b7280" />
    <rect x="160" y="105" width="20" height="2" fill="#f472b6" />
    <path
      d="M260 135 L262 140 H270 L272 135 Z"
      fill="#fff"
      stroke="#1f2937"
      strokeWidth="1.5"
    />
    <path
      d="M272 136 Q 276 137, 275 130 Q 272 130, 272 134"
      stroke="#1f2937"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M263 125 Q 265 120, 263 115"
      stroke="#cbd5e1"
      strokeWidth="2"
      opacity="0.6"
    />
    <path
      d="M269 125 Q 271 120, 269 115"
      stroke="#cbd5e1"
      strokeWidth="2"
      opacity="0.6"
    />
    <rect x="300" y="125" width="5" height="15" fill="#fca5a5" rx="1" />
    <rect x="306" y="120" width="5" height="20" fill="#93c5fd" rx="1" />
    <rect x="312" y="128" width="5" height="12" fill="#fbbf24" rx="1" />
    <rect x="250" y="40" width="80" height="4" fill="#e5e7eb" rx="2" />
    <circle
      cx="270"
      cy="25"
      r="8"
      fill="none"
      stroke={primaryColor}
      strokeWidth="2"
    />
    <rect
      x="100"
      y="60"
      width="8"
      height="8"
      fill={primaryColor}
      transform="rotate(20 104 64)"
    />
    <circle cx="330" cy="80" r="3" fill="#f472b6" className="animate-bounce" />
  </svg>
);

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const colors = {
    primary: "#6366f1",
    primaryDark: "#4f46e5",
    gradientStart: "#6366f1",
    gradientEnd: "#8b5cf6",
    bgShape: "#4f46e5",
    textMain: "#1f2937",
    textSub: "#6b7280",
    inputBorder: "#e5e7eb",
  };

  return (
    <div className="min-h-screen w-full relative bg-gray-50 flex items-center justify-center p-4 overflow-hidden font-sans">
      <motion.div
        initial={{ x: 100, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-linear-to-bl from-indigo-600 to-purple-600 rounded-bl-[100%] z-0 hidden md:block"
        style={{ transformOrigin: "top right" }}
      />
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 rounded-bl-[80%] z-0 md:hidden"></div>

      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-linear-to-tr from-purple-600 to-indigo-600 rounded-tr-[100%] z-0 hidden md:block"
      />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-600 rounded-tr-[80%] z-0 md:hidden"></div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[600px]"
      >
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center bg-white relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full"
          >
            <LoginIllustration primaryColor={colors.primary} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back!
            </h3>
            <p className="text-gray-500 text-sm">
              To keep connected with us please login with your personal info.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 lg:pl-12 lg:pr-20 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-sm font-semibold tracking-wider uppercase mb-2"
              style={{ color: colors.primary }}
            >
              ProjectUI
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold mb-3"
              style={{ color: "#d946ef" }}
            >
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-fuchsia-600">
                Login to Account
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-500 leading-relaxed"
            >
              Enter your credentials to access your account.
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <InputGroup
              delay={0.7}
              icon={<Mail size={18} />}
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              color={colors.primary}
            />

            <div>
              <InputGroup
                delay={0.8}
                icon={<Lock size={18} />}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                color={colors.primary}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex justify-end mt-2"
              >
                <span
                  onClick={() => navigate("/PUI/login/forgot-credentials")}
                  className="text-xs text-indigo-500 hover:text-indigo-700 font-medium cursor-pointer"
                >
                  Forgot Password?
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="pt-4"
            >
              <button
                type="button"
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-white text-sm font-semibold tracking-wide shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colors.gradientStart}, ${colors.gradientEnd}, #d946ef)`,
                  backgroundSize: "200% auto",
                }}
              >
                Sign In
                <ArrowRight
                  size={16}
                  className="cursor-pointer transition-transform group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-12 text-sm text-gray-500"
          >
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="font-bold hover:underline cursor-pointer"
              style={{ color: colors.primaryDark }}
            >
              Sign Up
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const InputGroup = ({
  icon,
  type,
  name,
  placeholder,
  value,
  onChange,
  delay,
  color,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative"
    >
      <div
        className="flex items-center py-3 border-b-2 transition-colors duration-300"
        style={{ borderColor: isFocused ? color : "#e5e7eb" }}
      >
        <span
          className={`mr-4 transition-colors duration-300 ${
            isFocused ? "text-indigo-600" : "text-gray-400"
          }`}
        >
          {icon}
        </span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 font-medium text-sm"
        />
      </div>
    </motion.div>
  );
};

export default SignIn;
