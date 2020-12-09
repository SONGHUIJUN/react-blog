export const CHANGE_LOADING = "CHANGE_LOADING";

export function showLoading() {
    return {
        type: CHANGE_LOADING,
        payload: true
    };
}

export function hideLoading() {
    return {
        type: CHANGE_LOADING,
        payload: false
    }
}
