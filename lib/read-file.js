const readline = require('readline');
const stream = require('stream');
const fs = require('fs');
lines = []
class getInput {
  constructor (input) {

    this.openFile = (io1) => {
      let output1 = new stream.PassThrough({ objectMode: true })
      let readInterface = readline.createInterface({
        input: fs.createReadStream(io1),
        //output: process.stdout,
        console: false
      });
      readInterface.on("line", line => { 
        output1.write(line);
      });
      readInterface.on("close", () => {
        output1.push(null);
      }); 
      return output1
    }
    this.getLines = () => {
      return output
    }
    //return output;
  }
}
module.exports = getInput