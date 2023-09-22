const joi = require("joi");
module.exports = class Validation {

    getClientName = () => {
        const regExp = /^[가-힣a-zA-Z0-9]*$/;
        return joi.string()
            .min(2)
            .regex(regExp)
            .required()
            .messages({
                'string.empty': 'clientName을 입력하세요.',
                'string.min': 'clientName은 최소 2글자여야 합니다.',
                'string.pattern.base': 'clientName은 한글, 알파벳 대/소문자, 숫자만 가능합니다.'
            });
    };

    getSoldToName = () => {
        const regExp = /^[가-힣a-zA-Z0-9]*$/;
        return joi.string()
            .min(2)
            .regex(regExp)
            .required()
            .messages({
                'string.empty': 'soldToName을 입력하세요.',
                'string.min': 'soldToName은 최소 2글자 이상입니다.',
                'string.pattern.base': 'soldToName은 한글, 알파벳 대/소문자, 숫자만 가능합니다.'
            });
    };

    getShipToName = () => {
        const regExp = /^[가-힣a-zA-Z0-9]*$/;
        return joi.string()
            .min(2)
            .regex(regExp)
            .required()
            .messages({
                'string.empty': 'ShipToName을 입력하세요.',
                'string.min': 'ShipToName은 최소 2글자 이상입니다.',
                'string.pattern.base': 'ShipToName은 한글, 알파벳 대/소문자, 숫자만 가능합니다.'
            });
    };

    getBillToName = () => {
        const regExp = /^[가-힣a-zA-Z0-9]*$/;
        return joi.string()
            .min(2)
            .regex(regExp)
            .required()
            .messages({
                'string.empty': 'BillToName을 입력하세요.',
                'string.min': 'BillToName은 최소 2글자 이상입니다.',
                'string.pattern.base': 'BillToName은 한글, 알파벳 대/소문자, 숫자만 가능합니다.'
            });
    };
}