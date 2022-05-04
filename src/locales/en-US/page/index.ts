import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: 'I\'m passionate about computer science and the whole-stack, which inspires me to always dig deeper into these subjects.\n\n I was 12 when I first interacted with software development, leading to where I am today. I soon got awareness that this subject is under constant growth, and this still excites me a lotttt: it means limitless opportunities. \n\n Here you may find out what I’m already experienced with, my curiosities and projects (ongoing and future ones) ranging from open-source to IoT, Hardware, Websites, Apps, NGOs related projects, and etc',
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