<template>
  <group>
    <cell v-bind="$attrs"></cell>
  </group>
</template>

<script>
import Cell from '../'
import Group from '../../group'

export default {
  components: {
    Group,
    Cell
  }
}
</script>
