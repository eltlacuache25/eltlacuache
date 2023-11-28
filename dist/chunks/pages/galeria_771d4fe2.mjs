/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, e as addAttribute, f as renderComponent } from '../astro/server_7f5373cd.mjs';
import 'clsx';
import { $ as $$Navbar, a as $$NavOption, b as $$Footer, c as $$Layout } from './PostsLayout_571c54ff.mjs';

const $$Astro$2 = createAstro("https://eltlacuache25.github.io");
const $$Galery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Galery;
  return renderTemplate`${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:mx-3 lg:mx-7 xl:mx-32 2xl:mx-48 mt-16">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/Galery.astro", void 0);

const $$Astro$1 = createAstro("https://eltlacuache25.github.io");
const $$GaleryImg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GaleryImg;
  const { link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div><img class="h-96 w-96 rounded-lg"${addAttribute(link, "src")} alt=""></div>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/GaleryImg.astro", void 0);

const $$Astro = createAstro("https://eltlacuache25.github.io");
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galeria;
  const imagen = "/eltlacuache.jpg", link = "https://www.facebook.com/TlacuacheNoticias?mibextid=JRoKGi", nombre = "El Tlacuache";
  const articulos = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post_1.md": () => import('./post_1_3de5426f.mjs'),"./posts/post_2.md": () => import('./post_2_3a98cad9.mjs'),"./posts/post_3.md": () => import('./post_3_2d409484.mjs'),"./posts/post_4.md": () => import('./post_4_a2788b04.mjs')}), () => "./posts/*.md");
  articulos.reverse();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "imagen": imagen, "link": "/", "nombre": nombre }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/eltlacuache/", "nombre": "Inicio" })}${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/eltlacuache/galeria", "nombre": "Galeria" })}` })}${renderComponent($$result2, "Galery", $$Galery, {}, { "default": ($$result3) => renderTemplate`${articulos.map((x) => renderTemplate`${renderComponent($$result3, "GaleryImg", $$GaleryImg, { "link": x.frontmatter.imagen })}`)}` })}${renderComponent($$result2, "Footer", $$Footer, { "link": link, "nombre": "p\xE1gina oficial de El Tlacuache" })}` })}`;
}, "/home/angel/Escritorio/eltlacuache/src/pages/galeria.astro", void 0);

const $$file = "/home/angel/Escritorio/eltlacuache/src/pages/galeria.astro";
const $$url = "/eltlacuache/galeria";

export { $$Galeria as default, $$file as file, $$url as url };
