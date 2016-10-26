import Button from './components/button';
import Icon from './components/icon';
import Input from './components/input';
import Switch from './components/switch';
import Radio from './components/radio';
import Checkbox from './components/checkbox';
import InputNumber from './components/input-number';
import { Row, Col } from './components/layout';
import Page from './components/page';
import Badge from './components/badge';
import Tag from './components/tag';
import Progress from './components/progress';
import Circle from './components/circle';
import Timeline from './components/timeline';
import Affix from './components/affix';
import BackTop from './components/back-top';
import Spin from './components/spin';
import Steps from './components/steps';
import Breadcrumb from './components/breadcrumb';
import Alert from './components/alert';
import Collapse from './components/collapse';
import Card from './components/card';
import Message from './components/message';
import Notice from './components/notice';
import LoadingBar from './components/loading-bar';
import Modal from './components/modal';
import { Select, Option, OptionGroup } from './components/select';
import Tooltip from './components/tooltip';

const iview = {
    Button,
    ButtonGroup: Button.Group,
    Icon,
    Input,
    Switch,
    Radio,
    RadioGroup: Radio.Group,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    InputNumber,
    Row,
    iCol: Col,
    Page,
    Badge,
    Tag,
    Progress,
    Circle,
    Timeline,
    TimelineItem: Timeline.Item,
    Affix,
    BackTop,
    Spin,
    Steps,
    Step: Steps.Step,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    Alert,
    Collapse,
    Panel: Collapse.Panel,
    Card,
    Message,
    Notice,
    LoadingBar,
    Modal,
    iSelect: Select,
    iOption: Option,
    iOptionGroup: OptionGroup,
    Tooltip
};

module.exports = iview;