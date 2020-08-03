function makeTea(isCold) {
    let tea;
    if (isCold) {
        tea = "Make an Ice Tea!"
    } else {
        tea = "Make a Hot Tea!"
    }
    return tea;
}

console.log(makeTea(false));

/* output
Make a hot tea
ReferenceError: tea is not defined
*/