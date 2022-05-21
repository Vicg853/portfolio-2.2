import type { PageFullType } from '../../index'
import type { ThisWebSPageLocaleContent } from '@pages/this-site'

export const ThisWebS: PageFullType<ThisWebSPageLocaleContent> = {
   content: {
      onlySvc: {
         back: 'Voltar',
         runsOn: 'Hospedado com/em',
         serviceName: 'Serviço',
         techStack: 'Stack tecnológica',
      },
      pageDescription: 'Although I often ingress in third-party projects, my most remarkable one, which will never stop evolving, is my laboratory or as I call it the: “tumex-project”.\n\nCurrently, it only features this website and a couple of backend services hosted on Railway.app and Vercel... but I have bigger plans for it. I plan on building a self-managed Kubernetes cluster, that will provide a wide range of features (CI/CD environments, hosting, LXD VMs, etc).\n\nFrom that, I’ll probably develop storage services (a.k.a. google drive alternative), other useful services (e.g.: VPN), whole-home automation from scratch, a Jarvis-like A.I., and anything that comes to mind\n\nThe biggest advantage/reason of it all?\n\nI get to experience near-production original environments, solve challenges, broaden my knowledge and also have fun on the way. All without causing no one/no company any harm.',
      pageTitle: 'Projeto Tumex',
      services: {
         title: 'Principais serviços',
         caption: 'p.s.: pressione os cards para ver mais detalhes',
         cardDevStats: {
            title: 'Status de desenvolvimento',
            draft: 'Em rascunho',
            underDev: 'Em desenvolvimento',
            ready: 'Pronto para produção',
         },
         healthStats: {
            title: 'Status operacional',
            maintenance: 'Manutenção planejada',
            running: 'Operacional (tchu-tchu 🚂)',
            down: 'Indisponível',
            unknown: 'Desconhecido',
         },
         version: 'Versão',
      }
   }
}