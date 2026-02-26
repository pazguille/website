import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import minify_html from "lume/plugins/minify_html.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.copy("src/assets", "src/assets");
site.copy("CNAME");
site.loadAssets([".css", ".ico", ".png", ".svg"]);
site.use(jsx());
site.use(minify_html());
site.use(multilanguage());
site.use(tailwindcss({
  extensions: [".html", ".jsx"],
  options: {
    theme: {
      extend: {
        colors: {
          primary: "#3b82f6",
          "background-light": "#ffffff",
          "background-dark": "#0f172a",
          "surface-dark": "#1e293b",
          "card-dark": "#334155",
        },
      },
    },
  },
}));
site.use(postcss());

export default site;
