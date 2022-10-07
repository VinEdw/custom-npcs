/**
 * noppes.npcs.api.entity.IMob
 * @typedef {IEntityLiving & IMobPartial} IMob
 * @typedef {Object} IMobPartial
 * @property {function():Boolean} isNavigating
 * @property {function():void} clearNavigation
 * @property {function(Number, Number, Number, Number):void} navigateTo(x, y, z, speed)
 * @property {function():void} jump
 * @property {function()} getMCEntity
 * @property {function():IPos} getNavigationPath
 */
