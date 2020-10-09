import { formatMoney } from "../helpers";

test("it should format money properly", () => {
    expect(formatMoney(0)).toBe('$0');
    expect(formatMoney(500)).toBe('$500');
    expect(formatMoney(1000)).toBe('$1,000');
    expect(formatMoney(200000)).toBe('$200,000');
    expect(formatMoney(1000000)).toBe('$1,000,000');
});
