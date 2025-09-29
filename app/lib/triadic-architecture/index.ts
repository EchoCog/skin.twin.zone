/**
 * Triadic Architecture of Relevance Realization - Main Export
 * Implements the triadic architecture for skincare formulation
 */

export * from './types';
export * from './engine';
export * from './integration';

// Re-export key components for easy access
export { triadicEngine } from './engine';
export {
  getTriadicFormulationPrompt,
  triadicIngredientClassifier,
  createTriadicVesselState,
  processTriadicIngredientAddition,
} from './integration';
