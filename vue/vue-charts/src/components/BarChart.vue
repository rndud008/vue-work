<template>
  <div>
    <canvas ref="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import {  getCurrentInstance, onMounted, ref } from "vue";

export default {

  props:['propsData'],
  setup(props) {
    const barChart = ref(null);
    const instance = getCurrentInstance();

    onMounted(() => {
      if (!barChart.value || !instance ) return;

       const Chart = instance.appContext.config.globalProperties.$_Chart
       new Chart(barChart.value, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: props.propsData,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          onclick: () =>{
            this.$emit('refresh:chart')
          }
        },
      });
    });

    // onBeforeMount(() => {
    //   if (chartInstance) {
    //     chartInstance.destroy();
    //   }
    // });

    return { barChart };
  },
};
</script>

<style scoped>

</style>