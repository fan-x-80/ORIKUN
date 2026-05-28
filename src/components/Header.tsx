import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Globe, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Navigation items with routes
const navigation = {
  Shop: {
    All: '/shop',
    Bracelets: '/bracelets',
    Necklaces: '/necklaces',
    New: '/shop?new=true'
  },
  'Best Sellers': {
    'Love Bracelet': '/product/love-bracelet',
    'Abundance Bracelet': '/product/abundance-bracelet',
    'Protection Bracelet': '/product/protection-bracelet'
  },
  'By Intention': {
    'Love & Attraction': '/intention/love',
    'Healing & Calm': '/intention/healing',
    'Protection & Grounding': '/intention/protection',
    'Abundance & Wealth': '/intention/abundance'
  },
  About: '/about',
  FAQ: '/faq'
};

const regions = [
  { code: 'US', name: 'United States', currency: 'USD' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP' },
  { code: 'DE', name: 'Germany', currency: 'EUR' },
  { code: 'AT', name: 'Austria', currency: 'EUR' },
  { code: 'FR', name: 'France', currency: 'EUR' },
  { code: 'ES', name: 'Spain', currency: 'EUR' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [regionSelectorOpen, setRegionSelectorOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  // Refs for dropdown containers
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const regionRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIX 1: Click-outside detection - closes dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close region selector if clicked outside
      if (regionRef.current && !regionRef.current.contains(event.target as Node)) {
        setRegionSelectorOpen(false);
      }
      // Close account dropdown if clicked outside
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setAccountDropdownOpen(false);
      }
      // Close nav dropdowns if clicked outside their container
      Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdown(prev => prev === key ? null : prev);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // FIX 2: Keyboard accessibility - Escape key closes all dropdowns
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setRegionSelectorOpen(false);
        setAccountDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // FIX 3: Scroll to top on navigation
  const handleNavClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setRegionSelectorOpen(false);
    setAccountDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-cream/95'
      }`}
    >
      {/* Announcement Bar with Social Icons */}
      <div className="bg-goldDark">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2">
            {/* Left: Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.tiktok.com/@orikun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/orikun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@orikun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Center: Announcement Text */}
            <div className="flex-1 text-center">
              <a href="/shop" className="hover:opacity-90 transition-opacity text-white text-sm">
                <span>BUY 1, GET 2ND 30% OFF</span>
                <span className="hidden sm:inline mx-2">|</span>
                <span className="hidden sm:inline">Free Shipping on Orders $50+</span>
              </a>
            </div>

            {/* Right: Empty space for balance */}
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <Link to="/" onClick={handleNavClick} className="flex-shrink-0">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-darkBrown tracking-wide">
              ORIKUN
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {Object.entries(navigation).map(([key, items]) => (
              <div
                key={key}
                ref={(el) => { dropdownRefs.current[key] = el; }}
                className="relative"
                onMouseEnter={() => typeof items === 'object' && setOpenDropdown(key)}
                onMouseLeave={() => typeof items === 'object' && setOpenDropdown(null)}
              >
                <Link
                  to={typeof items === 'string' ? items : '#'}
                  onClick={handleNavClick}
                  className="text-darkBrown hover:text-goldDark transition-colors font-medium py-2 flex items-center gap-1"
                >
                  {key}
                  {typeof items === 'object' && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* FIX 4: Dropdown menu - visible on hover, closes on mouse leave */}
                {openDropdown === key && typeof items === 'object' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-3 animate-fade-in z-50">
                    {Object.entries(items).map(([label, path]) => (
                      <Link
                        key={label}
                        to={path}
                        onClick={handleNavClick}
                        className="block px-4 py-2.5 text-darkBrown hover:bg-cream hover:text-goldDark transition-colors text-sm"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-3">
            {/* Region Selector */}
            <div ref={regionRef} className="relative hidden md:block">
              <button
                onClick={() => setRegionSelectorOpen(!regionSelectorOpen)}
                onBlur={() => setTimeout(() => setRegionSelectorOpen(false), 150)}
                className="flex items-center gap-1 text-darkBrown hover:text-goldDark transition-colors p-1"
                aria-expanded={regionSelectorOpen}
                aria-haspopup="listbox"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">{selectedRegion.code}</span>
              </button>

              {regionSelectorOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2 animate-fade-in z-50 overflow-hidden">
                  {regions.map((region) => (
                    <button
                      key={region.code}
                      onClick={() => {
                        setSelectedRegion(region);
                        setRegionSelectorOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 hover:bg-cream transition-colors text-sm ${
                        selectedRegion.code === region.code ? 'text-goldDark font-medium bg-gold/10' : 'text-darkBrown'
                      }`}
                      role="option"
                      aria-selected={selectedRegion.code === region.code}
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Account */}
            <div ref={accountRef} className="relative">
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                onBlur={() => setTimeout(() => setAccountDropdownOpen(false), 150)}
                className="text-darkBrown hover:text-goldDark transition-colors flex items-center gap-1 p-1"
                aria-expanded={accountDropdownOpen}
                aria-haspopup="menu"
              >
                <User className="w-5 h-5" />
              </button>

              {accountDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-lg shadow-xl py-2 animate-fade-in border border-khaki/20 z-50 overflow-hidden">
                  <Link
                    to="/login"
                    onClick={() => { handleNavClick(); setAccountDropdownOpen(false); }}
                    className="block px-4 py-2.5 text-darkBrown hover:bg-cream hover:text-goldDark transition-colors text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => { handleNavClick(); setAccountDropdownOpen(false); }}
                    className="block px-4 py-2.5 text-darkBrown hover:bg-cream hover:text-goldDark transition-colors text-sm"
                  >
                    Create Account
                  </Link>
                  <div className="border-t border-khaki/20 my-1"></div>
                  <Link
                    to="/account"
                    onClick={() => { handleNavClick(); setAccountDropdownOpen(false); }}
                    className="block px-4 py-2.5 text-darkBrown hover:bg-cream hover:text-goldDark transition-colors text-sm"
                  >
                    My Account
                  </Link>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              onClick={handleNavClick}
              className="text-darkBrown hover:text-goldDark transition-colors relative p-1"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium px-1">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-darkBrown p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - FIX 5: Full mobile navigation with scroll-to-top */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream border-t absolute top-full left-0 right-0 shadow-lg overflow-y-auto max-h-[80vh]">
          <div className="container-custom py-4">
            {Object.entries(navigation).map(([key, items]) => (
              <div key={key} className="py-2">
                {typeof items === 'string' ? (
                  <Link
                    to={items}
                    onClick={handleNavClick}
                    className="block py-3 text-darkBrown font-medium hover:text-goldDark transition-colors border-b border-khaki/10"
                  >
                    {key}
                  </Link>
                ) : (
                  <>
                    <Link
                      to={items['All'] || '#'}
                      onClick={handleNavClick}
                      className="block py-3 text-darkBrown font-medium border-b border-khaki/10"
                    >
                      {key}
                    </Link>
                    <div className="pl-4 py-1">
                      {Object.entries(items).map(([label, path]) => (
                        <Link
                          key={label}
                          to={path}
                          onClick={handleNavClick}
                          className="block py-2 text-darkBrown/80 hover:text-goldDark transition-colors text-sm"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Account Links in Mobile */}
            <div className="pt-4 border-t mt-2">
              <span className="block py-2 text-darkBrown font-medium">Account</span>
              <Link
                to="/login"
                onClick={handleNavClick}
                className="block py-2 text-darkBrown/80 hover:text-goldDark text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={handleNavClick}
                className="block py-2 text-darkBrown/80 hover:text-goldDark text-sm"
              >
                Create Account
              </Link>
              <Link
                to="/account"
                onClick={handleNavClick}
                className="block py-2 text-darkBrown/80 hover:text-goldDark text-sm"
              >
                My Account
              </Link>
            </div>

            {/* Mobile Region Selector */}
            <div className="pt-4 border-t mt-2">
              <span className="block py-2 text-darkBrown font-medium">Region</span>
              <div className="grid grid-cols-2 gap-2">
                {regions.map((region) => (
                  <button
                    key={region.code}
                    onClick={() => {
                      setSelectedRegion(region);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                      selectedRegion.code === region.code
                        ? 'bg-gold text-white'
                        : 'bg-warmGray text-darkBrown hover:bg-khaki'
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}