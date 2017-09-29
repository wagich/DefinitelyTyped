// Type definitions for Tooltip.js
// Project: https://popper.js.org/tooltip-documentation.html
// Definitions by: Michael Wagner <https://github.com/wagich>

/// <reference types="popper.js" />
/// <reference types="jquery" />

export as namespace Tooltip;
export = Tooltip;

declare class Tooltip {
	/**
	 * Create a new Tooltip.js instance
	 * @param reference The DOM node used as reference of the tooltip (it can be a jQuery element).
	 * @param options
	 */
    constructor(reference: Element | JQuery, options?: Tooltip.TooltipOptions);

	/**
	 * Reveals an element’s tooltip. This is considered a "manual" triggering of the tooltip.
	 * Tooltips with zero-length titles are never displayed.
	 */
    show(): void;

	/**
	 * Hides an element’s tooltip. This is considered a "manual" triggering of the tooltip.
	 */
    hide(): void;

	/**
	 * Hides and destroys an element’s tooltip.
	 */
    dispose(): void;

	/**
	 * Toggles an element’s tooltip. This is considered a "manual" triggering of the tooltip.
	 */
    toggle(): void;
}

declare namespace Tooltip {
    export interface TooltipOptions {
        /**
         * Placement of the popper .
         */
        placement?: TooltipPlacement | ((this: Tooltip) => TooltipPlacement);

		/**
         * Append the tooltip to a specific element.
		 *
		 * The default is false.
         */
        container?: Element | string | false;

		/**
		 * Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
		 * If a number is supplied, delay is applied to both hide/show.
		 *
		 * The default value is 0ms.
		 */
        delay?: number | { show: number, hide: number };

		/**
		 * Insert HTML into the tooltip. If false, the content will inserted with innerText.
		 */
        html?: boolean;

		/**
		 * Base HTML to used when creating the tooltip. The tooltip’s title will be injected
		 * into the .tooltip-inner or .tooltip__inner. .tooltip-arrow or .tooltip__arrow will
		 * become the tooltip’s arrow. The outermost wrapper element should have the .tooltip
		 * class.
		 */
        template?: string;

		/**
		 * Default title value if title attribute isn’t present.
		 * 
		 * Defaults to an empty string.
		 */
        title?: string | Element | ((this: Tooltip) => string);

		/**
		 * How tooltip is triggered - click, hover, focus, manual. @see {@link TooltipTrigger} You may pass multiple triggers;
		 * separate them with a space. "manual" cannot be combined with any other trigger.
		 * 
		 * Defaults to "hover focus".
		 */
        trigger?: string;

		/**
		 * The element used as boundaries for the tooltip.
		 * For more information refer to Popper.js' boundariesElement docs at https://popper.js.org/popper-documentation.html
		 */
        boundariesElement?: Element;

		/**
		 * Offset of the tooltip relative to its reference.
		 * For more information refer to Popper.js' offset docs at https://popper.js.org/popper-documentation.html
		 * 
		 * Defaults to 0.
		 */
        offset?: number | string;

		/**
		 * Popper options, will be passed directly to popper instance.
		 * For more information refer to Popper.js' options docs at https://popper.js.org/popper-documentation.html
		 */
        popperOptions?: Popper.PopperOptions;
    }

	/**
	 * Values for @see {@link Tooltip.TooltipOptions.placement}.
	 */
	export type TooltipPlacement = 
		"auto" | "auto-right" | "auto-left" | "auto-top" | "auto-bottom"
		| "top" | "top-start" | "top-end"
		| "right" | "right-start" | "right-end"
		| "bottom" | "bottom-start" | "bottom-end"
		| "left" | "left-start" | "left-end";

	/**
	 * Values for @see {@link Tooltip.TooltipOptions.trigger}.
	 */
	export type TooltipTrigger = "click" | "hover" | "focus" | "manual";
}
