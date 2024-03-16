import { ReactNode } from "react";

export default function NewsLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex w-full h-dvh place-content-center pt-14">
                <div className="w-8/12 h-full">
                    {children}
                </div>
                <div className="w-3/12 h-full">
                    {/*sideBar*/}
                </div>
            </div>
        </>
    )
}