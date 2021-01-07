import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';

function Layout({ setLocale }) {
    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);
    const [clickGit, setClickGit] = useState(false);
    // console.log("проверка работы Layout")
    // console.log(toggled)
    // console.log(setToggled)

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
        console.log("кликнули и что то произошло в handleCollapsedChange")
    };

    const handleRtlChange = (checked) => {
        setRtl(checked);
        setLocale(checked ? 'ar' : 'en');
        console.log("кликнули и что то произошло в handleRtlChange")
    };
    const handleImageChange = (checked) => {
        setImage(checked);
        console.log("кликнули и что то произошло в handleImageChange")
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
        console.log("кликнули и что то произошло в handleToggleSidebar")
    };
    const clickGitUp = (value) => {
        setClickGit(value);
        console.log("кликнули и что то произошло в clickGitUp")
    };

    return (
        <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
            <Aside
                image={image}
                collapsed={collapsed}
                rtl={rtl}
                toggled={clickGit}
                // handleToggleSidebar={handleToggleSidebar}
                clickGitUp={clickGitUp}

            />
            <Main
                image={image}
                toggled={toggled}
                collapsed={collapsed}
                rtl={rtl}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                handleRtlChange={handleRtlChange}
                handleImageChange={handleImageChange}

            />
        </div>
    );
}

export default Layout;