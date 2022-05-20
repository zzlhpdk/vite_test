<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <!-- 子路由出口 -->
        <el-main> <router-view></router-view></el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scopde>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  border: 1px blue solid;
}
.el-container {
  height: 100vh;
  border: 1px red solid;
}
</style>
