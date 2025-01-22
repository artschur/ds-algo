export function linearSearch(haystack: Uint16Array, needle: number): number {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return i;
        }
    }
    return -1
}