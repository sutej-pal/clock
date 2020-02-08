<template>
  <div>
    <div class="clock">
      <div id="hours"></div>
      <div id="minutes"></div>
      <div id="seconds"></div>
      <div class="twelve">12</div>
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

<style scoped>
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    background-color: #000;
  }

  .clock {
    height: 500px;
    width: 500px;
    background-color: #dddddd;
    border-radius: 100%;
    border: 3px solid #aaaaaa;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .twelve {
    position: absolute;
    width: 3px;
    height: 15px;
    left: 0;
    top: 0;
    right: 0;
    margin: 0 auto;
  }

  .three {
    position: absolute;
    width: 15px;
    height: 3px;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
  }

  .six {
    position: absolute;
    width: 3px;
    height: 15px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
  }

  .nine {
    position: absolute;
    width: 15px;
    height: 3px;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
  }

  .center {
    width: 10px;
    height: 10px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background: #000;
    border-radius: 100%;
  }

  #seconds {
    position: absolute;
    height: 160px;
    width: 2px;
    left: 0;
    right: 0;
    bottom: 160px;
    top: 0px;
    margin: auto;
    -webkit-transform-origin: bottom;
    background: #ff4136;
  }

  #minutes {
    position: absolute;
    height: 200px;
    width: 2px;
    left: 0;
    right: 0;
    bottom: 200px;
    top: 0px;
    margin: auto;
    background: #000;
    -webkit-transform-origin: bottom;
  }

  #hours {
    position: absolute;
    height: 80px;
    width: 6px;
    left: 0;
    right: 0;
    bottom: 80px;
    top: 0px;
    margin: auto;
    background: #000;
    -webkit-transform-origin: bottom;
  }
  #hours:after {
    content: '';
    position: absolute;
    height: 80px;
    width: 6px;
    left: 0;
    right: 0;
    background: #ff4136;
  }
</style>
