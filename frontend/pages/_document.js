import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Head>
        <>
          <meta charSet="utf-8"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </>
      </Head>
      <body>
        <Main />
        <NextScript />

          <Script
            async
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossOrigin="anonymous"
          ></Script>
          <Script
            async
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
            integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
            crossOrigin="anonymous"
          ></Script>

      </body>
    </Html>
  )
}
