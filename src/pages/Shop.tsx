import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');
  const newFilter = searchParams.get('new');

  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedIntention, setSelectedIntention] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const intentions = ['love', 'healing', 'protection', 'abundance'];
  const types = ['bracelet', 'necklace', 'set'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply type filter from URL
    if (typeFilter) {
      result = result.filter(p => p.type === typeFilter);
      setSelectedType([typeFilter]);
    }

    // Apply new filter from URL
    if (newFilter) {
      result = result.filter(p => p.isNew);
    }

    // Apply intention filter
    if (selectedIntention.length > 0) {
      result = result.filter(p => selectedIntention.includes(p.intention));
    }

    // Apply type filter
    if (selectedType.length > 0 && !typeFilter) {
      result = result.filter(p => selectedType.includes(p.type));
    }

    // Apply price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = result.filter(p => p.isNew).concat(result.filter(p => !p.isNew));
        break;
      default:
        result = result.filter(p => p.isBestSeller).concat(result.filter(p => !p.isBestSeller));
    }

    return result;
  }, [typeFilter, newFilter, selectedIntention, selectedType, priceRange, sortBy]);

  const toggleFilter = (filter: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(filter)) {
      setList(list.filter(f => f !== filter));
    } else {
      setList([...list, filter]);
    }
  };

  return (
    <div className="pt-28">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-cream to-[#EDE6DC]">
        <div className="container-custom">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">Collection</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-darkBrown mt-2 mb-4">
            {typeFilter ? (
              typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1) + 's'
            ) : newFilter ? (
              'New Arrivals'
            ) : (
              'Shop All'
            )}
          </h1>
          <p className="text-darkBrown/70">
            {filteredProducts.length} products
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="section-padding bg-gradient-to-b from-[#EDE6DC] to-[#F5F1EA]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-gradient-to-br from-[#F5F1EA] via-[#EDE6DC] to-[#E8E0D8] rounded-xl p-6 shadow-sm sticky top-28 border border-khaki/20">
                <h3 className="font-serif text-lg font-bold text-darkBrown mb-4">
                  Filters
                </h3>

                {/* Intention Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-darkBrown mb-3">Intention</h4>
                  <div className="space-y-2">
                    {intentions.map((intention) => (
                      <label key={intention} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedIntention.includes(intention)}
                          onChange={() => toggleFilter(intention, selectedIntention, setSelectedIntention)}
                          className="w-4 h-4 rounded border-khaki text-gold focus:ring-gold"
                        />
                        <span className="text-darkBrown/70 capitalize">
                          {intention.replace('-', ' & ')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-darkBrown mb-3">Type</h4>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedType.includes(type)}
                          onChange={() => toggleFilter(type, selectedType, setSelectedType)}
                          className="w-4 h-4 rounded border-khaki text-gold focus:ring-gold"
                        />
                        <span className="text-darkBrown/70 capitalize">
                          {type}s
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-darkBrown mb-3">Price</h4>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-20 px-2 py-1 bg-white border border-khaki rounded text-sm focus:border-gold focus:outline-none"
                      placeholder="Min"
                    />
                    <span className="text-darkBrown/50">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-20 px-2 py-1 bg-white border border-khaki rounded text-sm focus:border-gold focus:outline-none"
                      placeholder="Max"
                    />
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedIntention.length > 0 || selectedType.length > 0) && (
                  <button
                    onClick={() => {
                      setSelectedIntention([]);
                      setSelectedType([]);
                      setPriceRange([0, 100]);
                    }}
                    className="text-goldDark hover:text-gold text-sm font-medium"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort & View Options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 text-darkBrown"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>

                <div className="flex items-center gap-4">
                  <span className="text-darkBrown/60 text-sm">
                    {filteredProducts.length} products
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-darkBrown/60 text-sm hidden sm:inline">Sort by:</span>
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-white border border-khaki rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:border-gold"
                      >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                        <option value="newest">Newest</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-darkBrown/50 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-darkBrown/60 mb-4">
                    No products found matching your filters.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedIntention([]);
                      setSelectedType([]);
                      setPriceRange([0, 100]);
                    }}
                    className="btn-secondary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
