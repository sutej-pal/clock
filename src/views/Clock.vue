<template>
  <div>
    <canvas id="canvas" width="400" height="400" style="border: 1px solid ">
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data () {
    return {
      canvas: '',
      ctx: '',
      radius: ''
    }
  },
  methods: {
    drawClock () {
      this.drawFace(this.ctx, this.radius)
      this.drawNumbers(this.ctx, this.radius)
      this.drawTime(this.ctx, this.radius)
    },
    drawFace (ctx, radius) {
      let background = new Image();
      background.src = '/img/background.472861a2.png';
      console.log('background', background);
      ctx.drawImage(background, -200, -200, 400, 400)
      ctx.beginPath();
      ctx.arc(0, 0, 15, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    },
    drawNumbers (ctx, radius) {
      let ang
      let num
      ctx.font = radius * 0.15 + 'px arial'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6
        ctx.rotate(ang)
        ctx.translate(0, -radius * 0.85)
        ctx.rotate(-ang)
        ctx.fillText(num.toString(), 0, 0)
        ctx.rotate(ang)
        ctx.translate(0, radius * 0.85)
        ctx.rotate(-ang)
      }
    },
    drawTime (ctx, radius) {
      let now = new Date()
      let hour = now.getHours()
      let minute = now.getMinutes()
      let second = now.getSeconds()
      // hour
      hour = hour % 12
      hour = (hour * Math.PI / 6) +
          (minute * Math.PI / (6 * 60)) +
          (second * Math.PI / (360 * 60))
      this.drawHand(ctx, hour, radius * 0.5, radius * 0.07)
      // minute
      minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60))
      this.drawHand(ctx, minute, radius * 0.75, radius * 0.07)
      // second
      second = (second * Math.PI / 30)
      this.drawHand(ctx, second, radius * 0.9, radius * 0.02)
    },
    drawHand (ctx, pos, length, width) {
      ctx.beginPath()
      ctx.lineWidth = width
      ctx.lineCap = 'square'
      ctx.moveTo(0, 0)
      ctx.rotate(pos)
      ctx.lineTo(0, -length)
      ctx.stroke()
      ctx.rotate(-pos)
    }
  },
  mounted () {
    setTimeout(() => {
      // 113056
      this.canvas = document.getElementById('canvas')
      this.ctx = canvas.getContext('2d')
      let radius = canvas.height / 2
      this.ctx.translate(radius, radius)
      this.radius = radius * 0.90
      setInterval(this.drawClock, 1000)
    }, 1000)
  }
}
</script>

<style scoped>

</style>
