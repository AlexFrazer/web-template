export const OPEN = 'sidebar/OPEN';
export const CLOSE = 'sidebar/CLOSE';
export const OPENED = 'sidebar/OPENED';

export function open(): { type: string } {
  return { type: OPEN };
}

export function close(): { type: string } {
  return { type: CLOSE };
}

export function opened(): { type: string } {
  return { type: OPENED };
}

export function toggle(): (dispatch: Function, getState: Function) => {} {
  return (dispatch, getState) => {
    const { isOpen } = getState().sidebar;
    dispatch({ type: isOpen ? CLOSE : OPEN });
  };
}
