/**
 * GradientText
 * 
 * A premium text gradient shimmer component with animated background.
 * Creates the shimmering headline effect seen on Stripe/Vercel landing pages.
 * Uses CSS background-clip with animated gradient position for smooth performance.
 * 
 * @example
 * <GradientText colors={['#00664B', '#007757', '#00543E']}>
 *   LEXD
 * </GradientText>
 */

'use client';

import { CSSProperties, ElementType, ReactNode, useMemo } from 'react';
import './GradientText.css';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'span' | 'p';
type GradientDirection = 'left' | 'right';

interface GradientTextProps {
  /** Text content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Gradient colors (default: LEXD green ramp) */
  colors?: string[];
  /** Animation direction - 'left' reverses the animation (default: 'right') */
  direction?: GradientDirection;
  /** Animation duration in seconds (default: 3) */
  duration?: number;
  /** HTML element to render as (default: 'span') */
  as?: HeadingTag;
  /** Inline styles */
  style?: CSSProperties;
}

/**
 * Creates a CSS gradient string from color array
 */
function createGradient(colors: string[]): string {
  if (colors.length < 2) {
    return `linear-gradient(90deg, ${colors[0] || '#00664B'}, ${colors[0] || '#007757'})`;
  }
  return `linear-gradient(90deg, ${colors.join(', ')})`;
}

export function GradientText({
  children,
  className = '',
  colors = ['#00664B', '#007757', '#00543E'],
  direction = 'right',
  duration = 3,
  as: Component = 'span',
  style = {},
}: GradientTextProps) {
  // Create the gradient CSS value
  const gradientValue = useMemo(() => createGradient(colors), [colors]);
  
  // Determine animation direction
  const animationDirection = direction === 'left' ? 'reverse' : 'normal';
  
  // Compute dynamic styles
  const dynamicStyles: CSSProperties = {
    backgroundImage: gradientValue,
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    animationName: 'gradient-shimmer',
    animationDuration: `${duration}s`,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDirection: animationDirection,
    ...style,
  };

  return (
    <Component 
      className={`gradient-text ${className}`}
      style={dynamicStyles}
    >
      {children}
    </Component>
  );
}

// Preset configurations for common use cases

/**
 * ShimmerHeading - Pre-configured shimmer effect for headlines
 * 
 * @example
 * <ShimmerHeading level={1}>Premium Headline</ShimmerHeading>
 */
interface ShimmerHeadingProps extends Omit<GradientTextProps, 'as'> {
  level?: 1 | 2 | 3;
}

export function ShimmerHeading({
  level = 1,
  duration = 4,
  colors = ['#00543E', '#007757', '#3D9E80', '#007757', '#00543E'],
  direction = 'right',
  className = '',
  children,
  ...props
}: ShimmerHeadingProps) {
  const tag = `h${level}` as HeadingTag;
  
  return (
    <GradientText
      as={tag}
      colors={colors}
      direction={direction}
      duration={duration}
      className={`shimmer-heading shimmer-heading-${level} ${className}`}
      {...props}
    >
      {children}
    </GradientText>
  );
}

/**
 * ShimmerText - Inline shimmer text for highlighting words
 * 
 * @example
 * <p>Experience <ShimmerText>premium shipping</ShimmerText> today</p>
 */
export function ShimmerText({
  duration = 3,
  colors = ['#00664B', '#007757', '#00543E'],
  direction = 'right',
  className = '',
  children,
  ...props
}: Omit<GradientTextProps, 'as'>) {
  return (
    <GradientText
      as="span"
      colors={colors}
      direction={direction}
      duration={duration}
      className={`shimmer-text ${className}`}
      {...props}
    >
      {children}
    </GradientText>
  );
}

/**
 * PremiumShimmer - Enhanced shimmer with more colors and slower animation
 * Perfect for hero sections and premium CTAs
 */
export function PremiumShimmer({
  duration = 5,
  colors = ['#022E22', '#00543E', '#007757', '#3D9E80', '#007757', '#00543E', '#022E22'],
  direction = 'right',
  className = '',
  children,
  ...props
}: GradientTextProps) {
  return (
    <GradientText
      colors={colors}
      direction={direction}
      duration={duration}
      className={`premium-shimmer ${className}`}
      {...props}
    >
      {children}
    </GradientText>
  );
}

/**
 * SubtleShimmer - Softer shimmer effect for secondary text
 */
export function SubtleShimmer({
  duration = 4,
  colors = ['#4A5A54', '#64756E', '#4A5A54'],
  direction = 'right',
  className = '',
  children,
  ...props
}: GradientTextProps) {
  return (
    <GradientText
      colors={colors}
      direction={direction}
      duration={duration}
      className={`subtle-shimmer ${className}`}
      {...props}
    >
      {children}
    </GradientText>
  );
}

export default GradientText;
