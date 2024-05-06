// 1.
// S - Single Responsibility Principle - принцип единственной ответственности. 
// Каждый класс должен иметь только одну зону ответственности.

class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}
	get area() {
		return this.length * this.width;
	}
}
 

// 2.
// O - Open closed Principle - принцип открытости-закрытости. 
// Классы должны быть открыты для расширения, но закрыты для изменения.

class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}
	get area() {
		return this.length * this.width;
	}
	get perimteter() {
		return 2 * (this.length + this.width);
	}
}
 

// 3. L - Liskov substitution Principle - принцип подстановки Барбары Лисков. 
// Должна быть возможность вместо базового (родительского) типа (класса) подставить любой его подтип (класс-наследник), при этом работа программы не должна измениться.

 class Shape {
    get area() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    get area() {
        return this.length * this.width;
    }
}
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }
    get area() {
        return this.length ** 2;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    get area() {
        return Math.PI * (this.radius ** 2);
    }
}
const shapes = [new Rectangle(1, 2), new Square(1, 2), new Circle(2), ]
for (let s of shapes) {
    console.log(s.area);
}


// 4. 
// I -  Interface Segregation Principle - принцип разделения интерфейсов. 
// Данный принцип обозначает, что не нужно заставлять клиента (класс) реализовывать интерфейс, который не имеет к нему отношения.

 const shapeInterface = (state) => ({
  type: 'shapeInterface',
  area: () => state.area(state)
})
const solidShapeInterface = (state) => ({
  type: 'solidShapeInterface',
  volume: () => state.volume(state)
})
const cubo = (length) => {
  const proto = {
    length,
    type   : 'Cubo',
    area   : (args) => Math.pow(args.length, 2),
    volume : (args) => Math.pow(args.length, 3)
  }
  const basics  = shapeInterface(proto)
  const complex = solidShapeInterface(proto)
  const composite = Object.assign({}, basics, complex)
  return Object.assign(Object.create(composite), {length})
}


// 5. 
//   D - Dependency Inversion Principle - принцип инверсии зависимостей. 
//   Модули верхнего уровня не должны зависеть от модулей нижнего уровня. 
//   И те, и другие должны зависеть от абстракции. 
//   Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.


class ClassA {}
class ClassB {}
class ClassC {}
class Facade {
    constructor() {
        this.a = new ClassA();
        this.b = new ClassB();
        this.c = new ClassC();
    }
}
class Foo {
    constructor() {
        this.facade = new Facade();
    }
}
