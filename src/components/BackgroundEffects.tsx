
import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark-900/90 via-dark-800 to-dark-900/90"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-[-15%] left-[-5%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[120px] animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-[30%] right-[10%] h-[400px] w-[400px] rounded-full bg-coral-500/10 blur-[80px] animate-pulse-slow animation-delay-1000"></div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default BackgroundEffects;
