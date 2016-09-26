/**
 * Created by esri on 2016/9/26.
 */
define([
    "dojo/_base/declare",
    "esri/Map",
    "esri/views/SceneView",
    "esri/Basemap",
    'widgets/BaseWidget/_baseWidget',
    "app/layers",
    'dojo/text!./Templates/template.html'
], function (declare,Map, SceneView, Basemap, _baseWidget, layers,template) {
    return declare([_baseWidget],{
        templateString:template,

        startup: function () {
            this.view=this.initMap();
            this.inherited(arguments);
        },

        /*
        初始化地图
         */
        initMap: function () {
            //基础矢量底图
            var vectorBasemap = new Basemap({
                baseLayers: [layers.baseVectorLayer],
                title: "矢量地图",
                id: "defaultVectorBasemap"
            });
            //基础栅格底图
            var imageBasemap = new Basemap({
                baseLayers: [layers.baseImageLayer],
                title: "影像地图",
                id: "defaultImageBasemap"
            });

            //地图默认加载矢量底图
            var map = new Map({
                basemap: vectorBasemap,
                ground: "world-elevation"
            });

            var view = new SceneView({
                container: this.viewDiv,
                map: map,
                center: [113.32, 29.84],
                zoom: 3,
                tile:0,
                heading:0
            });
            return view;
        },

        /*
        返回视图
         */
        getView: function () {
            return this.view;
        }
    });
});