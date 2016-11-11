import Affix from './components/affix';
import Alert from './components/alert';
import BackTop from './components/back-top';
import Badge from './components/badge';
import Breadcrumb from './components/breadcrumb';
import Button from './components/button';
import Card from './components/card';
import Checkbox from './components/checkbox';
import Circle from './components/circle';
import Collapse from './components/collapse';
import Icon from './components/icon';
import Input from './components/input';
import InputNumber from './components/input-number';
import LoadingBar from './components/loading-bar';
import Message from './components/message';
import Modal from './components/modal';
import Notice from './components/notice';
import Page from './components/page';
import Poptip from './components/poptip';
import Progress from './components/progress';
import Radio from './components/radio';
import Slider from './components/slider';
import Spin from './components/spin';
import Steps from './components/steps';
import Switch from './components/switch';
import Tag from './components/tag';
import Timeline from './components/timeline';
import Tooltip from './components/tooltip';
import { Row, Col } from './components/layout';
import { Select, Option, OptionGroup } from './components/select';

const iview = {
    Affix,
    Alert,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    Button,
    ButtonGroup: Button.Group,
    Card,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    Circle,
    Col,
    Collapse,
    Icon,
    InputNumber,
    LoadingBar,
    Message,
    Modal,
    Notice,
    Option,
    OptionGroup: OptionGroup,
    Page,
    Panel: Collapse.Panel,
    Poptip,
    Progress,
    Radio,
    RadioGroup: Radio.Group,
    Row,
    Select,
    Slider,
    Spin,
    Step: Steps.Step,
    Steps,
    Switch,
    Tag,
    Timeline,
    TimelineItem: Timeline.Item,
    Tooltip,

    iButton: Button,
    iButtonGroup: Button.Group,
    iCol: Col,
    iInput: Input,
    iOption: Option,
    iOptionGroup: OptionGroup,
    iSelect: Select
};

module.exports = iview;
