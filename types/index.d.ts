// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default IView;

import { GridRow, GridCol } from "./grid";
import { Button, ButtonGroup } from "./button";
import { Icon } from "./icon";
import { Input } from "./input";
import { Radio, RadioGroup } from "./radio";
import { Checkbox, CheckboxGroup } from "./checkbox";
import { Switch } from "./switch";
import {
  Table,
  TableColumn,
  TableRenderCreateElementData,
  TableRenderCreateElementResult,
  TableColumnRenderParams,
  TableExportCsvParams
} from "./table";
import { Tabs, TabPane } from "./tabs";
import { Select, SelectOption, SelectOptionGroup } from "./select";
import { AutoComplete } from "./auto-complete";
import { DatePicker, DatePickerOptions } from "./date-picker";
import { TimePicker } from "./time-picker";
import { Cascader } from "./cascader";
import { Transfer } from "./transfer";
import { InputNumber } from "./input-number";
import { Rate } from "./rate";
import { Upload } from "./upload";
import { ColorPicker } from "./color-picker";
import { Form, FormItem } from "./form";
import { Alert } from "./alert";
import { Card } from "./card";
import { MessageInstance, MessageConfig } from "./message";
import { NoticeInstance, NoticeConfig, NoticeGlobalConfig } from "./notice";
import { Modal, ModalInstance, ModalConfig } from "./modal";
import { Progress } from "./progress";
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Collapse, CollapsePanel } from "./collapse";
import { Timeline, TimelineItem } from "./timeline";
import { Tag } from "./tag";
import { Tooltip } from "./tooltip";
import { Poptip } from "./poptip";
import { Carousel } from "./carousel";
import { Tree,TreeChildren } from "./tree";
import { Menu, MenuItem, Submenu, MenuGroup } from "./menu";
import { Dropdown, DropdownItem } from "./dropdown";
import { Page } from "./page";
import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";
import { Steps, Step } from "./steps";
import { LoadingBarInstance, LoadingBarConfig } from "./loading-bar";
import { Circle } from "./circle";
import { Affix } from "./affix";
import { BackTop } from "./back-top";
import { Spin } from "./spin";
import { Scroll } from "./scroll";

export declare module IView {
  interface IGridRow extends GridRow { }
  interface IGridCol extends GridCol { }
  interface IButton extends Button { }
  interface IButtonGroup extends ButtonGroup { }
  interface IIcon extends Icon { }
  interface IInput extends Input { }
  interface IRadio extends Radio { }
  interface IRadioGroup extends RadioGroup { }
  interface ICheckbox extends Checkbox { }
  interface ICheckboxGroup extends CheckboxGroup { }
  interface ISwitch extends Switch { }
  interface ITable extends Table { }
  interface ITableColumn extends TableColumn { }
  interface ITableRenderCreateElementData extends TableRenderCreateElementData { }
  interface ITableRenderCreateElementResult extends TableRenderCreateElementResult { }
  interface ITableColumnRenderParams extends TableColumnRenderParams { }
  interface ITableExportCsvParams extends TableExportCsvParams { }
  interface ITabs extends Tabs { }
  interface ITabPane extends TabPane { }
  interface ISelect extends Select { }
  interface ISelectOption extends SelectOption { }
  interface ISelectOptionGroup extends SelectOptionGroup { }
  interface IAutoComplete extends AutoComplete { }
  interface IDatePicker extends DatePicker { }
  interface IDatePickerOptions extends DatePickerOptions { }
  interface ITimePicker extends TimePicker { }
  interface ICascader extends Cascader { }
  interface ITransfer extends Transfer { }
  interface IInputNumber extends InputNumber { }
  interface IRate extends Rate { }
  interface IUpload extends Upload { }
  interface IColorPicker extends ColorPicker { }
  interface IForm extends Form { }
  interface IFormItem extends FormItem { }
  interface IAlert extends Alert { }
  interface ICard extends Card { }
  interface IMessageInstance extends MessageInstance { }
  interface IMessageConfig extends MessageConfig { }
  interface INoticeInstance extends NoticeInstance { }
  interface INoticeConfig extends NoticeConfig { }
  interface INoticeGlobalConfig extends NoticeGlobalConfig { }
  interface IModal extends Modal { }
  interface IModalInstance extends ModalInstance { }
  interface IModalConfig extends ModalConfig { }
  interface IProgress extends Progress { }
  interface IAvatar extends Avatar { }
  interface IBadge extends Badge { }
  interface ICollapse extends Collapse { }
  interface ICollapsePanel extends CollapsePanel { }
  interface ITimeline extends Timeline { }
  interface ITimelineItem extends TimelineItem { }
  interface ITag extends Tag { }
  interface ITooltip extends Tooltip { }
  interface IPoptip extends Poptip { }
  interface ICarousel extends Carousel { }
  interface ITree extends Tree { }
  interface ITreeChildren extends TreeChildren { }
  interface IMenu extends Menu { }
  interface IMenuItem extends MenuItem { }
  interface ISubmenu extends Submenu { }
  interface IMenuGroup extends MenuGroup { }
  interface IDropdown extends Dropdown { }
  interface IDropdownItem extends DropdownItem { }
  interface IPage extends Page { }
  interface IBreadcrumb extends Breadcrumb { }
  interface IBreadcrumbItem extends BreadcrumbItem { }
  interface ISteps extends Steps { }
  interface IStep extends Step { }
  interface ILoadingBarInstance extends LoadingBarInstance { }
  interface ILoadingBarConfig extends LoadingBarConfig { }
  interface ICircle extends Circle { }
  interface IAffix extends Affix { }
  interface IBackTop extends BackTop { }
  interface ISpin extends Spin { }
  interface IScroll extends Scroll { }
}
