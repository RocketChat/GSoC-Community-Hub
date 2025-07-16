import { N as sanitize_props, O as rest_props, A as push, P as fallback, Q as spread_attributes, R as clsx, S as slot, M as bind_props, E as pop } from "./index.js";
import { i as isObject, g as getColumnSizeClass, c as classnames } from "./Menubar.js";
function Col($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "xs", "sm", "md", "lg", "xl", "xxl"]);
  push();
  let className = fallback($$props["class"], "");
  let xs = fallback($$props["xs"], void 0);
  let sm = fallback($$props["sm"], void 0);
  let md = fallback($$props["md"], void 0);
  let lg = fallback($$props["lg"], void 0);
  let xl = fallback($$props["xl"], void 0);
  let xxl = fallback($$props["xxl"], void 0);
  const colClasses = [];
  const lookup = { xs, sm, md, lg, xl, xxl };
  Object.keys(lookup).forEach((colWidth) => {
    const columnProp = lookup[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    const isXs = colWidth === "xs";
    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      if (columnProp.size || columnProp.size === "") {
        colClasses.push(colClass);
      }
      if (columnProp.push) {
        colClasses.push(`push${colSizeInterfix}${columnProp.push}`);
      }
      if (columnProp.pull) {
        colClasses.push(`pull${colSizeInterfix}${columnProp.pull}`);
      }
      if (columnProp.offset) {
        colClasses.push(`offset${colSizeInterfix}${columnProp.offset}`);
      }
      if (columnProp.order) {
        colClasses.push(`order${colSizeInterfix}${columnProp.order}`);
      }
    } else {
      colClasses.push(getColumnSizeClass(isXs, colWidth, columnProp));
    }
  });
  if (!colClasses.length) {
    colClasses.push("col");
  }
  if (className) {
    colClasses.push(className);
  }
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: clsx(colClasses.join(" ")) })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className, xs, sm, md, lg, xl, xxl });
  pop();
}
function Row($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "noGutters", "form", "cols", "inner"]);
  push();
  let classes;
  let className = fallback($$props["class"], "");
  let noGutters = fallback($$props["noGutters"], false);
  let form = fallback($$props["form"], false);
  let cols = fallback($$props["cols"], 0);
  let inner = fallback($$props["inner"], void 0);
  function getCols(cols2) {
    const colsValue = parseInt(cols2);
    if (!isNaN(colsValue)) {
      if (colsValue > 0) {
        return [`row-cols-${colsValue}`];
      }
    } else if (typeof cols2 === "object") {
      return ["xs", "sm", "md", "lg", "xl"].map((colWidth) => {
        const isXs = colWidth === "xs";
        const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
        const value = cols2[colWidth];
        if (typeof value === "number" && value > 0) {
          return `row-cols${colSizeInterfix}${value}`;
        }
        return null;
      }).filter((value) => !!value);
    }
    return [];
  }
  classes = classnames(className, noGutters ? "gx-0" : null, form ? "form-row" : "row", ...getCols(cols));
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: clsx(classes) })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { class: className, noGutters, form, cols, inner });
  pop();
}
export {
  Col as C,
  Row as R
};
