import ActionTypes from "../Constant/ActionType";
// import ApiService from "../Service/ApiUsersService";


export const getAllUsers = () => {
    return {
        type: ActionTypes.GET_USERS

    };
};

export const getUsersSucceed = (payload) => {
    return {
        type: ActionTypes.GET_USERS_SUCCEED,
        payload
    }
}
export const getUsersFailed = (payload) => {
    return {
        type: ActionTypes.GET_USERS_FAILED,
        payload
    }
}


export const createUsers = (payload) => {
    return {
        type: ActionTypes.ADD_USER,
        payload
    }
};
export const createUserSucceed = (payload) => {
    return {
        type: ActionTypes.ADD_USER_SUCCEED,
        payload
    }
}

export const createUserFailed = (payload) => {
    return {
        type: ActionTypes.ADD_USER_FAILED,
        payload
    }
}

export const updateUsers = (payload) => {
    return {
        type: ActionTypes.UPDATE_USER,
        payload
    }
}
export const updateUsersSucceed = (payload) => {
    return {
        type: ActionTypes.UPDATE_USER_SUCCEED,
        payload
    }
}
export const updateUsersFailed = (payload) => {
    return {
        type: ActionTypes.UPDATE_USER_FAILED,
        payload
    }
}
export const deleteUser = (payload) => {
    return {
        type: ActionTypes.DEL_USER,
        payload
    }
}
export const deleteUserSucceed = (payload) => {
    return {
        type: ActionTypes.DEL_USER_SUCCEED,
        payload
    }
}
export const deleteUserFailed = (payload) => {
    return {
        type: ActionTypes.DEL_USER_FAILED,
        payload
    }
}