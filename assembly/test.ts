import { bs } from "as-bs";
import { JSON } from ".";
@json
class ItemPluginsBasket {
    @alias("catalog_id")
    catalogId!: string;
    @alias("catalog_item_id")
    catalogItemId!: string;
    @alias("outlet_id")
    outletId!: string;
}

@json
class ItemPlugins {
    @omitnull()
    basket!: ItemPluginsBasket | null;
}

@json
class Item {
    id!: string;
    @omitnull()
    plugins!: ItemPlugins | null;
}

@json
class Vec3 {
    vxyz: i8 = 1;
    y: i8 = 2;
    z: i8 = 3;
}

const vec: Vec3 = {
    vxyz: 1,
    y: 2,
    z: 3
}

const item: Item = {
    id: "1",
    plugins: {
        basket: {
            catalogId: "1",
            catalogItemId: "2",
            outletId: "3"
        }
    }
};

// bs.ensureSize(2048);
console.log(JSON.stringify(vec));
// bs.ensureSize(2048);
console.log(JSON.stringify(item));