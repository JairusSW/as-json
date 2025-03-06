@json
export class Entity<EntityAttributes> {
    attributes!: EntityAttributes;
    name!: string | null;
}

@json
export class EventConfiguration<EntityAttributes, Extras> {
    @alias("event_domain")
    @omitnull()
    eventDomain!: string | null;

    @omitnull()
    entity!: Entity<EntityAttributes> | null;
    extras!: Extras;
}