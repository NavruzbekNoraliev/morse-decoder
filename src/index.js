const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
// . stands for 10
// - stands for 11 
function decode(expr) {
    segmentedArg = expr.match(/.{1,10}/g)
    let decodedMessage = ''
    segmentedArg.forEach(element => {
        if(element === '**********') {
            decodedMessage += ' ';
        } else {
            const newSegement =  (parseInt(element)).toString().match(/.{1,2}/g)
            const sign = newSegement.map(item => item === '10' ? '.' : '-').join('')
            decodedMessage += MORSE_TABLE[sign]
        }
    });
    return decodedMessage
}

module.exports = {
    decode
}