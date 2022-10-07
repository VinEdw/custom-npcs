/**
 * noppes.npcs.api.entity.data.INPCInventory
 * @typedef {Object} INPCInventory
 * @property {function():IItemStack} getRightHand
 * @property {function(IItemStack):void} setRightHand(item)
 * @property {function():IItemStack} getLeftHand
 * @property {function(IItemStack):void} setLeftHand(item)
 * @property {function():IItemStack} getProjectile
 * @property {function(IItemStack):void} setProjectile(item)
 * @property {function(Number):IItemStack} getArmor(slot)
 * @property {function(Number, IItemStack):void} setArmor(slot, item)
 * @property {function(Number, IItemStack, Number):void} setDropItem(slot, item, chance)
 * @property {function(Number):IItemStack} getDropItem(slot)
 * @property {function():Number} getExpMin
 * @property {function():Number} getExpMax
 * @property {function():Number} getExpRNG
 * @property {function(Number, Number)} setExp(min, max)
 * @property {function():IItemStack[]} getItemsRNG
 */
