/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
var WizardNavigationBarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state the wizard currently resides in
     */
    function WizardNavigationBarComponent(wizardState) {
        this.wizardState = wizardState;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */
        this.direction = 'left-to-right';
    }
    Object.defineProperty(WizardNavigationBarComponent.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "wizardSteps", {
        /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @returns An array containing all [[WizardStep]]s
         */
        get: /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @return {?} An array containing all [[WizardStep]]s
         */
        function () {
            switch (this.direction) {
                case 'right-to-left':
                    return this.wizardState.wizardSteps.slice().reverse();
                case 'left-to-right':
                default:
                    return this.wizardState.wizardSteps;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "numberOfWizardSteps", {
        /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @returns The number of wizard steps to be displayed
         */
        get: /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @return {?} The number of wizard steps to be displayed
         */
        function () {
            return this.wizardState.wizardSteps.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as current
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as current
     */
    WizardNavigationBarComponent.prototype.isCurrent = /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as current
     */
    function (wizardStep) {
        return wizardStep.selected && !wizardStep.completed && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as done
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as done
     */
    WizardNavigationBarComponent.prototype.isDone = /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as done
     */
    function (wizardStep) {
        return (wizardStep.completed && !wizardStep.selected) || this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as default
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as default
     */
    WizardNavigationBarComponent.prototype.isDefault = /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as default
     */
    function (wizardStep) {
        return !wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as editing
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as editing
     */
    WizardNavigationBarComponent.prototype.isEditing = /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as editing
     */
    function (wizardStep) {
        return wizardStep.selected && wizardStep.completed && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as optional
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as optional
     */
    WizardNavigationBarComponent.prototype.isOptional = /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as optional
     */
    function (wizardStep) {
        return wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as navigable
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    WizardNavigationBarComponent.prototype.isNavigable = /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    function (wizardStep) {
        return !wizardStep.selected && !this.wizardState.disableNavigationBar &&
            this.navigationMode.isNavigable(this.wizardState.getIndexOfStep(wizardStep));
    };
    WizardNavigationBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-wizard-navigation-bar',
                    template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li *ngFor=\"let step of wizardSteps\"\n      [ngClass]=\"{\n        default: isDefault(step),\n        current: isCurrent(step),\n        done: isDone(step),\n        editing: isEditing(step),\n        optional: isOptional(step),\n        navigable: isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["aw-wizard-navigation-bar.horizontal.small ul.steps-indicator{padding:24px 0 10px}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 14px);top:-7px;left:calc(50% + 14px / 2)}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li .step-indicator{position:absolute;top:-14px;left:calc(50% - 14px / 2);width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#89229b}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.default a:hover .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#89229b}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid #9c27b0}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#771e86}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:#9c27b0}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:#9c27b0;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#89229b}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:#9c27b0;border:2px solid #9c27b0}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#771e86;color:#771e86}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator,aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:#9c27b0;color:#9c27b0}aw-wizard-navigation-bar.horizontal ul.steps-indicator{display:flex;flex-direction:row;justify-content:center;margin:0;width:100%;list-style:none}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2:before{left:25%;right:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2 li{width:50%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3:before{left:16.66666667%;right:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3 li{width:33.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4:before{left:12.5%;right:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4 li{width:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5:before{left:10%;right:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5 li{width:20%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6:before{left:8.33333333%;right:8.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6 li{width:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7:before{left:7.14285714%;right:7.14285714%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7 li{width:14.28571429%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8:before{left:6.25%;right:6.25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8 li{width:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9:before{left:5.55555556%;right:5.55555556%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9 li{width:11.11111111%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10:before{left:5%;right:5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10 li{width:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.horizontal ul.steps-indicator li{position:relative;margin:0;padding:0;pointer-events:none;text-align:center}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a .label{display:inline-block;padding-top:10px;color:#9c27b0;line-height:14px;font-size:10px;text-decoration:none;text-transform:uppercase;text-align:center;font-weight:400;transition:.25s}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a:hover .label{color:#52145d}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a .label{color:#9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a .label{color:#9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator{border:2px solid #9c27b0}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a div.label{color:#9c27b0}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done a div.step-indicator{border:2px solid #9c27b0}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.editing a div.label{color:#9c27b0}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.editing a div.step-indicator{border:2px solid #9c27b0!important}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done.navigable a div.label{color:#9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.done.navigable a div.step-indicator{border:2px solid #9e9e9e}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.navigable{pointer-events:auto}", "aw-wizard-navigation-bar.vertical{max-width:280px;width:20%;height:100%;position:-webkit-sticky;position:sticky;top:0}aw-wizard-navigation-bar.vertical.small ul.steps-indicator{padding:5px 5px 5px 19px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-7px;top:14px;height:calc(100% - 14px);width:1px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-14px;width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li div{min-height:14px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing .step-indicator{background-color:#9e9e9e}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#89229b}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#919191}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.default a:hover .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li div{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing .step-indicator{background-color:#9e9e9e}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#89229b}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#919191}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li div{min-height:54px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid #9c27b0}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid #9e9e9e}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#771e86}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#858585}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:#9c27b0}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li div{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:#9c27b0;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:#9e9e9e;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#89229b}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#919191}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:#9c27b0}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li div{min-height:54px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:#9c27b0;border:2px solid #9c27b0}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done .step-indicator,aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:#9e9e9e;border:2px solid #9e9e9e}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#771e86;color:#771e86}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator,aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#858585;color:#858585}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:#9c27b0;color:#9c27b0}aw-wizard-navigation-bar.vertical ul.steps-indicator{display:flex;flex-direction:column;justify-content:center;list-style:none;margin:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.vertical ul.steps-indicator li{position:relative;pointer-events:none}aw-wizard-navigation-bar.vertical ul.steps-indicator li:not(:last-child){margin-bottom:0;padding-bottom:10px}aw-wizard-navigation-bar.vertical ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.vertical ul.steps-indicator li a .label{margin-left:15px;color:#9c27b0;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:left;font-weight:700;transition:.25s}aw-wizard-navigation-bar.vertical ul.steps-indicator li a:hover .label{color:#52145d}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a .label{color:#9c27b0}aw-wizard-navigation-bar.vertical ul.steps-indicator li.navigable{pointer-events:auto}"]
                }] }
    ];
    WizardNavigationBarComponent.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    WizardNavigationBarComponent.propDecorators = {
        direction: [{ type: Input }]
    };
    return WizardNavigationBarComponent;
}());
export { WizardNavigationBarComponent };
if (false) {
    /**
     * The direction in which the wizard steps should be shown in the navigation bar.
     * This value can be either `left-to-right` or `right-to-left`
     * @type {?}
     */
    WizardNavigationBarComponent.prototype.direction;
    /** @type {?} */
    WizardNavigationBarComponent.prototype.wizardState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFnQjdEO0lBcUJFOzs7O09BSUc7SUFDSCxzQ0FBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFuQjNDOzs7V0FHRztRQUVJLGNBQVMsR0FBRyxlQUFlLENBQUM7SUFlbkMsQ0FBQztJQVZELHNCQUFXLHdEQUFjO1FBSHpCOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQWVELHNCQUFJLHFEQUFXO1FBTGY7Ozs7V0FJRzs7Ozs7O1FBQ0g7WUFDRSxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RCLEtBQUssZUFBZTtvQkFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEQsS0FBSyxlQUFlLENBQUM7Z0JBQ3JCO29CQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7YUFDdkM7UUFDSCxDQUFDOzs7T0FBQTtJQU9ELHNCQUFJLDZEQUFtQjtRQUx2Qjs7OztXQUlHOzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSSxnREFBUzs7Ozs7O0lBQWhCLFVBQWlCLFVBQXNCO1FBQ3JDLE9BQU8sVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUNyRixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSSw2Q0FBTTs7Ozs7O0lBQWIsVUFBYyxVQUFzQjtRQUNsQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUN0RixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSSxnREFBUzs7Ozs7O0lBQWhCLFVBQWlCLFVBQXNCO1FBQ3JDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUM5RyxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSSxnREFBUzs7Ozs7O0lBQWhCLFVBQWlCLFVBQXNCO1FBQ3JDLE9BQU8sVUFBVSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDcEYsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7O0lBQ0ksaURBQVU7Ozs7OztJQUFqQixVQUFrQixVQUFzQjtRQUN0QyxPQUFPLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFBO0lBQzVHLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7Ozs7Ozs7Ozs7O0lBQ0ksa0RBQVc7Ozs7Ozs7Ozs7SUFBbEIsVUFBbUIsVUFBc0I7UUFDdkMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQjtZQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7O2dCQXBIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsc2lDQUFtRDtvQkFFbkQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7O2dCQXJCTyxXQUFXOzs7NEJBMkJoQixLQUFLOztJQTBHUixtQ0FBQztDQUFBLEFBckhELElBcUhDO1NBL0dZLDRCQUE0Qjs7Ozs7OztJQUt2QyxpREFDbUM7O0lBY3ZCLG1EQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyYCBjb21wb25lbnQgY29udGFpbnMgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSBhIFtbV2l6YXJkQ29tcG9uZW50XV0uXG4gKiBUbyBjb3JyZWN0bHkgZGlzcGxheSB0aGUgbmF2aWdhdGlvbiBiYXIsIGl0J3MgcmVxdWlyZWQgdG8gc2V0IHRoZSByaWdodCBjc3MgY2xhc3NlcyBmb3IgdGhlIG5hdmlnYXRpb24gYmFyLFxuICogb3RoZXJ3aXNlIGl0IHdpbGwgbG9vayBsaWtlIGEgbm9ybWFsIGB1bGAgY29tcG9uZW50LlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLW5hdmlnYXRpb24tYmFyPjwvYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuaG9yaXpvbnRhbC5sZXNzJywgJ3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQudmVydGljYWwubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHdpemFyZCBzdGVwcyBzaG91bGQgYmUgc2hvd24gaW4gdGhlIG5hdmlnYXRpb24gYmFyLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBlaXRoZXIgYGxlZnQtdG8tcmlnaHRgIG9yIGByaWdodC10by1sZWZ0YFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRpcmVjdGlvbiA9ICdsZWZ0LXRvLXJpZ2h0JztcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgcHVibGljIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBzdGF0ZSB0aGUgd2l6YXJkIGN1cnJlbnRseSByZXNpZGVzIGluXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgW1tXaXphcmRTdGVwXV1zIGNvbnRhaW5lZCBpbiB0aGUgd2l6YXJkXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIFtbV2l6YXJkU3RlcF1dc1xuICAgKi9cbiAgZ2V0IHdpemFyZFN0ZXBzKCk6IEFycmF5PFdpemFyZFN0ZXA+IHtcbiAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdyaWdodC10by1sZWZ0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICBjYXNlICdsZWZ0LXRvLXJpZ2h0JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2l6YXJkIHN0ZXBzLCB0aGF0IG5lZWQgdG8gYmUgZGlzcGxhY2VkIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIHdpemFyZCBzdGVwcyB0byBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIGdldCBudW1iZXJPZldpemFyZFN0ZXBzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGN1cnJlbnRgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgY3VycmVudFxuICAgKi9cbiAgcHVibGljIGlzQ3VycmVudCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgIXdpemFyZFN0ZXAuY29tcGxldGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBkb25lYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGRvbmVcbiAgICovXG4gIHB1YmxpYyBpc0RvbmUod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAod2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXdpemFyZFN0ZXAuc2VsZWN0ZWQpIHx8IHRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGRlZmF1bHRgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgZGVmYXVsdFxuICAgKi9cbiAgcHVibGljIGlzRGVmYXVsdCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF3aXphcmRTdGVwLm9wdGlvbmFsICYmICF3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgZWRpdGluZ2AgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBlZGl0aW5nXG4gICAqL1xuICBwdWJsaWMgaXNFZGl0aW5nKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiB3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgb3B0aW9uYWxgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgb3B0aW9uYWxcbiAgICovXG4gIHB1YmxpYyBpc09wdGlvbmFsKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5vcHRpb25hbCAmJiAhd2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgbmF2aWdhYmxlYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIEEgd2l6YXJkIHN0ZXAgY2FuIGJlIG5hdmlnYXRlZCB0byBpZjpcbiAgICogLSB0aGUgc3RlcCBpcyBjdXJyZW50bHkgbm90IHNlbGVjdGVkXG4gICAqIC0gdGhlIG5hdmlnYXRpb24gYmFyIGlzbid0IGRpc2FibGVkXG4gICAqIC0gdGhlIG5hdmlnYXRpb24gbW9kZSBhbGxvd3MgbmF2aWdhdGlvbiB0byB0aGUgc3RlcFxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgbmF2aWdhYmxlXG4gICAqL1xuICBwdWJsaWMgaXNOYXZpZ2FibGUod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5kaXNhYmxlTmF2aWdhdGlvbkJhciAmJlxuICAgICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5pc05hdmlnYWJsZSh0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHdpemFyZFN0ZXApKTtcbiAgfVxufVxuIl19