/**
 * noppes.npcs.api.IPos
 * @typedef {Object} IPos
 * @property {function():Number} getX
 * @property {function():Number} getY
 * @property {function():Number} getZ
 * @property {function():IPos} up
 * @property {function(Number):IPos} up(n)
 * @property {function():IPos} down
 * @property {function(Number):IPos} down(n)
 * @property {function():IPos} north
 * @property {function(Number):IPos} north(n)
 * @property {function():IPos} east
 * @property {function(Number):IPos} east(n)
 * @property {function():IPos} south
 * @property {function(Number):IPos} south(n)
 * @property {function():IPos} west
 * @property {function(Number):IPos} west(n)
 * @property {function(Number, Number, Number):IPos} add(x, y, z)
 * @property {function(IPos):IPos} add(pos)
 * @property {function(Number, Number, Number):IPos} subtract(x, y, z)
 * @property {function(IPos):IPos} subtract(pos)
 * @property {function():Number[]} normalize
 * @property {function():IPos} getMCBlockPos
 * @property {function(Number):IPos} offset(direction)
 * @property {function(Number, Number):IPos} offset(direction, n)
 * @property {function(IPos):Number} distanceTo(pos)
 */
