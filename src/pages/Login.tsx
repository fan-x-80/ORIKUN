import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      // For demo, redirect to account
      window.location.href = '/account';
    }, 1000);
  };

  return (
    <div className="pt-28 min-h-screen bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
      <div className="container-custom py-16">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-goldDark text-sm font-medium">Welcome Back</span>
            </div>
            <h1 className="font-serif text-4xl font-bold text-darkBrown mb-2">
              Continue Your Journey
            </h1>
            <p className="text-darkBrown/70">
              Track your orders, save your favorites, and continue your energy journey.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-3xl p-8 md:p-10 border border-khaki/20 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-darkBrown mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-khaki/50 rounded-xl focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-darkBrown mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-khaki/50 rounded-xl focus:outline-none focus:border-gold transition-colors pr-12"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-darkBrown/50 hover:text-darkBrown"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-khaki text-gold focus:ring-gold" />
                  <span className="text-sm text-darkBrown/70">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-goldDark hover:text-gold">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <span>→</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-darkBrown/70">
                Don't have an account?{' '}
                <Link to="/register" className="text-goldDark hover:text-gold font-medium">
                  Create Your ORIKUN Account
                </Link>
              </p>
            </div>
          </div>

          {/* Trust */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-darkBrown/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Secure Login
            </div>
            <div>•</div>
            <div>256-bit SSL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
