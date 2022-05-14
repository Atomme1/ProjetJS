import {expect} from 'chai';
import {getpercentage} from '../../datasetFunctionUtils.js';

describe('datasetFunctionUtils.js', () => {
    describe('#getpercentage()', () => {
        it('should return a number <1 corresponding to a percentage', () => {
            expect(getpercentage(80)).to.be.equal(0.8);
            expect(getpercentage(30)).to.be.equal(0.3);
        });
    });
});
