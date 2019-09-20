import { UserService } from '../../user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: any): Promise<import("../../models/entities/user.entity").User>;
}
export {};
