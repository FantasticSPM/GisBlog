window.globalConfig = {
  menuOptions: [
    {
      label: "首页",
      path: "/",
      iconName: "House",
      component: "IndexView",
      children: [],
    },
    {
      label: "二三维GIS",
      path: "gis",
      iconName: "Position",
      component: "GISView",
      children: [],
    },
    {
      label: "示例",
      path: "example",
      iconName: "Document",
      component: "ExampleView",
      children: [],
    },
    {
      label: "文章",
      path: "article",
      iconName: "Document",
      component: "ArticleView",
      children: [],
    },
  ],

  exampleOptions: [
    {
      id: "baseLayer",
      name: "底图",
      iconName: "Document",
      children: [
        {
          id: "tianditu",
          name: "天地图",
          iconName: "Document",
          img: "/ExampleHtml/images/baseLayer/tianditu.png",
        },
        {
          id: "MapBox",
          name: "MapBox",
          iconName: "Document",
          img: "/ExampleHtml/images/baseLayer/MapBox.png",
        },
        {
          id: "gaode",
          name: "高德",
          iconName: "Document",
          img: "/ExampleHtml/images/baseLayer/gaode.png",
        },
        {
          id: "BingMap",
          name: "BingMap",
          iconName: "Document",
          img: "/ExampleHtml/images/baseLayer/BingMap.png",
        },
        {
          id: "OpenStreetMap",
          name: "OpenStreetMap",
          iconName: "Document",
          img: "/ExampleHtml/images/baseLayer/OpenStreetMap.png",
        },
        {
          id: "ArcGisMap",
          name: "ArcGisMap",
          iconName: "Document",
          img: "/ExampleHtml/images/baseLayer/ArcGisMap.png",
        },
      ],
    },
    {
      id: "base",
      name: "基础",
      iconName: "ChatLineSquare",
      children: [
        {
          id: "point",
          name: "点",
          iconName: "Document",
          img: "/ExampleHtml/images/base/point.png",
        },
        {
          id: "polyline",
          name: "线",
          iconName: "Document",
          img: "/ExampleHtml/images/base/polyline.png",
        },
        {
          id: "polygon",
          name: "面",
          iconName: "Document",
          img: "/ExampleHtml/images/base/polygon.png",
        },
        {
          id: "pointAndPolylineAndPolygon",
          name: "点、线、面",
          iconName: "Document",
          img: "/ExampleHtml/images/base/pointAndPolylineAndPolygon.png",
        },
      ],
    },
  ],
};
