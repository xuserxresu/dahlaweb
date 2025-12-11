import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({
  phoneNumber = "+971501234567",
  message = "Hello! I'm interested in Dahla Group's logistics services.",
}: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Remove any non-numeric characters from phone number
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <div
        className={`transition-all duration-300 ease-out ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white px-4 py-3 rounded-2xl shadow-2xl border border-gray-100 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Need help?</p>
              <p className="text-xs text-gray-600">Chat with us on WhatsApp</p>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true);
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 ease-out hover:scale-110 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-pulse"></div>
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <MessageCircle 
            className={`w-8 h-8 text-white transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
            }`}
            strokeWidth={2.5}
          />
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      </button>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-ping"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s',
              opacity: 0.6,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export { WhatsAppButton };
