import type { PageFullType } from '../../index'
import type { IndexPageLocaleContent } from '@pages/index'

export const IndexPage: PageFullType<IndexPageLocaleContent> = {
   content: {
      mainP: 'I was 12 when I first interacted with software development by learning the basics of C# .NET.\n\nSince then, I dove deeper into it, and I\’m as aware as excited knowing this subject is constantly evolving.\n\nHere you may find what I learned, what I seek to master, and some projects that surround topics such as open-source, front-end, back-end, mobile, IoT, etc.',
      imageCaption: 'Hi!',
      objectivesText: {
         title: 'Keeping myself\n up-to-date &\n running',
         description: 'a.k.a.: my goals for this year',
         objectivesCaption: {
            title: 'Caption',
            done: 'Done 🎉',
            inProgress: 'Ongoing ...',
            todo: 'On standby / not started yet',
            hasSource: 'Press card for related info',
            hasSourceEG: 'Underlined',
         }
      }
   },
   mainProps: {
      header: {
         title: 'Hi! I code dinosaurs 🦖',
         description: 'Hi I\'m Victor, a full-stack developer and this is my portfolio!',
         backgroundAlt: 'Home page background.'
      },
      seo: {
         title: 'Home',
         description: 'I\'m Victor, a full-stack developer, passionate about computer science and the whole-stack!\n Check out my portfolio\'s homepage here, and learn more about me.',
         otherOgTags: [
            {
               property: 'og:image',
               content:  '/images/pages/index/IMG-20200226-WA0034-squared-resized.jpg',
            },
            {
               property: 'og:image:alt',
               content: 'Victor Gomez\'s Portfolio Homepage Image.',
            },
            {
               property: 'og:image:width',
               content: '100',
            },
            {
               property: 'og:image:height',
               content: '100',
            },
         ],
         twitterTags: {
            image: '/images/pages/index/IMG-20200226-WA0034-squared-resized.jpg',
            imageAlt: 'Victor Gomez\'s Portfolio Homepage Image.',
            cardType: 'summary'
         }
      }
   }
}