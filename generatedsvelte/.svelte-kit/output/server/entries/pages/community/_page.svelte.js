import "clsx";
import { M as Menubar, m as menutree, b as brand } from "../../../chunks/Menubar.js";
import { H as Herounit, D as Docslink, S as Searchbar, a as Statscounters, c as counters, b as Simonlinktiles, C as Carousel, s as stories, P as Personatiles, h as herosub, d as herotitle, r as rightlink, l as leftlink, e as searchactions, t as tilelinks, i as images, f as caption, p as personas } from "../../../chunks/Personatiles.js";
function _page($$payload) {
  Menubar($$payload, { brand, menutree });
  $$payload.out += `<!----> `;
  Herounit($$payload, { title: herotitle, subtitle: herosub });
  $$payload.out += `<!----> `;
  Docslink($$payload, { leftlink, rightlink });
  $$payload.out += `<!----> `;
  Searchbar($$payload, { searchactions });
  $$payload.out += `<!----> `;
  Statscounters($$payload, { counters });
  $$payload.out += `<!----> `;
  Simonlinktiles($$payload, { tilelinks });
  $$payload.out += `<!----> `;
  Carousel($$payload, { stories });
  $$payload.out += `<!----> `;
  Personatiles($$payload, { caption, personas, images });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
