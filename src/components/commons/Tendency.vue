<template>
    <div class="line1">
        <div id="line1" class="" style="width: 90% ;height:450px;"></div>
    </div>
</template>

<script>

import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/tooltip'
export default {
  mounted () {
    this.myChart = echarts.init(document.getElementById('line1'))
    this.datas = [[], [], []]
    this.datas = this.datas.map((data) => {
      const tmp = []
      for (let index = 0; index < 7; index++) {
        tmp.push(Math.ceil(Math.random() * 200))
      }
      return tmp
    })
    this.initData()
  },
  props: ['sevenDate', 'sevenDay'],
  methods: {
    initData () {
      console.log(this.sevenDate)
      const colors = ['#5793f3', '#675bba', '#d14a61']
      const option = {
        color: colors,
        title: {
          text: '走势图',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['新注册用户', '新增订单', '新增管理员']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['bar', 'line'] },
            restore: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.sevenDay
        },
        yAxis: [
          {
            type: 'value',
            name: '用户',
            min: 0,
            max: 200,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '订单',
            min: 0,
            max: 200,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '新注册用户',
            type: 'line',
            // data: this.sevenDate[0],
            data: this.datas[0],
            yAxisIndex: 1,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '新增订单',
            type: 'line',
            // data: this.sevenDate[1],
            data: this.datas[1],
            yAxisIndex: 1,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '新增管理员',
            type: 'line',
            // data: this.sevenDate[2],
            data: this.datas[2],
            yAxisIndex: 1,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          }
        ]
      }
      // 绘制图表
      this.myChart.setOption(option)
      // 调试用
      // this.myChart.setOption({
      //   title: {
      //     text: 'ECharts 入门示例'
      //   },
      //   tooltip: {},
      //   xAxis: {
      //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      //   },
      //   yAxis: {},
      //   series: [{
      //     name: '销量',
      //     type: 'bar',
      //     data: [5, 20, 36, 10, 10, 20]
      //   }]
      // })
    }
  },
  watch: {
    sevenDate: function () {
      this.initData()
    },
    sevenDay: function () {
      this.initData()
    }
  }
}
</script>

<style lang="less">
@import "../../style/mixin";
.line1 {
  display: flex;
  justify-content: center;
}
</style>
