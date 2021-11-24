// Validation function to check that email address is an actual email address
export function validateEmail(email) {
    // Regex that matches most standard email formats
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Checks the now lower case user input for email to see if it matches the regular expression for email formats
    return regexEmail.test(String(email).toLowerCase());
}

// Validation that user provides data in each contact form input
export function completeField(inputData) {
    return(inputData.length > 0 ? true : false)
}