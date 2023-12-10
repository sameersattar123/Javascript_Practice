class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username);
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
} 

const newUser  = new Teacher("sameer" , "samee@gmail.com" , 4321);
newUser.logMe();

const goodUser = new User("sameer");
goodUser.logMe(); 

console.log(newUser instanceof Teacher); // true
console.log(newUser instanceof User); // true

