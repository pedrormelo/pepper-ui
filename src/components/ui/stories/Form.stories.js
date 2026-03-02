import Form from '../molecules/Form/Form.vue';
import Label from '../atoms/Label/Label.vue';
import Input from '../atoms/Input/Input.vue';
import Button from '../atoms/Button/Button.vue';

export default {
  title: 'UI/Molecules/Form',
  component: Form,
};

export const Playground = {
  render: () => ({
    components: { Form, Label, Input, Button },
    template: `
      <Form>
        <div class="space-y-2">
          <Label required>Email</Label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <Button>Submit</Button>
      </Form>
    `,
  }),
};
