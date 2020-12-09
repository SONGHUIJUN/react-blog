export const CHANGE_TAB = "CHANGE_TAB";

export function changeTabs(menuKey) {
    return {
        type: CHANGE_TAB,
        payload: menuKey
    };
}
