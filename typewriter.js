const sentence = 'hello there from Lighthouse Labs';

let interval = 0;

// schedule the logging of a break character based on the length of the sentence
// aka based on how many characters will need to be outputed first
setTimeout(() => {
  console.log('\n');
}, interval + 50 * sentence.length);

// add the printout of the each character to the event loop
// each character will take 50ms longer to output than the previous one
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, interval);

  interval += 50;
}
