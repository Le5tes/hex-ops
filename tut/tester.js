function Expect(parameter) {
  this.parameter = parameter
  this.result = false
  this.message = ""
}

expect = function (parameter) {
  return new Expect(parameter)
}

dont = function (test) {
  test.result = (!test.result)
  test.message = "not " + test.message
  return test
}

Expect.prototype.toEqual = function (parameter) {
  this.message = `to equal ${parameter}`
  this.result = (this.parameter === parameter)
  return this
}

Expect.prototype.toContain = function(parameter) {
  this.message = `to contain ${parameter}`
  this.result = this.parameter.includes(parameter)
  return this
}


Expect.prototype.formatResult = function () {
  if (!this.result) {
    document.getElementById('tests').innerHTML +=
      `<div class="test"><h5 style="color: red;">Expected ${this.parameter} ${this.message}</h5></div>`
  } else {
    document.getElementById('tests').innerHTML +=
      `<div class="test"><h5 style="color: green;">Test passed</h5></div>`
  }
}

beforeEach = function(lines, test) {
  lines.forEach(function(line) {
    line;
  })
  test.run();
}

beforeCommands = []

describe = function (name, its) {
  document.getElementById('tests').innerHTML += `<div class="testTitle"><h3>${name}</h3></div>`;
  beforefunc = (its.includes(beforeCommands) ? beforeCommands : []);
  its.forEach(function (test) {
    if(test instanceof Test) {
      beforeEach(beforefunc, test)
    };
  });
  // document.getElementById('tests').innerHTML += ;
};

function Test(name, lines){
  this.name = name
  this.lines = lines
}

Test.prototype.run = function(){
  document.getElementById('tests').innerHTML += `<div id="tests" class="container-flex it-title"><h4>${this.name}</h4></div>`;
  this.lines.forEach(function(line){
    if (line instanceof Expect) { line.formatResult() }
  })
}

it = function (name, lines) {
  return (new Test(name,lines))
};

runSpec = function(){
  specName = document.getElementById('specname').value
  try{
  eval(loadSpec('/spec/'+ specName + '.js'))
  } catch(error){
  console.log(error.stack)
  }
}

loadSpec = function(path) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      return this.responseText;
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
}
