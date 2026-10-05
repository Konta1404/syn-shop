# Syn Shop

An example storefront integrating Gatsby, DatoCMS product content, and Snipcart checkout. This is an integration demo, not a custom commerce backend or evidence of real customers or transactions. The original example README and attribution are preserved in `docs/original-README.md`.

## Architecture

The Gatsby home-page GraphQL query reads products from DatoCMS at build time. Product markup supplies item data to Snipcart, which manages checkout. `src/layouts/index.js` supplies the shared page shell and cart entry point. There is no custom order-processing backend in this repository.

## Setup prerequisites

The historical dependency set uses Gatsby 2 and node-sass 4. Use a compatible isolated legacy runtime, or upgrade those dependencies before regular use. A DatoCMS project must expose Product records with `id`, `name`, `price`, and an image field compatible with the Gatsby query. The config reads `DATO_API_TOKEN` from a local `.env`.

Use only a Snipcart test-mode public key for a portfolio demo. Set `SNIPCART_PUBLIC_KEY` in `.env`; the previously hardcoded key has been removed from the working source. Its validity and mode were not verified. Do not perform checkout transactions while evaluating this repository.

The package scripts are `npm run develop` and `npm run build`. They were not run in this workspace; no CMS or checkout service was contacted. The existing `npm test` script is a placeholder, not a passing test suite.

Native purchase/cart buttons and missing-image/catalog guards have been added. JSX syntax was checked locally, but the CMS-dependent application was not built.

## Improvements before a showcase

Document your modifications relative to the original example, upgrade the build stack, add fixture-backed catalog builds, test missing product/image data plus sandbox checkout handoff. A full rebuild is lower priority than a modern React flagship.
