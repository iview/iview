import Vue, { PluginFunction, VueConstructor } from 'vue';

interface IView extends PluginFunction<any>
{
	install(Vue: VueConstructor<Vue>): any;
}

declare const iView: IView;
export default iView;
