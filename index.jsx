export const layout = "layouts/main.jsx";

export const lang = ["en", "es"];

export const en = {
  url: '/',
};

export default (data) => (
  <>
    <header class="header">
      <div class="header--wrap">
        <div class="header__info">
          <div>
            <small>[ <a href="/">EN</a> • <a href="/es">ES</a> ]</small>
          </div>
          <br />
          <h1 class="header__name">Guille Paz</h1>
          <h2 class="header__intro">👨‍💻 Frontend Developer ⚡️ Web Performance Lover</h2>
          {data.site[data.lang].intro.map(intro => (
            <p>{intro}</p>
          ))}
          <ul class="header__social">
            {data.site.links.map(link => (
              <li>{link.icon} <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a></li>
            ))}
          </ul>
        </div>
        <img src="/src/assets/me.png" decoding="async" loading="lazy" alt="" width="790" class="header__avatar" />
      </div>
    </header>

    <section class="posts">
      <h3>{data.site[data.lang].posts}</h3>

      <div class="grid grid--gutters">
        {data.posts.map(post => (
          <article class="grid-cell">
            <a class={`projects__card ${post.type}`} href={post.url} target="_blank" rel="noopener noreferrer">
              <h4 class="projects__title">{post.title}</h4>
              <p class="projects__description">{post.description}</p>
            </a>
          </article>
        ))}
      </div>
    </section>

    <section class="projects">
      <h3>{data.site[data.lang].projects}</h3>

      {data.projects.map(projects => (
        <div class="grid grid--gutters">
          {projects.map(post => (
            <article class="grid-cell">
              <a class={`projects__card ${post.type}`} href={post.url} target="_blank" rel="noopener noreferrer">
                <h4 class="projects__title">{post.title}</h4>
                <p class="projects__description">{post.description}</p>
              </a>
            </article>
          ))}
        </div>
      ))}
    </section>

    <footer>
      <h3>💸 {data.site[data.lang].donate}</h3>
      <a href="https://cafecito.app/pazguille" rel="noopener" target="_blank"><img height="28" src="https://cdn.cafecito.app/imgs/buttons/button_5_2x.png" alt="Support me on cafecito.app" /></a>
      <a href="https://www.paypal.com/paypalme/pazguille" rel="noopener" target="_blank"><img height="28" src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/pazguille" alt="Support me on PayPal" /></a>
    </footer>
  </>
);
