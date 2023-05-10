import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta
            name="keywords"
            content="Michael Rodrigues, programador, web, websites, Desenvolvedor Back-end, developer, desenvolvimento, programação, back-end, front-end, Node, express, mongodb JavaScript, ReactJS, NextJS, website, portfolio, Profissional de TI"
          />
          <meta
            name="description"
            content="Meu nome é Michael Rodrigues sou um Desenvolvedor Back-end. Confira meus projetos construídos."
          />
          <meta name="robots" content="index, follow" />
          <meta name="rating" content="general" />
          <meta name="language" content="pt-BR" />
          <meta httpEquiv="content-language" content="pt-br" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <link
            rel="canonical"
            href="https://portfolio-p3jgsrvpo-michaelrodrigues.vercel.app/"
          />
          <meta name="theme-color" content="#00d9ff" />
          <meta name="author" content="Michael Rodrigues" />
          <meta name="creator" content="Michael Rodrigues" />
          <meta name="copyright" content="© 2023 Michael Rodrigues" />

          <meta
            property="og:site_name"
            content="Portfolio - Michael Rodrigues"
          />
          <meta
            property="og:title"
            content="Michael Rodrigues | Desenvolvedor"
          />
          <meta
            property="og:description"
            content="Meu nome é Michael Rodrigues sou um Desenvolvedor Back-end. Confira meus projetos construídos."
          />

          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://portfolio-p3jgsrvpo-michaelrodrigues.vercel.app/"
          />

          <link rel="icon" href="/icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
