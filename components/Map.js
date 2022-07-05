import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import { Graticule } from "react-simple-maps"

//import "./styles.css";

const geoUrl =
  "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/illinois-counties.geojson";

const Map = () => (
    <div >
      <ComposableMap
      projection={'geoMercator'}

      projectionConfig={{
        rotate: [89, -39.69, 0],
        scale: 6100}}

       >     
          <Geographies   stroke="#EAEAEC" geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>

      </ComposableMap>
    </div>
);




export default Map


