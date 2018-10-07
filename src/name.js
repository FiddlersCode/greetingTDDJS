const isUpperCase = require('is-upper-case');

class Name {
    static formatName(name) {
        if (Array.isArray(name)) {
            return Name.formatArray(name);
        }
        return name;
    }

    static formatArray(name) {
        const arrayOfNames = name;

        if (arrayOfNames.length === 2) {
            return arrayOfNames.join(' and ');
        }
        const joinWord = 'and ';
        const finalNameIndex = arrayOfNames.length - 1;
        const finalName = arrayOfNames[finalNameIndex];
        arrayOfNames[finalNameIndex] = joinWord + finalName;
        return arrayOfNames.join(', ');
    }

    static formatMixedCaseArray(arrayOfNames) {
        const lowerCaseNames = [];
        const upperCaseNames = [];
        const sortedNames = [lowerCaseNames, upperCaseNames];
        arrayOfNames.forEach((name) => {
            if (!isUpperCase(name)) {
                lowerCaseNames.push(name);
            } else {
                upperCaseNames.push(name);
            }
        });
        return sortedNames;
    }
}
module.exports = Name;
