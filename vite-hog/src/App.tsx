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
          <h1>Hello Hog!</h1>
          <div className="card">
          </div>
          <p>
            No more button to hog++. Sad.
          </p>

    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Hogname (must contain 'hog')"
        placeholder="TheSmilingHog"
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
