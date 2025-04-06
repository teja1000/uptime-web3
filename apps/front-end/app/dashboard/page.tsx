"use client"

import React from 'react';
import { CheckCircle2, Bell, Activity, Shield, Clock, ArrowRight, Server, Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes"

function App() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black text-gray-100' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className={`h-8 w-8 ${isDark ? 'text-purple-500' : 'text-indigo-600'}`} />
              <span className="text-xl font-bold">BetterUptime</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Features</a>
              <a href="#pricing" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Pricing</a>
              <a href="#contact" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  isDark 
                    ? 'bg-gray-800 text-yellow-500 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } transition-colors`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
            <button className={`${
              isDark 
                ? 'bg-purple-600 hover:bg-purple-700' 
                : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white px-6 py-2 rounded-lg transition-colors`}>
              Get Started
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-20 pb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Monitor Your Services<br />With Confidence
          </h1>
          <p className={`text-xl mb-10 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get instant alerts when your services go down. Monitor uptime, performance, and ensure reliability across your entire stack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className={`${
              isDark 
                ? 'bg-purple-600 hover:bg-purple-700' 
                : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2`}>
              <span>Start Monitoring</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className={`border-2 px-8 py-4 rounded-lg transition-colors ${
              isDark 
                ? 'border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white' 
                : 'border-gray-200 text-gray-700 hover:border-gray-300'
            }`}>
              View Demo
            </button>
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b ${
          isDark 
            ? 'from-transparent to-gray-900' 
            : 'from-transparent to-gray-50'
        }`}></div>
      </header>

      {/* Features Section */}
      <section id="features" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Everything you need for reliable monitoring</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Bell className={`h-8 w-8 ${isDark ? 'text-purple-500' : 'text-indigo-600'}`} />}
              title="Instant Alerts"
              description="Get notified immediately when your services experience issues through multiple channels."
              isDark={isDark}
            />
            <FeatureCard
              icon={<Server className={`h-8 w-8 ${isDark ? 'text-purple-500' : 'text-indigo-600'}`} />}
              title="Status Pages"
              description="Beautiful, customizable status pages to keep your users informed."
              isDark={isDark}
            />
            <FeatureCard
              icon={<Clock className={`h-8 w-8 ${isDark ? 'text-purple-500' : 'text-indigo-600'}`} />}
              title="24/7 Monitoring"
              description="Round-the-clock monitoring from multiple locations worldwide."
              isDark={isDark}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Simple, transparent pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="29"
              features={[
                "Up to 10 monitors",
                "5 team members",
                "Email notifications",
                "Basic reporting"
              ]}
              isDark={isDark}
            />
            <PricingCard
              title="Professional"
              price="99"
              features={[
                "Up to 50 monitors",
                "Unlimited team members",
                "All notification channels",
                "Advanced reporting",
                "Custom status pages"
              ]}
              highlighted={true}
              isDark={isDark}
            />
            <PricingCard
              title="Enterprise"
              price="299"
              features={[
                "Unlimited monitors",
                "Priority support",
                "SLA guarantees",
                "Custom integrations",
                "Advanced API access"
              ]}
              isDark={isDark}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${isDark ? 'bg-purple-900' : 'bg-indigo-600'} py-20`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Start monitoring your services today
          </h2>
          <p className={`${isDark ? 'text-purple-100' : 'text-indigo-100'} mb-10 max-w-2xl mx-auto`}>
            Join thousands of companies who trust us with their uptime monitoring
          </p>
          <button className={`bg-white px-8 py-4 rounded-lg transition-colors ${
            isDark 
              ? 'text-purple-900 hover:bg-purple-50' 
              : 'text-indigo-600 hover:bg-indigo-50'
          }`}>
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-800 text-gray-300'} py-12`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-white mb-4">
                <Activity className={`h-6 w-6 ${isDark ? 'text-purple-500' : 'text-indigo-400'}`} />
                <span className="font-bold">BetterUptime</span>
              </div>
              <p className="text-sm">
                Making the web more reliable, one monitor at a time.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Status Page</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-700'} mt-12 pt-8 text-sm text-center`}>
            © 2025 BetterUptime. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isDark: boolean;
}

function FeatureCard({ icon, title, description, isDark }: FeatureCardProps) {
  return (
    <div className={`p-8 rounded-xl shadow-lg transition-shadow ${
      isDark 
        ? 'bg-gray-800 hover:shadow-purple-900/20' 
        : 'bg-white hover:shadow-indigo-900/10'
    }`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  isDark: boolean;
}

function PricingCard({ title, price, features, highlighted = false, isDark }: PricingCardProps) {
  return (
    <div className={`rounded-xl p-8 ${
      highlighted 
        ? `${isDark ? 'bg-purple-900' : 'bg-indigo-600'} text-white ring-4 ${
            isDark ? 'ring-purple-500' : 'ring-indigo-500'
          } ring-opacity-50` 
        : `${isDark ? 'bg-gray-800 border-2 border-gray-700' : 'bg-white border-2 border-gray-100'} ${
            isDark ? 'text-white' : 'text-gray-900'
          }`
    }`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="mb-8">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-sm">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckCircle2 className={`h-5 w-5 ${
              highlighted 
                ? isDark ? 'text-purple-300' : 'text-indigo-300'
                : isDark ? 'text-purple-500' : 'text-indigo-500'
            }`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg transition-colors ${
        highlighted
          ? `bg-white ${isDark ? 'text-purple-900 hover:bg-purple-50' : 'text-indigo-600 hover:bg-indigo-50'}`
          : isDark 
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}

export default App;