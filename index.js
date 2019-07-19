const shell = require('shelljs')
const fs = require('fs')

// Uncomment to download
const egghead = [
  {
    title: 'Set up Yarn Workspaces for Gatsby Theme Development',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-set-up-yarn-workspaces-for-gatsby-theme-development-6be4069539/gatsby-set-up-yarn-workspaces-for-gatsby-theme-development-6be4069539.m3u8',
  },
  {
    title: 'Add Static Data to a Gatsby Theme',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-add-static-data-to-a-gatsby-application-092d5c2c69/gatsby-add-static-data-to-a-gatsby-application-092d5c2c69.m3u8',
  },
  {
    title:
      'Create a Data Directory in Gatsby using the onPreBootstrap lifecycle',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-create-a-data-directory-in-gatsby-using-the-onprebootstrap-lifecycle-7878e34f03/gatsby-create-a-data-directory-in-gatsby-using-the-onprebootstrap-lifecycle-7878e34f03.m3u8',
  },
  {
    title: 'Set up to Create Data Driven Pages in Gatsby',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-create-data-driven-pages-in-gatsby-with-createpages-40df3c6cf7/gatsby-create-data-driven-pages-in-gatsby-with-createpages-40df3c6cf7.m3u8',
  },
  {
    title: 'Create Data Driven Pages in Gatsby with GraphQL and createPages',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-display-data-in-react-provided-in-gatsby-with-graphql-679f220913/gatsby-display-data-in-react-provided-in-gatsby-with-graphql-679f220913.m3u8',
  },
  {
    title: 'Display Sorted Data with useStaticQuery in Gatsby',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-display-sorted-data-with-usestaticquery-in-gatsby-eff420a199/gatsby-display-sorted-data-with-usestaticquery-in-gatsby-eff420a199.m3u8',
  },
  {
    title:
      'Display and Query Data by id with Gatsby context and useStaticQuery',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-display-and-query-data-by-id-with-gatsby-context-and-usestaticquery-6ce9e9519e/gatsby-display-and-query-data-by-id-with-gatsby-context-and-usestaticquery-6ce9e9519e.m3u8',
  },
  {
    title: 'Style and Format Dates in React',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/react-style-and-format-dates-in-react-1c3d4a5d48/react-style-and-format-dates-in-react-1c3d4a5d48.m3u8',
  },
  {
    title: 'Configure a Gatsby Theme to Take Options',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-configure-a-gatsby-theme-to-take-options-e46acb71ab/gatsby-configure-a-gatsby-theme-to-take-options-e46acb71ab.m3u8',
  },
  {
    title: 'Make Gatsby Themes extendable with gatsby-theme-ui',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-make-gatsby-themes-extendable-with-gatsby-theme-ui-480fdb4744/gatsby-make-gatsby-themes-extendable-with-gatsby-theme-ui-480fdb4744.m3u8',
  },
  {
    title: 'Use and Override a Theme in Gatsby with Component Shadowing',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-override-a-theme-in-gatsby-with-component-shadowing-9f2e871220/gatsby-override-a-theme-in-gatsby-with-component-shadowing-9f2e871220.m3u8',
  },
  {
    title: 'Publish a Gatsby Theme to npm',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-publish-a-gatsby-theme-to-npm-1e7bfa6e81/gatsby-publish-a-gatsby-theme-to-npm-1e7bfa6e81.m3u8',
  },
  {
    title: 'Consume a Theme in a Gatsby Application',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-consume-a-theme-in-a-gatsby-application-c3f7d26e96/gatsby-consume-a-theme-in-a-gatsby-application-c3f7d26e96.m3u8',
  },
  {
    title: 'Use Component Shadowing to Override Gatsby Theme Components ',
    url:
      'https://d2c5owlt6rorc3.cloudfront.net/gatsby-use-component-shadowing-to-override-gatsby-theme-components-e604c02708/gatsby-use-component-shadowing-to-override-gatsby-theme-components-e604c02708.m3u8',
  },
]

const folderName = 'Egghead'

fs.mkdir(folderName, () => {
  egghead.map((video, i) => {
    console.log(`Downloading ${i} of ${egghead.length} - "${video.title}.mp4"`)
    shell.exec(
      `ffmpeg -i ${video.url} -c copy -bsf:a aac_adtstoasc "${folderName}/${i +
        1}. ${video.title}.mp4"`,
      {
        /*silent: true*/
      },
    )
  })
})
