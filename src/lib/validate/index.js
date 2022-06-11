import exists from './required'
import isEmail from './email'

export function assert(validations, value) {
    let v = {success: true}
    if (validations.length > 0) {
        for (let i = 0; i < validations.length; i++) {
            v = validate(validations[i], value)
        }
    }
    return v;
}

export function validate(validationId, value) {
    if (!validationId) return {success: true}

    let validations = [
        {
            id: 'required',
            run: exists,
            message: 'This field is required',
        },
        {
            id: 'email',
            run: isEmail,
            message: 'This is not a valid email',
        },
    ]
    let validationToUse = validations.find(validation => validation.id === validationId)
    if (!validationToUse)
        throw new Error(
            `validation not found.\n\nKenshi validations:\n${
                '- ' + validations.map(_ => _.id).join('\n- ')
            }\n\nValidation provided: ${validationId}\n\n`
        )
    return {success: validationToUse.run(value), message: validationToUse.message}
}
