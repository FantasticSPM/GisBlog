<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjOTAwM2EyMC01ODQ5LTRlMjQtOGIxOS01Yjg0ZjBiM2MwODQiLCJpZCI6MTkwNzg2LCJpYXQiOjE3NDg1NDA5MzF9.5d4lT88cqYp74aPH34QK_iARbCr4GNfQcYAzWx_itf0'
onMounted(()=>{
  const viewerOptions = {
    animation: false, // 是否创建动画小器件，左下角仪表
    baseLayerPicker: false, // 是否显示图层选择器
    fullscreenButton: false, // 是否显示全屏按钮
    geocoder: false, // 是否显示geocoder小器件，右上角查询按钮
    homeButton: false, // 是否显示Home按钮
    infoBox: false, // 是否显示信息框
    sceneMode: Cesium.SceneMode.SCENE3D, // 初始场景模式, SCENE2D | SCENE3D | COLUMBUS_VIEW
    sceneModePicker: false, // 是否显示3D/2D选择器
    scene3DOnly: true, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
    selectionIndicator: false, // 是否显示选取指示器组件
    vrButton: false, // vr模式
    timeline: true, // 是否显示时间轴
    navigationHelpButton: false, // 是否显示右上角的帮助按钮
    baselLayerPicker: false, // 将图层选择的控件关掉，才能添加其他影像数据
    shadows: false, // 是否显示背影
    shouldAnimate: true,
    clock: new Cesium.Clock(), // 用于控制当前时间的时钟对象
    imageryProvider: undefined, // 不添加默认影像图层
    selectedImageryProviderViewModel: undefined, // 当前图像图层的显示模型，仅baseLayerPicker设为true有意义
    imageryProviderViewModels: Cesium.createDefaultImageryProviderViewModels(), // 可供BaseLayerPicker选择的图像图层ProviderViewModel数组
    selectedTerrainProviderViewModel: undefined, // 当前地形图层的显示模型，仅baseLayerPicker设为true有意义
    terrainProviderViewModels: Cesium.createDefaultTerrainProviderViewModels(), // 可供BaseLayerPicker选择的地形图层ProviderViewModel数组
    terrainProvider: new Cesium.EllipsoidTerrainProvider(), // 地形图层提供者，仅baseLayerPicker设为false有意义
    fullscreenElement: document.body, // 全屏时渲染的HTML元素,
    useDefaultRenderLoop: true, // 如果需要控制渲染循环，则设为true
    targetFrameRate: undefined, // 使用默认render loop时的帧率
    showRenderLoopErrors: false, // 如果设为true，将在一个HTML面板中显示错误信息
    automaticallyTrackDataSourceClocks: true, // 自动追踪最近添加的数据源的时钟设置
    contextOptions: undefined, // 传递给Scene对象的上下文参数（scene.options）
    mapProjection: new Cesium.WebMercatorProjection(), // 地图投影体系
    dataSources: new Cesium.DataSourceCollection(), // 需要进行可视化的数据源的集合
    creditContainer: document.createElement('div'), // 创建空div，可实现移除版权信息的效果
  }
  const viewer = new Cesium.Viewer('cesiumContainer',viewerOptions)
  window.viewer = viewer
  viewer.scene.globe.enableLighting = true

  //设置默认视角
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(116.397428, 39.90923, 5000000)
  })
  // viewer.scene.globe.show = true
})

onBeforeUnmount(()=>{
  viewer.destroy()
  window.viewer = null

})
</script>

<style scoped lang="scss">
#cesiumContainer {
  width: 100%;
  height: calc(100vh - $header-height - $footer-height);
  position: relative;
}
</style>