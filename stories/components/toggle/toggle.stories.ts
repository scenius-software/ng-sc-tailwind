// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ScTailwindModule } from '../../../projects/sc-tailwind/src/lib/sc-tailwind.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ToggleComponent from './toggle.component';

export default {
  title: 'Example/Toggle',
  component: ToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [ScTailwindModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<ToggleComponent> = (args: ToggleComponent) => ({
  props: args,
});

export const Toggle = Template.bind({});
Toggle.args = {};
