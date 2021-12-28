import { capitalizeString, kebabCase, truncateString } from '../format';

describe('capitalizeString', () => {
    it('makes sentence string title cased', () => {
        expect(capitalizeString('Hello')).toEqual('Hello');
    });

    it('makes sentence string of random casing title cased', () => {
        expect(capitalizeString('WOrLD')).toEqual('World');
    });
});

describe('truncateString', () => {
    it('truncates long string', () => {
        expect(truncateString('Peter Piper picked a peck of pickled peppers', 14)).toEqual('Peter Piper pi...');
    });

    it('truncates long string at different position', () => {
        expect(truncateString('A-tisket a-tasket A green and yellow basket', 11)).toEqual('A-tisket a-...');
    });

    it('truncates short string', () => {
        expect(truncateString('A-', 1)).toEqual('A...');
    });

    it('truncates long string at different position', () => {
        expect(truncateString('Absolutely Longer', 2)).toEqual('Ab...');
    });
});

describe('kebabCase convert to kebab (or spinal tap) cased from', () => {
    it('camel cased', () => {
        expect(kebabCase('thisIsSpinalTap')).toEqual('this-is-spinal-tap');
    });

    it('title cased', () => {
        expect(kebabCase('This Is Spinal Tap')).toEqual('this-is-spinal-tap');
    });

    it('underscored title case', () => {
        expect(kebabCase('The_Andy_Griffith_Show')).toEqual('the-andy-griffith-show');
    });

    it('sentence with hyphens', () => {
        expect(kebabCase('This is Spinal-tap cased')).toEqual('this-is-spinal-tap-cased');
    });
});
