import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<ImageMetadata>('../assets/blog/*.{webp,png,jpg,jpeg,avif}', {
  eager: true,
  import: 'default',
});

const BLOG_IMAGES: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(modules).map(([path, img]) => [
    path.split('/').pop()!.replace(/\.[^.]+$/, ''),
    img,
  ])
);

export const blogImage = (id: string): ImageMetadata | undefined => BLOG_IMAGES[id];
