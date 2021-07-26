function divisibleByTree(string) {
    let sum = 0;
    let bool = true;
    const myCharacterSplit = string.split(''); 

    myCharacterSplit.forEach(element => {
       sum += parseInt(element);
   });
    if (sum % 3 === 0){
        bool = true;
        console.log(bool);
    } else {
        bool = false;
        console.log(bool);
    }
}

divisibleByTree('123');
divisibleByTree('19254');
divisibleByTree('88');
divisibleByTree('1');