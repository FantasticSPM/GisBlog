window.globalConfig = {
  menuOptions : [{
    label: "首页",
    path: "/",
    iconName: "House",
    component: 'IndexView',
    children:[]
  },{
    label: "二三维GIS",
    path: "gis",
    iconName: "Position",
    component:'GISView',
    children:[]
  },{
    label:'示例',
    path: "example",
    iconName: "Document",
    component:'ExampleView',
    children:[]
  },{
    label:'文章',
    path: "article",
    iconName: "Document",
    component:'ArticleView',
    children:[]
  }]
}
