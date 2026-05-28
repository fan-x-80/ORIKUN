import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Flame, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: '16cm'
    });
    showToast('Added to your cart');

    setTimeout(() => setIsAdding(false), 600);
  };

  // Get intention-specific warm background
  const getIntentionBg = () => {
    switch (product.intention) {
      case 'love':
        return 'from-[#F5E6E8] via-[#E8D4D6] to-[#DCC8C4]';
      case 'healing':
        return 'from-[#E8E4F0] via-[#D8D0E8] to-[#CCC4DC]';
      case 'protection':
        return 'from-[#4A4A4A] via-[#3A3A3A] to-[#2A2A2A]';
      case 'abundance':
        return 'from-[#F5EDD6] via-[#E8DCC8] to-[#D8C8B0]';
      default:
        return 'from-[#F5F1EA] via-[#E8E0D8] to-[#D8D0C4]';
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={`group block ${featured ? 'transform md:-translate-y-2' : ''}`}
    >
      <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Image Container - Warm Scene Background */}
        <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${getIntentionBg()}`}>
          {/* Soft warm overlay for "sunrise/sunset" effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20" />

          {/* Subtle texture pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Product Image - Centered with warm filter */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-lg transition-transform duration-700 group-hover:scale-105"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(166, 124, 82, 0.3))',
              }}
            />
          </div>

          {/* Warm light rays effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/30 via-transparent to-transparent" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white/20 via-transparent to-transparent" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-white/30 via-transparent to-transparent" />
          </div>

          {/* Badges - Elegant style */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isBestSeller && (
              <span className="bg-white/90 backdrop-blur-sm text-goldDark text-xs px-4 py-1.5 rounded-full font-medium shadow-sm">
                ✦ Bestseller
              </span>
            )}
            {product.isNew && (
              <span className="bg-white/90 backdrop-blur-sm text-darkBrown text-xs px-4 py-1.5 rounded-full font-medium shadow-sm">
                New Arrival
              </span>
            )}
            {product.isLimited && (
              <span className="bg-white/90 backdrop-blur-sm text-protection text-xs px-4 py-1.5 rounded-full font-medium shadow-sm">
                Limited
              </span>
            )}
          </div>

          {/* Right side badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
            {/* Wishlist Button */}
            <button
              onClick={handleWishlist}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-sm ${
                isWishlisted
                  ? 'bg-red-500/90 text-white'
                  : 'bg-white/90 text-darkBrown/60 hover:text-red-500 hover:bg-white'
              }`}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart
                className={`w-5 h-5 transition-transform ${
                  isWishlisted ? 'fill-current scale-110' : ''
                }`}
              />
            </button>

            {/* Discount Badge */}
            {discount > 0 && (
              <span className="bg-red-500/90 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full font-medium">
                -{discount}%
              </span>
            )}
          </div>

          {/* Quick Add - Subtle overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0">
            <button
              onClick={handleQuickAdd}
              disabled={isAdding}
              className={`w-full bg-white/95 backdrop-blur-sm text-goldDark py-3 rounded-full font-medium transition-all shadow-lg flex items-center justify-center gap-2 ${
                isAdding ? 'bg-gold text-white' : 'hover:bg-white'
              }`}
            >
              <ShoppingCart className={`w-4 h-4 ${isAdding ? 'animate-bounce' : ''}`} />
              {isAdding ? 'Added!' : 'Quick Add'}
            </button>
          </div>

          {/* Stock Warning - Only on hover */}
          {product.stockLeft && product.stockLeft <= 15 && (
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-1 text-red-600 text-xs bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Flame className="w-3 h-3" />
                <span>Only {product.stockLeft} left</span>
              </div>
            </div>
          )}
        </div>

        {/* Content - Warm card style */}
        <div className="bg-gradient-to-b from-[#F5F1EA] to-[#EDE6DC] p-5">
          {/* Intention Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-2 h-2 rounded-full ${
              product.intention === 'love' ? 'bg-love' :
              product.intention === 'healing' ? 'bg-healing' :
              product.intention === 'protection' ? 'bg-white/50' :
              'bg-abundance'
            }`} />
            <span className="text-xs text-darkBrown/50 uppercase tracking-wider">
              {product.intention.replace('-', ' & ')}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-semibold text-darkBrown mb-1 group-hover:text-goldDark transition-colors leading-tight">
            {product.name}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-darkBrown/60 mb-3 line-clamp-1">
            {product.subtitle}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'text-gold fill-current'
                      : 'text-khaki/50'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-darkBrown/50">
              {product.rating} ({product.reviews.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-darkBrown">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-darkBrown/40 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
