const DOM_MANIPULATORS = {
    'showElem': function showElem(elem_id) {
        return function () {
            const elem = document.getElementById(elem_id);
            if (elem) {
                if (elem.classList.contains('hidden')) {
                    elem.classList.remove('hidden');
                }
            }
        }
    },
    'hideElem': function hideElem(elem_id) {
        return function () {
            const elem = document.getElementById(elem_id);
            if (elem) {
                if (!elem.classList.contains('hidden')) {
                    elem.classList.add('hidden');
                }
            }
        }
    }
};

const FORM_CONTROLS = {
    'showCitizenshipInfobox': DOM_MANIPULATORS['showElem']('citizenship_info_box'),
    'hideCitizenshipInfobox': DOM_MANIPULATORS['hideElem']('citizenship_info_box'),
    'showMedicalExpensesForElderlyOrDisabled': DOM_MANIPULATORS['showElem']('medical_expenses_for_elderly_or_disabled_question'),
    'hideMedicalExpensesForElderlyOrDisabled': DOM_MANIPULATORS['hideElem']('medical_expenses_for_elderly_or_disabled_question'),
    'showExplanationButton': DOM_MANIPULATORS['showElem']('show-explanation'),
    'showResultExplanation': DOM_MANIPULATORS['showElem']('result-explanation'),
};

const FORM_ELEMS = {
    'form': document.getElementById('prescreener-form'),
    'results': document.getElementById('results'),
    'allCitizenHouseholdTrue': document.getElementById('input__all_citizens_question_true'),
    'allCitizenHouseholdFalse': document.getElementById('input__all_citizens_question_false'),
    'elderlyOrDisabledTrue': document.getElementById('input__household_includes_elderly_or_disabled_true'),
    'elderlyOrDisabledFalse': document.getElementById('input__household_includes_elderly_or_disabled_false'),
    'showExplanationButton': document.getElementById('show-explanation'),
    'resultExplanation': document.getElementById('result-explanation'),
};

const FORM_SUBMIT_FUNCS = {
    'sendData': function () {
        const formData = new FormData(FORM_ELEMS['form']);
        let jsonData = {};

        formData.forEach(function(value, key) {
            jsonData[key] = value;
        });

        // Send VA and emergency allotment config to API:
        jsonData['state_or_territory'] = 'VA';
        jsonData['use_emergency_allotment'] = 'true';

        const response = new SnapAPI.SnapEstimateEntrypoint(jsonData).calculate();

        resultHTML = FORM_SUBMIT_FUNCS['responseResultToHTML'](response);
        explanationHTML = FORM_SUBMIT_FUNCS['responseExplanationToHTML'](response.eligibility_factors);

        FORM_ELEMS['results'].innerHTML = resultHTML;
        FORM_ELEMS['resultExplanation'].innerHTML = explanationHTML;
        FORM_CONTROLS['showExplanationButton']();

        // Set up show explanation button
        FORM_ELEMS['showExplanationButton'].addEventListener('click', function (event) {
            FORM_CONTROLS['showResultExplanation']();
        });
    },
    'responseErrorsToHTML': function (errors) {
        let html = `<h1>Error(s):</h1>`;

        for (const error of errors) {
            html += (`<li style="color: red;">${error}.</li>`);
        }

        return html;
    },
    'responseResultToHTML': function (response) {
        if (response.status !== 'OK') {
            return FORM_SUBMIT_FUNCS['responseErrorsToHTML'](response.errors);
        }

        let html = '<h1>Results:</h1>';

        const estimated_benefit = response.estimated_benefit;
        const estimated_benefit_start_of_month = response.estimated_benefit_start_of_month;
        const estimated_eligibility = response.estimated_eligibility;
        const state_website = response.state_website;

        if (estimated_eligibility) {
            html += '<div class="result-headline">You may be <b>eligible</b> for SNAP benefits.</div>';

            // Estimated benefit amount
            if (estimated_benefit_start_of_month && estimated_benefit > estimated_benefit_start_of_month) {
                html += `<div class="result-headline">If approved, your benefit could be as much as $${estimated_benefit} per month, with $${estimated_benefit_start_of_month} arriving at the beginning of the month and the rest arriving later in the month.</div>`;

            } else {
                html += `<div class="result-headline">If approved, your benefit could be as much as $${estimated_benefit} per month.</div>`;
            }

            html += `<div class="result-headline">Apply here: <a href="${state_website}">${state_website}</a>.</div>`;
        } else {
            html += '<div class="result-headline">You may not be eligible for SNAP benefits.</div>'
        }

        return html;
    },
    'responseExplanationToHTML': function (eligibility_factors) {
        let html = '';

        eligibility_factors.sort((a, b) => {
            return a.sort_order - b.sort_order;
        });

        for (const eligibility_factor of eligibility_factors) {
            const name = eligibility_factor.name;
            html += `<h3>${name}:</h3>`

            html += '<div>';

            const eligibility_explanation = eligibility_factor.explanation;

            for (const explanation_graph of eligibility_explanation) {
                html += `<p>${explanation_graph}</p>`;
            }

            html += '</div>';
        }

        return html;
    }
};

// Set up on form submit.
FORM_ELEMS['form'].addEventListener('submit', function (event) {
    event.preventDefault();
    FORM_SUBMIT_FUNCS['sendData']();
});

// Set up toggle of citizenship infobox in response to citizenship question.
FORM_ELEMS['allCitizenHouseholdTrue'].addEventListener('change', function (event) {
    FORM_CONTROLS['hideCitizenshipInfobox']();
});

FORM_ELEMS['allCitizenHouseholdFalse'].addEventListener('change', function (event) {
    FORM_CONTROLS['showCitizenshipInfobox']();
});

// Set up toggle of medical expenses question in response to elderly or disabled question result.
FORM_ELEMS['elderlyOrDisabledTrue'].addEventListener('change', function (event) {
    FORM_CONTROLS['showMedicalExpensesForElderlyOrDisabled']();
});

FORM_ELEMS['elderlyOrDisabledFalse'].addEventListener('change', function (event) {
    FORM_CONTROLS['hideMedicalExpensesForElderlyOrDisabled']();
});
