export interface CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly avatarUrlRelative: string;
}