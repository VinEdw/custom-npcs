/**
 * noppes.npcs.api.entity.IEntityLiving
 * @typedef {IEntity & IEntityLivingPartial} IEntityLiving
 * @typedef IEntityLivingPartial
 * @property {function():Number} getHealth
 * @property {function(Number):void} setHealth(health)
 * @property {function():Number} getMaxHealth
 * @property {function(Number):void} setMaxHealth(health)
 * @property {function():Boolean} isAttacking
 * @property {function(IEntityLiving):void} setAttackTarget(living)
 * @property {function():IEntityLiving} getAttackTarget
 * @property {function():IEntityLiving} getLastAttacked
 * @property {function():Number} getLastAttackedTime
 * @property {function():Boolean} canSeeEntity
 * @property {function():void} swingMainhand
 * @property {function():void} swingOffhand
 * @property {function():IItemStack} getMainhandItem
 * @property {function(IItemStack):void} setMainhandItem(item)
 * @property {function():IItemStack} getOffhandItem
 * @property {function(IItemStack):void} setOffhandItem(item)
 * @property {function(Number):IItemStack} getArmor(slot)
 * @property {function(Number, IItemStack):void} setArmor(slot, item)
 * @property {function(Number, Number, Number, Boolean):void} addPotionEffect(effect, duration, strength, hideParticles)
 * @property {function():void} clearPotionEffects
 * @property {function():Number} getPotionEffect
 * @property {function(Number):IMark} addMark(type)
 * @property {function(IMark):void} removeMark(mark)
 * @property {function():IMark[]} getMarks
 * @property {function():Boolean} isChild
 * @property {function()} getMCEntity
 * @property {function():Number} getMoveForward
 * @property {function():Number} setMoveForward
 * @property {function():Number} getMoveStrafing
 * @property {function(Number):void} setMoveStrafing(move)
 * @property {function():Number} getMoveVertical
 * @property {function(Number):void} setMoveVertical(move)
 */
