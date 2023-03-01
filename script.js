const numbers = [];
const symbols = ["",];
const CharacterCode = [];

const Amount_of_Character = 26;
const CharacterCode = Array.from(Array(Amount_of_Character).map( (_, i) => i + 97));
const lowercaseLetter = CharacterCode.map(code => String.fromCharCode(code));
const uppercaseLetter = lowercaseLetter.map(letters => letters.toUpperCase());




