import * as Tooltip from "tooltip.js";

var reference = document.querySelector(".my-button");
var boundary = document.querySelector(".my-boundary");

var tooltip = new Tooltip(
    reference
);
tooltip.show();
tooltip.hide();
tooltip.toggle();
tooltip.dispose();

var tooltipWithOptions = new Tooltip(
    reference,
	{
		boundariesElement: boundary,
		container: false,
		delay: 0,
		html: true,
		offset: 0,
		placement: "bottom",
		popperOptions: {},
		template: `<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`,
		title: "Tooltip",
		trigger: "hover focus"
    }
);
