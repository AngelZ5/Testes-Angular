//IMPORTAÇÕES
import {describe, it, expect, vi} from 'vitest';
import {calculator} from './calculator';

//CRIAÇÃO DO CASO DE TESTE

describe("calculator", () => {
    it("Should add 2 numbers?", () => {
        const result = calculator.add(1, 2)
        expect(result).toBe(3)
    })
    
    it.only("shows how mocking works", () => {
    const spy = vi.spyOn(calculator, "add").mockReturnValue(5);
    const result = calculator.add(2,3);
    expect(result).toBe(5);
    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith(2,3);
})

})