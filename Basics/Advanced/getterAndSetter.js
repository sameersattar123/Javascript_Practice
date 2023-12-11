class User{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toLowerCase();
    }

    set password(value){
        this._password = value
    }
    get email(){
        return this._email.toLowerCase();
    }

    set email(value){
        this._email = value
    }
}

const sameer = new User("sameer" , "SAMI@gmail.com" , "ABCD");
console.log(sameer.password)
console.log(sameer.email)