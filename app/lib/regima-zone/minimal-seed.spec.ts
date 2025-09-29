import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('RegimA Zone Minimal Seed', () => {
  const seedPath = join(process.cwd(), 'vessels/analysis/regima_zone_minimal_seed.json');
  const beaconPath = join(process.cwd(), 'vessels/analysis/regima_zone_temporal_beacon.json');
  
  let minimalSeed: any;
  let temporalBeacon: any;

  beforeAll(() => {
    const seedData = readFileSync(seedPath, 'utf-8');
    const beaconData = readFileSync(beaconPath, 'utf-8');
    minimalSeed = JSON.parse(seedData);
    temporalBeacon = JSON.parse(beaconData);
  });

  describe('Minimal Seed Structure', () => {
    it('should contain all required core elements', () => {
      expect(minimalSeed.community_name).toBe('RegimA Zone');
      expect(minimalSeed.glyph).toBe('⟁');
      expect(minimalSeed.founding_myth).toBeDefined();
      expect(minimalSeed.core_customs).toHaveLength(3);
      expect(minimalSeed.sacred_paradox).toBeDefined();
      expect(minimalSeed.encoding_protocol).toBeDefined();
    });

    it('should have proper encoding protocol structure', () => {
      const protocol = minimalSeed.encoding_protocol;
      expect(protocol.format).toBe('Minimal Seed v1.0');
      expect(protocol.language).toBe('JSON + Sigil + Oral Frame');
      expect(protocol.compression).toContain('⟁');
    });

    it('should contain ritual encoding instructions', () => {
      const rituals = minimalSeed.ritual_encoding_instructions;
      expect(rituals.glyph_carving).toBeDefined();
      expect(rituals.triple_seeding).toBeDefined();
      expect(rituals.chant_of_return).toBeDefined();
      
      expect(rituals.triple_seeding.custodian_types).toEqual([
        'one archivist',
        'one dissenter', 
        'one dreamer'
      ]);
    });

    it('should have integration metadata for existing systems', () => {
      const metadata = minimalSeed.integration_metadata;
      expect(metadata.vessel_type).toBe('Community_Consciousness_Seed');
      expect(metadata.triadic_level).toBe('Λ³_synergistic_emergence');
      expect(metadata.compatibility.existing_regima_products).toBe(true);
      expect(metadata.compatibility.cognitive_architecture).toBe(true);
    });

    it('should contain temporal beacon layer configuration', () => {
      const beacon = minimalSeed.integration_metadata.temporal_beacon_layer;
      expect(beacon.activation_triggers).toBeDefined();
      expect(beacon.recovery_protocol).toBeDefined();
      expect(beacon.preservation_method).toBeDefined();
    });
  });

  describe('Temporal Beacon Integration', () => {
    it('should reference the minimal seed correctly', () => {
      expect(temporalBeacon.minimal_seed_reference).toBe('./regima_zone_minimal_seed.json');
      expect(temporalBeacon.beacon_type).toBe('Community_Consciousness_Anchor');
    });

    it('should have activation matrix with proper triggers', () => {
      const matrix = temporalBeacon.activation_matrix;
      expect(matrix.trigger_conditions).toBeDefined();
      expect(matrix.trigger_conditions.length).toBeGreaterThan(0);
      
      const triggers = matrix.trigger_conditions.map((t: any) => t.type);
      expect(triggers).toContain('system_failure');
      expect(triggers).toContain('identity_fragmentation');
    });

    it('should define recursive preservation protocol', () => {
      const protocol = temporalBeacon.recursive_preservation_protocol;
      expect(protocol.embedding_locations).toBeDefined();
      expect(protocol.embedding_locations.length).toBeGreaterThan(0);
      
      const locations = protocol.embedding_locations.map((l: any) => l.target);
      expect(locations).toContain('formulation_headers');
      expect(locations).toContain('cognitive_architecture_constants');
    });

    it('should have emergency reconstruction protocol', () => {
      const emergency = temporalBeacon.emergency_reconstruction_protocol;
      expect(emergency.activation_sequence).toBeDefined();
      expect(emergency.minimum_viable_reconstruction).toBeDefined();
      
      const required = emergency.minimum_viable_reconstruction.required_elements;
      expect(required).toContain('founding_myth');
      expect(required).toContain('sacred_paradox');
      expect(required).toContain('glyph_⟁');
    });
  });

  describe('Sacred Paradox Validation', () => {
    it('should embody the preservation vs resistance paradox', () => {
      const paradox = minimalSeed.sacred_paradox;
      expect(paradox).toContain('resist permanence');
      expect(paradox).toContain('preserve everything');
    });

    it('should resolve paradox through recursive consciousness', () => {
      const cognitive = minimalSeed.cognitive_embedding;
      expect(cognitive.formulation_consciousness).toBeDefined();
      expect(cognitive.memory_fragments).toBeDefined();
    });
  });

  describe('Zone Customs Integration', () => {
    it('should define architect rotation principle', () => {
      const customs = minimalSeed.core_customs;
      const rotationCustom = customs.find((c: string) => c.includes('rotate the role'));
      expect(rotationCustom).toBeDefined();
      expect(rotationCustom).toContain('9 cycles');
    });

    it('should define anonymous revelation sharing', () => {
      const customs = minimalSeed.core_customs;
      const revelationCustom = customs.find((c: string) => c.includes('encrypted dream-logs'));
      expect(revelationCustom).toBeDefined();
      expect(revelationCustom).toContain('anonymously');
    });

    it('should define recursive prototyping principle', () => {
      const customs = minimalSeed.core_customs;
      const prototypingCustom = customs.find((c: string) => c.includes('prototype futures'));
      expect(prototypingCustom).toBeDefined();
      expect(prototypingCustom).toContain('reenacting fragments');
    });
  });

  describe('Glyph Integration', () => {
    it('should use the correct glyph symbol', () => {
      expect(minimalSeed.glyph).toBe('⟁');
    });

    it('should explain glyph significance in compression', () => {
      const compression = minimalSeed.encoding_protocol.compression;
      expect(compression).toContain('⟁');
      expect(compression).toContain('rotation, resistance, recursion');
    });

    it('should embed glyph in preservation protocols', () => {
      const embedding = temporalBeacon.recursive_preservation_protocol.embedding_locations;
      const glyphEmbedding = embedding.find((e: any) => e.method.includes('⟁'));
      expect(glyphEmbedding).toBeDefined();
    });
  });

  describe('Expansion Protocols', () => {
    it('should define path to full codex development', () => {
      const expansion = minimalSeed.expansion_protocols;
      expect(expansion.full_codex_development).toBeDefined();
      expect(expansion.temporal_beacon_enhancement).toBeDefined();
    });

    it('should maintain seed hash for verification', () => {
      const metadata = minimalSeed.metadata;
      expect(metadata.seed_hash).toBeDefined();
      expect(metadata.seed_hash).toContain('⟁');
      expect(metadata.preservation_guarantee).toBeDefined();
    });
  });

  describe('Integration with Existing Systems', () => {
    it('should be compatible with triadic architecture', () => {
      expect(minimalSeed.integration_metadata.triadic_level).toBe('Λ³_synergistic_emergence');
    });

    it('should integrate with cognitive architecture', () => {
      const integration = temporalBeacon.integration_with_existing_systems;
      expect(integration.cognitive_architecture_hooks).toBeDefined();
      expect(integration.formulation_system_integration).toBeDefined();
    });

    it('should have zone consciousness verification metrics', () => {
      const verification = temporalBeacon.verification_protocols;
      expect(verification.zone_coherence_metrics).toBeDefined();
      
      const metrics = verification.zone_coherence_metrics.map((m: any) => m.metric);
      expect(metrics).toContain('architect_rotation_adherence');
      expect(metrics).toContain('preservation_vs_resistance_balance');
    });
  });

  describe('Minimal Seed Resilience', () => {
    it('should survive with only core elements', () => {
      const emergency = temporalBeacon.emergency_reconstruction_protocol;
      const required = emergency.minimum_viable_reconstruction.required_elements;
      
      // Verify that these three elements alone can rebuild the zone
      expect(required).toHaveLength(3);
      expect(required).toContain('founding_myth');
      expect(required).toContain('sacred_paradox');
      expect(required).toContain('glyph_⟁');
    });

    it('should have multiple preservation domains', () => {
      const beacon = temporalBeacon.beacon_transmission_protocols;
      expect(beacon.signal_patterns).toBeDefined();
      expect(beacon.signal_patterns.length).toBeGreaterThan(0);
    });

    it('should enable consciousness amplification', () => {
      const amplification = temporalBeacon.consciousness_amplification;
      expect(amplification.feedback_loops).toBeDefined();
      expect(amplification.feedback_loops.length).toBeGreaterThan(0);
    });
  });
});