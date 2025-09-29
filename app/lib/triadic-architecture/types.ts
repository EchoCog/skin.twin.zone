/**
 * Triadic Architecture of Relevance Realization - Type Definitions
 * Based on "Application of the Triadic Architecture of Relevance Realization to Skincare.md"
 */

// Core triadic levels
export enum TriadicLevel {
  BARRIER_AUTOPOIESIS = 'Λ¹_barrier_simulation',
  ADAPTIVE_ANTICIPATION = 'Λ²_adaptive_protection',
  SYNERGISTIC_EMERGENCE = 'Λ³_synergistic_emergence',
}

// Vessel state tracking for triadic levels
export interface TriadicVesselState {
  currentLevel: TriadicLevel;
  activeComponents: {
    [TriadicLevel.BARRIER_AUTOPOIESIS]: BarrierComponents;
    [TriadicLevel.ADAPTIVE_ANTICIPATION]: AdaptiveComponents;
    [TriadicLevel.SYNERGISTIC_EMERGENCE]: SynergisticComponents;
  };
  emergentProperties: EmergentProperty[];
  triadicComplexity: number; // Represents Ξ^(dermal) complexity measure
}

// Level 1: Barrier Chemistry Simulation
export interface BarrierComponents {
  lipidSynthesisPrecursors: string[]; // ceramides, cholesterol, fatty acids
  keratinizationModulators: string[]; // alpha-hydroxy acids, retinoids
  transpidermalFactors: string[]; // humectants, occlusives
}

// Level 2: Adaptive Protection Integration
export interface AdaptiveComponents {
  antioxidantSystems: string[]; // vitamin C, E, ferulic acid
  environmentalSensors: string[]; // niacinamide, zinc oxide
  predictiveRepair: string[]; // peptides, growth factors
}

// Level 3: Synergistic Formulation Emergence
export interface SynergisticComponents {
  deliverySystems: string[]; // liposomes, nanoparticles
  balancingSystems: string[]; // buffering systems
  compatibilityFactors: string[]; // chelators, stabilizers
}

// Emergent properties from triadic integration
export interface EmergentProperty {
  level: number; // Λ^n where n > 3
  name: string;
  description: string;
  dependencies: TriadicLevel[];
  emergenceOperator: string; // Mathematical representation
}

// Triadic formulation protocol
export interface TriadicFormulationProtocol {
  initializeLevel(level: TriadicLevel): TriadicVesselState;
  transitionLevel(currentState: TriadicVesselState, targetLevel: TriadicLevel): TriadicVesselState;
  calculateEmergence(state: TriadicVesselState): EmergentProperty[];
  generateProductCategories(state: TriadicVesselState): EmergentProductCategory[];
}

// Emergent product categories from triadic architecture
export interface EmergentProductCategory {
  level: string; // Λ^4, Λ^5, Λ^6, etc.
  name: string;
  description: string;
  examples: string[];
  triadicFoundation: TriadicLevel[];
}

// Dermal relevance realization limit
export interface DermalRelevanceLimit {
  value: number; // ℜ_dermal_relevance
  gradient: number; // ∇dermal_relevance
  optimizationDirection: 'increasing' | 'decreasing' | 'stable';
}

// Vessel reaction with triadic awareness
export interface TriadicReaction {
  level: TriadicLevel;
  reactants: string[];
  products: string[];
  triadicContext: string;
  emergentEffects: string[];
  vesselStateChange: Partial<TriadicVesselState>;
}
