/**
 * noppes.npcs.api.entity.IPlayer
 * @typedef {IEntityLiving & IPlayerPartial} IPlayer
 * @typedef {Object} IPlayerPartial
 * @property {function():String} getDisplayName
 * @property {function(Number):Boolean} hasFinishedQuest(id)
 * @property {function(Number):Boolean} hasActiveQuest(id)
 * @property {function(Number):void} startQuest(id)
 * @property {function(Number):Number} factionStatus(factionId)
 * @property {function(Number):void} finishQuest(id)
 * @property {function(Number):void} stopQuest(id)
 * @property {function(Number):void} removeQuest(id)
 * @property {function(Number):Boolean} hasReadDialog(id)
 * @property {function(Number, String):void} showDialog(id, name)
 * @property {function(Number):void} removeDialog(id)
 * @property {function(Number):void} addDialog(id)
 * @property {function(Number, Number):void} addFactionPoints(faction, points)
 * @property {function(Number):Number} getFactionPoints(faction)
 * @property {function(String):void} message(message)
 * @property {function():Number} getGamemode
 * @property {function(Number):void} setGamemode(mode)
 * @property {function():IContainer} getInventory
 * @property {function():IItemStack} getInventoryHeldItem
 * @property {function(IItemStack, Number):Boolean} removeItem(item, amount)
 * @property {function(String, Number):Boolean} removeItem(id, amount)
 * @property {function(IItemStack):void} removeAllItems(item)
 * @property {function(IItemStack):Boolean} giveItem(item)
 * @property {function(String, Number):Boolean} giveItem(id, amount)
 * @property {function(Number, Number, Number):void} setSpawnpoint(x, y, z)
 * @property {function():void} resetSpawnpoint
 * @property {function(String):void} hasAdvancement(achievement)
 * @property {function():Number} getExpLevel
 * @property {function(Number):void} setExpLevel(level)
 * @property {function(String):Boolean} hasPermission(permission)
 * @property {function(Object)} getPixelmonData
 * @property {function(ITimers)} getTimers
 * @property {function():void} closeGui
 * @property {function()} getMCEntity
 * @property {function():IBlock} getSpawnPoint
 * @property {function(IBlock):void} setSpawnPoint(block)
 * @property {function():Number} getHunger
 * @property {function(Number):void} setHunger(level)
 * @property {function(String):void} kick(message)
 * @property {function(String, String, Number):void} sendNotification(title, msg, type)
 * @property {function(IPlayerMail):void} sendMail(mail)
 * @property {function():void} clearData
 * @property {function():IQuest[]} getActiveQuests
 * @property {function():IQuest[]} getFinishedQuests
 * @property {function():void} updatePlayerInventory
 * @property {function(String, Number, Number):void} playSound(sound, volume, pitch)
 * @property {function(String, Boolean, Boolean):void} playMusic(sound, background, loops)
 * @property {function():IContainer} getOpenContainer
 * @property {function(Number):Boolean} canQuestBeAccepted(id)
 * @property {function(ICustomGui):void} showCustomGui(gui)
 * @property {function():ICustomGui} getCustomGui
 * @property {function(Number, ...objects):void} trigger(id, ...arguments)
 */
