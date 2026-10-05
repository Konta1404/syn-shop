import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
render={data => (
  <Layout site={data.site}>
    <div className="Catalogue">
      {
        (data.products ? data.products.edges : []).map(({ node: product }) => (
          <div className="Catalogue__item" key={product.id}>
            <button
              type="button"
              aria-label={`Add ${product.name} to cart`}
              className="Product snipcart-add-item"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-image={product.image ? product.image.url : undefined}
              data-item-name={product.name}
              data-item-url={`/`}
            >
              <span className="Product__image">
                {product.image && <Img sizes={product.image.sizes} alt={product.name} />}
              </span> <span className="Product__details">
                <span className="Product__name">
                  {product.name}
                  <span className="Product__price">
                    {product.price}€
                  </span>
                </span>
                <span className="Product__buy">Buy now</span>
              </span>
            </button>
          </div>
        ))
      }
    </div>
  </Layout>
     )}
   />
)
