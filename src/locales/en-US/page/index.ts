import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: 'Computer science and the whole-stack are my biggest passions: I love learning anything about the subject, from a more technical point of view to the heavier theories, from hardware to software... \n\n I was 12 when I started exploring this universe and since then I have discovered many things. It was not long before I noticed that this subject always evolves and that the acquired knowledge is infinite, which excites me, like, a loottt: constant evolution === infinite possibilities.\n\n So in this website you will find some of the things that I have/am/will learn and find a variety of projects: open-source, IoT, Hardware, Websites, Apps, NGOs related projects, ...',
      imageCaption: 'Hi!',
      objectivesText: {
         title: 'Keeping myself\n up-to-date &\n running',
         description: 'a.k.a.: my objectives for this year',
         objectivesCaption: {
            title: 'Captions',
            done: 'Done 🎉',
            inProgress: 'On-going...',
            todo: 'On standby / not started yet',
         }
      }
   },
   mainProps: {
      header: {
         title: 'Hi! I code dinosaurs 🦖',
         description: 'I\'m Victor: a computer science and whole-stack lover, but deeper into full-stack for the moment.',
         backgroundAlt: 'Home page background.'
      },
   }
}