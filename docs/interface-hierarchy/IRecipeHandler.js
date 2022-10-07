/**
 * noppes.npcs.api.handler.IRecipeHandler
 * @typedef {Object} IRecipeHandler
 * @property {function():IRecipe[]} getGlobalList
 * @property {function():IRecipe[]} getCarpentryList
 * @property {function(String, Boolean, net.minecraft.item.ItemStack, Object...):IRecipe} addRecipe(name, global, result, objects)
 * @property {function(String, Boolean, net.minecraft.item.ItemStack, Number, Number, net.minecraft.item.ItemStack...):IRecipe} addRecipe(name, global, result, width, height, recipe)
 * @property {function(Number):IRecipe} delete(id)
 */
