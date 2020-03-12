const bcrypt = require('bcryptjs');

function passHash(textPass){
    return bcrypt.hashSync(textPass, bcrypt.genSaltSync());
}

function passCompare(textPass, hashedPass){
    return bcrypt.compareSync(textPass, hashedPass); 
}

module.exports = {    
    passHash,
    passCompare
}

// function validateRequired(input){
// 	if (input.trim().length==0) { 
// 		console.clear();console.log('Please enter a value! \n');
//         return false;
// 	}
// 	else {
// 		return true;
// 	}
// }

// function validateNumber(input){
// 	if (input.trim().length==0) { 
// 		console.clear();console.log('Please enter a value! \n');
//         return false;
// 	} else if (isNaN(input)) { 
// 		console.clear();console.log('Please enter a number, the given value is not a number! \n');
//         return false;
//     } else if ((parseInt(input) < 1)) { 
//             console.clear();
//             console.log('Please enter a valid number for office number! \n');
//             return false; 
//     } else return true;
// }





