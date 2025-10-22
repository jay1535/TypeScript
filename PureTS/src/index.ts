// class User{
//     email:string
//     name:string
//     private readonly city : string = ""
//     constructor(email : string, name : string){
//         this.email = email;
//         this.name = name;
//     }
// };

// const jayant = new User("Jayant@gmail.com", "Jayant");
class User{
    private _courseCount = 1
    private readonly city : string = ""
    constructor(
        public email : string,
         public name : string,
        // private userId : string
    ){}

    get getAppleEmail ():string{ //Use get keyword
        return `apple ${this.email}`;
    }
    get courseCount (): number{
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum<=1){
            throw new Error("Course count should be greater than 1")
        }
        this._courseCount = courseNum;

    }
};

const jayant = new User("Jayant@gmail.com", "Jayant");
// jayant.city = "Jaipur"; Cannot Access ---> Priavte