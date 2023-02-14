import Child from "./child";

export default class User{
    constructor(public firstName:string, public lastName: string, public id: string, public dateBorn: Date, public gender: string, public HMO: string, 
                public children : Child[]=[],
        ){}

}
