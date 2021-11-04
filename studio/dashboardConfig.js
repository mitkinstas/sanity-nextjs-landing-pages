export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618435c4b165aa48c1ac269d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m7xng19t',
                  apiId: '9e98a4e6-966d-475f-9d8a-1166f882a41e'
                },
                {
                  buildHookId: '618435c4bde7a5488757cddf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xnstzxmd',
                  apiId: 'a8e9f898-c85c-4e05-9dce-a8f4d4a4a88e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mitkinstas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xnstzxmd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
