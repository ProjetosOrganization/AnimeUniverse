import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { DeleteUserUseCase } from "src/core/context/user/use-case/delete-user-usecase";import { PatchUserUseCase } from "src/core/context/user/use-case/patch-user-usecase";
import { GetUserUseCase, AddUserUseCase, UserInputDto, UserCpfInputDto }
    from "../../core/context/user";

    

@ApiTags('User')
@Controller('/user')
export class UserController {
    constructor(
        public getUserUseCase: GetUserUseCase,
        public addUserUseCase: AddUserUseCase,
        public patchUserUseCase: PatchUserUseCase,
        public deleteUserUseCase: DeleteUserUseCase,
    ) { }


    // @Get('/')
    // @ApiResponse({ status: HttpStatus.NOT_ACCEPTABLE})
    // @ApiResponse({ status:HttpStatus.NOT_FOUND})
    // async getUser(@ParsedRequest() req: CrudRequest) {
    //     return this.getUserUseCase.getUserByCpf(await (req));
    // }

    @Get('/')
    @ApiResponse({ status: HttpStatus.NOT_ACCEPTABLE})
    @ApiResponse({ status:HttpStatus.NOT_FOUND})
    getUser(@Body() userCpfInputDto: UserCpfInputDto) {
        return this.getUserUseCase.getUserByCpf(userCpfInputDto);
    }

    @Get('/all')
    @ApiResponse({ status: HttpStatus.NOT_ACCEPTABLE})
    getUserAll() {
        return this.getUserUseCase.getUserAll();
    }

    @Post("/")
    @ApiResponse({ status: HttpStatus.NOT_ACCEPTABLE})
    @ApiResponse({ status: HttpStatus.CONFLICT })
    addUser(@Body() userInputDto: UserInputDto) {
        return this.addUserUseCase.addUser(userInputDto);
    }

    @Patch(":id")
    patchUser(
        @Body() userInputDto: UserInputDto,
        @Param("id") id: number) {
        return this.patchUserUseCase.patchUser(userInputDto, id);
    }
    
    @Delete(":id")
    deleteUser(
        @Param("id") id: number) {
        return this.deleteUserUseCase.deleteUser(id);
    }
}