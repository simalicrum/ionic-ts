import React from 'react';
import { useEffect } from 'react'
import './App.css';

import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader'

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css'
import '@ionic/core/css/structure.css'
import '@ionic/core/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css'
import '@ionic/core/css/float-elements.css'
import '@ionic/core/css/text-alignment.css'
import '@ionic/core/css/text-transformation.css'
import '@ionic/core/css/flex-utils.css'
import '@ionic/core/css/display.css'


function App() {
  useEffect(() => {
    ionDefineCustomElements(window)
  })
  return (
    <ion-grid>
      <input onChange={(e) => console.log(e.target.value)}/>
      <ion-input onIonChange={(e) =>{console.log(e.detail.value)}}/>
      <ion-row >
        {new Array(8).fill('').map((k, i) => (
          <ion-col key={i} size="3">
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Destination</ion-card-subtitle>
                <ion-card-title>Madison, WI</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-icon name="pin" slot="start"></ion-icon>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </ion-card-content>
            </ion-card>
          </ion-col>
        ))}
      </ion-row>
    </ion-grid>
  )
}

export default App;
