/**
 * Scroll Animations
 * 
 * Zero-JavaScript-overhead scroll-driven animations using CSS animation-timeline: view()
 * 
 * Features:
 * - Pure CSS scroll-driven animations (no JS overhead)
 * - Progressive enhancement with @supports
 * - Reduced motion support
 * - TypeScript types included
 * 
 * Usage:
 * ```tsx
 * import { ScrollReveal, ScrollRevealGroup } from '@/components/scroll-animations';
 * 
 * // Single element
 * <ScrollReveal animation="fade-in-up">
 *   <YourContent />
 * </ScrollReveal>
 * 
 * // Group with stagger
 * <ScrollRevealGroup useStagger>
 *   {items.map(item => (
 *     <ScrollReveal key={item.id} animation="scale-in">
 *       <Card {...item} />
 *     </ScrollReveal>
 *   ))}
 * </ScrollRevealGroup>
 * ```
 */

export {
  ScrollReveal,
  ScrollRevealGroup,
  HeroScrollReveal,
  CardScrollReveal,
  TextScrollReveal,
} from './ScrollReveal';

export type {
  ScrollAnimation,
  AnimationRange,
} from './ScrollReveal';

// IntersectionObserver-based reveal — works in every modern browser (Safari &
// Firefox included). Mount <RevealOnScroll /> once; opt elements in with a
// `data-reveal` attribute. See RevealOnScroll.tsx for the full contract.
export { RevealOnScroll } from './RevealOnScroll';
