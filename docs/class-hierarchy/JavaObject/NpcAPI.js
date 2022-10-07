/**
 * noppes.npcs.api.NpcAPI
 * @typedef {Object} NpcAPI
 * @property {function(net.minecraft.world.World):ICustomNpc} createNPC(world)
 * @property {function(net.minecraft.world.World, Number, Number, Number):ICustomNpc} spawnNPC(level, x, y, z)
 * @property {function(net.minecraft.entity.Entity):IEntity} getIEntity(entity)
 * @property {function(net.minecraft.world.World, net.minecraft.util.math.BlockPos):IBlock} getIBlock(level, pos)
 * @property {function(net.minecraft.inventory.IInventory):IContainer} getIContainer(inventory)
 * @property {function(net.minecraft.inventory.container.Container):IContainer} getIContainer(container)
 * @property {function(net.minecraft.item.ItemStack):IItemStack} getIItemStack(itemstack)
 * @property {function(net.minecraft.world.server.ServerWorld):IWorld} getIWorld(world)
 * @property {function(String):IWorld} getIWorld(dimension)
 * @property {function(net.minecraft.world.DimensionType):IWorld} getIWorld(dimension)
 * @property {function():IWorld[]} getIWorlds
 * @property {function(net.minecraft.nbt.CompoundNBT):INbt} getINbt(compound)
 * @property {function(Number, Number, Number):IPos} getIPos(x, y, z)
 * @property {function():IFactionHandler} getFactions
 * @property {function():IRecipeHandler} getRecipes
 * @property {function():IQuestHandler} getQuests
 * @property {function():IDialogHandler} getDialogs
 * @property {function():ICloneHandler} getClones
 * @property {function(net.minecraft.util.DamageSource):IDamageSource} getIDamageSource(damagesource)
 * @property {function(String):INbt} stringToNbt(str)
 * @property {function(String, String):IPlayerMail} createMail(sender, subject)
 * @property {function(Number, Number, Number, Boolean):ICustomGui} createCustomGui(id, width, height, pauseGame)
 * @property {function(String):INbt} getRawPlayerData(uuid)
 * @property {function():net.minecraftforge.eventbus.api.IEventBus} events
 * @property {function():File} getGlobalDir
 * @property {function():File} getWorldDir
 * @property {function():Boolean} IsAvailable
 * @property {function():NpcAPI} Instance
 * @property {function(String, Number):void} registerPermissionNode(permission, defaultType)
 * @property {function(String):Boolean} hasPermissionNode(permission)
 * @property {function(IWorld, String):String} executeCommand(level, command)
 * @property {function(Number, Number):String} getRandomName(dictionary, gender)
 */
