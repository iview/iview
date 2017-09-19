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
import { Row, Col } from './components/grid';
import { Select, Option, OptionGroup } from './components/select';
import locale from './locale';

const iview = {
    Affix,
    Alert,
    AutoComplete,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    iButton: Button,
    Button,
    ButtonGroup: Button.Group,
    Card,
    Carousel,
    CarouselItem: Carousel.Item,
    Cascader,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    iCircle: Circle,
    Col,
    iCol: Col,
    Collapse,
    ColorPicker,
    DatePicker,
    Dropdown,
    DropdownItem: Dropdown.Item,
    DropdownMenu: Dropdown.Menu,
    Form,
    iForm: Form,
    FormItem: Form.Item,
    Icon,
    Input,
    iInput: Input,
    InputNumber,
    LoadingBar,
    Menu,
    iMenu: Menu,
    MenuGroup: Menu.Group,
    MenuItem: Menu.Item,
    Submenu: Menu.Sub,
    Message,
    Modal,
    Notice,
    Option: Option,
    iOption: Option,
    OptionGroup,
    Page,
    Panel: Collapse.Panel,
    Poptip,
    Progress,
    iProgress: Progress,
    Radio,
    RadioGroup: Radio.Group,
    Rate,
    Row,
    Select,
    iSelect: Select,
    Slider,
    Spin,
    Step: Steps.Step,
    Steps,
    // Switch,
    iSwitch: Switch,
    iTable: Table,
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

const install = function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(iview).forEach((key) => {
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

module.exports = Object.assign(iview, {install});   // eslint-disable-line no-undef
