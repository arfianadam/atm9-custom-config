ServerEvents.tags('item',allthemods=>{allthemods.add('mysticalagriculture:essences',['mysticalagriculture:soul_dust_essence','mysticalagriculture:prosperity_shard_essence']);allthemods.add('mysticalagriculture:seeds',['mysticalagriculture:soul_dust_seeds','mysticalagriculture:prosperity_shard_seeds']);allthemods.add('mysticalagriculture:crops',['mysticalagriculture:soul_dust_crop','mysticalagriculture:prosperity_shard_crop'])});ServerEvents.recipes(allthemods=>{function essenceCircle(result,essenceType){allthemods.shaped(result,['aaa','a a','aaa'],{a:`mysticalagriculture:${ essenceType }_essence`}).id(`allthemods:mysticalagriculture/${ essenceType }_essence_crafting`)}essenceCircle(Item.of('mysticalagriculture:soul_dust',4),'soul_dust');essenceCircle(Item.of('mysticalagriculture:prosperity_shard',4),'prosperity_shard');allthemods.remove({mod:'torcherino'})});