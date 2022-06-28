function validGuest(name)
{
    const guestList =["Angela", "Jack" , "Pam" , "Tonny" , "ShinChan"];
    return guestList.includes(name)? "Welcome "+name : "Sorry your Not Invited";
}

console.log(validGuest("Jack"));
