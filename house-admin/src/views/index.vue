<template>
  <div class="dashboard-editor-container">
    <!-- <el-alert
      title="有偿服务"
      type="info"
      description="我们传播开源的理念，推广开源项目。欢迎需要技术支持、信息分发的朋友添加微信咨询（187-2098-9281）"
      style="line-height: 2"
    >
    </el-alert> -->
    <!-- <el-row style="background: #fff; padding: 32px 16px 0">
      <el-col :xs="12" :sm="12" :lg="6"> 我的待办</el-col>
      <el-col :xs="12" :sm="12" :lg="6">我发起的 </el-col>
      <el-col :xs="12" :sm="12" :lg="6">我处理的 </el-col>
      <el-col :xs="12" :sm="12" :lg="6"> 抄送我的 </el-col>
      <el-col :xs="12" :sm="12" :lg="6"> 发起新流程 </el-col>
    </el-row> -->
    <panel-group />

    <el-row style="background: #fff; padding: 32px 16px 0">
      <line-chart :height="lineHeight" />
    </el-row>
  </div>
</template>

<script>
import PanelGroup from "./dashboard/PanelGroup";
import LineChart from "./dashboard/LineChart";

export default {
  name: "Index",
  components: {
    PanelGroup,
    LineChart,
  },
  data() {
    return {
      // 350头部，70提示框
      // 如果设置隐藏top-tags，则还需要减去35
      lineHeight: document.documentElement.clientHeight - 350 + "px", //实时屏幕高度
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: #fff;
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
