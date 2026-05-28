import React from 'react';
import { Link } from 'react-router-dom';

interface IntentionCardProps {
  id: string;
  name: string;
  description: string;
  emoji: string;
  gradient: string;
  count?: number;
}

export default function IntentionCard({
  id,
  name,
  description,
  emoji,
  gradient,
  count
}: IntentionCardProps) {
  return (
    <Link to={`/intention/${id}`} className="group block">
      <div
        className={`${gradient} rounded-2xl p-6 md:p-8 h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}
      >
        <div className="text-4xl mb-4">{emoji}</div>
        <h3 className={`font-serif text-xl md:text-2xl font-bold mb-2 ${
          id === 'protection' ? 'text-white' : 'text-darkBrown'
        }`}>
          {name}
        </h3>
        <p className={`text-sm mb-4 ${
          id === 'protection' ? 'text-white/80' : 'text-darkBrown/70'
        }`}>
          {description}
        </p>
        {count && (
          <span className={`text-xs ${
            id === 'protection' ? 'text-white/60' : 'text-darkBrown/50'
          }`}>
            {count} products
          </span>
        )}
        <div className={`mt-4 inline-flex items-center gap-2 text-sm font-medium ${
          id === 'protection' ? 'text-white' : 'text-goldDark'
        } group-hover:gap-3 transition-all`}>
          Explore
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
