//import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { useState } from 'react'

import { MantineProvider } from '@mantine/core';

import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function App() {
  
  //Signup form with Hogname + ToS validation
  let chosenHogName: string[] = [];
  
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      hogName: '',
      termsOfService: false,
    },

    validate: {
      hogName: (value) => (/h(o+)g/i.test(value) ? null : 'Invalid Hogname'),
    },
  });

  //Initial logic for the hog++ button
  const [count, setCount] = useState(0)

  return <MantineProvider> {
    
      (
        <>
          <h1>Post hogs 🦔</h1>

          <p>The <u>only</u> social media where you're <u>only</u> allowed to post hedgehogs.</p>

          <Button onClick={() => setCount((count) => count + 1)}>
          <code>hog++</code>
          </Button>
          <p><code>hog++</code> value = <b>{count}</b> 🦔s
          </p>


    <form onSubmit={form.onSubmit((values) => (console.log(values)))}>
      <TextInput
        withAsterisk
        label="Sign up by typing your Hogname below 👇"
        placeholder="Hogname (must contain 'hog')"
        key={form.key('hogName')}
        {...form.getInputProps('hogName')}
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

            <p>Your Hogname is: {chosenHogName.push("hogName")}</p>
        </>
      )
  
  }</MantineProvider>;
}
