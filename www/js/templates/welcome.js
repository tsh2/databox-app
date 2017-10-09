function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function welcomeTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002Fwelcome.pug":"div.mdc-layout-grid\n\tdiv.mdc-layout-grid__inner\n\t\tdiv.mdc-layout-grid__cell--span-2-desktop\n\t\tdiv.mdc-card.mdc-layout-grid__cell.mdc-layout-grid__cell--span-8\n\t\t\tsection.mdc-card__primary\n\t\t\t\th2\n\t\t\t\t\t| Welcome to Databox\n\t\t\t\tdiv\n\t\t\t\t\t| Databox lets you take control of your personal data and IoT devices.\n\t\t\t\tdiv\n\t\t\t\t\t| Get started by:\n\t\t\t\tul\n\t\t\t\t\tli\n\t\t\t\t\t\t| Install the sensing kit driver. This will allow databox to access the sensors on this mobile phone. This driver is used by some of the demo apps.\n\t\t\t\t\tli\n\t\t\t\t\t\t| Install a driver from the&nbsp;\n\t\t\t\t\t\ta(href=\"#!\u002Fdriver\u002Fstore\")\n\t\t\t\t\t\t\t| driver store\n\t\t\t\t\t\t| .\n\t\t\t\t\tli\n\t\t\t\t\t\t| Install an app from the&nbsp;\n\t\t\t\t\t\ta(href=\"#!\u002Fdriver\u002Fapp\")\n\t\t\t\t\t\t\t| app store\n\t\t\t\t\t\t| .\n\n\t\t\t\tdiv\n\t\t\t\t\t| For more help see the&nbsp;\n\t\t\t\t\ta(href=\"https:\u002F\u002Fgithub.com\u002Fme-box\u002Fdatabox\")\n\t\t\t\t\t\t| documentation\n\t\t\t\t\t| ."};
;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__inner\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell--span-2-desktop\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card mdc-layout-grid__cell mdc-layout-grid__cell--span-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "Welcome to Databox\u003C\u002Fh2\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "Databox lets you take control of your personal data and IoT devices.\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "Get started by:\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "Install the sensing kit driver. This will allow databox to access the sensors on this mobile phone. This driver is used by some of the demo apps.\u003C\u002Fli\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "Install a driver from the&nbsp;";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Ca href=\"#!\u002Fdriver\u002Fstore\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "driver store\u003C\u002Fa\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + ".\u003C\u002Fli\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "Install an app from the&nbsp;";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Ca href=\"#!\u002Fdriver\u002Fapp\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "app store\u003C\u002Fa\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + ".\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "For more help see the&nbsp;";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fme-box\u002Fdatabox\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + "documentation\u003C\u002Fa\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome.pug";
pug_html = pug_html + ".\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}