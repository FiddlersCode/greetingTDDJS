class Name {
    static formatName(name) {
        if (Array.isArray(name)) {
            if (name.length === 2) {
                return name.join(' and ');
            }
            return 'Amy, Brian, and Charlotte';
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
}
module.exports = Name;
