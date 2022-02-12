// const SerialPort = require('serialport');
// const Readline = require('@serialport/parser-readline');
// const port = new SerialPort('COM3', { baudRate: 9600 });
// const parser = port.pipe(new Readline({ delimiter: '\n' }));
// const constansts = require('../constansts');
// const Light = require('../models/lights');

// const readSerial = () => {
//     // Read the port data
//     port.on("open", () => {
//         console.log('serial port open');
//     });

//     parser.on('data', async (data) => {
//         let intData = parseInt(data);
        
//         if(intData === 1) {
//             if(!constansts.flag){
//                 constansts.flag=true;
//                 constansts.inDate = new Date();
//                 console.log('in...');
//                 console.log(constansts.inDate);
//             }
//         }
//         if (intData === 0) {
//             if(constansts.flag) {
//                 constansts.flag=false;
//                 constansts.outDate = new Date();
//                 console.log('out...');
//                 console.log(constansts.outDate);
    
//                 let timeDifferenceInMS = constansts.outDate.getTime() - constansts.inDate.getTime();
//                 let timeDifferenceInSeconds = timeDifferenceInMS / 1000;
//                 console.log(timeDifferenceInSeconds);

//                 let light = new Light();
//                 light.inDate = constansts.inDate;
//                 light.outDate = constansts.outDate;
//                 light.timeDifference = timeDifferenceInSeconds;

//                 await light.save();
//             }
//         }
//     });
// }

// module.exports = readSerial;