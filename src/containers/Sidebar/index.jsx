
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';

const menuItems = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    key: '',
  },
  {
    label: 'Orders',
    icon: 'shopping_cart',
    key: 'orders',
  },
  {
    label: 'Customers',
    icon: 'people',
    key: 'customers',
  },
  {
    label: 'Reports',
    icon: 'bar_chart',
    key: 'reports',
  },
];

const Sidebar = () => (
  menuItems.map(item => (
    <ListItem button key={item.key} component={Link} href={`/dashboard/${item.key}`} color="inherit">
      <ListItemIcon>
        <Icon>{ item.icon }</Icon>
      </ListItemIcon>
      <ListItemText primary={item.label} />
    </ListItem>
  ))
);

export default Sidebar;
