import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3DP_5Ad07Z9GIu9jbuPT2I1NX6WIkCV8",
  authDomain: "carros-83365.firebaseapp.com",
  projectId: "carros-83365",
  storageBucket: "carros-83365.firebasestorage.app",
  messagingSenderId: "652302380091",
  appId: "1:652302380091:web:f6677e77f4202e923d401e",
  measurementId: "G-197DGZ9JLE"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideFirebaseApp(()=> initializeApp(firebaseConfig)), provideFirestore(()=> getFirestore())]
};

