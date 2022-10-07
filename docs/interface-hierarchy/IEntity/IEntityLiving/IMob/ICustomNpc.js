/**
 * noppes.npcs.api.entity.ICustomNpc
 * @typedef {IMob & ICustomNpcPartial} ICustomNpc
 * @typedef {Object} ICustomNpcPartial
 * @property {function():INPCDisplay} getDisplay
 * @property {function():INPCInventory} getInventory
 * @property {function():INPCStats} getStats
 * @property {function():INPCAi} getAi
 * @property {function():INPCAdvanced} getAdvanced
 * @property {function():IFaction} getFaction
 * @property {function(Number):void} setFaction(id)
 * @property {function():INPCRole} getRole
 * @property {function():INPCJob} getJob
 * @property {function():ITimers} getTimers
 * @property {function():Number} getHomeX
 * @property {function():Number} getHomeY
 * @property {function():Number} getHomeZ
 * @property {function():IEntityLiving} getOwner
 * @property {function(Number, Number, Number):void} setHome(x, y, z)
 * @property {function():void} reset
 * @property {function(String):void} say(message)
 * @property {function(IPlayer, String):void} sayTo(player, message)
 * @property {function(IEntityLiving, IItemStack, Number):IProjectile} shootItem(target, item, accuracy)
 * @property {function(Number, Number, Number, IItemStack, Number):IProjectile} shootItem(x, y, z, item, accuracy)
 * @property {function(IPlayer, IItemStack):void} giveItem(player, item)
 * @property {function(Number, IDialog):void} setDialog(slot, dialog)
 * @property {function(Number):IDialog} getDialog(slot)
 * @property {function():void} updateClient
 * @property {function(String):String} executeCommand(command)
 * @property {function(Number, ...Object):void} trigger(id, arguments)
 */
