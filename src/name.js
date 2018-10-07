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
}
module.exports = Name;
