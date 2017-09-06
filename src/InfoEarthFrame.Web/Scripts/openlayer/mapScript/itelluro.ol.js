/**
 * those are for pulling tiles from Itelluro tiles source address, which would return a new layer or map that is access to openlayer3.
 * refer to http://openlayers.org
 */

function iTelluro() {

    var _renderer = "dom"; //canvas,dom,webgl

//
// map

    /**
     * @param {string} id The container for the map.
     * @param {number} numLevels The maximum zoom level used to determine the resolution constraint.
     * @param {number} dsEast  MaxX extent coordinates.
     * @param {number} dsWest MinX extent coordinates
     * @param {number} dsSouth MinY extent coordinates
     * @param {numbere} dsNorth MaxY extent coordinates
     * @param {string} dataServerKey Source Package Key of tiles' provider.
     * @param {string} url URL address of tiles' provider.
     * @param {number} tileSize The pixel of tile.
     * @param {number} zeroLevelSize  The size of zero level tile.
     * @return {ol.layer.Tile} return map
     */
    this.NewWebTilesMap = function (id, numLevels, dsEast, dsWest, dsSouth, dsNorth,
                                    dataServerKey, url, tileSize, zeroLevelSize, zoom) {
        var layer1 = this.newItelluroLayer(dataServerKey, url, tileSize, zeroLevelSize);

        var view = new ol.View({
            center: [(dsEast + dsWest) / 2, (dsNorth + dsSouth) / 2], zoom: 0, minZoom: 0, maxZoom: numLevels,
            projection: 'EPSG:4326',
            maxResolution: zeroLevelSize / tileSize
        });

        var map = new ol.Map({
            layers: [layer1],
            target: id,
            view: view,
            renderer: _renderer,
            zoom: zoom
        });

        return map;
    };

    /**
     * @param {string} id The container for the map.
     * @param {number} numLevels The maximum zoom level used to determine the resolution constraint.
     * @param {number} dsEast  MaxX extent coordinates.
     * @param {number} dsWest MinX extent coordinates
     * @param {number} dsSouth MinY extent coordinates
     * @param {number} dsNorth MaxY extent coordinates
     * @param {string} root Local root directory of tiles' files.
     * @param {number} tileSize The pixel of tile.
     * @param {number} zeroLevelSize  The size of zero level tile.
     * @return {ol.layer.Tile} return map
     */
    this.NewLocalTilesMap = function (id, numLevels, dsEast, dsWest, dsSouth, dsNorth,
                                      root, tileSize, zeroLevelSize, zoom) {

        var layer1 = this.newLocalTilesLayer(root, tileSize, zeroLevelSize);

        var view = new ol.View({
            center: [(dsEast + dsWest) / 2, (dsNorth + dsSouth) / 2], zoom: 0, minZoom: 0, maxZoom: numLevels,
            projection: 'EPSG:4326',
            maxResolution: zeroLevelSize / tileSize
        });

        var map = new ol.Map({
            layers: [layer1],
            target: id,
            view: view,
            renderer: _renderer,
            zoom: zoom
        });

        return map;
    };


//
// layer

    /**
     * @param {string} dataServerKey The package key address of tiles' provider.
     * @param {string} url URL address of tiles' provider.
     * @param {number} tileSize The pixel of tile.
     * @param {number} zeroLevelSize  The size of zero level tile.
     * @return {ol.layer.Tile} return layer
     */
    this.newItelluroLayer = function (dataServerKey, url, tileSize, zeroLevelSize) {
        if (url.indexOf("?") > 0)
            url += "&T={t}";
        else
            url += "?T={t}";
        url = url.replace('{t}', dataServerKey);
        return this.newWebTilesLayer(url, tileSize, zeroLevelSize);
    };

    /**
     * @param {string} root Local root directory of tiles' files.
     * @param {number} tileSize The pixel of tile.
     * @param {number} zeroLevelSize  The size of zero level tile.
     * @return {ol.layer.Tile} return layer
     */
    this.newLocalTilesLayer = function (root, tileSize, zeroLevelSize) {
        var imageType = "png";
        root += "/{z}/{y}/{y}_{x}." + imageType;
        return this.newTilesUrlLayer(root, tileSize, zeroLevelSize);
    };

    /**
     * @param {string} url URL address of tiles' provider.
     * @param {number} tileSize The pixel of tile.
     * @param {number} zeroLevelSize  The size of zero level tile.
     * @return {ol.layer.Tile} return layer
     */
    this.newWebTilesLayer = function (url, tileSize, zeroLevelSize) {
        url = encodeURI(url);
        if (url.indexOf("?") > 0)
            url += "&L={z}&X={x}&Y={y}";
        else
            url += "?L={z}&X={x}&Y={y}";
        return this.newTilesUrlLayer(url, tileSize, zeroLevelSize);
    };

    /**
     * @param {string} urlTemplate URL template. Must include {x}, {y} or {-y}.
     * @param {number} tileSize The pixel of tile.
     * @param {number} zeroLevelSize  The size of zero level tile.
     * @return {ol.layer.Tile} return layer
     */
    this.newTilesUrlLayer = function (urlTemplate, tileSize, zeroLevelSize) {
        var resolutions = new Array(22);
        for (var i = 0, ii = resolutions.length; i < ii; ++i) {
            resolutions[i] = zeroLevelSize / Math.pow(2, i) / tileSize;
        }
        var layer = new ol.layer.Tile({
            source: new ol.source.XYZ({
                tileSize: tileSize,
                tileUrlFunction: tileUrlFunctionCallBack,
                projection: 'EPSG:4326',
                //tilePixelRatio: tileSize / 256,
                tileGrid: new ol.tilegrid.TileGrid({
                    resolutions: resolutions,
                    tileSize: tileSize,
                    origin:[-180,-90]
                })
            }),
            name: ''
        });

        function tileUrlFunctionCallBack(tileCoord, pixelRatio, projection) {
            var z = tileCoord[0];
            var x = tileCoord[1];
            var y = tileCoord[2];

            var xStr4 = "0000" + x.toString();
            xStr4 = xStr4.substr(xStr4.length - 4, 4);
            var yStr4 = "0000" + y.toString();
            yStr4 = yStr4.substr(yStr4.length - 4, 4);

            var url = urlTemplate.replace('{z}', z.toString())
                .replace('{y}', yStr4)
                .replace('{y}', yStr4)
                .replace('{x}', xStr4)
                .replace('{x}', xStr4);
            return url
        }

        return layer;
    }


    /**
     * @param {string} urlTemplate URL template.
     * @param {sld}  example :  '<?xml version="1.0" encoding="UTF-8"?><sld: .....'
     * @param {string} format  example : 'image/png'
     * @param {string} layers   example :  'tiger:tiger_roads',
     * @return {ol.layer.Tile} return layer
     */
    this.newTileByWMS = function (urlTemplate, sld, format, layers) {
        var layer = new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: urlTemplate,
                params: {
                    FORMAT: format,
                    LAYERS: layers,
                    // SLD_BODY: '',
                    //SLD: "http://tiger_roads.sld",
                    SLD_BODY: sld,
                    TILED: true
                },
                serverType: 'geoserver'
            }),
            name: ''
        });
        return layer;
    }
}

/**
 * @param {string} id The container for the map.
 * @param {number} numLevels The maximum zoom level used to determine the resolution constraint.
 * @param {number} dsEast  MaxX extent coordinates.
 * @param {number} dsWest MinX extent coordinates
 * @param {number} dsSouth MinY extent coordinates
 * @param {numbere} dsNorth MaxY extent coordinates
 * @param {string} sourcePackageKey Source Package Key of tiles' provider.
 * @param {string} url URL address of tiles' provider.
 * @param {number} tileSize The pixel of tile.
 * @param {number} zeroLevelSize  The size of zero level tile.
 * @return {ol.layer.Tile} return map
 */
function NewWebTilesMap(id, numLevels, dsEast, dsWest, dsSouth, dsNorth,
                                sourcePackageKey, url, tileSize, zeroLevelSize, zoom) {
    var itelluro = new iTelluro();
    return itelluro.NewWebTilesMap(id, numLevels, dsEast, dsWest, dsSouth, dsNorth,
        sourcePackageKey, url, tileSize, zeroLevelSize, zoom);
}

/**
 * @param {string} root Local root directory of tiles' files.
 * @param {number} tileSize The pixel of tile.
 * @param {number} zeroLevelSize  The size of zero level tile.
 * @return {ol.layer.Tile} return layer
 */
function newLocalTilesLayer(root, tileSize, zeroLevelSize) {
    var itelluro = new iTelluro();
    return itelluro.newLocalTilesLayer(root, tileSize, zeroLevelSize);
}

/**
* @param {string} id The container for the map.
* @param {number} numLevels The maximum zoom level used to determine the resolution constraint.
* @param {number} dsEast  MaxX extent coordinates.
* @param {number} dsWest MinX extent coordinates
* @param {number} dsSouth MinY extent coordinates
* @param {number} dsNorth MaxY extent coordinates
* @param {string} root Local root directory of tiles' files.
* @param {number} tileSize The pixel of tile.
* @param {number} zeroLevelSize  The size of zero level tile.
* @return {ol.layer.Tile} return map
*/
function NewLocalTilesMap(id, numLevels, dsEast, dsWest, dsSouth, dsNorth,
                                  root, tileSize, zeroLevelSize, zoom) {
     var itelluro = new iTelluro();
     return itelluro.NewLocalTilesMap(root, tileSize, zeroLevelSize, zoom);
}


/**
 * @param {string} urlTemplate URL template.      (必选)
 * @param {string} layers   图层名称              (必选)
 * @param {string} format  example : 'image/png'
 * @param {sld}  example :  '<?xml version="1.0" encoding="UTF-8"?><sld: .....'
 * @return {ol.layer.Tile} return layer
 */
function newLocalTilesByWMS(urlTemplate, layers, format, sld) {
    format = !format ? 'image/png' : format;
    var itelluro = new iTelluro();
    return itelluro.newTileByWMS(urlTemplate, sld, format, layers);
}

