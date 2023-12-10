class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static userId(){
        return 123;
    }
}

const sameer = new User("sameer");
// console.log(sameer.logMe()); //USERNAME is sameer
// console.log(sameer.userId())  // sameer.userId is not a function

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const sami = new Teacher("sameer" , "sami@gmail.com");
// console.log(sami.logMe());
// console.log(sami.userId()); //sami.userId is not a function