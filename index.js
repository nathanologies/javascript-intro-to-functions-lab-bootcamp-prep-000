function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase() 
}

function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")