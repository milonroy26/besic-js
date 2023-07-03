let language =  " ";

let result = language ?? "java";
console.log(result); // nullish (undifind, null) hole left ta hbe, ar na hle Right ta hbe;

let result1 = language || "java";
console.log(result1); // false (1.undifind, 2.null, 3.Nan, 4.false, 5.0, 6."" ) hole left ta hbe, ar na hle Right ta hbe;


let result2 = language && "java";
console.log(result2); // truety hole left ta hbe, ar na hle Right ta hbe;
