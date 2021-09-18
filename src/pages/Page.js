import React, { Component } from 'react'

import './sass/Page.scss'

export class Page extends Component {
  render () {
    const { content: raw, header } = this.props
    const content = []
    if (raw) {
      for (const section of Object.keys(raw)) {
        const val = raw[section].map(({ title, url, important, path, description }) => {
          return (
            <li className={`${important ? 'important' : ''} section-listing`} key={path}>
              {url
                ? <a href={url} target='_blank' rel='noreferrer'>{title.en}</a>
                : title.en}
              {description
                ? <> <br />{description.en}</>
                : null}
            </li>
          )
        })
        content.push(
          <div className='section'>
            <span className='section-name'>{section.toUpperCase()}</span>
            <ul>
              {val}
            </ul>
          </div>
        )
      }
    }
    return (
      <div className='page'>
        <h1>vegan for {header.en}</h1>
        <ul>
          {content}
        </ul>
      </div>
    )
  }
}
