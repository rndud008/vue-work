<template>
  <div>
    <h2>Chart.js</h2>
    <BarChart :propsData="chartDataSet" @refresh:chart="refreshChart"></BarChart>
    <LineChart></LineChart>
    
  </div>
</template>

<script>
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
export default {
  components: {
    BarChart,
    LineChart
  },
  data(){
    return{
      chartDataSet: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
            },
          ]
    }
  },  
  methods:{
    refreshChart(){
      this.chartDataSet = [10,20]
    }
  },
  created(){
    // getChartData()
    // .then(response => this.chartDataSet = response.data)
    // .catch(error => console.log(error))
  }
};
</script>

<style scoped></style>
