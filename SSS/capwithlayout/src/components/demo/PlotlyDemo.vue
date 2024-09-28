<script setup>
import { reactive, onMounted } from "vue";
// 需安裝套件 `$ npm install vue3-plotly`
import { VuePlotly } from "vue3-plotly";
import basePage from "@/components/common/BasePage.vue";

const state = reactive({
  plotly: {
    data: [],
    layout: {},
  },
});

const callApi = function () {
  // ref https://plotly.com/javascript/3d-subplots/
  function getrandom(num, mul) {
    const value = [];

    for (let i = 0; i <= num; i++) {
      const rand = Math.random() * mul;
      value.push(rand);
    }
    return value;
  }

  const trace1 = {
    opacity: 0.5,
    color: "rgba(255,127,80,0.7)",
    type: "mesh3d",
    x: getrandom(50, -75),
    y: getrandom(50, 75),
    z: getrandom(50, 75),
    scene: "scene1",
  };

  const trace2 = {
    opacity: 0.8,
    color: "pink",
    type: "mesh3d",
    x: getrandom(50, -75),
    y: getrandom(50, 75),
    z: getrandom(50, 75),
    scene: "scene1",
  };

  const layout = {
    scene1: {
      domain: {
        x: [0.0, 0.5],
        y: [0.5, 1.0],
      },
    },
    scene2: {
      domain: {
        x: [0.5, 1],
        y: [0.5, 1.0],
      },
    },
    height: 800,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
      pad: 0,
    },
  };

  state.plotly.data = [trace1, trace2];
  state.plotly.layout = layout;
};

const callTable = function () {
  const values = [
    ["Salaries", "Office", "Merchandise", "Legal", "<b>TOTAL</b>"],
    [1200000, 20000, 80000, 2000, 12120000],
    [1300000, 20000, 70000, 2000, 130902000],
    [1300000, 20000, 120000, 2000, 131222000],
    [1400000, 20000, 90000, 2000, 14102000],
  ];

  const data = [
    {
      type: "table",
      header: {
        values: [
          ["<b>EXPENSES</b>"],
          ["<b>Q1</b>"],
          ["<b>Q2</b>"],
          ["<b>Q3</b>"],
          ["<b>Q4</b>"],
        ],
        align: ["left", "center"],
        line: { width: 1, color: "#506784" },
        fill: { color: "#119DFF" },
        font: { family: "Arial", size: 12, color: "white" },
      },
      cells: {
        values: values,
        align: ["left", "center"],
        line: { color: "#506784", width: 1 },
        fill: { color: ["#25FEFD", "white"] },
        font: { family: "Arial", size: 11, color: ["#506784"] },
      },
    },
  ];

  state.plotly.data = data;
};

onMounted(() => {
  state.plotly.data = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "scatter",
    },
  ];
  state.plotly.layout = { title: "My graph" };
});
</script>

<template>
  <basePage />
  <div class="grid grid-cols-3">
    <div>
      <button class="btn btn-accent" v-on:click="callApi">Poltly</button>
    </div>
    <div>
      <button class="btn btn-circle btn-primary" v-on:click="callTable">
        Table
      </button>
    </div>
    <div></div>
    <div class="col-span-3">
      <VuePlotly
        :data="state.plotly.data"
        :layout="state.plotly.layout"
        :display-mode-bar="false"
      ></VuePlotly>
    </div>
  </div>
</template>

<style scoped></style>
