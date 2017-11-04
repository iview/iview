// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default IView;

import { GridRow, GridCol } from "./grid";
import { Button } from "./button";
import { Icon } from "./icon";
import { Input } from "./input";
import { Radio } from "./radio";
import { Checkbox } from "./checkbox";
import { Switch } from "./switch";
import { Table } from "./table";
import { Select } from "./select";
import { AutoComplete } from "./auto-complete";
import { DatePicker } from "./date-picker";
import { TimePicker } from "./time-picker";
import { Cascader } from "./cascader";
import { Transfer } from "./transfer";
import { InputNumber } from "./input-number";
import { Rate } from "./rate";
import { Upload } from "./upload";
import { ColorPicker } from "./color-picker";
import { Form } from "./form";
import { Alert } from "./alert";
import { Card } from "./card";
import { MessageInstance } from "./message";
import { NoticeInstance } from "./notice";
import { Modal } from "./modal";
import { Progress } from "./progress";
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Collapse } from "./collapse";
import { Timeline } from "./timeline";
import { Tag } from "./tag";
import { Tooltip } from "./tooltip";
import { Poptip } from "./poptip";
import { Carousel } from "./carousel";
import { Tree } from "./tree";
import { Menu } from "./menu";
import { Dropdown } from "./dropdown";
import { Page } from "./page";
import { Breadcrumb } from "./breadcrumb";
import { Steps } from "./steps";
import { LoadingBarInstance } from "./loading-bar";
import { Circle } from "./circle";
import { Affix } from "./affix";
import { BackTop } from "./back-top";
import { Spin } from "./spin";
import { Scroll } from "./scroll";

export declare module IView {
  interface IGridRow extends GridRow { }
  interface IGridCol extends GridCol { }
  interface IButton extends Button { }
  interface IIcon extends Icon { }
  interface IInput extends Input { }
  interface IRadio extends Radio { }
  interface ICheckbox extends Checkbox { }
  interface ISwitch extends Switch { }
  interface ITable extends Table { }
  interface ISelect extends Select { }
  interface IAutoComplete extends AutoComplete { }
  interface IDatePicker extends DatePicker { }
  interface ITimePicker extends TimePicker { }
  interface ICascader extends Cascader { }
  interface IMessageInstance extends MessageInstance { }
  interface INoticeInstance extends NoticeInstance { }
  interface IModal extends Modal { }
  interface ITransfer extends Transfer { }
  interface IInputNumber extends InputNumber { }
  interface IRate extends Rate { }
  interface IUpload extends Upload { }
  interface IColorPicker extends ColorPicker { }
  interface IForm extends Form { }
  interface IAlert extends Alert { }
  interface ICard extends Card { }
  interface IMessageInstance extends MessageInstance { }
  interface INoticeInstance extends NoticeInstance { }
  interface IModal extends Modal { }
  interface IProgress extends Progress { }
  interface IAvatar extends Avatar { }
  interface IBadge extends Badge { }
  interface ICollapse extends Collapse { }
  interface ITimeline extends Timeline { }
  interface ITag extends Tag { }
  interface ITooltip extends Tooltip { }
  interface IPoptip extends Poptip { }
  interface ICarousel extends Carousel { }
  interface ITree extends Tree { }
  interface IMenu extends Menu { }
  interface IDropdown extends Dropdown { }
  interface IPage extends Page { }
  interface IBreadcrumb extends Breadcrumb { }
  interface ISteps extends Steps { }
  interface ILoadingBarInstance extends LoadingBarInstance { }
  interface ICircle extends Circle { }
  interface IAffix extends Affix { }
  interface IBackTop extends BackTop { }
  interface ISpin extends Spin { }
  interface IScroll extends Scroll { }
}
