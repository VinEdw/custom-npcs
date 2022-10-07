/**
 * noppes.npcs.api.IScoreboardObjective
 * @typedef {Object} IScoreboardObjective
 * @property {function():String} getName
 * @property {function():String} getDisplayName
 * @property {function(String):void} setDisplayName(name)
 * @property {function():String} getCriteria
 * @property {function():Boolean} isReadyOnly
 * @property {function():IScoreboardScore[]} getScores
 * @property {function(String):IScoreboardScore} getScore(player)
 * @property {function(String):Boolean} hasScore(player)
 * @property {function(String):IScoreboardScore} createScore(player)
 * @property {function(String):void} removeScore(player)
 */
