/**
 * noppes.npcs.api.handler.data.IDialog
 * @typedef {Object} IDialog
 * @property {function():Number} getId
 * @property {function():String} getName
 * @property {function(String):void} setName(name)
 * @property {function():String} getText
 * @property {function(String):void} setText(text)
 * @property {function():IQuest} getQuest
 * @property {function(IQuest):void} setQuest(quest)
 * @property {function():String} getCommand
 * @property {function(String):void} setCommand(command)
 * @property {function():IDialogOption[]} getOptions
 * @property {function(Number):IDialogOption} getOption(slot)
 * @property {function():IAvailability} getAvailability
 * @property {function():IDialogCategory} getCategory
 * @property {function():void} save
 */
