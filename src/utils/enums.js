import {
    BOTTOM,
    DEFAULT,
    LARGE,
    SMALL,
    TOP
} from './constants';
import {
    ALT,
    ARROWLEFT,
    ARROWRIGHT,
    CAPSLOCK,
    CONTROL,
    ENTER,
    META,
    SHIFT,
    TAB,
} from './kbEventKeys';

export const PLACEMENT_LIST = Object.freeze([BOTTOM, TOP]);
export const PLACEMENT_MAP = Object.freeze({
    [BOTTOM]: TOP,
    [TOP]: BOTTOM,
});

export const SMALL_LARGE_DEFAULT_LIST = Object.freeze([SMALL, LARGE, DEFAULT]);
export const STRING_NUMBER_LIST = Object.freeze([String, Number]);
export const STRING_NUMBER_ARRAY_LIST = Object.freeze([String, Number, Array]);

export const IGNORE_KEY_LIST = Object.freeze([
    ALT,
    ARROWLEFT,
    ARROWRIGHT,
    CAPSLOCK,
    CONTROL,
    ENTER,
    META,
    SHIFT,
    TAB,
]);
