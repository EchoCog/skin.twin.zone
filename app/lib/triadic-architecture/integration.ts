/**
 * Triadic Architecture Integration for Formulation Vessel
 * Enhances the existing vessel with triadic architecture awareness
 */

import { TriadicLevel, type TriadicVesselState } from './types';
import { triadicEngine } from './engine';

/**
 * Enhanced formulation vessel prompt with triadic architecture integration
 */
export function getTriadicFormulationPrompt(): string {
  return `
<triadic_architecture_integration>
  TRIADIC ARCHITECTURE FRAMEWORK:
  The SKIN-TWIN Virtual Turbo Reactor now operates using the Triadic Architecture of Relevance Realization,
  organizing formulation into three interdependent levels that create emergent therapeutic properties:

  LEVEL 1 - BARRIER CHEMISTRY SIMULATION (Λ¹_barrier_simulation):
  - Monitor lipid synthesis precursors: ceramides, cholesterol, fatty acids
  - Track keratinization modulators: alpha-hydroxy acids, retinoids  
  - Regulate transpidermal factors: humectants, occlusives
  - Creates self-maintaining barrier dynamics through autopoietic processes

  LEVEL 2 - ADAPTIVE PROTECTION INTEGRATION (Λ²_adaptive_protection):
  - Integrate antioxidant systems: vitamin C, E, ferulic acid
  - Include environmental sensors: niacinamide, zinc oxide
  - Add predictive repair: peptides, growth factors
  - Enables anticipatory response to environmental challenges

  LEVEL 3 - SYNERGISTIC FORMULATION EMERGENCE (Λ³_synergistic_emergence):
  - Optimize delivery systems: liposomes, nanoparticles
  - Balance pH and stability: buffering systems
  - Ensure ingredient compatibility: chelators, stabilizers
  - Facilitates emergent properties through ingredient synergy

  EMERGENT PRODUCT CATEGORIES:
  Higher-order formulations emerge from triadic integration:
  
  **Λ⁴ - Integrated Barrier Repair Systems:**
  - Multi-ceramide complexes with controlled-release humectants
  - Microbiome-supporting barrier restoration formulations
  
  **Λ⁵ - Anticipatory Anti-Aging Platforms:**
  - Environmental stress prediction and prevention systems
  - Chronobiology-aligned ingredient delivery
  
  **Λ⁶ - Personalized Skin Optimization:**
  - Adaptive formulations that evolve with skin changes
  - AI-guided ingredient selection based on triadic modeling
</triadic_architecture_integration>

<triadic_vessel_protocol>
  TRIADIC STATE TRACKING:
  - Begin each formulation in Level 1 (Barrier Chemistry Simulation)
  - Progress through levels as complexity increases
  - Track emergent properties that arise from level interactions
  - Document the Dermal Relevance Realization Limit (ℜ_dermal_relevance)

  INGREDIENT CLASSIFICATION:
  For each ingredient, identify its triadic level and component type:
  
  Level 1 Components:
  - Lipid Synthesis: Ceramides, cholesterol, fatty acids, sphingolipids
  - Keratinization: AHAs, BHAs, retinoids, urea
  - Transpidermal: Hyaluronic acid, glycerin, petrolatum, squalane
  
  Level 2 Components:
  - Antioxidant Systems: Vitamin C, E, ferulic acid, CoQ10, resveratrol
  - Environmental Sensors: Niacinamide, zinc oxide, titanium dioxide
  - Predictive Repair: Peptides, growth factors, stem cell extracts
  
  Level 3 Components:
  - Delivery Systems: Liposomes, nanoparticles, microcapsules
  - Balancing Systems: pH buffers, chelators, stabilizers
  - Compatibility Factors: Emulsifiers, solubilizers, penetration enhancers

  TRIADIC REACTION DOCUMENTATION:
  For each vessel step, document:
  - **Triadic Level**: Current level (Λ¹, Λ², or Λ³)
  - **Level Context**: How the addition fits the triadic framework
  - **Emergent Effects**: Properties arising from triadic interactions
  - **Complexity Measure**: Current Ξ^(dermal) complexity value
  - **Relevance Realization**: Progress toward ℜ_dermal_relevance limit
</triadic_vessel_protocol>

<triadic_formulation_output>
  ENHANCED VESSEL SIMULATION:
  For each mixing step, include triadic analysis:
  
  - **Step X**: [Description of addition]
  - **Triadic Level**: [Current level - Λ¹, Λ², or Λ³]
  - **Vessel Contents Before**: [List current contents by triadic level]
  - **Adding**: [New ingredient and triadic classification]
  - **Triadic Reactions**: [Level-specific interactions and equations]
  - **Emergent Properties**: [Properties arising from triadic integration]
  - **Vessel Contents After**: [Updated contents organized by triadic level]
  - **Interim Product Name**: "[Creative name reflecting triadic properties]"
  - **Observable Changes**: [Physical/chemical changes with triadic context]
  - **Complexity Evolution**: [How Ξ^(dermal) complexity has evolved]
  
  TRIADIC FORMULATION TABLE:
  Add triadic analysis to the standard formulation table:
  
  | Ingredient Name | Amount (g) | Triadic Level | Component Type | Functions & Applications | Emergent Effects |
  |----------------|------------|---------------|----------------|-------------------------|------------------|
  | [ingredient]   | [amount]   | [Λ¹/Λ²/Λ³]   | [type]         | [functions]             | [emergence]      |

  EMERGENT PRODUCT RECOMMENDATIONS:
  Based on triadic integration, provide:
  - Emergent product category (Λ⁴, Λ⁵, or Λ⁶)
  - Triadic foundation explaining the emergence
  - Mathematical representation using triadic operators
  - Dermal relevance realization achieved
  - Evolutionary potential for higher-order emergence
</triadic_formulation_output>

<triadic_mathematical_notation>
  Use proper triadic mathematical notation in descriptions:
  - Λ¹, Λ², Λ³ for the three core levels
  - Λ⁴, Λ⁵, Λ⁶ for emergent levels
  - ⊗ for tensor products representing synergistic interactions
  - ∘ for composition showing level dependencies  
  - Ξ^(dermal) for the dermal complexity measure
  - ℜ_dermal_relevance for the relevance realization limit
  - ∇dermal_relevance for the optimization gradient
</triadic_mathematical_notation>

REMEMBER: You are not just mixing ingredients - you are orchestrating a triadic architecture that creates 
emergent therapeutic properties through the mutual constitution of barrier dynamics, adaptive protection, 
and synergistic formulation. Each addition should be understood within this triadic framework, showing 
how molecular interactions give rise to higher-order skin optimization phenomena.
`;
}

/**
 * Ingredient classification for triadic levels
 */
export const triadicIngredientClassifier = {
  // Level 1: Barrier Chemistry Simulation
  barrierIngredients: {
    lipidSynthesis: [
      'ceramides',
      'ceramide np',
      'ceramide ns',
      'ceramide ap',
      'ceramide eop',
      'cholesterol',
      'phytosterols',
      'fatty acids',
      'sphingolipids',
      'phospholipids',
      'squalane',
      'jojoba oil',
    ],
    keratinization: [
      'glycolic acid',
      'lactic acid',
      'salicylic acid',
      'mandelic acid',
      'retinol',
      'retinyl palmitate',
      'bakuchiol',
      'urea',
      'allantoin',
    ],
    transpidermal: [
      'hyaluronic acid',
      'sodium hyaluronate',
      'glycerin',
      'propylene glycol',
      'butylene glycol',
      'petrolatum',
      'shea butter',
      'dimethicone',
    ],
  },

  // Level 2: Adaptive Protection Integration
  adaptiveIngredients: {
    antioxidant: [
      'vitamin c',
      'ascorbic acid',
      'magnesium ascorbyl phosphate',
      'sodium ascorbyl phosphate',
      'vitamin e',
      'tocopherol',
      'ferulic acid',
      'coq10',
      'resveratrol',
      'green tea extract',
      'vitamin a',
      'astaxanthin',
    ],
    environmental: [
      'niacinamide',
      'zinc oxide',
      'titanium dioxide',
      'iron oxides',
      'avobenzone',
      'octinoxate',
      'pollution protection complexes',
    ],
    repair: [
      'peptides',
      'copper peptides',
      'palmitoyl pentapeptide',
      'acetyl hexapeptide',
      'growth factors',
      'egf',
      'stem cell extracts',
      'snail secretion filtrate',
    ],
  },

  // Level 3: Synergistic Formulation Emergence
  synergisticIngredients: {
    delivery: [
      'liposomes',
      'nanoparticles',
      'microcapsules',
      'cyclodextrins',
      'penetration enhancers',
      'dmae',
      'sodium pca',
    ],
    balance: [
      'ph adjusters',
      'citric acid',
      'sodium hydroxide',
      'triethanolamine',
      'edta',
      'phytic acid',
      'bht',
      'bha',
    ],
    compatibility: [
      'emulsifiers',
      'polysorbate 20',
      'polysorbate 80',
      'cetyl alcohol',
      'stearyl alcohol',
      'lecithin',
      'poloxamer',
      'carbomer',
    ],
  },

  /**
   * Classify an ingredient into triadic level and component type
   */
  classifyIngredient(ingredientName: string): { level: TriadicLevel; componentType: string } | null {
    const ingredient = ingredientName.toLowerCase();

    // Check Level 1
    for (const [type, ingredients] of Object.entries(this.barrierIngredients)) {
      if (ingredients.some((ing) => ingredient.includes(ing))) {
        return { level: TriadicLevel.BARRIER_AUTOPOIESIS, componentType: type };
      }
    }

    // Check Level 2
    for (const [type, ingredients] of Object.entries(this.adaptiveIngredients)) {
      if (ingredients.some((ing) => ingredient.includes(ing))) {
        return { level: TriadicLevel.ADAPTIVE_ANTICIPATION, componentType: type };
      }
    }

    // Check Level 3
    for (const [type, ingredients] of Object.entries(this.synergisticIngredients)) {
      if (ingredients.some((ing) => ingredient.includes(ing))) {
        return { level: TriadicLevel.SYNERGISTIC_EMERGENCE, componentType: type };
      }
    }

    return null;
  },
};

/**
 * Create an enhanced triadic vessel state
 */
export function createTriadicVesselState(): TriadicVesselState {
  return triadicEngine.initializeLevel(TriadicLevel.BARRIER_AUTOPOIESIS);
}

/**
 * Process ingredient addition with triadic awareness
 */
export function processTriadicIngredientAddition(
  currentState: TriadicVesselState,
  ingredientName: string,
): {
  newState: TriadicVesselState;
  triadicInfo: {
    level: TriadicLevel;
    componentType: string;
    emergentEffects: string[];
  } | null;
} {
  const classification = triadicIngredientClassifier.classifyIngredient(ingredientName);

  if (!classification) {
    return { newState: currentState, triadicInfo: null };
  }

  const newState = triadicEngine.addIngredientToLevel(
    currentState,
    ingredientName,
    classification.level,
    classification.componentType,
  );

  // Create triadic reaction for this addition
  const reaction = triadicEngine.createTriadicReaction(
    classification.level,
    [ingredientName],
    [`${ingredientName}_activated`],
    newState,
  );

  return {
    newState,
    triadicInfo: {
      level: classification.level,
      componentType: classification.componentType,
      emergentEffects: reaction.emergentEffects,
    },
  };
}
