import React from 'react'
import { Link } from 'ui'

export default () => (
  <div>
    <h1>Home</h1>
    <ul>
      <li>
        <Link as="/post/1" href="/post?id=1">
          Go to post #1
        </Link>
      </li>
      <li>
        <Link as="/post/2" href="/post?id=2">
          Go to post #2
        </Link>
      </li>
      <li>
        <Link href="/about">Go to about</Link>
      </li>
    </ul>
  </div>
)
