// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import DropdownsComponent from './dropdowns.component'
import { moduleMetadata } from "@storybook/angular";
import { ScTailwindModule } from "../../../projects/sc-tailwind/src/lib/sc-tailwind.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export default {
  title: 'Example/Dropdowns',
  component: DropdownsComponent,
  decorators: [
    moduleMetadata({
      imports: [ ScTailwindModule, BrowserAnimationsModule ]
    })
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<DropdownsComponent> = (args: DropdownsComponent) => ({
  props: args,
});

export const Menu = Template.bind({});
Menu.args = {
};
