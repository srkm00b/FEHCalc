function Weapon(weaponJSON) {

    this.name = weaponJSON.name;
    this.weaponType = weaponJSON.weaponType;
    this.might = weaponJSON.might;
    this.brave = weaponJSON.brave;
    this.effectiveAgainst = weaponJSON.effectiveAgainst;
    this.statBoosts = weaponJSON.statBoosts;
}

Weapon.prototype = {
    physicalTypes: ["sword", "lance", "axe", "bow", "dagger"],
    magicTypes: ["dragon", "staff", "tome"],

    isPhysical: function () {
        return this.physicalTypes.contains(this.weaponType);
    },

    isMagical: function () {
        return this.magicTypes.contains(this.weaponType);
    },

    weaponTriangleBonus: function (that) {
        // Return 1 bonus due to the triangle.
        // Return 0 no bonus.
        // Return -1 penalty due to triangle
        
        if (this.weaponType === 'sword') {
            if (that.weaponType === 'axe') return 1;
            else if (that.weaponType === 'lance') return -1;
            else return 0;
        }

        if (this.weaponType === 'axe') {
            if (that.weaponType === 'lance') return 1;
            else if (that.weaponType === 'sword') return -1;
            else return 0;
        }

        if (this.weaponType === 'lance') {
            if (that.weaponType === 'sword') return 1;
            else if (that.weaponType === 'axe') return -1;
            else return 0;
        }

        if (this.weaponType === 'dagger') return 0;
        if (this.weaponType === 'bow') return 0;
        if (this.weaponType === 'tome') return 0;
        if (this.weaponType === 'dragon') return 0;
        if (this.weaponType === 'staff') return 0;
               
        console.log('Unknown weapon type: ' + this.weaponType);
        return 0;
    }
};
