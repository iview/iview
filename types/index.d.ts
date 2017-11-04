// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default IView;

import { Affix } from "./affix";
import { Alert } from "./alert";
import { AutoComplete } from "./auto-complete";
import { Avatar } from "./avatar";
import { BackTop } from "./back-top";
import { Badge } from "./badge";
import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";
import { Button, ButtonGroup } from "./button";
import { Card } from "./card";
import { Carousel } from "./carousel";
import { Cascader } from "./cascader";
import { Checkbox, CheckboxGroup } from "./checkbox";
import { Circle } from "./circle";
import { Collapse, CollapsePanel } from "./collapse";
import { ColorPicker } from "./color-picker";
import { DatePicker, DatePickerOptions } from "./date-picker";
import { Dropdown, DropdownItem } from "./dropdown";
import { Form, FormItem } from "./form";
import { GridRow, GridCol } from "./grid";
import { Icon } from "./icon";
import { Input } from "./input";
import { InputNumber } from "./input-number";
import { LoadingBarInstance, LoadingBarConfig } from "./loading-bar";
import { Menu, MenuItem, Submenu, MenuGroup } from "./menu";
import { MessageInstance, MessageConfig } from "./message";
import { Modal, ModalInstance, ModalConfig } from "./modal";
import { NoticeInstance, NoticeConfig, NoticeGlobalConfig } from "./notice";
import { Page } from "./page";
import { Poptip } from "./poptip";
import { Progress } from "./progress";
import { Radio, RadioGroup } from "./radio";
import { Rate } from "./rate";
import { Scroll } from "./scroll";
import { Select, SelectOption, SelectOptionGroup } from "./select";
import { Spin } from "./spin";
import { Steps, Step } from "./steps";
import { Switch } from "./switch";
import { Table, TableColumn, TableRenderCreateElementData, TableRenderCreateElementResult, TableColumnRenderParams, TableExportCsvParams } from "./table";
import { Tabs, TabPane } from "./tabs";
import { Tag } from "./tag";
import { Timeline, TimelineItem } from "./timeline";
import { TimePicker } from "./time-picker";
import { Tooltip } from "./tooltip";
import { Transfer } from "./transfer";
import { Tree, TreeChildren } from "./tree";
import { Upload } from "./upload";

export declare module IView {
  interface IAffix extends Affix { }
  interface IAlert extends Alert { }
  interface IAutoComplete extends AutoComplete { }
  interface IAvatar extends Avatar { }
  interface IBackTop extends BackTop { }
  interface IBadge extends Badge { }
  interface IBreadcrumb extends Breadcrumb { }
  interface IBreadcrumbItem extends BreadcrumbItem { }
  interface IButton extends Button { }
  interface IButtonGroup extends ButtonGroup { }
  interface ICard extends Card { }
  interface ICarousel extends Carousel { }
  interface ICascader extends Cascader { }
  interface ICheckbox extends Checkbox { }
  interface ICheckboxGroup extends CheckboxGroup { }
  interface ICircle extends Circle { }
  interface ICollapse extends Collapse { }
  interface ICollapsePanel extends CollapsePanel { }
  interface IColorPicker extends ColorPicker { }
  interface IDatePicker extends DatePicker { }
  interface IDatePickerOptions extends DatePickerOptions { }
  interface IDropdown extends Dropdown { }
  interface IDropdownItem extends DropdownItem { }
  interface IForm extends Form { }
  interface IFormItem extends FormItem { }
  interface IGridCol extends GridCol { }
  interface IGridRow extends GridRow { }
  interface IIcon extends Icon { }
  interface IInput extends Input { }
  interface IInputNumber extends InputNumber { }
  interface ILoadingBarConfig extends LoadingBarConfig { }
  interface ILoadingBarInstance extends LoadingBarInstance { }
  interface IMenu extends Menu { }
  interface IMenuGroup extends MenuGroup { }
  interface IMenuItem extends MenuItem { }
  interface IMessageConfig extends MessageConfig { }
  interface IMessageInstance extends MessageInstance { }
  interface IModal extends Modal { }
  interface IModalConfig extends ModalConfig { }
  interface IModalInstance extends ModalInstance { }
  interface INoticeConfig extends NoticeConfig { }
  interface INoticeGlobalConfig extends NoticeGlobalConfig { }
  interface INoticeInstance extends NoticeInstance { }
  interface IPage extends Page { }
  interface IPoptip extends Poptip { }
  interface IProgress extends Progress { }
  interface IRadio extends Radio { }
  interface IRadioGroup extends RadioGroup { }
  interface IRate extends Rate { }
  interface IScroll extends Scroll { }
  interface ISelect extends Select { }
  interface ISelectOption extends SelectOption { }
  interface ISelectOptionGroup extends SelectOptionGroup { }
  interface ISpin extends Spin { }
  interface IStep extends Step { }
  interface ISteps extends Steps { }
  interface ISubmenu extends Submenu { }
  interface ISwitch extends Switch { }
  interface ITable extends Table { }
  interface ITableColumn extends TableColumn { }
  interface ITableColumnRenderParams extends TableColumnRenderParams { }
  interface ITableExportCsvParams extends TableExportCsvParams { }
  interface ITableRenderCreateElementData extends TableRenderCreateElementData { }
  interface ITableRenderCreateElementResult extends TableRenderCreateElementResult { }
  interface ITabPane extends TabPane { }
  interface ITabs extends Tabs { }
  interface ITag extends Tag { }
  interface ITimeline extends Timeline { }
  interface ITimelineItem extends TimelineItem { }
  interface ITimePicker extends TimePicker { }
  interface ITooltip extends Tooltip { }
  interface ITransfer extends Transfer { }
  interface ITree extends Tree { }
  interface ITreeChildren extends TreeChildren { }
  interface IUpload extends Upload { }
}
