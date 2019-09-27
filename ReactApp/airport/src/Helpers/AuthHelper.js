
import moment from 'moment';
import _ from 'lodash'

export const checkIsAuth = function () {
    const token = JSON.parse(sessionStorage.getItem('token'));

    try {
        if (_.isEmpty(token) || token === null) {
            return false
        }
    } catch (e) {
        console.log('ERROR', e.toString())
    }

    return true
}


export const checkIfTokenExpire = function () {
    try {
        if (checkIsAuth()) {
            const token = JSON.parse(sessionStorage.getItem('token'));
            const { expires_in } = token;
            const tokenExpire = moment().isAfter(expires_in);
            if (tokenExpire) {
                return true
            } 
        }else{
            return false
        }
    } catch (e) {
        console.log('ERROR', e.toString())
    }
}

export const setTokenToSessionStorage = function (token) {
    sessionStorage.setItem('token', JSON.stringify(token));   
}


export const logOut = function (callback) {
    try {
        if (checkIsAuth()) {
            removeTokenFromSessionStorage()
            deleteAuthUserFromSessionStorage()
            callback()
        }
    } catch (e) {
        console.log('ERROR', e.toString())
    }
}


export const getTokenFromSessionStorage = function () {
     if (checkIsAuth()) {
        const token = JSON.parse(sessionStorage.getItem('token'));
        const currentToken = `Bearer ${token}`
        return currentToken
     }
}


export const getRefreshTokenFromSessionStorage = function () {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const { refresh_token } = token;
    return refresh_token
}


export const removeTokenFromSessionStorage = function () {
    try {
        sessionStorage.removeItem('token')
    } catch (e) {
        console.log('ERROR', e.toString())
    }
}


export const setAuthUserToSessionStorage = function (user) {
    const { email, firstName, lastName, phoneNumber, roleSet:[{id,roleName}], userId, username} = user;
    const userInfo = { email, firstName, lastName, phoneNumber, roleSet:[{id,roleName}], userId, username }
    try {
        if (checkIsAuth()) {
            sessionStorage.setItem('user', JSON.stringify(userInfo));
        }
    } catch (e) {
        console.log('ERROR', e.toString())
    }
}


export const getAuthUserFromSessionStorage = function () {
    try {
        if (checkIsAuth()) {
            const user = JSON.parse(sessionStorage.getItem('user'));   
            return user
        } else {
            return ''
        }

    } catch (e) {
        console.log('ERROR', e.toString())
    }
}


export const deleteAuthUserFromSessionStorage = function () {
    try {
        sessionStorage.removeItem('user')
    } catch (e) {
        console.log('ERROR', e.toString())
    }
}


export const isAdmin = function () {
    try {
        if (checkIsAuth()) {
            const userRole = getAuthUserFromSessionStorage()
            const isAdmin = userRole.roleSet[0].roleName === 'ROLE_ADMIN' ? true : false

            return isAdmin
        } else {     
            return false
        }
    } catch (e) {
        console.log('ERROR', e.toString())
    }
}
export const isAdminAirport = function () {
    try {
        if (checkIsAuth()) {
            const userRole = getAuthUserFromSessionStorage()
            const isAdmin = userRole.roleSet[0].roleName === 'ROLE_ADMIN_AIRCOMPANY' ? true : false

            return isAdminAirport
        } else {     
            return false
        }
    } catch (e) {
        console.log('ERROR', e.toString())
    }
}


