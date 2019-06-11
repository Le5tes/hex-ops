describe("Array#sum",[
  it("adds a number of elements in an array",[
  	expect([1,2,3,4,5,7].sum()).toEqual(22)
  	])
  ])
describe("Array#remove",[
  it("removes the specified element from the array",[
  	array = [1,2,3,"unwanted",4,5],
  	array.remove("unwanted"),
  	dont(expect(array).toContain("unwanted"))
  	]),
  it("returns the removed element", [
    expect([1,2,3].remove(3)).toEqual(3)
    ]),
  it("doesn't remove elements not present in the array",[
    array = [1],
    dont(expect(array.remove("bob")).toEqual("bob")),
    expect(array).toContain(1)
    ])
  ])
describe("Array#add",[
  it("adds the item to the array",[
    array = [],
    array.add(1),
    expect(array).toContain(1)
    ])
  ])