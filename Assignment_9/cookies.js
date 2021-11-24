// class CookieUtil สำหรับการ get set unset 
export class CookieUtil {
    // get จะรับ parameter name เพื่อเอาค่า value ออกมา
    static get(name) {
        let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName), cookieValue = null;
        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    }

    /* set จะทำการกำหนดวันที่ให้หมดอายุเป็นวันที่ Fri Dec 31 2021 00:00:00 GMT+0700
    มีรับ parameter name และ value โดย cookieText จะทำการเก็บ ชื่อ ผลลัพธ์ และวันหมดอายุ */
    static set(name, value) {
        let expireDate = new Date('2021-12-31T00:00');
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        if (expireDate instanceof Date) {
            cookieText += `; expires=${expireDate.toUTCString()}`;
        }
        document.cookie = cookieText;
    }

    // unset สำหรับ set cookie ใหม่
    static unset(name) {
        CookieUtil.set(name, '');
    }
};