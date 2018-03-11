import {
    APPEND,
    CHANGE,
    CLOSE,
    DESTROY,
    DESTROYED,
    FORM,
    ON,
    POPPER,
    QUERY,
    REMOVE,
    SELECT,
    SELECTED,
    UPDATE,
    UPDATED,
} from './constants';
import kebabJoin from 'caboodle-x/kebabJoin';

export const EVENT_APPEND = kebabJoin(APPEND);
export const EVENT_ON_CHANGE = kebabJoin(ON, CHANGE);
export const EVENT_ON_DESTROY_POPPER = kebabJoin(ON, DESTROY, POPPER);
export const EVENT_ON_DESTROYED_POPPER = kebabJoin(ON, DESTROYED, POPPER);
export const EVENT_ON_FORM_CHANGE = kebabJoin(ON, FORM, CHANGE);
export const EVENT_ON_QUERY_CHANGE = kebabJoin(ON, QUERY, CHANGE);
export const EVENT_ON_SELECT_CLOSE = kebabJoin(ON, SELECT, CLOSE);
export const EVENT_ON_SELECT_SELECTED = kebabJoin(ON, SELECT, SELECTED);
export const EVENT_ON_UPDATE_POPPER = kebabJoin(ON, UPDATE, POPPER);
export const EVENT_ON_UPDATED_POPPER = kebabJoin(ON, UPDATED, POPPER);
export const EVENT_REMOVE = kebabJoin(REMOVE);
