/**
 * noppes.npcs.api.IScoreboard
 * @typedef {Object} IScoreboard
 * @property {function():IScoreboardObjective[]} getObjectives
 * @property {function(String):IScoreboardObjective} getObjective(name)
 * @property {function(String):Boolean} hasObjective(objective)
 * @property {function(String):void} removeObjective(objective)
 * @property {function(String, String):IScoreboardObjective} addObjective(objective, criteria)
 * @property {function(String, String, Number):void} setPlayerScore(player, objective, score)
 * @property {function(String, String):Number} getPlayerScore(player, objective)
 * @property {function(String, String):Boolean} hasPlayerObjective(player, objective)
 * @property {function(String, String):void} deletePlayerScore(player, objective)
 * @property {function():IScoreboardTeam[]} getTeams
 * @property {function(String):Boolean} hasTeam(name)
 * @property {function(String):IScoreboardTeam} addTeam(name)
 * @property {function(String):IScoreboardTeam} getTeam(name)
 * @property {function(String):void} removeTeam(name)
 * @property {function(String):IScoreboardTeam} getPlayerTeam(player)
 * @property {function(String):void} removePlayerTeam(player)
 * @property {function():String[]} getPlayerList
 */
