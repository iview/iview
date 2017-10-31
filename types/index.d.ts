// Type definitions for iview 2.5.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/iview/iview
import Vue from "vue";

export default IView;

import { Dropdown } from "./dropdown";
import { Form } from "./form";
import { Loading } from "./loading";
import { Menu } from "./menu";
import { Message } from "./message";
import { Modal } from "./modal";
import { Notice } from "./notice";
import { Table } from "./table";

export declare module IView {
  interface IDropdown extends Dropdown { }
  interface IForm  extends Form { }
  interface ILoading  extends Loading { }
  interface IMenu  extends Menu { }
  interface IMessage  extends Message { }
  interface IModal  extends Modal { }
  interface INotice extends Notice { }
  interface ITable  extends Table { }
}
