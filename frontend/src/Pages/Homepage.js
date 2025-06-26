import React from 'react';
import { Search, User, Instagram, X, Apple, Play } from 'lucide-react'; // Importing icons from lucide-react

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Jura'] flex flex-col items-center overflow-x-hidden">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Cards Section */}
      <FeatureCards />

      {/* Scam Prevention Section */}
      <ScamPrevention />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// Header Component
const Header = () => {
  return (
    <header className="w-full max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-12 flex justify-center items-center relative z-10">
      <div className="w-full max-w-4xl h-14 bg-zinc-100 rounded-[20px] flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-neutral-700 text-3xl sm:text-4xl lg:text-5xl font-normal font-['Jomhuria'] flex-shrink-0">
          CarSyncGo
        </div>

        {/* Navigation and Action Buttons */}
        <nav className="flex items-center space-x-4 sm:space-x-8">
          <div className="hidden sm:block bg-white rounded-2xl px-4 py-2">
            <span className="text-black text-sm sm:text-base font-bold">Home</span>
          </div>
          <button className="hidden sm:block text-black text-sm sm:text-base font-bold px-4 py-2 rounded-2xl">
            Publish a ride
          </button>
          {/* User Icon */}
          <User className="w-6 h-6 text-black" />
        </nav>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto relative px-4 md:px-8 lg:px-12 mt-6">
      {/* Hero Image */}
      <img
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[30px] sm:rounded-[50px] lg:rounded-[80px] object-cover"
        src="/image_f44dd6.jpg" // Using the uploaded image
        alt="People in a car, enjoying the ride"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1144x600?text=Hero+Image'; }} // Fallback
      />

      {/* Search Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] lg:w-[1041px] h-16 sm:h-20 bg-white rounded-[20px] sm:rounded-[29px] shadow-lg flex flex-col sm:flex-row items-center justify-around p-2 sm:p-4">
        {/* Search Input Fields */}
        <SearchInputField label="Leaving From" />
        <SearchInputField label="Going to" />
        <SearchInputField label="Today" />
        <SearchInputField label="Passenger" />

        {/* Search Button */}
        <button className="w-14 h-14 sm:w-20 sm:h-14 bg-cyan-100 rounded-3xl flex items-center justify-center mt-2 sm:mt-0 ml-0 sm:ml-4 flex-shrink-0">
          <Search className="w-8 h-8 text-cyan-700" />
        </button>
      </div>
    </section>
  );
};

// Reusable Search Input Field Component
const SearchInputField = ({ label }) => {
  return (
    <div className="w-full sm:w-auto flex-grow h-12 sm:h-14 bg-zinc-100 rounded-3xl flex items-center justify-center px-4 mb-2 sm:mb-0">
      <span className="text-zinc-500 text-sm sm:text-xl font-bold font-['Jura']">{label}</span>
    </div>
  );
};

// Feature Cards Section Component
const FeatureCards = () => {
  const features = [
    {
      title: "Your pick of rides at low prices",
      description:
        "No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.",
    },
    {
      title: "Trust who you travel with",
      description:
        "We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.",
    },
    {
      title: "Scroll, click, tap and go!",
      description:
        "Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12 mt-20 sm:mt-32 mb-20">
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} description={feature.description} />
      ))}
    </section>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-stone-50 rounded-[30px] sm:rounded-[50px] shadow-[0px_2px_13px_0px_rgba(160,160,160,0.25)] p-6 sm:p-8 flex flex-col items-center text-center h-80">
      <h3 className="text-black text-base sm:text-lg font-bold font-['Jura'] mb-4">{title}</h3>
      <p className="text-black text-sm sm:text-base font-light font-['Jura'] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Scam Prevention Section Component
const ScamPrevention = () => {
  return (
    <section className="w-full bg-slate-300 py-16 sm:py-24 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-black text-xl sm:text-2xl font-bold font-['Jura'] mb-4 leading-tight">
          Help us keep you safe from scams
        </h2>
        <p className="text-black text-base sm:text-xl font-light font-['Jura'] mb-8 leading-relaxed">
          At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we
          want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.
        </p>
        <button className="bg-zinc-100 rounded-3xl px-6 py-3 text-black text-base font-bold font-['Jura'] shadow-md hover:bg-zinc-200 transition-colors">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        {/* Placeholder image for the scam prevention visual */}
        <img
          className="w-[90%] sm:w-[473px] h-auto rounded-full object-cover"
          src="https://placehold.co/473x266?text=Scam+Prevention"
          alt="Scam prevention illustration"
        />
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="w-full bg-stone-950 rounded-tl-[50px] rounded-tr-[50px] sm:rounded-tl-[81px] sm:rounded-tr-[81px] py-12 px-4 md:px-8 lg:px-12 mt-16 sm:mt-24 flex flex-col items-center text-white relative">
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Footer Left Section (Logo, Socials, Terms) */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-zinc-400 text-4xl sm:text-5xl font-normal font-['Jomhuria'] mb-2">
            CarSyncGo
          </div>
          <div className="flex space-x-6 mb-4">
            <Instagram className="w-6 h-6 text-white" />
            <X className="w-6 h-6 text-white" />
          </div>
          <p className="text-white text-base sm:text-xl font-normal font-['Jost']">
            Terms and Conditions
          </p>
        </div>

        {/* App Download Buttons */}
        <div className="flex flex-col gap-4 items-center md:items-end">
          <AppDownloadButton icon={<Apple className="w-6 h-6 text-black" />} label="App Store" />
          <AppDownloadButton icon={<Play className="w-6 h-6 text-black" />} label="Google Play" />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white text-base sm:text-xl font-normal font-['Jost'] mt-10">
        CarSyncGo, 2025 ©
      </p>

      {/* Scroll to Top Button (Example - not in original Figma but good for long pages) */}
      <button
        className="absolute bottom-4 right-4 bg-zinc-100 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg hover:bg-zinc-200 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-xl font-bold transform rotate-[-90deg]">&#8593;</span> {/* Up arrow */}
      </button>
    </footer>
  );
};

// Reusable App Download Button Component
const AppDownloadButton = ({ icon, label }) => {
  return (
    <button className="w-40 h-9 bg-stone-300 rounded-2xl flex items-center justify-center space-x-2 shadow-md hover:bg-stone-400 transition-colors">
      {icon}
      <span className="text-black text-2xl sm:text-4xl font-normal font-['Jomhuria']">{label}</span>
    </button>
  );
};
