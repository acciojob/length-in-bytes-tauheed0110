const byteSize = (str) => {
   const encoder = new TextEncoder();
    
    // Encode the string and get the byte length
    const byteArray = encoder.encode(str);
    
    // Return the length of the byte array
    return byteArray.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
