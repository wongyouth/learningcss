import React from 'react';

export default () => {
  return (
    <div className="lc-background-image">
      <div className="box"></div>

      <article>
        <h2>Key point</h2>
        <li>使用 background-image 和 background-size 组合来形成条纹</li>
        <li>条纹效果使用两张背景图的不同透明度来达到</li>
        <li>使用 background-color 设置降级时的颜色，并且改变这一个颜色就可以改变整个效果</li>
      </article>
    </div>
  );
};
