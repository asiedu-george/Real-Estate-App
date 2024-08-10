export interface Listing {
    count: number;
    total: number;
    results: SearchHome[];
}

interface SearchHome {
    property_id: string;
    listing_id: string;
    plan_id: string | null;
    status: string;
    photo_count: number;
    branding: Branding[];
    location: SearchHomeLocation;
    open_houses: null;
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
    list_price: number | null;
    list_price_min: number | null;
    list_price_max: number | null;
    price_reduced_amount: number | null;
    estimate: LatestEstimate | null;
    lead_attributes: LeadAttributes;
    last_sold_date: string | null;
    list_date: string;
    products: ProductSummary | null;
    last_sold_price: number | null;
}
  
interface Branding {
    photo: string | null;
    name: string | null;
    phone: string | null;
    link: string | null;
}
  
interface SearchHomeLocation {
    address: SearchHomeAddress;
    street_view_url: string;
    county: HomeCounty;
}
  
interface SearchHomeAddress {
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
  
interface Coordinate {
    lat: number;
    lon: number;
    accuracy: number | null;
}
  
interface HomeCounty {
    fips_code: string;
}
  
interface SearchHomeDescription {
    sub_type: string | null;
    type: string;
    beds: number | null;
    baths: number | null;
    lot_sqft: number | null;
    sqft: number | null;
    beds_max: number | null;
    beds_min: number | null;
    sqft_max: number | null;
    sqft_min: number | null;
    baths_full: number | null;
    baths_half: number | null;
    baths_min: number | null;
    baths_max: number | null;
    baths_full_calc: number;
    baths_partial_calc: number | null;
}
  
interface HomeAdvertiser {
    fulfillment_id: string | null;
    name: string | null;
    email: string | null;
    href: string | null;
    slogan: string | null;
    type: string;
}
  
interface HomeFlags {
    is_price_reduced: boolean | null;
    is_new_construction: boolean | null;
    is_foreclosure: boolean | null;
    is_plan: boolean | null;
    is_new_listing: boolean;
    is_coming_soon: boolean | null;
    is_contingent: boolean | null;
    is_pending: boolean | null;
}
  
interface MlsSource {
    agents: MlsAgent[] | null;
    id: string;
    type: string;
    spec_id: string | null;
    plan_id: string | null;
    listing_href: string | null;
    listing_id: string;
}
  
interface MlsAgent {
    id: string;
    agent_id: string;
    agent_name: string;
    office_id: string;
    office_name: string | null;
}
  
interface HomePetPolicy {
    cats: boolean;
    dogs: boolean;
}
  
interface HomePhoto {
    href: string;
}
  
interface LatestEstimate {
    estimate: number;
}
  
interface LeadAttributes {
    lead_type: string;
    show_contact_an_agent: boolean;
    opcity_lead_attributes: OpCityLeadAttributes;
}
  
interface OpCityLeadAttributes {
    flip_the_market_enabled: boolean;
}
  
interface ProductSummary {
    brand_name: string;
    products: string[];
}