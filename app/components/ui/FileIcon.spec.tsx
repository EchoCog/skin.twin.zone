import { describe, it, expect } from 'vitest';
import { FileIcon } from './FileIcon';

describe('FileIcon', () => {
  it('should handle .form file extension correctly', () => {
    // Test the component functions used internally
    const testComponent = FileIcon({ filename: 'formulation.form' });

    // Check that the component is created without errors
    expect(testComponent).toBeTruthy();
    expect(testComponent.type).toBe('span');

    // Check props for correct classes
    const props = testComponent.props;
    expect(props.className).toContain('i-ph:file-text');
    expect(props.className).toContain('text-purple-500');
    expect(props.className).toContain('w-5 h-5'); // default medium size
  });

  it('should handle .formul file extension with default fallback', () => {
    const testComponent = FileIcon({ filename: 'formulation.formul' });

    expect(testComponent).toBeTruthy();
    expect(testComponent.type).toBe('span');

    const props = testComponent.props;

    // Should use default icon since .formul is no longer supported
    expect(props.className).toContain('i-ph:file');
    expect(props.className).toContain('text-gray-400');
  });

  it('should handle different sizes for .form files', () => {
    const smallComponent = FileIcon({ filename: 'test.form', size: 'sm' });
    const largeComponent = FileIcon({ filename: 'test.form', size: 'lg' });

    expect(smallComponent.props.className).toContain('w-4 h-4');
    expect(largeComponent.props.className).toContain('w-6 h-6');
  });

  it('should handle custom className for .form files', () => {
    const testComponent = FileIcon({ filename: 'test.form', className: 'custom-class' });

    expect(testComponent.props.className).toContain('custom-class');
    expect(testComponent.props.className).toContain('i-ph:file-text');
    expect(testComponent.props.className).toContain('text-purple-500');
  });
});
