/**
 * noppes.npcs.api.entity.IEntity
 * @typedef {Object} IEntity
 * @property {function():Number} getX
 * @property {function(Number):void} setX(x)
 * @property {function():Number} getY
 * @property {function(Number):void} setY(y)
 * @property {function():Number} getZ
 * @property {function(Number):void} setZ(z)
 * @property {function():Number} getBlockX
 * @property {function():Number} getBlockY
 * @property {function():Number} getBlockZ
 * @property {function():IPos} getPos
 * @property {function(IPos):void} setPos(pos)
 * @property {function(Number, Number, Number)} setPosition(x, y, z)
 * @property {function(Number):void} setRotation(rotation)
 * @property {function():Number} getRotation
 * @property {function():Number} getHeight
 * @property {function():Number} getEyeHeight
 * @property {function():Number} getWidth
 * @property {function(Number):void} setPitch(pitch)
 * @property {function():Number} getPitch
 * @property {function():IEntity} getMount
 * @property {function(IEntity):void} setMount(entity)
 * @property {function():IEntity[]} getRiders
 * @property {function():IEntity[]} getAllRiders
 * @property {function(IEntity):void} addRider(entity)
 * @property {function():void} clearRiders
 * @property {function(Number, Number):void} knockback(power, direction)
 * @property {function():Boolean} isSneaking
 * @property {function():Boolean} isSprinting
 * @property {function(IItemStack):IEntityItem} dropItem(item)
 * @property {function():Boolean} inWater
 * @property {function():Boolean} inFire
 * @property {function():Boolean} inLava
 * @property {function():IData} getTempdata
 * @property {function():IData} getStoreddata
 * @property {function():INbt} getNbt
 * @property {function():Boolean} isAlive
 * @property {function():Number} getAge
 * @property {function():void} despawn
 * @property {function():void} spawn
 * @property {function():void} kill
 * @property {function():Boolean} isBurning
 * @property {function(Number):void} setBurning(seconds)
 * @property {function():void} extinguish
 * @property {function():IWorld} getWorld
 * @property {function():String} getTypeName
 * @property {function():Number} getType
 * @property {function(Number):Boolean} typeOf(type)
 * @property {function()} getMCEntity
 * @property {function():String} getUUID
 * @property {function():String} generateNewUUID
 * @property {function(Number, String)} storeAsClone(tab, name)
 * @property {function():INbt} getEntityNbt
 * @property {function(INbt):void} setEntityNbt(nbt)
 * @property {function(Number, Boolean, Boolean):IRayTrace} rayTraceBlock(distance, stopOnLiquid, ignoreBlockWithoutBoundingBox)
 * @property {function(Number, Boolean, Boolean):IEntity[]} rayTraceEntities(distance, stopOnLiquid, ignoreBlockWithoutBoundingBox)
 * @property {function():String[]} getTags
 * @property {function(String):void} addTag(tag)
 * @property {function(String):Boolean} hasTag(tag)
 * @property {function(String):void} removeTag(tag)
 * @property {function(Number):void} playAnimation(type)
 * @property {function(Number):void} damage(amount)
 * @property {function():Number} getMotionX
 * @property {function():Number} getMotionY
 * @property {function():Number} getMotionZ
 * @property {function(Number):void} setMotionX(motion)
 * @property {function(Number):void} setMotionY(motion)
 * @property {function(Number):void} setMotionZ(motion)
 * @property {function():String} getName
 * @property {function(String):void} setName(name)
 * @property {function():Boolean} hasCustomName
 * @property {function():String} getEntityName
 */
