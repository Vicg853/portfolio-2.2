import type { PageFullType } from '../../index'
import type { ThisWebSPageLocaleContent } from '@pages/this-site'

export const ThisWebS: PageFullType<ThisWebSPageLocaleContent> = {
   content: {
      onlySvc: {
         back: 'Go Back',
         runsOn: 'Runs on',
         serviceName: 'Service',
         techStack: 'Tech Stack',
      },
      pageDescription: 'The current website you’re looking at is a part of a bigger life-long project. So, I decided to dedicate an entire page just to it.\nYou can get to know some of the services that are a part of it, their status and details (only for some of them), along with their development progress.\n\nIn the future, I plan on expanding this project. After setting up Kubernetes Cluster that will serve as project hosting, CI/CD environment, etc, and migrating into it, I’ll probably use it for projects like home automation, natural language A.I. learning, and others...\n\nTo be fair, anything fun that comes to mind!\n\nApart from that, another objective of this project is having hands-on experience with complex/near-production environments for learning.',
      pageTitle: 'Tumex project',
      services: {
         title: 'Main services',
         caption: 'p.s.: press a card to get more info',
         cardDevStats: {
            title: 'Dev progress',
            draft: 'Draft',
            underDev: 'Under development',
            ready: 'Running',
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