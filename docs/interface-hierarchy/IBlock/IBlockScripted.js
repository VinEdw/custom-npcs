/**
 * noppes.npcs.api.block.IBlockScripted
 * @typedef {IBlock & IBlockScriptedPartial} IBlockScripted
 * @typedef {Object} IBlockScriptedPartial
 * @property {function(IItemStack):void} setModel(item)
 * @property {function(String):void} setModel(name)
 * @property {function():IItemStack} getModel
 * @property {function():ITimers} getTimers
 * @property {function(Number):void} setRedstonePower(strength)
 * @property {function():Number} getRedstonePower
 * @property {function(Boolean):void} setIsLadder(enabled)
 * @property {function():Boolean} getIsLadder
 * @property {function(Number):void} setLight(value)
 * @property {function():Number} getLight
 * @property {function(Number, Number, Number):void} setScale(x, y, z)
 * @property {function():Number} getScaleX
 * @property {function():Number} getScaleY
 * @property {function():Number} getScaleZ
 * @property {function(Number, Number, Number):void} setRotation(x, y, z)
 * @property {function():Number} getRotationX
 * @property {function():Number} getRotationY
 * @property {function():Number} getRotationZ
 * @property {function(String):String} executeCommand(command)
 * @property {function():Boolean} getIsPassible
 * @property {function(Boolean):void} setIsPassible(bo)
 * @property {function():Number} getHardness
 * @property {function(Number):void} setHardness(hardness)
 * @property {function():Number} getResistance
 * @property {function(Number):void} setResistance(resistance)
 * @property {function():ITextPlane} getTextPlane
 * @property {function():ITextPlane} getTextPlane2
 * @property {function():ITextPlane} getTextPlane3
 * @property {function():ITextPlane} getTextPlane4
 * @property {function():ITextPlane} getTextPlane5
 * @property {function():ITextPlane} getTextPlane6
 * @property {function(Number, ...Object):void} trigger(id, arguments)
 */
