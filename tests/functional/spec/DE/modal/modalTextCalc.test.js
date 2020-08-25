import openModal from '../../utils/initializeModal';
import { viewports, bannerStyles, amounts, getGroupString } from '../../utils/testStylesConfig';
import { nonQualErrorMsg, updateFinanceTerms, deModalContentAndCalc } from './de_modalTestDefs';

const account = 'DEV0000000IAZ';

describe.each([
    [viewports[0], bannerStyles[0], amounts[0]],
    [viewports[0], bannerStyles[0], amounts[1]],
    [viewports[0], bannerStyles[0], amounts[2]],
    [viewports[0], bannerStyles[0], amounts[3]],
    [viewports[1], bannerStyles[0], amounts[0]],
    [viewports[1], bannerStyles[0], amounts[1]],
    [viewports[1], bannerStyles[0], amounts[2]],
    [viewports[1], bannerStyles[0], amounts[3]]
])('DE Modal Calculator Tests %o', (viewport, bannerStyle, amount) => {
    beforeEach(async () => {
        await openModal(viewport, {
            account,
            amount,
            style: bannerStyle
        });
    });

    const groupString = getGroupString({ bannerStyle, viewport, amount });

    test(
        `show error message when entering a non-qualifying amount inside the calculator ${groupString}`,
        nonQualErrorMsg(account, viewport, bannerStyle)
    );
    test(
        `update finance terms when user updates amount passed into calculator ${groupString}`,
        updateFinanceTerms(account, viewport, bannerStyle)
    );
    test(
        `when an amount is passed into DE PP installments message, the correct financing terms are loaded in a table ${groupString}`,
        deModalContentAndCalc(account, viewport, bannerStyle)
    );
});
