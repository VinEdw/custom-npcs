/**
 * noppes.npcs.api.handler.data.IAvailability
 * @typedef {Object} IAvailability
 * @property {function(IPlayer):Boolean} isAvailable(player)
 * @property {function():Number} getDaytime
 * @property {function(Number):void} setDaytime(type)
 * @property {function():Number} getMinPlayerLevel
 * @property {function(Number):void} setMinPlayerLevel(level)
 * @property {function(Number):Number} getDialog(i)
 * @property {function(Number, Number, Number):void} setDialog(i, id, type)
 * @property {function(Number):void} removeDialog(i)
 * @property {function(Number):Number} getQuest(i)
 * @property {function(Number, Number, Number):void} setQuest(i, id, type)
 * @property {function(Number):void} removeQuest(i)
 * @property {function(Number, Number, Number, Number):void} setFaction(i, id, type, stance)
 * @property {function(Number):void} removeFaction(i)
 * @property {function(Number, String, Number, Number):void} setScoreboard(i, objective, type, value)
 */
