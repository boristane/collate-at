<template>
    <div class="map">
        
    </div>
</template>

<script>
import * as d3 from "d3";

const dummyData = [];
const max = 1000;
const numPoints = 30;
for (let i = 0; i < numPoints; i++) {
    const x = Math.floor(Math.random()*max);
    const y = Math.floor(Math.random()*max);
    dummyData.push([x, y,]);
}

const outerWidth = 1200;
const outerHeight = 800;
const margin = {top: 10, left: 50, bottom: 10, right: 10,};
const padding = {top: 30, left: 30, bottom: 30, right: 30,};

const width = outerWidth - margin.left - margin.right - padding.left - padding.right;
const height = outerHeight - margin.top - margin.bottom - padding.top - padding.bottom;


export default {
  name: 'App',
  mounted () {
    this.scatter();
  },
  methods: {
    getScales () {
      let xScale = d3.scaleLinear()
      .domain([0, d3.max(dummyData, d => d[0]),])
      .range([0, width,])
      .nice();

      let yScale = d3.scaleLinear()
        .domain([0, d3.max(dummyData, d => d[1]),])
        .range([height, 0,])
        .nice();

      let colorScale = d3.scaleLinear()
        .domain([0, d3.max(dummyData, d => d[1]),])
        .range([150, 255,])
        .nice();

      let areaScale = d3.scaleSqrt()
        .domain([0, d3.max(dummyData, d => d[1]),])
        .range([0, 10,])
        .nice();
      
      return { xScale, yScale, colorScale, areaScale };
    },
    scatter () {
      const { xScale, yScale, colorScale, areaScale } = this.getScales();
      const svg = d3.select(this.$el)
        .append('svg')
        .attr('width', outerWidth)
        .attr('height', outerHeight)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      svg.selectAll('circle')
        .data(dummyData)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d[0]))
        .attr('cy', d => yScale(d[1]))
        .attr('r', d => areaScale(d[1]))
        .attr('fill', d => `rgb(${colorScale(d[1])}, 0, 0)`);

      let xAxis = d3.axisBottom(xScale);
      svg.append('g')
        .classed('axis', true)
        .attr('transform', `translate(${0}, ${height})`)
        .call(xAxis);

      let yAxis = d3.axisLeft(yScale);
      svg.append('g')
        .classed('axis', true)
        .call(yAxis)
    }
  }
}
</script>

<style scoped>
div {
  color: red;
}
</style>