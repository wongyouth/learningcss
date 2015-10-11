import React from 'react';

export default () => {
  return (
    <div className='lc-equal-height-column'>
      <div className="wrapper">
        <div className="header">
          <h2>Header</h2>
        </div>
        <div className="sidebar">
          We style html with a background to prevent the browser from painting the background color of body outside our layout.
We style body with auto margin to center the layout; the width is set using percentage. The background declaration is for #main.
We style the background of #header to mask the background color of body (the same goes for #footer).
The background color of #sidebar matches the border color of #main. This is the trick we use to make our columns appear as being of equal height.
The footer clears any previous float so it stays below the columns, at the bottom of the layout.
        </div>
        <div className="content">
          overflow and zoom on #header and #footer make these elements new block formatting contexts.
For #main we use float rather than overflow to prevent potential issues if we had to offset some nested content.
The negative margin keeps #main into place because now that it is a float, its border box comes next to the margin box of #sidebar (the negative vlaue must match the dimension of the said box).
If you look at the second step, you’ll see that the border of #main hides #sidebar. This is because of the stacking context. In the flow (tree order), #main comes after #sidebar so the former overlaps the latter.
Positioning #sidebar brings it up in the stack.
Note: if you make #main a new containing block you’ll revert to the original stack order. In this case, you’ll need to use z-index to keep #sidebar on top of #main.
        </div>
        <div className="footer">
          <h2>Footer</h2>
        </div>
      </div>

      <article>
        <h2>Key point</h2>
        <li>主显示区（Main）颜色在父层指定</li>
        <li>Sidebar 颜色与 main 区的左边框颜色一致</li>
        <li>Sidebar, main 都需要 float, sidebar 还需要 负值的 margin-right</li>
      </article>
      <nav className="refs">
        <a href="http://www.smashingmagazine.com/2010/11/equal-height-columns-using-borders-and-negative-margins-with-css/">Equal Height Column Layouts with Borders and Negative Margins in CSS</a>
      </nav>
    </div>
  )
}
