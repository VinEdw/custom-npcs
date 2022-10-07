/**
 * java.lang.Object
 * @typedef {Object} JavaObject
 * @property {function(Object):Boolean} equals(obj)
 * @property {function():class} getClass
 * @property {function():Number} hashCode
 * @property {function():void} notify
 * @property {function():void} notifyAll
 * @property {function():String} toString
 * @property {function(Number, Number):void} wait([timeOutMillis], [nanos])
 */

/**
 * noppes.npcs.api.constants.AnimationType
 * @typedef {JavaObject & AnimationTypePartial} AnimationType
 * @typedef {Object} AnimationTypePartial
 * @property {Number} NORMAL
 * @property {Number} SIT
 * @property {Number} SLEEP
 * @property {Number} HUG
 * @property {Number} SNEAK
 * @property {Number} DANCE
 * @property {Number} AIM
 * @property {Number} CRAWL
 * @property {Number} POINT
 * @property {Number} CRY
 * @property {Number} WAVE
 * @property {Number} BOW
 * @property {Number} NO
 * @property {Number} YES
 * @property {Number} DEATH
 */

/**
 * noppes.npcs.api.constants.EntitiesType
 * @typedef {JavaObject & EntitiesTypePartial} EntitiesType
 * @typedef {Object} EntitiesTypePartial
 * @property {Number} ANY
 * @property {Number} UNKNOWN
 * @property {Number} PLAYER
 * @property {Number} NPC
 * @property {Number} MONSTER
 * @property {Number} ANIMAL
 * @property {Number} LIVING
 * @property {Number} ITEM
 * @property {Number} PROJECTILE
 * @property {Number} PIXELMON
 * @property {Number} VILLAGER
 * @property {Number} ARROW
 * @property {Number} THROWABLE
 */

/**
 * noppes.npcs.api.constants.GuiComponentType
 * @typedef {JavaObject & GuiComponentTypePartial} GuiComponentType
 * @typedef {Object} GuiComponentTypePartial
 * @property {Number} BUTTON
 * @property {Number} LABEL
 * @property {Number} TEXTURED_RECT
 * @property {Number} TEXT_FIELD
 * @property {Number} SCROLL
 * @property {Number} ITEM_SLOT
 * @property {Number} TEXT_AREA
 */

/**
 * noppes.npcs.api.event.HandlerEvent
 * @typedef {JavaObject} HandlerEvent
 */

/**
 * noppes.npcs.api.constants.ItemType
 * @typedef {JavaObject & ItemTypePartial} ItemType
 * @typedef {Object} ItemTypePartial
 * @property {Number} NORMAL
 * @property {Number} BOOK
 * @property {Number} BLOCK
 * @property {Number} ARMOR
 * @property {Number} SWORD
 * @property {Number} SEEDS
 * @property {Number} SCRIPTED
 */

/**
 * noppes.npcs.api.constants.JobType
 * @typedef {JavaObject & JobTypePartial} JobType
 * @typedef {Object} JobTypePartial
 * @property {Number} NONE
 * @property {Number} BARD
 * @property {Number} HEALER
 * @property {Number} GUARD
 * @property {Number} ITEMGIVER
 * @property {Number} FOLLOWER
 * @property {Number} SPAWNER
 * @property {Number} CONVERSATION
 * @property {Number} CHUNKLOADER
 * @property {Number} PUPPET
 * @property {Number} BUILDER
 * @property {Number} FARMER
 * @property {Number} MAXSIZE
 */

/**
 * noppes.npcs.api.constants.MarkType
 * @typedef {JavaObject & MarkTypePartial} MarkType
 * @typedef {Object} MarkTypePartial
 * @property {Number} NONE
 * @property {Number} QUESTION
 * @property {Number} EXCLAMATION
 * @property {Number} POINTER
 * @property {Number} SKULL
 * @property {Number} CROSS
 * @property {Number} STAR
 */

/**
 * net.minecraftforge.eventbus.api.Event
 * @typedef {JavaObject & MinecraftForgeEventPartial} MinecraftForgeEvent
 * @typedef {Object} MinecraftForgeEventPartial
 * @property {function()} getListenerList
 * @property {function()} getPhase
 * @property {function()} getResult
 * @property {function():Boolean} hasResult
 * @property {function():Boolean} isCancelable
 * @property {function():Boolean} isCanceled
 * @property {function(Boolean):void} setCanceled(cancel)
 * @property {function(any):void} setPhase(value)
 * @property {function():void} setResult(value)
 */

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

/**
 * noppes.npcs.api.constants.OptionType
 * @typedef {JavaObject & OptionTypePartial} OptionType
 * @typedef {Object} OptionTypePartial
 * @property {Number} QUIT_OPTION
 * @property {Number} DIALOG_OPTION
 * @property {Number} DISABLED
 * @property {Number} ROLE_OPTION
 * @property {Number} COMMAND_BLOCK
 */

/**
 * noppes.npcs.api.constants.ParticleType
 * @typedef {JavaObject & ParticleTypePartial} ParticleType
 * @typedef {Object} ParticleTypePartial
 * @property {Number} NONE
 * @property {Number} SMOKE
 * @property {Number} PORTAL
 * @property {Number} REDSTONE
 * @property {Number} LIGHTNING
 * @property {Number} LARGE_SMOKE
 * @property {Number} MAGIC
 * @property {Number} ENCHANT
 * @property {Number} CRIT
 * @property {function(Number):net.minecraft.particles.IParticleData} getMcType(type)
 */

/**
 * noppes.npcs.api.constants.PotionEffectType
 * @typedef {JavaObject & PotionEffectTypePartial} PotionEffectType
 * @typedef {Object} PotionEffectTypePartial
 * @property {Number} NONE
 * @property {Number} FIRE
 * @property {Number} SPEED
 * @property {Number} SLOWNESS
 * @property {Number} HASTE
 * @property {Number} MINING_FATIGUE
 * @property {Number} STRENGTH
 * @property {Number} INSTANT_HEALTH
 * @property {Number} INSTANT_DAMAGE
 * @property {Number} JUMP_BOOST
 * @property {Number} NAUSEA
 * @property {Number} REGENERATION
 * @property {Number} RESISTANCE
 * @property {Number} FIRE_RESISTANCE
 * @property {Number} WATER_BREATHING
 * @property {Number} INVISIBILITY
 * @property {Number} BLINDNESS
 * @property {Number} NIGHT_VISION
 * @property {Number} HUNGER
 * @property {Number} WEAKNESS
 * @property {Number} POISON
 * @property {Number} WITHER
 * @property {Number} HEALTH_BOOST
 * @property {Number} ABSORPTION
 * @property {Number} SATURATION
 * @property {Number} GLOWING
 * @property {Number} LEVITATION
 * @property {Number} LUCK
 * @property {Number} UNLUCK
 * @property {Number} SLOW_FALLING
 * @property {Number} CONDUIT_POWER
 * @property {Number} DOLPHINS_GRACE
 * @property {Number} BAD_OMEN
 * @property {Number} HERO_OF_THE_VILLAGE
 * @property {function(Number):net.minecraft.potion.Effect} getMCType(effect)
 */

/**
 * noppes.npcs.api.constants.QuestType
 * @typedef {JavaObject & QuestTypePartial} QuestType
 * @typedef {Object} QuestTypePartial
 * @property {Number} ITEM
 * @property {Number} DIALOG
 * @property {Number} KILL
 * @property {Number} LOCATION
 * @property {Number} AREA_KILL
 * @property {Number} MANUAL
 */

/**
 * noppes.npcs.api.constants.RoleType
 * @typedef {JavaObject & RoleTypePartial} RoleType
 * @typedef {Object} RoleTypePartial
 * @property {Number} NONE
 * @property {Number} TRADER
 * @property {Number} FOLLOWER
 * @property {Number} BANK
 * @property {Number} TRANSPORTER
 * @property {Number} MAILMAN
 * @property {Number} COMPANION
 * @property {Number} DIALOG
 * @property {Number} MAXSIZE
 */

/**
 * noppes.npcs.api.constants.SideType
 * @typedef {JavaObject & SideTypePartial} SideType
 * @typedef {Object} SideTypePartial
 * @property {Number} DOWN
 * @property {Number} UP
 * @property {Number} NORTH
 * @property {Number} SOUTH
 * @property {Number} WEST
 * @property {Number} EAST
 */

/**
 * noppes.npcs.api.event.CustomNPCsEvent
 * @typedef {MinecraftForgeEvent & CustomNPCsEventPartial} CustomNPCsEvent
 * @typedef {Object} CustomNPCsEventPartial
 * @property {NpcAPI} API
 */

/**
 * noppes.npcs.api.event.BlockEvent
 * @typedef {CustomNPCsEvent & BlockEventPartial} BlockEvent
 * @typedef {Object} BlockEventPartial 
 * @property {IBlock} block
 */

/**
 * noppes.npcs.api.event.CustomGuiEvent
 * @typedef {CustomNPCsEvent & CustomGuiEventPartial} CustomGuiEvent
 * @typedef {Object} CustomGuiEventPartial
 * @property {IPlayer} player
 * @property {ICustomGui} gui
 */

/**
 * noppes.npcs.api.event.ForgeEvent
 * @typedef {CustomNPCsEvent & ForgeEventPartial} ForgeEvent
 * @typedef {Object} ForgeEventPartial
 * @property {net.minecraftforge.eventbus.api.Event} event
 */
/**
 * noppes.npcs.api.event.HandlerEvent.FactionsLoadedEvent
 * @typedef {CustomNPCsEvent & HandlerEventFactionsLoadedEventPartial} HandlerEventFactionsLoadedEvent
 * @typedef {Object} HandlerEventFactionsLoadedEventPartial
 * @property {IFactionHandler} handler
 */
/**
 * noppes.npcs.api.event.HandlerEvent.RecipesLoadedEvent
 * @typedef {CustomNPCsEvent & HandlerEventRecipesLoadedEventPartial} HandlerEventRecipesLoadedEvent
 * @typedef {Object} HandlerEventRecipesLoadedEventPartial
 * @property {IRecipeHandler} handler
 */
/**
 * noppes.npcs.api.event.ItemEvent
 * @typedef {CustomNPCsEvent & ItemEventPartial} ItemEvent
 * @typedef {Object} ItemEventPartial
 * @property {IItemScripted} item
 */
/**
 * noppes.npcs.api.event.NpcEvent
 * @typedef {CustomNPCsEvent & NpcEventPartial} NpcEvent
 * @typedef {Object} NpcEventPartial
 * @property {ICustomNpc} npc
 */

/**
 * noppes.npcs.api.event.PlayerEvent
 * @typedef {CustomNPCsEvent & PlayerEventPartial} PlayerEvent
 * @typedef {Object} PlayerEventPartial
 * @property {IPlayer} player
 */

/**
 * noppes.npcs.api.event.ProjectileEvent
 * @typedef {CustomNPCsEvent & ProjectileEventPartial} ProjectileEvent
 * @typedef {Object} ProjectileEventPartial
 * @property {IProjectile} projectile
 */
/**
 * noppes.npcs.api.event.QuestEvent
 * @typedef {CustomNPCsEvent & QuestEventPartial} QuestEvent
 * @typedef {Object} QuestEventPartial
 * @property {IQuest} quest
 * @property {IPlayer} player
 */
/**
 * noppes.npcs.api.event.RoleEvent
 * @typedef {CustomNPCsEvent & RoleEventPartial} RoleEvent
 * @typedef {Object} RoleEventPartial
 * @property {ICustomNpc} npc
 * @property {IPlayer} player
 */
/**
 * noppes.npcs.api.event.WorldEvent
 * @typedef {CustomNPCsEvent & WorldEventPartial} WorldEvent
 * @typedef {Object} WorldEventPartial
 * @property {IWorld} world
 */

/**
 * noppes.npcs.api.event.BlockEvent.BreakEvent
 * @typedef {BlockEvent} BlockEventBreakEvent broken
 */

/**
 * noppes.npcs.api.event.BlockEvent.ClickedEvent
 * @typedef {BlockEvent & BlockEventClickedEventPartial} BlockEventClickedEvent clicked
 * @typedef {Object} BlockEventClickedEventPartial
 * @property {IPlayer} player
 */

/**
 * noppes.npcs.api.event.BlockEvent.CollidedEvent
 * @typedef {BlockEvent & BlockEventCollidedEventPartial} BlockEventCollidedEvent collide
 * @typedef {Object} BlockEventCollidedEventPartial
 * @property {IEntity} entity
 */

/**
 * noppes.npcs.api.event.BlockEvent.DoorToggleEvent
 * @typedef {BlockEvent} BlockEventDoorToggleEvent doorToggle
 */

/**
 * noppes.npcs.api.event.BlockEvent.EntityFallenUponEvent
 * @typedef {BlockEvent & BlockEventEntityFallenUponEventPartial} BlockEventEntityFallenUponEvent fallenUpon
 * @typedef {Object} BlockEventEntityFallenUponEventPartial
 * @property {IEntity} entity
 * @property {Number} distanceFallen
 */

/**
 * noppes.npcs.api.event.BlockEvent.ExplodedEvent
 * @typedef {BlockEvent} BlockEventExplodedEvent exploded
 */
/**
 * noppes.npcs.api.event.BlockEvent.HarvestedEvent
 * @typedef {BlockEvent & BlockEventHarvestedEventPartial} BlockEventHarvestedEvent harvested
 * @typedef {Object} BlockEventHarvestedEventPartial
 * @property {IPlayer} player
 */

/**
 * noppes.npcs.api.event.BlockEvent.InitEvent
 * @typedef {BlockEvent} BlockEventInitEvent init
 */
/**
 * noppes.npcs.api.event.BlockEvent.InteractEvent
 * @typedef {BlockEvent & BlockEventInteractEventPartial} BlockEventInteractEvent interact
 * @typedef {Object} BlockEventInteractEventPartial
 * @property {IPlayer} player
 * @property {Number} hitX
 * @property {Number} hitY
 * @property {Number} hitZ
 * @property {Number} side
 */

/**
 * noppes.npcs.api.event.BlockEvent.NeighborChangedEvent
 * @typedef {BlockEvent & BlockEventNeighborChangedEventPartial} BlockEventNeighborChangedEvent neighborChanged
 * @typedef {Object} BlockEventNeighborChangedEventPartial
 * @property {IPos} changedPos
 */

/**
 * noppes.npcs.api.event.BlockEvent.RainFillEvent
 * @typedef {BlockEvent} BlockEventRainFillEvent rainFilled
 */
/**
 * noppes.npcs.api.event.BlockEvent.RedstoneEvent
 * @typedef {BlockEvent & BlockEventRedstoneEventPartial} BlockEventRedstoneEvent redstone
 * @typedef {Object} BlockEventRedstoneEventPartial
 * @property {Number} prevPower
 * @property {Number} power
 */

/**
 * noppes.npcs.api.event.BlockEvent.TimerEvent
 * @typedef {BlockEvent & BlockEventTimerEventPartial} BlockEventTimerEvent timer
 * @typedef {Object} BlockEventTimerEventPartial
 * @property {Number} id
 */

/**
 * noppes.npcs.api.event.BlockEvent.UpdateEvent
 * @typedef {BlockEvent} BlockEventUpdateEvent tick
 */
/**
 * noppes.npcs.api.event.CustomGuiEvent.ButtonEvent
 * @typedef {CustomGuiEvent & CustomGuiEventButtonEventPartial} CustomGuiEventButtonEvent customGuiButton
 * @typedef {Object} CustomGuiEventButtonEventPartial
 * @property {Number} buttonId
 */

/**
 * noppes.npcs.api.event.CustomGuiEvent.CloseEvent
 * @typedef {CustomGuiEvent} CustomGuiEventCloseEvent customGuiClosed
 */
/**
 * noppes.npcs.api.event.CustomGuiEvent.ScrollEvent
 * @typedef {CustomGuiEvent & CustomGuiEventScrollEventPartial} CustomGuiEventScrollEvent customGuiScroll
 * @typedef {Object} CustomGuiEventScrollEventPartial
 * @property {Number} scrollId
 * @property {String[]} selection
 * @property {Boolean} doubleClick
 * @property {Number} scrollIndex
 */
/**
 * noppes.npcs.api.event.CustomGuiEvent.SlotClickEvent
 * @typedef {CustomGuiEvent & CustomGuiEventSlotClickEventPartial} CustomGuiEventSlotClickEvent customGuiSlotClicked
 * @typedef {Object} CustomGuiEventSlotClickEventPartial
 * @property {Number} slotId
 * @property {IItemStack} stack
 * @property {Number} dragType
 * @property {String} clickType
 */
/**
 * noppes.npcs.api.event.CustomGuiEvent.SlotEvent
 * @typedef {CustomGuiEvent & CustomGuiEventSlotEventPartial} CustomGuiEventSlotEvent customGuiSlot
 * @typedef {Object} CustomGuiEventSlotEventPartial
 * @property {Number} slotId
 * @property {IItemStack} stack
 */
/**
 * noppes.npcs.api.event.ForgeEvent.EntityEvent
 * @typedef {ForgeEvent & ForgeEventEntityEventPartial} ForgeEventEntityEvent
 * @typedef {Object} ForgeEventEntityEventPartial
 * @property {IEntity} entity
 */
/**
 * noppes.npcs.api.event.ForgeEvent.InitEvent
 * @typedef {ForgeEvent} ForgeEventInitEvent
 */
/**
 * noppes.npcs.api.event.ForgeEvent.WorldEvent
 * @typedef {ForgeEvent & ForgeEventWorldEventPartial} ForgeEventWorldEvent
 * @typedef {Object} ForgeEventWorldEventPartial
 * @property {IWorld} world
 */
/**
 * noppes.npcs.api.event.ItemEvent.AttackEvent
 * @typedef {ItemEvent & ItemEventAttackEventPartial} ItemEventAttackEvent attack
 * @typedef {Object} ItemEventAttackEventPartial
 * @property {Number} type
 * @property {Object} target
 * @property {IPlayer} player
 * @property {IDamageSource} damageSource
 */
/**
 * noppes.npcs.api.event.ItemEvent.InitEvent
 * @typedef {ItemEvent} ItemEventInitEvent init
 */
/**
 * noppes.npcs.api.event.ItemEvent.InteractEvent
 * @typedef {ItemEvent & ItemEventInteractEventPartial} ItemEventInteractEvent interact
 * @typedef {Object} ItemEventInteractEventPartial
 * @property {Number} type
 * @property {Object} target
 * @property {IPlayer} player
 */
/**
 * noppes.npcs.api.event.ItemEvent.PickedUpEvent
 * @typedef {ItemEvent & ItemEventPickedUpEventPartial} ItemEventPickedUpEvent pickedUp
 * @typedef {Object} ItemEventPickedUpEventPartial
 * @property {IEntityItem} entity
 * @property {IPlayer} player
 */
/**
 * noppes.npcs.api.event.ItemEvent.SpawnEvent
 * @typedef {ItemEvent & ItemEventSpawnEventPartial} ItemEventSpawnEvent spawn
 * @typedef {Object} ItemEventSpawnEventPartial
 * @property {IEntityItem} entity
 */
/**
 * noppes.npcs.api.event.ItemEvent.TossedEvent
 * @typedef {ItemEvent & ItemEventTossedEventPartial} ItemEventTossedEvent toss
 * @typedef {Object} ItemEventTossedEventPartial
 * @property {IEntityItem} entity
 * @property {IPlayer} player
 */
/**
 * noppes.npcs.api.event.ItemEvent.UpdateEvent
 * @typedef {ItemEvent & ItemEventUpdateEventPartial} ItemEventUpdateEvent tick
 * @typedef {Object} ItemEventUpdateEventPartial
 * @property {IPlayer} player
 */
/**
 * noppes.npcs.api.event.DialogEvent
 * @typedef {NpcEvent & DialogEventPartial} DialogEvent
 * @typedef {Object} DialogEventPartial
 * @property {IDialog} dialog
 * @property {IPlayer} player
 */

/**
 * noppes.npcs.api.event.NpcEvent.CollideEvent
 * @typedef {NpcEvent & NpcEventCollideEventPartial} NpcEventCollideEvent collide
 * @typedef {Object} NpcEventCollideEventPartial
 * @property {IEntity} entity
 */

/**
 * noppes.npcs.api.event.NpcEvent.DamagedEvent
 * @typedef {NpcEvent & NpcEventDamagedEventPartial} NpcEventDamagedEvent damaged
 * @typedef {Object} NpcEventDamagedEventPartial
 * @property {IDamageSource} damageSource
 * @property {IEntity} source
 * @property {Number} damage
 * @property {Boolean} clearTarget
 */

/**
 * noppes.npcs.api.event.NpcEvent.DiedEvent
 * @typedef {NpcEvent & NpcEventDiedEventPartial} NpcEventDiedEvent died
 * @typedef {Object} NpcEventDiedEventPartial
 * @property {IDamageSource} damageSource
 * @property {String} type
 * @property {IEntity} source
 * @property {IItemStack[]} droppedItems
 * @property {Number} expDropped
 * @property {ILine} line
 */

/**
 * noppes.npcs.api.event.NpcEvent.InitEvent
 * @typedef {NpcEvent} NpcEventInitEvent init
 */
/**
 * noppes.npcs.api.event.NpcEvent.InteractEvent
 * @typedef {NpcEvent & NpcEventInteractEventPartial} NpcEventInteractEvent interact
 * @typedef {Object} NpcEventInteractEventPartial
 * @property {IPlayer} player
 */

/**
 * noppes.npcs.api.event.NpcEvent.KilledEntityEvent
 * @typedef {NpcEvent & NpcEventKilledEntityEventPartial} NpcEventKilledEntityEvent kill
 * @typedef {Object} NpcEventKilledEntityEventPartial
 * @property {IEntityLiving} entity
 */

/**
 * noppes.npcs.api.event.NpcEvent.MeleeAttackEvent
 * @typedef {NpcEvent & NpcEventMeleeAttackEventPartial} NpcEventMeleeAttackEvent meleeAttack
 * @typedef {Object} NpcEventMeleeAttackEventPartial
 * @property {IEntityLiving} target
 * @property {Number} damage
 */

/**
  * noppes.npcs.api.event.NpcEvent.RangedLaunchedEvent
  * @typedef {NpcEvent & NpcEventRangedLaunchedEventPartial} NpcEventRangedLaunchedEvent rangedLaunched
  * @typedef {Object} NpcEventRangedLaunchedEventPartial
  * @property {IEntityLiving} target
  * @property {Number} damage
  * @property {IProjectile[]} projectiles
  */

/**
  * noppes.npcs.api.event.NpcEvent.TargetEvent
  * @typedef {NpcEvent & NpcEventTargetEventPartial} NpcEventTargetEvent target
  * @typedef {Object} NpcEventTargetEventPartial
  * @property {IEntityLiving} entity
  */

/**
  * noppes.npcs.api.event.NpcEvent.TargetLostEvent
  * @typedef {NpcEvent & NpcEventTargetLostEventPartial} NpcEventTargetLostEvent targetLost
  * @typedef {Object} NpcEventTargetLostEventPartial
  * @property {IEntityLiving} entity
  */

/**
  * noppes.npcs.api.event.NpcEvent.TimerEvent
  * @typedef {NpcEvent & NpcEventTimerEventPartial} NpcEventTimerEvent timer
  * @typedef {Object} NpcEventTimerEventPartial
  * @property {Number} id
  */

/**
  * noppes.npcs.api.event.NpcEvent.UpdateEvent
  * @typedef {NpcEvent} NpcEventUpdateEvent tick
  */
/**
 * noppes.npcs.api.event.DialogEvent.CloseEvent
 * @typedef {DialogEvent} DialogEventCloseEvent dialogClose
 */
/**
 * noppes.npcs.api.event.DialogEvent.OpenEvent
 * @typedef {DialogEvent} DialogEventOpenEvent dialog
 */
/**
 * noppes.npcs.api.event.DialogEvent.OptionEvent
 * @typedef {DialogEvent & DialogEventOptionEventPartial} DialogEventOptionEvent
 * @typedef {Object} DialogEventOptionEventPartial
 * @property {IDialogOption} option
 */

/**
 * noppes.npcs.api.event.PlayerEvent.AttackEvent
 * @typedef {PlayerEvent & PlayerEventAttackEventPartial} PlayerEventAttackEvent attack
 * @typedef {Object} PlayerEventAttackEventPartial
 * @property {Number} type
 * @property {Object} target
 * @property {IDamageSource} damageSource
 */

/**
 * noppes.npcs.api.event.PlayerEvent.BreakEvent
 * @typedef {PlayerEvent & PlayerEventBreakEventPartial} PlayerEventBreakEvent broken
 * @typedef {Object} PlayerEventBreakEventPartial
 * @property {IBlock} block
 * @property {Number} exp
 */

/**
 * noppes.npcs.api.event.PlayerEvent.ChatEvent
 * @typedef {PlayerEvent & PlayerEventChatEventPartial} PlayerEventChatEvent chat
 * @typedef {Object} PlayerEventChatEventPartial
 * @property {String} message
 */

/**
 * noppes.npcs.api.event.PlayerEvent.ContainerClosed
 * @typedef {PlayerEvent & PlayerEventContainerClosedPartial} PlayerEventContainerClosed containerClosed
 * @typedef {Object} PlayerEventContainerClosedPartial
 * @property {IContainer} container
 */


/**
 * noppes.npcs.api.event.PlayerEvent.ContainerOpen
 * @typedef {PlayerEvent & PlayerEventContainerOpenPartial} PlayerEventContainerOpen containerOpen
 * @typedef {Object} PlayerEventContainerOpenPartial
 * @property {IContainer} container
 */

/**
 * noppes.npcs.api.event.PlayerEvent.DamagedEntityEvent
 * @typedef {PlayerEvent & PlayerEventDamagedEntityEventPartial} PlayerEventDamagedEntityEvent damagedEntity
 * @typedef {Object} PlayerEventDamagedEntityEventPartial
 * @property {IDamageSource} damageSource
 * @property {IEntity} target
 * @property {Number} damage
 */

/**
 * noppes.npcs.api.event.PlayerEvent.DamagedEvent
 * @typedef {PlayerEvent & PlayerEventDamagedEventPartial} PlayerEventDamagedEvent damaged
 * @typedef {Object} PlayerEventDamagedEventPartial
 * @property {IDamageSource} damageSource
 * @property {IEntity} source
 * @property {Number} damage
 * @property {Boolean} clearTarget
 */

/**
 * noppes.npcs.api.event.PlayerEvent.DiedEvent
 * @typedef {PlayerEvent & PlayerEventDiedEventPartial} PlayerEventDiedEvent died
 * @typedef {Object} PlayerEventDiedEventPartial
 * @property {IDamageSource} damageSource
 * @property {String} type
 * @property {IEntity} source
 */

/**
 * noppes.npcs.api.event.PlayerEvent.FactionUpdateEvent
 * @typedef {PlayerEvent & PlayerEventFactionUpdateEventPartial} PlayerEventFactionUpdateEvent factionUpdate
 * @typedef {Object} PlayerEventFactionUpdateEventPartial
 * @property {IFaction} faction
 * @property {Number} points
 * @property {Boolean} init
 */

/**
 * noppes.npcs.api.event.PlayerEvent.InitEvent
 * @typedef {PlayerEvent} PlayerEventInitEvent init
 */
/**
 * noppes.npcs.api.event.PlayerEvent.InteractEvent
 * @typedef {PlayerEvent & PlayerEventInteractEventPartial} PlayerEventInteractEvent interact
 * @typedef {Object} PlayerEventInteractEventPartial
 * @property {Number} type
 * @property {Object} target
 */

/**
 * noppes.npcs.api.event.PlayerEvent.KeyPressedEvent
 * @typedef {PlayerEvent & PlayerEventKeyPressedEventPartial} PlayerEventKeyPressedEvent keyPressed
 * @typedef {Object} PlayerEventKeyPressedEventPartial
 * @property {Number} key
 * @property {Boolean} isCtrlPressed
 * @property {Boolean} isAltPressed
 * @property {Boolean} isShiftPressed
 * @property {Boolean} isMetaPressed
 * @property {String} openGui
 */

/**
 * noppes.npcs.api.event.PlayerEvent.KeyReleasedEvent
 * @typedef {PlayerEvent & PlayerEventKeyReleasedEventPartial} PlayerEventKeyReleasedEvent keyReleased
 * @typedef {Object} PlayerEventKeyReleasedEventPartial
 * @property {Number} key
 * @property {Boolean} isCtrlPressed
 * @property {Boolean} isAltPressed
 * @property {Boolean} isShiftPressed
 * @property {Boolean} isMetaPressed
 * @property {String} openGui
 */

/**
 * noppes.npcs.api.event.PlayerEvent.KilledEntityEvent
 * @typedef {PlayerEvent & PlayerEventKilledEntityEventPartial} PlayerEventKilledEntityEvent kill
 * @typedef {Object} PlayerEventKilledEntityEventPartial
 * @property {IEntityLiving} entity
 */

/**
 * noppes.npcs.api.event.PlayerEvent.LevelUpEvent
 * @typedef {PlayerEvent & PlayerEventLevelUpEventPartial} PlayerEventLevelUpEvent levelUp
 * @typedef {Object} PlayerEventLevelUpEventPartial
 * @property {Number} change
 */

/**
 * noppes.npcs.api.event.PlayerEvent.LoginEvent
 * @typedef {PlayerEvent} PlayerEventLoginEvent login
 */
/**
 * noppes.npcs.api.event.PlayerEvent.LogoutEvent
 * @typedef {PlayerEvent} PlayerEventLogoutEvent logout
 */
/**
 * noppes.npcs.api.event.PlayerEvent.PickUpEvent
 * @typedef {PlayerEvent & PlayerEventPickUpEventPartial} PlayerEventPickUpEvent pickedUp
 * @typedef {Object} PlayerEventPickUpEventPartial
 * @property {IItemStack} item
 */

/**
 * noppes.npcs.api.event.PlayerEvent.PlaySoundEvent
 * @typedef {PlayerEvent & PlayerEventPlaySoundEventPartial} PlayerEventPlaySoundEvent playSound
 * @typedef {Object} PlayerEventPlaySoundEventPartial
 * @property {String} sound
 * @property {String} category
 * @property {Boolean} looping
 */

/**
 * noppes.npcs.api.event.PlayerEvent.RangedLaunchedEvent
 * @typedef {PlayerEvent} PlayerEventRangedLaunchedEvent rangedLaunched
 */
/**noppes.npcs.api.event.PlayerEvent.TimerEvent
 * @typedef {PlayerEvent & PlayerEventTimerEventPartial} PlayerEventTimerEvent timer
 * @typedef {Object} PlayerEventTimerEventPartial
 * @property {Number} id
 */

/**
 * noppes.npcs.api.event.PlayerEvent.TossEvent
 * @typedef {PlayerEvent & PlayerEventTossEventPartial} PlayerEventTossEvent toss
 * @typedef {Object} PlayerEventTossEventPartial
 * @property {IItemStack} item
 */

/**
 * noppes.npcs.api.event.PlayerEvent.UpdateEvent
 * @typedef {PlayerEvent} PlayerEventUpdateEvent tick
 */
/**
 * noppes.npcs.api.event.ProjectileEvent.ImpactEvent
 * @typedef {ProjectileEvent & ProjectileEventImpactEventPartial} ProjectileEventImpactEvent projectileImpact
 * @typedef {Object} ProjectileEventImpactEventPartial
 * @property {Number} type
 * @property {Object} target
 */
/**
 * noppes.npcs.api.event.ProjectileEvent.UpdateEvent
 * @typedef {ProjectileEvent} ProjectileEventUpdateEvent projectileTick
 */
/**
 * noppes.npcs.api.event.QuestEvent.QuestCompletedEvent
 * @typedef {QuestEvent} QuestEventQuestCompletedEvent
 */
/**
 * noppes.npcs.api.event.QuestEvent.QuestStartEvent
 * @typedef {QuestEvent} QuestEevntQuestStartEvent
 */
/**
 * noppes.npcs.api.event.QuestEvent.QuestTurnedInEvent
 * @typedef {QuestEvent & QuestEventQuestTurnedInEventPartial} QuestEventQuestTurnedInEvent
 * @typedef {Object} QuestEventQuestTurnedInEventPartial
 * @property {Number} expReward
 * @property {IItemStack[]} itemRewards
 */
/**
 * noppes.npcs.api.event.RoleEvent.BankUnlockedEvent
 * @typedef {RoleEvent & RoleEventBankUnlockedEventPartial} RoleEventBankUnlockedEvent
 * @typedef {Object} RoleEventBankUnlockedEventPartial
 * @property {Number} slot
 */
/**
 * noppes.npcs.api.event.RoleEvent.BankUpgradedEvent
 * @typedef {RoleEvent & RoleEventBankUpgradedEventPartial} RoleEventBankUpgradedEvent
 * @typedef {Object} RoleEventBankUpgradedEventPartial
 * @property {Number} slot
 */
/**
 * noppes.npcs.api.event.RoleEvent.FollowerFinishedEvent
 * @typedef {RoleEvent} RoleEventFollowerFinishedEvent
 */
/**
 * noppes.npcs.api.event.RoleEvent.FollowerHireEvent
 * @typedef {RoleEvent & RoleEventFollowerHireEventPartial} RoleEventFollowerHireEvent
 * @typedef {Object} RoleEventFollowerHireEventPartial
 * @property {Number} days
 */
/**
 * noppes.npcs.api.event.RoleEvent.MailmanEvent
 * @typedef {RoleEvent & RoleEventMailmanEventPartial} RoleEventMailmanEvent
 * @typedef {Object} RoleEventMailmanEventPartial
 * @property {IPlayerMail} mail
 */
/**
 * noppes.npcs.api.event.RoleEvent.TradeFailedEvent
 * @typedef {RoleEvent & RoleEventTradeFailedEventPartial} RoleEventTradeFailedEvent
 * @typedef {Object} RoleEventTradeFailedEventPartial
 * @property {IItemStack} sold
 * @property {IItemStack} currency1
 * @property {IItemStack} currency2
 * @property {IItemStack} receiving
 */
/**
 * noppes.npcs.api.event.RoleEvent.TraderEvent
 * @typedef {RoleEvent & RoleEventTraderEventPartial} RoleEventTraderEvent
 * @typedef {Object} RoleEventTraderEventPartial
 * @property {IItemStack} sold
 * @property {IItemStack} currency1
 * @property {IItemStack} currency2
 */
/**
 * noppes.npcs.api.event.RoleEvent.TransporterUnlockedEvent
 * @typedef {RoleEvent} RoleEventTransporterUnlockedEvent
 */
/**
 * noppes.npcs.api.event.RoleEvent.TransporterUseEvent
 * @typedef {RoleEvent & RoleEventTransporterUseEventPartial} RoleEventTransporterUseEvent
 * @typedef {Object} RoleEventTransporterUseEventPartial
 * @property {IRoleTransporterITransportLocation} location
 */
/**
 * noppes.npcs.api.event.WorldEvent.ScriptTriggerEvent
 * @typedef {WorldEvent & WorldEventScriptTriggerEventPartial} WorldEventScriptTriggerEvent trigger
 * @typedef {Object} WorldEventScriptTriggerEventPartial
 * @property {...Object} arguments
 * @property {IPos} pos
 * @property {IEntity} entity
 * @property {Number} id
 */

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

/**
 * noppes.npcs.api.block.IBlock
 * @typedef {Object} IBlock
 * @property {function():Number} getX
 * @property {function():Number} getY
 * @property {function():Number} getZ
 * @property {function():IPos} getPos
 * @property {function(String):Object} getProperty(name)
 * @property {function(String, Object):void} setProperty(name, val)
 * @property {function():String[]} getProperties
 * @property {function():String} getName
 * @property {function():void} remove
 * @property {function():Boolean} isRemoved
 * @property {function():Boolean} isAir
 * @property {function(String):IBlock} setBlock(name)
 * @property {function(IBlock):IBlock} setBlock(block)
 * @property {function():Boolean} hasTileEntity
 * @property {function():Boolean} isContainer
 * @property {function():IContainer} getContainer
 * @property {function():IData} getTempdata
 * @property {function():IData} getStoreddata
 * @property {function():IWorld} getWorld
 * @property {function():INbt} getBlockEntityNBT
 * @property {function(INbt):void} setTileEntityNBT(nbt)
 * @property {function()} getMCTileEntity
 * @property {function()} getMCBlock
 * @property {function(Number, Number):void} blockEvent(type, data)
 * @property {function():String} getDisplayName
 * @property {function()} getMCBlockState
 * @property {function(Number):void} interact(side)
 */

/**
 * noppes.npcs.api.handler.ICloneHandler
 * @typedef {Object} ICloneHandler
 * @property {function(Number, Number, Number, Number, String, IWorld):IEntity} spawn(x, y, z, tab, name, world)
 * @property {function(Number, String, IWorld):IEntity} get(tab, name, world)
 * @property {function(Number, String, IEntity):void} set(tab, name, entity)
 * @property {function(Number, String):void} remove(tab, name)
 */

/**
 * noppes.npcs.api.IContainer
 * @typedef {Object} IContainer
 * @property {function():Number} getSize
 * @property {function(Number):IItemStack} getSlot(slot)
 * @property {function(Number, IItemStack):void} setSlot(slot, item)
 * @property {function()} getMCInventory
 * @property {function()} getMCContainer
 * @property {function(IItemStack, Boolean, Boolean):Number} count(item, ignoreDamage, ignoreNBt)
 * @property {function():IItemStack[]} getItems
 */

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

/**
 * noppes.npcs.api.gui.ICustomGuiComponent
 * @typedef {Object} ICustomGuiComponent
 * @property {function():Number} getID
 * @property {function(Number):ICustomGuiComponent} setID(id)
 * @property {function():Number} getPosX
 * @property {function():Number} getPosY
 * @property {function(Number, Number):ICustomGuiComponent} setPos(x, y)
 * @property {function():Boolean} hasHoverText
 * @property {function():String[]} getHoverText
 * @property {function(String):ICustomGuiComponent} setHoverText(text)
 * @property {function(String[]):ICustomGuiComponent} setHoverText(text)
 */

/**
 * noppes.npcs.api.IDamageSource
 * @typedef {Object} IDamageSource
 * @property {function():String} getType
 * @property {function():Boolean} isUnblockable
 * @property {function():Boolean} isProjectile
 * @property {function():IEntity} getTrueSource
 * @property {function():IEntity} getImmediateSource
 * @property {function()} getMCDamageSource
 */

/**
 * noppes.npcs.api.entity.data.IData
 * @typedef {Object} IData
 * @property {function(String, Object):void} put(key, value)
 * @property {function(String):Object} get(key)
 * @property {function(String):void} remove(key)
 * @property {function(String):Boolean} has(key)
 * @property {function():String[]} getKeys
 * @property {function():void} clear
 */

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

/**
 * noppes.npcs.api.handler.data.IDialogCategory
 * @typedef {Object} IDialogCategory
 * @property {function():IDialog[]} dialogs
 * @property {function():String} getName
 * @property {function():IDialog} create
 */

/**
 * noppes.npcs.api.handler.IDialogHandler
 * @typedef {Object} IDialogHandler
 * @property {function():IDialogCategory[]} categories
 * @property {function(Number):IDialog} get(id)
 */

/**
 * noppes.npcs.api.handler.data.IDialogOption
 * @typedef {Object} IDialogOption
 * @property {function():Number} getSlot
 * @property {function():String} getName
 * @property {function():Number} getType
 */

/**
 * noppes.npcs.api.IDimension
 * @typedef {Object} IDimension
 * @property {function():String} getId
 */

/**
 * noppes.npcs.api.entity.IEntity
 * @typedef {Object} IEntity
 * @property {function():Number} getX
 * @property {function(Number):void} setX(x)
 * @property {function():Number} getY
 * @property {function(Number):void} setY(y)
 * @property {function():Number} getZ
 * @property {function(Number):void} setZ(z)
 * @property {function():Number} getBlockX
 * @property {function():Number} getBlockY
 * @property {function():Number} getBlockZ
 * @property {function():IPos} getPos
 * @property {function(IPos):void} setPos(pos)
 * @property {function(Number, Number, Number)} setPosition(x, y, z)
 * @property {function(Number):void} setRotation(rotation)
 * @property {function():Number} getRotation
 * @property {function():Number} getHeight
 * @property {function():Number} getEyeHeight
 * @property {function():Number} getWidth
 * @property {function(Number):void} setPitch(pitch)
 * @property {function():Number} getPitch
 * @property {function():IEntity} getMount
 * @property {function(IEntity):void} setMount(entity)
 * @property {function():IEntity[]} getRiders
 * @property {function():IEntity[]} getAllRiders
 * @property {function(IEntity):void} addRider(entity)
 * @property {function():void} clearRiders
 * @property {function(Number, Number):void} knockback(power, direction)
 * @property {function():Boolean} isSneaking
 * @property {function():Boolean} isSprinting
 * @property {function(IItemStack):IEntityItem} dropItem(item)
 * @property {function():Boolean} inWater
 * @property {function():Boolean} inFire
 * @property {function():Boolean} inLava
 * @property {function():IData} getTempdata
 * @property {function():IData} getStoreddata
 * @property {function():INbt} getNbt
 * @property {function():Boolean} isAlive
 * @property {function():Number} getAge
 * @property {function():void} despawn
 * @property {function():void} spawn
 * @property {function():void} kill
 * @property {function():Boolean} isBurning
 * @property {function(Number):void} setBurning(seconds)
 * @property {function():void} extinguish
 * @property {function():IWorld} getWorld
 * @property {function():String} getTypeName
 * @property {function():Number} getType
 * @property {function(Number):Boolean} typeOf(type)
 * @property {function()} getMCEntity
 * @property {function():String} getUUID
 * @property {function():String} generateNewUUID
 * @property {function(Number, String)} storeAsClone(tab, name)
 * @property {function():INbt} getEntityNbt
 * @property {function(INbt):void} setEntityNbt(nbt)
 * @property {function(Number, Boolean, Boolean):IRayTrace} rayTraceBlock(distance, stopOnLiquid, ignoreBlockWithoutBoundingBox)
 * @property {function(Number, Boolean, Boolean):IEntity[]} rayTraceEntities(distance, stopOnLiquid, ignoreBlockWithoutBoundingBox)
 * @property {function():String[]} getTags
 * @property {function(String):void} addTag(tag)
 * @property {function(String):Boolean} hasTag(tag)
 * @property {function(String):void} removeTag(tag)
 * @property {function(Number):void} playAnimation(type)
 * @property {function(Number):void} damage(amount)
 * @property {function():Number} getMotionX
 * @property {function():Number} getMotionY
 * @property {function():Number} getMotionZ
 * @property {function(Number):void} setMotionX(motion)
 * @property {function(Number):void} setMotionY(motion)
 * @property {function(Number):void} setMotionZ(motion)
 * @property {function():String} getName
 * @property {function(String):void} setName(name)
 * @property {function():Boolean} hasCustomName
 * @property {function():String} getEntityName
 */

/**
 * noppes.npcs.api.handler.data.IFaction
 * @typedef {Object} IFaction
 * @property {function():Number} getId
 * @property {function():String} getName
 * @property {function():Number} getDefaultPoints
 * @property {function(Number):void} setDefaultPoints(points)
 * @property {function():Number} getColor
 * @property {function(IPlayer):Number} playerStatus(player)
 * @property {function(ICustomNpc):Boolean} hostileToNpc(npc)
 * @property {function(Number):Boolean} hostileToFaction(factionId)
 * @property {function():Number[]} getHostileList
 * @property {function(Number):void} addHostile(id)
 * @property {function(Number):void} removeHostile(id)
 * @property {function(Number):Boolean} hasHostile(id)
 * @property {function():Boolean} getIsHidden
 * @property {function(Boolean):void} setIsHidden(bo)
 * @property {function():Boolean} getAttackedByMobs
 * @property {function(Boolean):void} setAttackedByMobs(bo)
 * @property {function():void} save
 */

/**
 * noppes.npcs.api.handler.IFactionHandler
 * @typedef {Object} IFactionHandler
 * @property {function():IFaction[]} list
 * @property {function(Number):IFaction} delete(id)
 * @property {function(String, Number):IFaction} create(name, color)
 * @property {function(Number):IFaction} get(id)
 */

/**
 * noppes.npcs.api.item.IItemStack
 * @typedef {Object} IItemStack
 * @property {function():Number} getStackSize
 * @property {function(Number):void} setStackSize(size)
 * @property {function():Number} getMaxStackSize
 * @property {function():Boolean} isDamageable
 * @property {function():Number} getDamage
 * @property {function(Number):void} setDamage(value)
 * @property {function():Number} getMaxDamage
 * @property {function():Number} getAttackDamage
 * @property {function(Number, IMob):void} damageItem(damage, living)
 * @property {function(String, Number):void} addEnchantment(id, strength)
 * @property {function():Boolean} isEnchanted
 * @property {function(String):Boolean} hasEnchant(id)
 * @property {function(String):Boolean} removeEnchant(id)
 * @property {function():Boolean} isBlock
 * @property {function():Boolean} isWearable
 * @property {function():Boolean} hasCustomName
 * @property {function(String):void} setCustomName(name)
 * @property {function():String} getDisplayName
 * @property {function():String} getItemName
 * @property {function():String} getName
 * @property {function():Boolean} isBook
 * @property {function():IItemStack} copy
 * @property {function()} getMCItemStack
 * @property {function():INbt} getNbt
 * @property {function():Boolean} hasNbt
 * @property {function():void} removeNbt
 * @property {function():INbt} getItemNbt
 * @property {function():Boolean} isEmpty
 * @property {function():Number} getType
 * @property {function():String[]} getLore
 * @property {function(String[]):void} setLore(lore)
 * @property {function(String, Number, Number):void} setAttribute(name, value, slot)
 * @property {function(String):Number} getAttribute(name)
 * @property {function(String):Boolean} hasAttribute(name)
 * @property {function():IData} getTempdata
 * @property {function():IData} getStoreddata
 * @property {function():Number} getFoodLevel
 * @property {function(IItemStack, Boolean):Boolean} compare(item, ignoreNBT)
 */

/**
 * noppes.npcs.api.entity.data.role.IJobBard
 * @typedef {Object} IJobBard
 * @property {function():String} getSong
 * @property {function(String):void} setSong(song)
 */

/**
 * noppes.npcs.api.entity.data.role.IJobBuilder
 * @typedef {Object} IJobBuilder
 * @property {function():Boolean} isBuilding
 */

/**
 * noppes.npcs.api.entity.data.role.IJobFarmer
 * @typedef {Object} IJobFarmer
 * @property {function():Boolean} isPlucking
 */

/**
 * noppes.npcs.api.entity.data.role.IJobPuppet.IJobPuppetPart
 * @typedef {Object} IJobPuppetIJobPuppetPart
 * @property {function():Number} getRotationX
 * @property {function():Number} getRotationY
 * @property {function():Number} getRotationZ
 * @property {function(Number, Number, Number):void} setRotation(x, y, z)
 */

/**
 * noppes.npcs.api.entity.data.role.IJobSpawner
 * @typedef {Object} IJobSpawner
 * @property {function(Number):IEntityLiving} spawnEntity(i)
 * @property {function():void} removeAllSpawned
 */

/**
 * noppes.npcs.api.entity.data.ILine
 * @typedef {Object} ILine
 * @property {function():String} getText
 * @property {function(String):void} setText(text)
 * @property {function():String} getSound
 * @property {function(String):void} setSound(sound)
 * @property {function():Boolean} getShowText
 * @property {function(Boolean):void} setShowText(show)
 */

/**
 * noppes.npcs.api.entity.data.IMark
 * @typedef {Object} IMark
 * @property {function():IAvailability} getAvailability
 * @property {function():Number} getColor
 * @property {function(Number):void} setColor(color)
 * @property {function():Number} getType
 * @property {function(Number):void} setType(type)
 * @property {function():void} update
 */

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

/**
 * noppes.npcs.api.entity.data.INPCAdvanced
 * @typedef {Object} INPCAdvanced
 * @property {function(Number, Number, String, String):void} setLine(type, slot, text, sound)
 * @property {function(Number, Number):String} getLine(type, slot)
 * @property {function(Number):Number} getLineCount(type)
 * @property {function(Number):String} getSound(type)
 * @property {function(Number, String):void} setSound(type, sound)
 */

/**
 * noppes.npcs.api.entity.data.INPCAi
 * @typedef {Object} INPCAi
 * @property {function():Number} getAnimation
 * @property {function(Number):void} setAnimation(type)
 * @property {function():Number} getCurrentAnimation
 * @property {function(Boolean):void} setReturnsHome(bo)
 * @property {function():Boolean} getReturnsHome
 * @property {function():Number} getRetaliateType
 * @property {function(Number):void} setRetaliateType(type)
 * @property {function():Number} getMovingType
 * @property {function(Number):void} setMovingType(type)
 * @property {function():Number} getNavigationType
 * @property {function(Number):void} setNavigationType(type)
 * @property {function():Number} getStandingType
 * @property {function(Number):void} setStandingType(type)
 * @property {function():Boolean} getAttackInvisible
 * @property {function(Boolean):void} setAttackInvisible(attack)
 * @property {function():Number} getWanderingRange
 * @property {function(Number):void} setWanderingRange(range)
 * @property {function():Boolean} getInteractWithNPCs
 * @property {function(Boolean):void} setInteractWithNPCs(interact)
 * @property {function():Boolean} getStopOnInteract
 * @property {function(Boolean):void} setStopOnInteract(stopOnInteract)
 * @property {function():Number} getWalkingSpeed
 * @property {function(Number):void} setWalkingSpeed(speed)
 * @property {function():Number} getMovingPathType
 * @property {function():Boolean} getMovingPathPauses
 * @property {function(Number, Boolean):void} setMovingPathType(type, pauses)
 * @property {function():Number} getDoorInteract
 * @property {function(Number):void} setDoorInteract(type)
 * @property {function():Boolean} getCanSwim
 * @property {function(Boolean):void} setCanSwim(canSwim)
 * @property {function():Number} getSheltersFrom
 * @property {function(Number):void} setSheltersFrom(type)
 * @property {function():Boolean} getAttackLOS
 * @property {function(Boolean):void} setAttackLOS(enabled)
 * @property {function():Boolean} getAvoidsWater
 * @property {function(Boolean):void} setAvoidsWater(enabled)
 * @property {function():Boolean} getLeapAtTarget
 * @property {function(Boolean):void} setLeapAtTarget(leap)
 */

/**
 * noppes.npcs.api.entity.data.INPCDisplay
 * @typedef {Object} INPCDisplay
 * @property {function():String} getName
 * @property {function(String):void} setName(name)
 * @property {function():String} getTitle
 * @property {function(String):void} setTitle(title)
 * @property {function():String} getSkinUrl
 * @property {function(String):void} setSkinUrl(url)
 * @property {function():String} getSkinPlayer
 * @property {function(String):void} setSkinPlayer(name)
 * @property {function():String} getSkinTexture
 * @property {function(String):void} setSkinTexture(texture)
 * @property {function():Boolean} getHasLivingAnimation
 * @property {function(Boolean):void} setHasLivingAnimation(enabled)
 * @property {function():Number} getVisible
 * @property {function(Number):void} setVisible(type)
 * @property {function(IPlayer):Boolean} isVisibleTo(player)
 * @property {function():Number} getBossbar
 * @property {function(Number):void} setBossbar(type)
 * @property {function():Number} getSize
 * @property {function(Number):void} setSize(size)
 * @property {function():Number} getTint
 * @property {function(Number):void} setTint(color)
 * @property {function():Number} getShowName
 * @property {function(Number):void} setShowName(type)
 * @property {function(String):void} setCapeTexture(texture)
 * @property {function():String} getCapeTexture
 * @property {function(String):void} setOverlayTexture(texture)
 * @property {function():String} getOverlayTexture
 * @property {function(Number, Number, Number, Number):void} setModelScale(part, x, y, z)
 * @property {function(Number):Number[]} getModelScale(part)
 * @property {function():Number} getBossColor
 * @property {function(Number):void} setBossColor(color)
 * @property {function(String):void} setModel(model)
 * @property {function():String} getModel
 * @property {function(Number):void} setHitboxState(state)
 * @property {function():Number} getHitboxState
 */

/**
 * noppes.npcs.api.entity.data.INPCInventory
 * @typedef {Object} INPCInventory
 * @property {function():IItemStack} getRightHand
 * @property {function(IItemStack):void} setRightHand(item)
 * @property {function():IItemStack} getLeftHand
 * @property {function(IItemStack):void} setLeftHand(item)
 * @property {function():IItemStack} getProjectile
 * @property {function(IItemStack):void} setProjectile(item)
 * @property {function(Number):IItemStack} getArmor(slot)
 * @property {function(Number, IItemStack):void} setArmor(slot, item)
 * @property {function(Number, IItemStack, Number):void} setDropItem(slot, item, chance)
 * @property {function(Number):IItemStack} getDropItem(slot)
 * @property {function():Number} getExpMin
 * @property {function():Number} getExpMax
 * @property {function():Number} getExpRNG
 * @property {function(Number, Number)} setExp(min, max)
 * @property {function():IItemStack[]} getItemsRNG
 */

/**
 * noppes.npcs.api.entity.data.INPCJob
 * @typedef {Object} INPCJob
 * @property {function():Number} getType
 */

/**
 * noppes.npcs.api.entity.data.INPCMelee
 * @typedef {Object} INPCMelee
 * @property {function():Number} getStrength
 * @property {function(Number):void} setStrength(strength)
 * @property {function():Number} getDelay
 * @property {function(Number):void} setDelay(speed)
 * @property {function():Number} getRange
 * @property {function(Number):void} setRange(range)
 * @property {function():void} getKnockback
 * @property {function(Number):void} setKnockback(knockback)
 * @property {function():Number} getEffectType
 * @property {function():Number} getEffectTime
 * @property {function():Number} getEffectStrength
 * @property {function(Number, Number, Number):void} setEffect(type, strength, time)
 */

/**
 * noppes.npcs.api.entity.data.INPCRanged
 * @typedef {Object} INPCRanged
 * @property {function():Number} getStrength
 * @property {function(Number):void} setStrength(strength)
 * @property {function():Number} getSpeed
 * @property {function(Number):void} setSpeed(speed)
 * @property {function():Number} getBurst
 * @property {function(Number):void} setBurst(count)
 * @property {function():Number} getBurstDelay
 * @property {function(Number):void} setBurstDelay(delay)
 * @property {function():Number} getKnockback
 * @property {function(Number):void} setKnockback(punch)
 * @property {function():Number} getSize
 * @property {function(Number):void} setSize(size)
 * @property {function():Boolean} getRender3D
 * @property {function(Boolean):void} setRender3D(render3d)
 * @property {function():Boolean} getSpins
 * @property {function(Boolean):void} setSpins(spins)
 * @property {function():Boolean} getSticks
 * @property {function(Boolean):void} setSticks(sticks)
 * @property {function():Boolean} getHasGravity
 * @property {function(Boolean):void} setHasGravity(hasGravity)
 * @property {function():Boolean} getAccelerate
 * @property {function(Boolean):void} setAccelerate(accelerate)
 * @property {function():Number} getExplodeSize
 * @property {function(Number):void} setExplodeSize(size)
 * @property {function():Number} getEffectType
 * @property {function():Number} getEffectTime
 * @property {function():Number} getEffectStrength
 * @property {function(Number, Number, Number):void} setEffect(type, strength, time)
 * @property {function():Boolean} getGlows
 * @property {function(Boolean):void} setGlows(glows)
 * @property {function():Number} getParticle
 * @property {function(Number):void} setParticle(type)
 * @property {function(Number):String} getSound(type)
 * @property {function(Number, String):void} setSound(type, sound)
 * @property {function():Number} getShotCount
 * @property {function(Number):void} setShotCount(count)
 * @property {function():Boolean} getHasAimAnimation
 * @property {function(Boolean):void} setHasAimAnimation(aim)
 * @property {function():Number} getAccuracy
 * @property {function(Number):void} setAccuracy(accuracy)
 * @property {function():Number} getRange
 * @property {function(Number):void} setRange(range)
 * @property {function():Number} getDelayMin
 * @property {function():Number} getDelayMax
 * @property {function():Number} getDelayRNG
 * @property {function(Number, Number):void} setDelay(min, max)
 * @property {function():Number} getFireType
 * @property {function(Number):void} setFireType(type)
 * @property {function():Number} getMeleeRange
 * @property {function(Number):void} setMeleeRange(range)
 */

/**
 * noppes.npcs.api.entity.data.INPCRole
 * @typedef {Object} INPCRole
 * @property {function():Number} getType
 */

/**
 * noppes.npcs.api.entity.data.INPCStats
 * @typedef {Object} INPCStats
 * @property {function():Number} getMaxHealth
 * @property {function(Number):void} setMaxHealth(maxHealth)
 * @property {function():Number} getResistance
 * @property {function(Number, Number):void} setResistance(type, value)
 * @property {function():Number} getCombatRegen
 * @property {function(Number):void} setCombatRegen(regen)
 * @property {function():Number} getHealthRegen
 * @property {function(Number):void} setHealthRegen(regen)
 * @property {function():INPCMelee} getMelee
 * @property {function():INPCRanged} getRanged
 * @property {function(Number):Boolean} getImmune(type)
 * @property {function(Number, Boolean):void} setImmune(type, bo)
 * @property {function(Number):void} setCreatureType(type)
 * @property {function():Number} getCreatureType
 * @property {function():Number} getRespawnType
 * @property {function(Number):void} setRespawnType(type)
 * @property {function():Number} getRespawnTime
 * @property {function(Number):void} setRespawnTime(seconds)
 * @property {function():Boolean} getHideDeadBody
 * @property {function(Boolean):void} setHideDeadBody(hide)
 * @property {function():Number} getAggroRange
 * @property {function(Number):void} setAggroRange(range)
 */

/**
 * noppes.npcs.api.entity.data.IPixelmonPlayerData
 * @typedef {Object} IPixelmonPlayerData
 * @property {function():Object} getParty
 * @property {function():Object} getPC
 */

/**
 * noppes.npcs.api.entity.data.IPlayerMail
 * @typedef {Object} IPlayerMail
 * @property {function():String} getSender
 * @property {function(String):void} setSender(sender)
 * @property {function():String} getSubject
 * @property {function(String):void} setSubject(subject)
 * @property {function():String[]} getText
 * @property {function(String[]):void} setText(text)
 * @property {function():IQuest} getQuest
 * @property {function(Number):void} setQuest(id)
 * @property {function():IContainer} getContainer
 */

/**
 * noppes.npcs.api.IPos
 * @typedef {Object} IPos
 * @property {function():Number} getX
 * @property {function():Number} getY
 * @property {function():Number} getZ
 * @property {function():IPos} up
 * @property {function(Number):IPos} up(n)
 * @property {function():IPos} down
 * @property {function(Number):IPos} down(n)
 * @property {function():IPos} north
 * @property {function(Number):IPos} north(n)
 * @property {function():IPos} east
 * @property {function(Number):IPos} east(n)
 * @property {function():IPos} south
 * @property {function(Number):IPos} south(n)
 * @property {function():IPos} west
 * @property {function(Number):IPos} west(n)
 * @property {function(Number, Number, Number):IPos} add(x, y, z)
 * @property {function(IPos):IPos} add(pos)
 * @property {function(Number, Number, Number):IPos} subtract(x, y, z)
 * @property {function(IPos):IPos} subtract(pos)
 * @property {function():Number[]} normalize
 * @property {function():IPos} getMCBlockPos
 * @property {function(Number):IPos} offset(direction)
 * @property {function(Number, Number):IPos} offset(direction, n)
 * @property {function(IPos):Number} distanceTo(pos)
 */

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

/**
 * noppes.npcs.api.handler.data.IQuestCategory
 * @typedef {Object} IQuestCategory
 * @property {function():IQuest[]} quests
 * @property {function():String} getName
 * @property {function():IQuest} create
 */

/**
 * noppes.npcs.api.handler.IQuestHandler
 * @typedef {Object} IQuestHandler
 * @property {function():IQuestCategory[]} categories
 * @property {function(Number):IQuest} get(id)
 */

/**
 * noppes.npcs.api.handler.data.IQuestObjective
 * @typedef {Object} IQuestObjective
 * @property {function():Number} getProgress
 * @property {function(Number):void} setProgress(progress)
 * @property {function():Number} getMaxProgress
 * @property {function():Boolean} isCompleted
 * @property {function():String} getText
 * @property {function()} getMCText
 */

/**
 * noppes.npcs.api.IRayTrace
 * @typedef {Object} IRayTrace
 * @property {function():IPos} getPos
 * @property {function():IBlock} getBlock
 * @property {function():Number} getSideHit
 */

/**
 * noppes.npcs.api.handler.data.IRecipe
 * @typedef {Object} IRecipe
 * @property {function():String} getName
 * @property {function():Boolean} isGlobal
 * @property {function(Boolean):void} setIsGlobal(bo)
 * @property {function():Boolean} getIgnoreNBT
 * @property {function(Boolean):void} setIgnoreNBT(bo)
 * @property {function():Boolean} getIgnoreDamage
 * @property {function(Boolean):void} setIgnoreDamage(bo)
 * @property {function():Number} getWidth
 * @property {function():Number} getHeight
 * @property {function():net.minecraft.item.ItemStack} getResult
 * @property {function():net.minecraft.item.ItemStack[]} getRecipe
 * @property {function(Boolean):void} saves(bo)
 * @property {function():Boolean} saves
 * @property {function():void} save
 * @property {function():void} delete
 */

/**
 * noppes.npcs.api.handler.IRecipeHandler
 * @typedef {Object} IRecipeHandler
 * @property {function():IRecipe[]} getGlobalList
 * @property {function():IRecipe[]} getCarpentryList
 * @property {function(String, Boolean, net.minecraft.item.ItemStack, Object...):IRecipe} addRecipe(name, global, result, objects)
 * @property {function(String, Boolean, net.minecraft.item.ItemStack, Number, Number, net.minecraft.item.ItemStack...):IRecipe} addRecipe(name, global, result, width, height, recipe)
 * @property {function(Number):IRecipe} delete(id)
 */

/**
 * noppes.npcs.api.entity.data.role.IRoleTransporter.ITransportLocation
 * @typedef {Object} IRoleTransporterITransportLocation
 * @property {function():Number} getId
 * @property {function():String} getDimension
 * @property {function():Number} getX
 * @property {function():Number} getY
 * @property {function():Number} getZ
 * @property {function():String} getName
 * @property {function():Number} getType
 */

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

/**
 * noppes.npcs.api.IScoreboardScore
 * @typedef {Object} IScoreboardScore
 * @property {function():Number} getValue
 * @property {function(Number):void} setValue(val)
 * @property {function():String} getPlayerName
 */

/**
 * noppes.npcs.api.IScoreboardTeam
 * @typedef {Object} IScoreboardTeam
 * @property {function():String} getName
 * @property {function():String} getDisplayName
 * @property {function(String):void} setDisplayName(name)
 * @property {function(String):void} addPlayer(player)
 * @property {function(String):Boolean} hasPlayer(player)
 * @property {function(String):void} removePlayer(player)
 * @property {function():String[]} getPlayers
 * @property {function():void} clearPlayers
 * @property {function():Boolean} getFriendlyFire
 * @property {function(Boolean):void} setFriendlyFire(bo)
 * @property {function(String):void} setColor(color)
 * @property {function():String} getColor
 * @property {function(Boolean):void} setSeeInvisibleTeamPlayers(bo)
 * @property {function():Boolean} getSeeInvisibleTeamPlayers
 */

/**
 * noppes.npcs.api.block.ITextPlane
 * @typedef {Object} ITextPlane
 * @property {function():String} getText
 * @property {function(String):void} setText(text)
 * @property {function():Number} getRotationX
 * @property {function():Number} getRotationY
 * @property {function():Number} getRotationZ
 * @property {function(Number):void} setRotationX(x)
 * @property {function(Number):void} setRotationY(y)
 * @property {function(Number):void} setRotationZ(z)
 * @property {function():Number} getOffsetX
 * @property {function():Number} getOffsetY
 * @property {function():Number} getOffsetZ
 * @property {function(Number):void} setOffsetX(x)
 * @property {function(Number):void} setOffsetY(y)
 * @property {function(Number):void} setOffsetZ(z)
 * @property {function():Number} getScale
 * @property {function(Number):void} setScale(scale)
 */

/**
 * noppes.npcs.api.ITimers
 * @typedef {Object} ITimers
 * @property {function(Number, Number, Boolean):void} start(id, ticks, repeat)
 * @property {function(Number, Number, Boolean):void} forceStart(id, ticks, repeat)
 * @property {function(Number):Boolean} has(id)
 * @property {function(Number):Boolean} stop(id)
 * @property {function(Number):void} reset(id)
 * @property {function():void} clear
 */

/**
 * noppes.npcs.api.IWorld
 * @typedef {Object} IWorld
 * @property {function(IPos, Number, Number):IEntity[]} getNearbyEntities(pos, range, type)
 * @property {function(IPos, Number, Number)} getClosestEntity(pos, range, type)
 * @property {function(Number):IEntity[]} getAllEntities(type)
 * @property {function():Number} getTime
 * @property {function(Number):void} setTime(time)
 * @property {function():Number} getTotalTime
 * @property {function(IPos):IBlock} getBlock(pos)
 * @property {function(IPos, String)} setBlock(pos, name)
 * @property {function(IPos):void} removeBlock(pos)
 * @property {function(Number, Number, Number):Number} getLightValue(x, y, z)
 * @property {function(String):IPlayer} getPlayer(name)
 * @property {function():Boolean} isDay
 * @property {function():Boolean} isRaining
 * @property {function():IDimension} getDimension
 * @property {function(Boolean):void} setRaining(bo)
 * @property {function(Number, Number, Number):void} thunderStrike(x, y, z)
 * @property {function(IPos, String, Number, Number):void} playSoundAt(pos, sound, volume, pitch)
 * @property {function(String, Number, Number, Number, Number, Number, Number, Number, Number):void} spawnParticle(particle, x, y, z, dx, dy, dz, speed, count)
 * @property {function(String):void} broadcast(message)
 * @property {function():IScoreboard} getScoreboard
 * @property {function():IData} getTempdata
 * @property {function():IData} getStoreddata
 * @property {function(String, Number):IItemStack} createItem(name, size)
 * @property {function(INbt)} createItemFromNbt(nbt)
 * @property {function(Number, Number, Number, Number, Boolean, Boolean):void} explode(x, y, z, range, fire, grief)
 * @property {function():IPlayer[]} getAllPlayers
 * @property {function(Number, Number):String} getBiomeName(x, z)
 * @property {function(IEntity):void} spawnEntity(entity)
 * @property {function(Number, Number, Number, Number, String):IEntity} spawnClone(x, y, z, tab, name) Deprecated
 * @property {function(Number, String):IEntity} getClone(tab, name)
 * @property {function(Number, Number, Number)} getRedstonePower(x, y, z)
 * @property {function()} getMCWorld
 * @property {function()} getMCBlockPos
 * @property {function(String):IEntity} getEntity(uuid)
 * @property {function(INbt):IEntity} createEntityFromNBT(nbt)
 * @property {function(String):IEntity} createEntity(id)
 * @property {function():IBlock} getSpawnPoint
 * @property {function(IBlock):void} setSpawnPoint(block)
 * @property {function():String} getName
 * @property {function(Number, ...Object):void} trigger(id, ...arguments)
 */

/**
 * noppes.npcs.api.block.IBlockFluidContainer
 * @typedef {IBlock & IBlockFluidContainerPartial} IBlockFluidContainer
 * @typedef {Object} IBlockFluidContainerPartial
 * @property {function():Number} getFluidPercentage
 * @property {function():Number} getFuildDensity
 * @property {function():Number} getFuildTemperature
 * @property {function():String} getFluidName
 */

/**
 * noppes.npcs.api.block.IBlockScripted
 * @typedef {IBlock & IBlockScriptedPartial} IBlockScripted
 * @typedef {Object} IBlockScriptedPartial
 * @property {function(IItemStack):void} setModel(item)
 * @property {function(String):void} setModel(name)
 * @property {function():IItemStack} getModel
 * @property {function():ITimers} getTimers
 * @property {function(Number):void} setRedstonePower(strength)
 * @property {function():Number} getRedstonePower
 * @property {function(Boolean):void} setIsLadder(enabled)
 * @property {function():Boolean} getIsLadder
 * @property {function(Number):void} setLight(value)
 * @property {function():Number} getLight
 * @property {function(Number, Number, Number):void} setScale(x, y, z)
 * @property {function():Number} getScaleX
 * @property {function():Number} getScaleY
 * @property {function():Number} getScaleZ
 * @property {function(Number, Number, Number):void} setRotation(x, y, z)
 * @property {function():Number} getRotationX
 * @property {function():Number} getRotationY
 * @property {function():Number} getRotationZ
 * @property {function(String):String} executeCommand(command)
 * @property {function():Boolean} getIsPassible
 * @property {function(Boolean):void} setIsPassible(bo)
 * @property {function():Number} getHardness
 * @property {function(Number):void} setHardness(hardness)
 * @property {function():Number} getResistance
 * @property {function(Number):void} setResistance(resistance)
 * @property {function():ITextPlane} getTextPlane
 * @property {function():ITextPlane} getTextPlane2
 * @property {function():ITextPlane} getTextPlane3
 * @property {function():ITextPlane} getTextPlane4
 * @property {function():ITextPlane} getTextPlane5
 * @property {function():ITextPlane} getTextPlane6
 * @property {function(Number, ...Object):void} trigger(id, arguments)
 */

/**
 * noppes.npcs.api.block.IBlockScriptedDoor
 * @typedef {IBlock & IBlockScriptedDoorPartial} IBlockScriptedDoor
 * @typedef {Object} IBlockScriptedDoorPartial
 * @property {function():ITimers} getTimers
 * @property {function():Boolean} getOpen
 * @property {function(Boolean):void} setOpen(open)
 * @property {function(String):void} setBlockModel(name)
 * @property {function():String} getBlockModel
 * @property {function():Number} getHardness
 * @property {function(Number):void} setHardness(hardness)
 * @property {function():Number} getResistance
 * @property {function(Number):void} setResistance(resistance)
 */

/**
 * noppes.npcs.api.gui.IButton
 * @typedef {ICustomGuiComponent & IButtonPartial} IButton
 * @typedef {Object} IButtonPartial
 * @property {function():Number} getWidth
 * @property {function():Number} getHeight
 * @property {function(Number, Number):IButton} setSize(width, height)
 * @property {function():String} getLabel
 * @property {function(String):IButton} setLabel(label)
 * @property {function():String} getTexture
 * @property {function():Boolean} hasTexture
 * @property {function(String):IButton} setTexture(texture)
 * @property {function():Number} getTextureX
 * @property {function():Number} getTextureY
 * @property {function(Number, Number):IButton} setTextureOffset(textureX, textureY)
 * @property {function(Boolean):void} setEnabled(bo)
 * @property {function():Boolean} getEnabled
 */

/**
 * noppes.npcs.api.gui.IItemSlot
 * @typedef {ICustomGuiComponent & IItemSlotPartial} IItemSlot
 * @typedef {Object} IItemSlotPartial
 * @property {function():Boolean} hasStack
 * @property {function():IItemStack} getStack
 * @property {function(IItemStack):IItemSlot} setStack(itemStack)
 * @property {function()} getMCSlot
 */

/**
 * noppes.npcs.api.gui.ILabel
 * @typedef {ICustomGuiComponent & ILabelPartial} ILabel
 * @typedef {Object} ILabelPartial
 * @property {function():String} getText
 * @property {function(String):ILabel} setText(label)
 * @property {function():Number} getWidth
 * @property {function():Number} getHeight
 * @property {function(Number, Number):ILabel} setSize(width, height)
 * @property {function():Number} getColor
 * @property {function(Number)} setColor(color)
 * @property {function():Number} getScale
 * @property {function(Number):ILabel} setScale(scale)
 */

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

/**
 * noppes.npcs.api.gui.ITextField
 * @typedef {ICustomGuiComponent & ITextFieldPartial} ITextField
 * @typedef {Object} ITextFieldPartial
 * @property {function():Number} getWidth
 * @property {function():Number} getHeight
 * @property {function(Number, Number):ITextField} setSize(width, height)
 * @property {function():String} getText
 * @property {function(String):ITextField} setText(defaultText)
 * @property {function(Boolean):void} setEnabled(bo)
 * @property {function():Boolean} getEnabled
 */

/**
 * noppes.npcs.api.gui.ITexturedRect
 * @typedef {ICustomGuiComponent & ITexturedRectPartial} ITexturedRect
 * @typedef {Object} ITexturedRectPartial
 * @property {function():String} getTexture
 * @property {function(String):ITexturedRect} setTexture(texture)
 * @property {function():Number} getWidth
 * @property {function():Number} getHeight
 * @property {function(Number, Number):ITexturedRect} setSize(width, height)
 * @property {function():Number} getScale
 * @property {function(Number):ITexturedRect} setScale(scale)
 * @property {function():Number} getTextureX
 * @property {function():Number} getTextureY
 * @property {function(Number, Number):ITexturedRect} setTextureOffset(offsetX, offsetY)
 */

/**
 * noppes.npcs.api.gui.ITexturedButton
 * @typedef {IButton & ITexturedButtonPartial} ITexturedButton
 * @typedef {Object} ITexturedButtonPartial
 * @property {function():String} getTexture
 * @property {function(String):ITexturedButton} setTexture(texture)
 * @property {function():Number} getTextureX
 * @property {function():Number} getTextureY
 * @property {function(Number, Number):ITexturedButton} setTextureOffset(textureX, textureY)
 */

/**
 * noppes.npcs.api.gui.ITextArea
 * @typedef {ITextField & ITextAreaPartial} ITextArea
 * @typedef {Object} ITextAreaPartial
 * @property {function(Boolean):void} setCodeTheme(bo)
 * @property {function():Boolean} getCodeTheme
 */

/**
 * noppes.npcs.api.entity.IArrow
 * @typedef {IEntity} IArrow
 */
/**
 * noppes.npcs.api.entity.IEntityItem
 * @typedef {IEntity & IEntityItemPartial} IEntityItem
 * @typedef {Object} IEntityItemPartial
 * @property {function():String} getOwner
 * @property {function(String):void} setOwner(name)
 * @property {function():Number} getPickupDelay
 * @property {function(Number):void} setPickupDelay(delay)
 * @property {function():Number} getAge
 * @property {function(Number):void} setAge(age)
 * @property {function():Number} getLifeSpawn
 * @property {function(Number):void} setLifeSpawn(age)
 * @property {function():IItemStack} getItem
 * @property {function(IItemStack):void} setItem(item)
 */

/**
 * noppes.npcs.api.entity.IEntityLiving
 * @typedef {IEntity & IEntityLivingPartial} IEntityLiving
 * @typedef IEntityLivingPartial
 * @property {function():Number} getHealth
 * @property {function(Number):void} setHealth(health)
 * @property {function():Number} getMaxHealth
 * @property {function(Number):void} setMaxHealth(health)
 * @property {function():Boolean} isAttacking
 * @property {function(IEntityLiving):void} setAttackTarget(living)
 * @property {function():IEntityLiving} getAttackTarget
 * @property {function():IEntityLiving} getLastAttacked
 * @property {function():Number} getLastAttackedTime
 * @property {function():Boolean} canSeeEntity
 * @property {function():void} swingMainhand
 * @property {function():void} swingOffhand
 * @property {function():IItemStack} getMainhandItem
 * @property {function(IItemStack):void} setMainhandItem(item)
 * @property {function():IItemStack} getOffhandItem
 * @property {function(IItemStack):void} setOffhandItem(item)
 * @property {function(Number):IItemStack} getArmor(slot)
 * @property {function(Number, IItemStack):void} setArmor(slot, item)
 * @property {function(Number, Number, Number, Boolean):void} addPotionEffect(effect, duration, strength, hideParticles)
 * @property {function():void} clearPotionEffects
 * @property {function():Number} getPotionEffect
 * @property {function(Number):IMark} addMark(type)
 * @property {function(IMark):void} removeMark(mark)
 * @property {function():IMark[]} getMarks
 * @property {function():Boolean} isChild
 * @property {function()} getMCEntity
 * @property {function():Number} getMoveForward
 * @property {function():Number} setMoveForward
 * @property {function():Number} getMoveStrafing
 * @property {function(Number):void} setMoveStrafing(move)
 * @property {function():Number} getMoveVertical
 * @property {function(Number):void} setMoveVertical(move)
 */

/**
 * noppes.npcs.api.entity.IThrowable
 * @typedef {IEntity} IThrowable
 */
/**
 * noppes.npcs.api.entity.IMob
 * @typedef {IEntityLiving & IMobPartial} IMob
 * @typedef {Object} IMobPartial
 * @property {function():Boolean} isNavigating
 * @property {function():void} clearNavigation
 * @property {function(Number, Number, Number, Number):void} navigateTo(x, y, z, speed)
 * @property {function():void} jump
 * @property {function()} getMCEntity
 * @property {function():IPos} getNavigationPath
 */

/**
 * noppes.npcs.api.entity.IPlayer
 * @typedef {IEntityLiving & IPlayerPartial} IPlayer
 * @typedef {Object} IPlayerPartial
 * @property {function():String} getDisplayName
 * @property {function(Number):Boolean} hasFinishedQuest(id)
 * @property {function(Number):Boolean} hasActiveQuest(id)
 * @property {function(Number):void} startQuest(id)
 * @property {function(Number):Number} factionStatus(factionId)
 * @property {function(Number):void} finishQuest(id)
 * @property {function(Number):void} stopQuest(id)
 * @property {function(Number):void} removeQuest(id)
 * @property {function(Number):Boolean} hasReadDialog(id)
 * @property {function(Number, String):void} showDialog(id, name)
 * @property {function(Number):void} removeDialog(id)
 * @property {function(Number):void} addDialog(id)
 * @property {function(Number, Number):void} addFactionPoints(faction, points)
 * @property {function(Number):Number} getFactionPoints(faction)
 * @property {function(String):void} message(message)
 * @property {function():Number} getGamemode
 * @property {function(Number):void} setGamemode(mode)
 * @property {function():IContainer} getInventory
 * @property {function():IItemStack} getInventoryHeldItem
 * @property {function(IItemStack, Number):Boolean} removeItem(item, amount)
 * @property {function(String, Number):Boolean} removeItem(id, amount)
 * @property {function(IItemStack):void} removeAllItems(item)
 * @property {function(IItemStack):Boolean} giveItem(item)
 * @property {function(String, Number):Boolean} giveItem(id, amount)
 * @property {function(Number, Number, Number):void} setSpawnpoint(x, y, z)
 * @property {function():void} resetSpawnpoint
 * @property {function(String):void} hasAdvancement(achievement)
 * @property {function():Number} getExpLevel
 * @property {function(Number):void} setExpLevel(level)
 * @property {function(String):Boolean} hasPermission(permission)
 * @property {function(Object)} getPixelmonData
 * @property {function(ITimers)} getTimers
 * @property {function():void} closeGui
 * @property {function()} getMCEntity
 * @property {function():IBlock} getSpawnPoint
 * @property {function(IBlock):void} setSpawnPoint(block)
 * @property {function():Number} getHunger
 * @property {function(Number):void} setHunger(level)
 * @property {function(String):void} kick(message)
 * @property {function(String, String, Number):void} sendNotification(title, msg, type)
 * @property {function(IPlayerMail):void} sendMail(mail)
 * @property {function():void} clearData
 * @property {function():IQuest[]} getActiveQuests
 * @property {function():IQuest[]} getFinishedQuests
 * @property {function():void} updatePlayerInventory
 * @property {function(String, Number, Number):void} playSound(sound, volume, pitch)
 * @property {function(String, Boolean, Boolean):void} playMusic(sound, background, loops)
 * @property {function():IContainer} getOpenContainer
 * @property {function(Number):Boolean} canQuestBeAccepted(id)
 * @property {function(ICustomGui):void} showCustomGui(gui)
 * @property {function():ICustomGui} getCustomGui
 * @property {function(Number, ...objects):void} trigger(id, ...arguments)
 */

/**
 * noppes.npcs.api.entity.IAnimal
 * @typedef {IMob} IAnimal
 */
/**
 * noppes.npcs.api.entity.ICustomNpc
 * @typedef {IMob & ICustomNpcPartial} ICustomNpc
 * @typedef {Object} ICustomNpcPartial
 * @property {function():INPCDisplay} getDisplay
 * @property {function():INPCInventory} getInventory
 * @property {function():INPCStats} getStats
 * @property {function():INPCAi} getAi
 * @property {function():INPCAdvanced} getAdvanced
 * @property {function():IFaction} getFaction
 * @property {function(Number):void} setFaction(id)
 * @property {function():INPCRole} getRole
 * @property {function():INPCJob} getJob
 * @property {function():ITimers} getTimers
 * @property {function():Number} getHomeX
 * @property {function():Number} getHomeY
 * @property {function():Number} getHomeZ
 * @property {function():IEntityLiving} getOwner
 * @property {function(Number, Number, Number):void} setHome(x, y, z)
 * @property {function():void} reset
 * @property {function(String):void} say(message)
 * @property {function(IPlayer, String):void} sayTo(player, message)
 * @property {function(IEntityLiving, IItemStack, Number):IProjectile} shootItem(target, item, accuracy)
 * @property {function(Number, Number, Number, IItemStack, Number):IProjectile} shootItem(x, y, z, item, accuracy)
 * @property {function(IPlayer, IItemStack):void} giveItem(player, item)
 * @property {function(Number, IDialog):void} setDialog(slot, dialog)
 * @property {function(Number):IDialog} getDialog(slot)
 * @property {function():void} updateClient
 * @property {function(String):String} executeCommand(command)
 * @property {function(Number, ...Object):void} trigger(id, arguments)
 */

/**
 * noppes.npcs.api.entity.IMonster
 * @typedef {IMob} IMonster
 */
/**
 * noppes.npcs.api.entity.IVillager
 * @typedef {IMob} IVillager
 */
/**
 * noppes.npcs.api.entity.IPixelmon
 * @typedef {IAnimal IPixelmonPartial} IPixelmon
 * @typedef {Object} IPixelmonPartial
 * @property {function():Object} getPokemonData returns a Pokemon Object
 */

/**
 * noppes.npcs.api.entity.IProjectile
 * @typedef {IThrowable & IProjectilePartial} IProjectile
 * @typedef {Object} IProjectilePartial
 * @property {function():IItemStack} getItem
 * @property {function(IItemStack):void} setItem(item)
 * @property {function():Boolean} getHasGravity
 * @property {function(Boolean):void} setHasGravity(bo)
 * @property {function():Number} getAccuracy
 * @property {function(Number):void} setAccuracy(accuracy)
 * @property {function(IEntity):void} setHeading(entity)
 * @property {function(Number, Number, Number):void} setHeading(x, y, z)
 * @property {function(Number, Number):void} setHeading(yaw, pitch)
 * @property {function():void} enableEvents
 */

/**
 * noppes.npcs.api.item.IItemArmor
 * @typedef {IItemStack & IItemArmorPartial} IItemArmor
 * @typedef {Object} IItemArmorPartial
 * @property {function():Number} getArmorSlot
 * @property {function():String} getArmorMaterial
 */

/**
 * noppes.npcs.api.item.IItemBlock
 * @typedef {IItemStack & IItemBlockPartial} IItemBlock
 * @typedef {Object} IItemBlockPartial
 * @property {function():String} getBlockName
 */

/**
 * noppes.npcs.api.item.IItemBook
 * @typedef {IItemStack & IItemBookPartial} IItemBook
 * @typedef {Object} IItemBookPartial
 * @property {function():String[]} getText
 * @property {function(String[]):void} setText(pages)
 * @property {function():String} getAuthor
 * @property {function(String):void} setAuthor(author)
 * @property {function():String} getTitle
 * @property {function(String):void} setTitle(title)
 */

/**
 * noppes.npcs.api.item.IItemScripted
 * @typedef {IItemStack & IItemScriptedPartial} IItemScripted
 * @typedef {Object} IItemScriptedPartial
 * @property {function(Number):Boolean} hasTexture(damage)
 * @property {function():String} getTexture
 * @property {function(String):void} setTexture(texture)
 * @property {function(Number):void} setMaxStackSize(size)
 * @property {function():Number} getDurabilityValue
 * @property {function(Number):void} setDurabilityValue(value)
 * @property {function():Boolean} getDurabilityShow
 * @property {function(Boolean):void} setDurabilityShow(bo)
 * @property {function():Number} getDurabilityColor
 * @property {function(Number):void} setDurabilityColor(color)
 * @property {function():Number} getColor
 * @property {function(Number):void} setColor(color)
 */

/**
 * noppes.npcs.api.entity.data.role.IJobFollower
 * @typedef {INPCJob & IJobFollowerPartial} IJobFollower
 * @typedef {Object} IJobFollowerPartial
 * @property {function():String} getFollowing
 * @property {function(String):void} setFollowing(name)
 * @property {function():Boolean} isFollowing
 * @property {function():ICustomNpc} getFollowingNpc
 */

/**
 * noppes.npcs.api.entity.data.role.IJobPuppet
 * @typedef {INPCJob & IJobPuppetPartial} IJobPuppet
 * @typedef {Object} IJobPuppetPartial
 * @property {function():Boolean} getIsAnimated
 * @property {function(Boolean):void} setIsAnimated(bo)
 * @property {function():Number} getAnimationSpeed
 * @property {function(Number):void} setAnimationSpeed(speed)
 * @property {function(Number):IJobPuppetIJobPuppetPart} getPart(part)
 */

/**
 * noppes.npcs.api.entity.data.role.IRoleFollower
 * @typedef {INPCRole & IRoleFollowerPartial} IRoleFollower
 * @typedef {Object} IRoleFollowerPartial
 * @property {function():Number} getDays
 * @property {function(Number):void} addDays(days)
 * @property {function():Boolean} getInfinite
 * @property {function(Boolean):void} setInfinite(infinite)
 * @property {function():Boolean} getGuiDisabled
 * @property {function(Boolean):void} setGuiDisabled(disabled)
 * @property {function():IPlayer} getFollowing
 * @property {function(IPlayer):void} setFollowing(player)
 * @property {function():Boolean} isFollowing
 * @property {function():void} reset
 * @property {function(Boolean):void} setRefuseSoulstone(refuse)
 * @property {function():Boolean} getRefuseSoulstone
 */

/**
 * noppes.npcs.api.entity.data.role.IRoleTrader
 * @typedef {INPCRole & IRoleTraderPartial} IRoleTrader
 * @typedef {Object} IRoleTraderPartial
 * @property {function(Number):IItemStack} getSold(slot)
 * @property {function(Number):IItemStack} getCurrency1(slot)
 * @property {function(Number):IItemStack} getCurrency2(solt)
 * @property {function(Number, IItemStack, IItemStack, IItemStack):void} set(slot, currency, currency2, sold)
 * @property {function(Number):void} remove(slot)
 * @property {function(String):void} setMarket(name)
 * @property {function():String} getMarket
 */

/**
 * noppes.npcs.api.entity.data.role.IRoleTransporter
 * @typedef {INPCRole & IRoleTransporterPartial} IRoleTransporter
 * @typedef {Object} IRoleTransporterPartial
 * @property {function():IRoleTransporterITransportLocation} getLocation
 */

