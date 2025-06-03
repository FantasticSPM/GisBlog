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
      iconName:'ChatLineSquare',
      children:[
        {
          id: "jc-example1",
          name: "jc-Example 1",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example2",
          name: "jc-Example 2",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example3",
          name: "jc-Example 3",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example4",
          name: "jc-Example 4",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example5",
          name: "jc-Example 5",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jc-example6",
          name: "jc-Example 6",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        }
      ]
    },
    {
      id:'jj',
      name:'进阶',
      iconName:'TrophyBase',
      children:[
        {
          id: "jj-example1",
          name: "jj-Example 1",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example2",
          name: "jj-Example 2",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example3",
          name: "jj-Example 3",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example4",
          name: "jj-Example 4",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example5",
          name: "jj-Example 5",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        },
        {
          id: "jj-example6",
          name: "jj-Example 6",
          iconName:'Document',
          img:'/ExampleHtml/images/ImageryAdjustment.jpg',
        }
      ]
    }
  ]
}
