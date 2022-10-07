/**
 * noppes.npcs.api.block.IBlock
 * @typedef {Object} IBlock
 * @property {function():Number} getX
 * @property {function():Number} getY
 * @property {function():Number} getZ
 * @property {function():IPos} getPos
 * @property {function(String):Object} getProperty(name)
 * @property {function(String, Object):void} setProperty(name, val)
 * @property {function():String[]} getProperties
 * @property {function():String} getName
 * @property {function():void} remove
 * @property {function():Boolean} isRemoved
 * @property {function():Boolean} isAir
 * @property {function(String):IBlock} setBlock(name)
 * @property {function(IBlock):IBlock} setBlock(block)
 * @property {function():Boolean} hasTileEntity
 * @property {function():Boolean} isContainer
 * @property {function():IContainer} getContainer
 * @property {function():IData} getTempdata
 * @property {function():IData} getStoreddata
 * @property {function():IWorld} getWorld
 * @property {function():INbt} getBlockEntityNBT
 * @property {function(INbt):void} setTileEntityNBT(nbt)
 * @property {function()} getMCTileEntity
 * @property {function()} getMCBlock
 * @property {function(Number, Number):void} blockEvent(type, data)
 * @property {function():String} getDisplayName
 * @property {function()} getMCBlockState
 * @property {function(Number):void} interact(side)
 */
