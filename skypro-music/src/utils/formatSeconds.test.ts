import { formatSeconds } from "./formatSeconds"

describe("Проверка форматирования времени трека", () => {
    it("Корректно форматирует 0 в строку", () => {
        const ExpResult = formatSeconds(0);
        expect(ExpResult).toBe("0:00");
    });
    it("Корректно форматирует число в строку", () => {
        const ExpResult = formatSeconds(204);
        expect(ExpResult).toBe("3:24");
    });
})