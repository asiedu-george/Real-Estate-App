export interface UpdatePassword {
    new_password: string,
    old_password: string
}

export interface UpdatePasswordResponse {
    message: string
}