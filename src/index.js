// es6 polyfill
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';

import Affix from './components/affix';
import Alert from './components/alert';
import AutoComplete from './components/auto-complete';
import Avatar from './components/avatar';
import BackTop from './components/back-top';
import Badge from './components/badge';
import Breadcrumb from './components/breadcrumb';
import Button from './components/button';
import Card from './components/card';
import Carousel from './components/carousel';
import Cascader from './components/cascader';
import Checkbox from './components/checkbox';
import Circle from './components/circle';
import Collapse from './components/collapse';
import ColorPicker from './components/color-picker';
import DatePicker from './components/date-picker';
import Dropdown from './components/dropdown';
import Form from './components/form';
import Icon from './components/icon';
import Input from './components/input';
import InputNumber from './components/input-number';
import Scroll from './components/scroll';
import LoadingBar from './components/loading-bar';
import Menu from './components/menu';
import Message from './components/message';
import Modal from './components/modal';
import Notice from './components/notice';
import Page from './components/page';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Radio from './components/radio';
import Rate from './components/rate';
import Slider from './components/slider';
import Spin from './components/spin';
import Steps from './components/steps';
import Switch from './components/switch';
import Table from './components/table';
import Tabs from './components/tabs';
import Tag from './components/tag';
import Timeline from './components/timeline';
import TimePicker from './components/time-picker';
import Tooltip from './components/tooltip';
import Transfer from './components/transfer';
import Tree from './components/tree';
import Upload from './components/upload';
import {Row, Col} from './components/grid';
import {Select, Option, OptionGroup} from './components/select';
import locale from './locale/index';

const components = {
    Affix,
    Alert,
    AutoComplete,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    Button,
    ButtonGroup: Button.Group,
    Card,
    Carousel,
    CarouselItem: Carousel.Item,
    Cascader,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    Col,
    Collapse,
    ColorPicker,
    DatePicker,
    Dropdown,
    DropdownItem: Dropdown.Item,
    DropdownMenu: Dropdown.Menu,
    Form,
    FormItem: Form.Item,
    Icon,
    Input,
    InputNumber,
    Scroll,
    LoadingBar,
    Menu,
    MenuGroup: Menu.Group,
    MenuItem: Menu.Item,
    Submenu: Menu.Sub,
    Message,
    Modal,
    Notice,
    Option: Option,
    OptionGroup,
    Page,
    Panel: Collapse.Panel,
    Poptip,
    Progress,
    Radio,
    RadioGroup: Radio.Group,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Step: Steps.Step,
    Steps,
    Table,
    Tabs: Tabs,
    TabPane: Tabs.Pane,
    Tag,
    Timeline,
    TimelineItem: Timeline.Item,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload
};

const iview = {
    ...components,
    iButton: Button,
    iCircle: Circle,
    iCol: Col,
    iForm: Form,
    iInput: Input,
    iMenu: Menu,
    iOption: Option,
    iProgress: Progress,
    iSelect: Select,
    iSwitch: Switch,
    iTable: Table
};

const install = function(Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(iview).forEach(key => {
        Vue.component(key, iview[key]);
    });

    Vue.prototype.$Loading = LoadingBar;
    Vue.prototype.$Message = Message;
    Vue.prototype.$Modal = Modal;
    Vue.prototype.$Notice = Notice;
    Vue.prototype.$Spin = Spin;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    locale: locale.use,
    i18n: locale.i18n,
    install,
    Circle,
    Switch,
    ...components
};

API.lang = (code) => {
    const langObject = window['iview/locale'].default;
    if (code === langObject.i.locale) locale.use(langObject);
    else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
