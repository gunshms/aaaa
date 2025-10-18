import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="relative py-32 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            {t.blog.title}
          </h2>
          <p className="text-xl text-white/60 font-light tracking-wide">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.blog.posts.map((post, index) => (
            <article
              key={post.id}
              className="group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden rounded-lg mb-6 bg-[#0A0A0A]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Date */}
                <div className="flex items-center space-x-2 text-sm text-white/50">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/60 leading-relaxed">{post.excerpt}</p>

                {/* Read More */}
                <button className="inline-flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors duration-300 group">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;