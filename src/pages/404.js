import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: No Encontrado" />
    <h1>NO Encontrado</h1>
    <p>Estas intentando ingresar a un recurso que no existe ☹.</p>
  </Layout>
)

export default NotFoundPage
