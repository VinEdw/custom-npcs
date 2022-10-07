/**
 * noppes.npcs.api.entity.IProjectile
 * @typedef {IThrowable & IProjectilePartial} IProjectile
 * @typedef {Object} IProjectilePartial
 * @property {function():IItemStack} getItem
 * @property {function(IItemStack):void} setItem(item)
 * @property {function():Boolean} getHasGravity
 * @property {function(Boolean):void} setHasGravity(bo)
 * @property {function():Number} getAccuracy
 * @property {function(Number):void} setAccuracy(accuracy)
 * @property {function(IEntity):void} setHeading(entity)
 * @property {function(Number, Number, Number):void} setHeading(x, y, z)
 * @property {function(Number, Number):void} setHeading(yaw, pitch)
 * @property {function():void} enableEvents
 */
