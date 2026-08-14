/**
 * Corridor Globe
 *
 * The most complex layer of the hero animation: a 3D particle Earth showing
 * the real China → Cameroon trade corridor. Cities use actual geographic
 * coordinates; sea/air routes arc through their real hubs (Dubai, Istanbul,
 * Addis Ababa, Dakar) with animated cargo pulses travelling along each leg.
 *
 * - Glowing tube arcs (sea = blue, land = cyan, air = red spectrum)
 * - Cargo pulses moving along every route
 * - Pulsing markers at origin hubs and at Douala (destination)
 * - Graticule + atmosphere + fibonacci particle shell
 * - Mouse-parallax camera, DPR cap, page-visibility frameloop
 * - Bloom post-processing on high tier only
 *
 * Part of the hero-animation feature.
 */

'use client';

import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useIsAnimationPlaying } from '../store/useAnimationStore';
import { usePageVisibility } from '../hooks';
import type { PerformanceTier } from '../types';

const GLOBE_RADIUS = 2;

/* Real geographic coordinates of the corridor cities. */
const CITY_GEO = {
  guangzhou: { lat: 23.13, lon: 113.26 },
  shanghai: { lat: 31.23, lon: 121.47 },
  shenzhen: { lat: 22.54, lon: 114.06 },
  dubai: { lat: 25.2, lon: 55.27 },
  istanbul: { lat: 41.01, lon: 28.98 },
  addis: { lat: 9.03, lon: 38.74 },
  dakar: { lat: 14.72, lon: -17.47 },
  douala: { lat: 4.05, lon: 9.7 },
} as const;

type CityId = keyof typeof CITY_GEO;

interface CorridorRoute {
  id: string;
  waypoints: CityId[];
  color: string;
  speed: number;
}

/** Sea in blue, land transit in cyan, air freight in the red spectrum. */
const CORRIDOR_ROUTES: CorridorRoute[] = [
  { id: 'sea', waypoints: ['guangzhou', 'dubai', 'dakar'], color: '#3fb0ff', speed: 0.05 },
  { id: 'land', waypoints: ['dakar', 'douala'], color: '#7fd0ff', speed: 0.08 },
  { id: 'air-north', waypoints: ['shanghai', 'addis', 'douala'], color: '#ff6b6b', speed: 0.12 },
  { id: 'air-gulf', waypoints: ['shenzhen', 'dubai', 'douala'], color: '#ff8585', speed: 0.1 },
  { id: 'air-europe', waypoints: ['guangzhou', 'istanbul', 'douala'], color: '#ffa0a0', speed: 0.09 },
];

const ORIGIN_CITIES: CityId[] = ['guangzhou', 'shanghai', 'shenzhen'];
const DESTINATION_CITY: CityId = 'douala';

/** lat/lon (degrees) → position on the globe sphere. */
function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function cityPosition(id: CityId, radius = GLOBE_RADIUS): THREE.Vector3 {
  const { lat, lon } = CITY_GEO[id];
  return latLonToVec3(lat, lon, radius);
}

/**
 * Build the arc curves for one route: one quadratic bezier per leg, with the
 * control point lifted off the surface proportionally to the leg length so
 * long hauls arc higher than short hops.
 */
function buildRouteCurves(route: CorridorRoute): THREE.QuadraticBezierCurve3[] {
  const curves: THREE.QuadraticBezierCurve3[] = [];
  for (let i = 0; i < route.waypoints.length - 1; i++) {
    const start = cityPosition(route.waypoints[i]);
    const end = cityPosition(route.waypoints[i + 1]);
    const lift = GLOBE_RADIUS + start.distanceTo(end) * 0.35;
    const control = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(lift);
    curves.push(new THREE.QuadraticBezierCurve3(start, control, end));
  }
  return curves;
}

/** Point at global progress t (0-1) across all legs of a route. */
function pointAlongRoute(curves: THREE.QuadraticBezierCurve3[], t: number): THREE.Vector3 {
  const scaled = Math.min(t, 0.9999) * curves.length;
  const leg = Math.floor(scaled);
  return curves[leg].getPoint(scaled - leg);
}

// ---------------------------------------------------------------------------
// Particle Earth shell + graticule + atmosphere
// ---------------------------------------------------------------------------

function EarthShell({ tier }: { tier: PerformanceTier }) {
  const particleCount = tier === 'high' ? 2400 : tier === 'medium' ? 1000 : 500;

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      arr[i * 3] = GLOBE_RADIUS * Math.cos(theta) * Math.sin(phi);
      arr[i * 3 + 1] = GLOBE_RADIUS * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = GLOBE_RADIUS * Math.cos(phi);
    }
    return arr;
  }, [particleCount]);

  return (
    <group>
      {/* Opaque-ish core so back-face dots don't bleed through */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS - 0.06, 32, 32]} />
        <meshBasicMaterial color="#041c2b" transparent opacity={0.92} />
      </mesh>

      {/* Graticule */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 28, 18]} />
        <meshBasicMaterial color="#3fb0ff" wireframe transparent opacity={0.07} />
      </mesh>

      {/* Surface dots */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          color="#7fd0ff"
          transparent
          opacity={0.75}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Atmosphere */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.12, 32, 32]} />
        <meshBasicMaterial color="#3fb0ff" transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

// ---------------------------------------------------------------------------
// Route arcs (glowing tubes)
// ---------------------------------------------------------------------------

function RouteArcs({ tier }: { tier: PerformanceTier }) {
  const arcs = useMemo(
    () =>
      CORRIDOR_ROUTES.map((route) => ({
        route,
        curves: buildRouteCurves(route),
      })),
    []
  );

  const tubularSegments = tier === 'high' ? 72 : 48;

  return (
    <group>
      {arcs.map(({ route, curves }) =>
        curves.map((curve, legIndex) => (
          <mesh key={`${route.id}-${legIndex}`}>
            <tubeGeometry args={[curve, tubularSegments, 0.012, 6, false]} />
            <meshBasicMaterial
              color={route.color}
              transparent
              opacity={0.65}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))
      )}
    </group>
  );
}

// ---------------------------------------------------------------------------
// Cargo pulses travelling along the routes
// ---------------------------------------------------------------------------

function CargoPulses({ tier }: { tier: PerformanceTier }) {
  const groupRef = useRef<THREE.Group>(null);
  const isPlaying = useIsAnimationPlaying();
  const pulsesPerRoute = tier === 'high' ? 2 : 1;

  const pulses = useMemo(() => {
    const list: { curves: THREE.QuadraticBezierCurve3[]; speed: number; offset: number; color: string }[] = [];
    CORRIDOR_ROUTES.forEach((route) => {
      const curves = buildRouteCurves(route);
      for (let i = 0; i < pulsesPerRoute; i++) {
        list.push({
          curves,
          speed: route.speed,
          offset: i / pulsesPerRoute + Math.random() * 0.1,
          color: route.color,
        });
      }
    });
    return list;
  }, [pulsesPerRoute]);

  useFrame((state) => {
    if (!groupRef.current || !isPlaying) return;
    const time = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      const pulse = pulses[i];
      const t = (time * pulse.speed + pulse.offset) % 1;
      child.position.copy(pointAlongRoute(pulse.curves, t));
      // Fade in/out at the ends of the journey
      const fade = Math.sin(t * Math.PI);
      (child as THREE.Mesh).scale.setScalar(0.6 + fade * 0.6);
    });
  });

  return (
    <group ref={groupRef}>
      {pulses.map((pulse, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={pulse.color} transparent opacity={0.95} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </group>
  );
}

// ---------------------------------------------------------------------------
// Pulsing city markers (origins in blue, Douala destination in green)
// ---------------------------------------------------------------------------

function CityMarker({ city, color }: { city: CityId; color: string }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const isPlaying = useIsAnimationPlaying();
  const position = useMemo(() => cityPosition(city, GLOBE_RADIUS + 0.01), [city]);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!ringRef.current || !isPlaying) return;
    const t = (state.clock.elapsedTime * 0.9 + phase) % 1;
    ringRef.current.scale.setScalar(1 + t * 1.6);
    (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.7 * (1 - t);
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color={color} blending={THREE.AdditiveBlending} transparent opacity={0.95} />
      </mesh>
      <mesh ref={ringRef} lookAt={position.clone().multiplyScalar(2)}>
        <ringGeometry args={[0.06, 0.075, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.7} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

// ---------------------------------------------------------------------------
// Mouse-parallax camera
// ---------------------------------------------------------------------------

function ParallaxCamera() {
  const { camera } = useThree();
  const isPlaying = useIsAnimationPlaying();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (!isPlaying) return;
    camera.position.x += (mouseRef.current.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (-mouseRef.current.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ---------------------------------------------------------------------------
// Scene + exported component
// ---------------------------------------------------------------------------

/** Rotate the corridor (China→Africa longitudes) toward the camera. */
const CORRIDOR_HEADING = THREE.MathUtils.degToRad(215);

function CorridorScene({ tier }: { tier: PerformanceTier }) {
  const globeRef = useRef<THREE.Group>(null);
  const isPlaying = useIsAnimationPlaying();

  useFrame((state) => {
    if (!globeRef.current || !isPlaying) return;
    globeRef.current.rotation.y = CORRIDOR_HEADING + state.clock.elapsedTime * 0.03;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <ParallaxCamera />
      <group ref={globeRef} rotation={[0.25, CORRIDOR_HEADING, 0]}>
        <EarthShell tier={tier} />
        <RouteArcs tier={tier} />
        <CargoPulses tier={tier} />
        {ORIGIN_CITIES.map((city) => (
          <CityMarker key={city} city={city} color="#3fb0ff" />
        ))}
        <CityMarker city={DESTINATION_CITY} color="#00ff88" />
      </group>

      {tier === 'high' && (
        <EffectComposer>
          <Bloom
            intensity={0.9}
            width={300}
            height={300}
            kernelSize={5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      )}
    </>
  );
}

interface CorridorGlobeProps {
  tier: PerformanceTier;
  className?: string;
}

export function CorridorGlobe({ tier, className = '' }: CorridorGlobeProps) {
  const isPageVisible = usePageVisibility();
  const [dpr, setDpr] = useState(1); // Default to 1 for SSR

  // Set DPR on client side only
  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio, tier === 'high' ? 2 : 1));
  }, [tier]);

  if (tier === 'minimal' || tier === 'low') {
    return null;
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={dpr}
        frameloop={isPageVisible ? 'always' : 'never'}
      >
        <Suspense fallback={null}>
          <CorridorScene tier={tier} />
        </Suspense>
      </Canvas>
    </div>
  );
}
