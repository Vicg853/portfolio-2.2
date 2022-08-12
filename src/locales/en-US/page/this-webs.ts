import type { PageFullType } from '../../index'
import type { ThisWebSPageLocaleContent } from '@pages/this-site'

export const ThisWebS: PageFullType<ThisWebSPageLocaleContent> = {
   mainProps: {
      header: {
         title: 'This site',
         description: 'Find out more about my biggest project...',
         backgroundAlt: "This site's header's illustration",
      },
      seo: {
         title: 'This site',
         description: 'Find out more about my biggest and most important project...',
         keywords: ['project', 'portfolio', 'victor gomez', 'full-stack', 'developer', 'fullstack', 'backend', 'frontend', 'lab'],
      },
   },
   content: {
      onlySvc: {
         back: 'Go Back',
         runsOn: 'Runs on',
         serviceName: 'Service',
         techStack: 'Tech Stack',
         seo: {
            title: 'Service',
            description: 'Details about one of this webpage\'s services',
         }
      },
      pageDescription: 'The current website you’re looking at is a part of a bigger life-long project. So, I decided to dedicate an entire page just to it.\nYou can get to know some of the services that are a part of it, their status and details (only for some of them), along with their development progress.\n\nIn the future, I plan on expanding this project. After setting up Kubernetes Cluster that will serve as project hosting, CI/CD environment, etc, and migrating into it, I’ll probably use it for projects like home automation, natural language A.I. learning, and others...\n\nTo be fair, anything fun that comes to mind!\n\nApart from that, another objective of this project is having hands-on experience with complex/near-production environments for learning.',
      pageTitle: 'Tumex project',
      services: {
         title: 'Main services',
         caption: 'p.s.: press cards with underline title for more',
         cardDevStats: {
            title: 'Dev progress',
            draft: 'Draft',
            underDev: 'Under development',
            ready: 'Running',
            deprecated: 'Deprecated',
         },
         healthStats: {
            title: 'Status',
            maintenance: 'Maintenance',
            running: 'Up & running (tchu-tchu 🚂)',
            down: 'Down',
            unknown: 'Unknown',
         },
         version: 'Version',
      }
   }
}