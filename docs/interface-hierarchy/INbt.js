/**
 * noppes.npcs.api.INbt
 * @typedef {Object} INbt
 * @property {function(String):void} remove(key)
 * @property {function(String):Boolean} has(key)
 * @property {function(String):Boolean} getBoolean(key)
 * @property {function(String, Boolean):void} setBoolean(key, value)
 * @property {function(String):Number} getShort(key)
 * @property {function(String, Number):void} setShort(key, value)
 * @property {function(String):Number} getInteger(key)
 * @property {function(String, Number):void} setInteger(key, value)
 * @property {function(String):Number} getByte(key)
 * @property {function(String, Number):void} setByte(key, value)
 * @property {function(String):Number} getLong(key)
 * @property {function(String, value):void} setLong(key, value)
 * @property {function(String):Number} getDouble(key)
 * @property {function(String, Number):void} setDouble(key, value)
 * @property {function(String):Number} getFloat(key)
 * @property {function(String, Number):void} setFloat(key, value)
 * @property {function(String):String} getString(key)
 * @property {function(String, String):void} putString(key, value)
 * @property {function(String):Number[]} getByteArray(key)
 * @property {function(String, Number[]):void} setByteArray(key, value)
 * @property {function(String):Number[]} getIntegerArray(key)
 * @property {function(String, Number[]):void} setIntegerArray(key, value)
 * @property {function(String, Number):Object[]} getList(key, type)
 * @property {function(String):Number} getListType(key)
 * @property {function(String, Object[]):void} setList(key, value)
 * @property {function(String):INbt} getCompound(key)
 * @property {function(String, INbt):void} setCompound(key, value)
 * @property {function():String[]} getKeys
 * @property {function(String):Number} getType(key)
 * @property {function()} getMCNBT
 * @property {function():String} toJsonString
 * @property {function():Boolean} isEqual
 * @property {function():void} clear
 * @property {function(INbt):void} merge(nbt)
 * @property {function():void} mcSetTag
 * @property {function()} mcGetTag
 */
