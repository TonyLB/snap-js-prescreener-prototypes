var SnapAPI=function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}o.r(t),o.d(t,"SnapEstimateEntrypoint",(function(){return X}));var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputs=t,this.errors=[],this.parse()}var t,o,i;return t=e,(o=[{key:"inputs_valid",value:function(){return 0===this.errors.length}},{key:"parse",value:function(){if(this.inputs){for(var e=0,t=["household_size","monthly_job_income","monthly_non_job_income","resources"];e<t.length;e++){var o=t[e];this.handle_required_integer_input(o)}for(var n=0,i=["household_includes_elderly_or_disabled"];n<i.length;n++){var r=i[n];this.handle_required_bool_input(r)}for(var s=0,a=["dependent_care_costs","medical_expenses_for_elderly_or_disabled","court_ordered_child_support_payments","rent_or_mortgage","homeowners_insurance_and_taxes"];s<a.length;s++){var l=a[s];this.handle_optional_integer_input(l)}for(var _=0,u=["use_emergency_allotment"];_<u.length;_++){var c=u[_];this.handle_optional_bool_input(c)}return this.handle_utility_allowance_input("utility_allowance"),this.inputs}this.errors.append("No input data received.")}},{key:"handle_required_integer_input",value:function(e){var t=this.inputs[e];if(null==t)return this.errors.push("Missing required input: ".concat(e)),!1;"string"==typeof t&&(t=t.replace(/,/g,""));var o=parseInt(t);return isNaN(o)?(this.errors.push("Value for ".concat(e," is not a number.")),!1):(this.inputs[e]=o,!0)}},{key:"handle_required_bool_input",value:function(e){var t=this.inputs[e];return null==t?(this.errors.push("Missing required input: ".concat(e)),!1):"string"==typeof t?(this.inputs[e]="true"===t,!0):void 0}},{key:"handle_optional_bool_input",value:function(e){if(!(e in this.inputs))return!0;var t=this.inputs[e];if([!0,!1,null].indexOf(t)>-1)return!0;"string"==typeof t?this.inputs[e]="true"===t:this.errors.push("Unexpected value for ".concat(e))}},{key:"handle_utility_allowance_input",value:function(e){if(!(e in this.inputs))return this.inputs[e]="NONE",!0;var t=this.inputs[e];return t?["HEATING_AND_COOLING","BASIC_LIMITED_ALLOWANCE","SINGLE_UTILITY_ALLOWANCE","ELECTRICITY","GAS_AND_FUEL","PHONE","SEWAGE","TRASH","WATER","NONE"].indexOf(t)>-1||(this.errors.push("Unknown standard utility allowance: ".concat(t)),!1):(this.inputs[e]="NONE",!0)}},{key:"handle_optional_integer_input",value:function(e){if(!(e in this.inputs))return this.inputs[e]=0,!0;var t=this.inputs[e];if(null===t||""===t)return this.inputs[e]=0,!0;if("number"==typeof t)return!0;var o=parseInt(t);return isNaN(o)?(this.errors.push("Value for ".concat(e," is not a number.")),!1):(this.inputs[e]=o,!0)}}])&&n(t.prototype,o),i&&n(t,i),e}(),r={IL:{2020:{child_support_payments_treatment:"EXCLUDE",gross_income_limit_factor:1.65,resource_limit_elderly_or_disabled:null,resource_limit_elderly_or_disabled_income_twice_fpl:3500,resource_limit_non_elderly_or_disabled:null,standard_medical_deduction:!0,standard_medical_deduction_amount:200,standard_medical_deduction_ceiling:200,standard_utility_allowances:{BASIC_LIMITED_ALLOWANCE:328,HEATING_AND_COOLING:478,PHONE:30,SINGLE_UTILITY_ALLOWANCE:74},use_emergency_allotment:!0,uses_bbce:!0}},VA:{2020:{child_support_payments_treatment:"EXCLUDE",standard_medical_deduction:!0,standard_medical_deduction_amount:200,standard_medical_deduction_ceiling:235,use_emergency_allotment:!0,uses_bbce:!1,standard_utility_allowances:{HEATING_AND_COOLING:{below_four:303,four_or_more:379}}}}},s={AK:{2020:{1:286,2:286,3:286,4:286,5:286,6:300}},DEFAULT:{2020:{1:167,2:167,3:167,4:178,5:209,6:240}},GUAM:{2020:{1:336,2:336,3:336,4:357,5:418,6:479}},HI:{2020:{1:236,2:236,3:236,4:236,5:240,6:275}},IL:{2020:{1:160,2:160,3:160,4:171,5:202,6:233,7:233,8:233}},VIRGIN_ISLANDS:{2020:{1:147,2:147,3:148,4:178,5:209,6:240}}};function a(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.household_size=t.household_size}var t,o,n;return t=e,(o=[{key:"state_lookup_key",value:function(){return["AK","HI","IL","GUAM","VIRGIN_ISLANDS"].indexOf(this.state_or_territory)>-1?this.state_or_territory:"DEFAULT"}},{key:"calculate",value:function(){var e=this.state_lookup_key(),t=s[e][2020];if(0<this.household_size&&this.household_size<7)return t[this.household_size];if(7<=this.household_size)return t[6];throw new Error("Household size out of bounds (at or below zero).")}}])&&a(t.prototype,o),n&&a(t,n),e}();function _(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.household_size=t.household_size}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){var e=new l({state_or_territory:this.state_or_territory,household_size:this.household_size}).calculate();return{result:e,explanation:["Next, we need to take into account deductions. We start with a standard deduction of $".concat(e,". <a class='why why-small' href='").concat("https://fns-prod.azureedge.net/sites/default/files/media/file/FY20-Maximum-Allotments-Deductions.pdf","' target='_blank'>why?</a>")]}}}])&&_(t.prototype,o),n&&_(t,n),e}();function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.monthly_job_income=t.monthly_job_income}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){var e=Math.round(.2*this.monthly_job_income);return{result:e,explanation:["Next, we add the earned income deduction. This is equal to 20% of income from jobs or self-employment: ","","$".concat(this.monthly_job_income," x 0.2 = $").concat(e," earned income deduction")]}}}])&&c(t.prototype,o),n&&c(t,n),e}();function h(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dependent_care_costs=t.dependent_care_costs}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){var e=["Next, we deduct dependent care costs: $".concat(this.dependent_care_costs,".")];return{result:this.dependent_care_costs,explanation:e}}}])&&h(t.prototype,o),n&&h(t,n),e}();function y(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.household_includes_elderly_or_disabled=t.household_includes_elderly_or_disabled,this.medical_expenses_for_elderly_or_disabled=t.medical_expenses_for_elderly_or_disabled,this.standard_medical_deduction=t.standard_medical_deduction,this.standard_medical_deduction_amount=t.standard_medical_deduction_amount,this.standard_medical_deduction_ceiling=t.standard_medical_deduction_ceiling}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){var e=["Next, deduct monthly medical expenses for elderly or disabled household members beyond $35. "];if(!this.household_includes_elderly_or_disabled)return e.push("In this case, there are no elderly or disabled members of the household, so the medical expenses deduction does not apply. "),{result:0,explanation:e};if(0==this.medical_expenses_for_elderly_or_disabled)return e.push("In this case, there are no monthly medical expenses to deduct. "),{result:0,explanation:e};if(35>=this.medical_expenses_for_elderly_or_disabled)return e.push("In this case, medical expenses are below the $35 monthly threshold for deduction. "),{result:0,explanation:e};if(!this.standard_medical_deduction){var t=this.medical_expenses_for_elderly_or_disabled-35;return e.push("The medical expenses deduction is equal to monthly medical expenses beyond $35."),e.push(""),e.push("$".concat(this.medical_expenses_for_elderly_or_disabled," - $35 = $").concat(t," medical expenses deduction")),{result:t,explanation:e}}if(this.medical_expenses_for_elderly_or_disabled>this.standard_medical_deduction_ceiling){var o=this.medical_expenses_for_elderly_or_disabled;return e.push("Medical expenses are greater than the Standard Medical Deduction maximum amount of $".concat(this.standard_medical_deduction_ceiling,". In this case, the full medical expense amount can be deducted, which comes to $").concat(o,". ")),{result:o,explanation:e}}return e.push("This state has a Standard Medical Deduction amount of $".concat(this.standard_medical_deduction_amount,". ")),{result:this.standard_medical_deduction_amount,explanation:e}}}])&&y(t.prototype,o),n&&y(t,n),e}(),p={AK:{2020:908},DEFAULT:{2020:569},GUAM:{2020:667},HI:{2020:766},VIRGIN_ISLANDS:{2020:448}};function b(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.household_size=t.household_size}var t,o,n;return t=e,(o=[{key:"state_lookup_key",value:function(){return["AK","HI","GUAM","VIRGIN_ISLANDS"].indexOf(this.state_or_territory)>-1?this.state_or_territory:"DEFAULT"}},{key:"calculate",value:function(){var e=this.state_lookup_key();return p[e][2020]}}])&&b(t.prototype,o),n&&b(t,n),e}();function g(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.adjusted_income=t.adjusted_income,this.rent_or_mortgage=t.rent_or_mortgage,this.homeowners_insurance_and_taxes=t.homeowners_insurance_and_taxes,this.household_includes_elderly_or_disabled=t.household_includes_elderly_or_disabled,this.state_or_territory=t.state_or_territory,this.household_size=t.household_size,this.utility_allowance=t.utility_allowance,this.standard_utility_allowances=t.standard_utility_allowances}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){var e=["Next, we calculate the Excess Shelter Deduction. To calculate this deduction, we need to find half of the household adjusted income. Adjusted income is equal to gross income, minus all deductions calculated up to this point."],t=Math.round(this.adjusted_income/2),o="For this household, adjusted income is $".concat(this.adjusted_income," ")+"and half of adjusted income is $".concat(t,".");e.push(o),e.push("Next, add up shelter costs by adding any costs of rent, mortgage payments, homeowners insurance and property taxes, and utility costs. Let's start with everything except utilities:"),this.base_shelter_costs=this.rent_or_mortgage+this.homeowners_insurance_and_taxes;var n="$".concat(this.rent_or_mortgage," rent or mortgage + ")+"$".concat(this.homeowners_insurance_and_taxes," homeowners insurance and taxes = ")+"$".concat(this.base_shelter_costs);e.push(n),e.push("Now let's factor in utility costs.");var i=this.calculate_utility_costs(),r=this.base_shelter_costs+i.result;if(e.push(i.explanation),t>r)return e.push("In this case, shelter costs do not exceed half of adjusted income, so the excess shelter deduction does not apply."),{result:0,explanation:e};var s=r-t;e.push("Subtract half of adjusted income from shelter costs to find the base deduction amount:");var a="$".concat(r," shelter costs - $").concat(t," half of adjusted income = $").concat(s," base deduction");if(e.push(a),this.household_includes_elderly_or_disabled)return e.push("Because the household includes an elderly or disabled household member, there is no limit to the excess shelter deduction amount, so the full deduction amount of $".concat(s," applies.")),{result:s,explanation:e};var l=new v({state_or_territory:this.state_or_territory,household_size:this.household_size}).calculate();return s>l?(e.push("In this case, the household has a maximum excess shelter deduction of $".concat(l,", so the maximum deduction amount applies.")),{result:l,explanation:e}):{result:s,explanation:e}}},{key:"calculate_utility_costs",value:function(){if(null===this.utility_allowance||"NONE"===this.utility_allowance)return{result:0,explanation:"In this case there is no deduction for utilities, likely because the household is not billed separately for utilities."};if("VA"===this.state_or_territory&&"HEATING_AND_COOLING"===this.utility_allowance){var e=this.standard_utility_allowances.HEATING_AND_COOLING;if(this.household_size>=4){var t=e.four_or_more;return{result:t,explanation:"Virginia has a standard utility allowance of $".concat(t," for households with four or more household members.")}}var o=e.below_four;return{result:o,explanation:"Virginia has a standard utility allowance of $".concat(o," for households with less than four household members.")}}var n=this.standard_utility_allowances[this.utility_allowance];return{result:n,explanation:"In this case, a standard utility deduction of $".concat(n," applies, so total shelter plus utilities costs come to $").concat(n+this.base_shelter_costs,".")}}}])&&g(t.prototype,o),n&&g(t,n),e}();function x(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.child_support_payments_treatment=t.child_support_payments_treatment,this.court_ordered_child_support_payments=t.court_ordered_child_support_payments}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){return"DEDUCT"!==this.child_support_payments_treatment?{result:0,explanation:["In this state, court-ordered child support payments are excluded from gross income instead of deducted."]}:0===this.court_ordered_child_support_payments?{result:0,explanation:["This household does not make monthly court-ordered child support payments, so the child-support payment deduction does not apply."]}:{result:this.court_ordered_child_support_payments,explanation:["Next, we deduct the monthly cost of court-ordered child support payments: $".concat(this.court_ordered_child_support_payments,".")]}}}])&&x(t.prototype,o),n&&x(t,n),e}();function k(e,t){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){a=!0,r=e},f:function(){try{s||null==o.return||o.return()}finally{if(a)throw r}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function z(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.household_includes_elderly_or_disabled=t.household_includes_elderly_or_disabled,this.gross_income=t.gross_income,this.state_or_territory=t.state_or_territory,this.household_size=t.household_size,this.monthly_job_income=t.monthly_job_income,this.dependent_care_costs=t.dependent_care_costs,this.medical_expenses_for_elderly_or_disabled=t.medical_expenses_for_elderly_or_disabled,this.standard_medical_deduction=t.standard_medical_deduction,this.standard_medical_deduction_amount=t.standard_medical_deduction_amount,this.standard_medical_deduction_ceiling=t.standard_medical_deduction_ceiling,this.rent_or_mortgage=t.rent_or_mortgage,this.homeowners_insurance_and_taxes=t.homeowners_insurance_and_taxes,this.utility_allowance=t.utility_allowance,this.standard_utility_allowances=t.standard_utility_allowances,this.child_support_payments_treatment=t.child_support_payments_treatment,this.court_ordered_child_support_payments=t.court_ordered_child_support_payments}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){var e=[];if(e.push("Net income is equal to total gross monthly income, minus deductions."),0===this.gross_income)return{name:"Net Income",result:0,explanation:["Since the household does not have income, net income is zero."],sort_order:1};var t="Let's start with total household income. This household's gross income is $".concat(this.gross_income,".");e.push(t);var o=new u({state_or_territory:this.state_or_territory,household_size:this.household_size}).calculate(),n=new d({monthly_job_income:this.monthly_job_income}).calculate(),i=new m({dependent_care_costs:this.dependent_care_costs}).calculate(),r=new f({household_includes_elderly_or_disabled:this.household_includes_elderly_or_disabled,medical_expenses_for_elderly_or_disabled:this.medical_expenses_for_elderly_or_disabled,standard_medical_deduction:this.standard_medical_deduction,standard_medical_deduction_amount:this.standard_medical_deduction_amount,standard_medical_deduction_ceiling:this.standard_medical_deduction_ceiling}).calculate(),s=new A({child_support_payments_treatment:this.child_support_payments_treatment,court_ordered_child_support_payments:this.court_ordered_child_support_payments}).calculate(),a=0;[o,n,i,r,s].map((function(t){var o,n=k(t.explanation);try{for(n.s();!(o=n.n()).done;){var i=o.value;e.push(i)}}catch(e){n.e(e)}finally{n.f()}a+=t.result}));var l,_=this.gross_income-a,c=new w({adjusted_income:_,state_or_territory:this.state_or_territory,household_size:this.household_size,household_includes_elderly_or_disabled:this.household_includes_elderly_or_disabled,rent_or_mortgage:this.rent_or_mortgage,homeowners_insurance_and_taxes:this.homeowners_insurance_and_taxes,utility_allowance:this.utility_allowance,standard_utility_allowances:this.standard_utility_allowances}).calculate(),h=k(c.explanation);try{for(h.s();!(l=h.n()).done;){var y=l.value;e.push(y)}}catch(e){h.e(e)}finally{h.f()}var p=c.result,b=a+p,v="Next, we add all applicable deductions together. The total of all deductions is <strong>$".concat(b,"</strong>.");e.push(v),e.push("");var g=this.gross_income-b,x=g>0?g:0,I="Gross income (<strong>$".concat(this.gross_income,"</strong>) minus total deductions (<strong>$").concat(b,"</strong>) equals net income: <strong>$").concat(x,".</strong>");return e.push(I),{name:"Net Income",result:x,explanation:e,sort_order:1}}}])&&z(t.prototype,o),n&&z(t,n),e}();function N(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.monthly_job_income=t.monthly_job_income,this.monthly_non_job_income=t.monthly_non_job_income,this.child_support_payments_treatment=t.child_support_payments_treatment,this.court_ordered_child_support_payments=t.court_ordered_child_support_payments}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){return this.child_support_payments_excluded()?this.calculate_excluding_child_support():this.calculate_without_excluding_child_support()}},{key:"child_support_payments_excluded",value:function(){return"EXCLUDE"===this.child_support_payments_treatment&&0!==this.court_ordered_child_support_payments}},{key:"calculate_excluding_child_support",value:function(){var e=this.monthly_job_income+this.monthly_non_job_income,t=[];t.push("In this state, court-ordered child support payments are counted as a gross income exclusion. The gross income is adjusted to exclude monthly court-ordered child support:");var o=e-this.court_ordered_child_support_payments,n="$".concat(e," - ")+"$".concat(this.court_ordered_child_support_payments," = ")+"$".concat(o," gross income");return t.push(n),{name:"Gross Income",result:o,explanation:t,sort_order:0}}},{key:"calculate_without_excluding_child_support",value:function(){var e=[];e.push("We start with calculating gross income. We find the household's gross income by adding up monthly income from both job and non-job sources.");var t=this.monthly_job_income+this.monthly_non_job_income,o="$".concat(this.monthly_job_income," monthly job income + ")+"$".concat(this.monthly_non_job_income," monthly non-job income = ")+"<strong>$".concat(t," gross income</strong>");return e.push(o),{name:"Gross Income",result:t,explanation:e,sort_order:0}}}])&&N(t.prototype,o),n&&N(t,n),e}();function E(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.household_size=t.household_size,this.household_includes_elderly_or_disabled=t.household_includes_elderly_or_disabled,this.resources=t.resources,this.gross_income=t.gross_income,this.net_monthly_income_limit=t.net_monthly_income_limit,this.gross_income_limit_factor=t.gross_income_limit_factor,this.gross_monthly_income_limit=Math.round(this.gross_income_limit_factor*this.net_monthly_income_limit)}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){if(this.household_includes_elderly_or_disabled)return{name:"Gross Income Test",result:!0,explanation:["The first test we'll check for SNAP eligibility is the Gross Income Test.","Households with an elderly or disabled member do not need to meet the gross income test."],sort_order:2};var e=["The first test we'll check for SNAP eligibility is the Gross Income Test."],t=this.gross_monthly_income_limit>this.gross_income,o="The gross monthly income limit is $".concat(this.gross_monthly_income_limit,". <a class='why why-small' href='").concat("https://fns-prod.azureedge.net/sites/default/files/media/file/FY20-Income-Eligibility-Standards.pdf","' target='_blank'>why?</a>");e.push(o);var n=t?"passes":"does not meet",i="Since the household gross income is $".concat(this.gross_income,", this household <strong>").concat(n,"</strong> the gross income test.");return e.push(i),{name:"Gross Income Test",result:t,explanation:e,sort_order:2}}}])&&E(t.prototype,o),n&&E(t,n),e}();function $(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.household_size=t.household_size,this.household_includes_elderly_or_disabled=t.household_includes_elderly_or_disabled,this.resources=t.resources,this.resource_limit_elderly_or_disabled=t.resource_limit_elderly_or_disabled,this.resource_limit_non_elderly_or_disabled=t.resource_limit_non_elderly_or_disabled}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){if(!this.resource_limit_elderly_or_disabled&&!this.resource_limit_non_elderly_or_disabled)return{name:"Asset Test",result:!0,explanation:["".concat(this.state_or_territory," does not have an asset test for SNAP eligibility.")],sort_order:4};var e,t;this.household_includes_elderly_or_disabled?(e=this.resource_limit_elderly_or_disabled,t=["Since the household includes an elderly or disabled member, the resource limit is $".concat(e,".")]):(e=this.resource_limit_non_elderly_or_disabled,t=["Since the household does not include an elderly or disabled member, the resource limit is $".concat(e,".")]);var o=this.resources<=e;return t.push("Since this household has resources of $".concat(this.resources,", it <strong>").concat(o?"meets":"does not meet","</strong> the asset test.")),{name:"Asset Test",result:o,explanation:t,sort_order:4}}}])&&$(t.prototype,o),n&&$(t,n),e}();function L(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.net_income=t.net_income,this.net_monthly_income_limit=t.net_monthly_income_limit}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){var e=this.net_monthly_income_limit>this.net_income,t=[];t.push("To be eligible for SNAP, a household's net income needs to be below the net monthly income limit.");var o="The net monthly income limit is $".concat(this.net_monthly_income_limit,". <a class='why why-small' href='").concat("https://fns-prod.azureedge.net/sites/default/files/media/file/FY20-Income-Eligibility-Standards.pdf","' target='_blank'>why?</a>");t.push(o);var n=e?"passes":"does not meet",i="Since the household net income is $".concat(this.net_income,", this household <strong>").concat(n,"</strong> the net income test.");return t.push(i),{name:"Net Income Test",result:e,explanation:t,sort_order:3}}}])&&L(t.prototype,o),n&&L(t,n),e}(),C={AK_RURAL_1:{2020:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,each_additional:null}},AK_RURAL_2:{2020:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,each_additional:null}},AK_URBAN:{2020:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,each_additional:null}},DEFAULT:{2020:{1:194,2:355,3:509,4:646,5:768,6:921,7:1018,8:1164,each_additional:146}},GUAM:{2020:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,each_additional:null}},HI:{2020:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,each_additional:null}},VIRGIN_ISLANDS:{2020:{1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,each_additional:null}}};function G(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var D=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.household_size=t.household_size}var t,o,n;return t=e,(o=[{key:"state_lookup_key",value:function(){return["AK_URBAN","AK_RURAL_1","AK_RURAL_2","HI","GUAM","VIRGIN_ISLANDS"].indexOf(this.state_or_territory)>-1?this.state_or_territory:"DEFAULT"}},{key:"calculate",value:function(){var e=this.state_lookup_key(),t=C[e][2020];if(0<this.household_size&&this.household_size<9)return t[this.household_size];if(9<=this.household_size)return t[8]+(this.household_size-8)*t.each_additional;if(this.household_size<=0)throw new Error("Household size out of bounds (at or below zero).")}}])&&G(t.prototype,o),n&&G(t,n),e}(),P={AK_RURAL_1:{2020:{1:24,2:24}},AK_RURAL_2:{2020:{1:30,2:30}},AK_URBAN:{2020:{1:19,2:19}},DEFAULT:{2020:{1:16,2:16}},GUAM:{2020:{1:23,2:23}},HI:{2020:{1:29,2:29}},VIRGIN_ISLANDS:{2020:{1:20,2:20}}};function R(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var M=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.household_size=t.household_size}var t,o,n;return t=e,(o=[{key:"state_lookup_key",value:function(){return["AK_URBAN","AK_RURAL_1","AK_RURAL_2","HI","GUAM","VIRGIN_ISLANDS"].indexOf(this.state_or_territory)>-1?this.state_or_territory:"DEFAULT"}},{key:"calculate",value:function(){var e=this.state_lookup_key(),t=P[e][2020];return 0<this.household_size<3&&t[this.household_size]}}])&&R(t.prototype,o),n&&R(t,n),e}();function H(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var K=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.household_size=t.household_size,this.is_eligible=t.is_eligible,this.net_income=t.net_income,this.use_emergency_allotment=t.use_emergency_allotment}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){return this.is_eligible?this.calculate_for_eligible_household():{name:"Estimated Benefit Calculation",result:0,explanation:["Likely not eligible for SNAP."],sort_order:5}}},{key:"calculate_for_eligible_household",value:function(){var e=["To determine the estimated amount of SNAP benefit, we start with the maximum allotment and then subtract 30% of net income."],t=new D({state_or_territory:this.state_or_territory,household_size:this.household_size}).calculate(),o="The maximum allotment for this household is $".concat(t,". <a class='why why-small' href='").concat("https://fns-prod.azureedge.net/sites/default/files/media/file/FY20-Maximum-Allotments-Deductions.pdf","' target='_blank'>why?</a>");e.push(o);var n=Math.round(.3*this.net_income),i=t-n,r="The household net monthly income is $".concat(this.net_income,". Thirty percent of $").concat(this.net_income," is $").concat(n,". So to calculate the estimated benefit:");e.push(r),e.push("");var s="$".concat(t," - $").concat(n," = $").concat(i," estimated benefit");e.push(s);var a=new M({state_or_territory:this.state_or_territory,household_size:this.household_size}).calculate();if(a&&a>i){i=a;var l="There is a minimum monthly allotmnet for this household of $".concat(a,". <a class='why why-small' href='").concat("https://fns-prod.azureedge.net/sites/default/files/media/file/FY20-Minimum-Allotments.pdf","' target='_blank'>why?</a>");e.push(l);var _="Since the calculated benefit amount would be below the minimum allotment, apply the minimum allotment amount of $".concat(a," instead.");e.push(_)}return 0>i&&(i=0,e.push("In this case, although the household is eligible, because of their income the calcuation results in zero estimated monthly benefit.")),this.use_emergency_allotment?(i===t?e.push("This gives us an estimated monthly benefit of $".concat(i,", which is the maximum benefit amount.")):e.push("This gives us an estimated monthly benefit of $".concat(i,". However, because SNAP emergency allotments are active in your state, if approved your benefit could be as much as $").concat(t," per month.")),{name:"Benefit Amount",sort_order:5,result:i,emergency_allotment_estimated_benefit:t,explanation:e}):{name:"Benefit Amount",sort_order:5,result:i,explanation:e}}}])&&H(t.prototype,o),n&&H(t,n),e}(),F={AK:{2020:{1:1300,2:1761,3:2222,4:2683,5:3144,6:3605,7:4065,8:4526,each_additional:461}},DEFAULT:{2020:{1:1041,2:1410,3:1778,4:2146,5:2515,6:2883,7:3251,8:3620,each_additional:369}},HI:{2020:{1:1199,2:1622,3:2045,4:2469,5:2892,6:3315,7:3739,8:4162,each_additional:424}}};function V(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.household_size=t.household_size}var t,o,n;return t=e,(o=[{key:"state_lookup_key",value:function(){return-1===["AK","HI"].indexOf(this.state_or_territory)?"DEFAULT":this.state_or_territory}},{key:"income_limit_lookup",value:function(){var e=this.state_lookup_key(),t=F[e][2020];if(0<this.household_size&&this.household_size<9)return t[this.household_size];if(9<=this.household_size)return t[8]+(this.household_size-8)*t.each_additional;if(this.household_size<=0)throw new Error("Household size out of bounds (at or below zero).")}}])&&V(t.prototype,o),n&&V(t,n),e}();function B(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var W=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state_or_territory=t.state_or_territory,this.monthly_job_income=t.monthly_job_income,this.monthly_non_job_income=t.monthly_non_job_income,this.household_size=t.household_size,this.household_includes_elderly_or_disabled=t.household_includes_elderly_or_disabled,this.dependent_care_costs=t.dependent_care_costs,this.medical_expenses_for_elderly_or_disabled=t.medical_expenses_for_elderly_or_disabled,this.court_ordered_child_support_payments=t.court_ordered_child_support_payments,this.resources=t.resources,this.use_emergency_allotment=t.use_emergency_allotment,this.rent_or_mortgage=t.rent_or_mortgage,this.homeowners_insurance_and_taxes=t.homeowners_insurance_and_taxes,this.utility_allowance=t.utility_allowance;var o=r[this.state_or_territory][2020],n=o.uses_bbce;this.gross_income_limit_factor=n?o.gross_income_limit_factor:1.3,this.resource_limit_elderly_or_disabled=n?o.resource_limit_elderly_or_disabled:3500,this.resource_limit_elderly_or_disabled_income_twice_fpl=n?o.resource_limit_elderly_or_disabled_income_twice_fpl:3500,this.resource_limit_non_elderly_or_disabled=n?o.resource_limit_non_elderly_or_disabled:2250,this.child_support_payments_treatment=o.child_support_payments_treatment,this.standard_medical_deduction=o.standard_medical_deduction,this.standard_medical_deduction_amount=o.standard_medical_deduction_amount,this.standard_medical_deduction_ceiling=o.standard_medical_deduction_ceiling,this.standard_utility_allowances=o.standard_utility_allowances,this.net_monthly_income_limit=new q({state_or_territory:this.state_or_territory,household_size:this.household_size}).income_limit_lookup()}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){var e=this.calculate_gross_income();this.gross_income=e.result;var t=this.calculate_net_income();this.net_income=t.result;var o=this.initialize_eligibility_tests().map((function(e){return e.calculate()})),n=o.map((function(e){return e.result}));this.estimated_eligibility=-1===n.indexOf(!1);var i=new K({state_or_territory:this.state_or_territory,household_size:this.household_size,is_eligible:this.estimated_eligibility,net_income:this.net_income,use_emergency_allotment:this.use_emergency_allotment||!1}).calculate();this.estimated_monthly_benefit=i.result,this.emergency_allotment_estimated_benefit=i.emergency_allotment_estimated_benefit;var r=[e,t,i].concat(o);return{status:"OK",estimated_monthly_benefit:this.estimated_monthly_benefit,emergency_allotment_estimated_benefit:this.emergency_allotment_estimated_benefit,estimated_eligibility:this.estimated_eligibility,eligibility_factors:r}}},{key:"initialize_eligibility_tests",value:function(){return[new O({state_or_territory:this.state_or_territory,household_size:this.household_size,household_includes_elderly_or_disabled:this.household_includes_elderly_or_disabled,resources:this.resources,gross_income:this.gross_income,net_monthly_income_limit:this.net_monthly_income_limit,gross_income_limit_factor:this.gross_income_limit_factor}),new U({net_monthly_income_limit:this.net_monthly_income_limit,net_income:this.net_income}),new S({state_or_territory:this.state_or_territory,household_size:this.household_size,household_includes_elderly_or_disabled:this.household_includes_elderly_or_disabled,resources:this.resources,resource_limit_elderly_or_disabled:this.resource_limit_elderly_or_disabled,resource_limit_non_elderly_or_disabled:this.resource_limit_non_elderly_or_disabled})]}},{key:"calculate_gross_income",value:function(){return new T({monthly_job_income:this.monthly_job_income,monthly_non_job_income:this.monthly_non_job_income,court_ordered_child_support_payments:this.court_ordered_child_support_payments,child_support_payments_treatment:this.child_support_payments_treatment}).calculate()}},{key:"calculate_net_income",value:function(){return new j({household_includes_elderly_or_disabled:this.household_includes_elderly_or_disabled,gross_income:this.gross_income,state_or_territory:this.state_or_territory,household_size:this.household_size,monthly_job_income:this.monthly_job_income,dependent_care_costs:this.dependent_care_costs,medical_expenses_for_elderly_or_disabled:this.medical_expenses_for_elderly_or_disabled,standard_medical_deduction:this.standard_medical_deduction,standard_medical_deduction_amount:this.standard_medical_deduction_amount,standard_medical_deduction_ceiling:this.standard_medical_deduction_ceiling,rent_or_mortgage:this.rent_or_mortgage,homeowners_insurance_and_taxes:this.homeowners_insurance_and_taxes,utility_allowance:this.utility_allowance,standard_utility_allowances:this.standard_utility_allowances,child_support_payments_treatment:this.child_support_payments_treatment,court_ordered_child_support_payments:this.court_ordered_child_support_payments}).calculate()}}])&&B(t.prototype,o),n&&B(t,n),e}();function Y(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var X=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.raw_inputs=t}var t,o,n;return t=e,(o=[{key:"calculate",value:function(){var e=new i(this.raw_inputs);if(!e.inputs_valid())return{status:"ERROR",errors:e.errors};var t=e.inputs;return new W(t).calculate()}}])&&Y(t.prototype,o),n&&Y(t,n),e}()}]);