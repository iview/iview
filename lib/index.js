'use strict';

var _newArrowCheck2 = require('babel-runtime/helpers/newArrowCheck');

var _newArrowCheck3 = _interopRequireDefault(_newArrowCheck2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _affix = require('./components/affix');

var _affix2 = _interopRequireDefault(_affix);

var _alert = require('./components/alert');

var _alert2 = _interopRequireDefault(_alert);

var _anchor = require('./components/anchor');

var _anchor2 = _interopRequireDefault(_anchor);

var _anchorLink = require('./components/anchor-link');

var _anchorLink2 = _interopRequireDefault(_anchorLink);

var _autoComplete = require('./components/auto-complete');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _avatar = require('./components/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _backTop = require('./components/back-top');

var _backTop2 = _interopRequireDefault(_backTop);

var _badge = require('./components/badge');

var _badge2 = _interopRequireDefault(_badge);

var _breadcrumb = require('./components/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _button = require('./components/button');

var _button2 = _interopRequireDefault(_button);

var _card = require('./components/card');

var _card2 = _interopRequireDefault(_card);

var _carousel = require('./components/carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _cascader = require('./components/cascader');

var _cascader2 = _interopRequireDefault(_cascader);

var _cell = require('./components/cell');

var _cell2 = _interopRequireDefault(_cell);

var _checkbox = require('./components/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _circle = require('./components/circle');

var _circle2 = _interopRequireDefault(_circle);

var _collapse = require('./components/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

var _colorPicker = require('./components/color-picker');

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _content = require('./components/content');

var _content2 = _interopRequireDefault(_content);

var _datePicker = require('./components/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _divider = require('./components/divider');

var _divider2 = _interopRequireDefault(_divider);

var _drawer = require('./components/drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _dropdown = require('./components/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _footer = require('./components/footer');

var _footer2 = _interopRequireDefault(_footer);

var _form = require('./components/form');

var _form2 = _interopRequireDefault(_form);

var _header = require('./components/header');

var _header2 = _interopRequireDefault(_header);

var _icon = require('./components/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('./components/input');

var _input2 = _interopRequireDefault(_input);

var _inputNumber = require('./components/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _scroll = require('./components/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _split = require('./components/split');

var _split2 = _interopRequireDefault(_split);

var _layout = require('./components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _loadingBar = require('./components/loading-bar');

var _loadingBar2 = _interopRequireDefault(_loadingBar);

var _menu = require('./components/menu');

var _menu2 = _interopRequireDefault(_menu);

var _message = require('./components/message');

var _message2 = _interopRequireDefault(_message);

var _modal = require('./components/modal');

var _modal2 = _interopRequireDefault(_modal);

var _notice = require('./components/notice');

var _notice2 = _interopRequireDefault(_notice);

var _page = require('./components/page');

var _page2 = _interopRequireDefault(_page);

var _poptip = require('./components/poptip');

var _poptip2 = _interopRequireDefault(_poptip);

var _progress = require('./components/progress');

var _progress2 = _interopRequireDefault(_progress);

var _radio = require('./components/radio');

var _radio2 = _interopRequireDefault(_radio);

var _rate = require('./components/rate');

var _rate2 = _interopRequireDefault(_rate);

var _sider = require('./components/sider');

var _sider2 = _interopRequireDefault(_sider);

var _slider = require('./components/slider');

var _slider2 = _interopRequireDefault(_slider);

var _spin = require('./components/spin');

var _spin2 = _interopRequireDefault(_spin);

var _steps = require('./components/steps');

var _steps2 = _interopRequireDefault(_steps);

var _switch = require('./components/switch');

var _switch2 = _interopRequireDefault(_switch);

var _table = require('./components/table');

var _table2 = _interopRequireDefault(_table);

var _tabs = require('./components/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _tag = require('./components/tag');

var _tag2 = _interopRequireDefault(_tag);

var _time = require('./components/time');

var _time2 = _interopRequireDefault(_time);

var _timeline = require('./components/timeline');

var _timeline2 = _interopRequireDefault(_timeline);

var _timePicker = require('./components/time-picker');

var _timePicker2 = _interopRequireDefault(_timePicker);

var _tooltip = require('./components/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _transfer = require('./components/transfer');

var _transfer2 = _interopRequireDefault(_transfer);

var _tree = require('./components/tree');

var _tree2 = _interopRequireDefault(_tree);

var _upload = require('./components/upload');

var _upload2 = _interopRequireDefault(_upload);

var _grid = require('./components/grid');

var _select = require('./components/select');

var _index = require('./locale/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {
    Affix: _affix2.default,
    Alert: _alert2.default,
    Anchor: _anchor2.default,
    AnchorLink: _anchorLink2.default,
    AutoComplete: _autoComplete2.default,
    Avatar: _avatar2.default,
    BackTop: _backTop2.default,
    Badge: _badge2.default,
    Breadcrumb: _breadcrumb2.default,
    BreadcrumbItem: _breadcrumb2.default.Item,
    Button: _button2.default,
    ButtonGroup: _button2.default.Group,
    Card: _card2.default,
    Carousel: _carousel2.default,
    CarouselItem: _carousel2.default.Item,
    Cascader: _cascader2.default,
    Cell: _cell2.default,
    CellGroup: _cell2.default.Group,
    Checkbox: _checkbox2.default,
    CheckboxGroup: _checkbox2.default.Group,
    Col: _grid.Col,
    Collapse: _collapse2.default,
    ColorPicker: _colorPicker2.default,
    Content: _content2.default,
    DatePicker: _datePicker2.default,
    Divider: _divider2.default,
    Drawer: _drawer2.default,
    Dropdown: _dropdown2.default,
    DropdownItem: _dropdown2.default.Item,
    DropdownMenu: _dropdown2.default.Menu,
    Footer: _footer2.default,
    Form: _form2.default,
    FormItem: _form2.default.Item,
    Header: _header2.default,
    Icon: _icon2.default,
    Input: _input2.default,
    InputNumber: _inputNumber2.default,
    Scroll: _scroll2.default,
    Sider: _sider2.default,
    Split: _split2.default,
    Submenu: _menu2.default.Sub,
    Layout: _layout2.default,
    LoadingBar: _loadingBar2.default,
    Menu: _menu2.default,
    MenuGroup: _menu2.default.Group,
    MenuItem: _menu2.default.Item,
    Message: _message2.default,
    Modal: _modal2.default,
    Notice: _notice2.default,
    Option: _select.Option,
    OptionGroup: _select.OptionGroup,
    Page: _page2.default,
    Panel: _collapse2.default.Panel,
    Poptip: _poptip2.default,
    Progress: _progress2.default,
    Radio: _radio2.default,
    RadioGroup: _radio2.default.Group,
    Rate: _rate2.default,
    Row: _grid.Row,
    Select: _select.Select,
    Slider: _slider2.default,
    Spin: _spin2.default,
    Step: _steps2.default.Step,
    Steps: _steps2.default,
    Table: _table2.default,
    Tabs: _tabs2.default,
    TabPane: _tabs2.default.Pane,
    Tag: _tag2.default,
    Time: _time2.default,
    Timeline: _timeline2.default,
    TimelineItem: _timeline2.default.Item,
    TimePicker: _timePicker2.default,
    Tooltip: _tooltip2.default,
    Transfer: _transfer2.default,
    Tree: _tree2.default,
    Upload: _upload2.default
};

var iview = (0, _extends3.default)({}, components, {
    iButton: _button2.default,
    iCircle: _circle2.default,
    iCol: _grid.Col,
    iContent: _content2.default,
    iForm: _form2.default,
    iFooter: _footer2.default,
    iHeader: _header2.default,
    iInput: _input2.default,
    iMenu: _menu2.default,
    iOption: _select.Option,
    iProgress: _progress2.default,
    iSelect: _select.Select,
    iSwitch: _switch2.default,
    iTable: _table2.default,
    iTime: _time2.default
});

var install = function install(Vue) {
    var _this = this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (install.installed) return;
    _index2.default.use(opts.locale);
    _index2.default.i18n(opts.i18n);

    (0, _keys2.default)(iview).forEach(function (key) {
        (0, _newArrowCheck3.default)(this, _this);

        Vue.component(key, iview[key]);
    }.bind(this));

    Vue.prototype.$IVIEW = {
        size: opts.size || '',
        transfer: 'transfer' in opts ? opts.transfer : ''
    };

    Vue.prototype.$Loading = _loadingBar2.default;
    Vue.prototype.$Message = _message2.default;
    Vue.prototype.$Modal = _modal2.default;
    Vue.prototype.$Notice = _notice2.default;
    Vue.prototype.$Spin = _spin2.default;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

var API = (0, _extends3.default)({
    version: process.env.VERSION,
    locale: _index2.default.use,
    i18n: _index2.default.i18n,
    install: install,
    Circle: _circle2.default,
    Switch: _switch2.default
}, components);

API.lang = function (code) {
    (0, _newArrowCheck3.default)(undefined, undefined);

    var langObject = window['iview/locale'].default;
    if (code === langObject.i.locale) _index2.default.use(langObject);else console.log('The ' + String(code) + ' language pack is not loaded.');
}.bind(undefined);

module.exports.default = module.exports = API;