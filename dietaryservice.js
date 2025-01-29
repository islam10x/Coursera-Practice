let userRole =prompt("enter your role")

switch (userRole){
    case "employee":
        console.log("you can have access to Dietary services")
        break
    case "enrolled member":
        console.log("you can have access to Dietary services and one-to-one interaction with a dietician")
        break
    case "subscriber":
        console.log("you can have partial access to Dietary services")
        break
    default:
        console.log("unvalid role or you need to sub")
}

