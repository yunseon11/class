class Book{
    constructor(type,title){
        this.type = type;
        this.title = title;
    }
}
list(){
    console.log(
        `
        ${this.type} : ${this.title}
        `
    );
}

const photo = new Book('graphic','photoshop');

const my = [
    new Book('graphic','photoshop'),
    new Book('it','javascript'),
    new Book('it','html5')

]
my[0].list();
my[1].list();
my[2].list();
