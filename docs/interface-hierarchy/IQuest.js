/**
 * noppes.npcs.api.handler.data.IQuest
 * @typedef {Object} IQuest
 * @property {function():Number} getId
 * @property {function():String} getName
 * @property {function(String):void} setName(name)
 * @property {function():Number} getType
 * @property {function(Number):void} setType(type)
 * @property {function():String} getLogText
 * @property {function(String):void} setLogText(text)
 * @property {function():String} getCompleteText
 * @property {function(String):void} setCompleteText(text)
 * @property {function():IQuest} getNextQuest
 * @property {function(IQuest):void} setNextQuest(quest)
 * @property {function(IPlayer):IQuestObjective[]} getObjectives(player)
 * @property {function():IQuestCategory} getCategory
 * @property {function():IContainer} getRewards
 * @property {function():String} getNpcName
 * @property {function(String):void} setNpcName(name)
 * @property {function():void} save
 * @property {function():Boolean} getIsRepeatable
 */
