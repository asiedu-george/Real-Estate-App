export interface UserProfile {
    additional_properties: {
        address: {city: string}
    },
    email: string,
    first_name: string,
    last_name: string,
    id: string
}

export interface UserDetails {
    email: string;
    role: string;
    firstname: string;
    lastname: string;
    client: string;
    exp: number;
  }