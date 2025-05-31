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
  }],

  exampleOptions : [
    {
      id:'jc',
      name:'基础',
      children:[
        {
          id: "jc-example1",
          name: "Example 1",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example2",
          name: "Example 2",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example3",
          name: "Example 3",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example4",
          name: "Example 4",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example5",
          name: "Example 5",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example6",
          name: "Example 6",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        }
      ]
    },
    {
      id:'jj',
      name:'进阶',
      children:[
        {
          id: "jj-example1",
          name: "Example 1",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example2",
          name: "Example 2",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example3",
          name: "Example 3",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example4",
          name: "Example 4",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example5",
          name: "Example 5",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example6",
          name: "Example 6",
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        }
      ]
    }
  ]
}
