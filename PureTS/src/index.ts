class User{
    email:string
    name:string
    city : string = ""
    constructor(email : string, name : string){
        this.email = email;
        this.name = name;
    }
};

const jayant = new User("Jayant@gmail.com", "Jayant");
jayant.city = "Jaipur";