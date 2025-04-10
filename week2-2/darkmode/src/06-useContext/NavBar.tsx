import clsx from 'clsx';
import { THEME, useTheme } from './context/ThemeProvider';
import ThemeToggleButton from './ThemeToggleButton';


export default function NavBar() : React.ReactElement {
    const { theme } = useTheme();

    const isLightMode = theme === THEME.LIGHT;

    return (
    <nav className = {clsx(
        'p-4 w-full flex justify-end',
        isLightMode ? 'bg-white' : 'bg-black'
    )}>
        <ThemeToggleButton />
    </nav>
    )
}