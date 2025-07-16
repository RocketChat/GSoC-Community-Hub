import { $ as current_component, N as sanitize_props, O as rest_props, A as push, B as setContext, G as getContext, P as fallback, Q as spread_attributes, R as clsx, S as slot, M as bind_props, E as pop, X as store_get, Y as unsubscribe_stores, I as escape_html, V as spread_props, a0 as head, J as attr, W as ensure_array_like } from "./index.js";
import { createPopper } from "@popperjs/core";
import { w as writable } from "./index2.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const brand = {
  brandName: "rocket.chat",
  brandImgLink: "https://cdn.prod.website-files.com/611a19b9853b7414a0f6b3f6/611bbb87319adfd903b90f24_logoRC.svg"
};
const menutree = [
  {
    top: "Community",
    dropdown: [
      { label: "Community Rocket.Chat Serever" },
      { label: "---" },
      { label: "Forum" },
      { label: "---" },
      { label: "Github code contributons" },
      { label: "---" },
      { label: "Leaderboard", href: "/leaderboard" }
    ]
  },
  {
    top: "Recent Events",
    dropdown: [
      { label: "Alumni Summit 2025", href: "/alumni-summit" },
      { label: "---" },
      { label: "Alumni Summit 2024" },
      { label: "---" },
      { label: "Demo Day 2024" }
    ]
  },
  {
    top: "Google Summer of Code",
    dropdown: [
      { label: "GSoC 2024" },
      { label: "---" },
      { label: "Projects" },
      { label: "Alumni Summit" },
      { label: "Demo Day" },
      { label: "---" },
      { label: "GSoC 2023" },
      { label: "---" },
      { label: "Projects" },
      { label: "Alumni Summit" },
      { label: "Demo Day" },
      { label: "---" },
      { label: "GSoC 2022" },
      { label: "---" },
      { label: "Projects" },
      { label: "Alumni Summit" },
      { label: "Demo Day" },
      { label: "---" },
      { label: "GSoC 2021" },
      { label: "---" },
      { label: "Projects" },
      { label: "Alumni Summit" },
      { label: "Demo Day" },
      { label: "---" },
      { label: "GSoC 2020" },
      { label: "---" },
      { label: "Projects" },
      { label: "Alumni Summit" },
      { label: "Demo Day" },
      { label: "---" },
      { label: "GSoC 2019" },
      { label: "---" },
      { label: "Projects" },
      { label: "Alumni Summit" },
      { label: "Demo Day" },
      { label: "---" },
      { label: "GSoC 2018" },
      { label: "---" },
      { label: "Projects" },
      { label: "Alumni Summit" },
      { label: "Demo Day" },
      { label: "---" },
      { label: "GSoC 2017" },
      { label: "---" },
      { label: "Projects" },
      { label: "Alumni Summit" },
      { label: "Demo Day" }
    ]
  },
  {
    top: "AI Club",
    dropdown: [
      { label: "Weekly meetup" },
      { label: "---" },
      { label: "Open Channel" },
      { label: "Discussion Forum" },
      { label: "Discord" }
    ]
  }
];
function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}
function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${colWidth}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${colWidth}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
}
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
const classnames = (...args) => args.map(toClassName).filter(Boolean).join(" ");
function createPopperActions(initOptions) {
  let contentNode;
  let options = initOptions;
  let popperInstance = null;
  let referenceNode;
  const initPopper = () => {
    if (referenceNode && contentNode) {
      popperInstance = createPopper(referenceNode, contentNode, options);
    }
  };
  const deinitPopper = () => {
    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }
  };
  const referenceAction = (node) => {
    referenceNode = node;
    initPopper();
    return {
      destroy() {
        deinitPopper();
      }
    };
  };
  const contentAction = (node, contentOptions) => {
    contentNode = node;
    options = Object.assign(Object.assign({}, initOptions), contentOptions);
    initPopper();
    return {
      update(newContentOptions) {
        options = Object.assign(Object.assign({}, initOptions), newContentOptions);
        if (popperInstance && options) {
          popperInstance.setOptions(options);
        }
      },
      destroy() {
        deinitPopper();
      }
    };
  };
  return [referenceAction, contentAction, () => popperInstance];
}
const createContext = () => writable({});
function Dropdown($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "active",
    "autoClose",
    "direction",
    "dropup",
    "group",
    "inNavbar",
    "isOpen",
    "nav",
    "setActiveFromChild",
    "size",
    "theme",
    "toggle"
  ]);
  push();
  let subItemIsActive, handleToggle, classes;
  const noop = () => void 0;
  let context = createContext();
  setContext("dropdownContext", context);
  const navbarContext = getContext("navbar");
  let className = fallback($$props["class"], "");
  let active = fallback($$props["active"], false);
  let autoClose = fallback($$props["autoClose"], true);
  let direction = fallback($$props["direction"], "down");
  let dropup = fallback($$props["dropup"], false);
  let group = fallback($$props["group"], false);
  let inNavbar = fallback($$props["inNavbar"], () => navbarContext ? navbarContext.inNavbar : false, true);
  let isOpen = fallback($$props["isOpen"], false);
  let nav = fallback($$props["nav"], false);
  let setActiveFromChild = fallback($$props["setActiveFromChild"], false);
  let size = fallback($$props["size"], "");
  let theme = fallback($$props["theme"], null);
  let toggle = fallback($$props["toggle"], void 0);
  const [popperRef, popperContent] = createPopperActions();
  const validDirections = ["up", "down", "left", "right", "start", "end"];
  if (validDirections.indexOf(direction) === -1) {
    throw new Error(`Invalid direction sent: '${direction}' is not one of 'up', 'down', 'left', 'right', 'start', 'end'`);
  }
  let component;
  let dropdownDirection;
  function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === "keyup" && e.which !== 9)) return;
    if (component.contains(e.target) && component !== e.target && (e.type !== "keyup" || e.which === 9)) {
      return;
    }
    if (autoClose === true || autoClose === "outside") {
      handleToggle(e);
    }
  }
  onDestroy(() => {
    if (typeof document !== "undefined") {
      ["click", "touchstart", "keyup"].forEach((event) => document.removeEventListener(event, handleDocumentClick, true));
    }
  });
  subItemIsActive = false;
  {
    if (direction === "left") dropdownDirection = "start";
    else if (direction === "right") dropdownDirection = "end";
    else dropdownDirection = direction;
  }
  handleToggle = toggle || (() => isOpen = !isOpen);
  classes = classnames(className, direction !== "down" && `drop${dropdownDirection}`, nav && active ? "active" : false, setActiveFromChild && subItemIsActive ? "active" : false, {
    "btn-group": group,
    [`btn-group-${size}`]: !!size,
    dropdown: !group,
    show: isOpen,
    "nav-item": nav
  });
  {
    if (typeof document !== "undefined") {
      if (isOpen) {
        ["click", "touchstart", "keyup"].forEach((event) => document.addEventListener(event, handleDocumentClick, true));
      } else {
        ["click", "touchstart", "keyup"].forEach((event) => document.removeEventListener(event, handleDocumentClick, true));
      }
    }
  }
  {
    context.update(() => {
      return {
        toggle: handleToggle,
        isOpen,
        autoClose,
        direction: direction === "down" && dropup ? "up" : direction,
        inNavbar: nav || inNavbar,
        popperRef: nav ? noop : popperRef,
        popperContent: nav ? noop : popperContent
      };
    });
  }
  if (nav) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<li${spread_attributes(
      {
        ...$$restProps,
        class: clsx(classes),
        "data-bs-theme": theme
      }
    )}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></li>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes(
      {
        ...$$restProps,
        class: clsx(classes),
        "data-bs-theme": theme
      }
    )}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    class: className,
    active,
    autoClose,
    direction,
    dropup,
    group,
    inNavbar,
    isOpen,
    nav,
    setActiveFromChild,
    size,
    theme,
    toggle
  });
  pop();
}
function Container($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "sm", "md", "lg", "xl", "xxl", "fluid"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let sm = fallback($$props["sm"], void 0);
  let md = fallback($$props["md"], void 0);
  let lg = fallback($$props["lg"], void 0);
  let xl = fallback($$props["xl"], void 0);
  let xxl = fallback($$props["xxl"], void 0);
  let fluid = fallback($$props["fluid"], false);
  classes = classnames(className, {
    "container-sm": sm,
    "container-md": md,
    "container-lg": lg,
    "container-xl": xl,
    "container-xxl": xxl,
    "container-fluid": fluid,
    container: !sm && !md && !lg && !xl && !xxl && !fluid
  });
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: clsx(classes) })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className, sm, md, lg, xl, xxl, fluid });
  pop();
}
function DropdownItem($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "active",
    "disabled",
    "divider",
    "header",
    "toggle",
    "href"
  ]);
  push();
  let classes;
  getContext("dropdownContext");
  let className = fallback($$props["class"], "");
  let active = fallback($$props["active"], false);
  let disabled = fallback($$props["disabled"], false);
  let divider = fallback($$props["divider"], false);
  let header = fallback($$props["header"], false);
  let toggle = fallback($$props["toggle"], true);
  let href = fallback($$props["href"], "");
  classes = classnames(className, {
    disabled,
    "dropdown-item": !divider && !header,
    active,
    "dropdown-header": header,
    "dropdown-divider": divider
  });
  $$payload.out += `<li>`;
  if (header) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h6${spread_attributes({ ...$$restProps, class: clsx(classes) })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></h6>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (divider) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${spread_attributes({ ...$$restProps, class: clsx(classes) })}><!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (href) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<a${spread_attributes({ ...$$restProps, click: true, href, class: clsx(classes) })}><!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!----></a>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<button${spread_attributes({ type: "button", ...$$restProps, class: clsx(classes) })}><!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!----></button>`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></li>`;
  bind_props($$props, {
    class: className,
    active,
    disabled,
    divider,
    header,
    toggle,
    href
  });
  pop();
}
function DropdownMenu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "end", "right"]);
  push();
  var $$store_subs;
  let classes;
  const context = getContext("dropdownContext");
  let className = fallback($$props["class"], "");
  let end = fallback($$props["end"], false);
  let right = fallback($$props["right"], false);
  const popperPlacement = (direction, end2) => {
    let prefix = direction;
    if (direction === "up") {
      prefix = "top";
    }
    if (direction === "down") {
      prefix = "bottom";
    }
    let suffix = end2 ? "end" : "start";
    return `${prefix}-${suffix}`;
  };
  ({
    modifiers: [
      { name: "flip" },
      { name: "offset", options: { offset: [0, 2] } }
    ],
    placement: popperPlacement(store_get($$store_subs ??= {}, "$context", context).direction, end || right)
  });
  classes = classnames(className, "dropdown-menu", {
    "dropdown-menu-end": end || right,
    show: store_get($$store_subs ??= {}, "$context", context).isOpen
  });
  $$payload.out += `<ul${spread_attributes(
    {
      ...$$restProps,
      class: clsx(classes),
      "data-bs-popper": store_get($$store_subs ??= {}, "$context", context).inNavbar ? "static" : void 0
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></ul>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { class: className, end, right });
  pop();
}
function DropdownToggle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "ariaLabel",
    "active",
    "block",
    "caret",
    "color",
    "disabled",
    "inner",
    "nav",
    "outline",
    "size",
    "split",
    "tag"
  ]);
  push();
  var $$store_subs;
  let classes, btnClasses;
  const context = getContext("dropdownContext");
  let className = fallback($$props["class"], "");
  let ariaLabel = fallback($$props["ariaLabel"], "Toggle Dropdown");
  let active = fallback($$props["active"], false);
  let block = fallback($$props["block"], false);
  let caret = fallback($$props["caret"], false);
  let color = fallback($$props["color"], "secondary");
  let disabled = fallback($$props["disabled"], false);
  let inner = fallback($$props["inner"], void 0);
  let nav = fallback($$props["nav"], false);
  let outline = fallback($$props["outline"], false);
  let size = fallback($$props["size"], "");
  let split = fallback($$props["split"], false);
  let tag = fallback($$props["tag"], null);
  classes = classnames(className, {
    "dropdown-toggle": caret || split,
    "dropdown-toggle-split": split,
    "nav-link": nav,
    show: store_get($$store_subs ??= {}, "$context", context).isOpen
  });
  btnClasses = classnames(classes, "btn", `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, { active });
  if (nav) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes(
      {
        ...$$restProps,
        href: "#nav",
        "aria-expanded": store_get($$store_subs ??= {}, "$context", context).isOpen,
        class: clsx(classes)
      }
    )}><!---->`;
    slot($$payload, $$props, "default", {}, () => {
      $$payload.out += `<span class="visually-hidden">${escape_html(ariaLabel)}</span>`;
    });
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (tag === "div") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${spread_attributes(
        {
          ...$$restProps,
          "aria-expanded": store_get($$store_subs ??= {}, "$context", context).isOpen,
          class: clsx(classes)
        }
      )}><!---->`;
      slot($$payload, $$props, "default", {}, () => {
        $$payload.out += `<span class="visually-hidden">${escape_html(ariaLabel)}</span>`;
      });
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (tag === "span") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<span${spread_attributes(
          {
            ...$$restProps,
            "aria-expanded": store_get($$store_subs ??= {}, "$context", context).isOpen,
            class: clsx(classes)
          }
        )}><!---->`;
        slot($$payload, $$props, "default", {}, () => {
          $$payload.out += `<span class="visually-hidden">${escape_html(ariaLabel)}</span>`;
        });
        $$payload.out += `<!----></span>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<button${spread_attributes(
          {
            ...$$restProps,
            type: "button",
            "aria-expanded": store_get($$store_subs ??= {}, "$context", context).isOpen,
            class: clsx(btnClasses)
          }
        )}><!---->`;
        slot($$payload, $$props, "default", {}, () => {
          $$payload.out += `<span class="visually-hidden">${escape_html(ariaLabel)}</span>`;
        });
        $$payload.out += `<!----></button>`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    class: className,
    ariaLabel,
    active,
    block,
    caret,
    color,
    disabled,
    inner,
    nav,
    outline,
    size,
    split,
    tag
  });
  pop();
}
function Nav($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "tabs",
    "pills",
    "vertical",
    "horizontal",
    "justified",
    "fill",
    "navbar",
    "card",
    "theme",
    "underline"
  ]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let tabs = fallback($$props["tabs"], false);
  let pills = fallback($$props["pills"], false);
  let vertical = fallback($$props["vertical"], "");
  let horizontal = fallback($$props["horizontal"], "");
  let justified = fallback($$props["justified"], false);
  let fill = fallback($$props["fill"], false);
  let navbar = fallback($$props["navbar"], false);
  let card = fallback($$props["card"], false);
  let theme = fallback($$props["theme"], null);
  let underline = fallback($$props["underline"], false);
  function getVerticalClass(vertical2) {
    if (!vertical2) {
      return false;
    }
    if (vertical2 === true || vertical2 === "xs") {
      return "flex-column";
    }
    return `flex-${vertical2}-column`;
  }
  classes = classnames(className, navbar ? "navbar-nav" : "nav", horizontal ? `justify-content-${horizontal}` : false, getVerticalClass(vertical), {
    "nav-tabs": tabs,
    "card-header-tabs": card && tabs,
    "nav-pills": pills,
    "card-header-pills": card && pills,
    "nav-justified": justified,
    "nav-fill": fill,
    "nav-underline": underline
  });
  $$payload.out += `<ul${spread_attributes(
    {
      ...$$restProps,
      class: clsx(classes),
      "data-bs-theme": theme
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></ul>`;
  bind_props($$props, {
    class: className,
    tabs,
    pills,
    vertical,
    horizontal,
    justified,
    fill,
    navbar,
    card,
    theme,
    underline
  });
  pop();
}
function Navbar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "container",
    "color",
    "dark",
    "expand",
    "fixed",
    "light",
    "sticky",
    "theme"
  ]);
  push();
  let classes;
  setContext("navbar", { inNavbar: true });
  let className = fallback($$props["class"], "");
  let container = fallback($$props["container"], "fluid");
  let color = fallback($$props["color"], "");
  let dark = fallback($$props["dark"], false);
  let expand = fallback($$props["expand"], "");
  let fixed = fallback($$props["fixed"], "");
  let light = fallback($$props["light"], false);
  let sticky = fallback($$props["sticky"], "");
  let theme = fallback($$props["theme"], null);
  let containerProps = {
    sm: container === "sm",
    md: container === "md",
    lg: container === "lg",
    xl: container === "xl",
    xxl: container === "xxl",
    fluid: container === "fluid"
  };
  function getExpandClass(expand2) {
    if (expand2 === false) {
      return false;
    }
    if (expand2 === true || expand2 === "xs") {
      return "navbar-expand";
    }
    return `navbar-expand-${expand2}`;
  }
  theme = dark ? "dark" : light ? "light" : theme;
  classes = classnames(className, "navbar", getExpandClass(expand), {
    [`bg-${color}`]: color,
    [`fixed-${fixed}`]: fixed,
    [`sticky-${sticky}`]: sticky
  });
  $$payload.out += `<nav${spread_attributes(
    {
      ...$$restProps,
      class: clsx(classes),
      "data-bs-theme": theme
    }
  )}>`;
  if (container) {
    $$payload.out += "<!--[-->";
    Container($$payload, spread_props([
      containerProps,
      {
        children: ($$payload2) => {
          $$payload2.out += `<!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      }
    ]));
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></nav>`;
  bind_props($$props, {
    class: className,
    container,
    color,
    dark,
    expand,
    fixed,
    light,
    sticky,
    theme
  });
  pop();
}
function NavbarBrand($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "href"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let href = fallback($$props["href"], "/");
  classes = classnames(className, "navbar-brand");
  $$payload.out += `<a${spread_attributes({ ...$$restProps, class: clsx(classes), href })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></a>`;
  bind_props($$props, { class: className, href });
  pop();
}
function Styles($$payload, $$props) {
  push();
  let icons = fallback($$props["icons"], true);
  let theme = fallback($$props["theme"], void 0);
  if (typeof document !== "undefined" && theme !== void 0) {
    if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  }
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/> `;
    if (icons) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"/>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  bind_props($$props, { icons, theme });
  pop();
}
const colorMode = writable(getInitialColorMode());
colorMode.subscribe((mode) => useColorMode(mode));
function getInitialColorMode() {
  const currentTheme = globalThis.document?.documentElement.getAttribute("data-bs-theme") || "light";
  const prefersDarkMode = typeof globalThis.window?.matchMedia === "function" ? globalThis.window?.matchMedia("(prefers-color-scheme: dark)").matches : false;
  return currentTheme === "dark" || currentTheme === "auto" && prefersDarkMode ? "dark" : "light";
}
function useColorMode(element, mode) {
  let target = element;
  if (arguments.length === 1) {
    target = globalThis.document?.documentElement;
    if (!target) {
      return;
    }
    mode = element;
    colorMode.update(() => mode);
  }
  target.setAttribute("data-bs-theme", mode);
}
function Menubar($$payload, $$props) {
  push();
  let { brand: brand2, menutree: menutree2 } = $$props;
  function nav($$payload2) {
    Nav($$payload2, {
      class: "ms-auto",
      navbar: true,
      children: ($$payload3) => {
        const each_array = ensure_array_like(menutree2);
        $$payload3.out += `<!--[-->`;
        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
          let menu = each_array[i];
          Dropdown($$payload3, {
            children: ($$payload4) => {
              DropdownToggle($$payload4, {
                nav: true,
                caret: true,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(menu.top)}`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownMenu($$payload4, {
                children: ($$payload5) => {
                  const each_array_1 = ensure_array_like(menu.dropdown);
                  $$payload5.out += `<!--[-->`;
                  for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                    let item = each_array_1[$$index];
                    if (item.label == "---") {
                      $$payload5.out += "<!--[-->";
                      DropdownItem($$payload5, { divider: true });
                    } else {
                      $$payload5.out += "<!--[!-->";
                      DropdownItem($$payload5, {
                        href: item.href || "#",
                        children: ($$payload6) => {
                          $$payload6.out += `<!---->${escape_html(item.label)}`;
                        },
                        $$slots: { default: true }
                      });
                    }
                    $$payload5.out += `<!--]-->`;
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
  }
  Styles($$payload, {});
  $$payload.out += `<!----> <div class="navbar-container svelte-yysahq">`;
  Navbar($$payload, {
    color: "light",
    light: true,
    container: "lg",
    expand: "md",
    children: ($$payload2) => {
      NavbarBrand($$payload2, {
        href: "/",
        children: ($$payload3) => {
          $$payload3.out += `<img${attr("src", brand2.brandImgLink)}${attr("alt", brand2.brandName)}/>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="hidden lg:block">`;
      nav($$payload2);
      $$payload2.out += `<!----></div> <div class="lg:hidden">`;
      Dropdown($$payload2, {
        children: ($$payload3) => {
          DropdownToggle($$payload3, {
            nav: true,
            children: ($$payload4) => {
              $$payload4.out += `<svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path></svg>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownMenu($$payload3, {
            class: "gap-2",
            children: ($$payload4) => {
              nav($$payload4);
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  Container as C,
  Dropdown as D,
  Menubar as M,
  Styles as S,
  DropdownToggle as a,
  brand as b,
  classnames as c,
  DropdownMenu as d,
  DropdownItem as e,
  getColumnSizeClass as g,
  isObject as i,
  menutree as m,
  onDestroy as o
};
