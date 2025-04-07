//import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { useState } from 'react'

import { MantineProvider } from '@mantine/core';

import { AppShell, Burger, Button, Checkbox, Group, rem, Text, TextInput, UnstyledButton } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
//import ReactLogo from './assets/react.svg';
import classes from './MobileNavbar.module.css';

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?';


export default function App() {

  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  
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

<AppShell
      header={{ height: 50, collapsed: !pinned, offset: true }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
           <div>Post hogs 🦔</div>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>Blog</UnstyledButton>
              <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
              <UnstyledButton className={classes.control}>Support</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Blog</UnstyledButton>
        <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
        <UnstyledButton className={classes.control}>Support</UnstyledButton>
      </AppShell.Navbar>

        <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
          <h4>
            The <u>only</u> social media where you're <u>only</u> allowed to post hedgehogs.
          </h4>
          <Button onClick={() => setCount((count) => count + 1)}>
            <code>hog++</code>
          </Button>
          <p>
            <code>hog++</code> value = <b>{count}</b> 🦔s
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

            {Array(8)
               .fill(0)
               .map((_, index) => (
            <Text size="lg" key={index} my="md" maw={600} mx="auto">
              {lorem}
            </Text>
            ))}

            </AppShell.Main>

            <AppShell.Footer p="md">
               <Group justify="center" gap="m">
                  <Button variant="default">Aa</Button>
                  <Button variant="default">Bb</Button>
                  <Button variant="default">Cc</Button>
                  <Button variant="default">Dd</Button>
               </Group>
            </AppShell.Footer>

        </AppShell>
      </>
    )
  
  }</MantineProvider>;
}
