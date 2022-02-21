const add = (first, second) =>{
    return first + second;
}

const sub = (first, second) => {
    return first - second;
}

const runGit = () =>{
    console.log("RunningGit-->");
    console.log("Addition of 10 + 10 = ", add(10, 10));
    console.log("Subtraction of 10 - 5", sub(10, 5));
}

runGit();