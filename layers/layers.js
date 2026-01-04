ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10114525.646937, 4606965.575000, -9922633.353063, 4756482.425000]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteMap_1 = new ol.layer.Tile({
            'title': 'Google Satellite Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Railyards_2 = new ol.format.GeoJSON();
var features_Railyards_2 = format_Railyards_2.readFeatures(json_Railyards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railyards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railyards_2.addFeatures(features_Railyards_2);
var lyr_Railyards_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railyards_2, 
                style: style_Railyards_2,
                popuplayertitle: 'Railyards',
                interactive: true,
    title: 'Railyards<br />\
    <img src="styles/legend/Railyards_2_0.png" /> active<br />\
    <img src="styles/legend/Railyards_2_1.png" /> abandoned/removed<br />' });
var format_Roundhouses_3 = new ol.format.GeoJSON();
var features_Roundhouses_3 = format_Roundhouses_3.readFeatures(json_Roundhouses_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roundhouses_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roundhouses_3.addFeatures(features_Roundhouses_3);
var lyr_Roundhouses_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roundhouses_3, 
                style: style_Roundhouses_3,
                popuplayertitle: 'Roundhouses',
                interactive: true,
                title: '<img src="styles/legend/Roundhouses_3.png" /> Roundhouses'
            });
var format_RailroadRoutes_4 = new ol.format.GeoJSON();
var features_RailroadRoutes_4 = format_RailroadRoutes_4.readFeatures(json_RailroadRoutes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailroadRoutes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailroadRoutes_4.addFeatures(features_RailroadRoutes_4);
var lyr_RailroadRoutes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RailroadRoutes_4, 
                style: style_RailroadRoutes_4,
                popuplayertitle: 'Railroad Routes',
                interactive: true,
    title: 'Railroad Routes<br />\
    <img src="styles/legend/RailroadRoutes_4_0.png" /> active<br />\
    <img src="styles/legend/RailroadRoutes_4_1.png" /> inactive/unknown<br />\
    <img src="styles/legend/RailroadRoutes_4_2.png" /> abandoned<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteMap_1.setVisible(false);lyr_Railyards_2.setVisible(true);lyr_Roundhouses_3.setVisible(true);lyr_RailroadRoutes_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteMap_1,lyr_Railyards_2,lyr_Roundhouses_3,lyr_RailroadRoutes_4];
lyr_Railyards_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'status': 'yard status', 'operator': 'operator', 'comments': 'comments', });
lyr_Roundhouses_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'element': 'element', 'operator': 'operator', });
lyr_RailroadRoutes_4.set('fieldAliases', {'fid': 'fid', 'rr_id': 'rr_id', 'status': 'status', 'last operator': 'last operator', 'name': 'name', 'railroad type': 'railroad type', 'railroad status': 'railroad status', 'electrified': 'electrified', 'comments': 'comments', 'original operator': 'original operator', 'township': 'township', 'grouping': 'grouping', });
lyr_Railyards_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'status': 'ValueMap', 'operator': 'TextEdit', 'comments': 'TextEdit', });
lyr_Roundhouses_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'element': 'TextEdit', 'operator': 'TextEdit', });
lyr_RailroadRoutes_4.set('fieldImages', {'fid': 'TextEdit', 'rr_id': 'TextEdit', 'status': 'TextEdit', 'last operator': 'TextEdit', 'name': 'TextEdit', 'railroad type': 'TextEdit', 'railroad status': 'ValueMap', 'electrified': 'ValueMap', 'comments': 'TextEdit', 'original operator': 'TextEdit', 'township': 'TextEdit', 'grouping': 'TextEdit', });
lyr_Railyards_2.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - visible with data', 'status': 'hidden field', 'operator': 'inline label - visible with data', 'comments': 'hidden field', });
lyr_Roundhouses_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'element': 'inline label - always visible', 'operator': 'inline label - always visible', });
lyr_RailroadRoutes_4.set('fieldLabels', {'fid': 'hidden field', 'rr_id': 'hidden field', 'status': 'inline label - always visible', 'last operator': 'inline label - always visible', 'name': 'inline label - always visible', 'railroad type': 'inline label - visible with data', 'railroad status': 'hidden field', 'electrified': 'hidden field', 'comments': 'hidden field', 'original operator': 'inline label - always visible', 'township': 'hidden field', 'grouping': 'hidden field', });
lyr_RailroadRoutes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});