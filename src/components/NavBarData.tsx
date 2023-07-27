import * as FaIcons from 'react-icons/fa'

export const NavBarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <FaIcons.FaHome/>,
    },
    {
        title: 'Applications',
        path: '/applications',
        icon: <FaIcons.FaDesktop/>,
    },
    {
        title: 'Domains',
        path: '/domains',
        icon: <FaIcons.FaNetworkWired/>,
    },
    {
        title: 'Virtual Machines',
        path: '/vm',
        icon: <FaIcons.FaServer/>,
    },
]