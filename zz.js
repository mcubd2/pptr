// const regex = /^.+facebook/;
// const fblinkregex = fblink.replace(regex, 'https://www.facebook');

var text='"https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/"'
const regex = new RegExp(`^"https`, 'g' )
console.log( text.match(regex))
