
const weekFn = require('../js/week.js');

test('Days of week', () => {
    expect(weekFn (1)).toBe('Понеділок');
    expect(weekFn (2)).toBe('Вівторок');
    expect(weekFn (3)).toBe('Середа')
    expect(weekFn (4)).toBe('Четвер');
    expect(weekFn (5)).toBe('П\'ятниця');
    expect(weekFn (6)).toBe('Субота');
    expect(weekFn (7)).toBe('Неділя');
})

test('null', () => {
    expect(weekFn (9)).toBeNull();
    expect(weekFn (1.5)).toBeNull();
    expect(weekFn (10)).toBeNull();
    expect(weekFn (15)).toBeNull();
    expect(weekFn (8)).toBeNull();
})

