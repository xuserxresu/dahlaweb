import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({
  phoneNumber = "+971501234567", // Replace with your actual WhatsApp number
  message = "Hello! I'm interested in Dahla Group's logistics services.",
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLabelVisible, setIsLabelVisible] = useState(false);

  useEffect(() => {
    // Delay the button appearance for a smoother page load
    const buttonTimer = setTimeout(() => setIsVisible(true), 1500);
    // Show the label after the button appears
    const labelTimer = setTimeout(() => setIsLabelVisible(true), 2500);

    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(labelTimer);
    };
  }, []);

  // Remove any non-numeric characters from phone number
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 transition-all duration-500 ease-in-out md:bottom-6 md:right-6 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      {/* Label */}
      <div className={`rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg transition-all duration-500 ease-in-out md:text-base ${
        isLabelVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
      }`}>
        Chat with us
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:h-16 md:w-16"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 md:h-8 md:w-8" />
        
        {/* Ripple Effect */}
        <span className="absolute -inset-1 animate-ping rounded-full bg-[#25D366] opacity-25"></span>
        
        {/* Notification Badge */}
        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-dahla text-[10px] text-white transition-transform duration-300 group-hover:scale-110 md:-right-2 md:-top-2">
          1
        </div>
      </button>
    </div>
  );
};

export { WhatsAppButton };
