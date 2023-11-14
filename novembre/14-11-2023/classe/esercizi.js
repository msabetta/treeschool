class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    
    puntox = "x";
    static displayNome = "Point";
    static distance(a,b){
        let dx = a - b;
        let dy = a + b;
        return Math.hypot(dx,dy);
    }
}


let pointA = new Point(5,5);
console.log(pointA.displayNome); //undefined
console.log(pointA.puntox); //x
console.log(Point.displayNome); //Point

//con il parametro static utilizzo il metodo solo dalla classe e non dall'oggetto che istanzio con new

let data = new Date()
data.getDate();
Math.random();




