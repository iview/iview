export default function (self, name) {
  if (self.$parent && self.$parent[name]) {
    return self.$parent[name]
  }
  if (self.$parent && self.$parent.$parent && self.$parent.$parent[name]) {
    return self.$parent.$parent[name]
  }
}
