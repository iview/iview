<template>
  <Submenu :name="`${parentName}`">
    <template slot="title">
      <span>{{ parentItem.name }}</span>
    </template>
    <template v-for="item in children">
      <custem-menu-item v-if="item.children && item.children.length !== 0" :key="`menu-${item.name}`" :parent-item="item"></custem-menu-item>
      <menu-item v-else :name="`${item.name}`" :key="`menu-${item.name}`">{{ item.name }}</menu-item>
    </template>
  </Submenu>
</template>
<script>
export default {
  name: 'custemMenuItem',
  props: {
    parentItem: {
      type: Object,
      default: () => {}
    },
    theme: String,
    iconSize: Number
  },
  computed: {
    parentName () {
      return this.parentItem.name
    },
    children () {
      return this.parentItem.children
    }
  }
}
</script>
