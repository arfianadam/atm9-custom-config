ClientEvents.highPriorityAssets((allthemods) => {
    let modelsToDefaultToItem = [
        "mysticalagriculture:models/item/soul_dust_essence",
        "mysticalagriculture:models/item/soul_dust_seeds",
        "mysticalagriculture:models/item/prosperity_shard_essence",
        "mysticalagriculture:models/item/prosperity_shard_seeds",
        "mysticalagriculture:models/item/flux_dust_essence",
        "mysticalagriculture:models/item/flux_dust_seeds"
    ];
    modelsToDefaultToItem.forEach((rl) => {
        allthemods.add(rl, { parent: "forge:item/default" })
    });

    let customSeeds = ["soul_dust", "prosperity_shard", "flux_dust"];
    customSeeds.forEach((seed) => {
        allthemods.add(`mysticalagriculture:blockstates/${seed}_crop`, {
            variants: {
                "age=0": {
                    model: "mysticalagriculture:block/mystical_resource_crop_0"
                },
                "age=1": {
                    model: "mysticalagriculture:block/mystical_resource_crop_1"
                },
                "age=2": {
                    model: "mysticalagriculture:block/mystical_resource_crop_2"
                },
                "age=3": {
                    model: "mysticalagriculture:block/mystical_resource_crop_3"
                },
                "age=4": {
                    model: "mysticalagriculture:block/mystical_resource_crop_4"
                },
                "age=5": {
                    model: "mysticalagriculture:block/mystical_resource_crop_5"
                },
                "age=6": {
                    model: "mysticalagriculture:block/mystical_resource_crop_6"
                },
                "age=7": {
                    model: `mysticalagriculture:block/${seed}_crop`
                }
            }
        })
        allthemods.add(`mysticalagriculture:models/block/${seed}_crop`, {
            parent: "mysticalagriculture:block/mystical_resource_crop_7",
            textures: {
                flower: "mysticalagriculture:block/flower_ingot"
            }
        });
    });
});