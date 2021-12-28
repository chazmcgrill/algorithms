import { convertHtmlEntities } from '../convertHtmlEntities';

describe('convertHtmlEntities returns', () => {
    it('convert entities correctly', () => {
        expect(convertHtmlEntities('"foo"')).toEqual('&quot;foo&quot;');
        expect(convertHtmlEntities('foo&bar')).toEqual('foo&amp;bar');
        expect(convertHtmlEntities("bar's")).toEqual('bar&apos;s');
        expect(convertHtmlEntities('3>1<2')).toEqual('3&gt;1&lt;2');
    });
    it('not change unhandled entities', () => {
        expect(convertHtmlEntities('foo;')).toEqual('foo;');
        expect(convertHtmlEntities('bar!')).toEqual('bar!');
    });
});
