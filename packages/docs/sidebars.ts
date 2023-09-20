import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  guide: [
    {
      type: 'category',
      label: '安装',
      link: {
        type: 'doc',
        id: 'install/index',
      },
      items: [
        {
          type: 'category',
          label: '本机安装',
          link: {
            type: 'doc',
            id: 'install/native',
          },
          items: [
            'install/llqqnt',
            'install/llqqnt-airgap',
            'install/qqntim',
            'install/qqntim-airgap',
            'install/launcher',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '接入',
      link: {
        type: 'doc',
        id: 'connect/index',
      },
      items: [
        'connect/koishi',
        'connect/nonebot',
        'connect/avilla',
        'connect/kiramibot',
      ],
    },
  ],
  developProtocol: [
    {
      type: 'autogenerated',
      dirName: 'develop/protocol',
    },
  ],
  developNative: [
    {
      type: 'autogenerated',
      dirName: 'develop/native',
    },
  ],
  developJavaScript: [
    {
      type: 'autogenerated',
      dirName: 'develop/js',
    },
  ],
  more: [
    {
      type: 'autogenerated',
      dirName: 'more',
    },
  ],
}

export = sidebars
