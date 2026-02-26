export const layout = "layouts/main.jsx";

export const lang = ["es", "en"];

export const es = {
  url: '/',
};

export default (data) => (
  <>

    <header class="relative pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 space-y-8">
          <h1 class="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-4">Guille Paz</h1>
          <h2 class="flex flex-wrap items-center gap-3 text-lg lg:text-xl font-medium text-slate-700">
            <span class="flex items-center gap-1">👨‍💻 Frontend Developer</span>
            <span class="hidden sm:inline text-slate-300">|</span>
            <span class="flex items-center gap-1">⚡ Web Performance Lover</span>
          </h2>
          <div class="prose prose-lg text-slate-600 leading-relaxed max-w-xl">
            {data.site[data.lang].intro.map(intro => (
              <p class="pb-2">{intro}</p>
            ))}
          </div>
          <ul class="flex flex-wrap gap-4">
            {data.site.links.map(link => (
              <li key={link.title}>
                <a class="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-primary hover:text-white transition-all group" href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon_svg_path ? (
                    <span class="w-4 h-4 bg-current" style={{ maskImage: `url(${link.icon_svg_path})`, maskRepeat: 'no-repeat', maskPosition: 'center', maskSize: 'contain', WebkitMaskImage: `url(${link.icon_svg_path})`, WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', WebkitMaskSize: 'contain' }} />
                  ) : (
                    <span class="social-icon-svg w-4 h-4 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: link.icon }} />
                  )}
                  <span class="font-medium">{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div class="relative w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] group">
            <div class="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl bg-white">
              <img src="/src/assets/me.meli.jpg" decoding="async" loading="lazy" alt="" class="w-full h-full object-cover transition-transform duration-700 scale-x-[-1]" />
            </div>
            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-surface-dark rounded-full border-4 border-white flex items-center justify-center shadow-xl animate-bounce hidden lg:flex">
              <span class="text-3xl">👋</span>
            </div>
          </div>
        </div>
      </div>
    </header>


    <section class="bg-surface-dark py-20 px-6 transition-colors duration-300">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-3xl font-bold text-white mb-10 border-l-4 border-primary pl-4">
          01. {data.site[data.lang].posts}
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.posts.map(post => (
            <article class="group relative bg-card-dark rounded-xl p-6 hover:bg-slate-600 transition-colors duration-300 flex flex-col justify-between h-full border border-slate-600/30">
              <h4 class="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                <a href={post.url} target="_blank" rel="noopener noreferrer" class="after:content-[''] after:absolute after:inset-0">
                  {post.title}
                </a>
              </h4>
              <p class="text-slate-300 text-sm leading-relaxed">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>


    <section class="bg-[#111] py-24 px-6 relative overflow-hidden transition-colors duration-300">
      <div class="absolute inset-0 bg-gradient-to-b from-surface-dark/20 to-transparent pointer-events-none"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <h3 class="text-3xl font-bold text-white mb-10 border-l-4 border-primary pl-4">
          02. {data.site[data.lang].projects} <span class="text-red-500 animate-pulse">❤</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.projects.flat().map(project => (
            <article class={`group relative rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 p-6 flex flex-col justify-between transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-xl shadow-black/50 ${project.featured ? 'md:col-span-2' : ''}`}>
              <div class="flex justify-between items-start mb-6">
                <div class="bg-slate-800 rounded-lg p-2 group-hover:bg-slate-700 transition-colors text-white">
                  <div class="project-icon-svg w-6 h-6 flex items-center justify-center text-white" dangerouslySetInnerHTML={{ __html: project.icon }} />
                </div>
                <div class="text-slate-600 w-5 h-5 group-hover:text-white transition-colors -rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
              <h4 class="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                <a href={project.url} target="_blank" rel="noopener noreferrer" class="after:content-[''] after:absolute after:inset-0">
                  {project.title}
                </a>
              </h4>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <footer class="bg-surface-dark border-t border-slate-800 py-16 px-6 transition-colors duration-300">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-2">
          {data.site[data.lang].donate}
        </h3>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a class="flex items-center gap-3 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-full border border-neutral-700 text-white transition-all transform hover:-translate-y-1" href="https://cafecito.app/pazguille" rel="noopener" target="_blank">
            <div class="w-5 h-5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee-icon lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
            </div>
            <span class="font-medium">Invitame un Cafecito</span>
          </a>
          <a class="flex items-center gap-3 px-6 py-3 bg-[#0070ba] hover:bg-[#005ea6] rounded-full text-white transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/50" href="https://www.paypal.me/pazguille" rel="noopener" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
            <span class="font-bold">PayPal</span>
          </a>
        </div>
      </div>
    </footer>
  </>
);
