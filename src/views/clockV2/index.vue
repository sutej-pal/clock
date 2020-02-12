<template>
  <div>
    <div class="clock">
      <div id="hours"></div>
      <div id="minutes"></div>
      <div id="seconds"></div>
      <div class="twelve">12</div>
      <div class="one">1</div>
      <div class="three">3</div>
      <div class="six">6</div>
      <div class="nine">9</div>
      <div class="center"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ClockV2',
    methods: {
      moveHands () {
        let now = new Date()
        let h = 30 * ((now.getHours() % 12) + now.getMinutes() / 60) // 30 degrees hour
        let m = 6 * now.getMinutes() // 6 degrees every minute
        let s = 6 * now.getSeconds() // 6 degrees every second
        // setting the rotate CSS attribute to those degree values -->
        document.getElementById('seconds').style.cssText =
          '-webkit-transform:rotate(' + s + 'deg);'
        document.getElementById('minutes').style.cssText =
          '-webkit-transform:rotate(' + m + 'deg);'
        document.getElementById('hours').style.cssText =
          '-webkit-transform:rotate(' + h + 'deg);'

        setTimeout(this.moveHands, 1000) // calling the function every second
      }
    },
    mounted () {
      this.moveHands()
    }
  }
</script>

<style scoped lang="scss">
  @import "./clock-v2.scss";
</style>
