export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

// export const checkValidityInput = value => {
//     let isValid = true;
//     const pattern = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/;
//     isValid = pattern.test(value) && isValid;
//     return isValid;
// };
