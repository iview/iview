// i18n async loader
import locale from './index';

const defaultLang = locale.currentLanguage;
const locales = {
    [defaultLang.i.locale]: defaultLang
    // more will be added
};

function loadPackage(lang, ref) {
    if (typeof ref == 'string') {
        // load remote
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.onerror = reject;
            script.onload = function() {
                locales[lang] = window['iview/locale'].default;
                resolve();
            };
            script.src = ref;
            document.querySelector('head').appendChild(script);
        });
    } else if (ref.i.locale == lang) {
        // load object directly
        locales[lang] = ref;
        return Promise.resolve(); // load object directly
    }
}

function queueHandler(arr) {
    return new Promise((resolve, reject) => {
        const next = arr.shift();
        if (!next) return resolve();

        return loadPackage(next.lang, next.ref).then(() => resolve(queueHandler(arr))).catch(reject);
    });
}

function applyLanguage(langCode) {
    const langObject = locales[langCode] || (window['iview/locale'] && window['iview/locale'].default);
    if (langCode && langCode === langObject.i.locale) locale.use(langObject);
    else console.log(`The ${langCode} language pack is not loaded.`); // eslint-disable-line no-console
}

export default (langCode, languages = {}) => {

    const queue = Object.keys(languages).reduce((arr, lang) => {
        return arr.concat({ lang: lang, ref: languages[lang] });
    }, []);

	// apply langCode and return available locales
    return queueHandler(queue).then(() => {
        applyLanguage(langCode);
        return locales;
    });
};
