import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';

import {
  AdminIcon,
  AppleIcon,
  ArrowIcon,
  BackArrowIcon,
  BritishFlagIcon,
  CancelIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ConfirmLockIcon,
  CopyIcon,
  DashboardIcon,
  DetailedKeyIcon,
  DeviceDisconnectedIcon,
  DeviceIcon,
  DisconnectedWiresIcon,
  EditIcon,
  EmailIcon,
  FiltersIcon,
  HistoryIcon,
  IntegrationsIcon,
  InvitationIcon,
  KeyIcon,
  LockIcon,
  LogoutAllIcon,
  LogoutIcon,
  MoonIcon,
  PolishFlagIcon,
  PrivilegesGroupIcon,
  QuestionMarkIcon,
  RefreshIcon,
  SendEmailIcon,
  ServerDisconnectedIcon,
  SettingsIcon,
  StatisticsIcon,
  SunIcon,
  SystemThemeIcon,
  TickIcon,
  TrashIcon,
  UserActionsIcon,
  UserIcon,
  UsersIcon,
} from '.';

const IconsWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;

  > * {
    color: ${({ theme: { palette } }) => palette.primary.main};
    margin-right: 10px;
    width: 30px;
  }
`;

//
const AllIconsPanel = () => (
  <IconsWrapper>
    <DisconnectedWiresIcon />
    <DeviceDisconnectedIcon />
    <ServerDisconnectedIcon />
    <AppleIcon />
    <CopyIcon />
    <RefreshIcon />
    <IntegrationsIcon />
    <ChevronUpIcon />
    <DetailedKeyIcon />
    <KeyIcon />
    <UserActionsIcon />
    <LogoutAllIcon />
    <LogoutIcon />
    <PolishFlagIcon />
    <BritishFlagIcon />
    <SystemThemeIcon />
    <MoonIcon />
    <SunIcon />
    <AdminIcon />
    <ArrowIcon />
    <BackArrowIcon />
    <CancelIcon />
    <ChevronDownIcon />
    <ConfirmLockIcon />
    <DashboardIcon />
    <DeviceIcon />
    <EditIcon />
    <EmailIcon />
    <FiltersIcon />
    <HistoryIcon />
    <InvitationIcon />
    <LockIcon />
    <PrivilegesGroupIcon />
    <QuestionMarkIcon />
    <SendEmailIcon />
    <SettingsIcon />
    <StatisticsIcon />
    <TickIcon />
    <TrashIcon />
    <UserIcon />
    <UsersIcon />
  </IconsWrapper>
);

export default {
  title: 'Elements/Icons',
  component: AllIconsPanel,
} as Meta;

const Template: Story = (args) => <AllIconsPanel {...args} />;

export const Default = Template.bind({});
Default.args = {};
