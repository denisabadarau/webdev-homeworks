module.exports = {
    siteMetadata: {
        title: `cyte`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/'
            },
            __key: 'pages'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown',
                path: './src/markdown/'
            },
            __key: 'markdown'
        },
        `gatsby-transformer-remark`,
    ]
};
