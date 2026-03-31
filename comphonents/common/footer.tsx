"use client";
import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap', 'Integrations'],
    Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Webinars', 'API'],
    Legal: ['Privacy', 'Terms', 'Compliance', 'Cookies', 'Licenses']
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Section: Branding and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(234,88,12,0.5)]">
                S
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase">SCAMPUS</span>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-medium">
              Transforming college management with intelligent automation and seamless integration. Empowering institutions to deliver exceptional educational experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                <Mail size={18} className="text-orange-500" />
                <span>hello@scampus.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                <Phone size={18} className="text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer">
                <MapPin size={18} className="text-orange-500" />
                <span>San Francisco, CA 94107</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[ FaFacebook, FaTwitter, FaLinkedin, FaInstagram ].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all cursor-pointer group">
                  <Icon size={18} className="text-gray-400 group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns (Excluding Legal) */}
          {Object.entries(footerLinks)
            .filter(([title]) => title !== 'Legal') // Filter out Legal from top
            .map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-lg mb-8">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section: Stay Updated */}
        <div className="border-y border-white/5 py-16 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h4 className="text-2xl font-bold">Stay Updated</h4>
              <p className="text-gray-500">Get the latest updates, features, and educational insights delivered to your inbox.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/[0.03] border border-orange/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500/50 transition-all text-white placeholder:text-gray-600"
              />
              <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-[0_10px_20px_rgba(234,88,12,0.3)] whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm font-medium">
          <p>© 2026 SCAMPUS. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;