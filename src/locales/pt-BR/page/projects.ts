import type { PageFullType } from '../../index'
import type { ProjectsPageStaticLocalesSource } from '@pages/projects'

export const ProjectsPage: PageFullType<ProjectsPageStaticLocalesSource> = {
   mainProps: {
      header: {
         title: 'Projects',
         description: 'A collection of my projects',
         backgroundAlt: "Project's page background",
      }
   },
   content: {
      mainParagraphTitle: 'yarn run projects',
      mainParagraph: "Como já declarado, desde meus 12 anos, eu me invisto em desenvolvimento de software e ciência da computação, não só conceitualmente, mas também com projetos práticos.\n\nListar todos os meus projetos aqui, não combinaria corretamente com esse portfólio, então estarei desenvolvendo um arquivo com todos meus projetos, caso queira consultar TODOSSSSS os seus.\n\nAinda assim, aqui você poderá consultar os meus favoritos. Ainda mais, para cada projeto há uma lista das suas principais tecnologias/frameworks/bibliotecas/etc, seu escopo, área de atuação e uma descrição, acompanhada do nome (obviamente…).\n\nEspero que goste deles o tanto quanto gostei de desenvolver eles 😄!"
   }
}