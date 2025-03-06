import {TextStyle} from "./text";
import {Image} from "./image";
import {EmptyObject} from "./empty_object";
import {EventConfiguration} from "./event_configuration";

@json
export class Price {
    text!: string;
    @alias("text_color")
    textColor!: string;
    @alias("text_style")
    textStyle!: string;
}

@json
export class OptionPrice {
    final!: f64;
    @omitif("this.original <= 0")
    original!: f64;
}

@json
export class OptionTitle {
    text!: string;
    @alias("text_color")
    textColor!: string;
    @alias("text_style")
    textStyle!: string;
}

@json
export class Option {
    id!: string;
    description!: TextStyle | null;
    price!: OptionPrice|null;
    title!: TextStyle;
}

@json
export class AddOnGroup {
    description!: TextStyle;
    id!: string;
    @alias("is_required")
    isRequired!: boolean;
    @alias("max_selections_count")
    maxSelectionsCount!: i32;
    @alias("min_selections_count")
    minSelectionsCount!: i32;
    options!: Array<Option>;
    @alias("parent_group_id")
    parentGroupId!: string | null;
    @alias("parent_option_id")
    parentOptionId!: string | null;
    @alias("tag_text")
    tagText!: string | null;
    title!: TextStyle;
    type!: string;
    @alias("unavailable_options")
    unavailableOptions!: Array<Option>;
    @alias("nested_options_data")
    @omitif("this.nestedOptionsData.length === 0")
    nestedOptionsData!: Array<AddOnGroup>;
    @alias("unavailable_options_title")
    unavailableOptionsTitle!: TextStyle;
}

@json
export class CurrencyDetails {
    currency!: string;
    decimal!: i32;
    position!: string;
}

@json
export class Placeholder {
    add!: string;
    @alias("button_disabled")
    buttonDisabled!: string;
    @alias("unavailable_item")
    unavailableItem!: string;
}

@json
export class SpecialRequestsInput {
    title!: TextStyle;
    description!: TextStyle;
    @alias("input_placeholder")
    inputPlaceholder!: string;
}

@json
export class ItemDetails {
    @alias("add_on_groups")
    addOnGroups!: Array<AddOnGroup> | null;
    @alias("currency_details")
    currencyDetails!: CurrencyDetails;
    description!: TextStyle;
    groups!: Array<AddOnGroup>;
    id!: string;
    image!: Image;
    @alias("is_unavailable")
    isUnavailable!: boolean;
    @alias("leading_text")
    leadingText!: TextStyle | null;
    @alias("max_choices_reached_message")
    maxChoicesReachedMessage!: string;
    @alias("option_groups_title")
    optionGroupsTitle!: TextStyle;
    placeholder!: Placeholder;
    price!: OptionPrice | null;
    @alias("price_tag")
    priceTag!: Tag | null;
    @alias("special_requests_input")
    specialRequestsInput!: SpecialRequestsInput;
    tags!: Array<string>;
    title!: TextStyle;
    @alias("trailing_text")
    trailingText!: TextStyle | null;
}

@json
export class EventEntity {
    currency!: string;
    @alias("discount_amount")
    discountAmount!: f64;
    @alias("is_image_available")
    isImageAvailable!: boolean;
    @alias("item_availability")
    itemAvailability!: boolean;
    @alias("item_name")
    itemName!: string;
    @alias("item_price")
    itemPrice!: f64;
    @alias("merchant_id")
    merchantId!: i64;
    @alias("merchant_name")
    merchantName!: string;
    @alias("section_name")
    sectionName!: string;
    @alias("tag_label")
    tagLabel!: string | null;
}

@json
export class EventExtras {
    @alias("content_category")
    contentCategory!: string;

    domain!: string;

    @alias("service_name")
    serviceName!: string;

    @alias("sub_domain")
    subDomain!: string;
}

@json
export class ItemPluginsBasket {
    @alias("catalog_id")
    catalogId!: string;
    @alias("catalog_item_id")
    catalogItemId!: string;
    @alias("outlet_id")
    outletId!: string;
}

@json
export class ItemPlugins {
    @omitnull()
    basket!: ItemPluginsBasket | null;

    dummy!: EmptyObject | null; // HACK: if remove it as-json will generate extra trailing comma
}

@json
export class Tag {
    text!: string
    @alias("background_color")
    backgroundColor!: string
    @omitnull()
    icon: string | null = null
}

@json
export class Item {
    @alias("background_color")
    backgroundColor!: string;
    description!: TextStyle;
    @alias("discount_tag")
    discountTag!: Tag | null;
    divider!: boolean;
    @alias("event_configuration")
    eventConfiguration!: EventConfiguration<EventEntity, EventExtras>;
    header!: TextStyle;
    id!: string;
    image!: Image;
    @alias("item_details")
    itemDetails!: ItemDetails | null;
    note!: TextStyle | null;
    @alias("original_price")
    originalPrice!: TextStyle | null;
    @omitnull()
    plugins!: ItemPlugins | null;
    price!: Price;
    @alias("top_tags")
    topTags!: Array<Tag> | null;
}

@json
export class GroupHeader {
    @alias("has_separator")
    hasSeparator!: boolean;
    title!: string;
    variant!: string;
}

@json
export class Group {
    header!: GroupHeader;
    items!: Array<Item>;
}

@json
export class ContentHeader {
    title!: string;
    variant!: string;
}

@json
export class Content {
    groups!: Array<Group>;
    header!: ContentHeader;
    id!: string;
    @alias("items")
    items!: Array<Item>;
    @alias("preload_item_image")
    preloadItemImage!: boolean;
}

@json
export class FoodMenuBodyOutput {
    content!: Array<Content>;
}
