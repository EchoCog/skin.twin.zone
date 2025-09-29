/**
 * Basic validation test for Triadic Architecture
 * Tests core functionality without requiring full test framework
 */

import { TriadicLevel } from './types';
import { triadicEngine } from './engine';
import { triadicIngredientClassifier, processTriadicIngredientAddition } from './integration';

// Simple test runner
function runTriadicTests() {
  console.log('🧪 Running Triadic Architecture Tests...\n');

  let testsPassed = 0;
  let totalTests = 0;

  function test(name: string, testFn: () => boolean) {
    totalTests++;

    try {
      const result = testFn();

      if (result) {
        console.log(`✅ ${name}`);
        testsPassed++;
      } else {
        console.log(`❌ ${name} - Test failed`);
      }
    } catch (error) {
      console.log(`❌ ${name} - Error: ${error}`);
    }
  }

  // Test 1: Engine initialization
  test('Engine initializes with correct dermal relevance limit', () => {
    const limit = triadicEngine.getDermalRelevanceLimit();
    return limit.value === 0.85 && limit.optimizationDirection === 'increasing';
  });

  // Test 2: Vessel state initialization
  test('Vessel state initializes correctly', () => {
    const state = triadicEngine.initializeLevel(TriadicLevel.BARRIER_AUTOPOIESIS);
    return (
      state.currentLevel === TriadicLevel.BARRIER_AUTOPOIESIS &&
      state.triadicComplexity === 1.0 &&
      state.emergentProperties.length === 0
    );
  });

  // Test 3: Level transitions
  test('Level transitions update complexity', () => {
    const state = triadicEngine.initializeLevel(TriadicLevel.BARRIER_AUTOPOIESIS);
    const newState = triadicEngine.transitionLevel(state, TriadicLevel.ADAPTIVE_ANTICIPATION);

    return (
      newState.currentLevel === TriadicLevel.ADAPTIVE_ANTICIPATION &&
      newState.triadicComplexity > state.triadicComplexity
    );
  });

  // Test 4: Ingredient classification
  test('Ingredient classifier recognizes barrier ingredients', () => {
    const classification = triadicIngredientClassifier.classifyIngredient('ceramides');
    return (
      classification?.level === TriadicLevel.BARRIER_AUTOPOIESIS && classification?.componentType === 'lipidSynthesis'
    );
  });

  test('Ingredient classifier recognizes adaptive ingredients', () => {
    const classification = triadicIngredientClassifier.classifyIngredient('vitamin c');
    return (
      classification?.level === TriadicLevel.ADAPTIVE_ANTICIPATION && classification?.componentType === 'antioxidant'
    );
  });

  test('Ingredient classifier recognizes synergistic ingredients', () => {
    const classification = triadicIngredientClassifier.classifyIngredient('liposomes');
    return classification?.level === TriadicLevel.SYNERGISTIC_EMERGENCE && classification?.componentType === 'delivery';
  });

  // Test 5: Ingredient addition processing
  test('Ingredient addition updates vessel state', () => {
    const initialState = triadicEngine.initializeLevel(TriadicLevel.BARRIER_AUTOPOIESIS);
    const result = processTriadicIngredientAddition(initialState, 'ceramides');

    return (
      result.newState.activeComponents[TriadicLevel.BARRIER_AUTOPOIESIS].lipidSynthesisPrecursors.length > 0 &&
      result.triadicInfo?.level === TriadicLevel.BARRIER_AUTOPOIESIS
    );
  });

  // Test 6: Emergent property calculation
  test('Emergent properties are calculated for multi-level states', () => {
    let state = triadicEngine.initializeLevel(TriadicLevel.BARRIER_AUTOPOIESIS);

    // Add ingredients to multiple levels to trigger emergence
    state = triadicEngine.addIngredientToLevel(state, 'ceramides', TriadicLevel.BARRIER_AUTOPOIESIS, 'lipidSynthesis');
    state = triadicEngine.addIngredientToLevel(state, 'vitamin c', TriadicLevel.ADAPTIVE_ANTICIPATION, 'antioxidant');

    const emergentProperties = triadicEngine.calculateEmergence(state);

    return emergentProperties.length > 0;
  });

  // Test 7: Product category generation
  test('Product categories are generated correctly', () => {
    const state = triadicEngine.initializeLevel(TriadicLevel.BARRIER_AUTOPOIESIS);
    const categories = triadicEngine.generateProductCategories(state);

    return (
      categories.length === 3 &&
      categories.some((cat) => cat.level === 'Λ⁴') &&
      categories.some((cat) => cat.level === 'Λ⁵') &&
      categories.some((cat) => cat.level === 'Λ⁶')
    );
  });

  // Test 8: Triadic reaction creation
  test('Triadic reactions are created with emergent effects', () => {
    const state = triadicEngine.initializeLevel(TriadicLevel.BARRIER_AUTOPOIESIS);
    const reaction = triadicEngine.createTriadicReaction(
      TriadicLevel.BARRIER_AUTOPOIESIS,
      ['ceramides', 'cholesterol'],
      ['lipid_complex'],
      state,
    );

    return (
      reaction.level === TriadicLevel.BARRIER_AUTOPOIESIS &&
      reaction.emergentEffects.length > 0 &&
      reaction.triadicContext.includes('Self-maintaining barrier dynamics')
    );
  });

  // Summary
  console.log(`\n📊 Test Results: ${testsPassed}/${totalTests} tests passed`);

  if (testsPassed === totalTests) {
    console.log('🎉 All triadic architecture tests passed!');
    return true;
  } else {
    console.log('⚠️  Some tests failed. Please check the implementation.');
    return false;
  }
}

// Export for use in other contexts
export { runTriadicTests };

// Run tests if this file is executed directly
if (typeof window === 'undefined' && require.main === module) {
  runTriadicTests();
}
