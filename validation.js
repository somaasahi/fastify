export default async function validate(data) {
    const { realm, shortKd, index, lang } = data;
    if (realm === "") {
        return {
            error: "realm is required"
        };
    }
    if (shortKd === "") {
        return {
            error: "shortKd is required"
        };
    }
    if (index === "") {

        return {
            error: "index is required"
        };
    }
    if (isNaN(index)) {
        return {
            error: "index is not a number"
        };
    }
    if (index < 1 || index > 9) {
        return {
            error: "index is not 1-9"
        };
    }
    if (lang === "") {
        return {
            error: "lang is required"
        };
    }
 
}   