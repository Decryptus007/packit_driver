import React from 'react'
import IndexHeader from './IndexHeader'
import IndexSevices from './IndexSevices'
import IndexFeatures from './IndexFeatures'
import IndexTestimonials from './IndexTestimonials'
import IndexAbout from './IndexAbout'
import IndexFooter from './IndexFooter'

const IndexHome = () => {
  return (
    <main className="container bg-white mx-auto">
      <IndexHeader />
      <section className="mt-12 md:mt-24">
        <IndexSevices />
        <IndexFeatures />
        <IndexTestimonials />
        <IndexAbout />
      </section>
      <IndexFooter />
    </main>
  )
}

export default IndexHome