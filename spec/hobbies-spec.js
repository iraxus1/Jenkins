const hobbies = require("../hobbies");
describe("API unit test suite", ()=>{
    describe("getHobbies", () =>{
        const list = hobbies.getHobbies();
        it("returns 7 hobbies", () =>{
            expect(list.length).toEqual(7);
        });
        it("returns 'jogging' as first hobby", () =>{
            expect(list[0]).toBe("jogging");
        });
        it("returns 'diving' length as 6", () =>{
            expect(list[2].length).toBe(6);
        });
        it("return 'swimming' as SWIMMING", () =>{
            expect(list[3].toUpperCase()).toBe("SWIMMING");
        });
        it("return 'breadmaking' as longest hobby", () =>{
            expect(hobbies.getHobbyOfLongestName()).toBe("breadmaking");
        });
        it("return 'c++' as shortest hobby", () =>{
            expect(hobbies.getHobbyOfShortestName()).toBe("c++");
        });
    });
});