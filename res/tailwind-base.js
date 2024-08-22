// Auto-generated by @daldalso/tailwind-base
 
import pluginUtils from "tailwindcss/lib/util/pluginUtils.js";
const d = (type) => [(value) => Boolean(pluginUtils.typeMap[type](value))];
const k = { "size": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96", "auto", "px", "0.5", "1.5", "2.5", "3.5", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12", "full", "min", "max", "fit"], "inset": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96", "auto", "px", "0.5", "1.5", "2.5", "3.5", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "full"], "translate": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96", "px", "0.5", "1.5", "2.5", "3.5", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "full"], "spacing": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96", "px", "0.5", "1.5", "2.5", "3.5"], "colors": ["black", "white", "gray+5", "gray+4", "gray+3", "gray+2", "gray+1", "gray", "gray-1", "gray-2", "gray-3", "gray-4", "gray-5", "red+5", "red+4", "red+3", "red+2", "red+1", "red", "red-1", "red-2", "red-3", "red-4", "red-5", "green+5", "green+4", "green+3", "green+2", "green+1", "green", "green-1", "green-2", "green-3", "green-4", "green-5", "blue+5", "blue+4", "blue+3", "blue+2", "blue+1", "blue", "blue-1", "blue-2", "blue-3", "blue-4", "blue-5", "yellow+5", "yellow+4", "yellow+3", "yellow+2", "yellow+1", "yellow", "yellow-1", "yellow-2", "yellow-3", "yellow-4", "yellow-5", "orange+5", "orange+4", "orange+3", "orange+2", "orange+1", "orange", "orange-1", "orange-2", "orange-3", "orange-4", "orange-5", "purple+5", "purple+4", "purple+3", "purple+2", "purple+1", "purple", "purple-1", "purple-2", "purple-3", "purple-4", "purple-5", "pink+5", "pink+4", "pink+3", "pink+2", "pink+1", "pink", "pink-1", "pink-2", "pink-3", "pink-4", "pink-5"], "opacity": ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100"], "borderRadius": ["none", "sm", "DEFAULT", "md", "lg", "xl", "2xl", "3xl", "full"], "borderWidth": ["0", "2", "4", "8", "DEFAULT"], "gridRow": ["auto", "span-1", "span-2", "span-3", "span-4", "span-5", "span-6", "span-7", "span-8", "span-9", "span-10", "span-11", "span-12", "span-full"], "gridRowStart": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "auto"] };
export default {
    cacheSize: 0,
    classGroups: [
        ["container"],
        ["sr-only"],
        ["not-sr-only"],
        ["pointer-events-auto", "pointer-events-none"],
        ["collapse", "invisible", "visible"],
        ["sticky", "relative", "absolute", "fixed", "static"],
        [{ "inset": d('any') }, { "inset": k.inset, "-inset": k.inset }],
        [{ "inset-x": d('any') }, { "inset-x": k.inset, "-inset-x": k.inset }],
        [{ "inset-y": d('any') }, { "inset-y": k.inset, "-inset-y": k.inset }],
        [{ "start": d('any') }, { "start": k.inset, "-start": k.inset }],
        [{ "end": d('any') }, { "end": k.inset, "-end": k.inset }],
        [{ "top": d('any') }, { "top": k.inset, "-top": k.inset }],
        [{ "right": d('any') }, { "right": k.inset, "-right": k.inset }],
        [{ "bottom": d('any') }, { "bottom": k.inset, "-bottom": k.inset }],
        [{ "left": d('any') }, { "left": k.inset, "-left": k.inset }],
        ["isolation-auto", "isolate"],
        [{ "z": d('any') }, "z-0", "-z-0", "z-10", "-z-10", "z-20", "-z-20", "z-30", "-z-30", "z-40", "-z-40", "z-50", "-z-50", "z-auto", "-z-auto"],
        [{ "order": d('any') }, "order-1", "-order-1", "order-2", "-order-2", "order-3", "-order-3", "order-4", "-order-4", "order-5", "-order-5", "order-6", "-order-6", "order-7", "-order-7", "order-8", "-order-8", "order-9", "-order-9", "order-10", "-order-10", "order-11", "-order-11", "order-12", "-order-12", "order-first", "-order-first", "order-last", "-order-last", "order-none", "-order-none"],
        [{ "col": d('any') }, { "col": k.gridRow }],
        [{ "col-start": d('any') }, { "col-start": k.gridRowStart, "-col-start": k.gridRowStart }],
        [{ "col-end": d('any') }, { "col-end": k.gridRowStart, "-col-end": k.gridRowStart }],
        [{ "row": d('any') }, { "row": k.gridRow }],
        [{ "row-start": d('any') }, { "row-start": k.gridRowStart, "-row-start": k.gridRowStart }],
        [{ "row-end": d('any') }, { "row-end": k.gridRowStart, "-row-end": k.gridRowStart }],
        ["float-none", "float-left", "float-right", "float-end", "float-start"],
        ["clear-none", "clear-both", "clear-right", "clear-left", "clear-end", "clear-start"],
        [{ "m": d('any') }, "m-auto", "-m-auto", { "m": k.spacing, "-m": k.spacing }],
        [{ "mx": d('any') }, "mx-auto", "-mx-auto", { "mx": k.spacing, "-mx": k.spacing }],
        [{ "my": d('any') }, "my-auto", "-my-auto", { "my": k.spacing, "-my": k.spacing }],
        [{ "ms": d('any') }, "ms-auto", "-ms-auto", { "ms": k.spacing, "-ms": k.spacing }],
        [{ "me": d('any') }, "me-auto", "-me-auto", { "me": k.spacing, "-me": k.spacing }],
        [{ "mt": d('any') }, "mt-auto", "-mt-auto", { "mt": k.spacing, "-mt": k.spacing }],
        [{ "mr": d('any') }, "mr-auto", "-mr-auto", { "mr": k.spacing, "-mr": k.spacing }],
        [{ "mb": d('any') }, "mb-auto", "-mb-auto", { "mb": k.spacing, "-mb": k.spacing }],
        [{ "ml": d('any') }, "ml-auto", "-ml-auto", { "ml": k.spacing, "-ml": k.spacing }],
        ["box-content", "box-border"],
        [{ "line-clamp": d('any') }, "line-clamp-1", "line-clamp-2", "line-clamp-3", "line-clamp-4", "line-clamp-5", "line-clamp-6"],
        ["line-clamp-none"],
        ["hidden", "list-item", "contents", "inline-grid", "grid", "flow-root", "table-row", "table-row-group", "table-header-group", "table-footer-group", "table-column-group", "table-column", "table-cell", "table-caption", "inline-table", "table", "inline-flex", "flex", "inline", "inline-block", "block"],
        [{ "flex": d('any') }, "flex-1", "flex-auto", "flex-initial", "flex-none"],
        [{ "aspect": d('any') }, "aspect-auto", "aspect-square", "aspect-video"],
        [{ "size": d('any') }, { "size": k.size }],
        [{ "h": d('any') }, "h-1/5", "h-2/5", "h-3/5", "h-4/5", "h-1/6", "h-2/6", "h-3/6", "h-4/6", "h-5/6", "h-screen", "h-svh", "h-lvh", "h-dvh", "h-min", "h-max", "h-fit", { "h": k.inset }],
        [{ "max-h": d('any') }, "max-h-none", "max-h-full", "max-h-screen", "max-h-svh", "max-h-lvh", "max-h-dvh", "max-h-min", "max-h-max", "max-h-fit", { "max-h": k.spacing }],
        [{ "min-h": d('any') }, "min-h-full", "min-h-screen", "min-h-svh", "min-h-lvh", "min-h-dvh", "min-h-min", "min-h-max", "min-h-fit", { "min-h": k.spacing }],
        [{ "w": d('any') }, "w-screen", "w-svw", "w-lvw", "w-dvw", { "w": k.size }],
        [{ "min-w": d('any') }, "min-w-full", "min-w-min", "min-w-max", "min-w-fit", { "min-w": k.spacing }],
        [{ "max-w": d('any') }, "max-w-none", "max-w-xs", "max-w-sm", "max-w-md", "max-w-lg", "max-w-xl", "max-w-2xl", "max-w-3xl", "max-w-4xl", "max-w-5xl", "max-w-6xl", "max-w-7xl", "max-w-full", "max-w-min", "max-w-max", "max-w-fit", "max-w-prose", "max-w-screen-sm", "max-w-screen-md", "max-w-screen-lg", "max-w-screen-xl", "max-w-screen-2xl", { "max-w": k.spacing }],
        [{ "flex-shrink": d('any') }, "flex-shrink-0", "flex-shrink"],
        [{ "shrink": d('any') }, "shrink-0", "shrink"],
        [{ "flex-grow": d('any') }, "flex-grow-0", "flex-grow"],
        [{ "grow": d('any') }, "grow-0", "grow"],
        [{ "basis": d('any') }, "basis-1/5", "basis-2/5", "basis-3/5", "basis-4/5", "basis-1/6", "basis-2/6", "basis-3/6", "basis-4/6", "basis-5/6", "basis-1/12", "basis-2/12", "basis-3/12", "basis-4/12", "basis-5/12", "basis-6/12", "basis-7/12", "basis-8/12", "basis-9/12", "basis-10/12", "basis-11/12", { "basis": k.inset }],
        ["table-fixed", "table-auto"],
        ["caption-bottom", "caption-top"],
        ["border-separate", "border-collapse"],
        [{ "border-spacing": d('any') }, { "border-spacing": k.spacing }],
        [{ "border-spacing-x": d('any') }, { "border-spacing-x": k.spacing }],
        [{ "border-spacing-y": d('any') }, { "border-spacing-y": k.spacing }],
        [{ "origin": d('any') }, "origin-center", "origin-top", "origin-top-right", "origin-right", "origin-bottom-right", "origin-bottom", "origin-bottom-left", "origin-left", "origin-top-left"],
        [{ "translate-x": d('any') }, { "translate-x": k.translate, "-translate-x": k.translate }],
        [{ "translate-y": d('any') }, { "translate-y": k.translate, "-translate-y": k.translate }],
        [{ "rotate": d('any') }, "rotate-0", "-rotate-0", "rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-3", "-rotate-3", "rotate-6", "-rotate-6", "rotate-12", "-rotate-12", "rotate-45", "-rotate-45", "rotate-90", "-rotate-90", "rotate-180", "-rotate-180"],
        [{ "skew-x": d('any') }, "skew-x-0", "-skew-x-0", "skew-x-1", "-skew-x-1", "skew-x-2", "-skew-x-2", "skew-x-3", "-skew-x-3", "skew-x-6", "-skew-x-6", "skew-x-12", "-skew-x-12"],
        [{ "skew-y": d('any') }, "skew-y-0", "-skew-y-0", "skew-y-1", "-skew-y-1", "skew-y-2", "-skew-y-2", "skew-y-3", "-skew-y-3", "skew-y-6", "-skew-y-6", "skew-y-12", "-skew-y-12"],
        [{ "scale": d('any') }, "scale-0", "-scale-0", "scale-50", "-scale-50", "scale-75", "-scale-75", "scale-90", "-scale-90", "scale-95", "-scale-95", "scale-100", "-scale-100", "scale-105", "-scale-105", "scale-110", "-scale-110", "scale-125", "-scale-125", "scale-150", "-scale-150"],
        [{ "scale-x": d('any') }, "scale-x-0", "-scale-x-0", "scale-x-50", "-scale-x-50", "scale-x-75", "-scale-x-75", "scale-x-90", "-scale-x-90", "scale-x-95", "-scale-x-95", "scale-x-100", "-scale-x-100", "scale-x-105", "-scale-x-105", "scale-x-110", "-scale-x-110", "scale-x-125", "-scale-x-125", "scale-x-150", "-scale-x-150"],
        [{ "scale-y": d('any') }, "scale-y-0", "-scale-y-0", "scale-y-50", "-scale-y-50", "scale-y-75", "-scale-y-75", "scale-y-90", "-scale-y-90", "scale-y-95", "-scale-y-95", "scale-y-100", "-scale-y-100", "scale-y-105", "-scale-y-105", "scale-y-110", "-scale-y-110", "scale-y-125", "-scale-y-125", "scale-y-150", "-scale-y-150"],
        ["transform-none", "transform-gpu", "transform-cpu", "transform"],
        [{ "animate": d('any') }, "animate-none", "animate-spin", "animate-ping", "animate-pulse", "animate-bounce"],
        [{ "cursor": d('any') }, "cursor-auto", "cursor-default", "cursor-pointer", "cursor-wait", "cursor-text", "cursor-move", "cursor-help", "cursor-not-allowed", "cursor-none", "cursor-context-menu", "cursor-progress", "cursor-cell", "cursor-crosshair", "cursor-vertical-text", "cursor-alias", "cursor-copy", "cursor-no-drop", "cursor-grab", "cursor-grabbing", "cursor-all-scroll", "cursor-col-resize", "cursor-row-resize", "cursor-n-resize", "cursor-e-resize", "cursor-s-resize", "cursor-w-resize", "cursor-ne-resize", "cursor-nw-resize", "cursor-se-resize", "cursor-sw-resize", "cursor-ew-resize", "cursor-ns-resize", "cursor-nesw-resize", "cursor-nwse-resize", "cursor-zoom-in", "cursor-zoom-out"],
        ["touch-manipulation", "touch-none", "touch-auto"],
        ["touch-pan-right", "touch-pan-left", "touch-pan-x"],
        ["touch-pan-down", "touch-pan-up", "touch-pan-y"],
        ["touch-pinch-zoom"],
        ["select-auto", "select-all", "select-text", "select-none"],
        ["resize", "resize-x", "resize-y", "resize-none"],
        ["snap-both", "snap-y", "snap-x", "snap-none"],
        ["snap-proximity", "snap-mandatory"],
        ["snap-align-none", "snap-center", "snap-end", "snap-start"],
        ["snap-always", "snap-normal"],
        [{ "scroll-m": d('any') }, { "scroll-m": k.spacing, "-scroll-m": k.spacing }],
        [{ "scroll-mx": d('any') }, { "scroll-mx": k.spacing, "-scroll-mx": k.spacing }],
        [{ "scroll-my": d('any') }, { "scroll-my": k.spacing, "-scroll-my": k.spacing }],
        [{ "scroll-ms": d('any') }, { "scroll-ms": k.spacing, "-scroll-ms": k.spacing }],
        [{ "scroll-me": d('any') }, { "scroll-me": k.spacing, "-scroll-me": k.spacing }],
        [{ "scroll-mt": d('any') }, { "scroll-mt": k.spacing, "-scroll-mt": k.spacing }],
        [{ "scroll-mr": d('any') }, { "scroll-mr": k.spacing, "-scroll-mr": k.spacing }],
        [{ "scroll-mb": d('any') }, { "scroll-mb": k.spacing, "-scroll-mb": k.spacing }],
        [{ "scroll-ml": d('any') }, { "scroll-ml": k.spacing, "-scroll-ml": k.spacing }],
        [{ "scroll-p": d('any') }, { "scroll-p": k.spacing }],
        [{ "scroll-px": d('any') }, { "scroll-px": k.spacing }],
        [{ "scroll-py": d('any') }, { "scroll-py": k.spacing }],
        [{ "scroll-ps": d('any') }, { "scroll-ps": k.spacing }],
        [{ "scroll-pe": d('any') }, { "scroll-pe": k.spacing }],
        [{ "scroll-pt": d('any') }, { "scroll-pt": k.spacing }],
        [{ "scroll-pr": d('any') }, { "scroll-pr": k.spacing }],
        [{ "scroll-pb": d('any') }, { "scroll-pb": k.spacing }],
        [{ "scroll-pl": d('any') }, { "scroll-pl": k.spacing }],
        ["list-outside", "list-inside"],
        [{ "list": d('any') }, "list-none", "list-disc", "list-decimal"],
        [{ "list-image": d('any') }, "list-image-none"],
        ["appearance-auto", "appearance-none"],
        [{ "columns": d('any') }, "columns-1", "columns-2", "columns-3", "columns-4", "columns-5", "columns-6", "columns-7", "columns-8", "columns-9", "columns-10", "columns-11", "columns-12", "columns-auto", "columns-3xs", "columns-2xs", "columns-xs", "columns-sm", "columns-md", "columns-lg", "columns-xl", "columns-2xl", "columns-3xl", "columns-4xl", "columns-5xl", "columns-6xl", "columns-7xl"],
        ["break-before-column", "break-before-right", "break-before-left", "break-before-page", "break-before-avoid-page", "break-before-all", "break-before-avoid", "break-before-auto"],
        ["break-inside-avoid-column", "break-inside-avoid-page", "break-inside-avoid", "break-inside-auto"],
        ["break-after-column", "break-after-right", "break-after-left", "break-after-page", "break-after-avoid-page", "break-after-all", "break-after-avoid", "break-after-auto"],
        [{ "auto-cols": d('any') }, "auto-cols-auto", "auto-cols-min", "auto-cols-max", "auto-cols-fr"],
        ["grid-flow-col-dense", "grid-flow-row-dense", "grid-flow-dense", "grid-flow-col", "grid-flow-row"],
        [{ "auto-rows": d('any') }, "auto-rows-auto", "auto-rows-min", "auto-rows-max", "auto-rows-fr"],
        [{ "grid-cols": d('any') }, "grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-5", "grid-cols-6", "grid-cols-7", "grid-cols-8", "grid-cols-9", "grid-cols-10", "grid-cols-11", "grid-cols-12", "grid-cols-none", "grid-cols-subgrid"],
        [{ "grid-rows": d('any') }, "grid-rows-1", "grid-rows-2", "grid-rows-3", "grid-rows-4", "grid-rows-5", "grid-rows-6", "grid-rows-7", "grid-rows-8", "grid-rows-9", "grid-rows-10", "grid-rows-11", "grid-rows-12", "grid-rows-none", "grid-rows-subgrid"],
        ["flex-col-reverse", "flex-col", "flex-row-reverse", "flex-row"],
        ["flex-nowrap", "flex-wrap-reverse", "flex-wrap"],
        ["place-content-stretch", "place-content-baseline", "place-content-evenly", "place-content-around", "place-content-between", "place-content-end", "place-content-start", "place-content-center"],
        ["place-items-stretch", "place-items-baseline", "place-items-center", "place-items-end", "place-items-start"],
        ["content-stretch", "content-baseline", "content-evenly", "content-around", "content-between", "content-end", "content-start", "content-center", "content-normal"],
        ["items-stretch", "items-baseline", "items-center", "items-end", "items-start"],
        ["justify-stretch", "justify-evenly", "justify-around", "justify-between", "justify-center", "justify-end", "justify-start", "justify-normal"],
        ["justify-items-stretch", "justify-items-center", "justify-items-end", "justify-items-start"],
        [{ "gap": d('any') }, { "gap": k.spacing }],
        [{ "gap-x": d('any') }, { "gap-x": k.spacing }],
        [{ "gap-y": d('any') }, { "gap-y": k.spacing }],
        [{ "space-x": d('any') }, { "space-x": k.spacing, "-space-x": k.spacing }],
        [{ "space-y": d('any') }, { "space-y": k.spacing, "-space-y": k.spacing }],
        ["space-y-reverse"],
        ["space-x-reverse"],
        [{ "divide-x": d('line-width') }, { "divide-x": d('length') }, { "divide-x": d('any') }, { "divide-x": k.borderWidth }],
        [{ "divide-y": d('line-width') }, { "divide-y": d('length') }, { "divide-y": d('any') }, { "divide-y": k.borderWidth }],
        ["divide-y-reverse"],
        ["divide-x-reverse"],
        ["border-none", "border-hidden", "border-double", "border-dotted", "border-dashed", "border-solid", "divide-none", "divide-double", "divide-dotted", "divide-dashed", "divide-solid"],
        [{ "divide": d('color') }, { "divide": d('any') }, { "divide": k.colors }],
        [{ "divide-opacity": d('any') }, { "divide-opacity": k.opacity }],
        ["place-self-stretch", "place-self-center", "place-self-end", "place-self-start", "place-self-auto"],
        ["self-baseline", "self-stretch", "self-center", "self-end", "self-start", "self-auto"],
        ["justify-self-stretch", "justify-self-center", "justify-self-end", "justify-self-start", "justify-self-auto"],
        ["overflow-scroll", "overflow-visible", "overflow-clip", "overflow-hidden", "overflow-auto"],
        ["overflow-x-scroll", "overflow-x-visible", "overflow-x-clip", "overflow-x-hidden", "overflow-x-auto"],
        ["overflow-y-scroll", "overflow-y-visible", "overflow-y-clip", "overflow-y-hidden", "overflow-y-auto"],
        ["overscroll-none", "overscroll-contain", "overscroll-auto"],
        ["overscroll-y-none", "overscroll-y-contain", "overscroll-y-auto"],
        ["overscroll-x-none", "overscroll-x-contain", "overscroll-x-auto"],
        ["scroll-smooth", "scroll-auto"],
        ["truncate"],
        ["text-clip", "text-ellipsis", "overflow-ellipsis"],
        ["hyphens-auto", "hyphens-manual", "hyphens-none"],
        ["whitespace-break-spaces", "whitespace-pre-wrap", "whitespace-pre-line", "whitespace-pre", "whitespace-nowrap", "whitespace-normal"],
        ["text-pretty", "text-balance", "text-nowrap", "text-wrap"],
        ["break-normal"],
        ["break-words"],
        ["break-keep", "break-all"],
        [{ "rounded": d('any') }, { "rounded": k.borderRadius }],
        [{ "rounded-s": d('any') }, { "rounded-s": k.borderRadius }],
        [{ "rounded-e": d('any') }, { "rounded-e": k.borderRadius }],
        [{ "rounded-t": d('any') }, { "rounded-t": k.borderRadius }],
        [{ "rounded-r": d('any') }, { "rounded-r": k.borderRadius }],
        [{ "rounded-b": d('any') }, { "rounded-b": k.borderRadius }],
        [{ "rounded-l": d('any') }, { "rounded-l": k.borderRadius }],
        [{ "rounded-ss": d('any') }, { "rounded-ss": k.borderRadius }],
        [{ "rounded-se": d('any') }, { "rounded-se": k.borderRadius }],
        [{ "rounded-ee": d('any') }, { "rounded-ee": k.borderRadius }],
        [{ "rounded-es": d('any') }, { "rounded-es": k.borderRadius }],
        [{ "rounded-tl": d('any') }, { "rounded-tl": k.borderRadius }],
        [{ "rounded-tr": d('any') }, { "rounded-tr": k.borderRadius }],
        [{ "rounded-br": d('any') }, { "rounded-br": k.borderRadius }],
        [{ "rounded-bl": d('any') }, { "rounded-bl": k.borderRadius }],
        [{ "border": d('line-width') }, { "border": d('length') }, { "border": k.borderWidth }],
        [{ "border": d('color') }, { "border": d('any') }, { "border": k.colors }],
        [{ "border-x": d('line-width') }, { "border-x": d('length') }, { "border-x": k.borderWidth }],
        [{ "border-x": d('color') }, { "border-x": d('any') }, { "border-x": k.colors }],
        [{ "border-y": d('line-width') }, { "border-y": d('length') }, { "border-y": k.borderWidth }],
        [{ "border-y": d('color') }, { "border-y": d('any') }, { "border-y": k.colors }],
        [{ "border-s": d('line-width') }, { "border-s": d('length') }, { "border-s": k.borderWidth }],
        [{ "border-s": d('color') }, { "border-s": d('any') }, { "border-s": k.colors }],
        [{ "border-e": d('line-width') }, { "border-e": d('length') }, { "border-e": k.borderWidth }],
        [{ "border-e": d('color') }, { "border-e": d('any') }, { "border-e": k.colors }],
        [{ "border-t": d('line-width') }, { "border-t": d('length') }, { "border-t": k.borderWidth }],
        [{ "border-t": d('color') }, { "border-t": d('any') }, { "border-t": k.colors }],
        [{ "border-r": d('line-width') }, { "border-r": d('length') }, { "border-r": k.borderWidth }],
        [{ "border-r": d('color') }, { "border-r": d('any') }, { "border-r": k.colors }],
        [{ "border-b": d('line-width') }, { "border-b": d('length') }, { "border-b": k.borderWidth }],
        [{ "border-b": d('color') }, { "border-b": d('any') }, { "border-b": k.colors }],
        [{ "border-l": d('line-width') }, { "border-l": d('length') }, { "border-l": k.borderWidth }],
        [{ "border-l": d('color') }, { "border-l": d('any') }, { "border-l": k.colors }],
        [{ "border-opacity": d('any') }, { "border-opacity": k.opacity }],
        [{ "bg": d('color') }, { "bg": d('any') }, { "bg": k.colors }],
        [{ "bg": d('lookup') }, { "bg": d('image') }, { "bg": d('url') }, "bg-none", "bg-gradient-to-t", "bg-gradient-to-tr", "bg-gradient-to-r", "bg-gradient-to-br", "bg-gradient-to-b", "bg-gradient-to-bl", "bg-gradient-to-l", "bg-gradient-to-tl"],
        [{ "bg": d('lookup') }, { "bg": d('length') }, { "bg": d('percentage') }, { "bg": d('size') }, "bg-auto", "bg-cover", "bg-contain"],
        [{ "bg": d('lookup') }, { "bg": d('position') }, "bg-bottom", "bg-center", "bg-left", "bg-left-bottom", "bg-left-top", "bg-right", "bg-right-bottom", "bg-right-top", "bg-top"],
        [{ "bg-opacity": d('any') }, { "bg-opacity": k.opacity }],
        [{ "from": d('color') }, { "from": d('any') }, { "from": k.colors }],
        [{ "from": d('length') }, { "from": d('percentage') }, "from-0%", "from-5%", "from-10%", "from-15%", "from-20%", "from-25%", "from-30%", "from-35%", "from-40%", "from-45%", "from-50%", "from-55%", "from-60%", "from-65%", "from-70%", "from-75%", "from-80%", "from-85%", "from-90%", "from-95%", "from-100%"],
        [{ "via": d('color') }, { "via": d('any') }, { "via": k.colors }],
        [{ "via": d('length') }, { "via": d('percentage') }, "via-0%", "via-5%", "via-10%", "via-15%", "via-20%", "via-25%", "via-30%", "via-35%", "via-40%", "via-45%", "via-50%", "via-55%", "via-60%", "via-65%", "via-70%", "via-75%", "via-80%", "via-85%", "via-90%", "via-95%", "via-100%"],
        [{ "to": d('color') }, { "to": d('any') }, { "to": k.colors }],
        [{ "to": d('length') }, { "to": d('percentage') }, "to-0%", "to-5%", "to-10%", "to-15%", "to-20%", "to-25%", "to-30%", "to-35%", "to-40%", "to-45%", "to-50%", "to-55%", "to-60%", "to-65%", "to-70%", "to-75%", "to-80%", "to-85%", "to-90%", "to-95%", "to-100%"],
        ["box-decoration-clone", "box-decoration-slice", "decoration-clone", "decoration-slice"],
        ["bg-scroll", "bg-local", "bg-fixed"],
        ["bg-clip-text", "bg-clip-content", "bg-clip-padding", "bg-clip-border"],
        ["bg-repeat-space", "bg-repeat-round", "bg-repeat-y", "bg-repeat-x", "bg-no-repeat", "bg-repeat"],
        ["bg-origin-content", "bg-origin-padding", "bg-origin-border"],
        [{ "fill": d('color') }, { "fill": d('any') }, "fill-none", { "fill": k.colors }],
        [{ "stroke": d('color') }, { "stroke": d('url') }, { "stroke": d('any') }, "stroke-none", { "stroke": k.colors }],
        [{ "stroke": d('length') }, { "stroke": d('number') }, { "stroke": d('percentage') }, "stroke-0", "stroke-1", "stroke-2"],
        ["object-scale-down", "object-none", "object-fill", "object-cover", "object-contain"],
        [{ "object": d('any') }, "object-bottom", "object-center", "object-left", "object-left-bottom", "object-left-top", "object-right", "object-right-bottom", "object-right-top", "object-top"],
        [{ "p": d('any') }, { "p": k.spacing }],
        [{ "px": d('any') }, { "px": k.spacing }],
        [{ "py": d('any') }, { "py": k.spacing }],
        [{ "ps": d('any') }, { "ps": k.spacing }],
        [{ "pe": d('any') }, { "pe": k.spacing }],
        [{ "pt": d('any') }, { "pt": k.spacing }],
        [{ "pr": d('any') }, { "pr": k.spacing }],
        [{ "pb": d('any') }, { "pb": k.spacing }],
        [{ "pl": d('any') }, { "pl": k.spacing }],
        ["text-end", "text-start", "text-justify", "text-right", "text-center", "text-left"],
        [{ "indent": d('any') }, { "indent": k.spacing, "-indent": k.spacing }],
        ["align-super", "align-sub", "align-text-bottom", "align-text-top", "align-bottom", "align-middle", "align-top", "align-baseline"],
        [{ "align": d('any') }],
        [{ "font": d('lookup') }, { "font": d('generic-name') }, { "font": d('family-name') }, "font-sans", "font-serif", "font-mono"],
        [{ "font": d('lookup') }, { "font": d('number') }, { "font": d('any') }, "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black"],
        [{ "text": d('absolute-size') }, { "text": d('relative-size') }, { "text": d('length') }, { "text": d('percentage') }, "text-h1", "text-h2", "text-h3", "text-h4", "text-h5", "text-b1", "text-b2", "text-b3", "text-b4", "text-b5"],
        [{ "text": d('color') }, { "text": d('any') }, { "text": k.colors }],
        ["normal-case", "capitalize", "lowercase", "uppercase"],
        ["not-italic", "italic"],
        ["normal-nums"],
        ["ordinal"],
        ["slashed-zero"],
        ["oldstyle-nums", "lining-nums"],
        ["tabular-nums", "proportional-nums"],
        ["stacked-fractions", "diagonal-fractions"],
        [{ "leading": d('any') }, "leading-3", "leading-4", "leading-5", "leading-6", "leading-7", "leading-8", "leading-9", "leading-10", "leading-none", "leading-tight", "leading-snug", "leading-normal", "leading-relaxed", "leading-loose"],
        [{ "tracking": d('any') }, "tracking-tighter", "-tracking-tighter", "tracking-tight", "-tracking-tight", "tracking-normal", "-tracking-normal", "tracking-wide", "-tracking-wide", "tracking-wider", "-tracking-wider", "tracking-widest", "-tracking-widest"],
        [{ "text-opacity": d('any') }, { "text-opacity": k.opacity }],
        ["no-underline", "line-through", "overline", "underline"],
        [{ "decoration": d('color') }, { "decoration": d('any') }, { "decoration": k.colors }],
        [{ "decoration": d('length') }, { "decoration": d('percentage') }, "decoration-0", "decoration-1", "decoration-2", "decoration-4", "decoration-8", "decoration-auto", "decoration-from-font"],
        ["decoration-wavy", "decoration-dashed", "decoration-dotted", "decoration-double", "decoration-solid"],
        [{ "underline-offset": d('length') }, { "underline-offset": d('percentage') }, { "underline-offset": d('any') }, "underline-offset-0", "underline-offset-1", "underline-offset-2", "underline-offset-4", "underline-offset-8", "underline-offset-auto"],
        ["subpixel-antialiased", "antialiased"],
        [{ "placeholder": d('color') }, { "placeholder": d('any') }, { "placeholder": k.colors }],
        [{ "placeholder-opacity": d('any') }, { "placeholder-opacity": k.opacity }],
        [{ "caret": d('color') }, { "caret": d('any') }, { "caret": k.colors }],
        [{ "accent": d('color') }, { "accent": d('any') }, "accent-auto", { "accent": k.colors }],
        [{ "opacity": d('any') }, { "opacity": k.opacity }],
        ["bg-blend-luminosity", "bg-blend-color", "bg-blend-saturation", "bg-blend-hue", "bg-blend-exclusion", "bg-blend-difference", "bg-blend-soft-light", "bg-blend-hard-light", "bg-blend-color-burn", "bg-blend-color-dodge", "bg-blend-lighten", "bg-blend-darken", "bg-blend-overlay", "bg-blend-screen", "bg-blend-multiply", "bg-blend-normal"],
        ["mix-blend-plus-lighter", "mix-blend-plus-darker", "mix-blend-luminosity", "mix-blend-color", "mix-blend-saturation", "mix-blend-hue", "mix-blend-exclusion", "mix-blend-difference", "mix-blend-soft-light", "mix-blend-hard-light", "mix-blend-color-burn", "mix-blend-color-dodge", "mix-blend-lighten", "mix-blend-darken", "mix-blend-overlay", "mix-blend-screen", "mix-blend-multiply", "mix-blend-normal"],
        [{ "shadow": d('shadow') }, "shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl", "shadow-inner", "shadow-none"],
        [{ "shadow": d('color') }, { "shadow": d('any') }, { "shadow": k.colors }],
        ["outline-none"],
        ["outline-double", "outline-dotted", "outline-dashed", "outline"],
        [{ "outline": d('length') }, { "outline": d('number') }, { "outline": d('percentage') }, "outline-0", "outline-1", "outline-2", "outline-4", "outline-8"],
        [{ "outline": d('color') }, { "outline": d('any') }, { "outline": k.colors }],
        [{ "outline-offset": d('length') }, { "outline-offset": d('number') }, { "outline-offset": d('percentage') }, { "outline-offset": d('any') }, "outline-offset-0", "-outline-offset-0", "outline-offset-1", "-outline-offset-1", "outline-offset-2", "-outline-offset-2", "outline-offset-4", "-outline-offset-4", "outline-offset-8", "-outline-offset-8"],
        [{ "ring": d('length') }, "ring-1", { "ring": k.borderWidth }],
        [{ "ring": d('color') }, { "ring": d('any') }, { "ring": k.colors }],
        ["ring-inset"],
        [{ "ring-opacity": d('any') }, { "ring-opacity": k.opacity }],
        [{ "ring-offset": d('length') }, "ring-offset-0", "ring-offset-1", "ring-offset-2", "ring-offset-4", "ring-offset-8"],
        [{ "ring-offset": d('color') }, { "ring-offset": d('any') }, { "ring-offset": k.colors }],
        [{ "blur": d('any') }, "blur-0", "blur-none", "blur-sm", "blur", "blur-md", "blur-lg", "blur-xl", "blur-2xl", "blur-3xl"],
        [{ "brightness": d('any') }, "brightness-0", "brightness-50", "brightness-75", "brightness-90", "brightness-95", "brightness-100", "brightness-105", "brightness-110", "brightness-125", "brightness-150", "brightness-200"],
        [{ "contrast": d('any') }, "contrast-0", "contrast-50", "contrast-75", "contrast-100", "contrast-125", "contrast-150", "contrast-200"],
        [{ "drop-shadow": d('any') }, "drop-shadow-sm", "drop-shadow", "drop-shadow-md", "drop-shadow-lg", "drop-shadow-xl", "drop-shadow-2xl", "drop-shadow-none"],
        [{ "grayscale": d('any') }, "grayscale-0", "grayscale"],
        [{ "hue-rotate": d('any') }, "hue-rotate-0", "-hue-rotate-0", "hue-rotate-15", "-hue-rotate-15", "hue-rotate-30", "-hue-rotate-30", "hue-rotate-60", "-hue-rotate-60", "hue-rotate-90", "-hue-rotate-90", "hue-rotate-180", "-hue-rotate-180"],
        [{ "invert": d('any') }, "invert-0", "invert"],
        [{ "saturate": d('any') }, "saturate-0", "saturate-50", "saturate-100", "saturate-150", "saturate-200"],
        [{ "sepia": d('any') }, "sepia-0", "sepia"],
        ["filter-none", "filter"],
        [{ "backdrop-blur": d('any') }, "backdrop-blur-0", "backdrop-blur-none", "backdrop-blur-sm", "backdrop-blur", "backdrop-blur-md", "backdrop-blur-lg", "backdrop-blur-xl", "backdrop-blur-2xl", "backdrop-blur-3xl"],
        [{ "backdrop-brightness": d('any') }, "backdrop-brightness-0", "backdrop-brightness-50", "backdrop-brightness-75", "backdrop-brightness-90", "backdrop-brightness-95", "backdrop-brightness-100", "backdrop-brightness-105", "backdrop-brightness-110", "backdrop-brightness-125", "backdrop-brightness-150", "backdrop-brightness-200"],
        [{ "backdrop-contrast": d('any') }, "backdrop-contrast-0", "backdrop-contrast-50", "backdrop-contrast-75", "backdrop-contrast-100", "backdrop-contrast-125", "backdrop-contrast-150", "backdrop-contrast-200"],
        [{ "backdrop-grayscale": d('any') }, "backdrop-grayscale-0", "backdrop-grayscale"],
        [{ "backdrop-hue-rotate": d('any') }, "backdrop-hue-rotate-0", "-backdrop-hue-rotate-0", "backdrop-hue-rotate-15", "-backdrop-hue-rotate-15", "backdrop-hue-rotate-30", "-backdrop-hue-rotate-30", "backdrop-hue-rotate-60", "-backdrop-hue-rotate-60", "backdrop-hue-rotate-90", "-backdrop-hue-rotate-90", "backdrop-hue-rotate-180", "-backdrop-hue-rotate-180"],
        [{ "backdrop-invert": d('any') }, "backdrop-invert-0", "backdrop-invert"],
        [{ "backdrop-opacity": d('any') }, { "backdrop-opacity": k.opacity }],
        [{ "backdrop-saturate": d('any') }, "backdrop-saturate-0", "backdrop-saturate-50", "backdrop-saturate-100", "backdrop-saturate-150", "backdrop-saturate-200"],
        [{ "backdrop-sepia": d('any') }, "backdrop-sepia-0", "backdrop-sepia"],
        ["backdrop-filter-none", "backdrop-filter"],
        [{ "transition": d('any') }, "transition-none", "transition-all", "transition", "transition-colors", "transition-opacity", "transition-shadow", "transition-transform"],
        [{ "delay": d('any') }, "delay-0", "delay-75", "delay-100", "delay-150", "delay-200", "delay-300", "delay-500", "delay-700", "delay-1000"],
        [{ "duration": d('any') }, "duration-0", "duration-75", "duration-100", "duration-150", "duration-200", "duration-300", "duration-500", "duration-700", "duration-1000"],
        [{ "ease": d('any') }, "ease-linear", "ease-in", "ease-out", "ease-in-out"],
        [{ "will-change": d('any') }, "will-change-auto", "will-change-scroll", "will-change-contents", "will-change-transform"],
        ["contain-strict", "contain-content", "contain-none"],
        ["contain-inline-size", "contain-size"],
        ["contain-layout"],
        ["contain-paint"],
        ["contain-style"],
        [{ "content": d('any') }, "content-none"],
        ["forced-color-adjust-none", "forced-color-adjust-auto"],
        [{ "grid-cols-fit": d('any') }, { "grid-cols-fit": k.spacing }]
    ],
    conflictingClassGroups: {},
    conflictingClassGroupModifiers: {},
    separator: ":"
};