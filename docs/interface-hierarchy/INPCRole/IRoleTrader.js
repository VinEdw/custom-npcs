/**
 * noppes.npcs.api.entity.data.role.IRoleTrader
 * @typedef {INPCRole & IRoleTraderPartial} IRoleTrader
 * @typedef {Object} IRoleTraderPartial
 * @property {function(Number):IItemStack} getSold(slot)
 * @property {function(Number):IItemStack} getCurrency1(slot)
 * @property {function(Number):IItemStack} getCurrency2(solt)
 * @property {function(Number, IItemStack, IItemStack, IItemStack):void} set(slot, currency, currency2, sold)
 * @property {function(Number):void} remove(slot)
 * @property {function(String):void} setMarket(name)
 * @property {function():String} getMarket
 */
