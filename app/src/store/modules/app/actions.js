import types from "./types";

export function updateUser(user) {
    return {type: types.UPDATE_USER, user};
}

export function createUse() {
    return {type: types.CREATE_USER};
}