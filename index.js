const _ = require('lodash');
//this project uses lodash
let obj = {
    "level1Key1": "level1ValueKey1 ",
    "level1Key2": " level1ValueKey2 ",
    "level1Key3": " level1ValueKey3 ",
    "level1Key4": {
        "level2Key1": " level2ValueKey1 ",
        "level2Key2": " level2ValueKey2 ",
        "level2Key3": {
            "level3Key1": " level3ValueKey1 ",
            "level3Key2": " level3ValueKey2 ",
            "level3Key3": {
                "level4Key1": " level4ValueKey1 ",
                "level4Key2": " level4ValueKey2 ",
                "level4Key3": {
                    "level5Key1": " level5ValueKey1 ",
                    "level5Key2": " level5ValueKey2 ",
                    "level5Key3": {
                        "level6Key1": " level6ValueKey1 ",
                        "level6Key2": " level6ValueKey2 ",
                        "level6Key3": {
                            "level7Key1": " level7ValueKey1 ",
                            "level7Key2": " level7ValueKey2 ",
                            "level7Key3": {
                                "level8Key1": " level8ValueKey1 ",
                                "level8Key2": " level8ValueKey2 ",
                            }
                        }
                    }
                }

            }
        },
    }
}
// deeply nested  object with 8 levels 
let flatObj = flattenObject(obj);
 console.log('Here is the Flattened object',JSON.stringify(flatObj))
let trimmedObj = {};
trimObj(flatObj)
//Flatten Object Allows to
function flattenObject(obj) {
    let tempObj = {};
    for (let i in obj) {
        if (!obj.hasOwnProperty(i)) continue;

        if ((typeof obj[i]) == 'object' && obj[i] !== null) {
            let flatObject = flattenObject(obj[i]);
            for (let x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;
                tempObj[i + '.' + x] = flatObject[x];
            }
        } else {
            tempObj[i] = obj[i];
        }
    }
    return tempObj;
}

function trimObj(obj) {
    for (let i in obj) {
        _.set(trimmedObj, i, _.trim(obj[i]))
    }
    
}
 console.log('Here is the trimmed object',JSON.stringify(trimmedObj))