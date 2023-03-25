<template>
  <div class="layout-demo">
    <a-layout style="height: 100vh">
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider>Sider</a-layout-sider>
        <!-- 子应用 的id 和 地址端口-->
        <a-layout-content>
          <WujieVue
            width="100%"
            height="100%"
            name="sub"
            url="http://127.0.0.1:5173/"
            :sync="true"
          ></WujieVue>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}

.layout-demo :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>
