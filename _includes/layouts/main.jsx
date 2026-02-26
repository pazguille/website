
export default ({ lang, children }) => (
  <html lang={lang} class="scroll-smooth">
    <head>
      <meta charset="utf-8" />
      <title>Guille Paz - 👨‍💻 Frontend Developer ⚡️ Web Performance Lover</title>
      <link rel="shortcut icon" href="src/assets/favicon.ico" />
      <meta http-equiv="cleartype" content="on" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="google-site-verification" content="qPlZxRIR0Jh4xv4EpVMKTdMkHUc6QkA90FJ36-aeNRI" />
      <meta name="msvalidate.01" content="E69BB1A31D65F1F707C29A72889383D9" />
      <link rel="dns-prefetch" href="https://blog.pazguille.me" />
      <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />
      <link rel="preload" as="image" href="/src/assets/me.meli.jpg" />
      <link rel="alternate" hreflang="en" href="https://pazguille.me/en" />
      <link rel="stylesheet" href="/src/css/normalize.css" />
      <link rel="stylesheet" href="/src/css/pazguille.css" />
    </head>
    <body class="font-sans antialiased text-slate-800 bg-background-light transition-colors duration-300">

      <nav class="fixed top-0 w-full z-50 bg-background-light/80 backdrop-blur-md border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span class="font-bold text-xl tracking-tight text-slate-900">¡Hola!</span>
          <div class="flex items-center gap-6">
            <div class="text-sm font-semibold text-slate-500">
              <a href="/" class={lang === 'es' ? 'text-primary' : 'hover:text-slate-900 transition-colors'}>ES</a>
              <span class="mx-1">•</span>
              <a href="/en" class={lang === 'en' ? 'text-primary' : 'hover:text-slate-900 transition-colors'}>EN</a>
            </div>
          </div>
        </div>
      </nav>
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
