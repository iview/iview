/**
 * Eslint rules that differ from airbnb base but that are temporary and should be addressed.
 * @see {@link https://eslint.org/docs/rules/|rules}
 */
const temporary = {
    'arrow-body-style': 'off',
    'array-callback-return': 'off',
    camelcase: 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'dot-notation': 'off',
    eqeqeq: 'off',
    'func-names': 'off',
    'guard-for-in': 'off',
    indent: 'off',
    'indent-legacy': ['error', 4, {SwitchCase: 1}],
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'no-lonely-if': 'off',
    'no-else-return': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-useless-escape': 'off',
    'no-prototype-builtins': 'off',
    'no-multi-assign': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'no-return-assign': 'off',
    'no-throw-literal': 'off',
    'no-loop-func': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-properties': 'off',
    'no-useless-computed-key': 'off',
    'no-sequences': 'off',
    'no-unneeded-ternary': 'off',
    'operator-assignment': 'off',
    'object-shorthand': 'off',
    'one-var': 'off',
    'prefer-destructuring': 'off',
    'prefer-const': 'off',
    'prefer-template': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-spread': 'off',
    'prettier/prettier': 'off',
    'prefer-rest-params': 'off',
    radix: 'off',
    semi: ['error', 'always'],
    'spaced-comment': 'off',
    'import/newline-after-import': 'off',
    'import/no-named-as-default-member': 'off',
    'import/first': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': 'off',
    'import/prefer-default-export': 'off',
    'babel/object-curly-spacing': 'off',
    'babel/no-invalid-this': 'off',
    'babel/new-cap': 'off',
    'babel/semi': 'off',
    'eslint-comments/no-use': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'eslint-comments/no-unused-disable': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    'promise/always-return': 'off',
    'promise/avoid-new': 'off',
    'prefer-object-spread/prefer-object-spread': 'off',
    'promise/catch-or-return': 'off',
    'lodash/import-scope': 'off',
    'jsdoc/require-hyphen-before-param-description': 'off',
    'jsdoc/check-param-names': 'off',
    'jsdoc/check-types': 'off',
    'jsdoc/newline-after-description': 'off',
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-example': 'off',
    'jsdoc/check-tag-names': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns-type': 'off',
    'vue/html-indent': 'off',
    'vue/order-in-components': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': 'off',
    'vue/attributes-order': 'off',
    'vue/require-v-for-key': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-confusing-v-for-v-if': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-multi-spaces': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/this-in-template': 'off',
    'vue/html-quotes': 'off',
    'vue/valid-v-model': 'off',
    'vue/no-unused-vars': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/name-property-casing': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/valid-v-for': 'off',
    'vue/valid-v-bind': 'off',
};

/**
 * Eslint rules that differ from airbnb base.
 * @see {@link https://eslint.org/docs/rules/|rules}
 */
const differ = {
    'global-require': 'warn',
    // 'max-len': ['error', 130],
    'no-console': ['error'],
    // 'no-param-reassign': 'warn',
    'quotes': ['error', 'single'],
    'sort-keys': 'off', // Will be maintained bu DevTools script.
};

/**
 * Additional ESLint rules for ESLint's directive-comments.
 * @see {@link https://github.com/mysticatea/eslint-plugin-eslint-comments|plugin}
 */
const eslintComments = {
    // 'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    // 'eslint-comments/no-unlimited-disable': 'error',
    // 'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    // 'eslint-comments/no-use': 'warn',
};

/**
 * An ESlint rule plugin companion to babel-eslint.
 * @see {@link https://github.com/babel/eslint-plugin-babel|plugin}
 */
const classProperty = {
    // 'babel/new-cap': 'error',
    // 'babel/no-invalid-this': 'error',
    // 'babel/object-curly-spacing': 'error',
    // 'babel/semi': 'error',
};

/**
 * Lint the browser compatibility of your code.
 * Good to know during development so we make sure that we have all polyfill and transforms.
 * @see {@link https://github.com/amilajack/eslint-plugin-compat|plugin}
 */
const compat = {
    'compat/compat': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
};

/**
 * Helps you in tracking down problems when you are using css-modules.
 * @see {@link https://github.com/atfzl/eslint-plugin-css-modules|plugin}
 */
const cssModules = {
    'css-modules/no-undef-class': 'warn',
    'css-modules/no-unused-class': 'off',
};

/**
 * ESLint plugin to prevent use of extended native objects.
 * @see {@link https://github.com/dustinspecker/eslint-plugin-no-use-extend-native|plugin}
 */
const extendNative = {
    'no-use-extend-native/no-use-extend-native': 'error',
};

/**
 * ESLint plugin with rules that help validate proper imports.
 * @see {@link https://github.com/benmosher/eslint-plugin-import|plugin}
 */
const importExport = {
    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: ['webpack.*.js'],
        },
    ],
};

/**
 * ESLint plugin for Jest.
 * @see {@link https://github.com/jest-community/eslint-plugin-jest|plugin}
 */
const jest = {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
};

/**
 * JSDoc specific linting rules for ESLint.
 * @see {@link https://github.com/gajus/eslint-plugin-jsdoc|plugin}
 */
const jsdoc = {
    // 'jsdoc/require-hyphen-before-param-description': 'warn',
    // 'jsdoc/check-param-names': 'warn',
    // 'jsdoc/check-types': 'warn',
    // 'jsdoc/newline-after-description': 'warn',
    // 'jsdoc/require-description-complete-sentence': 'warn',
    // 'jsdoc/require-example': 'off',
    // 'jsdoc/check-tag-names': 'warn',
    // 'jsdoc/require-param': 'warn',
    // 'jsdoc/require-param-description': 'warn',
    // 'jsdoc/require-param-type': 'warn',
    // 'jsdoc/require-returns-description': 'warn',
    // 'jsdoc/require-returns-type': 'warn',
};

/**
 * ESLint rules for lodash.
 * @see {@link https://github.com/wix/eslint-plugin-lodash|plugin}
 */
const lodash = {
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/prefer-constant': 'off',
    'lodash/prefer-includes': 'off',
    'lodash/prefer-is-nil': 'off',
    'lodash/prefer-lodash-chain': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-get': 'off',
    'lodash/prefer-matches': 'off',
    'lodash/prefer-noop': 'off',
    'lodash/prefer-over-quantifier': 'off',
    'lodash/prefer-some': 'off',
    'lodash/prefer-startswith': 'off',
};

/**
 * ESLint rule for suggesting that object spread properties be used.
 * @see {@link https://github.com/bryanrsmith/eslint-plugin-prefer-object-spread|plugin}
 */
const objectSpread = {
    // 'prefer-object-spread/prefer-object-spread': 'error',
};

/**
 * ESLint rule for prettier.
 * @see {@link https://prettier.io/docs/en/eslint.html|plugin}
 */
const prettier = {
    // 'prettier/prettier': 'error',
};

/**
 * An ESLint rule for enforcing consistent ES6 class member order.
 * @see {@link https://github.com/bryanrsmith/eslint-plugin-sort-class-members|plugin}
 */
const sortClass = {
    'sort-class-members/sort-class-members': [
        'error',
        {
            accessorPairPositioning: 'getThenSet',
            order: [
                '[static-properties]',
                '[static-methods]',
                '[properties]',
                '[conventional-private-properties]',
                'constructor',
                '[methods]',
                '[conventional-private-methods]',
            ],
        },
    ],
};

/**
 * Official ESLint plugin for Vue.js
 * @see {@link https://github.com/vuejs/eslint-plugin-vue|plugin}
 */
const vue = {
    // 'vue/order-in-components': 'error',
    'vue/v-bind-style': ['error', 'shorthand'],
};

/** configuration */
module.exports = {
    /**
     * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-environments|env}
     */
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },

    /**
     * @see {@link https://eslint.org/docs/user-guide/configuring#extending-configuration-files|extends}
     */
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:eslint-comments/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:promise/recommended',
        'plugin:lodash/recommended',
        'plugin:css-modules/recommended',
        'plugin:vue/recommended',
    ],

    /**
     * You can define global variables here.
     * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-globals|globals}
     */
    globals: {},

    /**
     * Sometimes a more fine-controlled configuration is necessary, for example if the configuration
     * for files within the same directory has to be different.
     * @see {@link https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns|overrides}
     */
    overrides: [
        {
            files: ['postcss.config.js', 'webpack.*.js'],
            rules: {
                'import/no-extraneous-dependencies': [
                    'error',
                    {
                        devDependencies: true,
                    },
                ],
                'no-console': 'off',
            },
        },
        {
            files: ['webpack.*.js'],
            rules: {
                'global-require': 'off',
            },
        },
    ],

    /**
     * @see {@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options|parserOptions}
     */
    parserOptions: {
        ecmaFeatures: {
            impliedStrict: true,
        },
        ecmaVersion: 2018,
        parser: 'babel-eslint',
        sourceType: 'module',
    },

    /**
     * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-plugins|plugins}
     */
    plugins: [
        'babel',
        'compat',
        'css-modules',
        'eslint-comments',
        'html',
        'jest',
        'jsdoc',
        'json',
        'lodash',
        'no-use-extend-native',
        'prefer-object-spread',
        'prettier',
        'promise',
        'sort-class-members',
        'vue',
    ],

    /**
     * @see {@link https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy|root}
     */
    root: true,

    /**
     * @see {@link https://eslint.org/docs/user-guide/configuring#configuring-rules|rules
     */
    rules: {
        ...temporary,
        ...objectSpread,
        ...differ,
        ...cssModules,
        ...extendNative,
        ...classProperty,
        ...jest,
        ...lodash,
        ...compat,
        ...sortClass,
        ...jsdoc,
        ...vue,
        ...eslintComments,
        ...importExport,
        ...prettier,
    },

    /**
     * Webpack-literate module resolution plugin for eslint-plugin-import.
     * @see {@link https://www.npmjs.com/package/eslint-import-resolver-webpack|plugin}
     */
    settings: {
        'html/html-extensions': [
            '.erb',
            '.handlebars',
            '.hbs',
            '.htm',
            '.html',
            '.mustache',
            '.nunjucks',
            '.php',
            '.tag',
            '.twig',
            '.we',
        ],
        'import/resolver': {
            webpack: {
                config: './build/webpack.dev.config.js',
            },
        },
        polyfills: ['promises'],
    },
};
