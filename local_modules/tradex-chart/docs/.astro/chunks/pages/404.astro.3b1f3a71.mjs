/* empty css                         */import { c as createCollectionToGlobResultMap, a as createGetCollection, b as createGetEntry, d as createAstro, e as createComponent, A as AstroError, f as AstroErrorData, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, h as getImage$1, i as createVNode, F as Fragment, j as renderSlot, k as defineStyleVars, u as unescapeHTML, l as renderComponent, n as renderHead } from '../astro.8a1fcc00.mjs';
import '@astrojs/internal-helpers/path';
import 'node:fs';
import path, { basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import 'slash';
import 'node:fs/promises';
import * as z from 'zod';
/* empty css                                                              */import { execaSync } from 'execa';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/api/core-old.md": () => import('../core-old.9747ff78.mjs'),"/src/content/docs/api/core.md": () => import('../core.ef399012.mjs'),"/src/content/docs/api/core2.md": () => import('../core2.8de9a113.mjs'),"/src/content/docs/documentation.mdx": () => import('../documentation.11d95087.mjs'),"/src/content/docs/examples/01_static_chart.mdx": () => import('../01_static_chart.40e85528.mjs'),"/src/content/docs/examples/02_live_history_chart.mdx": () => import('../02_live_history_chart.d0a2aca9.mjs'),"/src/content/docs/examples/custom_indicator.mdx": () => import('../custom_indicator.d0d54bd6.mjs'),"/src/content/docs/examples/static_chart.mdx": () => import('../static_chart.d986e364.mjs'),"/src/content/docs/guides/custom_indicator.mdx": () => import('../custom_indicator.0df60007.mjs'),"/src/content/docs/guides/howto.md": () => import('../howto.56a8dba0.mjs'),"/src/content/docs/guides/test.md": () => import('../test.0d53ff7c.mjs'),"/src/content/docs/index.mdx": () => import('../index.4425309e.mjs'),"/src/content/docs/reference/01_getting_started.md": () => import('../01_getting_started.776cdead.mjs'),"/src/content/docs/reference/02_configuration.md": () => import('../02_configuration.8aa763a7.mjs'),"/src/content/docs/reference/annotations.md": () => import('../annotations.d5141750.mjs'),"/src/content/docs/reference/api-examples.md": () => import('../api-examples.c9cba535.mjs'),"/src/content/docs/reference/architecture.md": () => import('../architecture.40db9a08.mjs'),"/src/content/docs/reference/canvas_extension_layers.md": () => import('../canvas_extension_layers.2ac8e8dd.mjs'),"/src/content/docs/reference/canvas_methods.md": () => import('../canvas_methods.61d7a9c1.mjs'),"/src/content/docs/reference/events.md": () => import('../events.cc00d67c.mjs'),"/src/content/docs/reference/example.md": () => import('../example.38b64a94.mjs'),"/src/content/docs/reference/hit_detection.md": () => import('../hit_detection.01c4f2e6.mjs'),"/src/content/docs/reference/index.md": () => import('../index.d0b088ee.mjs'),"/src/content/docs/reference/indicators.md": () => import('../indicators.7f672008.mjs'),"/src/content/docs/reference/indicators_custom.md": () => import('../indicators_custom.f706e9b9.mjs'),"/src/content/docs/reference/indicators_default.md": () => import('../indicators_default.ffabdf86.mjs'),"/src/content/docs/reference/indicators_talib.md": () => import('../indicators_talib.4fab9834.mjs'),"/src/content/docs/reference/legends.md": () => import('../legends.41880f91.mjs'),"/src/content/docs/reference/overlays.md": () => import('../overlays.782fb711.mjs'),"/src/content/docs/reference/overlays_news_events.md": () => import('../overlays_news_events.7dd3e9d7.mjs'),"/src/content/docs/reference/overlays_trades.md": () => import('../overlays_trades.a1c2519a.mjs'),"/src/content/docs/reference/range.md": () => import('../range.e01a415d.mjs'),"/src/content/docs/reference/state.md": () => import('../state.702b80b9.mjs'),"/src/content/docs/reference/state_machine.md": () => import('../state_machine.22e554d6.mjs'),"/src/content/docs/reference/streaming_price_data.md": () => import('../streaming_price_data.41acaad1.mjs'),"/src/content/docs/reference/themes.md": () => import('../themes.f9240ca3.mjs'),"/src/content/docs/reference/web_workers.md": () => import('../web_workers.83a0b430.mjs'),"/src/content/docs/reference/widgets.md": () => import('../widgets.4faa849a.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"documentation":"/src/content/docs/documentation.mdx","index":"/src/content/docs/index.mdx","api/core-old":"/src/content/docs/api/core-old.md","api/core":"/src/content/docs/api/core.md","api/core2":"/src/content/docs/api/core2.md","examples/01_static_chart":"/src/content/docs/examples/01_static_chart.mdx","examples/02_live_history_chart":"/src/content/docs/examples/02_live_history_chart.mdx","examples/custom_indicator":"/src/content/docs/examples/custom_indicator.mdx","examples/static_chart":"/src/content/docs/examples/static_chart.mdx","guides/custom_indicator":"/src/content/docs/guides/custom_indicator.mdx","guides/howto":"/src/content/docs/guides/howto.md","guides/test":"/src/content/docs/guides/test.md","reference/01_getting_started":"/src/content/docs/reference/01_getting_started.md","reference/02_configuration":"/src/content/docs/reference/02_configuration.md","reference/annotations":"/src/content/docs/reference/annotations.md","reference/api-examples":"/src/content/docs/reference/api-examples.md","reference/architecture":"/src/content/docs/reference/architecture.md","reference/canvas_extension_layers":"/src/content/docs/reference/canvas_extension_layers.md","reference/canvas_methods":"/src/content/docs/reference/canvas_methods.md","reference/events":"/src/content/docs/reference/events.md","reference/example":"/src/content/docs/reference/example.md","reference/hit_detection":"/src/content/docs/reference/hit_detection.md","reference":"/src/content/docs/reference/index.md","reference/indicators":"/src/content/docs/reference/indicators.md","reference/indicators_custom":"/src/content/docs/reference/indicators_custom.md","reference/indicators_default":"/src/content/docs/reference/indicators_default.md","reference/indicators_talib":"/src/content/docs/reference/indicators_talib.md","reference/legends":"/src/content/docs/reference/legends.md","reference/overlays":"/src/content/docs/reference/overlays.md","reference/overlays_news_events":"/src/content/docs/reference/overlays_news_events.md","reference/overlays_trades":"/src/content/docs/reference/overlays_trades.md","reference/range":"/src/content/docs/reference/range.md","reference/state":"/src/content/docs/reference/state.md","reference/state_machine":"/src/content/docs/reference/state_machine.md","reference/streaming_price_data":"/src/content/docs/reference/streaming_price_data.md","reference/themes":"/src/content/docs/reference/themes.md","reference/web_workers":"/src/content/docs/reference/web_workers.md","reference/widgets":"/src/content/docs/reference/widgets.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/api/core-old.md": () => import('../core-old.507d7ab8.mjs'),"/src/content/docs/api/core.md": () => import('../core.5687c7d9.mjs'),"/src/content/docs/api/core2.md": () => import('../core2.dbf10493.mjs'),"/src/content/docs/documentation.mdx": () => import('../documentation.b657a583.mjs'),"/src/content/docs/examples/01_static_chart.mdx": () => import('../01_static_chart.39db5ab5.mjs'),"/src/content/docs/examples/02_live_history_chart.mdx": () => import('../02_live_history_chart.69a05b83.mjs'),"/src/content/docs/examples/custom_indicator.mdx": () => import('../custom_indicator.0d52d8d9.mjs'),"/src/content/docs/examples/static_chart.mdx": () => import('../static_chart.886accfa.mjs'),"/src/content/docs/guides/custom_indicator.mdx": () => import('../custom_indicator.04cfceb2.mjs'),"/src/content/docs/guides/howto.md": () => import('../howto.dac1124c.mjs'),"/src/content/docs/guides/test.md": () => import('../test.b49b6a4b.mjs'),"/src/content/docs/index.mdx": () => import('../index.c5b0a5cd.mjs'),"/src/content/docs/reference/01_getting_started.md": () => import('../01_getting_started.5a736efb.mjs'),"/src/content/docs/reference/02_configuration.md": () => import('../02_configuration.789f5cb7.mjs'),"/src/content/docs/reference/annotations.md": () => import('../annotations.5a585828.mjs'),"/src/content/docs/reference/api-examples.md": () => import('../api-examples.6d2e88a3.mjs'),"/src/content/docs/reference/architecture.md": () => import('../architecture.9e8bbe85.mjs'),"/src/content/docs/reference/canvas_extension_layers.md": () => import('../canvas_extension_layers.295e1ac6.mjs'),"/src/content/docs/reference/canvas_methods.md": () => import('../canvas_methods.10ff0c7c.mjs'),"/src/content/docs/reference/events.md": () => import('../events.20e6d8cf.mjs'),"/src/content/docs/reference/example.md": () => import('../example.a5c1a107.mjs'),"/src/content/docs/reference/hit_detection.md": () => import('../hit_detection.45b66741.mjs'),"/src/content/docs/reference/index.md": () => import('../index.10f3e14a.mjs'),"/src/content/docs/reference/indicators.md": () => import('../indicators.ce67f10c.mjs'),"/src/content/docs/reference/indicators_custom.md": () => import('../indicators_custom.16bec425.mjs'),"/src/content/docs/reference/indicators_default.md": () => import('../indicators_default.625eedd8.mjs'),"/src/content/docs/reference/indicators_talib.md": () => import('../indicators_talib.d8e4d89b.mjs'),"/src/content/docs/reference/legends.md": () => import('../legends.eb4f64a8.mjs'),"/src/content/docs/reference/overlays.md": () => import('../overlays.5022da9b.mjs'),"/src/content/docs/reference/overlays_news_events.md": () => import('../overlays_news_events.6cf05472.mjs'),"/src/content/docs/reference/overlays_trades.md": () => import('../overlays_trades.56f3cd63.mjs'),"/src/content/docs/reference/range.md": () => import('../range.baf74241.mjs'),"/src/content/docs/reference/state.md": () => import('../state.e741a2c6.mjs'),"/src/content/docs/reference/state_machine.md": () => import('../state_machine.0eec62cc.mjs'),"/src/content/docs/reference/streaming_price_data.md": () => import('../streaming_price_data.8e0d10f4.mjs'),"/src/content/docs/reference/themes.md": () => import('../themes.1f949bac.mjs'),"/src/content/docs/reference/web_workers.md": () => import('../web_workers.24a144e9.mjs'),"/src/content/docs/reference/widgets.md": () => import('../widgets.12d0bdcd.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const config = {"title":"TradeX Chart","logo":{"src":"/src/assets/tx.svg","alt":"","replacesTitle":false},"social":{"github":"https://github.com/tradex-app/TradeX-chart","discord":"https://discord.gg/hhfvuhJJY"},"tableOfContents":{"minHeadingLevel":2,"maxHeadingLevel":4},"editLink":{},"sidebar":[{"label":"Examples","translations":{},"autogenerate":{"directory":"examples"}},{"label":"Guides","translations":{},"autogenerate":{"directory":"guides"}},{"label":"Reference","translations":{},"autogenerate":{"directory":"reference"}},{"label":"API","translations":{},"autogenerate":{"directory":"api"}}],"head":[],"customCss":["/src/styles/custom.css"],"isMultilingual":false,"defaultLocale":{"label":"English","lang":"en","dir":"ltr"}};

const $$Astro$w = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(AstroErrorData.ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/astro/components/Image.astro");

const imageServiceConfig = {};
					const getImage = async (options) => await getImage$1(options, imageServiceConfig);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("");

				const frontmatter = {};
				const file = "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/EmptyMarkdown.md";
				const url = undefined;
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

const base = stripTrailingSlash("/docs/");
function pathWithBase(path) {
  path = stripLeadingSlash(stripTrailingSlash(path));
  return path ? base + "/" + path + "/" : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(stripTrailingSlash(path));
  return path ? base + "/" + path : base;
}
function stripLeadingSlash(path) {
  return path.replace(/^\//, "");
}
function stripTrailingSlash(path) {
  return path.replace(/\/$/, "");
}

function pickLang(dictionary, lang) {
  return dictionary[lang];
}

function slugToLocale(slug) {
  const locales = Object.keys(config.locales || {});
  const baseSegment = slug.split("/")[0];
  if (baseSegment && locales.includes(baseSegment))
    return baseSegment;
  return void 0;
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang(locale), locale };
}
function localeToLang(locale) {
  const lang = locale ? config.locales?.[locale]?.lang : config.locales?.root?.lang;
  const defaultLang = config.defaultLocale?.lang ;
  return lang || defaultLang || "en";
}
function localeToDir(locale) {
  const dir = locale ? config.locales?.[locale]?.dir : config.locales?.root?.dir;
  return dir || config.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" ? void 0 : slug.endsWith("/index") ? slug.replace("/index", "") : slug;
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}

const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
const docs = (await getCollection("docs")).map(
  ({ slug, ...entry }) => ({ ...entry, slug: normalizeIndexSlug(slug) })
);
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  return routes2.sort(
    (a, b) => a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0
  );
}
const routes = getRoutes();
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function filterByLocale(items, locale) {
  if (config.locales) {
    if (locale && locale in config.locales) {
      return items.filter(
        (i) => i.slug === locale || i.slug.startsWith(locale + "/")
      );
    } else if (config.locales.root) {
      const langKeys = Object.keys(config.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter(
        (i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug)
      );
    }
  }
  return items;
}

function configItemToEntry(item, currentPathname, locale, routes2) {
  if ("link" in item) {
    return linkFromConfig(item, locale, currentPathname);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes2, currentPathname);
  } else {
    return {
      type: "group",
      label: pickLang(item.translations, localeToLang(locale)) || item.label,
      entries: item.items.map(
        (i) => configItemToEntry(i, currentPathname, locale, routes2)
      )
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes2, currentPathname) {
  const { directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes2.filter(
    (doc) => (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(doc.entry.id) === localeDir || // Match against `foo/anything/else.md`.
      doc.entry.id.startsWith(localeDir + "/")
    )
  );
  const tree = treeify(dirDocs, localeDir);
  return {
    type: "group",
    label: pickLang(item.translations, localeToLang(locale)) || item.label,
    entries: sidebarFromDir(tree, currentPathname)
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function ensureLeadingAndTrailingSlashes(href) {
  if (href[0] !== "/")
    href = "/" + href;
  if (href[href.length - 1] !== "/")
    href += "/";
  return href;
}
function linkFromConfig(item, locale, currentPathname) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingAndTrailingSlashes(href);
    if (locale)
      href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeLink(href, label, currentPathname);
}
function makeLink(href, label, currentPathname) {
  if (!isAbsolute(href))
    href = pathWithBase(href);
  const isCurrent = href === currentPathname;
  return { type: "link", label, href, isCurrent };
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir)
    return [];
  if (!baseDir.endsWith("/"))
    baseDir += "/";
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  let dir = dirname(relativePath);
  if (dir === ".")
    return [];
  return dir.split("/");
}
function treeify(routes2, baseDir) {
  const treeRoot = {};
  routes2.forEach((doc) => {
    const breadcrumbs = getBreadcrumbs(doc.entry.id, baseDir);
    let currentDir = treeRoot;
    breadcrumbs.forEach((dir) => {
      if (typeof currentDir[dir] === "undefined")
        currentDir[dir] = {};
      currentDir = currentDir[dir];
    });
    currentDir[basename(doc.slug)] = doc.slug;
  });
  return treeRoot;
}
function linkFromSlug(slug, currentPathname) {
  const doc = routes.find((doc2) => doc2.slug === slug);
  return makeLink(
    slugToPathname(doc.slug),
    doc.entry.data.title,
    currentPathname
  );
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale) {
  const entries = Object.entries(dir).map(
    ([key, dirOrSlug]) => dirToItem(dirOrSlug, `${fullPath}/${key}`, key, currentPathname)
  );
  return {
    type: "group",
    label: dirName,
    entries
  };
}
function dirToItem(dirOrSlug, fullPath, dirName, currentPathname, locale) {
  return typeof dirOrSlug === "string" ? linkFromSlug(dirOrSlug, currentPathname) : groupFromDir(dirOrSlug, fullPath, dirName, currentPathname);
}
function sidebarFromDir(tree, currentPathname, locale) {
  return Object.entries(tree).map(
    ([key, dirOrSlug]) => dirToItem(dirOrSlug, key, key, currentPathname)
  );
}
function getSidebar(pathname, locale) {
  const routes2 = getLocaleRoutes(locale);
  if (config.sidebar) {
    return config.sidebar.map(
      (group) => configItemToEntry(group, pathname, locale, routes2)
    );
  } else {
    const tree = treeify(routes2, locale || "");
    return sidebarFromDir(tree, pathname);
  }
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = entries[currentIndex - 1];
  const next = currentIndex > -1 ? entries[currentIndex + 1] : void 0;
  return { prev, next };
}
const stripExtension = (path) => path.replace(/\.\w+$/, "");

const $$Astro$v = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$ContentPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$ContentPanel;
  return renderTemplate`${maybeRenderHead($$result)}<div class="content-panel astro-7NKWCW3Z">
  <div class="container astro-7NKWCW3Z">${renderSlot($$result, $$slots["default"])}</div>
</div>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/ContentPanel.astro");

function builtinI18nSchema() {
  return starlightI18nSchema().required().strict().merge(pagefindI18nSchema());
}
function starlightI18nSchema() {
  return z.object({
    "skipLink.label": z.string().describe(
      "Text displayed in the accessible “Skip link” when a keyboard user first tabs into a page."
    ),
    "search.label": z.string().describe("Text displayed in the search bar."),
    "search.shortcutLabel": z.string().describe(
      "Accessible label for the shortcut key to open the search modal."
    ),
    "search.cancelLabel": z.string().describe("Text for the “Cancel” button that closes the search modal."),
    "search.devWarning": z.string().describe("Warning displayed when opening the Search in a dev environment."),
    "themeSelect.accessibleLabel": z.string().describe("Accessible label for the theme selection dropdown."),
    "themeSelect.dark": z.string().describe("Name of the dark color theme."),
    "themeSelect.light": z.string().describe("Name of the light color theme."),
    "themeSelect.auto": z.string().describe(
      "Name of the automatic color theme that syncs with system preferences."
    ),
    "languageSelect.accessibleLabel": z.string().describe("Accessible label for the language selection dropdown."),
    "menuButton.accessibleLabel": z.string().describe("Accessible label for he mobile menu button."),
    "sidebarNav.accessibleLabel": z.string().describe(
      "Accessible label for the main sidebar `<nav>` element to distinguish it fom other `<nav>` landmarks on the page."
    ),
    "tableOfContents.onThisPage": z.string().describe("Title for the table of contents component."),
    "tableOfContents.overview": z.string().describe(
      "Label used for the first link in the table of contents, linking to the page title."
    ),
    "i18n.untranslatedContent": z.string().describe(
      "Notice informing users they are on a page that is not yet translated to their language."
    ),
    "page.editLink": z.string().describe("Text for the link to edit a page."),
    "page.lastUpdated": z.string().describe(
      "Text displayed in front of the last updated date in the page footer."
    ),
    "page.previousLink": z.string().describe(
      "Label shown on the “previous page” pagination arrow in the page footer."
    ),
    "page.nextLink": z.string().describe(
      "Label shown on the “next page” pagination arrow in the page footer."
    ),
    "404.text": z.string().describe("Text shown on Starlight’s default 404 page")
  }).partial();
}
function pagefindI18nSchema() {
  return z.object({
    "pagefind.clear_search": z.string().describe(
      'Pagefind UI translation. English default value: `"Clear"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.load_more": z.string().describe(
      'Pagefind UI translation. English default value: `"Load more results"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_label": z.string().describe(
      'Pagefind UI translation. English default value: `"Search this site"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.filters_label": z.string().describe(
      'Pagefind UI translation. English default value: `"Filters"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.zero_results": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.many_results": z.string().describe(
      'Pagefind UI translation. English default value: `"[COUNT] results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.one_result": z.string().describe(
      'Pagefind UI translation. English default value: `"[COUNT] result for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.alt_search": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_suggestion": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Try one of the following searches:"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.searching": z.string().describe(
      'Pagefind UI translation. English default value: `"Searching for [SEARCH_TERM]..."`. See https://pagefind.app/docs/ui/#translations'
    )
  }).partial();
}

const en = {
	"skipLink.label": "Skip to content",
	"search.label": "Search",
	"search.shortcutLabel": "(Press / to Search)",
	"search.cancelLabel": "Cancel",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Select theme",
	"themeSelect.dark": "Dark",
	"themeSelect.light": "Light",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Select language",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Main",
	"tableOfContents.onThisPage": "On this page",
	"tableOfContents.overview": "Overview",
	"i18n.untranslatedContent": "This content is not available in your language yet.",
	"page.editLink": "Edit page",
	"page.lastUpdated": "Last updated:",
	"page.previousLink": "Previous",
	"page.nextLink": "Next",
	"404.text": "Page not found. Check the URL or try using the search bar."
};

const es = {
	"skipLink.label": "Saltearse al contenido",
	"search.label": "Buscar",
	"search.shortcutLabel": "(Presiona / para buscar)",
	"search.cancelLabel": "Interrumpir",
	"search.devWarning": "La búsqueda solo está disponible en las versiones de producción.  \nIntenta construir y previsualizar el sitio para probarlo localmente.",
	"themeSelect.accessibleLabel": "Seleccionar tema",
	"themeSelect.dark": "Oscuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Automático",
	"languageSelect.accessibleLabel": "Seleccionar idioma",
	"menuButton.accessibleLabel": "Menú",
	"sidebarNav.accessibleLabel": "Primario",
	"tableOfContents.onThisPage": "En esta página",
	"tableOfContents.overview": "Sinopsis",
	"i18n.untranslatedContent": "Esta página aún no está disponible en tu idioma.",
	"page.editLink": "Edita esta página",
	"page.lastUpdated": "Última actualización:",
	"page.previousLink": "Página anterior",
	"page.nextLink": "Siguiente página",
	"404.text": "Página no encontrada. Verifique la URL o intente usar la barra de búsqueda."
};

const de = {
	"skipLink.label": "Zum Inhalt springen",
	"search.label": "Suchen",
	"search.shortcutLabel": "(Drücke / zum Suchen)",
	"search.cancelLabel": "Abbrechen",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Farbschema wählen",
	"themeSelect.dark": "Dunkel",
	"themeSelect.light": "Hell",
	"themeSelect.auto": "System",
	"languageSelect.accessibleLabel": "Sprache wählen",
	"menuButton.accessibleLabel": "Menü",
	"sidebarNav.accessibleLabel": "Hauptnavigation",
	"tableOfContents.onThisPage": "Auf dieser Seite",
	"tableOfContents.overview": "Überblick",
	"i18n.untranslatedContent": "Dieser Inhalt ist noch nicht in deiner Sprache verfügbar.",
	"page.editLink": "Seite bearbeiten",
	"page.lastUpdated": "Zuletzt bearbeitet:",
	"page.previousLink": "Vorherige Seite",
	"page.nextLink": "Nächste Seite",
	"404.text": "Seite nicht gefunden. Überprüfe die URL oder nutze die Suchleiste."
};

const ja = {
	"skipLink.label": "コンテンツにスキップ",
	"search.label": "検索",
	"search.shortcutLabel": "（/を押して検索）",
	"search.cancelLabel": "キャンセル",
	"search.devWarning": "検索はプロダクションビルドでのみ利用可能です。\nローカルでテストするには、サイトをビルドしてプレビューしてください。",
	"themeSelect.accessibleLabel": "テーマの選択",
	"themeSelect.dark": "ダーク",
	"themeSelect.light": "ライト",
	"themeSelect.auto": "自動",
	"languageSelect.accessibleLabel": "言語の選択",
	"menuButton.accessibleLabel": "メニュー",
	"sidebarNav.accessibleLabel": "メイン",
	"tableOfContents.onThisPage": "目次",
	"tableOfContents.overview": "概要",
	"i18n.untranslatedContent": "このコンテンツはまだ日本語訳がありません。",
	"page.editLink": "ページを編集",
	"page.lastUpdated": "最終更新日:",
	"page.previousLink": "前へ",
	"page.nextLink": "次へ",
	"404.text": "ページが見つかりません。 URL を確認するか、検索バーを使用してみてください。"
};

const pt = {
	"skipLink.label": "Pular para o conteúdo",
	"search.label": "Pesquisar",
	"search.shortcutLabel": "(Pressione / para Pesquisar)",
	"search.cancelLabel": "Cancelar",
	"search.devWarning": "A pesquisa está disponível apenas em builds em produção. \nTente fazer a build e pré-visualize o site para testar localmente.",
	"themeSelect.accessibleLabel": "Selecionar tema",
	"themeSelect.dark": "Escuro",
	"themeSelect.light": "Claro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selecionar língua",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Principal",
	"tableOfContents.onThisPage": "Nesta página",
	"tableOfContents.overview": "Visão geral",
	"i18n.untranslatedContent": "Este conteúdo não está disponível em sua língua ainda.",
	"page.editLink": "Editar página",
	"page.lastUpdated": "Última atualização:",
	"page.previousLink": "Anterior",
	"page.nextLink": "Próximo",
	"404.text": "Página não encontrada. Verifique o URL ou tente usar a barra de pesquisa."
};

const fr = {
	"skipLink.label": "Aller au contenu",
	"search.label": "Rechercher",
	"search.shortcutLabel": "(Presser / pour rechercher)",
	"search.cancelLabel": "Annuler",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Selectionner le thème",
	"themeSelect.dark": "Dark",
	"themeSelect.light": "Light",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Selectionner la langue",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "principale",
	"tableOfContents.onThisPage": "Sur cette page",
	"tableOfContents.overview": "Vue d'ensemble",
	"i18n.untranslatedContent": "Ce contenu n'est pas encore disponible dans votre langue.",
	"page.editLink": "Editer la page",
	"page.lastUpdated": "Dernière mise à jour :",
	"page.previousLink": "Précédent",
	"page.nextLink": "Suivant",
	"404.text": "Page non trouvée. Vérifiez l'URL ou essayez d'utiliser la barre de recherche."
};

const it = {
	"skipLink.label": "Salta ai contenuti",
	"search.label": "Cerca",
	"search.shortcutLabel": "(Usa / per cercare)",
	"search.cancelLabel": "Cancella",
	"search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
	"themeSelect.accessibleLabel": "Seleziona tema",
	"themeSelect.dark": "Scuro",
	"themeSelect.light": "Chiaro",
	"themeSelect.auto": "Auto",
	"languageSelect.accessibleLabel": "Seleziona lingua",
	"menuButton.accessibleLabel": "Menu",
	"sidebarNav.accessibleLabel": "Principale",
	"tableOfContents.onThisPage": "In questa pagina",
	"tableOfContents.overview": "Panoramica",
	"i18n.untranslatedContent": "Questi contenuti non sono ancora disponibili nella tua lingua.",
	"page.editLink": "Modifica pagina",
	"page.lastUpdated": "Ultimo aggiornamento:",
	"page.previousLink": "Indietro",
	"page.nextLink": "Avanti",
	"404.text": "Pagina non trovata. Verifica l'URL o prova a utilizzare la barra di ricerca."
};

const { parse } = builtinI18nSchema();
const builtinTranslations = Object.fromEntries(
  Object.entries({ en, es, de, ja, pt, fr, it }).map(([key, dict]) => [key, parse(dict)])
);

const defaultLocale = config.defaultLocale?.locale || "root";
let userTranslations = {};
try {
  userTranslations = Object.fromEntries(
    (await getCollection("i18n")).map(({ id, data }) => [id, data])
  );
} catch {
}
const defaults = buildDictionary(
  builtinTranslations.en,
  userTranslations.en,
  builtinTranslations[defaultLocale],
  userTranslations[defaultLocale]
);
function useTranslations(locale) {
  const lang = localeToLang(locale);
  const dictionary = buildDictionary(
    defaults,
    builtinTranslations[lang],
    userTranslations[lang]
  );
  const t = (key) => dictionary[key];
  t.pick = (startOfKey) => Object.fromEntries(
    Object.entries(dictionary).filter(([k]) => k.startsWith(startOfKey))
  );
  return t;
}
function buildDictionary(base, ...dictionaries) {
  const dictionary = { ...base };
  for (const dict of dictionaries) {
    for (const key in dict) {
      const value = dict[key];
      if (value)
        dictionary[key] = value;
    }
  }
  return dictionary;
}

const Icons = {
  "up-caret": '<path d="M16.9999 13.41L12.7099 9.17C12.617 9.07628 12.5064 9.00188 12.3845 8.95111C12.2627 8.90035 12.132 8.87421 11.9999 8.87421C11.8679 8.87421 11.7372 8.90035 11.6154 8.95111C11.4935 9.00188 11.3829 9.07628 11.2899 9.17L7.04995 13.41C6.95622 13.503 6.88183 13.6136 6.83106 13.7354C6.78029 13.8573 6.75415 13.988 6.75415 14.12C6.75415 14.252 6.78029 14.3827 6.83106 14.5046C6.88183 14.6264 6.95622 14.737 7.04995 14.83C7.23731 15.0163 7.49076 15.1208 7.75495 15.1208C8.01913 15.1208 8.27259 15.0163 8.45995 14.83L11.9999 11.29L15.5399 14.83C15.7262 15.0147 15.9776 15.1189 16.2399 15.12C16.3716 15.1208 16.502 15.0955 16.6239 15.0458C16.7457 14.996 16.8565 14.9227 16.9499 14.83C17.047 14.7404 17.1254 14.6324 17.1805 14.5123C17.2356 14.3923 17.2664 14.2625 17.271 14.1304C17.2757 13.9984 17.2541 13.8667 17.2076 13.7431C17.161 13.6194 17.0905 13.5062 16.9999 13.41Z"></path>',
  "down-caret": '<path d="M17 9.17C16.8126 8.98375 16.5592 8.87921 16.295 8.87921C16.0308 8.87921 15.7774 8.98375 15.59 9.17L12 12.71L8.46001 9.17C8.27265 8.98375 8.0192 8.87921 7.75501 8.87921C7.49082 8.87921 7.23737 8.98375 7.05001 9.17C6.95628 9.26297 6.88189 9.37357 6.83112 9.49543C6.78035 9.61729 6.75421 9.74799 6.75421 9.88C6.75421 10.012 6.78035 10.1427 6.83112 10.2646C6.88189 10.3864 6.95628 10.497 7.05001 10.59L11.29 14.83C11.383 14.9237 11.4936 14.9981 11.6154 15.0489C11.7373 15.0997 11.868 15.1258 12 15.1258C12.132 15.1258 12.2627 15.0997 12.3846 15.0489C12.5064 14.9981 12.617 14.9237 12.71 14.83L17 10.59C17.0937 10.497 17.1681 10.3864 17.2189 10.2646C17.2697 10.1427 17.2958 10.012 17.2958 9.88C17.2958 9.74799 17.2697 9.61729 17.2189 9.49543C17.1681 9.37357 17.0937 9.26297 17 9.17Z"></path>',
  "right-caret": '<path d="M14.83 11.29L10.59 7.05001C10.497 6.95628 10.3864 6.88189 10.2646 6.83112C10.1427 6.78035 10.012 6.75421 9.88 6.75421C9.74799 6.75421 9.61729 6.78035 9.49543 6.83112C9.37357 6.88189 9.26297 6.95628 9.17 7.05001C8.98375 7.23737 8.87921 7.49082 8.87921 7.75501C8.87921 8.0192 8.98375 8.27265 9.17 8.46001L12.71 12L9.17 15.54C8.98375 15.7274 8.87921 15.9808 8.87921 16.245C8.87921 16.5092 8.98375 16.7626 9.17 16.95C9.26344 17.0427 9.37426 17.116 9.4961 17.1658C9.61794 17.2155 9.7484 17.2408 9.88 17.24C10.0116 17.2408 10.1421 17.2155 10.2639 17.1658C10.3857 17.116 10.4966 17.0427 10.59 16.95L14.83 12.71C14.9237 12.617 14.9981 12.5064 15.0489 12.3846C15.0997 12.2627 15.1258 12.132 15.1258 12C15.1258 11.868 15.0997 11.7373 15.0489 11.6154C14.9981 11.4936 14.9237 11.383 14.83 11.29Z"></path>',
  "right-arrow": '<path d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" />',
  "left-arrow": '<path d="M17 11H9.41002L12.71 7.71C12.8983 7.5217 13.0041 7.2663 13.0041 7C13.0041 6.7337 12.8983 6.47831 12.71 6.29C12.5217 6.1017 12.2663 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29L6.29002 11.29C6.19898 11.3851 6.12761 11.4973 6.08002 11.62C5.98 11.8635 5.98 12.1365 6.08002 12.38C6.12761 12.5028 6.19898 12.6149 6.29002 12.71L11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5065 17.8781 12.6171 17.8037 12.71 17.71C12.8037 17.617 12.8781 17.5064 12.9289 17.3846C12.9797 17.2627 13.0058 17.132 13.0058 17C13.0058 16.868 12.9797 16.7373 12.9289 16.6154C12.8781 16.4936 12.8037 16.383 12.71 16.29L9.41002 13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8947 12.5196 18 12.2652 18 12C18 11.7348 17.8947 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z"/>',
  bars: '<path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" />',
  translate: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.51562 3C7.99605 3 7.57486 3.42119 7.57486 3.94076V5.09057H2.94076C2.42119 5.09057 2 5.51176 2 6.03133C2 6.5509 2.42119 6.97209 2.94076 6.97209H10.3025C10.1154 8.43628 9.49493 9.81581 8.51605 10.9298C7.89546 10.2235 7.41119 9.40161 7.09425 8.50519C6.92107 8.01534 6.38356 7.75864 5.89371 7.93183C5.40386 8.10501 5.14715 8.64252 5.32034 9.13237C5.71804 10.2572 6.32594 11.2885 7.10503 12.1745C5.88484 13.0016 4.43607 13.4529 2.94076 13.4529C2.42119 13.4529 2 13.8741 2 14.3936C2 14.9132 2.42119 15.3344 2.94076 15.3344C4.96251 15.3344 6.91641 14.6763 8.51606 13.4787C8.58325 13.529 8.65118 13.5784 8.71984 13.627C9.88827 14.4533 11.2259 14.995 12.6263 15.2183L11.8634 16.7441C11.8576 16.7552 11.8519 16.7665 11.8465 16.7779L10.4616 19.5478C10.2292 20.0125 10.4176 20.5776 10.8823 20.8099C11.347 21.0423 11.9121 20.8539 12.1445 20.3892L13.2782 18.1218H19.0839L20.2176 20.3892C20.45 20.8539 21.015 21.0423 21.4798 20.8099C21.9445 20.5776 22.1328 20.0125 21.9005 19.5478L20.5162 16.7792C20.5104 16.7669 20.5043 16.7548 20.498 16.7428L17.0225 9.79176C16.8631 9.47304 16.5374 9.27172 16.181 9.27172C15.8247 9.27172 15.4989 9.47304 15.3396 9.79176L13.52 13.4309C12.236 13.3317 10.9971 12.8998 9.92708 12.1745C11.2086 10.7172 12.0005 8.89713 12.1961 6.97209H14.0905C14.61 6.97209 15.0312 6.5509 15.0312 6.03133C15.0312 5.51176 14.61 5.09057 14.0905 5.09057H9.45638V3.94076C9.45638 3.42119 9.03519 3 8.51562 3ZM14.9419 14.7944C14.9357 14.8074 14.9293 14.8203 14.9226 14.833L14.2189 16.2403H18.1431L16.181 12.3161L14.9419 14.7944Z"></path>',
  pencil: '<path d="M22 7.24a1 1 0 0 0-.29-.71l-4.24-4.24a1 1 0 0 0-1.1-.22 1 1 0 0 0-.32.22l-2.83 2.83L2.29 16.05a1 1 0 0 0-.29.71V21a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .76-.29l10.87-10.93L21.71 8c.1-.1.17-.2.22-.33a1 1 0 0 0 0-.24v-.14l.07-.05ZM6.83 20H4v-2.83l9.93-9.93 2.83 2.83L6.83 20ZM18.17 8.66l-2.83-2.83 1.42-1.41 2.82 2.82-1.41 1.42Z"/>',
  pen: '<path d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 0 0-.29.71Zm10.76-8.35 2.83 2.83-1.42 1.42-2.83-2.83 1.42-1.42ZM8 13.17l5.93-5.93 2.83 2.83L10.83 16H8v-2.83Z"/>',
  document: '<path d="M9 10h1a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2Zm0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Zm11-3.06a1.3 1.3 0 0 0-.06-.27v-.09c-.05-.1-.11-.2-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-3-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z"/>',
  "add-document": '<path d="M20 8.94a1.3 1.3 0 0 0-.06-.27v-.09c-.05-.1-.11-.2-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-4-5h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z"/>',
  setting: '<path d="m21.32 9.55-1.89-.63.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95ZM20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11 1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4v1.59ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>',
  external: '<path d="M19.33 10.18a1 1 0 0 1-.77 0 1 1 0 0 1-.62-.93l.01-1.83-8.2 8.2a1 1 0 0 1-1.41-1.42l8.2-8.2H14.7a1 1 0 0 1 0-2h4.25a1 1 0 0 1 1 1v4.25a1 1 0 0 1-.62.93Z"/><path d="M11 4a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4Z"/>',
  moon: '<path d="M21.64 13C21.4957 12.8807 21.3207 12.8043 21.1351 12.7796C20.9494 12.7548 20.7606 12.7827 20.59 12.86C19.5326 13.3439 18.3829 13.593 17.22 13.59C15.0689 13.5874 13.006 12.7345 11.4812 11.2171C9.95632 9.69979 9.09321 7.64114 9.08001 5.49003C9.08457 4.81586 9.16848 4.14458 9.33001 3.49003C9.36429 3.31557 9.35143 3.13512 9.29277 2.96728C9.2341 2.79944 9.13175 2.65028 8.99626 2.53516C8.86076 2.42004 8.69702 2.34313 8.52191 2.31234C8.3468 2.28156 8.16665 2.29802 8.00001 2.36003C6.43234 3.06494 5.06958 4.15679 4.03977 5.53301C3.00996 6.90924 2.34689 8.52465 2.11286 10.2275C1.87883 11.9304 2.08152 13.6648 2.70188 15.2678C3.32225 16.8708 4.33993 18.2898 5.65931 19.3915C6.9787 20.4932 8.55649 21.2414 10.2445 21.5658C11.9324 21.8903 13.6752 21.7803 15.309 21.2463C16.9428 20.7122 18.414 19.7716 19.5844 18.5128C20.7548 17.254 21.5861 15.7183 22 14.05C22.0504 13.859 22.0431 13.6574 21.9791 13.4705C21.915 13.2836 21.797 13.1199 21.64 13ZM12.14 19.69C10.4618 19.6782 8.82821 19.1479 7.46301 18.1718C6.0978 17.1956 5.06768 15.8214 4.5137 14.2372C3.95971 12.6529 3.90895 10.9362 4.36835 9.32203C4.82776 7.70785 5.77487 6.27513 7.08001 5.22003V5.49003C7.08266 8.17851 8.15183 10.7561 10.0529 12.6572C11.9539 14.5582 14.5315 15.6274 17.22 15.63C17.9259 15.6326 18.63 15.5589 19.32 15.41C18.6299 16.7155 17.5965 17.8079 16.3312 18.5692C15.0659 19.3305 13.6167 19.7319 12.14 19.73V19.69Z"></path>',
  sun: '<path d="M5 12C5 11.7348 4.89464 11.4804 4.70711 11.2929C4.51957 11.1054 4.26522 11 4 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H4C4.26522 13 4.51957 12.8946 4.70711 12.7071C4.89464 12.5196 5 12.2652 5 12ZM5.64 17L4.93 17.71C4.74375 17.8974 4.63921 18.1508 4.63921 18.415C4.63921 18.6792 4.74375 18.9326 4.93 19.12C5.11736 19.3063 5.37081 19.4108 5.635 19.4108C5.89919 19.4108 6.15264 19.3063 6.34 19.12L7.05 18.41C7.21383 18.2187 7.29943 17.9726 7.28971 17.7209C7.27999 17.4693 7.17566 17.2305 6.99756 17.0524C6.81947 16.8743 6.58073 16.77 6.32905 16.7603C6.07738 16.7506 5.8313 16.8362 5.64 17ZM12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5ZM17.66 7.34C17.9223 7.3389 18.1737 7.23474 18.36 7.05L19.07 6.34C19.1747 6.25035 19.2597 6.14004 19.3197 6.01597C19.3797 5.89191 19.4135 5.75677 19.4188 5.61905C19.4241 5.48133 19.4009 5.344 19.3506 5.21568C19.3004 5.08735 19.2241 4.9708 19.1266 4.87335C19.0292 4.77589 18.9126 4.69964 18.7843 4.64936C18.656 4.59909 18.5187 4.57588 18.3809 4.5812C18.2432 4.58652 18.1081 4.62025 17.984 4.68027C17.86 4.7403 17.7496 4.82532 17.66 4.93L17 5.64C16.8137 5.82736 16.7092 6.08081 16.7092 6.345C16.7092 6.60919 16.8137 6.86264 17 7.05C17.1763 7.22536 17.4116 7.32875 17.66 7.34ZM5.66 7.05C5.84626 7.23474 6.09766 7.3389 6.36 7.34C6.49161 7.34076 6.62207 7.31554 6.74391 7.26577C6.86574 7.21601 6.97656 7.14268 7.07 7.05C7.25625 6.86264 7.36079 6.60919 7.36079 6.345C7.36079 6.08081 7.25625 5.82736 7.07 5.64L6.36 4.93C6.26742 4.8361 6.15725 4.76136 6.03578 4.71005C5.91432 4.65873 5.78393 4.63184 5.65207 4.63091C5.52021 4.62998 5.38946 4.65503 5.26728 4.70463C5.14511 4.75424 5.0339 4.82742 4.94 4.92C4.8461 5.01258 4.77136 5.12275 4.72005 5.24422C4.66873 5.36568 4.64184 5.49607 4.64091 5.62793C4.63903 5.89423 4.74302 6.15037 4.93 6.34L5.66 7.05ZM21 11H20C19.7348 11 19.4804 11.1054 19.2929 11.2929C19.1054 11.4804 19 11.7348 19 12C19 12.2652 19.1054 12.5196 19.2929 12.7071C19.4804 12.8946 19.7348 13 20 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM18.36 17C18.17 16.8943 17.9508 16.8534 17.7355 16.8835C17.5202 16.9136 17.3205 17.0131 17.1668 17.1668C17.0131 17.3205 16.9136 17.5202 16.8835 17.7355C16.8534 17.9508 16.8943 18.17 17 18.36L17.71 19.07C17.8974 19.2563 18.1508 19.3608 18.415 19.3608C18.6792 19.3608 18.9326 19.2563 19.12 19.07C19.3063 18.8826 19.4108 18.6292 19.4108 18.365C19.4108 18.1008 19.3063 17.8474 19.12 17.66L18.36 17ZM12 6.5C10.9122 6.5 9.84883 6.82257 8.94436 7.42692C8.03989 8.03126 7.33494 8.89025 6.91866 9.89524C6.50238 10.9002 6.39346 12.0061 6.60568 13.073C6.8179 14.1399 7.34172 15.1199 8.11091 15.8891C8.8801 16.6583 9.86011 17.1821 10.927 17.3943C11.9939 17.6065 13.0998 17.4976 14.1048 17.0813C15.1098 16.6651 15.9687 15.9601 16.5731 15.0556C17.1774 14.1512 17.5 13.0878 17.5 12C17.4974 10.5421 16.917 9.14471 15.8862 8.11383C14.8553 7.08295 13.4579 6.50264 12 6.5ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6999 8.4322 11.9961 8.56725 11.3172C8.7023 10.6383 9.03564 10.0146 9.52513 9.52513C10.0146 9.03564 10.6383 8.7023 11.3172 8.56725C11.9961 8.4322 12.6999 8.50151 13.3394 8.76642C13.9789 9.03133 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5ZM12 19C11.7348 19 11.4804 19.1054 11.2929 19.2929C11.1054 19.4804 11 19.7348 11 20V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V20C13 19.7348 12.8946 19.4804 12.7071 19.2929C12.5196 19.1054 12.2652 19 12 19Z"></path>',
  laptop: '<path d="M21 14H20V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4H7C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7V14H3C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM6 7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H17C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V14H6V7ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V16H20V17Z"></path>',
  "open-book": '<path d="M21.17 2.06C20.4532 1.93653 19.7274 1.87298 19 1.87C16.5184 1.86796 14.0885 2.57957 12 3.92C9.90617 2.59717 7.47667 1.90303 5.00002 1.92C4.27267 1.92298 3.54683 1.98653 2.83002 2.11C2.59523 2.15048 2.3826 2.27346 2.23044 2.45679C2.07827 2.64013 1.99656 2.87177 2.00002 3.11V15.11C1.99788 15.2569 2.02815 15.4025 2.08867 15.5364C2.1492 15.6703 2.23849 15.7893 2.3502 15.8847C2.4619 15.9802 2.59328 16.0499 2.73498 16.0888C2.87668 16.1278 3.02522 16.135 3.17002 16.11C4.60304 15.8619 6.07123 15.9031 7.48809 16.2311C8.90495 16.5591 10.2418 17.1674 11.42 18.02L11.54 18.09H11.65C11.7609 18.1362 11.8799 18.16 12 18.16C12.1202 18.16 12.2391 18.1362 12.35 18.09H12.46L12.58 18.02C13.75 17.1483 15.083 16.5203 16.5002 16.1734C17.9173 15.8264 19.3897 15.7674 20.83 16C20.9748 16.025 21.1234 16.0178 21.2651 15.9788C21.4068 15.9399 21.5381 15.8702 21.6498 15.7747C21.7616 15.6793 21.8508 15.5603 21.9114 15.4264C21.9719 15.2925 22.0022 15.1469 22 15V3C21.9896 2.77215 21.9016 2.55471 21.7507 2.38374C21.5997 2.21276 21.3948 2.09854 21.17 2.06ZM11 15.35C9.14991 14.3767 7.09054 13.8687 5.00002 13.87C4.67002 13.87 4.34002 13.87 4.00002 13.87V3.87C4.33308 3.8508 4.66697 3.8508 5.00002 3.87C7.13341 3.86764 9.22024 4.49369 11 5.67V15.35ZM20 13.91C19.66 13.91 19.33 13.91 19 13.91C16.9095 13.9087 14.8501 14.4167 13 15.39V5.67C14.7798 4.49369 16.8666 3.86764 19 3.87C19.3331 3.8508 19.667 3.8508 20 3.87V13.91ZM21.17 18.06C20.4532 17.9365 19.7274 17.873 19 17.87C16.5184 17.868 14.0885 18.5796 12 19.92C9.91154 18.5796 7.48166 17.868 5.00002 17.87C4.27267 17.873 3.54683 17.9365 2.83002 18.06C2.69985 18.0807 2.57505 18.1268 2.46279 18.1959C2.35053 18.265 2.25302 18.3555 2.17589 18.4624C2.09876 18.5693 2.04351 18.6903 2.01333 18.8186C1.98315 18.9469 1.97862 19.0799 2.00002 19.21C2.05084 19.4697 2.20251 19.6986 2.42181 19.8467C2.64111 19.9948 2.91016 20.0499 3.17002 20C4.60304 19.7519 6.07123 19.7931 7.48809 20.1211C8.90495 20.4491 10.2418 21.0574 11.42 21.91C11.5894 22.0306 11.7921 22.0954 12 22.0954C12.2079 22.0954 12.4107 22.0306 12.58 21.91C13.7582 21.0574 15.0951 20.4491 16.512 20.1211C17.9288 19.7931 19.397 19.7519 20.83 20C21.0899 20.0499 21.3589 19.9948 21.5782 19.8467C21.7975 19.6986 21.9492 19.4697 22 19.21C22.0214 19.0799 22.0169 18.9469 21.9867 18.8186C21.9565 18.6903 21.9013 18.5693 21.8242 18.4624C21.747 18.3555 21.6495 18.265 21.5373 18.1959C21.425 18.1268 21.3002 18.0807 21.17 18.06Z"></path>',
  information: '<path d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"></path>',
  magnifier: '<path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94733 18.6997 5.81281 16.9855 4.27667C15.2714 2.74053 13.0338 1.91954 10.7329 1.9825C8.43203 2.04546 6.24272 2.98759 4.61514 4.61517C2.98756 6.24275 2.04543 8.43207 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7738 20.4936 21.8482 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8482 21.617 21.7738 21.71 21.68C21.8902 21.4936 21.991 21.2444 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9923 4.1345 9.63439C4.4046 8.27653 5.07128 7.02925 6.05025 6.05028C7.02922 5.07131 8.2765 4.40463 9.63436 4.13453C10.9922 3.86443 12.3997 4.00306 13.6788 4.53287C14.9579 5.06268 16.0511 5.95989 16.8203 7.11103C17.5895 8.26218 18 9.61556 18 11C18 12.8565 17.2625 14.637 15.9497 15.9498C14.637 17.2625 12.8565 18 11 18Z"></path>',
  "forward-slash": '<path d="M17 2H7C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7V17C2 18.3261 2.52678 19.5979 3.46447 20.5355C4.40215 21.4732 5.67392 22 7 22H17C18.3261 22 19.5979 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17V7C22 5.67392 21.4732 4.40215 20.5355 3.46447C19.5979 2.52678 18.3261 2 17 2ZM20 17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V17Z" /><path d="M15.2929 6.70711C15.6834 6.31658 16.3166 6.31658 16.7071 6.70711C17.0976 7.09763 17.0976 7.7308 16.7071 8.12132L8.22183 16.6066C7.8313 16.9971 7.19814 16.9971 6.80761 16.6066C6.41709 16.2161 6.41709 15.5829 6.80761 15.1924L15.2929 6.70711Z" />',
  close: '<path d="M13.41 11.9999L19.71 5.70994C19.8983 5.52164 20.0041 5.26624 20.0041 4.99994C20.0041 4.73364 19.8983 4.47825 19.71 4.28994C19.5217 4.10164 19.2663 3.99585 19 3.99585C18.7337 3.99585 18.4783 4.10164 18.29 4.28994L12 10.5899L5.71 4.28994C5.5217 4.10164 5.2663 3.99585 5 3.99585C4.7337 3.99585 4.4783 4.10164 4.29 4.28994C4.1017 4.47825 3.99591 4.73364 3.99591 4.99994C3.99591 5.26624 4.1017 5.52164 4.29 5.70994L10.59 11.9999L4.29 18.2899C4.19627 18.3829 4.12188 18.4935 4.07111 18.6154C4.02034 18.7372 3.9942 18.8679 3.9942 18.9999C3.9942 19.132 4.02034 19.2627 4.07111 19.3845C4.12188 19.5064 4.19627 19.617 4.29 19.7099C4.38296 19.8037 4.49356 19.8781 4.61542 19.9288C4.73728 19.9796 4.86799 20.0057 5 20.0057C5.13201 20.0057 5.26272 19.9796 5.38458 19.9288C5.50644 19.8781 5.61704 19.8037 5.71 19.7099L12 13.4099L18.29 19.7099C18.383 19.8037 18.4936 19.8781 18.6154 19.9288C18.7373 19.9796 18.868 20.0057 19 20.0057C19.132 20.0057 19.2627 19.9796 19.3846 19.9288C19.5064 19.8781 19.617 19.8037 19.71 19.7099C19.8037 19.617 19.8781 19.5064 19.9289 19.3845C19.9797 19.2627 20.0058 19.132 20.0058 18.9999C20.0058 18.8679 19.9797 18.7372 19.9289 18.6154C19.8781 18.4935 19.8037 18.3829 19.71 18.2899L13.41 11.9999Z" />',
  error: '<path d="M12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7ZM12 15C11.8022 15 11.6089 15.0586 11.4444 15.1685C11.28 15.2784 11.1518 15.4346 11.0761 15.6173C11.0004 15.8 10.9806 16.0011 11.0192 16.1951C11.0578 16.3891 11.153 16.5673 11.2929 16.7071C11.4327 16.847 11.6109 16.9422 11.8049 16.9808C11.9989 17.0194 12.2 16.9996 12.3827 16.9239C12.5654 16.8482 12.7216 16.72 12.8315 16.5556C12.9414 16.3911 13 16.1978 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15ZM21.71 7.56L16.44 2.29C16.2484 2.10727 15.9948 2.00368 15.73 2H8.27C8.00523 2.00368 7.75163 2.10727 7.56 2.29L2.29 7.56C2.10727 7.75163 2.00368 8.00523 2 8.27V15.73C2.00368 15.9948 2.10727 16.2484 2.29 16.44L7.56 21.71C7.75163 21.8927 8.00523 21.9963 8.27 22H15.73C15.9948 21.9963 16.2484 21.8927 16.44 21.71L21.71 16.44C21.8927 16.2484 21.9963 15.9948 22 15.73V8.27C21.9963 8.00523 21.8927 7.75163 21.71 7.56ZM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4H15.31L20 8.69V15.31Z"></path>',
  warning: '<path d="M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z"></path>',
  "approve-check-circle": '<path d="M14.72 8.79L10.43 13.09L8.78 11.44C8.69036 11.3353 8.58004 11.2503 8.45597 11.1903C8.33191 11.1303 8.19678 11.0965 8.05906 11.0912C7.92134 11.0859 7.78401 11.1091 7.65568 11.1594C7.52736 11.2096 7.41081 11.2859 7.31335 11.3833C7.2159 11.4808 7.13964 11.5974 7.08937 11.7257C7.03909 11.854 7.01589 11.9913 7.02121 12.1291C7.02653 12.2668 7.06026 12.4019 7.12028 12.526C7.1803 12.65 7.26532 12.7604 7.37 12.85L9.72 15.21C9.81344 15.3027 9.92426 15.376 10.0461 15.4258C10.1679 15.4755 10.2984 15.5008 10.43 15.5C10.6923 15.4989 10.9437 15.3947 11.13 15.21L16.13 10.21C16.2237 10.117 16.2981 10.0064 16.3489 9.88458C16.3997 9.76272 16.4258 9.63201 16.4258 9.5C16.4258 9.36799 16.3997 9.23728 16.3489 9.11542C16.2981 8.99356 16.2237 8.88296 16.13 8.79C15.9426 8.60375 15.6892 8.49921 15.425 8.49921C15.1608 8.49921 14.9074 8.60375 14.72 8.79ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20V20Z"></path>',
  "approve-check": '<path d="M18.71 7.20998C18.617 7.11625 18.5064 7.04186 18.3846 6.99109C18.2627 6.94032 18.132 6.91418 18 6.91418C17.868 6.91418 17.7373 6.94032 17.6154 6.99109C17.4936 7.04186 17.383 7.11625 17.29 7.20998L9.84001 14.67L6.71001 11.53C6.61349 11.4367 6.49955 11.3634 6.37469 11.3142C6.24984 11.265 6.11651 11.2409 5.98233 11.2432C5.84815 11.2455 5.71574 11.2743 5.59266 11.3278C5.46959 11.3812 5.35825 11.4585 5.26501 11.555C5.17177 11.6515 5.09846 11.7654 5.04925 11.8903C5.00005 12.0152 4.97592 12.1485 4.97824 12.2827C4.98056 12.4168 5.00929 12.5493 5.06278 12.6723C5.11628 12.7954 5.19349 12.9067 5.29001 13L9.13001 16.84C9.22297 16.9337 9.33358 17.0081 9.45543 17.0589C9.57729 17.1096 9.708 17.1358 9.84001 17.1358C9.97202 17.1358 10.1027 17.1096 10.2246 17.0589C10.3464 17.0081 10.457 16.9337 10.55 16.84L18.71 8.67998C18.8115 8.58634 18.8925 8.47269 18.9479 8.34619C19.0033 8.21969 19.0319 8.08308 19.0319 7.94498C19.0319 7.80688 19.0033 7.67028 18.9479 7.54378C18.8925 7.41728 18.8115 7.30363 18.71 7.20998Z"></path>',
  rocket: '<path fill-rule="evenodd" clip-rule="evenodd" d="M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z"></path><path d="M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z"></path>',
  star: '<path d="M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16 2.86 9a1 1 0 0 0-.81.68 1 1 0 0 0 .25 1l4.13 4-1 5.68a1 1 0 0 0 1.45 1.07L12 18.76l5.1 2.68c.14.08.3.12.46.12a1 1 0 0 0 .99-1.19l-1-5.68 4.13-4A1 1 0 0 0 22 9.67Zm-6.15 4a1 1 0 0 0-.29.89l.72 4.19-3.76-2a1 1 0 0 0-.94 0l-3.76 2 .72-4.19a1 1 0 0 0-.29-.89l-3-3 4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61-3 2.99Z"/>',
  puzzle: '<path d="M17 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a4 4 0 0 1 7.3-2.18c.448.64.692 1.4.7 2.18h3a1 1 0 0 1 1 1v3a4 4 0 0 1 2.18 7.3A3.86 3.86 0 0 1 18 18v3a1 1 0 0 1-1 1ZM5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11v-3.18a1 1 0 0 1 1.33-.95 1.77 1.77 0 0 0 1.74-.23 2 2 0 0 0 .93-1.37 2 2 0 0 0-.48-1.59 1.89 1.89 0 0 0-2.17-.55 1 1 0 0 1-1.33-.95V8h-3.2a1 1 0 0 1-1-1.33 1.77 1.77 0 0 0-.23-1.74 1.939 1.939 0 0 0-3-.43A2 2 0 0 0 8 6c.002.23.046.456.13.67A1 1 0 0 1 7.18 8H5Z"/>',
  "list-format": '<path d="M3.71 16.29C3.6149 16.199 3.50276 16.1276 3.38 16.08C3.13654 15.98 2.86346 15.98 2.62 16.08C2.49725 16.1276 2.38511 16.199 2.29 16.29C2.19896 16.3851 2.1276 16.4972 2.08 16.62C2.00342 16.8021 1.9825 17.0028 2.01988 17.1968C2.05725 17.3908 2.15125 17.5694 2.29 17.71C2.3872 17.7983 2.49882 17.8694 2.62 17.92C2.7397 17.9729 2.86913 18.0002 3 18.0002C3.13087 18.0002 3.2603 17.9729 3.38 17.92C3.50119 17.8694 3.6128 17.7983 3.71 17.71C3.84876 17.5694 3.94276 17.3908 3.98013 17.1968C4.01751 17.0028 3.99658 16.8021 3.92 16.62C3.87241 16.4972 3.80104 16.3851 3.71 16.29ZM7 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H7C6.73479 6 6.48043 6.10536 6.2929 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.2929 7.70711C6.48043 7.89464 6.73479 8 7 8ZM3.71 11.29C3.56938 11.1512 3.39081 11.0572 3.19682 11.0199C3.00283 10.9825 2.80211 11.0034 2.62 11.08C2.49882 11.1306 2.3872 11.2017 2.29 11.29C2.19896 11.3851 2.1276 11.4972 2.08 11.62C2.0271 11.7397 1.99977 11.8691 1.99977 12C1.99977 12.1309 2.0271 12.2603 2.08 12.38C2.13065 12.5012 2.20167 12.6128 2.29 12.71C2.3872 12.7983 2.49882 12.8694 2.62 12.92C2.7397 12.9729 2.86913 13.0002 3 13.0002C3.13087 13.0002 3.2603 12.9729 3.38 12.92C3.50119 12.8694 3.6128 12.7983 3.71 12.71C3.79833 12.6128 3.86936 12.5012 3.92 12.38C3.97291 12.2603 4.00024 12.1309 4.00024 12C4.00024 11.8691 3.97291 11.7397 3.92 11.62C3.87241 11.4972 3.80104 11.3851 3.71 11.29ZM21 11H7C6.73479 11 6.48043 11.1054 6.2929 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.2929 12.7071C6.48043 12.8946 6.73479 13 7 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM3.71 6.29C3.6149 6.19896 3.50276 6.12759 3.38 6.08C3.19789 6.00342 2.99718 5.9825 2.80319 6.01987C2.6092 6.05725 2.43063 6.15124 2.29 6.29C2.20167 6.3872 2.13065 6.49882 2.08 6.62C2.0271 6.7397 1.99977 6.86913 1.99977 7C1.99977 7.13087 2.0271 7.2603 2.08 7.38C2.13065 7.50119 2.20167 7.6128 2.29 7.71C2.3872 7.79833 2.49882 7.86936 2.62 7.92C2.80211 7.99658 3.00283 8.0175 3.19682 7.98013C3.39081 7.94275 3.56938 7.84876 3.71 7.71C3.79833 7.6128 3.86936 7.50119 3.92 7.38C3.97291 7.2603 4.00024 7.13087 4.00024 7C4.00024 6.86913 3.97291 6.7397 3.92 6.62C3.86936 6.49882 3.79833 6.3872 3.71 6.29ZM21 16H7C6.73479 16 6.48043 16.1054 6.2929 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.2929 17.7071C6.48043 17.8946 6.73479 18 7 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16Z"></path>',
  github: '<path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z"/>',
  discord: '<path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51 13.78 13.78 0 0 0-.64 1.28 18.27 18.27 0 0 0-5.5 0 12.64 12.64 0 0 0-.64-1.28h-.05A19.74 19.74 0 0 0 3.64 4.4 20.26 20.26 0 0 0 .11 18.09l.02.02a19.9 19.9 0 0 0 6.04 3.03l.04-.02a14.24 14.24 0 0 0 1.23-2.03.08.08 0 0 0-.05-.07 13.1 13.1 0 0 1-1.9-.92.08.08 0 0 1 .02-.1 10.2 10.2 0 0 0 .41-.31h.04a14.2 14.2 0 0 0 12.1 0l.04.01a9.63 9.63 0 0 0 .4.32.08.08 0 0 1-.03.1 12.29 12.29 0 0 1-1.9.91.08.08 0 0 0-.02.1 15.97 15.97 0 0 0 1.27 2.01h.04a19.84 19.84 0 0 0 6.03-3.05v-.03a20.12 20.12 0 0 0-3.57-13.69ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z"/>',
  twitter: '<path d="M24 4.4a10 10 0 0 1-2.83.78 5.05 5.05 0 0 0 2.17-2.79 9.7 9.7 0 0 1-3.13 1.23 4.89 4.89 0 0 0-5.94-1.03 5 5 0 0 0-2.17 2.38 5.15 5.15 0 0 0-.3 3.25c-1.95-.1-3.86-.63-5.61-1.53a14.04 14.04 0 0 1-4.52-3.74 5.2 5.2 0 0 0-.09 4.91c.39.74.94 1.35 1.61 1.82a4.77 4.77 0 0 1-2.23-.63v.06c0 1.16.4 2.29 1.12 3.18a4.9 4.9 0 0 0 2.84 1.74c-.73.22-1.5.26-2.24.12a4.89 4.89 0 0 0 4.59 3.49A9.78 9.78 0 0 1 0 19.73 13.65 13.65 0 0 0 7.55 22a13.63 13.63 0 0 0 9.96-4.16A14.26 14.26 0 0 0 21.6 7.65V7c.94-.72 1.75-1.6 2.4-2.6Z"/>',
  mastodon: '<path d="M16.45 17.77c2.77-.33 5.18-2.03 5.49-3.58.47-2.45.44-5.97.44-5.97 0-4.77-3.15-6.17-3.15-6.17-1.58-.72-4.3-1.03-7.13-1.05h-.07c-2.83.02-5.55.33-7.13 1.05 0 0-3.14 1.4-3.14 6.17v.91c-.01.88-.02 1.86 0 2.88.12 4.67.87 9.27 5.2 10.4 2 .53 3.72.64 5.1.57 2.51-.14 3.92-.9 3.92-.9l-.08-1.8s-1.8.56-3.8.5c-2-.08-4.1-.22-4.43-2.66a4.97 4.97 0 0 1-.04-.68s1.96.48 4.44.59c1.51.07 2.94-.09 4.38-.26Zm2.22-3.4h-2.3v-5.6c0-1.19-.5-1.79-1.5-1.79-1.1 0-1.66.71-1.66 2.12v3.07h-2.3V9.1c0-1.4-.55-2.12-1.65-2.12-1 0-1.5.6-1.5 1.78v5.61h-2.3V8.6c0-1.18.3-2.12.9-2.81a3.17 3.17 0 0 1 2.47-1.05c1.18 0 2.07.45 2.66 1.35l.57.96.58-.96a2.97 2.97 0 0 1 2.66-1.35c1.01 0 1.83.36 2.46 1.05.6.7.9 1.63.9 2.81v5.78Z"/>'
};

const $$Astro$u = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, label, size = "1em", color } = Astro2.props;
  const a11yAttrs = label ? { "aria-label": label } : { "aria-hidden": "true" };
  const $$definedVars = defineStyleVars([{ "sl-icon-color": color, "sl-icon-size": size }]);
  return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(a11yAttrs)}${addAttribute(Astro2.props.class + " astro-HURVU4DH", "class")} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"${addAttribute($$definedVars, "style")}>${unescapeHTML(Icons[name])}</svg>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/Icon.astro");

const $$Astro$t = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$FallbackContentNotice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  const t = useTranslations(Astro2.props.locale);
  return renderTemplate`${maybeRenderHead($$result)}<p class="flex astro-HZ523PZA">
  ${renderComponent($$result, "Icon", $$Icon, { "name": "warning", "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-HZ523PZA" })}<span class="astro-HZ523PZA">${t("i18n.untranslatedContent")}</span>
</p>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro");

const project = {"root":"file:///mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/"};

class GitNotFoundError extends Error {
}
class FileNotTrackedError extends Error {
}
function getFileCommitDate(file, age = "oldest") {
  try {
    const { stdout } = execaSync("which", ["git"]);
    if (!stdout) {
      throw new GitNotFoundError(
        `Failed to retrieve git history for "${file}" because git is not installed.`
      );
    }
  } catch {
  }
  try {
    const { stdout } = execaSync("test", ["-f", file]);
    if (!stdout) {
      throw new Error(
        `Failed to retrieve git history for "${file}" because the file does not exist.`
      );
    }
  } catch {
  }
  const result = execaSync(
    "git",
    [
      "log",
      `--format=%ct`,
      "--max-count=1",
      ...age === "oldest" ? ["--follow", "--diff-filter=A"] : [],
      "--",
      path.basename(file)
    ],
    {
      cwd: path.dirname(file)
    }
  );
  if (result.exitCode !== 0) {
    throw new Error(
      `Failed to retrieve the git history for file "${file}" with exit code ${result.exitCode}: ${result.stderr}`
    );
  }
  let regex = /^(?<timestamp>\d+)$/;
  const output = result.stdout.trim();
  if (!output) {
    throw new FileNotTrackedError(
      `Failed to retrieve the git history for file "${file}" because the file is not tracked by git.`
    );
  }
  const match = output.match(regex);
  if (!match) {
    throw new Error(
      `Failed to retrieve the git history for file "${file}" with unexpected output: ${output}`
    );
  }
  const timestamp = Number(match.groups.timestamp);
  const date = new Date(timestamp * 1e3);
  return { date, timestamp };
}

const $$Astro$s = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$LastUpdated = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { id, lang, locale } = Astro2.props;
  const t = useTranslations(locale);
  const currentFilePath = fileURLToPath(
    new URL("src/content/docs/" + id, project.root)
  );
  let date;
  try {
    ({ date } = getFileCommitDate(currentFilePath, "newest"));
  } catch {
  }
  return renderTemplate`${date && renderTemplate`${maybeRenderHead($$result)}<p>
      ${t("page.lastUpdated")}
      <time${addAttribute(date.toISOString(), "datetime")}>
        ${date.toLocaleDateString(lang, { dateStyle: "medium" })}
      </time>
    </p>`}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/LastUpdated.astro");

const $$Astro$r = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$PrevNextLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$PrevNextLinks;
  const { prev, next, dir, locale } = Astro2.props;
  const isRtl = dir === "rtl";
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead($$result)}<div class="pagination-links flex astro-WI2SPLHG"${addAttribute(dir, "dir")}>
  ${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-WI2SPLHG">
        ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-WI2SPLHG" })}
        <span class="astro-WI2SPLHG">
          ${t("page.previousLink")}
          <br class="astro-WI2SPLHG">
          <span class="link-title astro-WI2SPLHG">${prev.label}</span>
        </span>
      </a>`}
  ${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-WI2SPLHG">
        ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-WI2SPLHG" })}
        <span class="astro-WI2SPLHG">
          ${t("page.nextLink")}
          <br class="astro-WI2SPLHG">
          <span class="link-title astro-WI2SPLHG">${next.label}</span>
        </span>
      </a>`}
</div>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/PrevNextLinks.astro");

const $$Astro$q = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$EditLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$EditLink;
  const t = useTranslations(Astro2.props.locale);
  const { editUrl } = Astro2.props.data;
  let { baseUrl } = config.editLink;
  if (baseUrl && baseUrl.at(-1) !== "/")
    baseUrl += "/";
  const url = typeof editUrl === "string" ? editUrl : baseUrl ? baseUrl + "src/content/docs/" + Astro2.props.id : void 0;
  return renderTemplate`${editUrl !== false && url && renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(url, "href")} class="flex astro-EEZ2TWJ6">
      ${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-EEZ2TWJ6" })}
      ${t("page.editLink")}
    </a>`}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/EditLink.astro");

const $$Astro$p = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Footer;
  const { entry, dir, lang, locale, sidebar } = Astro2.props;
  const prevNextLinks = getPrevNextLinks(sidebar);
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-3YYAFB3N">
  <div class="meta flex astro-3YYAFB3N">
    ${config.editLink.baseUrl && renderTemplate`${renderComponent($$result, "EditLink", $$EditLink, { "data": entry.data, "id": entry.id, "locale": locale, "class": "astro-3YYAFB3N" })}`}
    ${renderComponent($$result, "LastUpdated", $$LastUpdated, { "id": entry.id, "lang": lang, "locale": locale, "class": "astro-3YYAFB3N" })}
  </div>
  ${renderComponent($$result, "PrevNextLinks", $$PrevNextLinks, { ...prevNextLinks, "dir": dir, "locale": locale, "class": "astro-3YYAFB3N" })}
</footer>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/Footer.astro");

const HeadConfigSchema = () => z.array(
  z.object({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: z.enum([
      "title",
      "base",
      "link",
      "style",
      "meta",
      "script",
      "noscript",
      "template"
    ]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: z.record(z.union([z.string(), z.boolean(), z.undefined()])).default({}),
    /** Content to place inside the tag (optional). */
    content: z.string().default("")
  })
).default([]);

const HeadSchema = HeadConfigSchema();
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr)
    return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title")
    return 90;
  if (entry.tag !== "meta")
    return 80;
  return 0;
}

function localizedUrl(url, locale) {
  url = new URL(url);
  if (!config.locales) {
    return url;
  }
  if (locale === "root")
    locale = "";
  const base = "/docs/".replace(/\/$/, "");
  const hasBase = url.pathname.startsWith(base);
  if (hasBase)
    url.pathname = url.pathname.replace(base, "");
  const [_leadingSlash, baseSegment] = url.pathname.split("/");
  if (baseSegment && baseSegment in config.locales) {
    url.pathname = locale ? url.pathname.replace(baseSegment, locale) : url.pathname.replace("/" + baseSegment, "");
  } else if (locale) {
    url.pathname = "/" + locale + url.pathname;
  }
  if (hasBase)
    url.pathname = base + url.pathname;
  return url;
}

const version = "0.3.0";

const $$Astro$o = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$HeadSEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$HeadSEO;
  const { data, lang } = Astro2.props;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : void 0;
  const title = data.title || config.title;
  const description = data.description || config.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: title },
    { tag: "link", attrs: { rel: "canonical", href: canonical?.href } },
    { tag: "meta", attrs: { name: "generator", content: Astro2.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase("/favicon.svg"),
        type: "image/svg+xml"
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonical?.href } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: config.title } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    },
    { tag: "meta", attrs: { name: "twitter:title", content: title } },
    { tag: "meta", attrs: { name: "twitter:description", content: description } }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (canonical && config.isMultilingual) {
    for (const locale in config.locales) {
      const localeOpts = config.locales[locale];
      if (!localeOpts)
        continue;
      headDefaults.push({
        tag: "link",
        attrs: {
          rel: "alternate",
          hreflang: localeOpts.lang,
          href: localizedUrl(canonical, locale).href
        }
      });
    }
  }
  if (Astro2.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  if (config.social?.twitter) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(config.social.twitter).pathname
      }
    });
  }
  const head = createHead(headDefaults, config.head, data.head);
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/HeadSEO.astro");

const $$Astro$n = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$Select = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead($$result)}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-4YPHTOEN">
  <span class="sr-only astro-4YPHTOEN">${Astro2.props.label}</span>
  ${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-4YPHTOEN" })}
  <select${addAttribute(Astro2.props.value, "value")} class="astro-4YPHTOEN">
    ${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-4YPHTOEN">${unescapeHTML(label)}</option>`)}
  </select>
  ${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-4YPHTOEN" })}
</label>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/Select.astro");

const $$Astro$m = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$LanguageSelect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  useTranslations(Astro2.props.locale);
  return renderTemplate`${config.isMultilingual }`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/LanguageSelect.astro");

const $$Astro$l = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Search;
  const t = useTranslations(Astro2.props.locale);
  const pagefindTranslations = {
    placeholder: t("search.label"),
    ...Object.fromEntries(
      Object.entries(t.pick("pagefind.")).map(([key, value]) => [
        key.replace("pagefind.", ""),
        value
      ])
    )
  };
  return renderTemplate`${renderComponent($$result, "site-search", "site-search", { "data-translations": JSON.stringify(pagefindTranslations), "class": "astro-V37MNKNZ" }, { "default": () => renderTemplate`
  ${maybeRenderHead($$result)}<button data-open-modal disabled class="astro-V37MNKNZ">
    
    ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "label": t("search.label"), "class": "astro-V37MNKNZ" })}
    <span class="hidden md:block astro-V37MNKNZ" aria-hidden="true">${t("search.label")}</span>
    ${renderComponent($$result, "Icon", $$Icon, { "name": "forward-slash", "class": "hidden md:block astro-V37MNKNZ", "label": t("search.shortcutLabel") })}
  </button>

  <dialog style="padding:0"${addAttribute(t("search.label"), "aria-label")} class="astro-V37MNKNZ">
    <div class="dialog-frame flex astro-V37MNKNZ">
      
      <button data-close-modal class="flex md:hidden astro-V37MNKNZ">
        ${t("search.cancelLabel")}
      </button>
      ${renderTemplate`<div class="search-container astro-V37MNKNZ">
            <div id="starlight__search" class="astro-V37MNKNZ"></div>
          </div>`}
    </div>
  </dialog>
` })}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/Search.astro");

const src = {"src":"/docs/_astro/tx.82979636.svg","width":48,"height":48,"format":"svg"};

const logos = { dark: src, light: src };

const $$Astro$k = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$SiteTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  if (config.logo) {
    let err;
    if ("src" in config.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${config.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${config.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${config.logo.light}" (logo.light)`;
      }
    }
    if (err)
      throw new Error(err);
  }
  const href = pathWithBase(Astro2.props.locale || "/");
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")} class="site-title flex astro-M46X6EZ3">
  ${config.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-M46X6EZ3" }, { "default": ($$result2) => renderTemplate`
        <img${addAttribute([{ "dark-only": !("src" in config.logo) }, "astro-M46X6EZ3"], "class:list")}${addAttribute(config.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}>
        ${!("src" in config.logo) && renderTemplate`<img class="light-only astro-M46X6EZ3"${addAttribute(config.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`}
  <span${addAttribute([{ "sr-only": config.logo?.replacesTitle }, "astro-M46X6EZ3"], "class:list")}>
    ${config.title}
  </span>
</a>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/SiteTitle.astro");

const $$Astro$j = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$SocialIcons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SocialIcons;
  const labels = {
    github: "GitHub",
    discord: "Discord",
    twitter: "Twitter",
    mastodon: "Mastodon"
  };
  const links = Object.entries(config.social || {}).filter(
    ([, url]) => Boolean(url)
  );
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-WY4TE6GA" }, { "default": ($$result2) => renderTemplate`${links.map(([platform, url]) => renderTemplate`${maybeRenderHead($$result2)}<a${addAttribute(url, "href")} rel="me" class="astro-WY4TE6GA">
          <span class="sr-only astro-WY4TE6GA">${labels[platform]}</span>
          ${renderComponent($$result2, "Icon", $$Icon, { "name": platform, "class": "astro-WY4TE6GA" })}
        </a>`)}<div class="divider astro-WY4TE6GA"></div>
    ` })}`}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/SocialIcons.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$i = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$ThemeSelect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ThemeSelect;
  const t = useTranslations(Astro2.props.locale);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "\n\n\n<script>\n  StarlightThemeProvider.updatePickers();\n<\/script>"])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`
  
  ${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": t("themeSelect.accessibleLabel"), "value": "auto", "options": [
    { label: t("themeSelect.dark"), selected: false, value: "dark" },
    { label: t("themeSelect.light"), selected: false, value: "light" },
    { label: t("themeSelect.auto"), selected: true, value: "auto" }
  ], "width": "6.25em" })}
` }));
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/ThemeSelect.astro");

const $$Astro$h = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Header;
  const { locale } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="header flex astro-KMKMNAGF">
  ${renderComponent($$result, "SiteTitle", $$SiteTitle, { "locale": locale, "class": "astro-KMKMNAGF" })}
  ${renderComponent($$result, "Search", $$Search, { "locale": locale, "class": "astro-KMKMNAGF" })}
  <div class="hidden md:flex right-group astro-KMKMNAGF">
    ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-KMKMNAGF" })}
    ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "locale": locale, "class": "astro-KMKMNAGF" })}
    ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "locale": locale, "class": "astro-KMKMNAGF" })}
  </div>
</div>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/Header.astro");

const $$Astro$g = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { link, variant, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute([["flex action", variant], "astro-YJY4ZHRO"], "class:list")}${addAttribute(link, "href")}>
  ${renderSlot($$result, $$slots["default"])}
  ${icon?.type === "icon" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "size": "1.5rem", "class": "astro-YJY4ZHRO" })}`}
  ${icon?.type === "raw" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon.html)}` })}`}
</a>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/CallToAction.astro");

const $$Astro$f = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = Astro2.props.fallbackTitle,
    tagline,
    image,
    actions
  } = Astro2.props.hero;
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt
  };
  return renderTemplate`${maybeRenderHead($$result)}<div class="hero astro-JBFSKTT5">
  ${image?.file ? image.file.format === "svg" ? renderTemplate`<img${addAttribute(image.file.src, "src")}${spreadAttributes(imageAttrs, "imageAttrs", { "class": "astro-JBFSKTT5" })}>` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image.file, ...imageAttrs, "class": "astro-JBFSKTT5" })}` : image?.html && renderTemplate`<div class="hero-html flex astro-JBFSKTT5">${unescapeHTML(image.html)}</div>`}
  <div class="flex stack astro-JBFSKTT5">
    <div class="flex copy astro-JBFSKTT5">
      <h1 id="_top" data-page-title class="astro-JBFSKTT5">${unescapeHTML(title)}</h1>
      ${tagline && renderTemplate`<div class="tagline astro-JBFSKTT5">${unescapeHTML(tagline)}</div>`}
    </div>
    ${actions.length > 0 && renderTemplate`<div class="flex actions astro-JBFSKTT5">
          ${actions.map(({ text, ...attrs }) => renderTemplate`${renderComponent($$result, "CallToAction", $$CallToAction, { ...attrs, "class": "astro-JBFSKTT5" }, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}`)}
        </div>`}
  </div>
</div>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/Hero.astro");

const $$Astro$e = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$MarkdownContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$MarkdownContent;
  return renderTemplate`${maybeRenderHead($$result)}<div class="content astro-ML6NTD6L">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/MarkdownContent.astro");

const $$Astro$d = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$RightSidebarPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$RightSidebarPanel;
  return renderTemplate`${maybeRenderHead($$result)}<div class="right-sidebar-panel hidden lg:block astro-IQ7C2MVM">
  <div class="container astro-IQ7C2MVM">
    ${renderSlot($$result, $$slots["default"])}
  </div>
</div>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/RightSidebarPanel.astro");

const $$Astro$c = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$TableOfContentsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute([{ isMobile }, "astro-G2BYWC46"], "class:list")}${addAttribute($$definedVars, "style")}>
  ${toc.map((heading) => renderTemplate`<li class="astro-G2BYWC46"${addAttribute($$definedVars, "style")}>
        <a${addAttribute("#" + heading.slug, "href")}${addAttribute(heading.current && "true", "aria-current")} class="astro-G2BYWC46"${addAttribute($$definedVars, "style")}>
          <span class="astro-G2BYWC46"${addAttribute($$definedVars, "style")}>${heading.text}</span>
        </a>
        ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-G2BYWC46" })}`}
      </li>`)}
</ul>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro");

const $$Astro$b = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$MobileTableOfContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { locale, toc, maxHeadingLevel, minHeadingLevel } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": minHeadingLevel, "data-max-h": maxHeadingLevel, "class": "astro-WOK6PD2O" }, { "default": () => renderTemplate`
  ${maybeRenderHead($$result)}<nav aria-labelledby="starlight__on-this-page--mobile" class="lg:hidden astro-WOK6PD2O">
    <details id="starlight__mobile-toc" class="astro-WOK6PD2O">
      <summary id="starlight__on-this-page--mobile" class="flex astro-WOK6PD2O">
        <div class="toggle flex astro-WOK6PD2O">
          ${t("tableOfContents.onThisPage")}
          ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-WOK6PD2O", "size": "1rem" })}
        </div>
        <span class="display-current astro-WOK6PD2O">${toc[0]?.text}</span>
      </summary>
      <div class="dropdown astro-WOK6PD2O">
        ${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc, "isMobile": true, "class": "astro-WOK6PD2O" })}
      </div>
    </details>
  </nav>
` })}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/TableOfContents/MobileTableOfContents.astro");

const $$Astro$a = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$TableOfContents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { locale, toc, maxHeadingLevel, minHeadingLevel } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": minHeadingLevel, "data-max-h": maxHeadingLevel }, { "default": () => renderTemplate`
  ${maybeRenderHead($$result)}<nav aria-labelledby="starlight__on-this-page">
    <h2 id="starlight__on-this-page">${t("tableOfContents.onThisPage")}</h2>
    ${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc })}
  </nav>
` })}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/TableOfContents.astro");

function diveChildren(item, depth) {
  if (depth === 1) {
    return item.children;
  } else if (item.children.length > 0) {
    return diveChildren(item.children.at(-1), depth - 1);
  } else {
    return [];
  }
}
function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title = "Overview" }) {
  const overview = { depth: 2, slug: "_top", text: title };
  headings = [
    overview,
    ...headings.filter(
      ({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel
    )
  ];
  const toc = [];
  for (const heading of headings) {
    if (toc.length === 0) {
      toc.push({ ...heading, children: [], current: true });
    } else {
      const lastItemInToc = toc.at(-1);
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`);
      }
      if (heading.depth === lastItemInToc.depth) {
        toc.push({ ...heading, children: [] });
      } else {
        const gap = heading.depth - lastItemInToc.depth;
        const target = diveChildren(lastItemInToc, gap);
        target.push({ ...heading, children: [] });
      }
    }
  }
  return toc;
}

const $$Astro$9 = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$RightSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$RightSidebar;
  const { headings, locale, tocConfig } = Astro2.props;
  const t = useTranslations(locale);
  const tocProps = tocConfig && {
    ...tocConfig,
    locale,
    toc: generateToC(headings, {
      ...tocConfig,
      title: t("tableOfContents.overview")
    })
  };
  return renderTemplate`${tocProps && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
      ${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { ...tocProps })}
      ${renderComponent($$result2, "RightSidebarPanel", $$RightSidebarPanel, {}, { "default": ($$result3) => renderTemplate`
        ${renderComponent($$result3, "TableOfContents", $$TableOfContents, { ...tocProps })}
      ` })}
    ` })}`}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/RightSidebar.astro");

const $$Astro$8 = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$SidebarSublist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute([{ "top-level": !Astro2.props.nested }, "astro-3II7XXMS"], "class:list")}>
  ${Astro2.props.sublist.map((entry) => renderTemplate`<li class="astro-3II7XXMS">
        ${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([{ large: !Astro2.props.nested }, "astro-3II7XXMS"], "class:list")}>
            ${entry.label}
          </a>` : renderTemplate`<details open class="astro-3II7XXMS">
            <summary class="astro-3II7XXMS">
              <h2 class="large astro-3II7XXMS">${entry.label}</h2>
              ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-3II7XXMS", "size": "1.25rem" })}
            </summary>
            ${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-3II7XXMS" })}
          </details>`}
      </li>`)}
</ul>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/SidebarSublist.astro");

const $$Astro$7 = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar, locale } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="sidebar flex astro-UL5L7BP7">
  ${renderComponent($$result, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar, "class": "astro-UL5L7BP7" })}
  <div class="mobile-preferences flex md:hidden astro-UL5L7BP7">
    ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "locale": locale, "class": "astro-UL5L7BP7" })}
    ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "locale": locale, "class": "astro-UL5L7BP7" })}
  </div>
</div>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/Sidebar.astro");

const $$Astro$6 = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$SkipLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SkipLink;
  const t = useTranslations(Astro2.props.locale);
  return renderTemplate`${maybeRenderHead($$result)}<a href="#_top" class="astro-7Q3LIR66">${t("skipLink.label")}</a>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/SkipLink.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$ThemeProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ThemeProvider;
  return renderTemplate(_a || (_a = __template(["\n<script>\n  window.StarlightThemeProvider = (() => {\n    const storedTheme =\n      typeof localStorage !== 'undefined' &&\n      localStorage.getItem('starlight-theme');\n    const theme =\n      storedTheme ||\n      (window.matchMedia('(prefers-color-scheme: light)').matches\n        ? 'light'\n        : 'dark');\n    document.documentElement.dataset.theme =\n      theme === 'light' ? 'light' : 'dark';\n    return {\n      updatePickers(theme = storedTheme || 'auto') {\n        document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n          const select = picker.querySelector('select');\n          if (select) select.value = theme;\n          /** @type {HTMLTemplateElement | null} */\n          const tmpl = document.querySelector(`#theme-icons`);\n          const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n          if (newIcon) {\n            const oldIcon = picker.querySelector('svg.label-icon');\n            if (oldIcon) {\n              oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n            }\n          }\n        });\n      },\n    };\n  })();\n<\/script>\n\n<template id=\"theme-icons\">\n  ", "\n  ", "\n  ", "\n</template>"], ["\n<script>\n  window.StarlightThemeProvider = (() => {\n    const storedTheme =\n      typeof localStorage !== 'undefined' &&\n      localStorage.getItem('starlight-theme');\n    const theme =\n      storedTheme ||\n      (window.matchMedia('(prefers-color-scheme: light)').matches\n        ? 'light'\n        : 'dark');\n    document.documentElement.dataset.theme =\n      theme === 'light' ? 'light' : 'dark';\n    return {\n      updatePickers(theme = storedTheme || 'auto') {\n        document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n          const select = picker.querySelector('select');\n          if (select) select.value = theme;\n          /** @type {HTMLTemplateElement | null} */\n          const tmpl = document.querySelector(\\`#theme-icons\\`);\n          const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n          if (newIcon) {\n            const oldIcon = picker.querySelector('svg.label-icon');\n            if (oldIcon) {\n              oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n            }\n          }\n        });\n      },\n    };\n  })();\n<\/script>\n\n<template id=\"theme-icons\">\n  ", "\n  ", "\n  ", "\n</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/ThemeProvider.astro");

const $$Astro$4 = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$MobileMenuToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  const t = useTranslations(Astro2.props.locale);
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "astro-JIF73YZW" }, { "default": () => renderTemplate`
  ${maybeRenderHead($$result)}<button aria-expanded="false"${addAttribute(t("menuButton.accessibleLabel"), "aria-label")} aria-controls="starlight__sidebar" class="flex md:hidden astro-JIF73YZW">
    ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "astro-JIF73YZW" })}
  </button>
` })}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro");

const $$Astro$3 = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$PageFrame = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar, locale } = Astro2.props;
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead($$result)}<div class="page flex astro-2GH5JEOH">
  <header class="header astro-2GH5JEOH">${renderSlot($$result, $$slots["header"])}</header>
  ${hasSidebar && renderTemplate`<nav class="sidebar astro-2GH5JEOH"${addAttribute(t("sidebarNav.accessibleLabel"), "aria-label")}>
        ${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { "locale": locale, "class": "astro-2GH5JEOH" })}
        <div id="starlight__sidebar" class="sidebar-pane astro-2GH5JEOH">
          <div class="sidebar-content astro-2GH5JEOH">
            ${renderSlot($$result, $$slots["sidebar"])}
          </div>
        </div>
      </nav>`}
  <div class="main-frame astro-2GH5JEOH">${renderSlot($$result, $$slots["default"])}</div>
</div>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/layout/PageFrame.astro");

const $$Astro$2 = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$TwoColumnContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead($$result)}<div class="lg:flex astro-VRNAM7M3">
  ${Astro2.props.hasToC && renderTemplate`<aside class="right-sidebar-container astro-VRNAM7M3">
        <div class="right-sidebar astro-VRNAM7M3">
          ${renderSlot($$result, $$slots["right-sidebar"])}
        </div>
      </aside>`}
  <div class="main-pane astro-VRNAM7M3">${renderSlot($$result, $$slots["default"])}</div>
</div>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/layout/TwoColumnContent.astro");

const $$Astro$1 = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const { dir, entry, entryMeta, headings, isFallback, lang, locale } = Astro2.props;
  const sidebar = getSidebar(Astro2.url.pathname, locale);
  const hasSidebar = entry.data.template !== "splash";
  const tocConfig = !hasSidebar ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : config.tableOfContents;
  const hasToC = Boolean(tocConfig);
  const hasHero = Boolean(entry.data.hero);
  return renderTemplate`<html${addAttribute(lang, "lang")}${addAttribute(dir, "dir")}${addAttribute(hasToC, "data-has-toc")}${addAttribute(hasSidebar, "data-has-sidebar")}${addAttribute(hasHero, "data-has-hero")} class="astro-NYFQ2LET">
  <head>
    ${renderComponent($$result, "HeadSEO", $$HeadSEO, { "data": entry.data, "lang": lang, "class": "astro-NYFQ2LET" })}
    
  ${renderHead($$result)}</head>
  <body class="astro-NYFQ2LET">
    ${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-NYFQ2LET" })}
    ${renderComponent($$result, "SkipLink", $$SkipLink, { "locale": locale, "class": "astro-NYFQ2LET" })}
    ${renderComponent($$result, "PageFrame", $$PageFrame, { "locale": locale, "hasSidebar": hasSidebar, "class": "astro-NYFQ2LET" }, { "default": ($$result2) => renderTemplate`
      
      ${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { "hasToC": hasToC, "class": "astro-NYFQ2LET" }, { "default": ($$result3) => renderTemplate`
        
        <main${addAttribute(entry.slug !== "404", "data-pagefind-body")}${addAttribute(entryMeta.lang, "lang")}${addAttribute(entryMeta.dir, "dir")} class="astro-NYFQ2LET">
          
          ${entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { "class": "astro-NYFQ2LET" }, { "default": ($$result4) => renderTemplate`
              ${renderComponent($$result4, "Hero", $$Hero, { "hero": entry.data.hero, "fallbackTitle": entry.data.title, "class": "astro-NYFQ2LET" })}
              ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { "class": "astro-NYFQ2LET" }, { "default": ($$result5) => renderTemplate`${renderSlot($$result5, $$slots["default"])}` })}
            ` })}` : renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { "class": "astro-NYFQ2LET" }, { "default": ($$result4) => renderTemplate`
              <h1 id="_top" data-page-title style="font-size: var(--sl-text-h1); line-height: var(--sl-line-height-headings); font-weight: 600; color: var(--sl-color-white); margin-top: 1rem;" class="astro-NYFQ2LET">
                ${entry.data.title}
              </h1>
              ${isFallback && renderTemplate`${renderComponent($$result4, "FallbackContentNotice", $$FallbackContentNotice, { "locale": locale, "class": "astro-NYFQ2LET" })}`}` })}${renderComponent($$result3, "ContentPanel", $$ContentPanel, { "class": "astro-NYFQ2LET" }, { "default": ($$result4) => renderTemplate`
              ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { "class": "astro-NYFQ2LET" }, { "default": ($$result5) => renderTemplate`${renderSlot($$result5, $$slots["default"])}` })}
              ${renderComponent($$result4, "Footer", $$Footer, { ...{ entry, dir, lang, locale, sidebar }, "class": "astro-NYFQ2LET" })}
            ` })}`}
        </main>
      `, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "RightSidebar", $$RightSidebar, { "slot": "right-sidebar", "headings": headings, "locale": locale, "tocConfig": tocConfig, "class": "astro-NYFQ2LET" })}` })}
    `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "locale": locale, "class": "astro-NYFQ2LET" })}`, "sidebar": ($$result2) => renderTemplate`${hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", "sidebar": sidebar, "locale": locale, "class": "astro-NYFQ2LET" })}`}` })}
  </body></html>`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/layout/Page.astro");

const $$Astro = createAstro("https://tradex-app.github.io/TradeX-chart/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { lang = "en", dir = "ltr", locale } = config.defaultLocale || {};
  const entryMeta = { dir, lang, locale };
  const t = useTranslations(locale);
  const fallbackEntry = {
    slug: "404",
    id: "404.md",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: t("404.text"), actions: [] }
    },
    render: async () => ({
      Content: Content,
      headings: [],
      remarkPluginFrontmatter: {}
    })
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry || fallbackEntry;
  const { Content: Content$1, headings } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "headings": headings, "entry": entry, "slug": entry.slug, ...entryMeta, "entryMeta": entryMeta }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Content", Content$1, {})}
` })}`;
}, "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/404.astro");

const $$file = "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/node_modules/@astrojs/starlight/404.astro";
const $$url = undefined;

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Page as $, _404 as _, $$Icon as a, getImage as g, paths as p };
