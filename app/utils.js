//Type 1001: Invalid resource name {0} given
function reportInvalidResource(invalidResource, res){
    res.status(400).jason({
        errorCode: 1001,
        errorMsg: invalidResource + ' is an invalid resource name',
        statusCode: 412
    });
    return;
}

//Type 1002：Given ID does not exist
function reportInvalidId(identifier, res){
    res.status(400).jason({
        errorCode: 1002,
        errorMsg: identifier + ' is an invalid ID',
        statusCode: 400,
        statusTxt: 'Bad Request'
    });
    return;
}

//Type 1003: Missing request body
function reportEmptyBody(res){
    res.status(400).json({
        errorCode: 1003,
        errorMsg: 'Request body is empty',
        statusCode: 400,
        statusTxt: 'Bad Request'
    });
    return;
}

//Type 1004: Invalid request format
function reportInvalidFormat(correctFormatType, res){
    res.status(400).jason({
        errorCode: 1004,
        errorMsg: 'TypeError: correct type is ' + correctFormatType,
        statusCode: 400
    });
    return;
}

//Type 1005: Missing required property to create {0}
function reportMissingParam(missingParam, res) {
    res.status(400).json({
        errorCode: 1001,
        errorMsg: missingParam + ' required',
        statusCode: 400,
        statusTxt: 'Bad Request'
    });
    return;
}


//Type 1006: {0} should be unique
function reportDuplicateEmail(duplicateEmail, res) {
    res.status(400).json({
        errorCode: 1001,
        errorMsg: 'There is already an item associated to ' + duplicateEmail,
        statusCode: 400,
        statusTxt: 'Bad Request'
    });
    return;
}

//Type 1007: Invalid property value
function reportInvalidPropertyValue(allowedLanguage, res) {
    res.status(400).json({
        errorCode: 1001,
        errorMsg: 'InvalidPropertyValue: only ' + allowedLanguage + ' is allowed',
        statusCode: 400,
        statusTxt: 'Bad Request'
    });
    return;
}

//Type 1008: Invalid property type
function reportTypeError(correctType, res) {
    res.status(400).json({
        errorCode: 1002,
        errorMsg: 'TypeError: correct type is ' + correctType,
        statusCode: 400,
        statusTxt: 'Bad Request'
    });
    return;
}


module.exports = {
    invalidResource: reportInvalidResource,
    invalidId: reportInvalidId,
    emptyBody: reportEmptyBody,
    invalidFormat: reportInvalidFormat,
    missingParam: reportMissingParam,
    duplicateEmail: reportDuplicateEmail,
    invalidPropertyValue: reportInvalidPropertyValue,
    typeError: reportTypeError
}