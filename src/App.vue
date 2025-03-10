<script setup lang="ts">

</script>

<template>
  <div style="display: grid; grid-template-columns: auto 1fr;height: 100vh;">
    <div style="border-right:  1px solid lightgray;padding: 10px;line-height: 1.5;">
      <div>
        <RouterLink to="/loadscene">加载场景</RouterLink>
      </div>
      <div>
        <RouterLink to="/loaddwg">加载dwg</RouterLink>
      </div>
      <div>
        <RouterLink to="/loadmulti">加载多个</RouterLink>
      </div>
      <div>
        <RouterLink to="/label">标签</RouterLink>
      </div>
      <div>
        <RouterLink to="/section">剖切</RouterLink>
      </div>
      <div>
        <RouterLink to="/flow">水流</RouterLink>
      </div>
    </div>
    <div>
      <RouterView />
    </div>
  </div>

  
</template>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
</style>
