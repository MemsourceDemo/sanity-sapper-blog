export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '60e8406ade8540d31b371bc1',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-makrw2w9',
                  apiId: 'ed796631-0d85-4955-868b-387f59b2b7a2'
                },
                {
                  buildHookId: '60e8406a922616ce681aebcc',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-n2pgy4z9',
                  apiId: 'd5ae3f24-e4eb-43f2-a092-17558feed747'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MemsourceDemo/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-n2pgy4z9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
