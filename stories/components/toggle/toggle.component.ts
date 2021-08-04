import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-toggle',
  template: `
    <div class="flex">
      <sc-tw-toggle activeContainerClass="bg-indigo-600"> </sc-tw-toggle>
      <span class="ml-3" id="annual-billing-label">
        <span class="text-sm font-medium text-gray-900">Annual billing </span>
        <span class="text-sm text-gray-500">(Save 10%)</span>
      </span>
    </div>
  `,
})
export default class ToggleComponent {}
