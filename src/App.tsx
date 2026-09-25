import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Star,
  Users,
  Heart,
  Sparkles,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  X,
  Award,
  Smile,
  ArrowRight,
  Menu
} from 'lucide-react';
import { KiddosLogo } from './components/KiddosLogo';
import { ClassroomPhoto, PhotoId } from './components/ClassroomPhoto';

export default function App() {
  const [activeTab, setActiveTab] = useState<'infants' | 'toddlers' | 'preschool'>('toddlers');
  const [lightboxPhoto, setLightboxPhoto] = useState<{ id: PhotoId; title: string; description: string } | null>(null);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [childAge, setChildAge] = useState('Toddler (1-2.5 yrs)');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsTourModalOpen(false);
      setIsEnrollModalOpen(false);
      setParentName('');
      setParentEmail('');
      setParentPhone('');
    }, 2500);
  };

  const galleryItems: Array<{ id: PhotoId; title: string; description: string; badge: string }> = [
    {
      id: 'circle-time',
      title: 'Circle Time Center',
      description: 'Vibrant group learning hub featuring customized charts, color wheels, shape logs, and interactive calendar boards.',
      badge: 'Photo 1',
    },
    {
      id: 'jungle-room',
      title: 'Jungle Theme Playroom',
      description: 'Vibrant soft-play arena adorned with jungle murals where kiddos run, jump, and build active coordination skills.',
      badge: 'Photo 2',
    },
    {
      id: 'learning-tables',
      title: 'Classroom Table & Learning Mats',
      description: 'Ergonomic wooden tables equipped with double-sided educational writing mats, crayon trays, and ABC carpets.',
      badge: 'Photo 3',
    },
    {
      id: 'sun-corner',
      title: 'Cozy Reading & Sun Corner',
      description: 'Storybook nook flanked by 3D papercraft sun murals, rainbow arches, and cheerful house cutouts.',
      badge: 'Photo 4',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF0] text-slate-800 font-sans selection:bg-[#FFEB3B] selection:text-slate-900 overflow-x-hidden">
      
      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#FFFBF0]/95 backdrop-blur-md border-b border-amber-100 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Left */}
          <a href="#" className="flex items-center gap-3 group">
            <KiddosLogo size="md" />
          </a>

          {/* Navigation Links Middle (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-slate-700">
            <a href="#home" className="hover:text-[#2196F3] transition-colors py-1">Home</a>
            <a href="#programs" className="hover:text-[#4CAF50] transition-colors py-1">Programs</a>
            <a href="#classrooms" className="hover:text-[#9C27B0] transition-colors py-1">Classrooms</a>
            <a href="#why-us" className="hover:text-[#F44336] transition-colors py-1">Why Us</a>
            <a href="#contact" className="hover:text-[#2196F3] transition-colors py-1">Contact</a>
          </nav>

          {/* Schedule a Tour Button & Mobile Toggle Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsTourModalOpen(true)}
              className="bg-[#F44336] hover:bg-[#D32F2F] text-white font-bold px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center gap-2 text-xs sm:text-base cursor-pointer shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Tour</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-amber-100/80 text-slate-800 hover:bg-amber-200 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FFFBF0] border-b border-amber-200 px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-lg">
            <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-lg">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-amber-100 transition-colors flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-amber-100 transition-colors flex items-center justify-between"
              >
                <span>Programs</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="#classrooms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-amber-100 transition-colors flex items-center justify-between"
              >
                <span>Classroom Photos</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="#why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-amber-100 transition-colors flex items-center justify-between"
              >
                <span>Why Choose Us</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-amber-100 transition-colors flex items-center justify-between"
              >
                <span>Contact & Hours</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
            </nav>

            <div className="pt-2 border-t border-amber-200/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsEnrollModalOpen(true);
                }}
                className="w-full bg-[#4CAF50] text-white font-bold py-3 rounded-xl shadow-md text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span>Enroll Now - Fall 2026 Spots Open</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-6 pb-12 md:py-20 overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-amber-100/40 via-sky-100/30 to-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Left Text & Actions */}
            <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-1.5 rounded-full border border-emerald-200 shadow-xs max-w-full">
                <MapPin className="w-4 h-4 text-[#4CAF50] shrink-0" />
                <span className="truncate">Washington Heights, NY • Ages 6 Months to 5 Years</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-poppins">
                Where Little Explorers <span className="text-[#4CAF50]">Grow</span>,{' '}
                <span className="text-[#2196F3]">Learn</span> &{' '}
                <span className="text-[#9C27B0]">Thrive</span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                Licensed family daycare providing safe, nurturing, and playful learning for ages 6 months to 5 years in Washington Heights.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setIsEnrollModalOpen(true)}
                  className="w-full sm:w-auto bg-[#4CAF50] hover:bg-[#388E3C] text-white font-extrabold text-sm sm:text-lg px-5 sm:px-7 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group text-center"
                >
                  <Sparkles className="w-5 h-5 text-yellow-300 group-hover:rotate-12 transition-transform shrink-0" />
                  <span>Enroll Now - Fall 2026 Spots Open</span>
                </button>

                <a
                  href="#classrooms"
                  className="w-full sm:w-auto border-2 border-slate-700 hover:border-[#2196F3] text-slate-800 hover:text-[#2196F3] bg-white/80 hover:bg-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-200 flex items-center justify-center gap-2 text-center shadow-xs"
                >
                  <span>View Our Classrooms</span>
                  <ChevronRight className="w-5 h-5 shrink-0" />
                </a>
              </div>

              {/* Immediate Quick Stats */}
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium border-t border-amber-200/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#4CAF50] shrink-0" />
                  <span>Bi-Lingual English & Spanish</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#2196F3] shrink-0" />
                  <span>Healthy Organic Snacks</span>
                </div>
              </div>

            </div>


            {/* Hero Right Classroom Photo Card (Photo 1 - Circle Time) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Photo Frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#4CAF50] via-[#FFEB3B] to-[#F44336] rounded-3xl blur-md opacity-40 transform rotate-1" />
                
                <div className="relative bg-white p-3 rounded-3xl shadow-2xl border-4 border-amber-200">
                  <ClassroomPhoto
                    id="circle-time"
                    title="Circle Time Center classroom with rainbow wall"
                    aspectRatio="aspect-[4/3]"
                    onClick={() =>
                      setLightboxPhoto({
                        id: 'circle-time',
                        title: 'Circle Time Center Classroom with Rainbow Wall',
                        description:
                          'Main classroom learning environment equipped with ABC play carpets, weather & shapes charts, and child-sized study desks.',
                      })
                    }
                  />

                  {/* Floating Highlight Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-3 px-4 rounded-2xl shadow-lg border border-amber-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4CAF50]/15 flex items-center justify-center text-[#4CAF50]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">NYC DOHMH</p>
                      <p className="text-sm font-extrabold text-slate-900">Fully Licensed & Insured</p>
                    </div>
                  </div>

                  {/* Rating Badge Right */}
                  <div className="absolute -top-4 -right-4 bg-[#FFEB3B] text-slate-900 font-extrabold px-4 py-2 rounded-2xl shadow-lg border-2 border-white flex items-center gap-1.5 text-sm">
                    <Star className="w-4 h-4 fill-slate-900 text-slate-900" />
                    <span>5.0 Parent Rating</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 TRUST BADGES UNDER HERO */}
      <section className="py-8 bg-white border-y border-amber-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Badge 1 */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFBF0] border border-amber-200/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#4CAF50]/15 text-[#4CAF50] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">NYC Licensed & Insured</h4>
                <p className="text-xs text-slate-500">Exceeding state safety rules</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFBF0] border border-amber-200/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#FFEB3B]/40 text-amber-700 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">5-Star Parent Reviews</h4>
                <p className="text-xs text-slate-500">Trusted in Washington Heights</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFBF0] border border-amber-200/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#2196F3]/15 text-[#2196F3] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">Small Ratio 1:4 Care</h4>
                <p className="text-xs text-slate-500">Personalized attention</p>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFBF0] border border-amber-200/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#F44336]/15 text-[#F44336] flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">Safe Nut-Free Zone</h4>
                <p className="text-xs text-slate-500">Allergy-safe environment</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION WITH REAL CLASSROOM IMAGES */}
      <section id="programs" className="py-16 md:py-20 bg-white border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#2196F3] bg-sky-100 px-4 py-1.5 rounded-full border border-sky-200">
              Age-Tailored Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-poppins">
              Our Learning Programs
            </h2>
            <p className="text-slate-600 mt-2 text-base sm:text-lg">
              Explore our real classroom environments specifically designed for each stage of early childhood development.
            </p>
          </div>

          {/* 3 PROGRAM IMAGE CARDS SELECTOR */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            {/* Card 1: Infants */}
            <div
              onClick={() => setActiveTab('infants')}
              className={`group cursor-pointer rounded-3xl overflow-hidden border-3 transition-all duration-300 ${
                activeTab === 'infants'
                  ? 'border-[#F44336] ring-4 ring-red-100 shadow-xl scale-[1.02]'
                  : 'border-slate-200 hover:border-red-300 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <ClassroomPhoto id="sun-corner" title="Infant Cozy Sun Nook" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 bg-[#F44336] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Ages 6 - 12 Months
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-extrabold drop-shadow-xs">Infants Program</h3>
                  <p className="text-xs text-red-100 drop-shadow-xs">Cozy, Sensory & Tummy Time</p>
                </div>
              </div>
              <div className="p-4 bg-[#FFFBF0] flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600">Explore Infant Care</span>
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${activeTab === 'infants' ? 'bg-[#F44336] text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {activeTab === 'infants' ? 'Active View' : 'Select'}
                </span>
              </div>
            </div>

            {/* Card 2: Toddlers */}
            <div
              onClick={() => setActiveTab('toddlers')}
              className={`group cursor-pointer rounded-3xl overflow-hidden border-3 transition-all duration-300 ${
                activeTab === 'toddlers'
                  ? 'border-[#4CAF50] ring-4 ring-emerald-100 shadow-xl scale-[1.02]'
                  : 'border-slate-200 hover:border-emerald-300 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <ClassroomPhoto id="jungle-room" title="Toddler Jungle Soft Play Arena" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 bg-[#4CAF50] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Ages 1 - 2.5 Years
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-extrabold drop-shadow-xs">Toddlers Program</h3>
                  <p className="text-xs text-emerald-100 drop-shadow-xs">Jungle Play & Active Motor Skills</p>
                </div>
              </div>
              <div className="p-4 bg-[#FFFBF0] flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600">Explore Toddler Room</span>
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${activeTab === 'toddlers' ? 'bg-[#4CAF50] text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {activeTab === 'toddlers' ? 'Active View' : 'Select'}
                </span>
              </div>
            </div>

            {/* Card 3: Preschool */}
            <div
              onClick={() => setActiveTab('preschool')}
              className={`group cursor-pointer rounded-3xl overflow-hidden border-3 transition-all duration-300 ${
                activeTab === 'preschool'
                  ? 'border-[#2196F3] ring-4 ring-sky-100 shadow-xl scale-[1.02]'
                  : 'border-slate-200 hover:border-sky-300 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <ClassroomPhoto id="learning-tables" title="Preschool Classroom Writing Station" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 bg-[#2196F3] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Ages 2.5 - 5 Years
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-extrabold drop-shadow-xs">Preschool Program</h3>
                  <p className="text-xs text-sky-100 drop-shadow-xs">Writing Mats & Kindergarten Readiness</p>
                </div>
              </div>
              <div className="p-4 bg-[#FFFBF0] flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600">Explore Preschool Class</span>
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${activeTab === 'preschool' ? 'bg-[#2196F3] text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {activeTab === 'preschool' ? 'Active View' : 'Select'}
                </span>
              </div>
            </div>

          </div>

          {/* Detailed Program Card View */}
          <div className="bg-[#FFFBF0] rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-amber-200 shadow-lg">
            {activeTab === 'infants' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block bg-red-100 text-[#F44336] text-xs font-extrabold px-3.5 py-1 rounded-full border border-red-200">
                    Ages 6 - 12 Months
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-poppins">
                    Infant Nurture & Discovery
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    A calm, cozy environment with individualized feeding/sleeping routines, tummy time, sensory exploration, and dedicated loving caregivers.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-medium text-slate-700 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F44336] shrink-0" />
                      <span>Customized Feeding Schedules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F44336] shrink-0" />
                      <span>Sensory & Tactile Play</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F44336] shrink-0" />
                      <span>1:2 Dedicated Infant Care</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F44336] shrink-0" />
                      <span>Daily Parent Photo Updates</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsTourModalOpen(true)}
                      className="bg-[#F44336] hover:bg-[#D32F2F] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Schedule Tour for Infant Room</span>
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-2 bg-white rounded-2xl shadow-md border border-amber-200">
                    <ClassroomPhoto
                      id="sun-corner"
                      title="Cozy Infant Reading & Sun Nook"
                      onClick={() =>
                        setLightboxPhoto({
                          id: 'sun-corner',
                          title: 'Cozy Reading & Sun Corner',
                          description:
                            'Storybook nook flanked by 3D papercraft sun murals, rainbow arches, and cheerful house cutouts.',
                        })
                      }
                    />
                  </div>
                  <p className="text-xs text-center text-slate-500 italic">
                    📸 Actual photo of our Infant Reading & Sun Corner
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'toddlers' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block bg-emerald-100 text-[#4CAF50] text-xs font-extrabold px-3.5 py-1 rounded-full border border-emerald-200">
                    Ages 1 - 2.5 Years
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-poppins">
                    Toddler Explorer & Social Play
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Fostering early words, balance, physical coordination, art painting, and interactive circle time games in our jungle theme playroom.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-medium text-slate-700 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0" />
                      <span>Bilingual Circle Time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0" />
                      <span>Jungle Room Soft Motor Play</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0" />
                      <span>Potty Training Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0" />
                      <span>Music & Rhyme Sessions</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsTourModalOpen(true)}
                      className="bg-[#4CAF50] hover:bg-[#388E3C] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Schedule Tour for Toddler Room</span>
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-2 bg-white rounded-2xl shadow-md border border-amber-200">
                    <ClassroomPhoto
                      id="jungle-room"
                      title="Jungle Room Soft Play Arena"
                      onClick={() =>
                        setLightboxPhoto({
                          id: 'jungle-room',
                          title: 'Jungle Theme Playroom',
                          description:
                            'Vibrant soft-play arena adorned with jungle murals where kiddos run, jump, and build active coordination skills.',
                        })
                      }
                    />
                  </div>
                  <p className="text-xs text-center text-slate-500 italic">
                    📸 Actual photo of our Jungle Theme Playroom
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'preschool' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block bg-sky-100 text-[#2196F3] text-xs font-extrabold px-3.5 py-1 rounded-full border border-sky-200">
                    Ages 2.5 - 5 Years
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-poppins">
                    Preschool Readiness & Early STEM
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Preparing kiddos for Kindergarten through alphabet tracing, double-sided educational writing mats, math counting, and collaborative problem solving.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-medium text-slate-700 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2196F3] shrink-0" />
                      <span>Phonics & Writing Mats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2196F3] shrink-0" />
                      <span>Math 1-100 & Counting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2196F3] shrink-0" />
                      <span>Art & Cultural Science Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2196F3] shrink-0" />
                      <span>Social Readiness Skills</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsTourModalOpen(true)}
                      className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Schedule Tour for Preschool Class</span>
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-2 bg-white rounded-2xl shadow-md border border-amber-200">
                    <ClassroomPhoto
                      id="learning-tables"
                      title="Preschool Learning & Writing Station"
                      onClick={() =>
                        setLightboxPhoto({
                          id: 'learning-tables',
                          title: 'Classroom Table & Learning Mats',
                          description:
                            'Ergonomic wooden tables equipped with double-sided educational writing mats, crayon trays, and ABC carpets.',
                        })
                      }
                    />
                  </div>
                  <p className="text-xs text-center text-slate-500 italic">
                    📸 Actual photo of our Classroom Writing & Math Tables
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* WHY FAMILIES CHOOSE KIDDOS (3 CARDS) */}
      <section id="why-us" className="py-16 md:py-24 bg-[#FFFBF0] border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#9C27B0] bg-purple-100 px-4 py-1.5 rounded-full border border-purple-200">
              Our Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins">
              Why Families Choose Kiddos
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We provide a second home where children build confidence, social bonds, and academic curiosity in a loving atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border-2 border-amber-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-left relative overflow-hidden group">
              <div className="w-16 h-16 rounded-2xl bg-[#4CAF50]/15 text-[#4CAF50] flex items-center justify-center mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#4CAF50] transition-colors">
                Nurturing Educators
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Experienced, certified caregivers who treat every child like family with gentle guidance, patience, and warmth.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                  <span>CPR & First-Aid Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                  <span>Early Childhood Background</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl border-2 border-amber-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-left relative overflow-hidden group">
              <div className="w-16 h-16 rounded-2xl bg-[#FFEB3B]/50 text-amber-800 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Play-Based Learning
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Hands-on sensory activities, circle time storytelling, music, art, and bilingual language development daily.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Stem & Motor Skill Stations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Spanish Language Immersion</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border-2 border-amber-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-left relative overflow-hidden group">
              <div className="w-16 h-16 rounded-2xl bg-[#2196F3]/15 text-[#2196F3] flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#2196F3] transition-colors">
                Safe & Clean Environment
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Impeccably sanitized rooms with child-proof safety features, air purifiers, and 24/7 monitored secure entry.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2196F3]" />
                  <span>Daily Eco-Friendly Sanitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2196F3]" />
                  <span>Strict Nut-Free Policy</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CLASSROOM GALLERY (2x2 GRID OF USER'S 4 REAL UPLOADED PHOTOS) */}
      <section id="classrooms" className="py-16 md:py-24 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#F44336] bg-red-100 px-4 py-1.5 rounded-full border border-red-200">
              Real Facility Photos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 font-poppins">
              Explore Our Classrooms
            </h2>
            <p className="text-slate-600 mt-2 text-base sm:text-lg">
              We take pride in our impeccably tidy, secure, and colorful setups. Click on any photo to inspect in high-resolution zoom!
            </p>
          </div>

          {/* 2x2 Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-3xl border-2 border-amber-200 shadow-md hover:shadow-xl transition-all"
              >
                <ClassroomPhoto
                  id={item.id}
                  title={item.title}
                  aspectRatio="aspect-[4/3]"
                  onClick={() =>
                    setLightboxPhoto({
                      id: item.id,
                      title: item.title,
                      description: item.description,
                    })
                  }
                />
                
                <div className="mt-4 px-2 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <span className="bg-[#FFEB3B] text-slate-900 font-extrabold text-xs px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TOUR & CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 bg-white border-t border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-sm font-extrabold uppercase tracking-widest text-[#4CAF50] bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 font-poppins">
                  Schedule a Visit Today
                </h2>
                <p className="text-slate-600 mt-2">
                  We invite parents to visit our Washington Heights location, meet our educators, and feel the warm atmosphere.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFFBF0] border border-amber-200">
                  <div className="w-12 h-12 rounded-2xl bg-[#4CAF50] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Daycare Address</h4>
                    <p className="text-slate-700 text-sm mt-0.5">558 W 189th St, New York, NY 10040</p>
                    <p className="text-xs text-slate-500 mt-1">Washington Heights Neighborhood</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFFBF0] border border-amber-200">
                  <div className="w-12 h-12 rounded-2xl bg-[#2196F3] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Phone & Text</h4>
                    <a href="tel:9297048966" className="text-[#2196F3] font-bold text-base hover:underline block mt-0.5">
                      (929) 704-8966
                    </a>
                    <p className="text-xs text-slate-500 mt-1">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFFBF0] border border-amber-200">
                  <div className="w-12 h-12 rounded-2xl bg-[#9C27B0] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Email Inquiries</h4>
                    <a href="mailto:info@kiddos-daycare.com" className="text-[#9C27B0] font-bold text-sm hover:underline block mt-0.5">
                      info@kiddos-daycare.com
                    </a>
                  </div>
                </div>

              </div>

              {/* Exterior Location Representation Card */}
              <div className="rounded-2xl overflow-hidden border-2 border-amber-200 shadow-md">
                <ClassroomPhoto id="location-exterior" title="Kiddos Daycare Washington Heights Building" />
              </div>

            </div>

            {/* Tour Request Form Right */}
            <div className="lg:col-span-7 bg-[#FFFBF0] p-8 sm:p-10 rounded-3xl border-2 border-amber-200 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Book Your Private Daycare Tour</h3>
                <p className="text-slate-600 text-sm mt-1">Fill out the form below and our director will contact you within 24 hours.</p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-100 border-2 border-emerald-400 text-emerald-900 p-8 rounded-2xl text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#4CAF50] mx-auto animate-bounce" />
                  <h4 className="text-2xl font-extrabold">Tour Request Received!</h4>
                  <p className="text-sm text-emerald-800">
                    Thank you, {parentName || 'Parent'}! We look forward to meeting you and your little explorer at 558 W 189th St.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Parent's Full Name *</label>
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="e.g. Maria Rodriguez"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        placeholder="(929) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={parentEmail}
                        onChange={(e) => setParentEmail(e.target.value)}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Child's Age Group</label>
                      <select
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm font-medium"
                      >
                        <option>Infant (6 - 12 months)</option>
                        <option>Toddler (1 - 2.5 yrs)</option>
                        <option>Preschool (2.5 - 5 yrs)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Preferred Day & Time</label>
                    <input
                      type="text"
                      placeholder="e.g. Tuesday Morning at 10 AM"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F44336] hover:bg-[#D32F2F] text-white font-extrabold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Tour Request</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
            
            {/* Logo & Intro */}
            <div className="md:col-span-2 space-y-4">
              <KiddosLogo size="lg" />
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Kiddos Group Family Daycare provides high-quality early childhood education in a loving, safe, and colorful environment in Washington Heights, NY.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#classrooms" className="hover:text-white transition-colors">Classroom Photos</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base">Daycare Info</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>📍 558 W 189th St, NY 10040</li>
                <li>📞 (929) 704-8966</li>
                <li>✉️ info@kiddos-daycare.com</li>
                <li>⏰ Mon-Fri 8:00 AM - 6:00 PM</li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Kiddos Group Family Daycare. All Rights Reserved.</p>
            <p>Washington Heights, NY • Licensed Family Daycare</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/19297048966?text=Hi%20Kiddos%20Group%20Family%20Daycare!%20I%20would%20like%20to%20schedule%20a%20tour."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group animate-bounce"
      >
        <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 text-sm font-bold">
          Chat with Us
        </span>
      </a>

      {/* LIGHTBOX MODAL FOR REAL CLASSROOM PHOTOS */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300 animate-in fade-in zoom-in duration-200">
            
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] bg-slate-100 flex items-center justify-center">
              <ClassroomPhoto id={lightboxPhoto.id} aspectRatio="aspect-video" />
            </div>

            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold text-slate-900">{lightboxPhoto.title}</h3>
              <p className="text-slate-600 mt-2 leading-relaxed">{lightboxPhoto.description}</p>
              
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Kiddos Classroom Gallery
                </span>
                <button
                  onClick={() => {
                    setLightboxPhoto(null);
                    setIsTourModalOpen(true);
                  }}
                  className="bg-[#4CAF50] text-white font-bold px-5 py-2 rounded-full text-sm hover:bg-[#388E3C] transition-colors"
                >
                  Schedule Tour of This Room
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TOUR MODAL */}
      {isTourModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-md w-full bg-[#FFFBF0] rounded-3xl p-8 border-4 border-amber-300 shadow-2xl">
            <button
              onClick={() => setIsTourModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-extrabold text-slate-900 font-poppins mb-2">Schedule a Tour</h3>
            <p className="text-xs text-slate-600 mb-6">Come visit our classrooms at 558 W 189th St, NY 10040</p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Maria"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  placeholder="(929) 704-8966"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F44336] text-white font-bold py-3 rounded-xl shadow-md hover:bg-[#D32F2F] transition-all cursor-pointer text-sm"
              >
                Confirm Schedule Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ENROLL MODAL */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-md w-full bg-[#FFFBF0] rounded-3xl p-6 sm:p-8 border-4 border-emerald-400 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsEnrollModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-extrabold text-slate-900 font-poppins mb-2">Enrollment - Fall 2026</h3>
            <p className="text-xs text-slate-600 mb-6">Spots are limited. Secure your child's position today.</p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Parent Name</label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Child's Age</label>
                <select
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-medium"
                >
                  <option>Infant (6 - 12 months)</option>
                  <option>Toddler (1 - 2.5 yrs)</option>
                  <option>Preschool (2.5 - 5 yrs)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4CAF50] text-white font-bold py-3 rounded-xl shadow-md hover:bg-[#388E3C] transition-all cursor-pointer text-sm"
              >
                Submit Enrollment Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
