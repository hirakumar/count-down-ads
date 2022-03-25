# countdown

> It will count down date and time with section visually

[![NPM](https://img.shields.io/npm/v/countdown.svg)](https://www.npmjs.com/package/countdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i count-down-ads
```

## Usage

```jsx
import React, { Component } from 'react'

import CountDownAds from 'countdownads'
import 'countdownads/dist/index.css'

class Example extends Component {
  render() {
    return (
      <CountDownAds
        startdate='2022-09-20'
        starttime='23:55:00'
        url='https://images.freeimages.com/images/large-previews/d9c/parrot-attack-1410608.jpg'
      />
    )
  }
}
```

## License

MIT © [hirakumar](https://github.com/hirakumar)
