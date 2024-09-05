
    const ageClassification = require('../js/age.js');

test('null', () => {
    expect(ageClassification (-1)).toBeNull();
})
test('від 0 до 24 Дитинство', () => {
    expect(ageClassification (0)).toBe('Дитинство');
    expect(ageClassification (24)).toBe('Дитинство');
})
test('від 24.01 до 44 Молодість', () => {
    expect(ageClassification (24.01)).toBe('Молодість');
    expect(ageClassification (44)).toBe('Молодість');
})
test('від 44.01 до 65 Зрілість', () => {
    expect(ageClassification (44.01)).toBe('Зрілість');
    expect(ageClassification (65)).toBe('Зрілість');
})
test('від 65.01 до 75 Старість', () => {
    expect(ageClassification (65.01)).toBe('Старість');
    expect(ageClassification (75)).toBe('Старість');
})
test('від 75.01 до 90 Довголіття', () => {
    expect(ageClassification (75.01)).toBe('Довголіття');
    expect(ageClassification (90)).toBe('Довголіття');
})
test('від 90.01 до 122 Рекорд', () => {
    expect(ageClassification (90.01)).toBe('Рекорд');
    expect(ageClassification (122)).toBe('Рекорд');
})
test('null', () => {
    expect(ageClassification (122.01)).toBeNull();
    expect(ageClassification (150)).toBeNull();
})