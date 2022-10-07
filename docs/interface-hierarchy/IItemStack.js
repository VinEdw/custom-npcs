/**
 * noppes.npcs.api.item.IItemStack
 * @typedef {Object} IItemStack
 * @property {function():Number} getStackSize
 * @property {function(Number):void} setStackSize(size)
 * @property {function():Number} getMaxStackSize
 * @property {function():Boolean} isDamageable
 * @property {function():Number} getDamage
 * @property {function(Number):void} setDamage(value)
 * @property {function():Number} getMaxDamage
 * @property {function():Number} getAttackDamage
 * @property {function(Number, IMob):void} damageItem(damage, living)
 * @property {function(String, Number):void} addEnchantment(id, strength)
 * @property {function():Boolean} isEnchanted
 * @property {function(String):Boolean} hasEnchant(id)
 * @property {function(String):Boolean} removeEnchant(id)
 * @property {function():Boolean} isBlock
 * @property {function():Boolean} isWearable
 * @property {function():Boolean} hasCustomName
 * @property {function(String):void} setCustomName(name)
 * @property {function():String} getDisplayName
 * @property {function():String} getItemName
 * @property {function():String} getName
 * @property {function():Boolean} isBook
 * @property {function():IItemStack} copy
 * @property {function()} getMCItemStack
 * @property {function():INbt} getNbt
 * @property {function():Boolean} hasNbt
 * @property {function():void} removeNbt
 * @property {function():INbt} getItemNbt
 * @property {function():Boolean} isEmpty
 * @property {function():Number} getType
 * @property {function():String[]} getLore
 * @property {function(String[]):void} setLore(lore)
 * @property {function(String, Number, Number):void} setAttribute(name, value, slot)
 * @property {function(String):Number} getAttribute(name)
 * @property {function(String):Boolean} hasAttribute(name)
 * @property {function():IData} getTempdata
 * @property {function():IData} getStoreddata
 * @property {function():Number} getFoodLevel
 * @property {function(IItemStack, Boolean):Boolean} compare(item, ignoreNBT)
 */
