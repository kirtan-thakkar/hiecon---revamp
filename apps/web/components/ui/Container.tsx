// this is the container under which all main content is wrapped, if it feels that you need for space try to increase the max-w-7xl to max-w-8xl or max-w-9xl or if you want to make it full width then remove the max-w-7xl class and add w-full class or if you want to decrease the width then you can use max-w-6xl or max-w-5xl or max-w-4xl :) 
export default function Container({ children }: { children: React.ReactNode }) {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}