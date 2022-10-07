/**
 * noppes.npcs.api.IWorld
 * @typedef {Object} IWorld
 * @property {function(IPos, Number, Number):IEntity[]} getNearbyEntities(pos, range, type)
 * @property {function(IPos, Number, Number)} getClosestEntity(pos, range, type)
 * @property {function(Number):IEntity[]} getAllEntities(type)
 * @property {function():Number} getTime
 * @property {function(Number):void} setTime(time)
 * @property {function():Number} getTotalTime
 * @property {function(IPos):IBlock} getBlock(pos)
 * @property {function(IPos, String)} setBlock(pos, name)
 * @property {function(IPos):void} removeBlock(pos)
 * @property {function(Number, Number, Number):Number} getLightValue(x, y, z)
 * @property {function(String):IPlayer} getPlayer(name)
 * @property {function():Boolean} isDay
 * @property {function():Boolean} isRaining
 * @property {function():IDimension} getDimension
 * @property {function(Boolean):void} setRaining(bo)
 * @property {function(Number, Number, Number):void} thunderStrike(x, y, z)
 * @property {function(IPos, String, Number, Number):void} playSoundAt(pos, sound, volume, pitch)
 * @property {function(String, Number, Number, Number, Number, Number, Number, Number, Number):void} spawnParticle(particle, x, y, z, dx, dy, dz, speed, count)
 * @property {function(String):void} broadcast(message)
 * @property {function():IScoreboard} getScoreboard
 * @property {function():IData} getTempdata
 * @property {function():IData} getStoreddata
 * @property {function(String, Number):IItemStack} createItem(name, size)
 * @property {function(INbt)} createItemFromNbt(nbt)
 * @property {function(Number, Number, Number, Number, Boolean, Boolean):void} explode(x, y, z, range, fire, grief)
 * @property {function():IPlayer[]} getAllPlayers
 * @property {function(Number, Number):String} getBiomeName(x, z)
 * @property {function(IEntity):void} spawnEntity(entity)
 * @property {function(Number, Number, Number, Number, String):IEntity} spawnClone(x, y, z, tab, name) Deprecated
 * @property {function(Number, String):IEntity} getClone(tab, name)
 * @property {function(Number, Number, Number)} getRedstonePower(x, y, z)
 * @property {function()} getMCWorld
 * @property {function()} getMCBlockPos
 * @property {function(String):IEntity} getEntity(uuid)
 * @property {function(INbt):IEntity} createEntityFromNBT(nbt)
 * @property {function(String):IEntity} createEntity(id)
 * @property {function():IBlock} getSpawnPoint
 * @property {function(IBlock):void} setSpawnPoint(block)
 * @property {function():String} getName
 * @property {function(Number, ...Object):void} trigger(id, ...arguments)
 */
