import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: [
         'Hi! How are you?',
         'Computer science and the whole-stack are my biggest passions (literally): I love learning anything about the subject, from a more technical point of view to the heavier theories, from hardware to software...',
         'I was 12 when I started exploring this world and since then I have discovered many things. Something that I learned is that, there is still a lootttt to learn about it and this, is something that makes me love even more the subject.',
         'Here you will find some of the things that I have/am/will learn(ed|ing|-) and find a variety of projects: open-source, IoT, Hardware, Websites, Apps, NGOs related projects, ...',
         'I hope you like it all 😄!'
      ],
      imageCaption: 'Hi! I\'m Victor: coding dinosaurs 🦖 since 2003!',
   },
   mainProps: {
      header: {
         title: 'Hi! I code dinosaurs 🦖',
         description: 'I\'m Victor: a computer science and whole-stack lover, but deeper into full-stack for the moment.',
         backgroundAlt: 'Home page background.'
      },
   }
}