const {expect} = require('chai');
const rgbToHexColor = require('./RGBtoHex');

describe("RGB Conventer", () => {
    it ('convert white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    })

    it ('convert black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    })

    it ('converts Softuni dark blue', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465')
    })
    
    it ('returns undefined for missing parameters', () => {
        expect(rgbToHexColor(255)).to.be.undefined;
    })

    it ('returns undefined for values out of range', () => {
        expect(rgbToHexColor(-1, -1 ,-1)).to.be.undefined;
    })
    
    it ('returns undefined for values out of range', () => {
        expect(rgbToHexColor(256,256,256)).to.be.undefined;
    })

    it ('returns undefined for invalid parameter type', () => {
        expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
    })
});