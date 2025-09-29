/**
 * RégimA Manual 2020 Cognitive Architecture Engine
 * Implements the manual as a cognitive processing system for skincare formulation
 */

import { TriadicLevel, type TriadicVesselState } from '../triadic-architecture/types';

// Core cognitive architecture types for man20.md processing
export interface Man20Product {
  name: string;
  category: Man20Category;
  ingredients: string[];
  functions: string[];
  benefits: string[];
  instructions: string[];
  triadicLevel: TriadicLevel;
}

export enum Man20Category {
  ZONE_TRAINING = 'ZONE_TRAINING',
  SPAZONE_TREATMENT = 'SPAZONE_TREATMENT', 
  SPAZONE_HOME_CARE = 'SPAZONE_HOME_CARE',
  DAILY_PROTECTION = 'DAILY_PROTECTION',
  TREATMENT_SERUM = 'TREATMENT_SERUM',
  MASQUE = 'MASQUE',
  OIL_COMPLEX = 'OIL_COMPLEX',
  REPAIR_SYSTEM = 'REPAIR_SYSTEM'
}

export interface Man20CognitiveState {
  currentProduct: Man20Product | null;
  activeCategory: Man20Category;
  processedSections: string[];
  vesselState: TriadicVesselState;
  emergentProtocols: EmergentProtocol[];
}

export interface EmergentProtocol {
  name: string;
  type: 'cleansing' | 'treatment' | 'protection' | 'repair';
  steps: string[];
  expectedOutcomes: string[];
  contraindications: string[];
}

/**
 * Cognitive Architecture Engine for RégimA Manual 2020
 */
export class Man20CognitiveEngine {
  private _cognitiveState: Man20CognitiveState;
  private _productCatalog: Map<string, Man20Product>;

  constructor() {
    this._cognitiveState = this._initializeCognitiveState();
    this._productCatalog = new Map();
    this._loadProductCatalog();
  }

  /**
   * Process a section from man20.md and extract cognitive patterns
   */
  processManualSection(sectionName: string, content: string): EmergentProtocol[] {
    const protocols: EmergentProtocol[] = [];
    
    // Analyze section content for cognitive patterns
    const patterns = this._extractCognitivePatterns(content);
    
    // Generate emergent protocols based on patterns
    for (const pattern of patterns) {
      const protocol = this._generateEmergentProtocol(sectionName, pattern);
      if (protocol) {
        protocols.push(protocol);
      }
    }

    // Update cognitive state
    this._updateCognitiveState(sectionName, protocols);
    
    return protocols;
  }

  /**
   * Get product by name from the cognitive catalog
   */
  getProduct(name: string): Man20Product | undefined {
    return this._productCatalog.get(name.toLowerCase());
  }

  /**
   * Generate vessel configuration for a specific product
   */
  generateVesselConfig(productName: string): any {
    const product = this.getProduct(productName);
    if (!product) {
      return null;
    }

    return {
      product_name: product.name,
      category: product.category,
      triadic_level: product.triadicLevel,
      vessel_simulation: {
        temperature: "25°C",
        ph_target: this._calculateOptimalPH(product),
        mixing_sequence: this._generateMixingSequence(product.ingredients),
        safety_protocols: this._generateSafetyProtocols(product)
      },
      expected_benefits: product.benefits,
      usage_instructions: product.instructions
    };
  }

  /**
   * Get current cognitive state
   */
  getCognitiveState(): Man20CognitiveState {
    return { ...this._cognitiveState };
  }

  // Private methods

  private _initializeCognitiveState(): Man20CognitiveState {
    return {
      currentProduct: null,
      activeCategory: Man20Category.ZONE_TRAINING,
      processedSections: [],
      vesselState: {
        currentLevel: TriadicLevel.BARRIER_AUTOPOIESIS,
        activeComponents: {
          [TriadicLevel.BARRIER_AUTOPOIESIS]: {
            lipidSynthesisPrecursors: [],
            keratinizationModulators: [],
            transpidermalFactors: []
          },
          [TriadicLevel.ADAPTIVE_ANTICIPATION]: {
            antioxidantSystems: [],
            environmentalSensors: [],
            predictiveRepair: []
          },
          [TriadicLevel.SYNERGISTIC_EMERGENCE]: {
            deliverySystems: [],
            balancingSystems: [],
            compatibilityFactors: []
          }
        },
        emergentProperties: [],
        triadicComplexity: 0
      },
      emergentProtocols: []
    };
  }

  private _loadProductCatalog(): void {
    // Load key products from RégimA Manual 2020
    const products: Man20Product[] = [
      {
        name: "Derma Zest Cleansing + Toning Gel",
        category: Man20Category.ZONE_TRAINING,
        ingredients: ["Ruby Star Grapefruit", "Bisabolol", "Geranium Extract", "Rosemary Extract"],
        functions: ["Deep Cleansing", "Natural Astringent", "Anti-inflammatory"],
        benefits: ["Tones and tightens pores", "Regulates sebaceous secretions", "Anti-bacterial protection"],
        instructions: ["Apply to damp skin", "Massage gently", "Rinse thoroughly"],
        triadicLevel: TriadicLevel.BARRIER_AUTOPOIESIS
      },
      {
        name: "β-Endorphin Stimulator",
        category: Man20Category.TREATMENT_SERUM,
        ingredients: ["Beta-Endorphin Complex", "Peptide Matrix", "Bioactive Compounds"],
        functions: ["Stimulates natural endorphins", "Anti-aging", "Cellular regeneration"],
        benefits: ["Reduces stress markers", "Improves skin resilience", "Natural mood enhancement"],
        instructions: ["Apply to clean skin", "Allow full absorption", "Use morning and evening"],
        triadicLevel: TriadicLevel.SYNERGISTIC_EMERGENCE
      },
      {
        name: "Daily Ultra Defence",
        category: Man20Category.DAILY_PROTECTION,
        ingredients: ["Sunscreen Complex", "Antioxidant Blend", "Barrier Protection"],
        functions: ["UV Protection", "Environmental defense", "Free radical scavenging"],
        benefits: ["Prevents photodamage", "Maintains skin barrier", "Anti-pollution protection"],
        instructions: ["Apply 30 minutes before sun exposure", "Reapply every 2 hours", "Use daily"],
        triadicLevel: TriadicLevel.ADAPTIVE_ANTICIPATION
      },
      {
        name: "Laser Azu-Repair 'The Blue Gel'",
        category: Man20Category.REPAIR_SYSTEM,
        ingredients: ["Azure Complex", "Healing Peptides", "Regenerative Factors"],
        functions: ["Accelerated healing", "Scar reduction", "Tissue regeneration"],
        benefits: ["Rapid wound healing", "Minimizes scarring", "Restores skin integrity"],
        instructions: ["Apply to affected area", "Use 2-3 times daily", "Continue until healing complete"],
        triadicLevel: TriadicLevel.SYNERGISTIC_EMERGENCE
      }
    ];

    products.forEach(product => {
      this._productCatalog.set(product.name.toLowerCase(), product);
    });
  }

  private _extractCognitivePatterns(content: string): string[] {
    const patterns: string[] = [];
    
    // Extract function patterns
    const functionMatches = content.match(/MAIN FUNCTIONS?:\s*([^•]*(?:•[^•]*)*)/gi);
    if (functionMatches) {
      patterns.push(...functionMatches);
    }

    // Extract ingredient patterns
    const ingredientMatches = content.match(/STAR INGREDIENTS?:\s*([^#]*)/gi);
    if (ingredientMatches) {
      patterns.push(...ingredientMatches);
    }

    // Extract benefit patterns (bullet points)
    const benefitMatches = content.match(/•\s*([^•\n]+)/g);
    if (benefitMatches) {
      patterns.push(...benefitMatches.map(match => match.replace('•', '').trim()));
    }

    // Also extract any general content with keywords
    const keywordPatterns = content.match(/(anti-inflammatory|cleansing|protection|repair|healing|moistur|hydrat|firm|tight|sensitive)/gi);
    if (keywordPatterns) {
      patterns.push(...keywordPatterns);
    }

    // If we didn't find specific patterns, extract general content as patterns
    if (patterns.length === 0 && content.trim().length > 0) {
      // Split content into meaningful chunks
      const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
      patterns.push(...sentences.slice(0, 3)); // Take first 3 sentences as patterns
    }

    return patterns.filter(pattern => pattern.trim().length > 0);
  }

  private _generateEmergentProtocol(sectionName: string, pattern: string): EmergentProtocol | null {
    // Skip empty patterns
    if (!pattern || pattern.trim().length === 0) {
      return null;
    }

    // Determine protocol type based on pattern content
    let type: 'cleansing' | 'treatment' | 'protection' | 'repair' = 'treatment';
    
    const lowerPattern = pattern.toLowerCase();
    if (lowerPattern.includes('cleans') || lowerPattern.includes('ton')) {
      type = 'cleansing';
    } else if (lowerPattern.includes('protect') || lowerPattern.includes('defence') || lowerPattern.includes('defense')) {
      type = 'protection';
    } else if (lowerPattern.includes('repair') || lowerPattern.includes('heal')) {
      type = 'repair';
    }

    return {
      name: `${sectionName} Protocol`,
      type,
      steps: this._generateProtocolSteps(pattern, type),
      expectedOutcomes: this._generateExpectedOutcomes(pattern),
      contraindications: this._generateContraindications(pattern)
    };
  }

  private _generateProtocolSteps(pattern: string, type: string): string[] {
    const baseSteps: Record<string, string[]> = {
      cleansing: [
        "Prepare skin with lukewarm water",
        "Apply product using gentle circular motions",
        "Allow active ingredients to penetrate",
        "Rinse thoroughly with cool water"
      ],
      treatment: [
        "Ensure skin is clean and dry",
        "Apply treatment to target areas",
        "Allow complete absorption",
        "Follow with appropriate moisturizer"
      ],
      protection: [
        "Apply to clean, dry skin",
        "Ensure even coverage",
        "Allow to form protective barrier",
        "Reapply as directed"
      ],
      repair: [
        "Clean affected area gently",
        "Apply thin layer of product",
        "Allow natural healing process",
        "Monitor progress and adjust as needed"
      ]
    };

    return baseSteps[type] || baseSteps.treatment;
  }

  private _generateExpectedOutcomes(pattern: string): string[] {
    const outcomes: string[] = [];
    
    if (pattern.toLowerCase().includes('anti-inflammatory')) {
      outcomes.push("Reduced inflammation and redness");
    }
    if (pattern.toLowerCase().includes('anti-oxidant')) {
      outcomes.push("Enhanced protection against free radicals");
    }
    if (pattern.toLowerCase().includes('moistur') || pattern.toLowerCase().includes('hydrat')) {
      outcomes.push("Improved skin hydration");
    }
    if (pattern.toLowerCase().includes('firm') || pattern.toLowerCase().includes('tight')) {
      outcomes.push("Enhanced skin firmness and elasticity");
    }

    return outcomes.length > 0 ? outcomes : ["Improved overall skin condition"];
  }

  private _generateContraindications(pattern: string): string[] {
    const contraindications: string[] = [];
    
    if (pattern.toLowerCase().includes('sensitive')) {
      contraindications.push("Perform patch test for sensitive skin");
    }
    if (pattern.toLowerCase().includes('acid')) {
      contraindications.push("Avoid contact with eyes and mucous membranes");
    }
    if (pattern.toLowerCase().includes('retinol') || pattern.toLowerCase().includes('vitamin a')) {
      contraindications.push("Not recommended during pregnancy");
      contraindications.push("Use SPF protection during day");
    }

    return contraindications;
  }

  private _calculateOptimalPH(product: Man20Product): string {
    // Calculate optimal pH based on product ingredients and function
    if (product.ingredients.some(ing => ing.toLowerCase().includes('acid'))) {
      return "4.5-5.5";
    }
    if (product.category === Man20Category.ZONE_TRAINING) {
      return "5.0-6.0";
    }
    return "5.5-6.5";
  }

  private _generateMixingSequence(ingredients: string[]): string[] {
    return ingredients.map((ingredient, index) => 
      `Step ${index + 1}: Add ${ingredient} and mix thoroughly`
    );
  }

  private _generateSafetyProtocols(product: Man20Product): string[] {
    const protocols = [
      "Maintain sterile conditions",
      "Monitor temperature throughout process",
      "Perform stability testing"
    ];

    if (product.ingredients.some(ing => ing.toLowerCase().includes('retinol'))) {
      protocols.push("Store in light-protected containers");
    }

    return protocols;
  }

  private _updateCognitiveState(sectionName: string, protocols: EmergentProtocol[]): void {
    this._cognitiveState.processedSections.push(sectionName);
    this._cognitiveState.emergentProtocols.push(...protocols);
    this._cognitiveState.vesselState.triadicComplexity += protocols.length * 0.1;
  }
}

// Singleton instance
export const man20Engine = new Man20CognitiveEngine();