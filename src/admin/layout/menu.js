const menuList = [
  { name: 'Menu1', url: '/admin' },
  { name: 'Menu2', children: [
    {
      name: 'SubMenu1', url: '/admin/submenu1'
    },
    {
      name: 'SubMenu2', url: '/admin/submenu2'
    },
  ] },
  { name: 'Menu3', url: '/admin/menu3' },
  { name: 'Menu4', url: '/admin/menu4' },
]


export const getCurrentBread = defaultKey => {
  let reply = ''
  menuList.forEach(({ name, url, children = [] }) => {
    if (children.length > 0) {
      children.forEach(({ url, name: name2 }) => {
        if (defaultKey === url) reply = `${ name } / ${ name2 }`
      })
    } else {
      if (defaultKey === url) reply = name
    }
  })
  return reply
}

export default menuList
