import { Component, useState } from 'react'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import './App.css'
import {CORE_CONCEPTS} from './data.jsx'

function App() {
  return (
    <>
      <div>
        <Header />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
             title={CORE_CONCEPTS[0].title}
             description={CORE_CONCEPTS[0].description}
             image={CORE_CONCEPTS[0].image}
             />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <main>
        </main>
      </div>
    </>
  )
}

export default App
