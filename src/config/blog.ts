/**
 * Blog configuration constants
 * Centralized configuration for blog-related settings
 */

export const BLOG_CONFIG = {
  // Default image for articles without specific thumbnails
  DEFAULT_THUMBNAIL: '/images/blogs/seo-strategies-google-search-results-2025.webp',
  
  // Default alt text for blog images
  DEFAULT_ALT_TEXT: 'Digital marketing article by Fascinante Digital',
  
  // Image dimensions for blog cards
  IMAGE_DIMENSIONS: {
    width: 1200,
    height: 675,
  },
  
  // Image dimensions for featured blog swiper
  FEATURED_IMAGE_DIMENSIONS: {
    width: 1200,
    height: 675,
  },
} as const;

export default BLOG_CONFIG;
