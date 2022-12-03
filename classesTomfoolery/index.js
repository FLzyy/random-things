class Inventory {
    constructor(Products){
        this.products = Products;
    }
}

class Product {
    constructor(price, id, quantity) {
        this.price = price;
        this.id = id;
        this.quantity = quantity;
    }
}

class Food extends Product {
    constructor(price, id, quantity, heal, mold) {
        super(price, id, quantity)
        this.healing = heal;
        this.mold = mold;
    }
}

class Weapon extends Product {
    constructor(price, id, quantity, damage, durability, weaponmod) {
        super(price, id, quantity)
        this.damage = damage;
        this.durability = durability;
        this.mod = weaponmod;
    }
}

class Mod {
    constructor(desc, price, rarity) {
        this.description = desc;
        this.price = price;
        this.rarity = rarity;
    }
}

class WeaponMod extends Mod {
    constructor(desc, price, rarity, dmgBoost, effect) {
        super(desc, price, rarity)
        this.damageBoost = dmgBoost;
        this.effect = effect;
    }
}

const inv1 = new Inventory([
    new Food("100$", "bread-i4D", 42, 15, "95%"), 
    new Food("140$", "bread-i2D", 22, 15, "80%"),
    new Weapon("1000$", "diamond-tZ3", 2, 45, "75%", new WeaponMod("Freeze Weapon Mod", "800$", 2, 15, "Freezes Enemy"))
])

console.log(inv1);