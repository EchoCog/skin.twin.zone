import { describe, it, expect, beforeEach } from 'vitest';
import { Man20CognitiveEngine, Man20Category } from './man20-engine';
import { TriadicLevel } from '../triadic-architecture/types';

describe('Man20CognitiveEngine', () => {
  let engine: Man20CognitiveEngine;

  beforeEach(() => {
    engine = new Man20CognitiveEngine();
  });

  describe('Product Catalog', () => {
    it('should load RégimA products from manual', () => {
      const product = engine.getProduct('Derma Zest Cleansing + Toning Gel');
      
      expect(product).toBeDefined();
      expect(product?.name).toBe('Derma Zest Cleansing + Toning Gel');
      expect(product?.category).toBe(Man20Category.ZONE_TRAINING);
      expect(product?.triadicLevel).toBe(TriadicLevel.BARRIER_AUTOPOIESIS);
    });

    it('should retrieve β-Endorphin Stimulator with correct triadic level', () => {
      const product = engine.getProduct('β-Endorphin Stimulator');
      
      expect(product).toBeDefined();
      expect(product?.category).toBe(Man20Category.TREATMENT_SERUM);
      expect(product?.triadicLevel).toBe(TriadicLevel.SYNERGISTIC_EMERGENCE);
      expect(product?.ingredients).toContain('Beta-Endorphin Complex');
    });

    it('should handle case-insensitive product lookups', () => {
      const product = engine.getProduct('daily ultra defence');
      
      expect(product).toBeDefined();
      expect(product?.name).toBe('Daily Ultra Defence');
    });
  });

  describe('Vessel Configuration Generation', () => {
    it('should generate vessel config for cleansing gel', () => {
      const config = engine.generateVesselConfig('Derma Zest Cleansing + Toning Gel');
      
      expect(config).toBeDefined();
      expect(config.product_name).toBe('Derma Zest Cleansing + Toning Gel');
      expect(config.category).toBe(Man20Category.ZONE_TRAINING);
      expect(config.triadic_level).toBe(TriadicLevel.BARRIER_AUTOPOIESIS);
      expect(config.vessel_simulation).toBeDefined();
      expect(config.vessel_simulation.temperature).toBe('25°C');
    });

    it('should calculate appropriate pH for different products', () => {
      const cleansingConfig = engine.generateVesselConfig('Derma Zest Cleansing + Toning Gel');
      const stimulatorConfig = engine.generateVesselConfig('β-Endorphin Stimulator');
      
      expect(cleansingConfig.vessel_simulation.ph_target).toBe('5.0-6.0');
      expect(stimulatorConfig.vessel_simulation.ph_target).toBe('5.5-6.5');
    });

    it('should return null for unknown products', () => {
      const config = engine.generateVesselConfig('Unknown Product');
      expect(config).toBeNull();
    });
  });

  describe('Manual Section Processing', () => {
    it('should extract cognitive patterns from RégimA content', () => {
      const content = `
        MAIN FUNCTIONS:
        • Deep Cleansing
        • Natural Astringent
        • Anti-inflammatory
        
        STAR INGREDIENTS:
        • Ruby Star Grapefruit
        • Bisabolol
      `;
      
      const protocols = engine.processManualSection('Test Section', content);
      
      expect(protocols).toBeDefined();
      expect(protocols.length).toBeGreaterThan(0);
    });

    it('should update cognitive state when processing sections', () => {
      const initialState = engine.getCognitiveState();
      const initialProcessed = initialState.processedSections.length;
      
      engine.processManualSection('Cleansing Gel', 'Test content');
      
      const updatedState = engine.getCognitiveState();
      expect(updatedState.processedSections.length).toBe(initialProcessed + 1);
      expect(updatedState.processedSections).toContain('Cleansing Gel');
    });
  });

  describe('Cognitive State Management', () => {
    it('should initialize with default cognitive state', () => {
      const state = engine.getCognitiveState();
      
      expect(state.currentProduct).toBeNull();
      expect(state.activeCategory).toBe(Man20Category.ZONE_TRAINING);
      expect(state.processedSections).toEqual([]);
      expect(state.vesselState.currentLevel).toBe(TriadicLevel.BARRIER_AUTOPOIESIS);
      expect(state.vesselState.triadicComplexity).toBe(0);
    });

    it('should track triadic complexity as sections are processed', () => {
      const initialComplexity = engine.getCognitiveState().vesselState.triadicComplexity;
      
      engine.processManualSection('Test', 'Anti-inflammatory content');
      
      const updatedComplexity = engine.getCognitiveState().vesselState.triadicComplexity;
      expect(updatedComplexity).toBeGreaterThan(initialComplexity);
    });
  });

  describe('Emergent Protocol Generation', () => {
    it('should generate protocols with appropriate types', () => {
      const cleansingContent = 'Deep cleansing and toning effects';
      const protectionContent = 'UV protection and defence against environment';
      
      const cleansingProtocols = engine.processManualSection('Cleansing', cleansingContent);
      const protectionProtocols = engine.processManualSection('Protection', protectionContent);
      
      expect(cleansingProtocols.some(p => p.type === 'cleansing')).toBeTruthy();
      expect(protectionProtocols.some(p => p.type === 'protection')).toBeTruthy();
    });

    it('should include safety protocols and contraindications', () => {
      const protocols = engine.processManualSection('Test', 'Sensitive skin formula');
      
      expect(protocols.length).toBeGreaterThan(0);
      protocols.forEach(protocol => {
        expect(protocol.steps).toBeDefined();
        expect(protocol.expectedOutcomes).toBeDefined();
        expect(protocol.contraindications).toBeDefined();
      });
    });
  });
});