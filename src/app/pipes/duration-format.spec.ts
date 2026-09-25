import {it, expect, describe, beforeEach} from "vitest" 
import {DurationFormatPipe} from "./duration-format.pipe"


describe('DurationFormatPipe', () => {

    let pipe: DurationFormatPipe;

    beforeEach(() => {
         pipe = new DurationFormatPipe();
    });

    it('should create the pipe', () => {
        expect(pipe).toBeTruthy();
    });

    it('should format duration', () => {
        const result = pipe.transform("09:29");
        expect(result).toBe("09h 29m");
    });

    it('should handle null or undefined', () => {
        expect(pipe.transform(<any>null)).toBe("");
        expect(pipe.transform(<any>undefined)).toBe("");
    });

    it('should return the original value if invalid input', () => {
        const input = "90"
        expect(pipe.transform(input)).toBe(input)
    });

    it('should only format the first two parts', () => {
        expect(pipe.transform('01:23:46')).toBe('01h 23m')
    });

});
