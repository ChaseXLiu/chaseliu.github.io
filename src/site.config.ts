import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // [基础配置]
  /** 网站标题。将用于元数据和浏览器标签标题。 */
  title: '山话海语',
  /** 将用于首页和版权声明 */
  author: '刘辰旭',
  /** 网站的描述元数据。可用于页面元数据。 */
  description: 'Stay hungry, stay foolish',
  /** 网站的默认图标，应该是 `public/` 目录下的图片路径。 */
  favicon: '/favicon/favicon.ico',
  /** 网站的默认社交卡片图片，应该是 `public/` 目录下的图片路径。 */
  socialCard: '/images/social-card.png',
  /** 指定本站的默认语言。 */
  locale: {
    lang: 'zh-CN',
    attrs: 'zh_CN',
    // 日期语言环境
    dateLocale: 'zh-CN',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** 设置在主页显示的 Logo 图片。 */
  logo: {
    src: '/src/assets/avatar.png',
    alt: '头像'
  },

  titleDelimiter: '•',
  prerender: true, // 禁用预渲染时不支持 pagefind 搜索
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // 仍在测试中
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** 配置网站的头部。 */
  header: {
    menu: [
      { title: '博客', link: '/blog' },
      { title: '关于', link: '/about' }
    ]
  },

  /** 配置网站的页脚。 */
  footer: {
    // 年份格式
    year: `© ${new Date().getFullYear()}`,
    // year: `© 2019 - ${new Date().getFullYear()}`,
    links: [],
    /** 启用在网站页脚显示 “Astro & Pure theme powered” 链接。 */
    credits: true,
    /** 本站社交媒体账户的可选详细信息。 */
    social: { github: 'https://github.com/cworld1/astro-theme-pure' }
  },

  // [内容]
  content: {
    /** 外部链接配置 */
    externalLinks: {
      content: ' ↗',
      /** 外部链接元素的属性 */
      properties: {
        style: 'user-select:none'
      }
    },
    /** 博客分页大小（可选） */
    blogPageSize: 8,
    // 目前支持 weibo, x, bluesky
    share: []
  }
}

export const integ: IntegrationUserConfig = {
  // [链接]
  // https://astro-pure.js.org/docs/integrations/links
  links: {
    // 友链日志
    logbook: [
      { date: '2025-03-16', content: '站点建立' },
      { date: '2025-03-16', content: '更新了第一篇文章' },
      { date: '2025-03-16', content: '欢迎交换友链' }
    ],
    // 你的链接信息
    applyTip: [
      { name: '名称', val: theme.title },
      { name: '描述', val: theme.description || '暂无' },
      { name: '链接', val: 'https://astro-pure.js.org/' },
      { name: '头像', val: 'https://astro-pure.js.org/favicon/favicon.ico' }
    ],
    // 在 `public/avatars/` 中缓存头像以提升用户体验。
    cacheAvatar: false
  },
  // [搜索]
  pagefind: false,
  // 在页脚添加随机格言（默认在主页页脚）
  // 参见：https://astro-pure.js.org/docs/integrations/advanced#web-content-render
  // [格言]
  quote: {
    // - 一言 (Hitokoto)
    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80
    // server: 'https://v1.hitokoto.cn/?c=i',
    // target: `(data) => (data.hitokoto || 'Error')`
    // - Quoteable
    // https://github.com/lukePeavey/quotable
    // server: 'http://api.quotable.io/quotes/random?maxLength=60',
    // target: `(data) => data[0].content || 'Error'`
    // - DummyJSON
    server: 'https://dummyjson.com/quotes/random',
    target: `(data) => (data.quote.length > 80 ? \`\${data.quote.slice(0, 80)}...\` : data.quote || 'Error')`
  },
  // [排版]
  // https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base',
    // 引用块的字体样式 `normal` / `italic`（排版中默认为 italic）
    blockquoteStyle: 'italic',
    // 行内代码块的样式 `code` / `modern`（排版中默认为 code）
    inlineCodeBlockStyle: 'modern'
  },
  // [灯箱]
  // 一个可以添加缩放效果的灯箱库
  // https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: true, // 禁用它将不会加载整个库
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // 评论系统
  waline: {
    enable: false,
    // 服务端链接
    server: 'https://astro-theme-pure-waline.arthals.ink/',
    // 参考 https://waline.js.org/en/guide/features/emoji.html
    emoji: ['bmoji', 'weibo'],
    // 参考 https://waline.js.org/en/reference/client/props.html
    additionalConfigs: {
      // search: false,
      pageview: true,
      comment: true,
      locale: {
        reaction0: '喜欢',
        placeholder: '欢迎评论。（填写邮箱可收到回复，无需登录）'
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: '协议内容',
  list: [
    {
      title: '隐私政策',
      link: '/terms/privacy-policy'
    },
    {
      title: '服务条款',
      link: '/terms/terms-and-conditions'
    },
    {
      title: '版权声明',
      link: '/terms/copyright'
    },
    {
      title: '免责声明',
      link: '/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config
