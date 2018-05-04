//1.youtube video property
class YoutubeLikes{
    constructor(private _likes : number, private _dislikes : number, private isSelected : boolean, private _subscribe : number)
    {

    }
    countLikes()
    {
     this._likes += (this.isSelected) ? -1 : +1;
     this.isSelected =! this.isSelected;
    }//end of countLikes function 
    countDislikes()//if dislike button is selected then it increment by one otherwise remain same
            {
                 this._dislikes += (this.isSelected) ? -1 : +1;//if isSelected is true it means now click remove from dislikes
                this.isSelected =! this.isSelected//toggling of isSelected button

        }
        countSubscribe()//if dislike button is selected then click means remove dislikes
            {
                 this._subscribe += (this.isSelected) ? -1 : +1;//if isSelected is true it means now click remove from dislikes
                this.isSelected =! this.isSelected//toggling of isSelected button

        }
        get likes()//getter method to access the private fields of class
        {
            return this._likes
        }
        get dislikes()//getter method to access the private fields of class
        {
            return this._dislikes;
        }
         get _isSelected()//getter method to access the private fields of class
         {
             return this.isSelected;
         }
        get subscribe()//getter method to access the private fields of class
        {
            return this._subscribe
        }
     }
    let youtube = new YoutubeLikes(1,2,true,5) ;//create object of class
    youtube.countSubscribe();//call the function
    youtube.countLikes();//call the function
    youtube.countDislikes();//call the function
console.log(`OUTPUT youtube : 
buttonSelected : ${youtube._isSelected}`);//print value of button selected in console
    
console.log(`Likes : ${youtube.likes}`);


console.log(`Dislikes : ${youtube.dislikes}`);
    
console.log(`Subscribes : ${youtube.subscribe}`);






//2.Facebook about
class FaceBook{
    constructor(private birthDay:string, private birthDate:number,private birthYear: number,private _age : number){

    }
    get age()//getter method to access the private fields of class
    {
return this._age;
    }
    get day ()//getter method to access the private fields of class
    {
        return this.birthDay;
    }
    get date() //getter method to access the private fields of class
    {
        return this.birthDate;
    }
    get year () //getter method to access the private fields of class
    {
        return this.birthYear
    }
}
let birthday = new FaceBook("tuesday",12,1997,22);
console.log(`userAge : ${birthday.age}`);


class FaceBookLikes{
    constructor(private _likes : number, private _isSelected : boolean){

    }
    onCount(){
        this._likes += (this._isSelected) ? -1 : +1;//if isSelected is true it means now click remove from dislikes
        this._isSelected =! this._isSelected;//toggling of isSelected button
    }
    get likes(){
        return this._likes;
    }
    get selected(){
        return this._isSelected;
    }
    
}
let faceBookLikes = new FaceBookLikes (2,true);//create object of class
faceBookLikes.onCount();//call the function
console.log(`OUTPUT Facebook:
number of Likes : ${faceBookLikes.likes}
selected_button : ${faceBookLikes.selected}
` );//print value of likes in console
    