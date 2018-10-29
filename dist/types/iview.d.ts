import { PluginFunction } from 'vue';

interface IView extends PluginFunction<any> {}

declare const iView: IView;
export default iView;
