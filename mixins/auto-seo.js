export default {
  head() {
    // https://github.com/AlekseyPleshkov/nuxt-social-meta
    const defaults = {
      url: 'https://deraedta.be',
      title: 'Playground of Ann Deraedt',
      site: 'Deraedta.be',
      description: `"Often when you think you're at the end of something, you're at the beginning of something else." -- Fred Rodgers`,
      img: '/img/android-chrome-192x192.png',
      locale: 'nl_BE',
      twitter: '@deraedta',
      twitter_card: 'summary',
      themeColor: '#80A5A9',
    }
    const values = [
      {
        name: 'title',
        content: _.get(this, 'page.meta.title', defaults.title),
      },
      {
        name: 'description',
        content: _.get(this, 'page.meta.description', defaults.description),
      },
      {
        name: 'author',
        content: _.get(this, 'page.meta.social.author', defaults.author),
      },
      {
        name: 'apple-mobile-web-app-title',
        content: _.get(this, 'page.meta.title', defaults.title),
      },

      // Facebook & LinkedIn
      {
        property: 'og:title',
        content: _.get(this, 'page.meta.title', defaults.title),
      },
      {
        property: 'og:site_name',
        content: _.get(this, 'page.meta.site', defaults.site),
      },
      {
        property: 'og:description',
        content: _.get(this, 'page.meta.description', defaults.description),
      },
      {
        property: 'og:type',
        content: _.get(this, 'page.meta.social.type', defaults.type),
      },
      {
        property: 'og:url',
        content: _.get(this, 'page.meta.social.url', defaults.url),
      },
      {
        property: 'og:image',
        content: _.get(this, 'page.meta.social.image', defaults.image),
      },
      {
        property: 'og:locale',
        content: _.get(this, 'page.meta.locale', defaults.locale),
      },

      // Twitter
      {
        name: 'twitter:card',
        content: _.get(
          this,
          'page.meta.social.twitter.card',
          defaults.twitter_card
        ),
      },
      {
        name: 'twitter:site',
        content: _.get(this, 'page.meta.social.site', defaults.site),
      },
      {
        name: 'twitter:creator',
        content: _.get(
          this,
          'page.meta.social.twitter.creator',
          defaults.twitter
        ),
      },
      {
        name: 'twitter:title',
        content: _.get(this, 'page.meta.title', defaults.title),
      },
      {
        name: 'twitter:description',
        content: _.get(this, 'page.meta.description', defaults.description),
      },
      {
        name: 'twitter:image',
        content: _.get(this, 'page.meta.social.image', defaults.image),
      },
    ]

    const names = _.map(
      _.filter(values, (o) => !_.isEmpty(o.content) && !_.isNil(o.name)),
      (tag) => {
        return {
          hid: tag.name,
          name: tag.name,
          content: tag.content,
        }
      }
    )

    const properties = _.map(
      _.filter(values, (o) => !_.isEmpty(o.content) && !_.isNil(o.property)),
      (tag) => {
        return {
          hid: tag.property,
          property: tag.property,
          content: tag.content,
        }
      }
    )

    return {
      title: values.title,
      meta: _.concat(names, properties),
    }
  },
}
