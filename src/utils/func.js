
export const changeAlias = (alias) => {
    const arrStr = alias.split('');
    function change(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/!|@|%|\^|\*|\(|\)|=|<|>|\?|\/|,|\.|:|;|'|'|&|#|\[|\]|~|$|_/g, '-');
        str = str.replace(/-+-,/g, '-');
        str = str.replace(/^-+|-+$/g, '');
        str = str.replace(/\s+/g, '-');
        return str;
    }

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].toUpperCase() === arrStr[i]) {
            arrStr[i] = change(arrStr[i].toLowerCase()).toUpperCase();
        } else {
            arrStr[i] = change(arrStr[i]);
        }
    }

    return arrStr.join('').replace(/-+/g, '-');
}

export const getSongUrl = (name, id) => {
    if (!/\s+/.test(name)) {
        // if there is no space therefore the name argument is already escaped
        return `/song/${name}/${id}`;
    }
    return `/song/${changeAlias(name)}/${id}`;
}

export const isObject = (ojb) => {
    
    return Object.prototype.toString.call(ojb) === '[object Object]';
 };  

export const findIndex = (arr, entry, value) => {

    for(let i in arr) {
        if(arr[i][entry] === value)
            return i;
    };
    return undefined;
};

export const removeById = (arr, id) => {

    if(isObject(arr[0])) {
        arr.splice(findIndex(arr, 'id', id), 1);
        return arr;
    }

    arr.splice(arr.indexOf(id), 1);
    return arr;
};

export const isEmpty = (obj) => {

    return Object.keys(obj).length === 0;
};