export function isNumberCode(data: i32): boolean {
    if (data == "0".charCodeAt(0)) return true;
    else if (data == "1".charCodeAt(0)) return true;
    else if (data == "2".charCodeAt(0)) return true;
    else if (data == "3".charCodeAt(0)) return true;
    else if (data == "4".charCodeAt(0)) return true;
    else if (data == "5".charCodeAt(0)) return true;
    else if (data == "6".charCodeAt(0)) return true;
    else if (data == "7".charCodeAt(0)) return true;
    else if (data == "8".charCodeAt(0)) return true;
    else if (data == "9".charCodeAt(0)) return true;
    else if (data == "-".charCodeAt(0)) return true;
    else return false;
}