import React from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight, FileText, Map, Bus, Trash2, Building, HelpCircle, Phone, Stethoscope, Briefcase, GraduationCap, Leaf, Shield, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, any> = {
  FileText, Map, Bus, Trash2, Building, HelpCircle, Phone, Stethoscope, Briefcase, GraduationCap, Leaf, Shield
};

export function ServiceDetailsPage() {
  const { id } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const service = t.services.items.find(s => s.id === id);
  const details = t.services.details;
  
  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-900">Service not found</h1>
        <button 
          onClick={() => navigate('/services')} 
          className="mt-6 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all"
        >
          {details.back}
        </button>
      </div>
    );
  }
  
  const IconComponent = iconMap[service.icon];
  
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Service Header */}
      <div className="bg-white border-b border-gray-200 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/services" 
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-orange-600 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            {details.back}
          </Link>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className={`flex-shrink-0 p-5 rounded-2xl shadow-sm ${service.color} bg-opacity-20 bg-white ring-1 ring-black/5`}>
              {IconComponent && <IconComponent className="w-12 h-12" />}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{service.name}</h1>
              <p className="mt-3 text-xl text-gray-600 max-w-3xl">{service.detail}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main info area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{details.applyTitle}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {details.applyDesc}
              </p>
              
              <ul className="space-y-4 mb-8">
                {details.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl shadow-lg text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 w-full sm:w-auto transform hover:-translate-y-0.5">
                {details.actionBtn}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{details.contactTitle}</h3>
              <p className="text-gray-600 mb-6 text-sm">
                {details.contactDesc}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-sm font-medium">1-800-CITY-HELP</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Map className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-sm font-medium">City Hall, Room 101</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}