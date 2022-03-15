// 클래스
function Book(type, title){
    this.type = type;
    this.title = title;
}

book.prototype.action=function(){
    console.log(
        `
        ${this.type} : ${this.title}
        `
    )
}
// 인스턴스
const photoshop = new book('graphic','photoshop');
const script = new book('it','javascript');
const html = new book('it','html');

// const it = [new book(),new book(),new book()];
