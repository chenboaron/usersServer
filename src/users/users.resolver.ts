import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/models/user.model';
import { UserDTO, UserInputDTO } from './DTO/user.dto';
import { UsersService } from './users.service';


@Resolver()
export class UsersResolver {
    constructor(private srv: UsersService) { }

    @Query(returns => [UserDTO])
    getAllUsers() {        
        return this.srv.getAllUsers();
    }

    @Mutation(returns => UserDTO)
    addUser(@Args('user') u: UserInputDTO): Promise<User> {
        return this.srv.addUser(u);
    }

    @Mutation(returns => UserDTO)
    updateUser(@Args('user') u: UserInputDTO): Promise<User> {
        console.log(u);
        
        return this.srv.updateUser(u);
    }

    @Mutation(returns => UserDTO)
    deleteUser(@Args('id') id: string): Promise<User> {
        return this.srv.deleteUser(id);
    }
}
