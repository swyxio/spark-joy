## Perf Tools

simple ways to invisibly provide joy to your user by optimizing performance.

### Image Optimization

- https://tinypng.com/
- https://resizeimage.net/
- https://squoosh.app/ (previously https://jakearchibald.github.io/svgomg/)
- https://hotpot.ai/icon_resizer Resize images and icons for iOS, Android, and other platforms.

### Sample meta tags with preconnects


```jsx
        <link rel="icon" type="image/png" href="/temporal-icon.png" />
        <meta name="theme-color" content="#317EFB"/>
        <meta property="title" content="Temporal.io: Build Invincible Apps" />
        <meta property="og:title" content="Temporal.io: Build Invincible Apps" />
        <meta name="description" content="Temporal is the open source runtime for running mission critical code that runs atop unreliable, distributed services at any scale." />
        <meta property="og:description" content="Temporal is the open source runtime for running mission critical code that runs atop unreliable, distributed services at any scale." />
        <meta property="og:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="og:url" content="http://temporal.io" />
        <meta property="twitter:title" content="Temporal.io: Build Invincible Apps" />
        <meta property="twitter:description" content="Temporal is the open source runtime for running mission critical code that runs atop unreliable, distributed services at any scale." />
        <meta property="twitter:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@temporaltech" />

        {/* resource hints */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://yt3.ggpht.com" />
        <link rel="preconnect" href="https://static.doubleclick.net" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://s.ytimg.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '[Tracking ID]');
              `,
          }}
        />
```

