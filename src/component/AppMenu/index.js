import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Menus from '../../router/routerConfig';
import './index.less';

// const SubMenu = Menu.SubMenu;

const newMenu = Menus.slice(0, -1)
class AppMenu extends Component {
  state = {
    current: 'mail',
    openKeys: ['/'],
    selectedKeys: ['/'],
  };

  getDefaultOpenKeys(path) {
    let pathArray = path.split('/');
    const selectedKeys = '/' + pathArray.slice(1).join('/');
    let key = pathArray.splice(1, 1).join('/');
    // debugger
    this.setState({
      openKeys: ['/' + key],
      selectedKeys: [selectedKeys],
    });
  }

  componentWillReceiveProps(next) {
    this.getDefaultOpenKeys(next.location.pathname);
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys && this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys: [latestOpenKey] });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  handleClick = e => {
    if (e.key.indexOf('foregin') < 0) {
      this.setState({
        current: e.key,
      });
    }
  };

  render() {
    // const {location} = this.props;
    const location = window.location;
    return (
      <Menu
        className="menu-container"
        defaultSelectedKeys={
          newMenu.map(item => {
            // debugger
            if (location.pathname.includes(item.path)) {
              return item.path;
            }
            return null;
          })
            .filter(res => res !== undefined)
        }
        openKeys={this.state.openKeys}
        onClick={this.handleClick}
        onOpenChange={this.onOpenChange.bind(this)}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {newMenu
          // .filter(d => this.checkModuleP(appReducer.config.auth, d))
          .map((route, i) => {
            if (route.isShow !== false) {
              // if (route.routes && route.routes.length > 0) {
              //   return route.showSub ? (
              //     <SubMenu
              //       key={route.path}
              //       title={
              //         <span>
              //           <Icon type={route.icon} />
              //           <span>{route.name}</span>
              //         </span>
              //       }
              //     >
              //       {route.routes
              //         // .filter(d => checkModule(appReducer.config.auth, d.id)) 过滤有权限的菜单
              //         .map(d =>
              //           d.isShow !== false ? (
              //             <Menu.Item key={d.path}>
              //               <NavLink
              //                 to={{
              //                   pathname: [route.path, d.path].join('/'),
              //                   state: { refresh: true },
              //                 }}
              //               >
              //                 {d.icon && <Icon type={d.icon} />}
              //                 <span>{d.name}</span>
              //               </NavLink>
              //             </Menu.Item>
              //           ) : null
              //         )}
              //     </SubMenu>
              //   ) : (
              //     <Menu.Item key={route.path}>
              //       {route.foreignSite ? (
              //         <a href={route.foreignSite.path} target="_blank" rel="noopener noreferrer">
              //           {route.name}
              //         </a>
              //       ) : (
              //         <NavLink to={{ pathname: route.path, state: { refresh: true } }}>
              //           {route.icon && <Icon type={route.icon} />} <span>{route.name}</span>
              //         </NavLink>
              //       )}
              //     </Menu.Item>
              //   );
              // } else {
              return (
                <Menu.Item key={i}>
                  {route.foreignSite ? (
                    <a href={route.foreignSite.path} target="_blank" rel="noopener noreferrer">
                      {route.name}
                    </a>
                  ) : (
                      <NavLink to={{ pathname: route.path, state: { refresh: true } }}>
                        {route.icon && <Icon type={route.icon} />} <span>{route.name}</span>
                      </NavLink>
                    )}
                </Menu.Item>
              );
              // }
            }
            return null;
          })}
      </Menu>
    );
  }
}

export default withRouter(AppMenu);
