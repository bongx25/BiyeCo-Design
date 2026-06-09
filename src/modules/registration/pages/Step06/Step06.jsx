import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, MessageCircle } from 'lucide-react';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { LeftSection } from '../../components/LeftSection';
import { RightSection } from '../../components/RightSection';
import { step6Config } from '../../config/step6Config';
import { Button } from '../../../../shared/ui/Button';
import { Input } from '../../../../shared/ui/Input';
import { OTPModal } from '../../../../shared/ui/OTPModal/OTPModal';
import { QuestionBlock } from '../../components/QuestionBlock';
import { StepNavigation } from '../../components/StepNavigation';
import { useRegistrationStore } from '../../store/registrationStore';
import { cn } from '../../../../shared/utils';

export const Step6 = ({ onPrev, onNext }) => {
  const { registrationData } = useRegistrationStore();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState('email');
  const [isVerified, setIsVerified] = useState(false);

  const contactInfo = verificationMethod === 'email' 
    ? (registrationData?.email || 'sa****99@gmail.com')
    : (`${registrationData?.candidatePhoneCode || '+91'} ${registrationData?.candidatePhone?.replace(/.(?=.{4})/g, '*') || '******1234'}`);

  const handleOpenOTP = (method) => {
    setVerificationMethod(method);
    setIsOTPModalOpen(true);
  };

  const handleVerifyOTP = (success) => {
    if (success) {
      setIsVerified(true);
      setIsOTPModalOpen(false);
      // In a real flow, maybe proceed automatically or enable a Continue button
      setTimeout(() => {
        onNext(); // Advance after successful verification
      }, 500);
    } else {
      alert("Invalid OTP code. Please try again. (Hint: use 123456)");
    }
  };

  const isFormValid = password.length > 0 && password === confirmPassword && termsAccepted;

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-0 w-full m-0 p-0">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] xl:grid-cols-[3.8fr_6.2fr] gap-[clamp(1rem,3vw,3rem)] items-stretch flex-1 min-h-0 min-w-0 w-full p-0 overflow-hidden">
          <LeftSection>
            <HeroSection config={step6Config.hero} />
          </LeftSection>
          <RightSection>
            <div className="flex flex-col h-full overflow-hidden p-0 m-0">
              <div className="flex flex-col items-center lg:items-start justify-start w-full h-full mt-0">
                <QuestionBlock 
                  titleHighlight="Create" 
                  titleRest="Password"
                >
                  <div className="w-full flex-1 min-h-0 overflow-hidden pr-2 flex flex-col justify-start custom-scrollbar overflow-y-auto">
                    <div className="flex flex-col w-full text-center lg:text-left justify-center lg:justify-start px-1 lg:px-0 gap-[clamp(0.2rem,min(1.5vh,1vw),2rem)] mt-[clamp(0.2rem,min(1vh,0.5vw),1rem)] mb-[clamp(0.2rem,min(1vh,0.5vw),1rem)]">
                      
                      <div className="max-w-[clamp(280px,80%,400px)] lg:max-w-[clamp(450px,75%,700px)] mx-auto lg:mx-0 w-full flex flex-col gap-[clamp(1.5rem,min(3vh,3vw),3rem)]">
                        
                        {/* Password Fields */}
                        <div className="flex flex-col gap-[clamp(0.5rem,min(1.5vh,1vw),2rem)]">
                  <div className="relative">
                    <Input
                      label="Password"
                      icon={Lock}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-[40px] text-luxury-charcoal/60 hover:text-luxury-gold transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="relative">
                    <Input
                      label="Confirm Password"
                      icon={Lock}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      error={confirmPassword && password !== confirmPassword ? "Passwords do not match" : ""}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-[40px] text-luxury-charcoal/60 hover:text-luxury-gold transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <label className="flex items-start gap-4 cursor-pointer group mt-2">
                  <div className="relative flex items-center justify-center mt-1 shrink-0">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <div className="w-5 h-5 border-2 border-[#CBA557] rounded flex items-center justify-center bg-transparent transition-colors peer-checked:bg-[#CBA557] peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-[#CBA557]">
                      {termsAccepted && (
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="font-sans text-[clamp(13px,1.2vw,15px)] text-luxury-charcoal leading-relaxed select-none">
                    By checking this box, I confirm that I have read BiyeCo's{" "}
                    <a href="#" className="text-luxury-gold hover:underline font-medium">Terms & Conditions</a>
                    {" "}and{" "}
                    <a href="#" className="text-luxury-gold hover:underline font-medium">Privacy Policy</a>
                    , and that I am 18 years of age or older.
                  </span>
                </label>

                {/* Verification Buttons */}
                <div className="flex flex-col gap-4 mt-4">
                  <Button 
                    onClick={() => handleOpenOTP('email')}
                    disabled={!isFormValid || isVerified}
                    className={cn(
                      "w-full py-[clamp(0.8rem,min(2vh,1.5vw),1.5rem)] text-[clamp(15px,1.2vw,18px)] flex items-center justify-center gap-3 rounded-xl transition-all duration-200 active:scale-[0.98]",
                      isFormValid && !isVerified
                        ? "bg-luxury-navy border border-[#CBA557] text-[#FFF5EB] font-serif tracking-tight font-semibold hover:brightness-110 shadow-md hover:shadow-lg"
                        : "bg-luxury-navy border border-[#CBA557]/40 text-[#FFF5EB]/60 font-serif tracking-tight font-semibold opacity-60 cursor-not-allowed"
                    )}
                  >
                    <Mail className="w-5 h-5" />
                    Verify With Email
                  </Button>
                  
                  <Button 
                    onClick={() => handleOpenOTP('whatsapp')}
                    disabled={!isFormValid || isVerified}
                    className={cn(
                      "w-full py-[clamp(0.8rem,min(2vh,1.5vw),1.5rem)] text-[clamp(15px,1.2vw,18px)] flex items-center justify-center gap-3 rounded-xl transition-all duration-200 active:scale-[0.98]",
                      isFormValid && !isVerified
                        ? "bg-luxury-navy border border-[#CBA557] text-[#FFF5EB] font-serif tracking-tight font-semibold hover:brightness-110 shadow-md hover:shadow-lg"
                        : "bg-luxury-navy border border-[#CBA557]/40 text-[#FFF5EB]/60 font-serif tracking-tight font-semibold opacity-60 cursor-not-allowed"
                    )}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Verify With WhatsApp
                  </Button>
                </div>

                {isVerified && (
                  <div className="flex items-center justify-center gap-2 text-green-600 font-medium mt-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Verified Successfully! Redirecting...
                  </div>
                )}
                
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 flex justify-center lg:justify-start mt-auto pt-[clamp(0.5rem,min(2vh,2vw),1.5rem)] pb-2">
                    <StepNavigation onPrev={onPrev} hideNext={true} />
                  </div>
                </QuestionBlock>
              </div>
            </div>
          </RightSection>
        </div>
      </main>

      <OTPModal 
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        onVerify={handleVerifyOTP}
        method={verificationMethod}
        contactInfo={contactInfo}
      />
    </>
  );
};
