/**
 * noppes.npcs.api.gui.ICustomGui
 * @typedef {Object} ICustomGui
 * @property {function():Number} getID
 * @property {function():Number} getWidth
 * @property {function():Number} getHeight
 * @property {function():ICustomGuiComponent[]} getComponents
 * @property {function():IItemSlot[]} getSlots
 * @property {function(Number, Number):void} setSize(width, height)
 * @property {function(Boolean):void} setDoesPauseGame(pauseGame)
 * @property {function(String):void} setBackgroundTexture(resourceLocation)
 * @property {function(Number, String, Number, Number):IButton} addButton(id, label, x, y)
 * @property {function(Number, String, Number, Number, Number, Number):IButton} addButton(id, label, x, y, width, height)
 * @property {function(Number, String, Number, Number, Number, Number, String):IButton} addTexturedButton(id, label, x, y, width, height, texture)
 * @property {function(Number, String, Number, Number, Number, Number, String, Number, Number):IButton} addTexturedButton(id, label, x, y, width, height, texture, textureX, textureY)
 * @property {function(Number, String, Number, Number, Number, Number):ILabel} addLabel(id, label, x, y, width, height)
 * @property {function(Number, String, Number, Number, Number, Number, Number):ILabel} addLabel(id, label, x, y, width, height, color)
 * @property {function(Number, Number, Number, Number, Number):ITextField} addTextField(id, x, y, width, height)
 * @property {function(Number, Number, Number, Number, Number):ITextArea} addTextArea(id, x, y, width, height)
 * @property {function(Number, String, Number, Number, Number, Number):ITexturedRect} addTexturedRect(id, texture, x, y, width, height)
 * @property {function(Number, String, Number, Number, Number, Number, Number, Number):ITexturedRect} addTexturedRect(id, texture, x, y, width, height, textureX, textureY)
 * @property {function(Number, Number, Number, Number, Number, String[]):IScroll} addScroll(id, x, y, width, height, list)
 * @property {function(Number, Number):IItemSlot} addItemSlot(x, y)
 * @property {function(Number, Number, IItemStack):IItemSlot} addItemSlot(x, y, stack)
 * @property {function(Number, Number):void} showPlayerInventory(x, y)
 * @property {function(Number):ICustomGuiComponent} getComponent(id)
 * @property {function(Number):void} removeComponent(id)
 * @property {function(IPlayer):void} update(player)
 */
