
<template>
  <div>
    <div
      v-if="width < 100"
      class="vue-scrollbar__scrollbar-horizontal"
      ref="container"
      @click="jump">

      <div
        :class="'scrollbar' + ( dragging || draggingFromParent ? '' : ' vue-scrollbar-transition')"
        ref="scrollbar"
        @touchstart="startDrag"
        @mousedown="startDrag"
        :style="{
          width: this.width+'%',
          left: this.scrolling + '%'
        }" >
      </div>

    </div>
  </div>
</template>

<script>

  export default {

    props: {
      draggingFromParent: Boolean,
      scrolling: Number,
      wrapper: Object,
      area: Object,
      onChangePosition: Function,
      onDragging: Function,
      onStopDrag: Function,
    },

    data () {
      return  {
        width: 0,
        dragging: false,
        start: 0
      }
    },


    watch: {
      'wrapper.width' (val, old) {
        this.calculateSize(this)
      },

      'area.width' (val, old) {
        this.calculateSize(this)
      }
    },


    methods: {

      startDrag (e) {

        e.preventDefault()
        e.stopPropagation()

        e = e.changedTouches ? e.changedTouches[0] : e

        // Prepare To Drag
        this.dragging = true
        this.start = e.clientX

      },

      onDrag(e){

        if(this.dragging){

          // Make The Parent being in the Dragging State
          this.onDragging()

          e.preventDefault()
          e.stopPropagation()

          e = e.changedTouches ? e.changedTouches[0] : e

          let xMovement = e.clientX - this.start
          let xMovementPercentage = xMovement / this.wrapper.width * 100;

          // Update the last e.clientX
          this.start = e.clientX

          // The next Horizontal Value will be
          let next = this.scrolling + xMovementPercentage

          // Tell the parent to change the position
          this.onChangePosition(next, 'horizontal')

        }

      },

      stopDrag(e){
        if(this.dragging){
          // Parent Should Change the Dragging State
          this.onStopDrag()
          this.dragging = false
        }
      },

      jump(e){

        let isContainer = e.target === this.$refs.container

        if(isContainer){

          // Get the Element Position
          let position = this.$refs.scrollbar.getBoundingClientRect()

          // Calculate the horizontal Movement
          let xMovement = e.clientX - position.left
          let centerize = (this.width / 2)
          let xMovementPercentage = xMovement / this.wrapper.width * 100 - centerize

          // Update the last e.clientX
          this.start = e.clientX

          // The next Horizontal Value will be
          let next = this.scrolling + xMovementPercentage

          // Tell the parent to change the position
          this.onChangePosition(next, 'horizontal')

        }
      },

      calculateSize(source){
        // Scrollbar Width
        this.width = source.wrapper.width / source.area.width * 100
      },

    },

    mounted () {
      this.calculateSize(this)

      // Put the Listener
      document.addEventListener("mousemove", this.onDrag)
      document.addEventListener("touchmove", this.onDrag)
      document.addEventListener("mouseup", this.stopDrag)
      document.addEventListener("touchend", this.stopDrag)
    },

    beforeDestroy () {
      // Remove the Listener
      document.removeEventListener("mousemove", this.onDrag)
      document.removeEventListener("touchmove", this.onDrag)
      document.removeEventListener("mouseup", this.stopDrag)
      document.removeEventListener("touchend", this.stopDrag)
    }

  }

</script>
