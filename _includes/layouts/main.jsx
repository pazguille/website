
export default ({ lang, children }) => (
  <html lang={lang}>
    <head>
      <meta charset="utf-8" />
      <title>Guille Paz - 👨‍💻 Frontend Developer ⚡️ Web Performance Lover</title>
      <link rel="shortcut icon" href="src/assets/favicon.ico" />
      <meta http-equiv="cleartype" content="on" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="google-site-verification" content="qPlZxRIR0Jh4xv4EpVMKTdMkHUc6QkA90FJ36-aeNRI" />
      <meta name="msvalidate.01" content="E69BB1A31D65F1F707C29A72889383D9" />
      <link href="https://www.googletagmanager.com" rel="preconnect" crossorigin />
      <link rel="alternate" hreflang="es" href="https://pazguille.me/es" />
      <link rel="stylesheet" href="/src/css/pazguille.css" />
    </head>
    <body>
      {children}
      <script dangerouslySetInnerHTML={{ __html:`
        window.addEventListener('load', function() {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9GT6CBM18W', {
            storage: 'none',
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
          });
          var s = document.createElement('script');
          s.src = 'https://www.googletagmanager.com/gtag/js?id=G-9GT6CBM18W';
          s.async = 1;
          var m = document.getElementsByTagName('script')[0];
          m.parentNode.insertBefore(s,m);
        });
      `}} />
    </body>
  </html>
);
