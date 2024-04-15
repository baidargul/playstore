'use client'
import React from 'react'

type Props = {
    type?: 'install' | 'share'
    caption: 'Install on more devices' | 'Share'
    icon?: string
    iconColor?: string
}

const GoogleButton = (props: Props) => {
    const [style, setStyle] = React.useState("");
    const [iconColor, setIconColor] = React.useState("fill-[#01875f]");

    React.useEffect(() => {
        if (props.type === 'install') {
            setStyle("bg-[#01875f] p-2 px-4 rounded-lg font-medium text-lg text-white w-fit cursor-pointer");
        } else if (props.type === 'share') {
            setStyle(" p-2 px-4 rounded-lg font-medium text-[#01875f] w-fit cursor-pointer hover:bg-[#F6FAFE] rounded-md");
        }

        if (props.iconColor !== undefined) {
            setIconColor(`fill-[${props.iconColor}]`);
        }
    }, [props.type]);

    return (
        <div className={style}>
            <div className='flex gap-1 items-center'>
                <div className={props.icon === undefined ? "hidden" : ""}>
                    <svg width="24" height="24" viewBox="0 0 24 24" className={`f70z8e fill-[#01875f] ${iconColor}`}>
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                    </svg>
                </div>
                <div>
                    {props.caption}
                </div>
            </div>
        </div>
    );
}

export default GoogleButton;
