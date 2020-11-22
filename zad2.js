let names = ['Jan', 'Adam', 'Marcin', 'Tomasz'];

function societyName(names){
    let name = '';
    names = names.sort();
    for(let i = 0; i < names.length; i++){
        name += names[i][0];
    }
    return name;
}

console.log(societyName(names));

