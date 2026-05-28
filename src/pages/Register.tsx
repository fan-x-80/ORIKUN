import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, Check } from 'lucide-react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const passwordRequirements = [
    { met: password.length >= 8, text: 'At least 8 characters' },
    { met: /[A-Z]/.test(password), text: 'One uppercase letter' },
    { met: /[0-9]/.test(password), text: 'One number' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!passwordRequirements.every(r => r.met)) {
      setError('Please meet all password requirements');
      return;
    }

    setIsLoading(true);

    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1000);
  };

  if (success) {
    return (
      <div className="pt-28 min-h-screen bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
        <div className="container-custom py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-gold" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-darkBrown mb-4">
              Welcome to ORIKUN!
            </h1>
            <p className="text-darkBrown/70 mb-8">
              Your account has been created. Check your email for a welcome gift - 10% off your first order!
            </p>
            <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
              Start Shopping
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC]">
      <div className="container-custom py-16">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-goldDark text-sm font-medium">Join the Journey</span>
            </div>
            <h1 className="font-serif text-4xl font-bold text-darkBrown mb-2">
              Create Your ORIKUN Account
            </h1>
            <p className="text-darkBrown/70">
              Save your energy pieces. Track your journey.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-[#F5F1EA] to-[#EDE6DC] rounded-3xl p-8 md:p-10 border border-khaki/20 shadow-xl">
            {/* Welcome Offer */}
            <div className="bg-gradient-to-r from-gold/20 to-goldDark/10 rounded-xl p-4 mb-6 text-center">
              <p className="text-goldDark font-medium">
                🎁 Get 10% OFF your first order when you sign up!
              </p>
            </div>

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
                    placeholder="Create a password"
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

                {/* Password Requirements */}
                {password && (
                  <div className="mt-3 space-y-1">
                    {passwordRequirements.map((req, i) => (
                      <div key={i} className={`flex items-center gap-2 text-xs ${req.met ? 'text-green-600' : 'text-darkBrown/50'}`}>
                        <Check className={`w-3 h-3 ${req.met ? 'opacity-100' : 'opacity-50'}`} />
                        {req.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" className="w-4 h-4 mt-1 rounded border-khaki text-gold focus:ring-gold" required />
                <label htmlFor="terms" className="text-sm text-darkBrown/70">
                  I agree to the <Link to="/terms" className="text-goldDark hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-goldDark hover:underline">Privacy Policy</Link>
                </label>
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
                    Create Account
                    <span>→</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-darkBrown/70">
                Already have an account?{' '}
                <Link to="/login" className="text-goldDark hover:text-gold font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Trust */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-darkBrown/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Secure Connection
            </div>
            <div>•</div>
            <div>Unsubscribe anytime</div>
          </div>
        </div>
      </div>
    </div>
  );
}
