/**
 * noppes.npcs.api.handler.data.IFaction
 * @typedef {Object} IFaction
 * @property {function():Number} getId
 * @property {function():String} getName
 * @property {function():Number} getDefaultPoints
 * @property {function(Number):void} setDefaultPoints(points)
 * @property {function():Number} getColor
 * @property {function(IPlayer):Number} playerStatus(player)
 * @property {function(ICustomNpc):Boolean} hostileToNpc(npc)
 * @property {function(Number):Boolean} hostileToFaction(factionId)
 * @property {function():Number[]} getHostileList
 * @property {function(Number):void} addHostile(id)
 * @property {function(Number):void} removeHostile(id)
 * @property {function(Number):Boolean} hasHostile(id)
 * @property {function():Boolean} getIsHidden
 * @property {function(Boolean):void} setIsHidden(bo)
 * @property {function():Boolean} getAttackedByMobs
 * @property {function(Boolean):void} setAttackedByMobs(bo)
 * @property {function():void} save
 */
