module.exports = {
    siteMetadata: {
        title: `Title string from siteMetadata!!!`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                // path: `${__dirname}/src/`,
                path: `${__dirname}/blog`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                // includePaths: ["absolute/path/a", "absolute/path/b"],
                precision: 8
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`autoprefixer`)({}),
                    require(`cssNano`)({})
                ]
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`
    ]
};
