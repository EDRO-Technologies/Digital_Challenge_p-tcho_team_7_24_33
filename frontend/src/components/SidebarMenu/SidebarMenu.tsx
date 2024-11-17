import { Menu, Modal, Typography, message } from "antd";
import { useContexts, useGetAuthUser } from "hooks";
import { Link } from "react-router-dom";

import {
  ControlOutlined,
  DashboardOutlined,
  LineChartOutlined,
  LoginOutlined,
  LogoutOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Auth } from "components/Auth/Auth";

import { useSignOutMutation } from "store/api/auth/auth-api";

import { RouterPath } from "configs/route-config";

import styles from "./SidebarMenu.module.scss";

export const SidebarMenu = () => {
  const {
    authModalContext: { isAuthModalOpen, setIsAuthModalOpen },
  } = useContexts();

  const [logout] = useSignOutMutation();
  const { authUserData } = useGetAuthUser();

  const handleLogout = () => {
    logout();
    message.success("Вы успешно вышли из аккаунта.");
  };

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const menuItems = [
    {
      key: 0,
      label: <Link to={RouterPath.wells}>Скважины</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: 1,
      label: (
        <Link to={RouterPath.wells_analytics}>Аналитика по скважинам</Link>
      ),
      icon: <ControlOutlined />,
    },
    {
      key: 2,
      label: (
        <Link to={RouterPath.oil_production_forecast}>
          Прогноз добычи нефти
        </Link>
      ),
      icon: <LineChartOutlined />,
    },
    {
      key: 3,
      label: <Link to={RouterPath.notifications}>Уведомления</Link>,
      icon: <NotificationOutlined />,
    },
    {
      key: 4,
      label: <Link to={RouterPath.account}>Аккаунт</Link>,
      icon: <UserOutlined />,
    },
    {
      key: 5,
      label: authUserData ? (
        <Typography.Text>Выйти</Typography.Text>
      ) : (
        <Typography.Text>Войти</Typography.Text>
      ),
      icon: authUserData ? <LogoutOutlined /> : <LoginOutlined />,
      onClick: authUserData ? handleLogout : handleOpenAuthModal,
    },
  ];

  return (
    <>
      <Menu className={styles.sidebarMenuWrapper} items={menuItems} />
      <Modal
        open={isAuthModalOpen}
        footer={null}
        onCancel={handleCloseAuthModal}
      >
        <Auth />
      </Modal>
    </>
  );
};
