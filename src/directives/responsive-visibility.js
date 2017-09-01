const addResponsiveVisibilityDirectives = (Vue) => {
  Vue.directive('hidden-xs', {
    inserted: (el) => {
      el.className += ' hidden-xs';
    }
  });
  Vue.directive('hidden-sm', {
    inserted: (el) => {
      el.className += ' hidden-sm';
    }
  });
  Vue.directive('hidden-md', {
    inserted: (el) => {
      el.className += ' hidden-md';
    }
  });
  Vue.directive('hidden-lg', {
    inserted: (el) => {
      el.className += ' hidden-lg';
    }
  });
};

export {
  addResponsiveVisibilityDirectives
};