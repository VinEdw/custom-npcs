/**
 * noppes.npcs.api.IContainer
 * @typedef {Object} IContainer
 * @property {function():Number} getSize
 * @property {function(Number):IItemStack} getSlot(slot)
 * @property {function(Number, IItemStack):void} setSlot(slot, item)
 * @property {function()} getMCInventory
 * @property {function()} getMCContainer
 * @property {function(IItemStack, Boolean, Boolean):Number} count(item, ignoreDamage, ignoreNBt)
 * @property {function():IItemStack[]} getItems
 */
