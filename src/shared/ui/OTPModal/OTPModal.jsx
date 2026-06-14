import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from '../Button';
import { cn } from '../../utils';

export const OTPModal = ({ 
  isOpen, 
  onClose, 
  onVerify, 
  method = 'email', // 'email' or 'whatsapp'
  contactInfo = '' 
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(90); // 1:30 in seconds
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let timer;
    if (isOpen && timeLeft > 0 && !isVerified) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, timeLeft, isVerified]);

  useEffect(() => {
    if (isOpen) {
      setOtp(['', '', '', '', '', '']);
      setTimeLeft(90);
      setIsVerifying(false);
      setIsVerified(false);
      // Auto-focus first input
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, 100);
    }
  }, [isOpen]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Numeric only
    
    const newOtp = [...otp];
    // Take only the last character if multiple are typed somehow
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, 6);
    if (!pastedData) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
    
    // Focus next empty input or the last one
    const focusIndex = pastedData.length < 6 ? pastedData.length : 5;
    inputRefs.current[focusIndex].focus();
  };

  const handleVerify = () => {
    setIsVerifying(true);
    // Mock network request
    setTimeout(() => {
      setIsVerifying(false);
      const otpString = otp.join('');
      if (otpString === '123456') {
        setIsVerified(true);
        // Wait 1.5s to show the success message before advancing
        setTimeout(() => {
          onVerify(true);
        }, 800);
      } else {
        // Optional error handling for incorrect OTP
        onVerify(false);
      }
    }, 1000);
  };

  const handleResend = () => {
    setTimeLeft(90);
    setOtp(['', '', '', '', '', '']);
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  };

  const isFull = otp.every(digit => digit !== '');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-md bg-[#FCFBF8] rounded-3xl shadow-2xl overflow-hidden flex flex-col p-8"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors text-luxury-charcoal"
            >
              <X className="w-5 h-5" />
            </button>

            {isVerified ? (
              <div className="flex flex-col items-center justify-center text-center my-8">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                  className="w-20 h-20 rounded-full bg-[#4A3671]/5 flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-[#4A3671]" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-2xl font-semibold text-[#4A3671] mb-2"
                >
                  OTP Verified Successfully
                </motion.h3>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center mt-2">
                <div className="w-16 h-16 rounded-full bg-luxury-ivory border border-luxury-gold/30 flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-luxury-gold" />
                </div>
                
                <h3 className="font-serif text-2xl font-semibold text-[#4A3671] mb-2">
                  Verify Your {method === 'email' ? 'Email' : 'WhatsApp'}
                </h3>
                
                <p className="font-sans text-luxury-charcoal/80 text-sm mb-1">
                  Enter the 6-digit verification code sent to your {method === 'email' ? 'email address' : 'WhatsApp number'}.
                </p>
                
                <p className="font-sans font-medium text-[#4A3671] text-sm mb-8">
                  {contactInfo}
                </p>

                <div className="flex justify-center gap-2 mb-8 w-full">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      value={digit}
                      onChange={(e) => handleChange(index, e)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="w-[45px] h-[55px] sm:w-[50px] sm:h-[60px] text-center font-sans text-2xl font-semibold text-[#4A3671] bg-white border border-[#CBA557]/40 rounded-xl focus:border-[#CBA557] focus:ring-1 focus:ring-[#CBA557] outline-none transition-all shadow-sm"
                      maxLength={1}
                    />
                  ))}
                </div>

                <Button 
                  onClick={handleVerify}
                  disabled={!isFull || isVerifying}
                  className="w-full mb-6 py-3.5"
                >
                  {isVerifying ? "Verifying..." : "Verify Code"}
                </Button>

                <div className="font-sans text-sm text-luxury-charcoal/80">
                  Didn't receive the code?{" "}
                  {timeLeft > 0 ? (
                    <span className="text-[#4A3671] font-medium">
                      Resend in {formatTime(timeLeft)}
                    </span>
                  ) : (
                    <button 
                      onClick={handleResend}
                      className="text-[#CBA557] font-semibold hover:underline"
                    >
                      Resend Code
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
