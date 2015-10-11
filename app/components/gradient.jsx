import React from 'react';

export default () => {
  return (
    <div className="lc-gradient">
      <div className='colorWheel'></div>
      <article>
        <ul>
          <h2>Key point</h2>
          <li>使用 background 添加多个渐变(linear-gradient)</li>
          <li>使用 keyframe 在 backgroun-position 上加入动画</li>
          <li>在 keyframe 百分比上逐步指定各个渐变的位置，使每个渐变的开始时间不同，达到逐个进入的效果</li>
        </ul>
      </article>
    </div>
  )
};
