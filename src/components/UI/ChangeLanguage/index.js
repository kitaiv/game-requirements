import React from 'react';
import {
  Avatar,
  ListItemDecorator,
  ListDivider,
  Select,
  Option
} from '@mui/joy';

const ChangeLanguage = () => {
  const languages = [
    {
      value: 1,
      name: 'Ukrainian',
      icon: process.env.PUBLIC_URL + '/assets/images/ukraine.png'
    },
    {
      value: 2,
      name: 'English',
      icon:
        process.env.PUBLIC_URL + '/assets/images/united-states-of-america.png'
    },
    {
      value: 3,
      name: 'Spanish',
      icon: process.env.PUBLIC_URL + '/assets/images/spain.png'
    }
  ];

  return (
    <Select
      defaultValue={languages[0].value}
      slotProps={{
        listbox: {
          sx: {
            '--List-decorator-size': '44px'
          }
        }
      }}
      sx={{
        '--List-decorator-size': '44px',
        minWidth: 200
      }}
    >
      {languages.map(({ value, icon, name }) => (
        <React.Fragment key={name + value}>
          <Option value={value}>
            <ListItemDecorator>
              <Avatar size="sm" src={icon} />
            </ListItemDecorator>
            {name}
          </Option>
          {value === 3 ? null : (
            <ListDivider role="none" inset="startContent" />
          )}
        </React.Fragment>
      ))}
    </Select>
  );
};

export default ChangeLanguage;
