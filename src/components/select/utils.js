import {
    BOTTOM,
} from '@/utils/constants';
import {
    PLACEMENT_LIST,
    PLACEMENT_MAP,
} from '@/utils/enums';
import defaultToOneOf from 'caboodle-x/defaultToOneOf';
import isStringTypeOrNumberType from 'caboodle-x/isStringTypeOrNumberType';

export const debounce = (fn) => {
    let waiting;

    return function bound(...args){
        if (waiting) {
            return;
        }

        waiting = true;

        this.$nextTick(() => {
            waiting = false;
            fn.apply(this, args);
        });
    };
};

export const isValidValue = value => (Array.isArray(value) ?
    value.every(isStringTypeOrNumberType) :
    isStringTypeOrNumberType(value));

export const isEqualOption = (a, b) => a.label === b.label && a.value === b.value;

export const isUniqOptions = (array) => {
    if (!Array.isArray(array)) {
        return false;
    }

    const isIncluded = (option, index) => !!array.slice(index + 1).find(item => isEqualOption(option, item));

    return !array.some(isIncluded);
};

export const getPlacement = placement => defaultToOneOf(PLACEMENT_MAP[placement], PLACEMENT_LIST, BOTTOM);
