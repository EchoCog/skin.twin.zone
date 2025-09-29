/**
 * Triadic Architecture Implementation
 * Core logic for the Triadic Architecture of Relevance Realization in skincare formulation
 */

import {
  TriadicLevel,
  type TriadicVesselState,
  type TriadicFormulationProtocol,
  type EmergentProperty,
  type EmergentProductCategory,
  type BarrierComponents,
  type AdaptiveComponents,
  type SynergisticComponents,
  type DermalRelevanceLimit,
  type TriadicReaction,
} from './types';

export class TriadicArchitectureEngine implements TriadicFormulationProtocol {
  private _dermalRelevanceLimit: DermalRelevanceLimit;

  constructor() {
    this._dermalRelevanceLimit = {
      value: 0.85, // Initial relevance realization
      gradient: 0.1,
      optimizationDirection: 'increasing',
    };
  }

  /**
   * Initialize a triadic level with empty state
   */
  initializeLevel(level: TriadicLevel): TriadicVesselState {
    const emptyBarrier: BarrierComponents = {
      lipidSynthesisPrecursors: [],
      keratinizationModulators: [],
      transpidermalFactors: [],
    };

    const emptyAdaptive: AdaptiveComponents = {
      antioxidantSystems: [],
      environmentalSensors: [],
      predictiveRepair: [],
    };

    const emptySynergistic: SynergisticComponents = {
      deliverySystems: [],
      balancingSystems: [],
      compatibilityFactors: [],
    };

    return {
      currentLevel: level,
      activeComponents: {
        [TriadicLevel.BARRIER_AUTOPOIESIS]: emptyBarrier,
        [TriadicLevel.ADAPTIVE_ANTICIPATION]: emptyAdaptive,
        [TriadicLevel.SYNERGISTIC_EMERGENCE]: emptySynergistic,
      },
      emergentProperties: [],
      triadicComplexity: 1.0,
    };
  }

  /**
   * Transition between triadic levels
   */
  transitionLevel(currentState: TriadicVesselState, targetLevel: TriadicLevel): TriadicVesselState {
    const newState = { ...currentState };
    newState.currentLevel = targetLevel;

    // Calculate complexity increase based on level transition
    const levelComplexity = this._calculateLevelComplexity(targetLevel);
    newState.triadicComplexity = Math.min(newState.triadicComplexity * levelComplexity, 10.0);

    // Update dermal relevance based on transition
    this._updateDermalRelevance(newState);

    return newState;
  }

  /**
   * Calculate emergent properties from current triadic state
   */
  calculateEmergence(state: TriadicVesselState): EmergentProperty[] {
    const emergentProperties: EmergentProperty[] = [];

    // Level 4: Integrated Barrier Repair (requires Levels 1+2)
    if (this._hasComponentsInLevels(state, [TriadicLevel.BARRIER_AUTOPOIESIS, TriadicLevel.ADAPTIVE_ANTICIPATION])) {
      emergentProperties.push({
        level: 4,
        name: 'Integrated Barrier Repair Systems',
        description: 'Multi-ceramide complexes with controlled-release humectants and microbiome support',
        dependencies: [TriadicLevel.BARRIER_AUTOPOIESIS, TriadicLevel.ADAPTIVE_ANTICIPATION],
        emergenceOperator: 'Λ¹ ∘ Λ²',
      });
    }

    // Level 5: Anticipatory Anti-Aging (requires Levels 2+3)
    if (this._hasComponentsInLevels(state, [TriadicLevel.ADAPTIVE_ANTICIPATION, TriadicLevel.SYNERGISTIC_EMERGENCE])) {
      emergentProperties.push({
        level: 5,
        name: 'Anticipatory Anti-Aging Platforms',
        description: 'Environmental stress prediction and chronobiology-aligned delivery systems',
        dependencies: [TriadicLevel.ADAPTIVE_ANTICIPATION, TriadicLevel.SYNERGISTIC_EMERGENCE],
        emergenceOperator: 'Λ² ⊗ Λ³',
      });
    }

    // Level 6: Personalized Optimization (requires all levels)
    if (this._hasComponentsInLevels(state, Object.values(TriadicLevel))) {
      emergentProperties.push({
        level: 6,
        name: 'Personalized Skin Optimization',
        description: 'Adaptive formulations that evolve with skin changes using AI-guided selection',
        dependencies: Object.values(TriadicLevel),
        emergenceOperator: 'Π(Λ¹ ⊗ Λ² ⊗ Λ³)',
      });
    }

    return emergentProperties;
  }

  /**
   * Generate emergent product categories based on triadic state
   */
  generateProductCategories(_state: TriadicVesselState): EmergentProductCategory[] {
    const categories: EmergentProductCategory[] = [];

    categories.push({
      level: 'Λ⁴',
      name: 'Integrated Barrier Repair Systems',
      description: 'Advanced barrier restoration with microbiome support',
      examples: [
        'Multi-ceramide complexes with controlled-release humectants',
        'Microbiome-supporting barrier restoration formulations',
      ],
      triadicFoundation: [TriadicLevel.BARRIER_AUTOPOIESIS, TriadicLevel.ADAPTIVE_ANTICIPATION],
    });

    categories.push({
      level: 'Λ⁵',
      name: 'Anticipatory Anti-Aging Platforms',
      description: 'Predictive environmental response systems',
      examples: ['Environmental stress prediction and prevention systems', 'Chronobiology-aligned ingredient delivery'],
      triadicFoundation: [TriadicLevel.ADAPTIVE_ANTICIPATION, TriadicLevel.SYNERGISTIC_EMERGENCE],
    });

    categories.push({
      level: 'Λ⁶',
      name: 'Personalized Skin Optimization',
      description: 'Adaptive formulations with AI guidance',
      examples: [
        'Adaptive formulations that evolve with skin changes',
        'AI-guided ingredient selection based on triadic modeling',
      ],
      triadicFoundation: Object.values(TriadicLevel),
    });

    return categories;
  }

  /**
   * Add ingredient to appropriate triadic level based on classification
   */
  addIngredientToLevel(
    state: TriadicVesselState,
    ingredient: string,
    level: TriadicLevel,
    componentType: string,
  ): TriadicVesselState {
    const newState = { ...state };

    switch (level) {
      case TriadicLevel.BARRIER_AUTOPOIESIS:
        this._addToBarrierComponents(newState.activeComponents[level], ingredient, componentType);
        break;
      case TriadicLevel.ADAPTIVE_ANTICIPATION:
        this._addToAdaptiveComponents(newState.activeComponents[level], ingredient, componentType);
        break;
      case TriadicLevel.SYNERGISTIC_EMERGENCE:
        this._addToSynergisticComponents(newState.activeComponents[level], ingredient, componentType);
        break;
    }

    // Recalculate emergent properties
    newState.emergentProperties = this.calculateEmergence(newState);

    return newState;
  }

  /**
   * Create a triadic reaction with emergent effects
   */
  createTriadicReaction(
    level: TriadicLevel,
    reactants: string[],
    products: string[],
    vesselState: TriadicVesselState,
  ): TriadicReaction {
    const triadicContext = this._generateTriadicContext(level, vesselState);
    const emergentEffects = this._calculateReactionEmergence(level, reactants, products, vesselState);

    return {
      level,
      reactants,
      products,
      triadicContext,
      emergentEffects,
      vesselStateChange: {
        triadicComplexity: vesselState.triadicComplexity * 1.1,
      },
    };
  }

  /**
   * Get current dermal relevance realization
   */
  getDermalRelevanceLimit(): DermalRelevanceLimit {
    return this._dermalRelevanceLimit;
  }

  // Private helper methods

  private _calculateLevelComplexity(level: TriadicLevel): number {
    const complexityMap = {
      [TriadicLevel.BARRIER_AUTOPOIESIS]: 1.2,
      [TriadicLevel.ADAPTIVE_ANTICIPATION]: 1.4,
      [TriadicLevel.SYNERGISTIC_EMERGENCE]: 1.6,
    };
    return complexityMap[level];
  }

  private _hasComponentsInLevels(state: TriadicVesselState, levels: TriadicLevel[]): boolean {
    return levels.every((level) => {
      const components = state.activeComponents[level];
      return this._hasAnyComponents(components);
    });
  }

  private _hasAnyComponents(components: BarrierComponents | AdaptiveComponents | SynergisticComponents): boolean {
    return Object.values(components).some((componentArray) => componentArray.length > 0);
  }

  private _addToBarrierComponents(components: BarrierComponents, ingredient: string, type: string): void {
    switch (type) {
      case 'lipidSynthesis':
        components.lipidSynthesisPrecursors.push(ingredient);
        break;
      case 'keratinization':
        components.keratinizationModulators.push(ingredient);
        break;
      case 'transpidermal':
        components.transpidermalFactors.push(ingredient);
        break;
    }
  }

  private _addToAdaptiveComponents(components: AdaptiveComponents, ingredient: string, type: string): void {
    switch (type) {
      case 'antioxidant':
        components.antioxidantSystems.push(ingredient);
        break;
      case 'environmental':
        components.environmentalSensors.push(ingredient);
        break;
      case 'repair':
        components.predictiveRepair.push(ingredient);
        break;
    }
  }

  private _addToSynergisticComponents(components: SynergisticComponents, ingredient: string, type: string): void {
    switch (type) {
      case 'delivery':
        components.deliverySystems.push(ingredient);
        break;
      case 'balance':
        components.balancingSystems.push(ingredient);
        break;
      case 'compatibility':
        components.compatibilityFactors.push(ingredient);
        break;
    }
  }

  private _updateDermalRelevance(_state: TriadicVesselState): void {
    // Update relevance based on triadic complexity and emergent properties
    const emergenceBonus = _state.emergentProperties.length * 0.05;
    const complexityFactor = Math.log(_state.triadicComplexity) * 0.1;

    this._dermalRelevanceLimit.value = Math.min(
      this._dermalRelevanceLimit.value + emergenceBonus + complexityFactor,
      1.0,
    );
  }

  private _generateTriadicContext(level: TriadicLevel, state: TriadicVesselState): string {
    const contexts = {
      [TriadicLevel.BARRIER_AUTOPOIESIS]: 'Self-maintaining barrier dynamics with lipid synthesis regulation',
      [TriadicLevel.ADAPTIVE_ANTICIPATION]: 'Environmental response prediction with adaptive protection',
      [TriadicLevel.SYNERGISTIC_EMERGENCE]: 'Synergistic formulation emergence with delivery optimization',
    };

    return `${contexts[level]} (Complexity: ${state.triadicComplexity.toFixed(2)})`;
  }

  private _calculateReactionEmergence(
    level: TriadicLevel,
    reactants: string[],
    products: string[],
    state: TriadicVesselState,
  ): string[] {
    const emergentEffects: string[] = [];

    // Add level-specific emergent effects
    switch (level) {
      case TriadicLevel.BARRIER_AUTOPOIESIS:
        emergentEffects.push('Enhanced barrier autopoiesis through lipid matrix optimization');
        break;
      case TriadicLevel.ADAPTIVE_ANTICIPATION:
        emergentEffects.push('Predictive cellular response to environmental stressors');
        break;
      case TriadicLevel.SYNERGISTIC_EMERGENCE:
        emergentEffects.push('Synergistic delivery enhancement with stabilized active complexes');
        break;
    }

    // Add complexity-based effects
    if (state.triadicComplexity > 3.0) {
      emergentEffects.push('Higher-order molecular organization leading to enhanced bioavailability');
    }

    if (state.emergentProperties.length > 0) {
      emergentEffects.push('Cross-level interaction creating novel therapeutic pathways');
    }

    return emergentEffects;
  }
}

// Singleton instance for the application
export const triadicEngine = new TriadicArchitectureEngine();
