export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }

    if (rules.isText) {
        const pattern = /^[a-zA-z]+\s?-?[a-zA-z]+\s?-?([a-zA-z]+)?$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
}

export const filterObjByKeys = (inputObj, allowed) => {
    return Object.keys(inputObj)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
            obj[key] = inputObj[key];
            return obj;
        }, {});
};
