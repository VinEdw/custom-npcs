/**
 * noppes.npcs.api.gui.IScroll
 * @typedef {ICustomGuiComponent & IScrollPartial} IScroll
 * @typedef {Object} IScrollPartial
 * @property {function():Number} getWidth
 * @property {function():Number} getHeight
 * @property {function(Number, Number):IScroll} setSize(width, height)
 * @property {function():String[]} getList
 * @property {function(String[]):IScroll} setList(list)
 * @property {function():Number} getDefaultSelection
 * @property {function(Number):IScroll} setDefaultSelection(defaultSelection)
 * @property {function():Boolean} isMultiSelect
 * @property {function(Boolean):IScroll} setMultiSelect(multiSelect)
 */
