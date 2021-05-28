import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkmodeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => setMounted(true), []);

  return (
    <div>
      <button
        aria-label="DarkmodeToggle"
        type="button"
        className="hover:opacity-50 rounded-none"
        onClick={changeTheme}
      >
        {mounted && (
          <>
            {theme === 'dark' ? (
              <FiMoon height={'25'} width={'25'} />
            ) : (
              <FiSun height={'25'} width={'25'} />
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default DarkmodeToggle;
