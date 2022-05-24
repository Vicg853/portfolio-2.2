import type { PageFullType } from '../../index'
import type { ThisWebSPageLocaleContent } from '@pages/this-site'

export const ThisWebS: PageFullType<ThisWebSPageLocaleContent> = {
   mainProps: {
      header: {
         title: 'Este site',
         description: 'Saiba mais sobre um das minhas maiores realizações...',
         backgroundAlt: "Ilustração da página sobre este site.",
      },
      seo: {
         title: 'Este site',
         description: 'Saiba mais sobre um dos meus mais importantes e longos projetos...',
         keywords: ['portfólio', 'site', 'desenvolvimento', 'full-stack', 'developer', 'computer science', 'fullstack', 'backend', 'frontend', 'laboratorio'],
      }
   },
   content: {
      onlySvc: {
         back: 'Voltar',
         runsOn: 'Hospedado com/em',
         serviceName: 'Serviço',
         techStack: 'Stack tecnológica',
         seo: {
            title: 'Serviço',
            description: 'Detalhes de um dos serviços constituintes deste site',
         }
      },
      pageDescription: 'O site atual que você está acessando, faz parte de um projeto maior de duração indeterminada. Então, eu tomei a decisão de dedicar a ele uma página inteira.\nVocê pode consultar aqui alguns dos serviços disponíveis que o constituem, seus status, progresso de desenvolvimento, e outros detalhes (somente disponíveis para alguns).\n\nTenho planos para uma expansão desse projeto. Após configurar o Cluster Kubernetes que providenciará hospedagem para projetos, ambiente para CI/CD, etc, e finalizar a migração, farei uso deste para projetos como automação residencial, I.A. de processamento de linguagem natural e outros…\n\nSendo sincero, qualquer projeto interessante que vier em mente!\n\nFora isso, outro objetivo desse projeto é ter experiências em ambientes complexos/próximos a produção para aprendizado.',
      pageTitle: 'Projeto Tumex',
      services: {
         title: 'Principais serviços',
         caption: 'p.s.: pressione cartões com título sublinhado para mais detalhes',
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