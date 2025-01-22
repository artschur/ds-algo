function crystalBall(arr: number[]): number {
    const step = Math.floor(Math.sqrt(arr.length));
    let i = 0;

    while (arr[i] != 1) {
        i += step;
    }

    while (arr[i] == 1) {
        if (arr[i - 1] == 0) {
            return i;
        }
        i -= 1;
    }

    return -1;

}

console.log(crystalBall([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1])); // 10