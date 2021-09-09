import React, { Children, useLayoutEffect } from 'react'
import OlMap from 'ol/Map'
import 'ol/ol.css';
import {Circle, Fill, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import View from 'ol/View';
import Sidebar from './components/sidebar/Sidebar';
import SearchForm from './components/searchform/SearchForm';
import {useGeographic} from 'ol/proj';
import {Point} from 'ol/geom';
import {Feature} from 'ol/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Key from './components/rough/Key';
import Book from './components/rough/Book';




const MapSection = () => {
  useGeographic();
  useLayoutEffect(() => {
    const seoul1  = [126.97328373, 37.56755685] ;
    const point1 = new Point(seoul1);

    const seoul2  = [126.98351298, 37.56722338] ;
    const point2 = new Point(seoul2);

    const seoul3  = [126.97860143, 37.56269872] ;
    const point3 = new Point(seoul3);


    const map = new OlMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      new VectorLayer({
        source: new VectorSource({
          features: [new Feature(point1)],  
      }),
      style: new Style({
        image: new Circle({
          radius: 10,
          fill: new Fill({color: 'red'}),
        }), 
      }),
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [new Feature(point2)],  
      }),
      style: new Style({
        image: new Circle({
          radius: 10,
          fill: new Fill({color: 'red'}),
        }), 
      }),
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [new Feature(point3)],  
      }),
      style: new Style({
        image: new Circle({
          radius: 10,
          fill: new Fill({color: 'red'}),
        }), 
      }),
      }),
    ],
      target: 'map-section',
      view: new View({
        center: seoul1,
        zoom: 15,

      }),
      
      controls: [],
    });
  }, [])

  return (
    <section id='map-section'>
    </section>
  )
}

const App = () => {
  return (
    <main id='main'>
      <Router>
      <Sidebar />
      <Switch>
      <Route exact path='/'>
      <SearchForm />
      </Route>
      <Route path='/key'>
      <Key />
      </Route>
      <Route path='/book'>
      <Book />
      </Route>
      </Switch>
      <MapSection />
      </Router>
    </main>
  )
}

export default App;
