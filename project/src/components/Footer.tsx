import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-red-100 to-red-500/20 text-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-3xl">🍁</span>
              <span className="ml-2 text-red-700 font-bold text-xl">Canadian Diversity Quest</span>
            </div>
            <p className="text-sm text-red-700 mb-6">
              Celebrating Canada’s multiculturalism, Indigenous heritage, and unity from coast to coast to coast.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-700 hover:text-red-900 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-700 hover:text-red-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-700 hover:text-red-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-red-700 hover:text-red-900 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-red-900 font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-900 transition-colors">Canadian Tutorials</a></li>
              <li><a href="#" className="hover:text-red-900 transition-colors">Multicultural Resources</a></li>
              <li><a href="#" className="hover:text-red-900 transition-colors">Indigenous Voices</a></li>
              <li><a href="#" className="hover:text-red-900 transition-colors">Diversity Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-red-900 font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-900 transition-colors">Forums</a></li>
              <li><a href="#" className="hover:text-red-900 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-red-900 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-red-900 transition-colors">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-red-900 font-semibold mb-4">Canada</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-red-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-red-900 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-red-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-red-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2025 Canadian Diversity Quest. All rights reserved. Proudly made in the True North, strong and free.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#" className="hover:text-red-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-900 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;