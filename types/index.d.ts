// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default IView;

import { Button } from "./button";
import { Dropdown } from "./dropdown";
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

import { LoadingBarInstance } from "./loading-bar";
import { Menu } from "./menu";
import { MessageInstance } from "./message";
import { Modal } from "./modal";
import { NoticeInstance } from "./notice";
import { GridRow, GridCol } from "./grid";

export declare module IView {
  interface IButton extends Button { }
  interface IDropdown extends Dropdown { }
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
  interface ITransfer extends Transfer { }
  interface IInputNumber extends InputNumber { }
  interface IRate extends Rate { }
  interface IUpload extends Upload { }
  interface IColorPicker extends ColorPicker { }
  interface IForm extends Form { }
  interface IAlert extends Alert { }
  interface ICard extends Card { }

  interface ILoadingBarInstance extends LoadingBarInstance { }
  interface IMenu extends Menu { }
  interface IMessageInstance extends MessageInstance { }
  interface IModal extends Modal { }
  interface INoticeInstance extends NoticeInstance { }
  interface IGridRow extends GridRow { }
  interface IGridCol extends GridCol { }
}
