const CLICK = 'click';
const captureInstances = Object.create(null);
const nonCaptureInstances = Object.create(null);
const instancesList = [captureInstances, nonCaptureInstances];

/**
 * The common event handler for bot capture and non-capture events.
 *
 * @param {!Object} context - The event context.
 * @param {!Object} instances - The capture or non-capture registered instances.
 * @param {Event} event - The event object.
 * @returns {undefined} Default.
 */
const commonHandler = function _onCommonEvent(context, instances, event) {
    const {target} = event;

    const itemIteratee = function _itemIteratee(item) {
        const {el} = item;

        if (el !== target && !el.contains(target)) {
            const {binding} = item;

            if (binding.modifiers.stop) {
                event.stopPropagation();
            }

            if (binding.modifiers.prevent) {
                event.preventDefault();
            }

            binding.value.call(context, event);
        }
    };

    const keysIteratee = function _keysIteratee(eventName) {
        return instances[eventName].forEach(itemIteratee);
    };

    Object.keys(instances).forEach(keysIteratee);
};

/**
 * Event handler for capture events.
 *
 * @param {Event} event - The event object.
 */
const captureEventHandler = function onCaptureEvent(event) {
    /* eslint-disable-next-line babel/no-invalid-this */
    commonHandler(this, captureInstances, event);
};

/**
 * Event handler for non-capture events.
 *
 * @param {Event} event - The event object.
 */
const nonCaptureEventHandler = function onNonCaptureEvent(event) {
    /* eslint-disable-next-line babel/no-invalid-this */
    commonHandler(this, nonCaptureInstances, event);
};

/**
 * Get the correct event handler: Capture or non-capture.
 *
 * @param {boolean} useCapture - Indicate which handler to use; 'true' to use
 *  capture handler or 'false' for non-capture.
 * @returns {Function} - The event handler.
 */
const getEventHandler = function _getEventHandler(useCapture) {
    return useCapture ? captureEventHandler : nonCaptureEventHandler;
};

/**
 * The directive definition.
 * {@link https://vuejs.org/v2/guide/custom-directive.html|Custom directive}
 *
 * @namespace
 * @property {!Object} $_captureInstances - Registered capture instances.
 * @property {!Object} $_nonCaptureInstances - Registered non-capture instances.
 * @property {Function} $_onCaptureEvent - Event handler for capture events.
 * @property {Function} $_onNonCaptureEvent - Event handler for non-capture events.
 * @property {Function} bind - Called only once, when the directive is first
 *  bound to the element.
 * @property {Function} unbind - Called only once, when the directive is unbound
 *  from the element.
 * @property {string} version - The version number of this release.
 */
export const directive = Object.defineProperties(
    {},
    {
        $_captureInstances: {
            value: captureInstances,
        },

        $_nonCaptureInstances: {
            value: nonCaptureInstances,
        },

        $_onCaptureEvent: {
            value: captureEventHandler,
        },

        $_onNonCaptureEvent: {
            value: nonCaptureEventHandler,
        },

        /**
         * 注意，这里的 arg 修改为 capture，这样可以动态设置，原先的事件作为 modifiers
         * */
        bind: {
            value: function bind(el, binding) {
                if (typeof binding.value !== 'function') {
                    throw new TypeError('Binding value must be a function.');
                }

                let eventType;
                const modifiers = binding.modifiers;
                if (modifiers.click) eventType = 'click';
                else if (modifiers.mousedown) eventType = 'mousedown';
                else if (modifiers.touchstart) eventType = 'touchstart';
                else eventType = CLICK;

                const useCapture = binding.arg;

                const normalisedBinding = {
                    ...binding,
                    ...{
                        modifiers: {
                            ...{
                                capture: false,
                                prevent: false,
                                stop: false,
                            },
                            ...binding.modifiers,
                        },
                    },
                };

                const instances = useCapture ? captureInstances : nonCaptureInstances;

                if (!Array.isArray(instances[eventType])) {
                    instances[eventType] = [];
                }

                if (instances[eventType].push({el, binding: normalisedBinding}) === 1) {
                    if (typeof document === 'object' && document) {
                        document.addEventListener(
                            eventType,
                            getEventHandler(useCapture),
                            useCapture,
                        );
                    }
                }
            },
        },

        unbind: {
            value: function unbind(el) {
                const compareElements = function _compareElements(item) {
                    return item.el !== el;
                };

                const instancesIteratee = function _instancesIteratee(instances) {
                    const instanceKeys = Object.keys(instances);

                    if (instanceKeys.length) {
                        const useCapture = instances === captureInstances;

                        const keysIteratee = function _keysIteratee(eventName) {
                            const newInstance = instances[eventName].filter(compareElements);

                            if (newInstance.length) {
                                instances[eventName] = newInstance;
                            } else {
                                if (typeof document === 'object' && document) {
                                    document.removeEventListener(
                                        eventName,
                                        getEventHandler(useCapture),
                                        useCapture,
                                    );
                                }

                                delete instances[eventName];
                            }
                        };

                        instanceKeys.forEach(keysIteratee);
                    }
                };

                instancesList.forEach(instancesIteratee);
            },
        },

        /* Note: This needs to be manually updated to match package.json. */
        version: {
            enumerable: true,
            value: '3.7.1',
        },
    },
);

/**
 * @typedef {Function} Vue - The constructor.
 * @property {Function} directive - You can register a global custom directive
 *  with the Vue.directive() method, passing in a directiveID followed by a
 *  definition object.
 */

/**
 * A Vue.js plugin should expose an install method. The method will be called
 * with the Vue constructor as the first argument, along with possible options.
 * {@link https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin|Writing a plugin}.
 *
 * @param {Vue} Vue - The Vue function.
 */
export function install(Vue) {
    Vue.directive('click-outside', directive);
}
