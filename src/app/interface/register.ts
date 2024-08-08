export interface Register {
    additional_properties: {
        address: {city: string}
    },
    email: string,
    first_name: string,
    last_name: string,
    password: string
}

export interface RegisterResponse {
    message: string
}