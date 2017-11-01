// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue from "vue";

export default IView;

import { Button } from "./button";
import { Dropdown } from "./dropdown";
import { Form } from "./form";
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
import { Loading } from "./loading";
import { Menu } from "./menu";
import { Message } from "./message";
import { Modal } from "./modal";
import { Notice } from "./notice";
import { GridRow, GridCol } from "./grid";

export declare module IView {
  interface IButton extends Button { }
  interface IDropdown extends Dropdown { }
  interface IForm extends Form { }
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
  interface ILoading extends Loading { }
  interface IMenu extends Menu { }
  interface IMessage extends Message { }
  interface IModal extends Modal { }
  interface INotice extends Notice { }
  interface IGridRow extends GridRow { }
  interface IGridCol extends GridCol { }
}
