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
    
    private readonly city : string = ""
    constructor(
        public email : string,
         public name : string,
        // private userId : string
    ){
        
    }
};

const jayant = new User("Jayant@gmail.com", "Jayant");
// jayant.city = "Jaipur"; Cannot Access ---> Priavte