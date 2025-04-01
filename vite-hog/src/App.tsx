//import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function App() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/hog/i.test(value) ? null : 'Invalid hogname'),
    },
  });

  return <MantineProvider> {
    
      (
        <>
          <h1>Post hogs 🦔</h1>

          <p>The <u>only</u> social media where you're <u>only</u> allowed to post hedgehogs.</p>

          <p><code>hog++</code> button coming soon!</p>



    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Sign up by typing your Hogname below 👇"
        placeholder="Hogname (must contain 'hog')"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to have fun"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Sign up</Button>
      </Group>
    </form>
        </>
      )
  
  }</MantineProvider>;
}
