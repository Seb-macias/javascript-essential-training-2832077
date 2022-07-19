class Book {
    constructor(
        title,
        autor,
        dateRelease,
        editorial,
        length,
        
    ){
        this.title=title;
        this.autor=autor;
        this.dateRelease=dateRelease;
        this.editorial=editorial;
        this.length=length;
    
    }
    bookAge(){
        let now = new Date();
        let acquired = new Date(this.dateRelease);
        let elapsed = now - acquired;
        let daysSinceAquired = Math.floor(elapsed/(1000 * 3600 * 24));
        return daysSinceAquired;
    }
}
 

export default Book;