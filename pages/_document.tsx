import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}