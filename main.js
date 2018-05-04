//1.youtube video property
var YoutubeLikes = /** @class */ (function () {
    function YoutubeLikes(_likes, _dislikes, isSelected, _subscribe) {
        this._likes = _likes;
        this._dislikes = _dislikes;
        this.isSelected = isSelected;
        this._subscribe = _subscribe;
    }
    YoutubeLikes.prototype.countLikes = function () {
        this._likes += (this.isSelected) ? -1 : +1;
        this.isSelected = !this.isSelected;
    }; //end of countLikes function 
    YoutubeLikes.prototype.countDislikes = function () {
        this._dislikes += (this.isSelected) ? -1 : +1; //if isSelected is true it means now click remove from dislikes
        this.isSelected = !this.isSelected; //toggling of isSelected button
    };
    YoutubeLikes.prototype.countSubscribe = function () {
        this._subscribe += (this.isSelected) ? -1 : +1; //if isSelected is true it means now click remove from dislikes
        this.isSelected = !this.isSelected; //toggling of isSelected button
    };
    Object.defineProperty(YoutubeLikes.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YoutubeLikes.prototype, "dislikes", {
        get: function () {
            return this._dislikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YoutubeLikes.prototype, "_isSelected", {
        get: function () {
            return this.isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YoutubeLikes.prototype, "subscribe", {
        get: function () {
            return this._subscribe;
        },
        enumerable: true,
        configurable: true
    });
    return YoutubeLikes;
}());
var youtube = new YoutubeLikes(1, 2, true, 5); //create object of class
youtube.countSubscribe(); //call the function
youtube.countLikes(); //call the function
youtube.countDislikes(); //call the function
console.log("OUTPUT youtube : \nbuttonSelected : " + youtube._isSelected); //print value of button selected in console
console.log("Likes : " + youtube.likes);
console.log("Dislikes : " + youtube.dislikes);
console.log("Subscribes : " + youtube.subscribe);
//2.Facebook about
var FaceBook = /** @class */ (function () {
    function FaceBook(birthDay, birthDate, birthYear, _age) {
        this.birthDay = birthDay;
        this.birthDate = birthDate;
        this.birthYear = birthYear;
        this._age = _age;
    }
    Object.defineProperty(FaceBook.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceBook.prototype, "day", {
        get: function () {
            return this.birthDay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceBook.prototype, "date", {
        get: function () {
            return this.birthDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceBook.prototype, "year", {
        get: function () {
            return this.birthYear;
        },
        enumerable: true,
        configurable: true
    });
    return FaceBook;
}());
var birthday = new FaceBook("tuesday", 12, 1997, 22);
console.log("userAge : " + birthday.age);
var FaceBookLikes = /** @class */ (function () {
    function FaceBookLikes(_likes, _isSelected) {
        this._likes = _likes;
        this._isSelected = _isSelected;
    }
    FaceBookLikes.prototype.onCount = function () {
        this._likes += (this._isSelected) ? -1 : +1; //if isSelected is true it means now click remove from dislikes
        this._isSelected = !this._isSelected; //toggling of isSelected button
    };
    Object.defineProperty(FaceBookLikes.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceBookLikes.prototype, "selected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return FaceBookLikes;
}());
var faceBookLikes = new FaceBookLikes(2, true); //create object of class
faceBookLikes.onCount(); //call the function
console.log("OUTPUT Facebook:\nnumber of Likes : " + faceBookLikes.likes + "\nselected_button : " + faceBookLikes.selected + "\n"); //print value of likes in console
