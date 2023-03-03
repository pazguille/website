import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx_preact.ts";
import minify_html from "lume/plugins/minify_html.ts";
import multilanguage from "lume/plugins/multilanguage.ts";

const site = lume();

site.copy("src");
site.copy("CNAME");
site.loadAssets([".css", ".ico", ".png"]);
site.use(jsx());
site.use(minify_html());
site.use(multilanguage());

export default site;
