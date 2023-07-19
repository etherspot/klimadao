//@ts-nocheck
import {
  Activity,
  ActivityType,
  Activity_Filter,
  BlockChangedFilter,
  Block_Height,
  Category,
  Category_Filter,
  Country,
  Country_Filter,
  Listing,
  Listing_Filter,
  Project,
  Project_Filter,
  Purchase,
  Purchase_Filter,
  Query,
  Subscription,
  User,
  User_Filter,
  _Block_,
  _Meta_,
} from "../types/marketplace.types";

export const anActivity = (
  overrides?: Partial<Activity>,
  _relationshipsToOmit: Set<string> = new Set()
): Activity => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Activity");
  return {
    activityType:
      overrides && overrides.hasOwnProperty("activityType")
        ? overrides.activityType!
        : ActivityType.CreatedListing,
    amount:
      overrides && overrides.hasOwnProperty("amount")
        ? overrides.amount!
        : "et sit aut corporis molestias qui qui",
    buyer:
      overrides && overrides.hasOwnProperty("buyer")
        ? overrides.buyer!
        : relationshipsToOmit.has("User")
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty("id") ? overrides.id! : "molestiae",
    listing:
      overrides && overrides.hasOwnProperty("listing")
        ? overrides.listing!
        : relationshipsToOmit.has("Listing")
        ? ({} as Listing)
        : aListing({}, relationshipsToOmit),
    previousAmount:
      overrides && overrides.hasOwnProperty("previousAmount")
        ? overrides.previousAmount!
        : "aut officiis quia quia dolore blanditiis et",
    previousPrice:
      overrides && overrides.hasOwnProperty("previousPrice")
        ? overrides.previousPrice!
        : "ratione molestiae enim ut repellendus ea sunt",
    price:
      overrides && overrides.hasOwnProperty("price")
        ? overrides.price!
        : "fugiat occaecati id eius temporibus eaque odio",
    project:
      overrides && overrides.hasOwnProperty("project")
        ? overrides.project!
        : relationshipsToOmit.has("Project")
        ? ({} as Project)
        : aProject({}, relationshipsToOmit),
    seller:
      overrides && overrides.hasOwnProperty("seller")
        ? overrides.seller!
        : relationshipsToOmit.has("User")
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
    timeStamp:
      overrides && overrides.hasOwnProperty("timeStamp")
        ? overrides.timeStamp!
        : "sit aut quo in hic tempora vel",
    user:
      overrides && overrides.hasOwnProperty("user")
        ? overrides.user!
        : relationshipsToOmit.has("User")
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
  };
};

export const anActivity_Filter = (
  overrides?: Partial<Activity_Filter>,
  _relationshipsToOmit: Set<string> = new Set()
): Activity_Filter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Activity_Filter");
  return {
    _change_block:
      overrides && overrides.hasOwnProperty("_change_block")
        ? overrides._change_block!
        : relationshipsToOmit.has("BlockChangedFilter")
        ? ({} as BlockChangedFilter)
        : aBlockChangedFilter({}, relationshipsToOmit),
    activityType:
      overrides && overrides.hasOwnProperty("activityType")
        ? overrides.activityType!
        : ActivityType.CreatedListing,
    activityType_in:
      overrides && overrides.hasOwnProperty("activityType_in")
        ? overrides.activityType_in!
        : [ActivityType.CreatedListing],
    activityType_not:
      overrides && overrides.hasOwnProperty("activityType_not")
        ? overrides.activityType_not!
        : ActivityType.CreatedListing,
    activityType_not_in:
      overrides && overrides.hasOwnProperty("activityType_not_in")
        ? overrides.activityType_not_in!
        : [ActivityType.CreatedListing],
    amount:
      overrides && overrides.hasOwnProperty("amount")
        ? overrides.amount!
        : "provident mollitia ab quia iusto explicabo est",
    amount_gt:
      overrides && overrides.hasOwnProperty("amount_gt")
        ? overrides.amount_gt!
        : "praesentium temporibus error officiis est sit ex",
    amount_gte:
      overrides && overrides.hasOwnProperty("amount_gte")
        ? overrides.amount_gte!
        : "in minima asperiores placeat incidunt fuga eveniet",
    amount_in:
      overrides && overrides.hasOwnProperty("amount_in")
        ? overrides.amount_in!
        : [
            "reprehenderit vitae eos mollitia voluptatem exercitationem voluptatem",
          ],
    amount_lt:
      overrides && overrides.hasOwnProperty("amount_lt")
        ? overrides.amount_lt!
        : "quo dolorem accusantium cumque veritatis impedit consequuntur",
    amount_lte:
      overrides && overrides.hasOwnProperty("amount_lte")
        ? overrides.amount_lte!
        : "vel aspernatur qui tenetur voluptatem nobis sit",
    amount_not:
      overrides && overrides.hasOwnProperty("amount_not")
        ? overrides.amount_not!
        : "natus dolor accusantium iste illo quas fugiat",
    amount_not_in:
      overrides && overrides.hasOwnProperty("amount_not_in")
        ? overrides.amount_not_in!
        : ["sapiente hic eum laudantium quod numquam delectus"],
    and:
      overrides && overrides.hasOwnProperty("and")
        ? overrides.and!
        : [
            relationshipsToOmit.has("Activity_Filter")
              ? ({} as Activity_Filter)
              : anActivity_Filter({}, relationshipsToOmit),
          ],
    buyer:
      overrides && overrides.hasOwnProperty("buyer")
        ? overrides.buyer!
        : "deleniti",
    buyer_:
      overrides && overrides.hasOwnProperty("buyer_")
        ? overrides.buyer_!
        : relationshipsToOmit.has("User_Filter")
        ? ({} as User_Filter)
        : aUser_Filter({}, relationshipsToOmit),
    buyer_contains:
      overrides && overrides.hasOwnProperty("buyer_contains")
        ? overrides.buyer_contains!
        : "nihil",
    buyer_contains_nocase:
      overrides && overrides.hasOwnProperty("buyer_contains_nocase")
        ? overrides.buyer_contains_nocase!
        : "magnam",
    buyer_ends_with:
      overrides && overrides.hasOwnProperty("buyer_ends_with")
        ? overrides.buyer_ends_with!
        : "autem",
    buyer_ends_with_nocase:
      overrides && overrides.hasOwnProperty("buyer_ends_with_nocase")
        ? overrides.buyer_ends_with_nocase!
        : "aut",
    buyer_gt:
      overrides && overrides.hasOwnProperty("buyer_gt")
        ? overrides.buyer_gt!
        : "voluptatum",
    buyer_gte:
      overrides && overrides.hasOwnProperty("buyer_gte")
        ? overrides.buyer_gte!
        : "quia",
    buyer_in:
      overrides && overrides.hasOwnProperty("buyer_in")
        ? overrides.buyer_in!
        : ["et"],
    buyer_lt:
      overrides && overrides.hasOwnProperty("buyer_lt")
        ? overrides.buyer_lt!
        : "illum",
    buyer_lte:
      overrides && overrides.hasOwnProperty("buyer_lte")
        ? overrides.buyer_lte!
        : "iure",
    buyer_not:
      overrides && overrides.hasOwnProperty("buyer_not")
        ? overrides.buyer_not!
        : "eveniet",
    buyer_not_contains:
      overrides && overrides.hasOwnProperty("buyer_not_contains")
        ? overrides.buyer_not_contains!
        : "commodi",
    buyer_not_contains_nocase:
      overrides && overrides.hasOwnProperty("buyer_not_contains_nocase")
        ? overrides.buyer_not_contains_nocase!
        : "numquam",
    buyer_not_ends_with:
      overrides && overrides.hasOwnProperty("buyer_not_ends_with")
        ? overrides.buyer_not_ends_with!
        : "itaque",
    buyer_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("buyer_not_ends_with_nocase")
        ? overrides.buyer_not_ends_with_nocase!
        : "sunt",
    buyer_not_in:
      overrides && overrides.hasOwnProperty("buyer_not_in")
        ? overrides.buyer_not_in!
        : ["reprehenderit"],
    buyer_not_starts_with:
      overrides && overrides.hasOwnProperty("buyer_not_starts_with")
        ? overrides.buyer_not_starts_with!
        : "quia",
    buyer_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("buyer_not_starts_with_nocase")
        ? overrides.buyer_not_starts_with_nocase!
        : "et",
    buyer_starts_with:
      overrides && overrides.hasOwnProperty("buyer_starts_with")
        ? overrides.buyer_starts_with!
        : "beatae",
    buyer_starts_with_nocase:
      overrides && overrides.hasOwnProperty("buyer_starts_with_nocase")
        ? overrides.buyer_starts_with_nocase!
        : "quae",
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "architecto",
    id_contains:
      overrides && overrides.hasOwnProperty("id_contains")
        ? overrides.id_contains!
        : "pariatur",
    id_contains_nocase:
      overrides && overrides.hasOwnProperty("id_contains_nocase")
        ? overrides.id_contains_nocase!
        : "voluptatem",
    id_ends_with:
      overrides && overrides.hasOwnProperty("id_ends_with")
        ? overrides.id_ends_with!
        : "sint",
    id_ends_with_nocase:
      overrides && overrides.hasOwnProperty("id_ends_with_nocase")
        ? overrides.id_ends_with_nocase!
        : "sit",
    id_gt:
      overrides && overrides.hasOwnProperty("id_gt")
        ? overrides.id_gt!
        : "inventore",
    id_gte:
      overrides && overrides.hasOwnProperty("id_gte")
        ? overrides.id_gte!
        : "aliquam",
    id_in:
      overrides && overrides.hasOwnProperty("id_in")
        ? overrides.id_in!
        : ["in"],
    id_lt:
      overrides && overrides.hasOwnProperty("id_lt")
        ? overrides.id_lt!
        : "maxime",
    id_lte:
      overrides && overrides.hasOwnProperty("id_lte")
        ? overrides.id_lte!
        : "et",
    id_not:
      overrides && overrides.hasOwnProperty("id_not")
        ? overrides.id_not!
        : "repudiandae",
    id_not_contains:
      overrides && overrides.hasOwnProperty("id_not_contains")
        ? overrides.id_not_contains!
        : "debitis",
    id_not_contains_nocase:
      overrides && overrides.hasOwnProperty("id_not_contains_nocase")
        ? overrides.id_not_contains_nocase!
        : "autem",
    id_not_ends_with:
      overrides && overrides.hasOwnProperty("id_not_ends_with")
        ? overrides.id_not_ends_with!
        : "aut",
    id_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("id_not_ends_with_nocase")
        ? overrides.id_not_ends_with_nocase!
        : "hic",
    id_not_in:
      overrides && overrides.hasOwnProperty("id_not_in")
        ? overrides.id_not_in!
        : ["ut"],
    id_not_starts_with:
      overrides && overrides.hasOwnProperty("id_not_starts_with")
        ? overrides.id_not_starts_with!
        : "cupiditate",
    id_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("id_not_starts_with_nocase")
        ? overrides.id_not_starts_with_nocase!
        : "numquam",
    id_starts_with:
      overrides && overrides.hasOwnProperty("id_starts_with")
        ? overrides.id_starts_with!
        : "cupiditate",
    id_starts_with_nocase:
      overrides && overrides.hasOwnProperty("id_starts_with_nocase")
        ? overrides.id_starts_with_nocase!
        : "quis",
    listing:
      overrides && overrides.hasOwnProperty("listing")
        ? overrides.listing!
        : "aspernatur",
    listing_:
      overrides && overrides.hasOwnProperty("listing_")
        ? overrides.listing_!
        : relationshipsToOmit.has("Listing_Filter")
        ? ({} as Listing_Filter)
        : aListing_Filter({}, relationshipsToOmit),
    listing_contains:
      overrides && overrides.hasOwnProperty("listing_contains")
        ? overrides.listing_contains!
        : "aut",
    listing_contains_nocase:
      overrides && overrides.hasOwnProperty("listing_contains_nocase")
        ? overrides.listing_contains_nocase!
        : "qui",
    listing_ends_with:
      overrides && overrides.hasOwnProperty("listing_ends_with")
        ? overrides.listing_ends_with!
        : "eius",
    listing_ends_with_nocase:
      overrides && overrides.hasOwnProperty("listing_ends_with_nocase")
        ? overrides.listing_ends_with_nocase!
        : "nisi",
    listing_gt:
      overrides && overrides.hasOwnProperty("listing_gt")
        ? overrides.listing_gt!
        : "consequatur",
    listing_gte:
      overrides && overrides.hasOwnProperty("listing_gte")
        ? overrides.listing_gte!
        : "possimus",
    listing_in:
      overrides && overrides.hasOwnProperty("listing_in")
        ? overrides.listing_in!
        : ["quo"],
    listing_lt:
      overrides && overrides.hasOwnProperty("listing_lt")
        ? overrides.listing_lt!
        : "vel",
    listing_lte:
      overrides && overrides.hasOwnProperty("listing_lte")
        ? overrides.listing_lte!
        : "quibusdam",
    listing_not:
      overrides && overrides.hasOwnProperty("listing_not")
        ? overrides.listing_not!
        : "incidunt",
    listing_not_contains:
      overrides && overrides.hasOwnProperty("listing_not_contains")
        ? overrides.listing_not_contains!
        : "aut",
    listing_not_contains_nocase:
      overrides && overrides.hasOwnProperty("listing_not_contains_nocase")
        ? overrides.listing_not_contains_nocase!
        : "reprehenderit",
    listing_not_ends_with:
      overrides && overrides.hasOwnProperty("listing_not_ends_with")
        ? overrides.listing_not_ends_with!
        : "vero",
    listing_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("listing_not_ends_with_nocase")
        ? overrides.listing_not_ends_with_nocase!
        : "voluptatibus",
    listing_not_in:
      overrides && overrides.hasOwnProperty("listing_not_in")
        ? overrides.listing_not_in!
        : ["deleniti"],
    listing_not_starts_with:
      overrides && overrides.hasOwnProperty("listing_not_starts_with")
        ? overrides.listing_not_starts_with!
        : "hic",
    listing_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("listing_not_starts_with_nocase")
        ? overrides.listing_not_starts_with_nocase!
        : "assumenda",
    listing_starts_with:
      overrides && overrides.hasOwnProperty("listing_starts_with")
        ? overrides.listing_starts_with!
        : "dolor",
    listing_starts_with_nocase:
      overrides && overrides.hasOwnProperty("listing_starts_with_nocase")
        ? overrides.listing_starts_with_nocase!
        : "maxime",
    or:
      overrides && overrides.hasOwnProperty("or")
        ? overrides.or!
        : [
            relationshipsToOmit.has("Activity_Filter")
              ? ({} as Activity_Filter)
              : anActivity_Filter({}, relationshipsToOmit),
          ],
    previousAmount:
      overrides && overrides.hasOwnProperty("previousAmount")
        ? overrides.previousAmount!
        : "quo eum dicta nam repudiandae voluptatem in",
    previousAmount_gt:
      overrides && overrides.hasOwnProperty("previousAmount_gt")
        ? overrides.previousAmount_gt!
        : "fugit quis omnis quasi earum perferendis molestiae",
    previousAmount_gte:
      overrides && overrides.hasOwnProperty("previousAmount_gte")
        ? overrides.previousAmount_gte!
        : "et voluptatibus eaque ipsam dolores autem porro",
    previousAmount_in:
      overrides && overrides.hasOwnProperty("previousAmount_in")
        ? overrides.previousAmount_in!
        : ["laudantium nihil quia mollitia et et temporibus"],
    previousAmount_lt:
      overrides && overrides.hasOwnProperty("previousAmount_lt")
        ? overrides.previousAmount_lt!
        : "nemo beatae molestiae vero eos aperiam labore",
    previousAmount_lte:
      overrides && overrides.hasOwnProperty("previousAmount_lte")
        ? overrides.previousAmount_lte!
        : "ea doloribus tempora officia beatae iste perspiciatis",
    previousAmount_not:
      overrides && overrides.hasOwnProperty("previousAmount_not")
        ? overrides.previousAmount_not!
        : "neque fuga ut non placeat animi quia",
    previousAmount_not_in:
      overrides && overrides.hasOwnProperty("previousAmount_not_in")
        ? overrides.previousAmount_not_in!
        : ["amet voluptatem nemo et culpa totam illum"],
    previousPrice:
      overrides && overrides.hasOwnProperty("previousPrice")
        ? overrides.previousPrice!
        : "fuga similique ratione enim necessitatibus ipsam voluptatem",
    previousPrice_gt:
      overrides && overrides.hasOwnProperty("previousPrice_gt")
        ? overrides.previousPrice_gt!
        : "veritatis nihil sunt voluptatem voluptatem qui autem",
    previousPrice_gte:
      overrides && overrides.hasOwnProperty("previousPrice_gte")
        ? overrides.previousPrice_gte!
        : "fuga blanditiis sed assumenda eaque recusandae impedit",
    previousPrice_in:
      overrides && overrides.hasOwnProperty("previousPrice_in")
        ? overrides.previousPrice_in!
        : ["aut et ea eligendi modi est similique"],
    previousPrice_lt:
      overrides && overrides.hasOwnProperty("previousPrice_lt")
        ? overrides.previousPrice_lt!
        : "dolorem et voluptate non blanditiis consequatur ad",
    previousPrice_lte:
      overrides && overrides.hasOwnProperty("previousPrice_lte")
        ? overrides.previousPrice_lte!
        : "omnis autem tempore eius velit consequatur dicta",
    previousPrice_not:
      overrides && overrides.hasOwnProperty("previousPrice_not")
        ? overrides.previousPrice_not!
        : "amet amet quo hic quisquam sint qui",
    previousPrice_not_in:
      overrides && overrides.hasOwnProperty("previousPrice_not_in")
        ? overrides.previousPrice_not_in!
        : ["perspiciatis voluptatem a consectetur dolorem rerum et"],
    price:
      overrides && overrides.hasOwnProperty("price")
        ? overrides.price!
        : "omnis ad et officia nesciunt qui ipsam",
    price_gt:
      overrides && overrides.hasOwnProperty("price_gt")
        ? overrides.price_gt!
        : "doloribus voluptas et voluptatum molestiae in ut",
    price_gte:
      overrides && overrides.hasOwnProperty("price_gte")
        ? overrides.price_gte!
        : "nisi ut perspiciatis nihil dicta officiis sapiente",
    price_in:
      overrides && overrides.hasOwnProperty("price_in")
        ? overrides.price_in!
        : ["accusantium earum voluptas rerum enim quam minima"],
    price_lt:
      overrides && overrides.hasOwnProperty("price_lt")
        ? overrides.price_lt!
        : "dolorem consequatur exercitationem ratione numquam corrupti corporis",
    price_lte:
      overrides && overrides.hasOwnProperty("price_lte")
        ? overrides.price_lte!
        : "unde sint ut quae saepe est sed",
    price_not:
      overrides && overrides.hasOwnProperty("price_not")
        ? overrides.price_not!
        : "voluptas nihil enim voluptatem commodi rerum est",
    price_not_in:
      overrides && overrides.hasOwnProperty("price_not_in")
        ? overrides.price_not_in!
        : ["sed praesentium aspernatur quidem voluptatum eos ratione"],
    project:
      overrides && overrides.hasOwnProperty("project")
        ? overrides.project!
        : "in",
    project_:
      overrides && overrides.hasOwnProperty("project_")
        ? overrides.project_!
        : relationshipsToOmit.has("Project_Filter")
        ? ({} as Project_Filter)
        : aProject_Filter({}, relationshipsToOmit),
    project_contains:
      overrides && overrides.hasOwnProperty("project_contains")
        ? overrides.project_contains!
        : "quo",
    project_contains_nocase:
      overrides && overrides.hasOwnProperty("project_contains_nocase")
        ? overrides.project_contains_nocase!
        : "commodi",
    project_ends_with:
      overrides && overrides.hasOwnProperty("project_ends_with")
        ? overrides.project_ends_with!
        : "accusantium",
    project_ends_with_nocase:
      overrides && overrides.hasOwnProperty("project_ends_with_nocase")
        ? overrides.project_ends_with_nocase!
        : "debitis",
    project_gt:
      overrides && overrides.hasOwnProperty("project_gt")
        ? overrides.project_gt!
        : "aspernatur",
    project_gte:
      overrides && overrides.hasOwnProperty("project_gte")
        ? overrides.project_gte!
        : "voluptatibus",
    project_in:
      overrides && overrides.hasOwnProperty("project_in")
        ? overrides.project_in!
        : ["saepe"],
    project_lt:
      overrides && overrides.hasOwnProperty("project_lt")
        ? overrides.project_lt!
        : "in",
    project_lte:
      overrides && overrides.hasOwnProperty("project_lte")
        ? overrides.project_lte!
        : "beatae",
    project_not:
      overrides && overrides.hasOwnProperty("project_not")
        ? overrides.project_not!
        : "reprehenderit",
    project_not_contains:
      overrides && overrides.hasOwnProperty("project_not_contains")
        ? overrides.project_not_contains!
        : "ut",
    project_not_contains_nocase:
      overrides && overrides.hasOwnProperty("project_not_contains_nocase")
        ? overrides.project_not_contains_nocase!
        : "aut",
    project_not_ends_with:
      overrides && overrides.hasOwnProperty("project_not_ends_with")
        ? overrides.project_not_ends_with!
        : "et",
    project_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("project_not_ends_with_nocase")
        ? overrides.project_not_ends_with_nocase!
        : "velit",
    project_not_in:
      overrides && overrides.hasOwnProperty("project_not_in")
        ? overrides.project_not_in!
        : ["nihil"],
    project_not_starts_with:
      overrides && overrides.hasOwnProperty("project_not_starts_with")
        ? overrides.project_not_starts_with!
        : "pariatur",
    project_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("project_not_starts_with_nocase")
        ? overrides.project_not_starts_with_nocase!
        : "dolor",
    project_starts_with:
      overrides && overrides.hasOwnProperty("project_starts_with")
        ? overrides.project_starts_with!
        : "hic",
    project_starts_with_nocase:
      overrides && overrides.hasOwnProperty("project_starts_with_nocase")
        ? overrides.project_starts_with_nocase!
        : "incidunt",
    seller:
      overrides && overrides.hasOwnProperty("seller")
        ? overrides.seller!
        : "debitis",
    seller_:
      overrides && overrides.hasOwnProperty("seller_")
        ? overrides.seller_!
        : relationshipsToOmit.has("User_Filter")
        ? ({} as User_Filter)
        : aUser_Filter({}, relationshipsToOmit),
    seller_contains:
      overrides && overrides.hasOwnProperty("seller_contains")
        ? overrides.seller_contains!
        : "magnam",
    seller_contains_nocase:
      overrides && overrides.hasOwnProperty("seller_contains_nocase")
        ? overrides.seller_contains_nocase!
        : "exercitationem",
    seller_ends_with:
      overrides && overrides.hasOwnProperty("seller_ends_with")
        ? overrides.seller_ends_with!
        : "possimus",
    seller_ends_with_nocase:
      overrides && overrides.hasOwnProperty("seller_ends_with_nocase")
        ? overrides.seller_ends_with_nocase!
        : "nihil",
    seller_gt:
      overrides && overrides.hasOwnProperty("seller_gt")
        ? overrides.seller_gt!
        : "est",
    seller_gte:
      overrides && overrides.hasOwnProperty("seller_gte")
        ? overrides.seller_gte!
        : "iure",
    seller_in:
      overrides && overrides.hasOwnProperty("seller_in")
        ? overrides.seller_in!
        : ["autem"],
    seller_lt:
      overrides && overrides.hasOwnProperty("seller_lt")
        ? overrides.seller_lt!
        : "tempore",
    seller_lte:
      overrides && overrides.hasOwnProperty("seller_lte")
        ? overrides.seller_lte!
        : "quam",
    seller_not:
      overrides && overrides.hasOwnProperty("seller_not")
        ? overrides.seller_not!
        : "et",
    seller_not_contains:
      overrides && overrides.hasOwnProperty("seller_not_contains")
        ? overrides.seller_not_contains!
        : "quod",
    seller_not_contains_nocase:
      overrides && overrides.hasOwnProperty("seller_not_contains_nocase")
        ? overrides.seller_not_contains_nocase!
        : "possimus",
    seller_not_ends_with:
      overrides && overrides.hasOwnProperty("seller_not_ends_with")
        ? overrides.seller_not_ends_with!
        : "perferendis",
    seller_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("seller_not_ends_with_nocase")
        ? overrides.seller_not_ends_with_nocase!
        : "pariatur",
    seller_not_in:
      overrides && overrides.hasOwnProperty("seller_not_in")
        ? overrides.seller_not_in!
        : ["dignissimos"],
    seller_not_starts_with:
      overrides && overrides.hasOwnProperty("seller_not_starts_with")
        ? overrides.seller_not_starts_with!
        : "quasi",
    seller_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("seller_not_starts_with_nocase")
        ? overrides.seller_not_starts_with_nocase!
        : "eaque",
    seller_starts_with:
      overrides && overrides.hasOwnProperty("seller_starts_with")
        ? overrides.seller_starts_with!
        : "sed",
    seller_starts_with_nocase:
      overrides && overrides.hasOwnProperty("seller_starts_with_nocase")
        ? overrides.seller_starts_with_nocase!
        : "iusto",
    timeStamp:
      overrides && overrides.hasOwnProperty("timeStamp")
        ? overrides.timeStamp!
        : "exercitationem neque nostrum itaque mollitia excepturi quaerat",
    timeStamp_gt:
      overrides && overrides.hasOwnProperty("timeStamp_gt")
        ? overrides.timeStamp_gt!
        : "similique eius sed rerum reiciendis quasi rerum",
    timeStamp_gte:
      overrides && overrides.hasOwnProperty("timeStamp_gte")
        ? overrides.timeStamp_gte!
        : "aliquid est et doloremque nihil consectetur et",
    timeStamp_in:
      overrides && overrides.hasOwnProperty("timeStamp_in")
        ? overrides.timeStamp_in!
        : ["omnis nobis sint inventore temporibus odio ut"],
    timeStamp_lt:
      overrides && overrides.hasOwnProperty("timeStamp_lt")
        ? overrides.timeStamp_lt!
        : "est id doloribus optio soluta quo hic",
    timeStamp_lte:
      overrides && overrides.hasOwnProperty("timeStamp_lte")
        ? overrides.timeStamp_lte!
        : "qui molestiae optio maxime optio voluptatem id",
    timeStamp_not:
      overrides && overrides.hasOwnProperty("timeStamp_not")
        ? overrides.timeStamp_not!
        : "occaecati officiis in reiciendis sapiente praesentium animi",
    timeStamp_not_in:
      overrides && overrides.hasOwnProperty("timeStamp_not_in")
        ? overrides.timeStamp_not_in!
        : ["facere et nihil asperiores repudiandae voluptas culpa"],
    user:
      overrides && overrides.hasOwnProperty("user") ? overrides.user! : "sed",
    user_:
      overrides && overrides.hasOwnProperty("user_")
        ? overrides.user_!
        : relationshipsToOmit.has("User_Filter")
        ? ({} as User_Filter)
        : aUser_Filter({}, relationshipsToOmit),
    user_contains:
      overrides && overrides.hasOwnProperty("user_contains")
        ? overrides.user_contains!
        : "reprehenderit",
    user_contains_nocase:
      overrides && overrides.hasOwnProperty("user_contains_nocase")
        ? overrides.user_contains_nocase!
        : "et",
    user_ends_with:
      overrides && overrides.hasOwnProperty("user_ends_with")
        ? overrides.user_ends_with!
        : "sequi",
    user_ends_with_nocase:
      overrides && overrides.hasOwnProperty("user_ends_with_nocase")
        ? overrides.user_ends_with_nocase!
        : "odio",
    user_gt:
      overrides && overrides.hasOwnProperty("user_gt")
        ? overrides.user_gt!
        : "non",
    user_gte:
      overrides && overrides.hasOwnProperty("user_gte")
        ? overrides.user_gte!
        : "consequatur",
    user_in:
      overrides && overrides.hasOwnProperty("user_in")
        ? overrides.user_in!
        : ["sit"],
    user_lt:
      overrides && overrides.hasOwnProperty("user_lt")
        ? overrides.user_lt!
        : "id",
    user_lte:
      overrides && overrides.hasOwnProperty("user_lte")
        ? overrides.user_lte!
        : "iure",
    user_not:
      overrides && overrides.hasOwnProperty("user_not")
        ? overrides.user_not!
        : "tempora",
    user_not_contains:
      overrides && overrides.hasOwnProperty("user_not_contains")
        ? overrides.user_not_contains!
        : "pariatur",
    user_not_contains_nocase:
      overrides && overrides.hasOwnProperty("user_not_contains_nocase")
        ? overrides.user_not_contains_nocase!
        : "impedit",
    user_not_ends_with:
      overrides && overrides.hasOwnProperty("user_not_ends_with")
        ? overrides.user_not_ends_with!
        : "vel",
    user_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("user_not_ends_with_nocase")
        ? overrides.user_not_ends_with_nocase!
        : "consequatur",
    user_not_in:
      overrides && overrides.hasOwnProperty("user_not_in")
        ? overrides.user_not_in!
        : ["temporibus"],
    user_not_starts_with:
      overrides && overrides.hasOwnProperty("user_not_starts_with")
        ? overrides.user_not_starts_with!
        : "explicabo",
    user_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("user_not_starts_with_nocase")
        ? overrides.user_not_starts_with_nocase!
        : "a",
    user_starts_with:
      overrides && overrides.hasOwnProperty("user_starts_with")
        ? overrides.user_starts_with!
        : "iste",
    user_starts_with_nocase:
      overrides && overrides.hasOwnProperty("user_starts_with_nocase")
        ? overrides.user_starts_with_nocase!
        : "impedit",
  };
};

export const aBlockChangedFilter = (
  overrides?: Partial<BlockChangedFilter>,
  _relationshipsToOmit: Set<string> = new Set()
): BlockChangedFilter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("BlockChangedFilter");
  return {
    number_gte:
      overrides && overrides.hasOwnProperty("number_gte")
        ? overrides.number_gte!
        : 4175,
  };
};

export const aBlock_Height = (
  overrides?: Partial<Block_Height>,
  _relationshipsToOmit: Set<string> = new Set()
): Block_Height => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Block_Height");
  return {
    hash:
      overrides && overrides.hasOwnProperty("hash") ? overrides.hash! : "ut",
    number:
      overrides && overrides.hasOwnProperty("number")
        ? overrides.number!
        : 6885,
    number_gte:
      overrides && overrides.hasOwnProperty("number_gte")
        ? overrides.number_gte!
        : 5347,
  };
};

export const aCategory = (
  overrides?: Partial<Category>,
  _relationshipsToOmit: Set<string> = new Set()
): Category => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Category");
  return {
    id: overrides && overrides.hasOwnProperty("id") ? overrides.id! : "sunt",
  };
};

export const aCategory_Filter = (
  overrides?: Partial<Category_Filter>,
  _relationshipsToOmit: Set<string> = new Set()
): Category_Filter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Category_Filter");
  return {
    _change_block:
      overrides && overrides.hasOwnProperty("_change_block")
        ? overrides._change_block!
        : relationshipsToOmit.has("BlockChangedFilter")
        ? ({} as BlockChangedFilter)
        : aBlockChangedFilter({}, relationshipsToOmit),
    and:
      overrides && overrides.hasOwnProperty("and")
        ? overrides.and!
        : [
            relationshipsToOmit.has("Category_Filter")
              ? ({} as Category_Filter)
              : aCategory_Filter({}, relationshipsToOmit),
          ],
    id: overrides && overrides.hasOwnProperty("id") ? overrides.id! : "iure",
    id_contains:
      overrides && overrides.hasOwnProperty("id_contains")
        ? overrides.id_contains!
        : "possimus",
    id_contains_nocase:
      overrides && overrides.hasOwnProperty("id_contains_nocase")
        ? overrides.id_contains_nocase!
        : "eligendi",
    id_ends_with:
      overrides && overrides.hasOwnProperty("id_ends_with")
        ? overrides.id_ends_with!
        : "quidem",
    id_ends_with_nocase:
      overrides && overrides.hasOwnProperty("id_ends_with_nocase")
        ? overrides.id_ends_with_nocase!
        : "vel",
    id_gt:
      overrides && overrides.hasOwnProperty("id_gt")
        ? overrides.id_gt!
        : "necessitatibus",
    id_gte:
      overrides && overrides.hasOwnProperty("id_gte")
        ? overrides.id_gte!
        : "atque",
    id_in:
      overrides && overrides.hasOwnProperty("id_in")
        ? overrides.id_in!
        : ["rerum"],
    id_lt:
      overrides && overrides.hasOwnProperty("id_lt")
        ? overrides.id_lt!
        : "ducimus",
    id_lte:
      overrides && overrides.hasOwnProperty("id_lte")
        ? overrides.id_lte!
        : "tenetur",
    id_not:
      overrides && overrides.hasOwnProperty("id_not")
        ? overrides.id_not!
        : "aut",
    id_not_contains:
      overrides && overrides.hasOwnProperty("id_not_contains")
        ? overrides.id_not_contains!
        : "earum",
    id_not_contains_nocase:
      overrides && overrides.hasOwnProperty("id_not_contains_nocase")
        ? overrides.id_not_contains_nocase!
        : "vero",
    id_not_ends_with:
      overrides && overrides.hasOwnProperty("id_not_ends_with")
        ? overrides.id_not_ends_with!
        : "sint",
    id_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("id_not_ends_with_nocase")
        ? overrides.id_not_ends_with_nocase!
        : "veritatis",
    id_not_in:
      overrides && overrides.hasOwnProperty("id_not_in")
        ? overrides.id_not_in!
        : ["itaque"],
    id_not_starts_with:
      overrides && overrides.hasOwnProperty("id_not_starts_with")
        ? overrides.id_not_starts_with!
        : "nemo",
    id_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("id_not_starts_with_nocase")
        ? overrides.id_not_starts_with_nocase!
        : "quam",
    id_starts_with:
      overrides && overrides.hasOwnProperty("id_starts_with")
        ? overrides.id_starts_with!
        : "quia",
    id_starts_with_nocase:
      overrides && overrides.hasOwnProperty("id_starts_with_nocase")
        ? overrides.id_starts_with_nocase!
        : "quos",
    or:
      overrides && overrides.hasOwnProperty("or")
        ? overrides.or!
        : [
            relationshipsToOmit.has("Category_Filter")
              ? ({} as Category_Filter)
              : aCategory_Filter({}, relationshipsToOmit),
          ],
  };
};

export const aCountry = (
  overrides?: Partial<Country>,
  _relationshipsToOmit: Set<string> = new Set()
): Country => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Country");
  return {
    id:
      overrides && overrides.hasOwnProperty("id") ? overrides.id! : "accusamus",
  };
};

export const aCountry_Filter = (
  overrides?: Partial<Country_Filter>,
  _relationshipsToOmit: Set<string> = new Set()
): Country_Filter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Country_Filter");
  return {
    _change_block:
      overrides && overrides.hasOwnProperty("_change_block")
        ? overrides._change_block!
        : relationshipsToOmit.has("BlockChangedFilter")
        ? ({} as BlockChangedFilter)
        : aBlockChangedFilter({}, relationshipsToOmit),
    and:
      overrides && overrides.hasOwnProperty("and")
        ? overrides.and!
        : [
            relationshipsToOmit.has("Country_Filter")
              ? ({} as Country_Filter)
              : aCountry_Filter({}, relationshipsToOmit),
          ],
    id: overrides && overrides.hasOwnProperty("id") ? overrides.id! : "optio",
    id_contains:
      overrides && overrides.hasOwnProperty("id_contains")
        ? overrides.id_contains!
        : "aut",
    id_contains_nocase:
      overrides && overrides.hasOwnProperty("id_contains_nocase")
        ? overrides.id_contains_nocase!
        : "commodi",
    id_ends_with:
      overrides && overrides.hasOwnProperty("id_ends_with")
        ? overrides.id_ends_with!
        : "rem",
    id_ends_with_nocase:
      overrides && overrides.hasOwnProperty("id_ends_with_nocase")
        ? overrides.id_ends_with_nocase!
        : "aliquid",
    id_gt:
      overrides && overrides.hasOwnProperty("id_gt")
        ? overrides.id_gt!
        : "quisquam",
    id_gte:
      overrides && overrides.hasOwnProperty("id_gte")
        ? overrides.id_gte!
        : "et",
    id_in:
      overrides && overrides.hasOwnProperty("id_in")
        ? overrides.id_in!
        : ["maxime"],
    id_lt:
      overrides && overrides.hasOwnProperty("id_lt")
        ? overrides.id_lt!
        : "perspiciatis",
    id_lte:
      overrides && overrides.hasOwnProperty("id_lte")
        ? overrides.id_lte!
        : "earum",
    id_not:
      overrides && overrides.hasOwnProperty("id_not") ? overrides.id_not! : "a",
    id_not_contains:
      overrides && overrides.hasOwnProperty("id_not_contains")
        ? overrides.id_not_contains!
        : "autem",
    id_not_contains_nocase:
      overrides && overrides.hasOwnProperty("id_not_contains_nocase")
        ? overrides.id_not_contains_nocase!
        : "et",
    id_not_ends_with:
      overrides && overrides.hasOwnProperty("id_not_ends_with")
        ? overrides.id_not_ends_with!
        : "maxime",
    id_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("id_not_ends_with_nocase")
        ? overrides.id_not_ends_with_nocase!
        : "perspiciatis",
    id_not_in:
      overrides && overrides.hasOwnProperty("id_not_in")
        ? overrides.id_not_in!
        : ["autem"],
    id_not_starts_with:
      overrides && overrides.hasOwnProperty("id_not_starts_with")
        ? overrides.id_not_starts_with!
        : "id",
    id_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("id_not_starts_with_nocase")
        ? overrides.id_not_starts_with_nocase!
        : "repellendus",
    id_starts_with:
      overrides && overrides.hasOwnProperty("id_starts_with")
        ? overrides.id_starts_with!
        : "quasi",
    id_starts_with_nocase:
      overrides && overrides.hasOwnProperty("id_starts_with_nocase")
        ? overrides.id_starts_with_nocase!
        : "provident",
    or:
      overrides && overrides.hasOwnProperty("or")
        ? overrides.or!
        : [
            relationshipsToOmit.has("Country_Filter")
              ? ({} as Country_Filter)
              : aCountry_Filter({}, relationshipsToOmit),
          ],
  };
};

export const aListing = (
  overrides?: Partial<Listing>,
  _relationshipsToOmit: Set<string> = new Set()
): Listing => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Listing");
  return {
    active:
      overrides && overrides.hasOwnProperty("active")
        ? overrides.active!
        : true,
    activities:
      overrides && overrides.hasOwnProperty("activities")
        ? overrides.activities!
        : [
            relationshipsToOmit.has("Activity")
              ? ({} as Activity)
              : anActivity({}, relationshipsToOmit),
          ],
    batchPrices:
      overrides && overrides.hasOwnProperty("batchPrices")
        ? overrides.batchPrices!
        : ["dolorum et corrupti at iste dolor sit"],
    batches:
      overrides && overrides.hasOwnProperty("batches")
        ? overrides.batches!
        : ["rerum omnis qui consequatur sed et et"],
    createdAt:
      overrides && overrides.hasOwnProperty("createdAt")
        ? overrides.createdAt!
        : "dicta vel eum impedit illum dicta omnis",
    deleted:
      overrides && overrides.hasOwnProperty("deleted")
        ? overrides.deleted!
        : false,
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "hic rerum sit dolore aut quia sed",
    leftToSell:
      overrides && overrides.hasOwnProperty("leftToSell")
        ? overrides.leftToSell!
        : "excepturi cupiditate ratione quis dolorem magnam labore",
    project:
      overrides && overrides.hasOwnProperty("project")
        ? overrides.project!
        : relationshipsToOmit.has("Project")
        ? ({} as Project)
        : aProject({}, relationshipsToOmit),
    seller:
      overrides && overrides.hasOwnProperty("seller")
        ? overrides.seller!
        : relationshipsToOmit.has("User")
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
    singleUnitPrice:
      overrides && overrides.hasOwnProperty("singleUnitPrice")
        ? overrides.singleUnitPrice!
        : "qui ut provident fuga perferendis qui beatae",
    tokenAddress:
      overrides && overrides.hasOwnProperty("tokenAddress")
        ? overrides.tokenAddress!
        : "at",
    totalAmountToSell:
      overrides && overrides.hasOwnProperty("totalAmountToSell")
        ? overrides.totalAmountToSell!
        : "quia repellendus et voluptatibus voluptas omnis culpa",
    updatedAt:
      overrides && overrides.hasOwnProperty("updatedAt")
        ? overrides.updatedAt!
        : "veritatis recusandae odio perspiciatis maxime dignissimos aspernatur",
  };
};

export const aListing_Filter = (
  overrides?: Partial<Listing_Filter>,
  _relationshipsToOmit: Set<string> = new Set()
): Listing_Filter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Listing_Filter");
  return {
    _change_block:
      overrides && overrides.hasOwnProperty("_change_block")
        ? overrides._change_block!
        : relationshipsToOmit.has("BlockChangedFilter")
        ? ({} as BlockChangedFilter)
        : aBlockChangedFilter({}, relationshipsToOmit),
    active:
      overrides && overrides.hasOwnProperty("active")
        ? overrides.active!
        : true,
    active_in:
      overrides && overrides.hasOwnProperty("active_in")
        ? overrides.active_in!
        : [false],
    active_not:
      overrides && overrides.hasOwnProperty("active_not")
        ? overrides.active_not!
        : false,
    active_not_in:
      overrides && overrides.hasOwnProperty("active_not_in")
        ? overrides.active_not_in!
        : [false],
    activities_:
      overrides && overrides.hasOwnProperty("activities_")
        ? overrides.activities_!
        : relationshipsToOmit.has("Activity_Filter")
        ? ({} as Activity_Filter)
        : anActivity_Filter({}, relationshipsToOmit),
    and:
      overrides && overrides.hasOwnProperty("and")
        ? overrides.and!
        : [
            relationshipsToOmit.has("Listing_Filter")
              ? ({} as Listing_Filter)
              : aListing_Filter({}, relationshipsToOmit),
          ],
    batchPrices:
      overrides && overrides.hasOwnProperty("batchPrices")
        ? overrides.batchPrices!
        : ["consectetur autem blanditiis accusantium ut praesentium ipsa"],
    batchPrices_contains:
      overrides && overrides.hasOwnProperty("batchPrices_contains")
        ? overrides.batchPrices_contains!
        : ["ex quis quibusdam voluptatibus delectus in modi"],
    batchPrices_contains_nocase:
      overrides && overrides.hasOwnProperty("batchPrices_contains_nocase")
        ? overrides.batchPrices_contains_nocase!
        : ["cupiditate porro dolore accusamus quas a quidem"],
    batchPrices_not:
      overrides && overrides.hasOwnProperty("batchPrices_not")
        ? overrides.batchPrices_not!
        : ["ut nisi dolorum quas velit doloribus quos"],
    batchPrices_not_contains:
      overrides && overrides.hasOwnProperty("batchPrices_not_contains")
        ? overrides.batchPrices_not_contains!
        : ["reprehenderit quaerat cumque corrupti porro omnis magnam"],
    batchPrices_not_contains_nocase:
      overrides && overrides.hasOwnProperty("batchPrices_not_contains_nocase")
        ? overrides.batchPrices_not_contains_nocase!
        : ["ipsum rerum illo et eveniet eaque magni"],
    batches:
      overrides && overrides.hasOwnProperty("batches")
        ? overrides.batches!
        : ["quos ut aspernatur odio omnis sit consequuntur"],
    batches_contains:
      overrides && overrides.hasOwnProperty("batches_contains")
        ? overrides.batches_contains!
        : ["laudantium voluptates excepturi possimus aut perspiciatis quasi"],
    batches_contains_nocase:
      overrides && overrides.hasOwnProperty("batches_contains_nocase")
        ? overrides.batches_contains_nocase!
        : ["facilis quaerat aut culpa qui hic rerum"],
    batches_not:
      overrides && overrides.hasOwnProperty("batches_not")
        ? overrides.batches_not!
        : ["qui ipsa sapiente iusto occaecati omnis sed"],
    batches_not_contains:
      overrides && overrides.hasOwnProperty("batches_not_contains")
        ? overrides.batches_not_contains!
        : ["corporis neque qui omnis ab illum quis"],
    batches_not_contains_nocase:
      overrides && overrides.hasOwnProperty("batches_not_contains_nocase")
        ? overrides.batches_not_contains_nocase!
        : ["modi voluptas est aliquam blanditiis et officia"],
    createdAt:
      overrides && overrides.hasOwnProperty("createdAt")
        ? overrides.createdAt!
        : "commodi id et nihil autem et quaerat",
    createdAt_gt:
      overrides && overrides.hasOwnProperty("createdAt_gt")
        ? overrides.createdAt_gt!
        : "doloremque aspernatur ipsum tempora et et et",
    createdAt_gte:
      overrides && overrides.hasOwnProperty("createdAt_gte")
        ? overrides.createdAt_gte!
        : "enim nemo iusto id iusto voluptatem et",
    createdAt_in:
      overrides && overrides.hasOwnProperty("createdAt_in")
        ? overrides.createdAt_in!
        : ["laborum eveniet itaque sit id expedita doloremque"],
    createdAt_lt:
      overrides && overrides.hasOwnProperty("createdAt_lt")
        ? overrides.createdAt_lt!
        : "maiores ut in voluptates fugit ab quia",
    createdAt_lte:
      overrides && overrides.hasOwnProperty("createdAt_lte")
        ? overrides.createdAt_lte!
        : "eum asperiores qui voluptas voluptatem ut magni",
    createdAt_not:
      overrides && overrides.hasOwnProperty("createdAt_not")
        ? overrides.createdAt_not!
        : "ab reprehenderit est temporibus natus et officiis",
    createdAt_not_in:
      overrides && overrides.hasOwnProperty("createdAt_not_in")
        ? overrides.createdAt_not_in!
        : ["illum facere qui aut dignissimos nesciunt id"],
    deleted:
      overrides && overrides.hasOwnProperty("deleted")
        ? overrides.deleted!
        : false,
    deleted_in:
      overrides && overrides.hasOwnProperty("deleted_in")
        ? overrides.deleted_in!
        : [false],
    deleted_not:
      overrides && overrides.hasOwnProperty("deleted_not")
        ? overrides.deleted_not!
        : true,
    deleted_not_in:
      overrides && overrides.hasOwnProperty("deleted_not_in")
        ? overrides.deleted_not_in!
        : [false],
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "qui aut omnis ratione corporis sit neque",
    id_gt:
      overrides && overrides.hasOwnProperty("id_gt")
        ? overrides.id_gt!
        : "quo excepturi quibusdam exercitationem earum quia necessitatibus",
    id_gte:
      overrides && overrides.hasOwnProperty("id_gte")
        ? overrides.id_gte!
        : "aliquid cupiditate sint dolorem aliquid quia debitis",
    id_in:
      overrides && overrides.hasOwnProperty("id_in")
        ? overrides.id_in!
        : ["consequuntur minus ut omnis vero deserunt sit"],
    id_lt:
      overrides && overrides.hasOwnProperty("id_lt")
        ? overrides.id_lt!
        : "veniam tenetur sit laboriosam iste optio cupiditate",
    id_lte:
      overrides && overrides.hasOwnProperty("id_lte")
        ? overrides.id_lte!
        : "rem assumenda molestias ea laborum suscipit eum",
    id_not:
      overrides && overrides.hasOwnProperty("id_not")
        ? overrides.id_not!
        : "quia distinctio iste dolorum nobis ex aliquid",
    id_not_in:
      overrides && overrides.hasOwnProperty("id_not_in")
        ? overrides.id_not_in!
        : ["nam nesciunt adipisci minus aperiam minus corrupti"],
    leftToSell:
      overrides && overrides.hasOwnProperty("leftToSell")
        ? overrides.leftToSell!
        : "numquam debitis maiores exercitationem deleniti minus laudantium",
    leftToSell_gt:
      overrides && overrides.hasOwnProperty("leftToSell_gt")
        ? overrides.leftToSell_gt!
        : "dolores libero inventore rem consequatur a quia",
    leftToSell_gte:
      overrides && overrides.hasOwnProperty("leftToSell_gte")
        ? overrides.leftToSell_gte!
        : "est molestiae voluptas dolores unde ut iure",
    leftToSell_in:
      overrides && overrides.hasOwnProperty("leftToSell_in")
        ? overrides.leftToSell_in!
        : ["iste possimus quia est maxime numquam porro"],
    leftToSell_lt:
      overrides && overrides.hasOwnProperty("leftToSell_lt")
        ? overrides.leftToSell_lt!
        : "nisi eos consequatur culpa aut esse praesentium",
    leftToSell_lte:
      overrides && overrides.hasOwnProperty("leftToSell_lte")
        ? overrides.leftToSell_lte!
        : "et ducimus quaerat fuga accusantium officia eligendi",
    leftToSell_not:
      overrides && overrides.hasOwnProperty("leftToSell_not")
        ? overrides.leftToSell_not!
        : "qui vitae tenetur velit ut eum quae",
    leftToSell_not_in:
      overrides && overrides.hasOwnProperty("leftToSell_not_in")
        ? overrides.leftToSell_not_in!
        : ["voluptatem fugiat ducimus et eum numquam deleniti"],
    or:
      overrides && overrides.hasOwnProperty("or")
        ? overrides.or!
        : [
            relationshipsToOmit.has("Listing_Filter")
              ? ({} as Listing_Filter)
              : aListing_Filter({}, relationshipsToOmit),
          ],
    project:
      overrides && overrides.hasOwnProperty("project")
        ? overrides.project!
        : "harum",
    project_:
      overrides && overrides.hasOwnProperty("project_")
        ? overrides.project_!
        : relationshipsToOmit.has("Project_Filter")
        ? ({} as Project_Filter)
        : aProject_Filter({}, relationshipsToOmit),
    project_contains:
      overrides && overrides.hasOwnProperty("project_contains")
        ? overrides.project_contains!
        : "maiores",
    project_contains_nocase:
      overrides && overrides.hasOwnProperty("project_contains_nocase")
        ? overrides.project_contains_nocase!
        : "non",
    project_ends_with:
      overrides && overrides.hasOwnProperty("project_ends_with")
        ? overrides.project_ends_with!
        : "sint",
    project_ends_with_nocase:
      overrides && overrides.hasOwnProperty("project_ends_with_nocase")
        ? overrides.project_ends_with_nocase!
        : "fugit",
    project_gt:
      overrides && overrides.hasOwnProperty("project_gt")
        ? overrides.project_gt!
        : "adipisci",
    project_gte:
      overrides && overrides.hasOwnProperty("project_gte")
        ? overrides.project_gte!
        : "illo",
    project_in:
      overrides && overrides.hasOwnProperty("project_in")
        ? overrides.project_in!
        : ["architecto"],
    project_lt:
      overrides && overrides.hasOwnProperty("project_lt")
        ? overrides.project_lt!
        : "et",
    project_lte:
      overrides && overrides.hasOwnProperty("project_lte")
        ? overrides.project_lte!
        : "culpa",
    project_not:
      overrides && overrides.hasOwnProperty("project_not")
        ? overrides.project_not!
        : "consequatur",
    project_not_contains:
      overrides && overrides.hasOwnProperty("project_not_contains")
        ? overrides.project_not_contains!
        : "ullam",
    project_not_contains_nocase:
      overrides && overrides.hasOwnProperty("project_not_contains_nocase")
        ? overrides.project_not_contains_nocase!
        : "necessitatibus",
    project_not_ends_with:
      overrides && overrides.hasOwnProperty("project_not_ends_with")
        ? overrides.project_not_ends_with!
        : "quis",
    project_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("project_not_ends_with_nocase")
        ? overrides.project_not_ends_with_nocase!
        : "reiciendis",
    project_not_in:
      overrides && overrides.hasOwnProperty("project_not_in")
        ? overrides.project_not_in!
        : ["aut"],
    project_not_starts_with:
      overrides && overrides.hasOwnProperty("project_not_starts_with")
        ? overrides.project_not_starts_with!
        : "culpa",
    project_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("project_not_starts_with_nocase")
        ? overrides.project_not_starts_with_nocase!
        : "aut",
    project_starts_with:
      overrides && overrides.hasOwnProperty("project_starts_with")
        ? overrides.project_starts_with!
        : "illum",
    project_starts_with_nocase:
      overrides && overrides.hasOwnProperty("project_starts_with_nocase")
        ? overrides.project_starts_with_nocase!
        : "sed",
    seller:
      overrides && overrides.hasOwnProperty("seller")
        ? overrides.seller!
        : "ut",
    seller_:
      overrides && overrides.hasOwnProperty("seller_")
        ? overrides.seller_!
        : relationshipsToOmit.has("User_Filter")
        ? ({} as User_Filter)
        : aUser_Filter({}, relationshipsToOmit),
    seller_contains:
      overrides && overrides.hasOwnProperty("seller_contains")
        ? overrides.seller_contains!
        : "nulla",
    seller_contains_nocase:
      overrides && overrides.hasOwnProperty("seller_contains_nocase")
        ? overrides.seller_contains_nocase!
        : "natus",
    seller_ends_with:
      overrides && overrides.hasOwnProperty("seller_ends_with")
        ? overrides.seller_ends_with!
        : "et",
    seller_ends_with_nocase:
      overrides && overrides.hasOwnProperty("seller_ends_with_nocase")
        ? overrides.seller_ends_with_nocase!
        : "provident",
    seller_gt:
      overrides && overrides.hasOwnProperty("seller_gt")
        ? overrides.seller_gt!
        : "quam",
    seller_gte:
      overrides && overrides.hasOwnProperty("seller_gte")
        ? overrides.seller_gte!
        : "dolor",
    seller_in:
      overrides && overrides.hasOwnProperty("seller_in")
        ? overrides.seller_in!
        : ["iusto"],
    seller_lt:
      overrides && overrides.hasOwnProperty("seller_lt")
        ? overrides.seller_lt!
        : "perspiciatis",
    seller_lte:
      overrides && overrides.hasOwnProperty("seller_lte")
        ? overrides.seller_lte!
        : "dolore",
    seller_not:
      overrides && overrides.hasOwnProperty("seller_not")
        ? overrides.seller_not!
        : "autem",
    seller_not_contains:
      overrides && overrides.hasOwnProperty("seller_not_contains")
        ? overrides.seller_not_contains!
        : "exercitationem",
    seller_not_contains_nocase:
      overrides && overrides.hasOwnProperty("seller_not_contains_nocase")
        ? overrides.seller_not_contains_nocase!
        : "ea",
    seller_not_ends_with:
      overrides && overrides.hasOwnProperty("seller_not_ends_with")
        ? overrides.seller_not_ends_with!
        : "sequi",
    seller_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("seller_not_ends_with_nocase")
        ? overrides.seller_not_ends_with_nocase!
        : "minima",
    seller_not_in:
      overrides && overrides.hasOwnProperty("seller_not_in")
        ? overrides.seller_not_in!
        : ["sunt"],
    seller_not_starts_with:
      overrides && overrides.hasOwnProperty("seller_not_starts_with")
        ? overrides.seller_not_starts_with!
        : "id",
    seller_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("seller_not_starts_with_nocase")
        ? overrides.seller_not_starts_with_nocase!
        : "earum",
    seller_starts_with:
      overrides && overrides.hasOwnProperty("seller_starts_with")
        ? overrides.seller_starts_with!
        : "perferendis",
    seller_starts_with_nocase:
      overrides && overrides.hasOwnProperty("seller_starts_with_nocase")
        ? overrides.seller_starts_with_nocase!
        : "nihil",
    singleUnitPrice:
      overrides && overrides.hasOwnProperty("singleUnitPrice")
        ? overrides.singleUnitPrice!
        : "ad et sint sit itaque et animi",
    singleUnitPrice_gt:
      overrides && overrides.hasOwnProperty("singleUnitPrice_gt")
        ? overrides.singleUnitPrice_gt!
        : "expedita dolore a perspiciatis ut deserunt et",
    singleUnitPrice_gte:
      overrides && overrides.hasOwnProperty("singleUnitPrice_gte")
        ? overrides.singleUnitPrice_gte!
        : "veniam voluptas vel possimus aut cupiditate sapiente",
    singleUnitPrice_in:
      overrides && overrides.hasOwnProperty("singleUnitPrice_in")
        ? overrides.singleUnitPrice_in!
        : ["fugit ratione quam necessitatibus eum nulla dicta"],
    singleUnitPrice_lt:
      overrides && overrides.hasOwnProperty("singleUnitPrice_lt")
        ? overrides.singleUnitPrice_lt!
        : "sed voluptatem est eligendi est incidunt et",
    singleUnitPrice_lte:
      overrides && overrides.hasOwnProperty("singleUnitPrice_lte")
        ? overrides.singleUnitPrice_lte!
        : "optio expedita occaecati et odio mollitia doloribus",
    singleUnitPrice_not:
      overrides && overrides.hasOwnProperty("singleUnitPrice_not")
        ? overrides.singleUnitPrice_not!
        : "quis tenetur exercitationem magnam nemo quia maiores",
    singleUnitPrice_not_in:
      overrides && overrides.hasOwnProperty("singleUnitPrice_not_in")
        ? overrides.singleUnitPrice_not_in!
        : ["at aspernatur rerum molestiae dignissimos et voluptatibus"],
    tokenAddress:
      overrides && overrides.hasOwnProperty("tokenAddress")
        ? overrides.tokenAddress!
        : "enim",
    tokenAddress_contains:
      overrides && overrides.hasOwnProperty("tokenAddress_contains")
        ? overrides.tokenAddress_contains!
        : "quasi",
    tokenAddress_gt:
      overrides && overrides.hasOwnProperty("tokenAddress_gt")
        ? overrides.tokenAddress_gt!
        : "debitis",
    tokenAddress_gte:
      overrides && overrides.hasOwnProperty("tokenAddress_gte")
        ? overrides.tokenAddress_gte!
        : "molestiae",
    tokenAddress_in:
      overrides && overrides.hasOwnProperty("tokenAddress_in")
        ? overrides.tokenAddress_in!
        : ["illum"],
    tokenAddress_lt:
      overrides && overrides.hasOwnProperty("tokenAddress_lt")
        ? overrides.tokenAddress_lt!
        : "nihil",
    tokenAddress_lte:
      overrides && overrides.hasOwnProperty("tokenAddress_lte")
        ? overrides.tokenAddress_lte!
        : "possimus",
    tokenAddress_not:
      overrides && overrides.hasOwnProperty("tokenAddress_not")
        ? overrides.tokenAddress_not!
        : "sint",
    tokenAddress_not_contains:
      overrides && overrides.hasOwnProperty("tokenAddress_not_contains")
        ? overrides.tokenAddress_not_contains!
        : "dolorem",
    tokenAddress_not_in:
      overrides && overrides.hasOwnProperty("tokenAddress_not_in")
        ? overrides.tokenAddress_not_in!
        : ["ut"],
    totalAmountToSell:
      overrides && overrides.hasOwnProperty("totalAmountToSell")
        ? overrides.totalAmountToSell!
        : "aut aliquam enim nemo labore adipisci deserunt",
    totalAmountToSell_gt:
      overrides && overrides.hasOwnProperty("totalAmountToSell_gt")
        ? overrides.totalAmountToSell_gt!
        : "beatae dolores quam expedita nulla aspernatur nobis",
    totalAmountToSell_gte:
      overrides && overrides.hasOwnProperty("totalAmountToSell_gte")
        ? overrides.totalAmountToSell_gte!
        : "et corporis modi illo quo incidunt sit",
    totalAmountToSell_in:
      overrides && overrides.hasOwnProperty("totalAmountToSell_in")
        ? overrides.totalAmountToSell_in!
        : ["mollitia sint quo ratione suscipit quaerat modi"],
    totalAmountToSell_lt:
      overrides && overrides.hasOwnProperty("totalAmountToSell_lt")
        ? overrides.totalAmountToSell_lt!
        : "temporibus mollitia porro dolorum ipsum cupiditate sapiente",
    totalAmountToSell_lte:
      overrides && overrides.hasOwnProperty("totalAmountToSell_lte")
        ? overrides.totalAmountToSell_lte!
        : "nihil quam id dignissimos non sapiente voluptatibus",
    totalAmountToSell_not:
      overrides && overrides.hasOwnProperty("totalAmountToSell_not")
        ? overrides.totalAmountToSell_not!
        : "porro officiis veritatis praesentium id laboriosam eveniet",
    totalAmountToSell_not_in:
      overrides && overrides.hasOwnProperty("totalAmountToSell_not_in")
        ? overrides.totalAmountToSell_not_in!
        : ["quia quam rerum inventore nisi illo rerum"],
    updatedAt:
      overrides && overrides.hasOwnProperty("updatedAt")
        ? overrides.updatedAt!
        : "porro voluptas qui illum hic cum ut",
    updatedAt_gt:
      overrides && overrides.hasOwnProperty("updatedAt_gt")
        ? overrides.updatedAt_gt!
        : "qui labore qui nulla sed quasi necessitatibus",
    updatedAt_gte:
      overrides && overrides.hasOwnProperty("updatedAt_gte")
        ? overrides.updatedAt_gte!
        : "nostrum vitae rerum ea non et quod",
    updatedAt_in:
      overrides && overrides.hasOwnProperty("updatedAt_in")
        ? overrides.updatedAt_in!
        : ["omnis aliquam excepturi voluptatem ad aut praesentium"],
    updatedAt_lt:
      overrides && overrides.hasOwnProperty("updatedAt_lt")
        ? overrides.updatedAt_lt!
        : "velit occaecati inventore expedita aut quisquam voluptatem",
    updatedAt_lte:
      overrides && overrides.hasOwnProperty("updatedAt_lte")
        ? overrides.updatedAt_lte!
        : "et aut sed aut ut perspiciatis unde",
    updatedAt_not:
      overrides && overrides.hasOwnProperty("updatedAt_not")
        ? overrides.updatedAt_not!
        : "ducimus itaque sed quia mollitia dolorem distinctio",
    updatedAt_not_in:
      overrides && overrides.hasOwnProperty("updatedAt_not_in")
        ? overrides.updatedAt_not_in!
        : ["qui atque suscipit distinctio velit ut et"],
  };
};

export const aProject = (
  overrides?: Partial<Project>,
  _relationshipsToOmit: Set<string> = new Set()
): Project => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Project");
  return {
    activities:
      overrides && overrides.hasOwnProperty("activities")
        ? overrides.activities!
        : [
            relationshipsToOmit.has("Activity")
              ? ({} as Activity)
              : anActivity({}, relationshipsToOmit),
          ],
    category:
      overrides && overrides.hasOwnProperty("category")
        ? overrides.category!
        : relationshipsToOmit.has("Category")
        ? ({} as Category)
        : aCategory({}, relationshipsToOmit),
    country:
      overrides && overrides.hasOwnProperty("country")
        ? overrides.country!
        : relationshipsToOmit.has("Country")
        ? ({} as Country)
        : aCountry({}, relationshipsToOmit),
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "dolor recusandae corrupti nulla atque similique et",
    key:
      overrides && overrides.hasOwnProperty("key")
        ? overrides.key!
        : "delectus",
    listings:
      overrides && overrides.hasOwnProperty("listings")
        ? overrides.listings!
        : [
            relationshipsToOmit.has("Listing")
              ? ({} as Listing)
              : aListing({}, relationshipsToOmit),
          ],
    methodology:
      overrides && overrides.hasOwnProperty("methodology")
        ? overrides.methodology!
        : "doloremque",
    name:
      overrides && overrides.hasOwnProperty("name") ? overrides.name! : "et",
    projectAddress:
      overrides && overrides.hasOwnProperty("projectAddress")
        ? overrides.projectAddress!
        : "consequatur",
    projectID:
      overrides && overrides.hasOwnProperty("projectID")
        ? overrides.projectID!
        : "molestias",
    projectType:
      overrides && overrides.hasOwnProperty("projectType")
        ? overrides.projectType!
        : "et",
    region:
      overrides && overrides.hasOwnProperty("region")
        ? overrides.region!
        : "quae",
    registry:
      overrides && overrides.hasOwnProperty("registry")
        ? overrides.registry!
        : "nihil",
    updatedAt:
      overrides && overrides.hasOwnProperty("updatedAt")
        ? overrides.updatedAt!
        : "ipsum possimus cumque unde labore doloribus sapiente",
    vintage:
      overrides && overrides.hasOwnProperty("vintage")
        ? overrides.vintage!
        : "laboriosam porro consequatur rem dolore sunt ratione",
  };
};

export const aProject_Filter = (
  overrides?: Partial<Project_Filter>,
  _relationshipsToOmit: Set<string> = new Set()
): Project_Filter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Project_Filter");
  return {
    _change_block:
      overrides && overrides.hasOwnProperty("_change_block")
        ? overrides._change_block!
        : relationshipsToOmit.has("BlockChangedFilter")
        ? ({} as BlockChangedFilter)
        : aBlockChangedFilter({}, relationshipsToOmit),
    activities_:
      overrides && overrides.hasOwnProperty("activities_")
        ? overrides.activities_!
        : relationshipsToOmit.has("Activity_Filter")
        ? ({} as Activity_Filter)
        : anActivity_Filter({}, relationshipsToOmit),
    and:
      overrides && overrides.hasOwnProperty("and")
        ? overrides.and!
        : [
            relationshipsToOmit.has("Project_Filter")
              ? ({} as Project_Filter)
              : aProject_Filter({}, relationshipsToOmit),
          ],
    category:
      overrides && overrides.hasOwnProperty("category")
        ? overrides.category!
        : "amet",
    category_:
      overrides && overrides.hasOwnProperty("category_")
        ? overrides.category_!
        : relationshipsToOmit.has("Category_Filter")
        ? ({} as Category_Filter)
        : aCategory_Filter({}, relationshipsToOmit),
    category_contains:
      overrides && overrides.hasOwnProperty("category_contains")
        ? overrides.category_contains!
        : "nisi",
    category_contains_nocase:
      overrides && overrides.hasOwnProperty("category_contains_nocase")
        ? overrides.category_contains_nocase!
        : "consequatur",
    category_ends_with:
      overrides && overrides.hasOwnProperty("category_ends_with")
        ? overrides.category_ends_with!
        : "doloribus",
    category_ends_with_nocase:
      overrides && overrides.hasOwnProperty("category_ends_with_nocase")
        ? overrides.category_ends_with_nocase!
        : "alias",
    category_gt:
      overrides && overrides.hasOwnProperty("category_gt")
        ? overrides.category_gt!
        : "ut",
    category_gte:
      overrides && overrides.hasOwnProperty("category_gte")
        ? overrides.category_gte!
        : "molestiae",
    category_in:
      overrides && overrides.hasOwnProperty("category_in")
        ? overrides.category_in!
        : ["et"],
    category_lt:
      overrides && overrides.hasOwnProperty("category_lt")
        ? overrides.category_lt!
        : "est",
    category_lte:
      overrides && overrides.hasOwnProperty("category_lte")
        ? overrides.category_lte!
        : "repudiandae",
    category_not:
      overrides && overrides.hasOwnProperty("category_not")
        ? overrides.category_not!
        : "commodi",
    category_not_contains:
      overrides && overrides.hasOwnProperty("category_not_contains")
        ? overrides.category_not_contains!
        : "voluptatum",
    category_not_contains_nocase:
      overrides && overrides.hasOwnProperty("category_not_contains_nocase")
        ? overrides.category_not_contains_nocase!
        : "id",
    category_not_ends_with:
      overrides && overrides.hasOwnProperty("category_not_ends_with")
        ? overrides.category_not_ends_with!
        : "hic",
    category_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("category_not_ends_with_nocase")
        ? overrides.category_not_ends_with_nocase!
        : "voluptatem",
    category_not_in:
      overrides && overrides.hasOwnProperty("category_not_in")
        ? overrides.category_not_in!
        : ["voluptatem"],
    category_not_starts_with:
      overrides && overrides.hasOwnProperty("category_not_starts_with")
        ? overrides.category_not_starts_with!
        : "omnis",
    category_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("category_not_starts_with_nocase")
        ? overrides.category_not_starts_with_nocase!
        : "magni",
    category_starts_with:
      overrides && overrides.hasOwnProperty("category_starts_with")
        ? overrides.category_starts_with!
        : "totam",
    category_starts_with_nocase:
      overrides && overrides.hasOwnProperty("category_starts_with_nocase")
        ? overrides.category_starts_with_nocase!
        : "eligendi",
    country:
      overrides && overrides.hasOwnProperty("country")
        ? overrides.country!
        : "minus",
    country_:
      overrides && overrides.hasOwnProperty("country_")
        ? overrides.country_!
        : relationshipsToOmit.has("Country_Filter")
        ? ({} as Country_Filter)
        : aCountry_Filter({}, relationshipsToOmit),
    country_contains:
      overrides && overrides.hasOwnProperty("country_contains")
        ? overrides.country_contains!
        : "tempore",
    country_contains_nocase:
      overrides && overrides.hasOwnProperty("country_contains_nocase")
        ? overrides.country_contains_nocase!
        : "delectus",
    country_ends_with:
      overrides && overrides.hasOwnProperty("country_ends_with")
        ? overrides.country_ends_with!
        : "et",
    country_ends_with_nocase:
      overrides && overrides.hasOwnProperty("country_ends_with_nocase")
        ? overrides.country_ends_with_nocase!
        : "ut",
    country_gt:
      overrides && overrides.hasOwnProperty("country_gt")
        ? overrides.country_gt!
        : "ut",
    country_gte:
      overrides && overrides.hasOwnProperty("country_gte")
        ? overrides.country_gte!
        : "necessitatibus",
    country_in:
      overrides && overrides.hasOwnProperty("country_in")
        ? overrides.country_in!
        : ["aspernatur"],
    country_lt:
      overrides && overrides.hasOwnProperty("country_lt")
        ? overrides.country_lt!
        : "rerum",
    country_lte:
      overrides && overrides.hasOwnProperty("country_lte")
        ? overrides.country_lte!
        : "error",
    country_not:
      overrides && overrides.hasOwnProperty("country_not")
        ? overrides.country_not!
        : "ullam",
    country_not_contains:
      overrides && overrides.hasOwnProperty("country_not_contains")
        ? overrides.country_not_contains!
        : "modi",
    country_not_contains_nocase:
      overrides && overrides.hasOwnProperty("country_not_contains_nocase")
        ? overrides.country_not_contains_nocase!
        : "quia",
    country_not_ends_with:
      overrides && overrides.hasOwnProperty("country_not_ends_with")
        ? overrides.country_not_ends_with!
        : "possimus",
    country_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("country_not_ends_with_nocase")
        ? overrides.country_not_ends_with_nocase!
        : "aut",
    country_not_in:
      overrides && overrides.hasOwnProperty("country_not_in")
        ? overrides.country_not_in!
        : ["deserunt"],
    country_not_starts_with:
      overrides && overrides.hasOwnProperty("country_not_starts_with")
        ? overrides.country_not_starts_with!
        : "temporibus",
    country_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("country_not_starts_with_nocase")
        ? overrides.country_not_starts_with_nocase!
        : "reiciendis",
    country_starts_with:
      overrides && overrides.hasOwnProperty("country_starts_with")
        ? overrides.country_starts_with!
        : "doloribus",
    country_starts_with_nocase:
      overrides && overrides.hasOwnProperty("country_starts_with_nocase")
        ? overrides.country_starts_with_nocase!
        : "necessitatibus",
    id:
      overrides && overrides.hasOwnProperty("id")
        ? overrides.id!
        : "molestiae laborum autem ipsum deleniti consectetur voluptatum",
    id_gt:
      overrides && overrides.hasOwnProperty("id_gt")
        ? overrides.id_gt!
        : "id cum reiciendis nulla vel doloremque corporis",
    id_gte:
      overrides && overrides.hasOwnProperty("id_gte")
        ? overrides.id_gte!
        : "perspiciatis esse doloribus ea optio vel earum",
    id_in:
      overrides && overrides.hasOwnProperty("id_in")
        ? overrides.id_in!
        : ["qui qui laboriosam consequatur sint perspiciatis error"],
    id_lt:
      overrides && overrides.hasOwnProperty("id_lt")
        ? overrides.id_lt!
        : "sapiente illum laboriosam minima non velit quia",
    id_lte:
      overrides && overrides.hasOwnProperty("id_lte")
        ? overrides.id_lte!
        : "soluta ut ut ut voluptatem non temporibus",
    id_not:
      overrides && overrides.hasOwnProperty("id_not")
        ? overrides.id_not!
        : "occaecati in non omnis dignissimos doloremque iste",
    id_not_in:
      overrides && overrides.hasOwnProperty("id_not_in")
        ? overrides.id_not_in!
        : ["ab sint quis et et laborum dolorum"],
    key: overrides && overrides.hasOwnProperty("key") ? overrides.key! : "est",
    key_contains:
      overrides && overrides.hasOwnProperty("key_contains")
        ? overrides.key_contains!
        : "ipsa",
    key_contains_nocase:
      overrides && overrides.hasOwnProperty("key_contains_nocase")
        ? overrides.key_contains_nocase!
        : "sapiente",
    key_ends_with:
      overrides && overrides.hasOwnProperty("key_ends_with")
        ? overrides.key_ends_with!
        : "quo",
    key_ends_with_nocase:
      overrides && overrides.hasOwnProperty("key_ends_with_nocase")
        ? overrides.key_ends_with_nocase!
        : "voluptatibus",
    key_gt:
      overrides && overrides.hasOwnProperty("key_gt")
        ? overrides.key_gt!
        : "hic",
    key_gte:
      overrides && overrides.hasOwnProperty("key_gte")
        ? overrides.key_gte!
        : "ullam",
    key_in:
      overrides && overrides.hasOwnProperty("key_in")
        ? overrides.key_in!
        : ["hic"],
    key_lt:
      overrides && overrides.hasOwnProperty("key_lt")
        ? overrides.key_lt!
        : "quaerat",
    key_lte:
      overrides && overrides.hasOwnProperty("key_lte")
        ? overrides.key_lte!
        : "tenetur",
    key_not:
      overrides && overrides.hasOwnProperty("key_not")
        ? overrides.key_not!
        : "ut",
    key_not_contains:
      overrides && overrides.hasOwnProperty("key_not_contains")
        ? overrides.key_not_contains!
        : "reprehenderit",
    key_not_contains_nocase:
      overrides && overrides.hasOwnProperty("key_not_contains_nocase")
        ? overrides.key_not_contains_nocase!
        : "voluptas",
    key_not_ends_with:
      overrides && overrides.hasOwnProperty("key_not_ends_with")
        ? overrides.key_not_ends_with!
        : "voluptatum",
    key_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("key_not_ends_with_nocase")
        ? overrides.key_not_ends_with_nocase!
        : "omnis",
    key_not_in:
      overrides && overrides.hasOwnProperty("key_not_in")
        ? overrides.key_not_in!
        : ["doloremque"],
    key_not_starts_with:
      overrides && overrides.hasOwnProperty("key_not_starts_with")
        ? overrides.key_not_starts_with!
        : "illo",
    key_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("key_not_starts_with_nocase")
        ? overrides.key_not_starts_with_nocase!
        : "architecto",
    key_starts_with:
      overrides && overrides.hasOwnProperty("key_starts_with")
        ? overrides.key_starts_with!
        : "ut",
    key_starts_with_nocase:
      overrides && overrides.hasOwnProperty("key_starts_with_nocase")
        ? overrides.key_starts_with_nocase!
        : "reiciendis",
    listings_:
      overrides && overrides.hasOwnProperty("listings_")
        ? overrides.listings_!
        : relationshipsToOmit.has("Listing_Filter")
        ? ({} as Listing_Filter)
        : aListing_Filter({}, relationshipsToOmit),
    methodology:
      overrides && overrides.hasOwnProperty("methodology")
        ? overrides.methodology!
        : "delectus",
    methodology_contains:
      overrides && overrides.hasOwnProperty("methodology_contains")
        ? overrides.methodology_contains!
        : "consequatur",
    methodology_contains_nocase:
      overrides && overrides.hasOwnProperty("methodology_contains_nocase")
        ? overrides.methodology_contains_nocase!
        : "suscipit",
    methodology_ends_with:
      overrides && overrides.hasOwnProperty("methodology_ends_with")
        ? overrides.methodology_ends_with!
        : "quis",
    methodology_ends_with_nocase:
      overrides && overrides.hasOwnProperty("methodology_ends_with_nocase")
        ? overrides.methodology_ends_with_nocase!
        : "quos",
    methodology_gt:
      overrides && overrides.hasOwnProperty("methodology_gt")
        ? overrides.methodology_gt!
        : "repellendus",
    methodology_gte:
      overrides && overrides.hasOwnProperty("methodology_gte")
        ? overrides.methodology_gte!
        : "commodi",
    methodology_in:
      overrides && overrides.hasOwnProperty("methodology_in")
        ? overrides.methodology_in!
        : ["distinctio"],
    methodology_lt:
      overrides && overrides.hasOwnProperty("methodology_lt")
        ? overrides.methodology_lt!
        : "rerum",
    methodology_lte:
      overrides && overrides.hasOwnProperty("methodology_lte")
        ? overrides.methodology_lte!
        : "ut",
    methodology_not:
      overrides && overrides.hasOwnProperty("methodology_not")
        ? overrides.methodology_not!
        : "hic",
    methodology_not_contains:
      overrides && overrides.hasOwnProperty("methodology_not_contains")
        ? overrides.methodology_not_contains!
        : "reprehenderit",
    methodology_not_contains_nocase:
      overrides && overrides.hasOwnProperty("methodology_not_contains_nocase")
        ? overrides.methodology_not_contains_nocase!
        : "quia",
    methodology_not_ends_with:
      overrides && overrides.hasOwnProperty("methodology_not_ends_with")
        ? overrides.methodology_not_ends_with!
        : "qui",
    methodology_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("methodology_not_ends_with_nocase")
        ? overrides.methodology_not_ends_with_nocase!
        : "laudantium",
    methodology_not_in:
      overrides && overrides.hasOwnProperty("methodology_not_in")
        ? overrides.methodology_not_in!
        : ["incidunt"],
    methodology_not_starts_with:
      overrides && overrides.hasOwnProperty("methodology_not_starts_with")
        ? overrides.methodology_not_starts_with!
        : "minus",
    methodology_not_starts_with_nocase:
      overrides &&
      overrides.hasOwnProperty("methodology_not_starts_with_nocase")
        ? overrides.methodology_not_starts_with_nocase!
        : "dolore",
    methodology_starts_with:
      overrides && overrides.hasOwnProperty("methodology_starts_with")
        ? overrides.methodology_starts_with!
        : "qui",
    methodology_starts_with_nocase:
      overrides && overrides.hasOwnProperty("methodology_starts_with_nocase")
        ? overrides.methodology_starts_with_nocase!
        : "et",
    name:
      overrides && overrides.hasOwnProperty("name") ? overrides.name! : "porro",
    name_contains:
      overrides && overrides.hasOwnProperty("name_contains")
        ? overrides.name_contains!
        : "nemo",
    name_contains_nocase:
      overrides && overrides.hasOwnProperty("name_contains_nocase")
        ? overrides.name_contains_nocase!
        : "dicta",
    name_ends_with:
      overrides && overrides.hasOwnProperty("name_ends_with")
        ? overrides.name_ends_with!
        : "et",
    name_ends_with_nocase:
      overrides && overrides.hasOwnProperty("name_ends_with_nocase")
        ? overrides.name_ends_with_nocase!
        : "magni",
    name_gt:
      overrides && overrides.hasOwnProperty("name_gt")
        ? overrides.name_gt!
        : "molestiae",
    name_gte:
      overrides && overrides.hasOwnProperty("name_gte")
        ? overrides.name_gte!
        : "eos",
    name_in:
      overrides && overrides.hasOwnProperty("name_in")
        ? overrides.name_in!
        : ["vero"],
    name_lt:
      overrides && overrides.hasOwnProperty("name_lt")
        ? overrides.name_lt!
        : "est",
    name_lte:
      overrides && overrides.hasOwnProperty("name_lte")
        ? overrides.name_lte!
        : "ut",
    name_not:
      overrides && overrides.hasOwnProperty("name_not")
        ? overrides.name_not!
        : "necessitatibus",
    name_not_contains:
      overrides && overrides.hasOwnProperty("name_not_contains")
        ? overrides.name_not_contains!
        : "et",
    name_not_contains_nocase:
      overrides && overrides.hasOwnProperty("name_not_contains_nocase")
        ? overrides.name_not_contains_nocase!
        : "et",
    name_not_ends_with:
      overrides && overrides.hasOwnProperty("name_not_ends_with")
        ? overrides.name_not_ends_with!
        : "non",
    name_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("name_not_ends_with_nocase")
        ? overrides.name_not_ends_with_nocase!
        : "eum",
    name_not_in:
      overrides && overrides.hasOwnProperty("name_not_in")
        ? overrides.name_not_in!
        : ["aut"],
    name_not_starts_with:
      overrides && overrides.hasOwnProperty("name_not_starts_with")
        ? overrides.name_not_starts_with!
        : "voluptatem",
    name_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("name_not_starts_with_nocase")
        ? overrides.name_not_starts_with_nocase!
        : "illum",
    name_starts_with:
      overrides && overrides.hasOwnProperty("name_starts_with")
        ? overrides.name_starts_with!
        : "rem",
    name_starts_with_nocase:
      overrides && overrides.hasOwnProperty("name_starts_with_nocase")
        ? overrides.name_starts_with_nocase!
        : "modi",
    or:
      overrides && overrides.hasOwnProperty("or")
        ? overrides.or!
        : [
            relationshipsToOmit.has("Project_Filter")
              ? ({} as Project_Filter)
              : aProject_Filter({}, relationshipsToOmit),
          ],
    projectAddress:
      overrides && overrides.hasOwnProperty("projectAddress")
        ? overrides.projectAddress!
        : "nam",
    projectAddress_contains:
      overrides && overrides.hasOwnProperty("projectAddress_contains")
        ? overrides.projectAddress_contains!
        : "a",
    projectAddress_gt:
      overrides && overrides.hasOwnProperty("projectAddress_gt")
        ? overrides.projectAddress_gt!
        : "nam",
    projectAddress_gte:
      overrides && overrides.hasOwnProperty("projectAddress_gte")
        ? overrides.projectAddress_gte!
        : "ut",
    projectAddress_in:
      overrides && overrides.hasOwnProperty("projectAddress_in")
        ? overrides.projectAddress_in!
        : ["at"],
    projectAddress_lt:
      overrides && overrides.hasOwnProperty("projectAddress_lt")
        ? overrides.projectAddress_lt!
        : "ut",
    projectAddress_lte:
      overrides && overrides.hasOwnProperty("projectAddress_lte")
        ? overrides.projectAddress_lte!
        : "aut",
    projectAddress_not:
      overrides && overrides.hasOwnProperty("projectAddress_not")
        ? overrides.projectAddress_not!
        : "perspiciatis",
    projectAddress_not_contains:
      overrides && overrides.hasOwnProperty("projectAddress_not_contains")
        ? overrides.projectAddress_not_contains!
        : "autem",
    projectAddress_not_in:
      overrides && overrides.hasOwnProperty("projectAddress_not_in")
        ? overrides.projectAddress_not_in!
        : ["sed"],
    projectID:
      overrides && overrides.hasOwnProperty("projectID")
        ? overrides.projectID!
        : "repudiandae",
    projectID_contains:
      overrides && overrides.hasOwnProperty("projectID_contains")
        ? overrides.projectID_contains!
        : "est",
    projectID_contains_nocase:
      overrides && overrides.hasOwnProperty("projectID_contains_nocase")
        ? overrides.projectID_contains_nocase!
        : "fugiat",
    projectID_ends_with:
      overrides && overrides.hasOwnProperty("projectID_ends_with")
        ? overrides.projectID_ends_with!
        : "vel",
    projectID_ends_with_nocase:
      overrides && overrides.hasOwnProperty("projectID_ends_with_nocase")
        ? overrides.projectID_ends_with_nocase!
        : "vel",
    projectID_gt:
      overrides && overrides.hasOwnProperty("projectID_gt")
        ? overrides.projectID_gt!
        : "vel",
    projectID_gte:
      overrides && overrides.hasOwnProperty("projectID_gte")
        ? overrides.projectID_gte!
        : "iusto",
    projectID_in:
      overrides && overrides.hasOwnProperty("projectID_in")
        ? overrides.projectID_in!
        : ["quis"],
    projectID_lt:
      overrides && overrides.hasOwnProperty("projectID_lt")
        ? overrides.projectID_lt!
        : "nobis",
    projectID_lte:
      overrides && overrides.hasOwnProperty("projectID_lte")
        ? overrides.projectID_lte!
        : "dolor",
    projectID_not:
      overrides && overrides.hasOwnProperty("projectID_not")
        ? overrides.projectID_not!
        : "ex",
    projectID_not_contains:
      overrides && overrides.hasOwnProperty("projectID_not_contains")
        ? overrides.projectID_not_contains!
        : "labore",
    projectID_not_contains_nocase:
      overrides && overrides.hasOwnProperty("projectID_not_contains_nocase")
        ? overrides.projectID_not_contains_nocase!
        : "doloremque",
    projectID_not_ends_with:
      overrides && overrides.hasOwnProperty("projectID_not_ends_with")
        ? overrides.projectID_not_ends_with!
        : "non",
    projectID_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("projectID_not_ends_with_nocase")
        ? overrides.projectID_not_ends_with_nocase!
        : "accusantium",
    projectID_not_in:
      overrides && overrides.hasOwnProperty("projectID_not_in")
        ? overrides.projectID_not_in!
        : ["amet"],
    projectID_not_starts_with:
      overrides && overrides.hasOwnProperty("projectID_not_starts_with")
        ? overrides.projectID_not_starts_with!
        : "accusantium",
    projectID_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("projectID_not_starts_with_nocase")
        ? overrides.projectID_not_starts_with_nocase!
        : "ipsam",
    projectID_starts_with:
      overrides && overrides.hasOwnProperty("projectID_starts_with")
        ? overrides.projectID_starts_with!
        : "voluptatem",
    projectID_starts_with_nocase:
      overrides && overrides.hasOwnProperty("projectID_starts_with_nocase")
        ? overrides.projectID_starts_with_nocase!
        : "veniam",
    projectType:
      overrides && overrides.hasOwnProperty("projectType")
        ? overrides.projectType!
        : "explicabo",
    projectType_contains:
      overrides && overrides.hasOwnProperty("projectType_contains")
        ? overrides.projectType_contains!
        : "necessitatibus",
    projectType_contains_nocase:
      overrides && overrides.hasOwnProperty("projectType_contains_nocase")
        ? overrides.projectType_contains_nocase!
        : "quibusdam",
    projectType_ends_with:
      overrides && overrides.hasOwnProperty("projectType_ends_with")
        ? overrides.projectType_ends_with!
        : "eos",
    projectType_ends_with_nocase:
      overrides && overrides.hasOwnProperty("projectType_ends_with_nocase")
        ? overrides.projectType_ends_with_nocase!
        : "iure",
    projectType_gt:
      overrides && overrides.hasOwnProperty("projectType_gt")
        ? overrides.projectType_gt!
        : "sit",
    projectType_gte:
      overrides && overrides.hasOwnProperty("projectType_gte")
        ? overrides.projectType_gte!
        : "voluptate",
    projectType_in:
      overrides && overrides.hasOwnProperty("projectType_in")
        ? overrides.projectType_in!
        : ["doloribus"],
    projectType_lt:
      overrides && overrides.hasOwnProperty("projectType_lt")
        ? overrides.projectType_lt!
        : "harum",
    projectType_lte:
      overrides && overrides.hasOwnProperty("projectType_lte")
        ? overrides.projectType_lte!
        : "consequatur",
    projectType_not:
      overrides && overrides.hasOwnProperty("projectType_not")
        ? overrides.projectType_not!
        : "recusandae",
    projectType_not_contains:
      overrides && overrides.hasOwnProperty("projectType_not_contains")
        ? overrides.projectType_not_contains!
        : "consequuntur",
    projectType_not_contains_nocase:
      overrides && overrides.hasOwnProperty("projectType_not_contains_nocase")
        ? overrides.projectType_not_contains_nocase!
        : "soluta",
    projectType_not_ends_with:
      overrides && overrides.hasOwnProperty("projectType_not_ends_with")
        ? overrides.projectType_not_ends_with!
        : "earum",
    projectType_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("projectType_not_ends_with_nocase")
        ? overrides.projectType_not_ends_with_nocase!
        : "perferendis",
    projectType_not_in:
      overrides && overrides.hasOwnProperty("projectType_not_in")
        ? overrides.projectType_not_in!
        : ["voluptatum"],
    projectType_not_starts_with:
      overrides && overrides.hasOwnProperty("projectType_not_starts_with")
        ? overrides.projectType_not_starts_with!
        : "sed",
    projectType_not_starts_with_nocase:
      overrides &&
      overrides.hasOwnProperty("projectType_not_starts_with_nocase")
        ? overrides.projectType_not_starts_with_nocase!
        : "quaerat",
    projectType_starts_with:
      overrides && overrides.hasOwnProperty("projectType_starts_with")
        ? overrides.projectType_starts_with!
        : "modi",
    projectType_starts_with_nocase:
      overrides && overrides.hasOwnProperty("projectType_starts_with_nocase")
        ? overrides.projectType_starts_with_nocase!
        : "voluptas",
    region:
      overrides && overrides.hasOwnProperty("region")
        ? overrides.region!
        : "perferendis",
    region_contains:
      overrides && overrides.hasOwnProperty("region_contains")
        ? overrides.region_contains!
        : "in",
    region_contains_nocase:
      overrides && overrides.hasOwnProperty("region_contains_nocase")
        ? overrides.region_contains_nocase!
        : "praesentium",
    region_ends_with:
      overrides && overrides.hasOwnProperty("region_ends_with")
        ? overrides.region_ends_with!
        : "fuga",
    region_ends_with_nocase:
      overrides && overrides.hasOwnProperty("region_ends_with_nocase")
        ? overrides.region_ends_with_nocase!
        : "ad",
    region_gt:
      overrides && overrides.hasOwnProperty("region_gt")
        ? overrides.region_gt!
        : "velit",
    region_gte:
      overrides && overrides.hasOwnProperty("region_gte")
        ? overrides.region_gte!
        : "voluptatem",
    region_in:
      overrides && overrides.hasOwnProperty("region_in")
        ? overrides.region_in!
        : ["pariatur"],
    region_lt:
      overrides && overrides.hasOwnProperty("region_lt")
        ? overrides.region_lt!
        : "dolorem",
    region_lte:
      overrides && overrides.hasOwnProperty("region_lte")
        ? overrides.region_lte!
        : "laborum",
    region_not:
      overrides && overrides.hasOwnProperty("region_not")
        ? overrides.region_not!
        : "ratione",
    region_not_contains:
      overrides && overrides.hasOwnProperty("region_not_contains")
        ? overrides.region_not_contains!
        : "amet",
    region_not_contains_nocase:
      overrides && overrides.hasOwnProperty("region_not_contains_nocase")
        ? overrides.region_not_contains_nocase!
        : "maiores",
    region_not_ends_with:
      overrides && overrides.hasOwnProperty("region_not_ends_with")
        ? overrides.region_not_ends_with!
        : "nobis",
    region_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("region_not_ends_with_nocase")
        ? overrides.region_not_ends_with_nocase!
        : "quasi",
    region_not_in:
      overrides && overrides.hasOwnProperty("region_not_in")
        ? overrides.region_not_in!
        : ["veritatis"],
    region_not_starts_with:
      overrides && overrides.hasOwnProperty("region_not_starts_with")
        ? overrides.region_not_starts_with!
        : "aut",
    region_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("region_not_starts_with_nocase")
        ? overrides.region_not_starts_with_nocase!
        : "dicta",
    region_starts_with:
      overrides && overrides.hasOwnProperty("region_starts_with")
        ? overrides.region_starts_with!
        : "enim",
    region_starts_with_nocase:
      overrides && overrides.hasOwnProperty("region_starts_with_nocase")
        ? overrides.region_starts_with_nocase!
        : "et",
    registry:
      overrides && overrides.hasOwnProperty("registry")
        ? overrides.registry!
        : "itaque",
    registry_contains:
      overrides && overrides.hasOwnProperty("registry_contains")
        ? overrides.registry_contains!
        : "in",
    registry_contains_nocase:
      overrides && overrides.hasOwnProperty("registry_contains_nocase")
        ? overrides.registry_contains_nocase!
        : "culpa",
    registry_ends_with:
      overrides && overrides.hasOwnProperty("registry_ends_with")
        ? overrides.registry_ends_with!
        : "earum",
    registry_ends_with_nocase:
      overrides && overrides.hasOwnProperty("registry_ends_with_nocase")
        ? overrides.registry_ends_with_nocase!
        : "adipisci",
    registry_gt:
      overrides && overrides.hasOwnProperty("registry_gt")
        ? overrides.registry_gt!
        : "numquam",
    registry_gte:
      overrides && overrides.hasOwnProperty("registry_gte")
        ? overrides.registry_gte!
        : "quos",
    registry_in:
      overrides && overrides.hasOwnProperty("registry_in")
        ? overrides.registry_in!
        : ["quae"],
    registry_lt:
      overrides && overrides.hasOwnProperty("registry_lt")
        ? overrides.registry_lt!
        : "possimus",
    registry_lte:
      overrides && overrides.hasOwnProperty("registry_lte")
        ? overrides.registry_lte!
        : "ad",
    registry_not:
      overrides && overrides.hasOwnProperty("registry_not")
        ? overrides.registry_not!
        : "omnis",
    registry_not_contains:
      overrides && overrides.hasOwnProperty("registry_not_contains")
        ? overrides.registry_not_contains!
        : "ea",
    registry_not_contains_nocase:
      overrides && overrides.hasOwnProperty("registry_not_contains_nocase")
        ? overrides.registry_not_contains_nocase!
        : "a",
    registry_not_ends_with:
      overrides && overrides.hasOwnProperty("registry_not_ends_with")
        ? overrides.registry_not_ends_with!
        : "quibusdam",
    registry_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("registry_not_ends_with_nocase")
        ? overrides.registry_not_ends_with_nocase!
        : "quae",
    registry_not_in:
      overrides && overrides.hasOwnProperty("registry_not_in")
        ? overrides.registry_not_in!
        : ["quod"],
    registry_not_starts_with:
      overrides && overrides.hasOwnProperty("registry_not_starts_with")
        ? overrides.registry_not_starts_with!
        : "harum",
    registry_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("registry_not_starts_with_nocase")
        ? overrides.registry_not_starts_with_nocase!
        : "esse",
    registry_starts_with:
      overrides && overrides.hasOwnProperty("registry_starts_with")
        ? overrides.registry_starts_with!
        : "deleniti",
    registry_starts_with_nocase:
      overrides && overrides.hasOwnProperty("registry_starts_with_nocase")
        ? overrides.registry_starts_with_nocase!
        : "fugit",
    updatedAt:
      overrides && overrides.hasOwnProperty("updatedAt")
        ? overrides.updatedAt!
        : "id molestias fugit aut culpa quia id",
    updatedAt_gt:
      overrides && overrides.hasOwnProperty("updatedAt_gt")
        ? overrides.updatedAt_gt!
        : "soluta debitis optio ab id est sed",
    updatedAt_gte:
      overrides && overrides.hasOwnProperty("updatedAt_gte")
        ? overrides.updatedAt_gte!
        : "et aut eos optio ad non aspernatur",
    updatedAt_in:
      overrides && overrides.hasOwnProperty("updatedAt_in")
        ? overrides.updatedAt_in!
        : ["explicabo aut reiciendis error doloribus occaecati quod"],
    updatedAt_lt:
      overrides && overrides.hasOwnProperty("updatedAt_lt")
        ? overrides.updatedAt_lt!
        : "nihil quisquam adipisci odio et perspiciatis aperiam",
    updatedAt_lte:
      overrides && overrides.hasOwnProperty("updatedAt_lte")
        ? overrides.updatedAt_lte!
        : "quia voluptas error nam voluptas qui ipsam",
    updatedAt_not:
      overrides && overrides.hasOwnProperty("updatedAt_not")
        ? overrides.updatedAt_not!
        : "placeat est omnis nihil rerum asperiores tempore",
    updatedAt_not_in:
      overrides && overrides.hasOwnProperty("updatedAt_not_in")
        ? overrides.updatedAt_not_in!
        : ["et qui modi ut perferendis sunt eum"],
    vintage:
      overrides && overrides.hasOwnProperty("vintage")
        ? overrides.vintage!
        : "quod deleniti adipisci repellat laudantium et natus",
    vintage_gt:
      overrides && overrides.hasOwnProperty("vintage_gt")
        ? overrides.vintage_gt!
        : "qui non dolores harum consequuntur nihil sed",
    vintage_gte:
      overrides && overrides.hasOwnProperty("vintage_gte")
        ? overrides.vintage_gte!
        : "facere at omnis est perspiciatis delectus sit",
    vintage_in:
      overrides && overrides.hasOwnProperty("vintage_in")
        ? overrides.vintage_in!
        : ["sed enim omnis qui commodi ut omnis"],
    vintage_lt:
      overrides && overrides.hasOwnProperty("vintage_lt")
        ? overrides.vintage_lt!
        : "et nulla corporis laboriosam fugiat et aperiam",
    vintage_lte:
      overrides && overrides.hasOwnProperty("vintage_lte")
        ? overrides.vintage_lte!
        : "enim ullam quia illo sunt aut deserunt",
    vintage_not:
      overrides && overrides.hasOwnProperty("vintage_not")
        ? overrides.vintage_not!
        : "incidunt nobis ut cumque dolorum modi eaque",
    vintage_not_in:
      overrides && overrides.hasOwnProperty("vintage_not_in")
        ? overrides.vintage_not_in!
        : ["voluptas dolor id voluptate dolores cum ipsa"],
  };
};

export const aPurchase = (
  overrides?: Partial<Purchase>,
  _relationshipsToOmit: Set<string> = new Set()
): Purchase => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Purchase");
  return {
    amount:
      overrides && overrides.hasOwnProperty("amount")
        ? overrides.amount!
        : "corrupti atque consequatur ullam repellendus minima qui",
    id: overrides && overrides.hasOwnProperty("id") ? overrides.id! : "a",
    listing:
      overrides && overrides.hasOwnProperty("listing")
        ? overrides.listing!
        : relationshipsToOmit.has("Listing")
        ? ({} as Listing)
        : aListing({}, relationshipsToOmit),
    price:
      overrides && overrides.hasOwnProperty("price")
        ? overrides.price!
        : "incidunt facilis vitae eaque voluptates deleniti magni",
    timeStamp:
      overrides && overrides.hasOwnProperty("timeStamp")
        ? overrides.timeStamp!
        : "voluptas ut nulla tempore quia minima tempora",
    user:
      overrides && overrides.hasOwnProperty("user")
        ? overrides.user!
        : relationshipsToOmit.has("User")
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
  };
};

export const aPurchase_Filter = (
  overrides?: Partial<Purchase_Filter>,
  _relationshipsToOmit: Set<string> = new Set()
): Purchase_Filter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Purchase_Filter");
  return {
    _change_block:
      overrides && overrides.hasOwnProperty("_change_block")
        ? overrides._change_block!
        : relationshipsToOmit.has("BlockChangedFilter")
        ? ({} as BlockChangedFilter)
        : aBlockChangedFilter({}, relationshipsToOmit),
    amount:
      overrides && overrides.hasOwnProperty("amount")
        ? overrides.amount!
        : "aut quidem asperiores quia sit sequi corrupti",
    amount_gt:
      overrides && overrides.hasOwnProperty("amount_gt")
        ? overrides.amount_gt!
        : "iste quis beatae iste quisquam esse delectus",
    amount_gte:
      overrides && overrides.hasOwnProperty("amount_gte")
        ? overrides.amount_gte!
        : "et amet natus sint temporibus et quas",
    amount_in:
      overrides && overrides.hasOwnProperty("amount_in")
        ? overrides.amount_in!
        : ["sit architecto porro ea quia et rerum"],
    amount_lt:
      overrides && overrides.hasOwnProperty("amount_lt")
        ? overrides.amount_lt!
        : "et quidem dolorem explicabo unde explicabo quis",
    amount_lte:
      overrides && overrides.hasOwnProperty("amount_lte")
        ? overrides.amount_lte!
        : "nulla odio omnis incidunt necessitatibus eum atque",
    amount_not:
      overrides && overrides.hasOwnProperty("amount_not")
        ? overrides.amount_not!
        : "velit placeat magni voluptatem magnam ducimus id",
    amount_not_in:
      overrides && overrides.hasOwnProperty("amount_not_in")
        ? overrides.amount_not_in!
        : ["et accusantium corporis dicta et praesentium ullam"],
    and:
      overrides && overrides.hasOwnProperty("and")
        ? overrides.and!
        : [
            relationshipsToOmit.has("Purchase_Filter")
              ? ({} as Purchase_Filter)
              : aPurchase_Filter({}, relationshipsToOmit),
          ],
    id:
      overrides && overrides.hasOwnProperty("id") ? overrides.id! : "voluptas",
    id_contains:
      overrides && overrides.hasOwnProperty("id_contains")
        ? overrides.id_contains!
        : "voluptatem",
    id_gt:
      overrides && overrides.hasOwnProperty("id_gt") ? overrides.id_gt! : "sed",
    id_gte:
      overrides && overrides.hasOwnProperty("id_gte")
        ? overrides.id_gte!
        : "ut",
    id_in:
      overrides && overrides.hasOwnProperty("id_in")
        ? overrides.id_in!
        : ["quo"],
    id_lt:
      overrides && overrides.hasOwnProperty("id_lt")
        ? overrides.id_lt!
        : "error",
    id_lte:
      overrides && overrides.hasOwnProperty("id_lte")
        ? overrides.id_lte!
        : "totam",
    id_not:
      overrides && overrides.hasOwnProperty("id_not")
        ? overrides.id_not!
        : "error",
    id_not_contains:
      overrides && overrides.hasOwnProperty("id_not_contains")
        ? overrides.id_not_contains!
        : "error",
    id_not_in:
      overrides && overrides.hasOwnProperty("id_not_in")
        ? overrides.id_not_in!
        : ["doloremque"],
    listing:
      overrides && overrides.hasOwnProperty("listing")
        ? overrides.listing!
        : "dolores",
    listing_:
      overrides && overrides.hasOwnProperty("listing_")
        ? overrides.listing_!
        : relationshipsToOmit.has("Listing_Filter")
        ? ({} as Listing_Filter)
        : aListing_Filter({}, relationshipsToOmit),
    listing_contains:
      overrides && overrides.hasOwnProperty("listing_contains")
        ? overrides.listing_contains!
        : "velit",
    listing_contains_nocase:
      overrides && overrides.hasOwnProperty("listing_contains_nocase")
        ? overrides.listing_contains_nocase!
        : "rerum",
    listing_ends_with:
      overrides && overrides.hasOwnProperty("listing_ends_with")
        ? overrides.listing_ends_with!
        : "quibusdam",
    listing_ends_with_nocase:
      overrides && overrides.hasOwnProperty("listing_ends_with_nocase")
        ? overrides.listing_ends_with_nocase!
        : "consequatur",
    listing_gt:
      overrides && overrides.hasOwnProperty("listing_gt")
        ? overrides.listing_gt!
        : "praesentium",
    listing_gte:
      overrides && overrides.hasOwnProperty("listing_gte")
        ? overrides.listing_gte!
        : "unde",
    listing_in:
      overrides && overrides.hasOwnProperty("listing_in")
        ? overrides.listing_in!
        : ["et"],
    listing_lt:
      overrides && overrides.hasOwnProperty("listing_lt")
        ? overrides.listing_lt!
        : "id",
    listing_lte:
      overrides && overrides.hasOwnProperty("listing_lte")
        ? overrides.listing_lte!
        : "est",
    listing_not:
      overrides && overrides.hasOwnProperty("listing_not")
        ? overrides.listing_not!
        : "voluptatem",
    listing_not_contains:
      overrides && overrides.hasOwnProperty("listing_not_contains")
        ? overrides.listing_not_contains!
        : "quis",
    listing_not_contains_nocase:
      overrides && overrides.hasOwnProperty("listing_not_contains_nocase")
        ? overrides.listing_not_contains_nocase!
        : "corporis",
    listing_not_ends_with:
      overrides && overrides.hasOwnProperty("listing_not_ends_with")
        ? overrides.listing_not_ends_with!
        : "ex",
    listing_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("listing_not_ends_with_nocase")
        ? overrides.listing_not_ends_with_nocase!
        : "eaque",
    listing_not_in:
      overrides && overrides.hasOwnProperty("listing_not_in")
        ? overrides.listing_not_in!
        : ["dolorem"],
    listing_not_starts_with:
      overrides && overrides.hasOwnProperty("listing_not_starts_with")
        ? overrides.listing_not_starts_with!
        : "culpa",
    listing_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("listing_not_starts_with_nocase")
        ? overrides.listing_not_starts_with_nocase!
        : "nesciunt",
    listing_starts_with:
      overrides && overrides.hasOwnProperty("listing_starts_with")
        ? overrides.listing_starts_with!
        : "excepturi",
    listing_starts_with_nocase:
      overrides && overrides.hasOwnProperty("listing_starts_with_nocase")
        ? overrides.listing_starts_with_nocase!
        : "est",
    or:
      overrides && overrides.hasOwnProperty("or")
        ? overrides.or!
        : [
            relationshipsToOmit.has("Purchase_Filter")
              ? ({} as Purchase_Filter)
              : aPurchase_Filter({}, relationshipsToOmit),
          ],
    price:
      overrides && overrides.hasOwnProperty("price")
        ? overrides.price!
        : "eaque consequatur ducimus corporis animi porro dolor",
    price_gt:
      overrides && overrides.hasOwnProperty("price_gt")
        ? overrides.price_gt!
        : "quod eius nemo modi qui doloribus hic",
    price_gte:
      overrides && overrides.hasOwnProperty("price_gte")
        ? overrides.price_gte!
        : "nisi temporibus veritatis deleniti soluta aliquid natus",
    price_in:
      overrides && overrides.hasOwnProperty("price_in")
        ? overrides.price_in!
        : ["pariatur porro ex ducimus quae officia cumque"],
    price_lt:
      overrides && overrides.hasOwnProperty("price_lt")
        ? overrides.price_lt!
        : "dolore distinctio rem consequatur officiis fugit et",
    price_lte:
      overrides && overrides.hasOwnProperty("price_lte")
        ? overrides.price_lte!
        : "corporis architecto illum optio ad eum nihil",
    price_not:
      overrides && overrides.hasOwnProperty("price_not")
        ? overrides.price_not!
        : "et qui ex deserunt tempora et et",
    price_not_in:
      overrides && overrides.hasOwnProperty("price_not_in")
        ? overrides.price_not_in!
        : ["dolorem in quis esse ducimus totam voluptatem"],
    timeStamp:
      overrides && overrides.hasOwnProperty("timeStamp")
        ? overrides.timeStamp!
        : "explicabo impedit nam accusantium nulla fugit quasi",
    timeStamp_gt:
      overrides && overrides.hasOwnProperty("timeStamp_gt")
        ? overrides.timeStamp_gt!
        : "consequatur aut consequatur exercitationem enim quos perspiciatis",
    timeStamp_gte:
      overrides && overrides.hasOwnProperty("timeStamp_gte")
        ? overrides.timeStamp_gte!
        : "consequatur eveniet doloremque quia qui animi et",
    timeStamp_in:
      overrides && overrides.hasOwnProperty("timeStamp_in")
        ? overrides.timeStamp_in!
        : ["quod corrupti distinctio accusantium sapiente vel consequuntur"],
    timeStamp_lt:
      overrides && overrides.hasOwnProperty("timeStamp_lt")
        ? overrides.timeStamp_lt!
        : "corrupti non molestiae est maiores soluta aliquid",
    timeStamp_lte:
      overrides && overrides.hasOwnProperty("timeStamp_lte")
        ? overrides.timeStamp_lte!
        : "recusandae ducimus earum asperiores modi amet similique",
    timeStamp_not:
      overrides && overrides.hasOwnProperty("timeStamp_not")
        ? overrides.timeStamp_not!
        : "ut omnis dolorem impedit ut dolorem omnis",
    timeStamp_not_in:
      overrides && overrides.hasOwnProperty("timeStamp_not_in")
        ? overrides.timeStamp_not_in!
        : ["ipsa tenetur nobis at aliquam est voluptatibus"],
    user:
      overrides && overrides.hasOwnProperty("user") ? overrides.user! : "ut",
    user_:
      overrides && overrides.hasOwnProperty("user_")
        ? overrides.user_!
        : relationshipsToOmit.has("User_Filter")
        ? ({} as User_Filter)
        : aUser_Filter({}, relationshipsToOmit),
    user_contains:
      overrides && overrides.hasOwnProperty("user_contains")
        ? overrides.user_contains!
        : "velit",
    user_contains_nocase:
      overrides && overrides.hasOwnProperty("user_contains_nocase")
        ? overrides.user_contains_nocase!
        : "nostrum",
    user_ends_with:
      overrides && overrides.hasOwnProperty("user_ends_with")
        ? overrides.user_ends_with!
        : "qui",
    user_ends_with_nocase:
      overrides && overrides.hasOwnProperty("user_ends_with_nocase")
        ? overrides.user_ends_with_nocase!
        : "ut",
    user_gt:
      overrides && overrides.hasOwnProperty("user_gt")
        ? overrides.user_gt!
        : "quo",
    user_gte:
      overrides && overrides.hasOwnProperty("user_gte")
        ? overrides.user_gte!
        : "vitae",
    user_in:
      overrides && overrides.hasOwnProperty("user_in")
        ? overrides.user_in!
        : ["iusto"],
    user_lt:
      overrides && overrides.hasOwnProperty("user_lt")
        ? overrides.user_lt!
        : "qui",
    user_lte:
      overrides && overrides.hasOwnProperty("user_lte")
        ? overrides.user_lte!
        : "excepturi",
    user_not:
      overrides && overrides.hasOwnProperty("user_not")
        ? overrides.user_not!
        : "rem",
    user_not_contains:
      overrides && overrides.hasOwnProperty("user_not_contains")
        ? overrides.user_not_contains!
        : "explicabo",
    user_not_contains_nocase:
      overrides && overrides.hasOwnProperty("user_not_contains_nocase")
        ? overrides.user_not_contains_nocase!
        : "veniam",
    user_not_ends_with:
      overrides && overrides.hasOwnProperty("user_not_ends_with")
        ? overrides.user_not_ends_with!
        : "ut",
    user_not_ends_with_nocase:
      overrides && overrides.hasOwnProperty("user_not_ends_with_nocase")
        ? overrides.user_not_ends_with_nocase!
        : "harum",
    user_not_in:
      overrides && overrides.hasOwnProperty("user_not_in")
        ? overrides.user_not_in!
        : ["est"],
    user_not_starts_with:
      overrides && overrides.hasOwnProperty("user_not_starts_with")
        ? overrides.user_not_starts_with!
        : "consequuntur",
    user_not_starts_with_nocase:
      overrides && overrides.hasOwnProperty("user_not_starts_with_nocase")
        ? overrides.user_not_starts_with_nocase!
        : "molestiae",
    user_starts_with:
      overrides && overrides.hasOwnProperty("user_starts_with")
        ? overrides.user_starts_with!
        : "earum",
    user_starts_with_nocase:
      overrides && overrides.hasOwnProperty("user_starts_with_nocase")
        ? overrides.user_starts_with_nocase!
        : "et",
  };
};

export const aQuery = (
  overrides?: Partial<Query>,
  _relationshipsToOmit: Set<string> = new Set()
): Query => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Query");
  return {
    _meta:
      overrides && overrides.hasOwnProperty("_meta")
        ? overrides._meta!
        : relationshipsToOmit.has("_Meta_")
        ? ({} as _Meta_)
        : a_Meta_({}, relationshipsToOmit),
    activities:
      overrides && overrides.hasOwnProperty("activities")
        ? overrides.activities!
        : [
            relationshipsToOmit.has("Activity")
              ? ({} as Activity)
              : anActivity({}, relationshipsToOmit),
          ],
    activity:
      overrides && overrides.hasOwnProperty("activity")
        ? overrides.activity!
        : relationshipsToOmit.has("Activity")
        ? ({} as Activity)
        : anActivity({}, relationshipsToOmit),
    categories:
      overrides && overrides.hasOwnProperty("categories")
        ? overrides.categories!
        : [
            relationshipsToOmit.has("Category")
              ? ({} as Category)
              : aCategory({}, relationshipsToOmit),
          ],
    category:
      overrides && overrides.hasOwnProperty("category")
        ? overrides.category!
        : relationshipsToOmit.has("Category")
        ? ({} as Category)
        : aCategory({}, relationshipsToOmit),
    countries:
      overrides && overrides.hasOwnProperty("countries")
        ? overrides.countries!
        : [
            relationshipsToOmit.has("Country")
              ? ({} as Country)
              : aCountry({}, relationshipsToOmit),
          ],
    country:
      overrides && overrides.hasOwnProperty("country")
        ? overrides.country!
        : relationshipsToOmit.has("Country")
        ? ({} as Country)
        : aCountry({}, relationshipsToOmit),
    listing:
      overrides && overrides.hasOwnProperty("listing")
        ? overrides.listing!
        : relationshipsToOmit.has("Listing")
        ? ({} as Listing)
        : aListing({}, relationshipsToOmit),
    listings:
      overrides && overrides.hasOwnProperty("listings")
        ? overrides.listings!
        : [
            relationshipsToOmit.has("Listing")
              ? ({} as Listing)
              : aListing({}, relationshipsToOmit),
          ],
    project:
      overrides && overrides.hasOwnProperty("project")
        ? overrides.project!
        : relationshipsToOmit.has("Project")
        ? ({} as Project)
        : aProject({}, relationshipsToOmit),
    projects:
      overrides && overrides.hasOwnProperty("projects")
        ? overrides.projects!
        : [
            relationshipsToOmit.has("Project")
              ? ({} as Project)
              : aProject({}, relationshipsToOmit),
          ],
    purchase:
      overrides && overrides.hasOwnProperty("purchase")
        ? overrides.purchase!
        : relationshipsToOmit.has("Purchase")
        ? ({} as Purchase)
        : aPurchase({}, relationshipsToOmit),
    purchases:
      overrides && overrides.hasOwnProperty("purchases")
        ? overrides.purchases!
        : [
            relationshipsToOmit.has("Purchase")
              ? ({} as Purchase)
              : aPurchase({}, relationshipsToOmit),
          ],
    user:
      overrides && overrides.hasOwnProperty("user")
        ? overrides.user!
        : relationshipsToOmit.has("User")
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
    users:
      overrides && overrides.hasOwnProperty("users")
        ? overrides.users!
        : [
            relationshipsToOmit.has("User")
              ? ({} as User)
              : aUser({}, relationshipsToOmit),
          ],
  };
};

export const aSubscription = (
  overrides?: Partial<Subscription>,
  _relationshipsToOmit: Set<string> = new Set()
): Subscription => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("Subscription");
  return {
    _meta:
      overrides && overrides.hasOwnProperty("_meta")
        ? overrides._meta!
        : relationshipsToOmit.has("_Meta_")
        ? ({} as _Meta_)
        : a_Meta_({}, relationshipsToOmit),
    activities:
      overrides && overrides.hasOwnProperty("activities")
        ? overrides.activities!
        : [
            relationshipsToOmit.has("Activity")
              ? ({} as Activity)
              : anActivity({}, relationshipsToOmit),
          ],
    activity:
      overrides && overrides.hasOwnProperty("activity")
        ? overrides.activity!
        : relationshipsToOmit.has("Activity")
        ? ({} as Activity)
        : anActivity({}, relationshipsToOmit),
    categories:
      overrides && overrides.hasOwnProperty("categories")
        ? overrides.categories!
        : [
            relationshipsToOmit.has("Category")
              ? ({} as Category)
              : aCategory({}, relationshipsToOmit),
          ],
    category:
      overrides && overrides.hasOwnProperty("category")
        ? overrides.category!
        : relationshipsToOmit.has("Category")
        ? ({} as Category)
        : aCategory({}, relationshipsToOmit),
    countries:
      overrides && overrides.hasOwnProperty("countries")
        ? overrides.countries!
        : [
            relationshipsToOmit.has("Country")
              ? ({} as Country)
              : aCountry({}, relationshipsToOmit),
          ],
    country:
      overrides && overrides.hasOwnProperty("country")
        ? overrides.country!
        : relationshipsToOmit.has("Country")
        ? ({} as Country)
        : aCountry({}, relationshipsToOmit),
    listing:
      overrides && overrides.hasOwnProperty("listing")
        ? overrides.listing!
        : relationshipsToOmit.has("Listing")
        ? ({} as Listing)
        : aListing({}, relationshipsToOmit),
    listings:
      overrides && overrides.hasOwnProperty("listings")
        ? overrides.listings!
        : [
            relationshipsToOmit.has("Listing")
              ? ({} as Listing)
              : aListing({}, relationshipsToOmit),
          ],
    project:
      overrides && overrides.hasOwnProperty("project")
        ? overrides.project!
        : relationshipsToOmit.has("Project")
        ? ({} as Project)
        : aProject({}, relationshipsToOmit),
    projects:
      overrides && overrides.hasOwnProperty("projects")
        ? overrides.projects!
        : [
            relationshipsToOmit.has("Project")
              ? ({} as Project)
              : aProject({}, relationshipsToOmit),
          ],
    purchase:
      overrides && overrides.hasOwnProperty("purchase")
        ? overrides.purchase!
        : relationshipsToOmit.has("Purchase")
        ? ({} as Purchase)
        : aPurchase({}, relationshipsToOmit),
    purchases:
      overrides && overrides.hasOwnProperty("purchases")
        ? overrides.purchases!
        : [
            relationshipsToOmit.has("Purchase")
              ? ({} as Purchase)
              : aPurchase({}, relationshipsToOmit),
          ],
    user:
      overrides && overrides.hasOwnProperty("user")
        ? overrides.user!
        : relationshipsToOmit.has("User")
        ? ({} as User)
        : aUser({}, relationshipsToOmit),
    users:
      overrides && overrides.hasOwnProperty("users")
        ? overrides.users!
        : [
            relationshipsToOmit.has("User")
              ? ({} as User)
              : aUser({}, relationshipsToOmit),
          ],
  };
};

export const aUser = (
  overrides?: Partial<User>,
  _relationshipsToOmit: Set<string> = new Set()
): User => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("User");
  return {
    activities:
      overrides && overrides.hasOwnProperty("activities")
        ? overrides.activities!
        : [
            relationshipsToOmit.has("Activity")
              ? ({} as Activity)
              : anActivity({}, relationshipsToOmit),
          ],
    id: overrides && overrides.hasOwnProperty("id") ? overrides.id! : "est",
    listings:
      overrides && overrides.hasOwnProperty("listings")
        ? overrides.listings!
        : [
            relationshipsToOmit.has("Listing")
              ? ({} as Listing)
              : aListing({}, relationshipsToOmit),
          ],
    purchases:
      overrides && overrides.hasOwnProperty("purchases")
        ? overrides.purchases!
        : [
            relationshipsToOmit.has("Purchase")
              ? ({} as Purchase)
              : aPurchase({}, relationshipsToOmit),
          ],
  };
};

export const aUser_Filter = (
  overrides?: Partial<User_Filter>,
  _relationshipsToOmit: Set<string> = new Set()
): User_Filter => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("User_Filter");
  return {
    _change_block:
      overrides && overrides.hasOwnProperty("_change_block")
        ? overrides._change_block!
        : relationshipsToOmit.has("BlockChangedFilter")
        ? ({} as BlockChangedFilter)
        : aBlockChangedFilter({}, relationshipsToOmit),
    activities_:
      overrides && overrides.hasOwnProperty("activities_")
        ? overrides.activities_!
        : relationshipsToOmit.has("Activity_Filter")
        ? ({} as Activity_Filter)
        : anActivity_Filter({}, relationshipsToOmit),
    and:
      overrides && overrides.hasOwnProperty("and")
        ? overrides.and!
        : [
            relationshipsToOmit.has("User_Filter")
              ? ({} as User_Filter)
              : aUser_Filter({}, relationshipsToOmit),
          ],
    id: overrides && overrides.hasOwnProperty("id") ? overrides.id! : "rerum",
    id_contains:
      overrides && overrides.hasOwnProperty("id_contains")
        ? overrides.id_contains!
        : "quaerat",
    id_gt:
      overrides && overrides.hasOwnProperty("id_gt")
        ? overrides.id_gt!
        : "corrupti",
    id_gte:
      overrides && overrides.hasOwnProperty("id_gte")
        ? overrides.id_gte!
        : "sunt",
    id_in:
      overrides && overrides.hasOwnProperty("id_in")
        ? overrides.id_in!
        : ["et"],
    id_lt:
      overrides && overrides.hasOwnProperty("id_lt")
        ? overrides.id_lt!
        : "placeat",
    id_lte:
      overrides && overrides.hasOwnProperty("id_lte")
        ? overrides.id_lte!
        : "dolores",
    id_not:
      overrides && overrides.hasOwnProperty("id_not")
        ? overrides.id_not!
        : "accusantium",
    id_not_contains:
      overrides && overrides.hasOwnProperty("id_not_contains")
        ? overrides.id_not_contains!
        : "facere",
    id_not_in:
      overrides && overrides.hasOwnProperty("id_not_in")
        ? overrides.id_not_in!
        : ["non"],
    listings_:
      overrides && overrides.hasOwnProperty("listings_")
        ? overrides.listings_!
        : relationshipsToOmit.has("Listing_Filter")
        ? ({} as Listing_Filter)
        : aListing_Filter({}, relationshipsToOmit),
    or:
      overrides && overrides.hasOwnProperty("or")
        ? overrides.or!
        : [
            relationshipsToOmit.has("User_Filter")
              ? ({} as User_Filter)
              : aUser_Filter({}, relationshipsToOmit),
          ],
    purchases_:
      overrides && overrides.hasOwnProperty("purchases_")
        ? overrides.purchases_!
        : relationshipsToOmit.has("Purchase_Filter")
        ? ({} as Purchase_Filter)
        : aPurchase_Filter({}, relationshipsToOmit),
  };
};

export const a_Block_ = (
  overrides?: Partial<_Block_>,
  _relationshipsToOmit: Set<string> = new Set()
): _Block_ => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("_Block_");
  return {
    hash:
      overrides && overrides.hasOwnProperty("hash") ? overrides.hash! : "ex",
    number:
      overrides && overrides.hasOwnProperty("number")
        ? overrides.number!
        : 1599,
    timestamp:
      overrides && overrides.hasOwnProperty("timestamp")
        ? overrides.timestamp!
        : 1310,
  };
};

export const a_Meta_ = (
  overrides?: Partial<_Meta_>,
  _relationshipsToOmit: Set<string> = new Set()
): _Meta_ => {
  const relationshipsToOmit: Set<string> = new Set(_relationshipsToOmit);
  relationshipsToOmit.add("_Meta_");
  return {
    block:
      overrides && overrides.hasOwnProperty("block")
        ? overrides.block!
        : relationshipsToOmit.has("_Block_")
        ? ({} as _Block_)
        : a_Block_({}, relationshipsToOmit),
    deployment:
      overrides && overrides.hasOwnProperty("deployment")
        ? overrides.deployment!
        : "ut",
    hasIndexingErrors:
      overrides && overrides.hasOwnProperty("hasIndexingErrors")
        ? overrides.hasIndexingErrors!
        : false,
  };
};