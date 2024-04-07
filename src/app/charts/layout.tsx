import { ReactNode } from "react";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export default function ChartsLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <ReactQueryProvider>
                <div className="flex w-full h-dvh place-content-center pt-14">
                    <div className="w-8/12 h-full">
                        {children}
                    </div>
                    <div className="w-3/12 h-full">
                        {/*sideBar*/}
                    </div>
                </div>
            </ReactQueryProvider>
        </>
    )
}