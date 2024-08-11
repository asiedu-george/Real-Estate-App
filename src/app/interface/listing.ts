export interface HomeListingResponse {
    data: {
        home_search: HomeSearchResult;
    };
}

export interface HomeSearchResult {
    __typename: string;
    count: number;
    total: number;
    results: SearchHome[];
}

export interface SearchHome {
    __typename: string;
    property_id: string;
    listing_id: string;
    plan_id: string | null;
    status: string;
    photo_count: number;
    branding: Branding[];
    location: SearchHomeLocation;
    open_houses: HomeOpenHouse[] | null;
    description: SearchHomeDescription;
    virtual_tours: null;
    matterport: boolean;
    advertisers: HomeAdvertiser[];
    flags: HomeFlags;
    source: MlsSource;
    pet_policy: HomePetPolicy | null;
    community: null;
    primary_photo: HomePhoto;
    href: string;
    list_price: number;
    list_price_min: number | null;
    list_price_max: number | null;
    price_reduced_amount: number | null;
    estimate: LatestEstimate | null;
    lead_attributes: LeadAttributes;
    last_sold_date: string | null;
    list_date: string;
    products: ProductSummary;
    last_sold_price: number | null;
}

export interface Branding {
    __typename: string;
    photo: string | null;
    name: string;
    phone: string | null;
    link: string | null;
}

export interface SearchHomeLocation {
    __typename: string;
    address: SearchHomeAddress;
    street_view_url: string;
    county: HomeCounty;
}

export interface SearchHomeAddress {
    __typename: string;
    city: string;
    line: string;
    street_name: string;
    street_number: string;
    street_suffix: string;
    country: string;
    postal_code: string;
    state_code: string;
    state: string;
    coordinate: Coordinate;
}

export interface Coordinate {
    __typename: string;
    lat: number;
    lon: number;
    accuracy: number | null;
}

export interface HomeCounty {
    __typename: string;
    fips_code: string;
}

export interface SearchHomeDescription {
    __typename: string;
    sub_type: string;
    type: string;
    beds: number;
    baths: number;
    lot_sqft: number;
    sqft: number;
    beds_max: number | null;
    beds_min: number | null;
    sqft_max: number | null;
    sqft_min: number | null;
    baths_full: number;
    baths_half: number | null;
    baths_min: number | null;
    baths_max: number | null;
    baths_full_calc: number;
    baths_partial_calc: number | null;
}

export interface HomeAdvertiser {
    __typename: string;
    fulfillment_id: string;
    name: string;
    email: string;
    href: string | null;
    slogan: string | null;
    type: string;
}

export interface HomeFlags {
    __typename: string;
    is_price_reduced: boolean | null;
    is_new_construction: boolean | null;
    is_foreclosure: boolean | null;
    is_plan: boolean | null;
    is_new_listing: boolean;
    is_coming_soon: boolean | null;
    is_contingent: boolean | null;
    is_pending: boolean | null;
}

export interface MlsSource {
    __typename: string;
    agents: MlsAgent[];
    id: string;
    type: string;
    spec_id: string | null;
    plan_id: string | null;
    listing_href: string | null;
    listing_id: string;
}

export interface MlsAgent {
    __typename: string;
    id: string;
    agent_id: string;
    agent_name: string;
    office_id: string;
    office_name: string;
}

export interface HomePhoto {
    __typename: string;
    href: string;
}

export interface LeadAttributes {
    __typename: string;
    lead_type: string;
    show_contact_an_agent: boolean;
    opcity_lead_attributes: OpCityLeadAttributes;
}

export interface OpCityLeadAttributes {
    __typename: string;
    flip_the_market_enabled: boolean;
}

export interface ProductSummary {
    __typename: string;
    brand_name: string;
    products: string[];
}

export interface HomePetPolicy {
    __typename: string;
    cats: boolean;
    dogs: boolean;
}

export interface HomeOpenHouse {
    __typename: string;
    start_date: string;
    end_date: string;
    description: string | null;
    time_zone: string;
}

export interface LatestEstimate {
    __typename: string;
    estimate: number;
}