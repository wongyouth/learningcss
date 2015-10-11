import React from 'react';

export default () => {
  return (
    <div className='lc-color-palette'>
      <div className="box">基础</div>
      <div className="box">加深</div>
      <div className="box">再加深</div>
      <div className="box">加亮</div>
      <div className="box">再加亮</div>
      <div className="box">加饱和</div>
      <div className="box">减饱和</div>
      <div className="box">相似1</div>
      <div className="box">相似2</div>
      <div className="box">相反1</div>
      <div className="box">相反2</div>

      <article>
        <ul>
          <h2>Key point</h2>
          <li>使用 Sass 来生成一组颜色调色板</li>
          <li>只要给定一个基本色，其他所有的颜色都可以计算</li>
          <li>使用到的方法：adjust-hue, darken, lighten, saturate, desaturate</li>
        </ul>
      </article>
    </div>

  )
}
