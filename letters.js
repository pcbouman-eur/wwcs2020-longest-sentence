function countWords(txt) {
    if (txt.replace(/\s+/gi, '').length == 0) {
        return 0;
    }
    let re = /[^a-zA-z ]/gi;
    let filtered = txt.replace(re, '');
    let words = filtered.split(/\s+/gi);
    return words.length;
}

function countLetters(hist) {
    let result = 0;
    for (let k of Object.values(hist)) {
        result += k;
    }
    return result;
}

function textToHist(str) {
    const result = {};
    for (var t=0; t < str.length; t++) {
        let letter = str.charAt(t);
        if (!letter.match(/[a-z]/i)) {
            continue;
        }
        if (letter in result) {
            result[letter]++;
        }
        else {
            result[letter] = 1;
        }
    }
    return result;
}

function lettersToHist(data, ignoreCase) {
    const result = {};
    for (let lst of Object.values(data)) {
        for (let letter of lst) {
            if (ignoreCase) {
                letter = letter.toLowerCase();
            }
            if (letter in result) {
                result[letter]++;
            }
            else {
                result[letter] = 1;
            }
        }
    }
    return result;
}

function histogramDiff(data1, data2) {
    const result = {};
    for (let [letter, count] of Object.entries(data1)) {
        result[letter] = count;
        if (letter in data2) {
            result[letter] -= data2[letter];
        }
    }
    for (let [letter, count] of Object.entries(data2)) {
        if (!(letter in data1))
        result[letter] = -count;
    }
    return result;
}

const letters = 
{
    'Matteo C' : ['a', 'C'],
    'Alex' : ['A', 'B'],
    'Massimo' : ['a', 'S'],
    'Anna' : ['K', 'h'],
    'Matteo M' : ['o', 'z'],
    'Anshuman' : ['m', 'i'],
    'Claire' : ['e', 'a'],
    'Alexey' : ['x', 'e'],
    'Cian' : ['C', 'i'],
    'Saska' : ['a', 'o'],
    'Mateusz' : ['u', 'n'],
    'Paul' : ['m', 'a'],
    'Dries' : ['D', 's'],
    'Anamika' : ['e', 'e'],
    'Carlo' : ['o', 'C'],
    'Qasim' : ['P', 'a'],
    'Javier' : ['e', 'B'],
    'Iulia Martina' : ['I', 't'],
    'Beatriz' : ['d', 'o'],
    'Leto' : ['o', 'P'],
    'Furkan' : ['o', 'y'],
    'Chico' : ['o', 'C'],
    'Lea' : ['e', 'b'],
    'Tomasz' : ['c', 'h'],
    'Francesco' : ['L', 'a'],
    'Jarek' : ['w', 'm'],
    'Roger' : ['g', 'e'],
    'Kate' : ['W', 'o'],
    'Sabin' : ['b', 'a'],
    'Leonardo' : ['v', 'o'],
    'Mikolaj' : ['o', 's'],
    'Liubov' : ['k', 'i'],
    'Jef' : ['g', 'e'],
    'Irene' : ['t', 'i'],
    'Robert' : ['L', 'i'],
    'Johannes' : ['h', 'L'],
    'Sanja' : ['a', 'S'],
    'Mehdi' : ['B', 'i'],
    'Sofia' : ['o', 'x'],
};