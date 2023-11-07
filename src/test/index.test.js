const assert = require("assert");
const math = require('../utils/Math.js')
const nameModule = require('../utils/Name');

const expect = require('chai').expect;

// it('should return true', () => {
//     assert.equal(0, 0);m
// })

// 1. Надо написать модуль Math, в котором естьфункции сложения, вычитания, умножения, деление, возведения в степень и нахождение под квадратным корнем.

// 2. Имеется массив объектов, формата: {id: ...., name: ....}. Написать 2 теста:
// 1. Проверяет что все id по возрастанию (начинать можем с любого значения)
// 2. Проверка на "длину" у всех объектов в массиве. Разрешенная длина - 2


// describe('Math module tests', () => {
//     describe("Add", () => {
//         it("Should return 4", () => {
//           assert.equal(math.add(2, 2), 4);
//         });
//         it("Should return 12", () => {
//             assert.equal(math.add(10, 2), 12);
//           });
//     });
//     describe("Sub", () => {
//         it("Should return 3", () => {
//           assert.equal(math.sub(9, 6), 3);
//         });
//         it("Should return 5", () => {
//             assert.equal(math.sub(10, 5), 5);
//           });
//     });
//     describe("Mult", () => {
//         it("Should return 15", () => {
//           assert.equal(math.mult(3, 5), 15);
//         });
//         it("Should return 25", () => {
//             assert.equal(math.mult(5, 5), 25);
//           });
//     });
//     describe("Div", () => {
//         it("Should return 2", () => {
//           assert.equal(math.div(10, 5), 2);
//         });
//         it("Should return 1", () => {
//             assert.equal(math.div(7, 7), 1);
//           });
//     });
//     describe("Expon", () => {
//         it("Should return 25", () => {
//           assert.equal(math.expon(5, 2), 25);
//         });
//         it("Should return 27", () => {
//             assert.equal(math.expon(3, 3), 27);
//           });
//     });
//     describe("Squart", () => {
//         it("Should return 5", () => {
//           assert.equal(math.squart(25), 5);
//         });
//         it("Should return 3", () => {
//             assert.equal(math.squart(9), 3);
//           });
//     });
// })


// const users = [
//     { id: 1, name: "Name 1" },
//     { id: 2, name: "Name 2" },
//     { id: 3, name: "Name 3" },
// ];

// function idIncrease(arrayArg){
//     const array = arrayArg.map(item => item.id);

//     return array.sort((a,b) => a - b).every((value, index) => value === arrayArg.map(item => item.id)[index]);    
// }

// describe('Array of objects - ID order', () => {
//     it('Should have ascending IDs', () => {
//         assert.isTrue(idIncrease(users));
//     });
// });

// function checkObjectLength(array) {
//     return array.every(obj => {
//         const numberOfProperties = Object.keys(obj).length;
//         return numberOfProperties === 2;
//     });
// }

// describe('Array of objects - Object length', () => {
//     it('Should have objects with length 2', () => {
//         assert.isTrue(checkObjectLength(users));
//     });
// });

// describe('#Math', () => {
//   describe("Squart", () => {
//     context('Function should get a positive number and return a squart', () => {
//       it('should return 5', () => {
//         // assert.equal(math.squart(25), 5)
//         expect('79111232323')
//           .to.be.a('string')
//           .and.match(/\d{11}/gi)
//           .that.equal('79111232323')
//       })

//       it('should return 4', () => {
//         assert.equal(math.squart(16), 4)
//       })
//     })



//     context('Function should get a negative number and return a squart', () => {
//       it('should return 5', () => {
//         assert.equal(math.squart(-16), 4)
//       })

//       it('should return 4', () => {
//         assert.equal(math.squart(-36), 6)
//       })
//     })




//     context('Function should get 0 and return a 0', () => {
//       it('should return 0', () => {
//         assert.equal(math.squart(0), 0)
//       })
//     })


//     context('Function should get not a number and return a 0', () => {
//       it('should return 0', () => {
//         assert.equal(math.squart('16'), 0)
//       })
//     })


//     context('Function should not get a number and return 0', () => {
//       it('should return 0', () => {
//         assert.equal(math.squart(), 0)
//       })
//     })
//   });
// })



// 1. Передаем параметры (a, b)
// 2. Передаем все параметры в указанном типе данных (number)
// 3. Передлаем только a
// 4. Передаем только a в виде числа
// 5. Передаем a в числе, b в строке
// 6. Передаем b в числе, a в строке
// 7. Передаем все строкой
// 8. Не передаем вообщеё



// 1. Составить тесты и функцию в utils для проверки корректно введенного ФИО. 
// Условвия:
// 1. И, Ф, О должны начинаться с заглавной буквы
// 2. ФИО передается одной строкой
// 3. Длина ф, и, о должна быть больше 2
// 4. В фио нет лишних элементов (Иванов Иван Иван Иванович - false)




describe('#Test: Validate full name', () => {
  context('Dropping the wrong number of elements', () => {
    // Иванов Иван
    it('Should return false', () => {
      expect(nameModule.checkName('Иванов Иван'))
        .to.equal(false)
    })

    it('Should return false', () => {
      expect(nameModule.checkName('Иван'))
        .to.equal(false)
    })

    it('Should return false', () => {
      expect(nameModule.checkName('Иванов Иван Иван Иван'))
        .to.equal(false)
    })

    it('Should return false', () => {
      expect(nameModule.checkName(''))
        .to.equal(false)
    })
  })

  context('First char in lower case', () => {
    it('Should return false', () => {
      expect(nameModule.checkName('Иванов иван Иванович'))
        .to.equal(false)
    })
  })

  context('The lenght of a part should be 3 or higher', () => {
    it('Should return false', () => {
      expect(nameModule.checkName('Иван Ян Иванович'))
        .to.equal(false);
    })
  })

  context('Correct full name', () => {
    it('Should return true', () => {
      expect(nameModule.checkName('Иванов Иван Иванович'))
        .to.be.a('boolean')
        .that.equal(true);
    })

    it('Should return true', () => {
      expect(nameModule.checkName('Петров Николай Семенович'))
        .to.be.a('boolean')
        .that.equal(true);
    })
  })
})

//функция add переписать

// 1. Оба передаются и оба числа
// 2. Оба передаются и какое-либо из них не число
// 3. Передается только одно числовое значение
// 4. Передается только одно не числовое значение
// 5. Значения не передаются вообще

describe('Math Functions', () => {
  describe('add()', () => {
    context('1. Both are transmitted and both are numbers', () => {
      it('Should return 10', () => {
        expect(math.add(4, 6))
          .to.equal(10)
      })

      it('Should return 32', () => {
        expect(math.add(20, 12))
          .to.equal(32)
      })

      it('Should return 57', () => {
        expect(math.add(24, 33))
          .to.equal(57)
      })

      it('Should return 23', () => {
        expect(math.add(11, 12))
          .to.equal(23)
      })
    })

    context('2. Both are transmitted and either of them is not a number', () => {
      it('Should throw an error', () => {
        try {
          expect(math.add(11, 'hello'))
            .to.throw(TypeError)
        } catch (error) {
          console.log(error.message)
        }
      })

      it('Should throw an error', () => {
        try {
          expect(math.add('hello', 12))
            .to.throw(TypeError)
        } catch (error) {
          console.log(error.message)
        }
      })

      it('Should throw an error', () => {
        try {
          expect(math.add(false, 'hello'))
            .to.throw(TypeError)
        } catch (error) {
          console.log(error.message)
        }
      })
    })

    context('3. Only one numeric value is passed', () => {
      it('Should return 15', () => {
        expect(math.add(15))
          .to.equal(15)
      })

      it('Should return 24', () => {
        expect(math.add(24))
          .to.equal(24)
      })
    })

    context('4. Only one non-numeric value is passed', () => {
      it('Should throw an error', () => {
        try {
          expect(math.add(false))
            .to.throw(TypeError)
        } catch (error) {
          console.log(error.message)
        }
      })
    })

    context('5. Values are not passed at all', () => {
      it('Should return 0', () => {
        expect(math.add())
          .to.equal(0)
      })
    })
  })

  describe('squart()', () => {
    context('The number is transmitted',() => {
      it('Should return 5', () => {
        expect(math.squart(25))
        .to.equal(5)
      });
      it('Should return 7', () => {
        expect(math.squart(49))
        .to.equal(7)
      });
    })
    context('Data is not transferred',() => {
      it('Should return 0', () => {
        expect(math.squart())
          .to.equal(0)
      })
    })
      
    })
    context('Not a number',() => { //type
      it('Should return Error', () => {
        try{
          expect(math.squart(false))
          .to.throw(TypeError)

        }
        catch(error){
          console.log(error.message)
        }
      })
      
    })
  })
