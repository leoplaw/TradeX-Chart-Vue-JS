<script setup>
import { ref, onMounted, provide } from 'vue'
import ChartDemo from './components/ChartDemo.vue';
import chartFeature from './components/chartFeature.vue';
import ChartLinks from './components/ChartLinks.vue';

import chartType from './components/chartFeatures/chartType.vue';
import indicators from './components/chartFeatures/indicators.vue';
import FullScreen from './components/chartFeatures/fullScreen.vue';
import exportImage from './components/chartFeatures/exportImage.vue';
import chartTheme from './components/chartFeatures/chartTheme.vue';
import timeline from './components/chartFeatures/timeline.vue';
import toolbar from './components/chartFeatures/toolbar.vue';

// import { Chart } from 'tradex-chart'
import { Chart } from '../local_modules/tradex-chart/index'
import config from './data/config_yellowPurple';
import state_1hour_noIndicators from './data/states/state_1hour_noIndicators';

const root = ref(null)
const chart = ref({})

provide("chart", chart)

onMounted(() => {
    chart.value = document.createElement("tradex-chart")
    root.value.appendChild(chart.value)
    chart.value.setAttribute("width", "500")
    chart.value.setAttribute("height", "400")
    window["chart"+chart.value.inCnt] = chart.value
    // config.talib = talib
    config.state = state_1hour_noIndicators
    chart.value.start(config)

    // talib.then( (t) => {
    //   config.talib = t
    //   chart.value.start(config)
    // })
  })
</script>

<template>
  <div class="chart" ref="root"></div>

  <div class="demo">
    <a href="https://tradex-app.github.io/TradeX-chart/" target="_blanke">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="75" height="75" />
    </a>
    <a href="https://vuejs.org/" target="_blanke">
      <img alt="Vue logo" class="logo" src="./assets/vue.svg" width="75" height="75" />
    </a>
    
    <ChartLinks/>

    <chartDemo>

      <chartFeature title="Fullscreen">
        <FullScreen/>
      </chartFeature>

      <chartFeature title="Indicators">
        <indicators/>
      </chartFeature>

      <chartFeature title="Timeline">
        <timeline/>
      </chartFeature>

      <chartFeature title="Candle Type">
        <chartType/>
      </chartFeature>

      <chartFeature title="Chart Theme">
        <chartTheme/>
      </chartFeature>

      <chartFeature title="Toolbar">
        <toolbar/>
      </chartFeature>

      <chartFeature title="Export Image">
        <exportImage/>
      </chartFeature>

    </chartDemo>
  </div>

</template>

<style scoped>
/* .chart {
  width: 400px;
  height: 350px;
} */


header {
  line-height: 1.5;
}

.logo {
  display: inline;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  demo {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
