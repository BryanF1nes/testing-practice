export const caesarCipher = (string, shiftFactor) => {
    const key = 'abcdefghijklmnopqrstuvwxyz';
    const punctuation = "!?.,;:";
    const newWord = []

    for (const char of string) {
        if (char === " ") {
            newWord.push(char);
            continue;
        }

        if (punctuation.includes(char)) {
            newWord.push(char)
            continue;
        }

        for (let i = 0; i < key.split('').length; i++) {
            if (char === key[i]) {
                let newChar = key[(i + shiftFactor) % 26];
                newWord.push(newChar);
                break;
            }

            if (char === key[i].toUpperCase()) {
                let newChar = key[(i + shiftFactor) % 26];
                newWord.push(newChar.toUpperCase());
                break;
            }

        }
    }

    return newWord.join('');
}
