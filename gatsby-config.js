module.exports = {
    siteMetadata: {
        title: `Title string from siteMetadata!!!`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                // path: `${__dirname}/src/`,
                path: `${__dirname}/blog`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`
    ]
}