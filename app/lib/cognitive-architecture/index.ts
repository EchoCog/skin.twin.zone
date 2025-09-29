/**
 * Cognitive Architecture Index
 * Integration point for RégimA Manual 2020 cognitive processing
 */

export { Man20CognitiveEngine, man20Engine } from './man20-engine';
export type { 
  Man20Product, 
  Man20Category, 
  Man20CognitiveState, 
  EmergentProtocol 
} from './man20-engine';

// Re-export triadic architecture for integration
export { 
  TriadicLevel,
  type TriadicVesselState,
  type TriadicFormulationProtocol 
} from '../triadic-architecture/types';

export { triadicEngine } from '../triadic-architecture/engine';