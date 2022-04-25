export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6266b80bd3e368237504919f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-dzx5crgj',
                  apiId: '379fc39f-13f5-4722-873c-8dd0e95a61b7'
                },
                {
                  buildHookId: '6266b80c5bb629231fc1ae59',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-j6cf4zjr',
                  apiId: 'ecf23339-74be-4afd-981a-dbe105cb3e14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tearveng/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-j6cf4zjr.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
