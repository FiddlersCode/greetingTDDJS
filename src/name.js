class Name {
    formatName(name) {
        if (Array.isArray(name)) {
            return name.join(' and ');
        }
        return name;
    }
}
module.exports = Name;
