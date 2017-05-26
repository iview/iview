/**
 * Created by admin on 2017/5/12.
 */
import Scrollbar from './component/vue-scrollbar.vue';
const dist={
  install:function(Vue){
    Vue.component('Scrollbar',Scrollbar);
  }
};
export default dist;
