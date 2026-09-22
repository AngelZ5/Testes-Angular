//IMPORTAÇÕES
import {describe, it, expect} from 'vitest';
import {calculator} from './calculator';

//CRIAÇÃO DO CASO DE TESTE

describe("calculator", () => {
    it("Should add 2 numbers?", () => {
        const result = calculator.add(1, 2)
        expect(result).toBe(3)
    })
})